/* Shepherd — app.js
 * Static, no backend, no network calls. All user data lives in localStorage.
 */
(function () {
  "use strict";

  /* ---------- storage ---------- */
  var PREFIX = "shepherd.";
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) {}
  }
  function uid() { return "id" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function todayKey(d) {
    d = d || new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function $(id) { return document.getElementById(id); }
  function fmtDate(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  }

  /* ---------- state ---------- */
  var state = {
    doneDays: load("doneDays", {}),        // { "2026-11-17": 3 } date -> devotion day number
    prayers: load("prayers", []),          // {id,text,category,answered,created}
    volunteers: load("volunteers", null),  // null -> seed defaults on first run
    planDone: load("planDone", {}),        // {1:true}
    reviewQueue: load("reviewQueue", []),  // {id,question,answer,ref,verse,status,note,created}
    devotionDay: null                      // currently viewed devotion day (1..30)
  };
  if (!state.volunteers) {
    state.volunteers = DEFAULT_VOLUNTEERS.slice();
    save("volunteers", state.volunteers);
  }

  /* ---------- navigation ---------- */
  var tabs = ["devotion", "ask", "prayer", "serving", "plan", "review"];
  function showTab(name) {
    tabs.forEach(function (t) {
      var sec = $("tab-" + t), btn = document.querySelector('[data-tab="' + t + '"]');
      if (sec) sec.classList.toggle("active", t === name);
      if (btn) btn.classList.toggle("active", t === name);
    });
    if (name === "review") renderReview();
    if (name === "serving") renderServing();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.querySelectorAll("[data-tab]").forEach(function (b) {
    b.addEventListener("click", function () { showTab(b.getAttribute("data-tab")); });
  });

  /* ---------- streak ---------- */
  function currentStreak() {
    var done = state.doneDays, streak = 0, d = new Date();
    if (!done[todayKey(d)]) d.setDate(d.getDate() - 1); // allow yesterday as start
    while (done[todayKey(d)]) { streak++; d.setDate(d.getDate() - 1); }
    return streak;
  }
  function renderStats() {
    $("stat-streak").textContent = currentStreak();
    $("stat-prayers").textContent = state.prayers.filter(function (p) { return p.answered; }).length + " answered";
    var planTotal = READING_PLAN.length;
    var planDoneCount = READING_PLAN.filter(function (r) { return state.planDone[r.day]; }).length;
    $("stat-plan").textContent = planDoneCount + " / " + planTotal + " days";
    var pending = state.reviewQueue.filter(function (q) { return q.status === "pending"; }).length;
    $("stat-review").textContent = pending + " pending";
    var badge = $("review-badge");
    if (badge) badge.style.display = pending ? "" : "none";
    if (badge) badge.textContent = pending;
  }

  /* ---------- devotion ---------- */
  function dayOfYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    return Math.floor((date - start) / 86400000);
  }
  function todaysDevotionDay() { return (dayOfYear(new Date()) % 30) + 1; }
  function renderDevotion() {
    var day = state.devotionDay || todaysDevotionDay();
    state.devotionDay = day;
    var d = DEVOTIONS[day - 1];
    $("dev-day-label").textContent = "Day " + d.day + " of 30";
    $("dev-title").textContent = d.title;
    $("dev-verse").textContent = "\u201C" + d.verse + "\u201D";
    $("dev-ref").textContent = d.ref + " (KJV)";
    $("dev-reflection").textContent = d.reflection;
    $("dev-prayer").textContent = d.prayer;
    $("dev-journal").textContent = d.journal;
    var done = !!state.doneDays[todayKey()] && state.doneDays[todayKey()] === day;
    var btn = $("dev-done-btn");
    btn.textContent = done ? "\u2713 Completed today" : "Mark as completed";
    btn.classList.toggle("done", done);
    btn.disabled = done;
    $("dev-streak").textContent = currentStreak() + " day streak";
    $("dev-date").textContent = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  }
  $("dev-prev").addEventListener("click", function () {
    state.devotionDay = ((state.devotionDay || todaysDevotionDay()) + 28) % 30 + 1;
    renderDevotion();
  });
  $("dev-next").addEventListener("click", function () {
    state.devotionDay = ((state.devotionDay || todaysDevotionDay()) % 30) + 1;
    renderDevotion();
  });
  $("dev-today").addEventListener("click", function () {
    state.devotionDay = todaysDevotionDay();
    renderDevotion();
  });
  $("dev-done-btn").addEventListener("click", function () {
    var day = state.devotionDay || todaysDevotionDay();
    state.doneDays[todayKey()] = day;
    save("doneDays", state.doneDays);
    renderDevotion(); renderStats();
    showToast("Well done — Day " + day + " complete. Keep the streak going tomorrow!");
  });

  /* ---------- Ask Shepherd ---------- */
  var STOPWORDS = { what:1, when:1, where:1, which:1, who:1, whom:1, whose:1, why:1, how:1,
    is:1, are:1, was:1, were:1, be:1, been:1, do:1, does:1, did:1, can:1, could:1,
    should:1, would:1, will:1, the:1, a:1, an:1, and:1, or:1, of:1, to:1, in:1, on:1,
    for:1, with:1, about:1, i:1, me:1, my:1, you:1, your:1, it:1, its:1, this:1,
    that:1, there:1, here:1, please:1, tell:1, ask:1, get:1 };
  function tokenize(q) {
    return q.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(function (w) { return w.length > 2 && !STOPWORDS[w]; });
  }
  function scoreEntry(entry, qLower, tokens) {
    var score = 0;
    entry.keywords.forEach(function (kw) {
      if (qLower.indexOf(kw) !== -1) score += kw.indexOf(" ") === -1 ? 3 : 6; // phrase match worth more
    });
    tokens.forEach(function (t) {
      if (entry.title.toLowerCase().indexOf(t) !== -1) score += 2;
      entry.keywords.forEach(function (kw) {
        if (kw.indexOf(t) !== -1) score += 1;
        else if (t.length >= 4 && kw.length >= 4 && kw.slice(0, 3) === t.slice(0, 3)) score += 1; // shared stem, e.g. angry/anger
      });
    });
    return score;
  }
  function askShepherd(question) {
    var qLower = question.toLowerCase().trim();
    var tokens = tokenize(question);
    var scored = KB.map(function (e) { return { entry: e, score: scoreEntry(e, qLower, tokens) }; })
      .filter(function (s) { return s.score >= 3; }) // below this, be honest and say "I don't know"
      .sort(function (a, b) { return b.score - a.score; });
    return scored;
  }
  function renderAnswer(scored, question) {
    var box = $("ask-result");
    if (!scored.length) {
      var suggestions = KB.slice(0, 6).map(function (e) {
        return '<button class="chip" data-q="' + esc(e.title) + '">' + esc(e.title) + "</button>";
      }).join("");
      box.innerHTML =
        '<div class="answer-card fallback">' +
        "<h3>I don't know — please ask your pastor</h3>" +
        "<p>Shepherd could not find a reliable, curated answer for that question. It would rather be honest than guess. " +
        "Your pastor knows you and your church, and can give guidance this app cannot.</p>" +
        "<p><strong>Try one of these topics instead:</strong></p>" +
        '<div class="chips">' + suggestions + "</div></div>";
    } else {
      var top = scored[0];
      var related = scored.slice(1, 4).map(function (s) {
        return '<button class="chip" data-q="' + esc(s.entry.title) + '">' + esc(s.entry.title) + "</button>";
      }).join("");
      box.innerHTML =
        '<div class="answer-card">' +
        '<span class="ai-label">AI-generated draft — verify with Scripture and your pastor</span>' +
        "<h3>" + esc(top.entry.title) + "</h3>" +
        "<p>" + esc(top.entry.answer) + "</p>" +
        '<blockquote>\u201C' + esc(top.entry.verse) + "\u201D<br><cite>" + esc(top.entry.ref) + " (KJV)</cite></blockquote>" +
        '<div class="answer-actions">' +
        '<button class="btn btn-ghost" id="ask-flag">Flag for pastor review</button>' +
        '<button class="btn btn-ghost" id="ask-copy">Copy answer</button></div>' +
        (related ? '<p class="related-label">Related topics:</p><div class="chips">' + related + "</div>" : "") +
        "</div>";
      $("ask-flag").addEventListener("click", function () { flagForReview(question, top.entry); });
      $("ask-copy").addEventListener("click", function () {
        var text = top.entry.title + "\n\n" + top.entry.answer + "\n\n\"" + top.entry.verse + "\" — " + top.entry.ref + " (KJV)\n\nAI-generated draft — verify with Scripture and your pastor.";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () { showToast("Answer copied."); });
        } else { showToast("Copy is not supported in this browser."); }
      });
    }
    box.querySelectorAll("[data-q]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        $("ask-input").value = chip.getAttribute("data-q");
        submitQuestion();
      });
    });
    if (box.scrollIntoView) box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function flagForReview(question, entry) {
    var exists = state.reviewQueue.some(function (q) { return q.entryId === entry.id && q.status === "pending"; });
    if (exists) { showToast("This answer is already waiting in the pastor review queue."); return; }
    state.reviewQueue.push({
      id: uid(), entryId: entry.id, question: question, answer: entry.answer,
      ref: entry.ref, verse: entry.verse, status: "pending", note: "", created: todayKey()
    });
    save("reviewQueue", state.reviewQueue);
    renderStats();
    showToast("Sent to the pastor review queue. A pastor will check it before it is trusted.");
  }
  function submitQuestion() {
    var q = $("ask-input").value.trim();
    if (!q) { showToast("Please type a question first."); return; }
    renderAnswer(askShepherd(q), q);
  }
  $("ask-submit").addEventListener("click", submitQuestion);
  $("ask-input").addEventListener("keydown", function (e) { if (e.key === "Enter") submitQuestion(); });
  // topic chips
  $("ask-chips").innerHTML = KB.map(function (e) {
    return '<button class="chip" data-q="' + esc(e.title) + '">' + esc(e.title) + "</button>";
  }).join("");
  $("ask-chips").querySelectorAll("[data-q]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      $("ask-input").value = chip.getAttribute("data-q");
      submitQuestion();
    });
  });

  /* ---------- Prayer List ---------- */
  function renderPrayers() {
    var list = $("prayer-list");
    var filter = $("prayer-filter").value;
    var items = state.prayers.filter(function (p) {
      if (filter === "answered") return p.answered;
      if (filter === "open") return !p.answered;
      return true;
    });
    if (!state.prayers.length) {
      list.innerHTML = '<p class="empty">No prayers yet. Add your first prayer below — it is stored only on this device, never uploaded.</p>';
    } else if (!items.length) {
      list.innerHTML = '<p class="empty">Nothing in this view. Try a different filter.</p>';
    } else {
      list.innerHTML = items.map(function (p) {
        return '<li class="prayer-item' + (p.answered ? " answered" : "") + '">' +
          '<div class="prayer-main"><span class="prayer-cat">' + esc(p.category) + '</span>' +
          "<p>" + esc(p.text) + "</p>" +
          '<small>Added ' + fmtDate(p.created) + (p.answered ? " · Answered" : "") + "</small></div>" +
          '<div class="row-actions">' +
          '<button class="btn btn-small" data-act="toggle" data-id="' + p.id + '">' + (p.answered ? "Reopen" : "Mark answered") + "</button>" +
          '<button class="btn btn-small btn-danger" data-act="del" data-id="' + p.id + '">Delete</button>' +
          "</div></li>";
      }).join("");
    }
    list.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-id");
        if (b.getAttribute("data-act") === "del") {
          state.prayers = state.prayers.filter(function (p) { return p.id !== id; });
          showToast("Prayer deleted.");
        } else {
          var p = state.prayers.find(function (x) { return x.id === id; });
          if (p) { p.answered = !p.answered; showToast(p.answered ? "Praise God — marked as answered!" : "Prayer reopened."); }
        }
        save("prayers", state.prayers); renderPrayers(); renderStats();
      });
    });
    var open = state.prayers.filter(function (p) { return !p.answered; }).length;
    $("prayer-count").textContent = open + " open · " + state.prayers.filter(function (p) { return p.answered; }).length + " answered";
  }
  $("prayer-add").addEventListener("click", function () {
    var text = $("prayer-input").value.trim();
    if (!text) { showToast("Please write the prayer first."); return; }
    state.prayers.unshift({
      id: uid(), text: text, category: $("prayer-category").value,
      answered: false, created: todayKey()
    });
    $("prayer-input").value = "";
    save("prayers", state.prayers); renderPrayers(); renderStats();
    showToast("Prayer added — stored only on this device.");
  });
  $("prayer-filter").addEventListener("change", renderPrayers);

  /* ---------- Serving Schedule ---------- */
  function weekKey(iso) {
    var d = new Date(iso + "T00:00:00");
    var day = d.getDay(); // 0 Sun
    var sunday = new Date(d); sunday.setDate(d.getDate() - day);
    return todayKey(sunday);
  }
  function renderServing() {
    var list = $("serving-list");
    var sorted = state.volunteers.slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
    if (!sorted.length) {
      list.innerHTML = '<p class="empty">No volunteers scheduled yet. Add the first one below.</p>';
    } else {
      list.innerHTML = sorted.map(function (v) {
        return '<li class="serving-item"><div class="serving-main">' +
          "<strong>" + esc(v.name) + "</strong> · " + esc(v.role) +
          '<br><small>' + fmtDate(v.date) + (v.note ? " — " + esc(v.note) : "") + "</small></div>" +
          '<button class="btn btn-small btn-danger" data-del="' + v.id + '">Remove</button></li>';
      }).join("");
    }
    list.querySelectorAll("[data-del]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.volunteers = state.volunteers.filter(function (v) { return v.id !== b.getAttribute("data-del"); });
        save("volunteers", state.volunteers); renderServing();
        showToast("Volunteer removed from the schedule.");
      });
    });
    // gaps: for each upcoming week (next 2 Sundays), which roles are unfilled
    var weeks = {};
    sorted.forEach(function (v) {
      var wk = weekKey(v.date);
      weeks[wk] = weeks[wk] || {};
      weeks[wk][v.role] = (weeks[wk][v.role] || 0) + 1;
    });
    var upcoming = Object.keys(weeks).sort().slice(0, 2);
    var gapHtml = "";
    if (!upcoming.length) {
      gapHtml = '<p class="empty">No upcoming weeks scheduled — add volunteers to see role coverage.</p>';
    } else {
      gapHtml = upcoming.map(function (wk) {
        var missing = SERVING_ROLES.filter(function (r) { return !weeks[wk][r]; });
        var covered = SERVING_ROLES.filter(function (r) { return weeks[wk][r]; });
        return '<div class="week-card"><strong>Week of ' + fmtDate(wk) + "</strong>" +
          '<p>Covered: ' + (covered.length ? covered.join(", ") : "none") + "</p>" +
          (missing.length
            ? '<p class="gap">Missing roles: ' + missing.join(", ") + "</p>"
            : '<p class="ok">All roles covered.</p>') + "</div>";
      }).join("");
    }
    $("serving-gaps").innerHTML = gapHtml;
    // balanced rotation suggestion: least-served volunteer first
    var counts = {};
    state.volunteers.forEach(function (v) { counts[v.name] = (counts[v.name] || 0) + 1; });
    var names = Object.keys(counts).sort(function (a, b) { return counts[a] - counts[b]; });
    $("serving-suggestion").textContent = names.length
      ? "Rotation suggestion: " + names.slice(0, 3).map(function (n) { return n + " (" + counts[n] + "×)"; }).join(" · ") + " — schedule the least-served volunteers next for a fair rotation."
      : "Add volunteers to get a balanced rotation suggestion.";
    // reminder: next Sunday
    var now = new Date(); var next = new Date(now); next.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
    $("serving-reminder").textContent = "Next service: Sunday, " + next.toLocaleDateString("en-US", { month: "long", day: "numeric" }) + ". Check the gaps above and confirm volunteers during the week.";
  }
  $("serving-add").addEventListener("click", function () {
    var name = $("serving-name").value.trim();
    var date = $("serving-date").value;
    if (!name || !date) { showToast("Please enter a name and a date."); return; }
    state.volunteers.push({ id: uid(), name: name, role: $("serving-role").value, date: date, note: $("serving-note").value.trim() });
    $("serving-name").value = ""; $("serving-note").value = ""; $("serving-date").value = "";
    save("volunteers", state.volunteers); renderServing();
    showToast("Volunteer added to the schedule.");
  });

  /* ---------- Reading Plan ---------- */
  function renderPlan() {
    var doneCount = READING_PLAN.filter(function (r) { return state.planDone[r.day]; }).length;
    $("plan-progress").style.width = Math.round(doneCount / READING_PLAN.length * 100) + "%";
    $("plan-progress-text").textContent = doneCount + " of " + READING_PLAN.length + " days complete";
    $("plan-list").innerHTML = READING_PLAN.map(function (r) {
      var done = !!state.planDone[r.day];
      return '<li class="plan-item' + (done ? " done" : "") + '">' +
        '<label><input type="checkbox" data-day="' + r.day + '"' + (done ? " checked" : "") + ">" +
        "<span><strong>Day " + r.day + " — " + esc(r.title) + "</strong><br>" +
        "<em>" + esc(r.passage) + "</em><br><small>" + esc(r.note) + "</small></span></label></li>";
    }).join("");
    $("plan-list").querySelectorAll("input[type=checkbox]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        var day = +cb.getAttribute("data-day");
        if (cb.checked) state.planDone[day] = true; else delete state.planDone[day];
        save("planDone", state.planDone); renderPlan(); renderStats();
        if (doneCount + (cb.checked ? 1 : -1) === READING_PLAN.length) showToast("Reading plan complete — well done!");
      });
    });
  }

  /* ---------- Pastor Review Queue ---------- */
  function renderReview() {
    var list = $("review-list");
    var pending = state.reviewQueue.filter(function (q) { return q.status === "pending"; });
    var decided = state.reviewQueue.filter(function (q) { return q.status !== "pending"; });
    var html = "";
    function card(q) {
      return '<li class="review-item status-' + q.status + '">' +
        '<span class="review-status">' + q.status.toUpperCase() + "</span>" +
        "<p><strong>Question:</strong> " + esc(q.question) + "</p>" +
        "<p>" + esc(q.answer) + "</p>" +
        '<blockquote>\u201C' + esc(q.verse) + "\u201D<br><cite>" + esc(q.ref) + " (KJV)</cite></blockquote>" +
        (q.note ? "<p><strong>Pastor note:</strong> " + esc(q.note) + "</p>" : "") +
        '<small>Flagged ' + fmtDate(q.created) + "</small>" +
        (q.status === "pending"
          ? '<div class="row-actions"><button class="btn btn-small" data-review="approved" data-id="' + q.id + '">Approve</button>' +
            '<button class="btn btn-small btn-danger" data-review="flagged" data-id="' + q.id + '">Flag as concern</button></div>'
          : "") + "</li>";
    }
    if (!state.reviewQueue.length) {
      html = '<p class="empty">The review queue is empty. When someone flags an AI answer in Ask Shepherd, it appears here for a pastor to approve or flag. Nothing is published as trusted until a human approves it.</p>';
    } else {
      if (pending.length) html += "<h3>Waiting for review (" + pending.length + ")</h3><ul class=\"review-list\">" + pending.map(card).join("") + "</ul>";
      if (decided.length) html += "<h3>Decided (" + decided.length + ")</h3><ul class=\"review-list\">" + decided.map(card).join("") + "</ul>";
    }
    list.innerHTML = html;
    list.querySelectorAll("[data-review]").forEach(function (b) {
      b.addEventListener("click", function () {
        var q = state.reviewQueue.find(function (x) { return x.id === b.getAttribute("data-id"); });
        if (!q) return;
        var status = b.getAttribute("data-review");
        var note = "";
        if (status === "flagged") {
          note = window.prompt("Pastor note — what is the concern with this answer?", "") || "";
        } else {
          note = window.prompt("Pastor note (optional — e.g. 'Verified against Scripture'):", "") || "";
        }
        q.status = status; q.note = note;
        save("reviewQueue", state.reviewQueue); renderReview(); renderStats();
        showToast(status === "approved" ? "Answer approved by pastor." : "Answer flagged as a concern.");
      });
    });
  }

  /* ---------- toast ---------- */
  var toastTimer = null;
  function showToast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 3500);
  }

  /* ---------- init ---------- */
  renderDevotion();
  renderPrayers();
  renderServing();
  renderPlan();
  renderReview();
  renderStats();
  $("year").textContent = new Date().getFullYear();
})();
