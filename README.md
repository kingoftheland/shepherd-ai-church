# Shepherd — AI Discipleship Companion for the Local Church

**AI for Church Hackathon 2026 · Track: Discipleship & Spiritual Growth**

Shepherd is a free, static web app that helps a local church disciple its members day by day: daily devotions, Scripture-grounded AI Q&A with a pastor in the loop, a private prayer list, a serving rotation planner, and a 7-day reading plan.

- **Live demo:** open `index.html` in any browser, or deploy to GitHub Pages (see below).
- **No account. No API key. No server. No cost.** All user data lives in the browser's `localStorage` and never leaves the device.
- **Built with AI assistance.**

## Features

| Feature | What it does |
|---|---|
| 📖 Daily Devotion | A new original devotion each day (30-day cycle, date-based): KJV verse, 120–180-word reflection, prayer, and journal prompt. Prev/next navigation, mark-as-complete, daily streak saved in localStorage. |
| 💬 Ask Shepherd | Ask about faith, the Bible, or church life. Answers come from a curated knowledge base of 45 topics (prayer, forgiveness, baptism, marriage, grief, anxiety, and more) with keyword + relevance scoring and supporting KJV verses. Every answer is clearly labelled **“AI-generated draft — verify with Scripture and your pastor.”** If no answer matches, it honestly says *“I don't know — please ask your pastor”* and suggests related topics. It never invents verses. |
| 🙏 Prayer List | Add, mark answered, reopen, and delete personal prayers. Stored only on this device — never uploaded. |
| 🤝 Serving Schedule | Plan the volunteer rotation (name, role, date). Detects unfilled roles per week, suggests a balanced rotation (least-served first), and shows a reminder for the next Sunday. Demo data is synthetic. |
| 📚 Reading Plan | 7-day Bible reading plan with check-offs and a progress bar. |
| ✅ Pastor Review Queue | **The human in the loop.** Any AI answer a member flags goes to the pastor review queue, where a pastor can approve it or flag it as a concern with a note. Nothing flagged is treated as trusted until a human approves it. |

## Run it locally

Just open `index.html` in a browser — there is no build step and no server needed.

```bash
# or serve it locally, e.g.:
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch** → branch `main`, folder `/ (root)`.
3. Your site is live at `https://<username>.github.io/<repo>/`.

## Tech

- `index.html` — structure and content
- `styles.css` — design (deep navy + gold, Playfair Display + Inter via Google Fonts with system fallbacks, so the app still works if the font CDN fails)
- `data.js` — 30 original devotions, 45-topic Q&A knowledge base, 7-day reading plan, synthetic demo volunteers
- `app.js` — all behaviour: tab navigation, streaks, Q&A matching, CRUD, gap detection, review queue
- No JavaScript framework, no external requests except Google Fonts.

## Faithfulness & Responsible AI

Shepherd is designed around the hackathon's Faithfulness criteria:

- **Theologically grounded:** all Scripture quotations are real KJV verses (public domain), quoted only from the curated knowledge base. The app never invents a verse.
- **Honest about AI:** every AI answer carries a visible “AI-generated draft” label and an instruction to verify with Scripture and a pastor.
- **Honest about limits:** when it does not know, it says so — and points to the pastor.
- **Privacy by design:** prayers, streaks, and progress are stored only in the user's own browser. There is no account, no tracking, and no upload.
- **Humans stay in charge:** the Pastor Review Queue means AI output is checked by a human before it is trusted.

## Judging criteria addressed

- **Ministry Impact (30%)** — daily discipleship habits, prayer, serving, and reading for the whole congregation, in one free tool.
- **Execution & Quality (25%)** — every feature fully works offline; responsive on mobile and desktop.
- **Innovation (20%)** — an AI companion that is deliberately honest about its limits, with a human-in-the-loop review queue.
- **Faithfulness & Responsible AI (15%)** — see above.
- **Presentation (10%)** — premium, warm design; demo video ≤ 5 minutes (see repo root for the script).

## License

MIT — see `LICENSE`.
