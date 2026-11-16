/* Shepherd — data.js
 * All content is original, written for this project.
 * Scripture quotations are from the King James Version (public domain).
 * No real congregant data — all names and examples are synthetic demo data.
 */

const DEVOTIONS = [
{
  day: 1, title: "The Lord Is My Shepherd",
  ref: "Psalm 23:1",
  verse: "The LORD is my shepherd; I shall not want.",
  reflection: "David begins his most beloved psalm not with a request but with a relationship. Before he asks for anything, he names who God is to him: a shepherd. A shepherd does not merely watch from a distance; he walks ahead, knows each sheep by name, and lays down his life for the flock. When David says 'I shall not want,' he is not claiming he will never feel need. He is confessing that with the Lord as his shepherd, no need will ever be greater than God's provision. Today, whatever you lack — rest, clarity, courage, money, answers — bring it to the Shepherd first. His care is personal, constant, and enough. The Christian life is not about having everything; it is about having the One who provides everything.",
  prayer: "Lord, be my shepherd today. Lead me where I need to go, provide what I truly need, and teach me to trust Your care more than my worry. Amen.",
  journal: "What need am I carrying today, and how might I hand it to the Shepherd instead of carrying it alone?"
},
{
  day: 2, title: "New Mercies Every Morning",
  ref: "Lamentations 3:22-23",
  verse: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
  reflection: "Jeremiah wrote these words in the middle of ruins. Jerusalem had fallen, the temple was destroyed, and everything he loved was in ashes — yet he could still say God's mercies are new every morning. That is the scandal of faith: hope does not wait for circumstances to improve. God's compassion is not a leftover from yesterday; it is freshly made each dawn, like bread from the oven. You do not have to earn today's mercy by fixing yesterday's failures. You simply receive it. If you woke up feeling like yesterday's mistakes disqualify you, hear this: this morning came with a new supply of mercy, and God's faithfulness is greater than your worst day. Begin today by naming one mercy you have already received, and let gratitude set the tone for everything that follows.",
  prayer: "Faithful God, thank You for mercies that are new this morning. Help me receive today as a gift rather than a punishment, and walk in Your grace. Amen.",
  journal: "What from yesterday do I need to leave behind so I can receive today's mercy?"
},
{
  day: 3, title: "Strength for Today",
  ref: "Philippians 4:13",
  verse: "I can do all things through Christ which strengtheneth me.",
  reflection: "This verse is often printed on gym shirts, but Paul wrote it from prison, learning contentment in hunger and in plenty. 'All things' does not mean every ambition we dream up; it means everything God calls us to do in the place He has put us. The strength is not ours — it flows 'through Christ.' That changes everything. The tired parent, the overwhelmed worker, the student facing exams, the caregiver running on empty: none of them need to manufacture strength. They need to draw it from the One who never runs out. Your task today may feel too big, but it is not bigger than Christ in you. Ask Him for strength for this hour, not for the whole year, and watch how enough arrives right on time.",
  prayer: "Lord Jesus, I cannot do this in my own strength, and I don't have to. Strengthen me for what today requires, one step at a time. Amen.",
  journal: "What is one thing today that I have been trying to do in my own strength?"
},
{
  day: 4, title: "Trust Beyond Understanding",
  ref: "Proverbs 3:5-6",
  verse: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
  reflection: "There are days when God's path makes no sense to us. The door closes, the plan collapses, the answer is silence — and our understanding demands an explanation. This proverb does not ask us to stop thinking; it asks us to stop leaning on our thinking as if it were the foundation. Trusting with all our heart means trusting with the part of us that wants control. 'In all thy ways acknowledge him' is a daily, ordinary practice: invite God into the small decisions, the emails, the conversations, the commute. The promise is not that we will understand the path, but that He will direct it. A directed path is better than an understood one, because the Guide sees further than we can.",
  prayer: "Father, I confess I lean on my own understanding too often. Today I acknowledge You in my plans and ask You to direct my steps. Amen.",
  journal: "Where am I demanding an explanation from God instead of trusting His direction?"
},
{
  day: 5, title: "Do Not Fear",
  ref: "Isaiah 41:10",
  verse: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
  reflection: "God does not begin with a command to try harder; He begins with a promise of presence: 'I am with thee.' Fear loses its power when we remember we are not alone in the room. Notice how the verse piles promise upon promise — strengthen, help, uphold — as if God knows one reassurance is never enough when we are afraid. His right hand, the hand of power and righteousness, is underneath us. We are not held up by our own grip on God; we are held up by His grip on us. Whatever you fear today — the diagnosis, the conversation, the unknown — it does not get the final word. The God who upholds you does. His grip on you is stronger than your grip on Him.",
  prayer: "God, when fear rises, remind me that You are with me. Uphold me with Your righteous right hand today. Amen.",
  journal: "What fear feels biggest right now, and what would change if I truly believed God is with me in it?"
},
{
  day: 6, title: "A Lamp for the Next Step",
  ref: "Psalm 119:105",
  verse: "Thy word is a lamp unto my feet, and a light unto my path.",
  reflection: "A lamp does not light the whole road; it lights the next few steps. God's Word works the same way. We often want a floodlight — a five-year plan, a guarantee, a map of the entire journey. Instead, God gives us a lamp: enough light for the step we are on. That is not a limitation; it is an invitation to walk closely with Him, step by step, rather than running ahead on our own. If you are waiting for the full picture before you obey, you may wait forever. Take the step the lamp reveals. Read one passage, obey one clear instruction, make one honest choice. The light moves with you, and the path becomes clear as you walk it.",
  prayer: "Lord, Your Word is my lamp. Show me the next step clearly, and give me courage to take it even when I cannot see the whole road. Amen.",
  journal: "What is the next small step of obedience the lamp is showing me right now?"
},
{
  day: 7, title: "Rest for the Weary",
  ref: "Matthew 11:28-30",
  verse: "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.",
  reflection: "Jesus does not offer rest to the strong and the sorted; He offers it to the labouring and the heavy laden — to people exactly like us. Notice the invitation is to come, not to perform. Rest is not found in a better schedule or a longer holiday, though those help. Soul rest is found in a Person. Taking His yoke means learning His way of carrying life: meek, lowly, unhurried, trusting the Father. The world teaches us to carry everything and prove ourselves. Jesus teaches us to set down what was never ours to carry and to walk at His pace. If your soul is tired today, the invitation still stands: come. Come to Him first today, before the noise, before the striving, before the day pulls you in a dozen directions.",
  prayer: "Jesus, I am weary and heavy laden. I come to You. Teach me Your unhurried way and give rest to my soul. Amen.",
  journal: "What burden am I carrying that Jesus never asked me to carry?"
},
{
  day: 8, title: "All Things Work Together",
  ref: "Romans 8:28",
  verse: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
  reflection: "Paul does not say all things are good. Some things are painful, unjust, and plainly wrong. What he says is that God works all things together for good — like a weaver taking dark threads and bright ones and making a pattern no single thread could explain. We cannot see the pattern from underneath the loom, and that is why this verse asks for trust, not understanding. The promise is given to those who love God and are called according to His purpose — which means the good God is working toward is shaped by His purpose, not merely our comfort. Today, the hardest part of your story is not wasted. God is weaving it into something good, even if you cannot see it yet.",
  prayer: "God, I trust that You are working even in what I cannot understand. Help me love You and rest in Your purpose today. Amen.",
  journal: "What difficult thread in my life might God be weaving into something good?"
},
{
  day: 9, title: "Be Strong and Courageous",
  ref: "Joshua 1:9",
  verse: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
  reflection: "God gives this command to Joshua at the edge of the Promised Land, with giants ahead and Moses gone. Courage, in Scripture, is not the absence of fear; it is obedience in the presence of fear, grounded in the presence of God. Three times in this chapter God repeats the command, because courage is not learned once — it must be remembered daily. The reason is always the same: 'the LORD thy God is with thee whithersoever thou goest.' You do not need to feel brave to be brave. You need to remember who goes with you. The hard conversation, the new step, the honest confession — God goes there with you. Courage is contagious when it is rooted in God's presence, so take the step and let others see what trusting Him looks like.",
  prayer: "Lord, make me strong and courageous today. Wherever I go, remind me that You go with me. Amen.",
  journal: "What would I do today if I fully believed God goes with me?"
},
{
  day: 10, title: "Our Refuge and Strength",
  ref: "Psalm 46:1",
  verse: "God is our refuge and strength, a very present help in trouble.",
  reflection: "The psalmist does not say God will be a help someday, or was a help long ago. He is 'a very present help in trouble' — present tense, very present, right now. A refuge is not a place we visit once a year; it is where we run when the storm hits. Some of us try to be our own refuge, holding everything together by willpower until we break. God invites a different way: run to Him first, not last. His strength becomes ours not by transfer of effort but by proximity — the closer we stay to Him, the more His strength steadies us. Trouble is real, but so is the refuge. Today, when pressure rises, practice running to God before running to worry.",
  prayer: "God, You are my refuge and strength. When trouble comes, help me run to You first. Amen.",
  journal: "When trouble comes, where do I run first — and what would running to God look like?"
},
{
  day: 11, title: "Ask for Wisdom",
  ref: "James 1:5",
  verse: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
  reflection: "God gives wisdom liberally — generously, without a lecture, without making us feel foolish for asking. That is remarkable, because human beings usually attach strings to help. God does not. The only condition is that we ask. Wisdom is not the same as knowledge; it is knowing what to do with what you know, in the situation you are actually in. Facing a decision today — about work, family, money, a relationship? You do not have to guess alone. Ask the God who delights to give. He will not scold you for not knowing. He will give you the next right step, and often, the peace to take it. Ask boldly, ask specifically, and then watch for the answer with a heart ready to obey whatever He shows you.",
  prayer: "Father, I lack wisdom for the decision before me. Give generously, as You promised, and help me hear Your guidance. Amen.",
  journal: "What decision do I need God's wisdom for, and have I actually asked Him?"
},
{
  day: 12, title: "Cast Your Cares",
  ref: "1 Peter 5:7",
  verse: "Casting all your care upon him; for he careth for you.",
  reflection: "The word 'casting' is active — like throwing a net or tossing a heavy bag off your shoulders. Anxiety grows when we hold our cares close and rehearse them; it shrinks when we hand them over. Peter gives the reason in the second half: 'for he careth for you.' God is not annoyed by your worries. He cares about the very things you are anxious about — the job, the child, the bill, the health. Casting is not a one-time event; it is a daily, sometimes hourly, practice. Every time the worry returns, cast it again. You are not burdening God with your cares; you are finally letting Him carry what He has been offering to carry all along. Try it now: name the worry, hand it over in prayer, and notice how much lighter the day feels without it.",
  prayer: "Lord, I cast my cares on You today — all of them. Thank You for caring for me. Help me leave them with You. Amen.",
  journal: "Name one care to cast on God today, out loud, in prayer."
},
{
  day: 13, title: "The Fruit of the Spirit",
  ref: "Galatians 5:22-23",
  verse: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
  reflection: "Fruit grows; it is not manufactured. You cannot strain your way into patience or schedule your way into joy. The fruit of the Spirit grows in a life that stays connected to the Spirit — through prayer, Scripture, community, and obedience in small things. Notice it is 'fruit,' singular: one fruit with many flavours, all growing together. When we try to produce love by effort alone, we burn out. When we abide, the Spirit produces what we cannot. Today, instead of asking 'how can I be more patient?', ask 'how can I stay closer to the Spirit?' The fruit will follow the root. Ask the Spirit to show you one small way to stay connected today, and trust Him to do the growing.",
  prayer: "Holy Spirit, grow Your fruit in me today. Make me loving, joyful, peaceful, and patient in ways I cannot produce on my own. Amen.",
  journal: "Which fruit of the Spirit feels most lacking in my life right now, and what would staying close to the Spirit look like today?"
},
{
  day: 14, title: "Faith Is the Substance",
  ref: "Hebrews 11:1",
  verse: "Now faith is the substance of things hoped for, the evidence of things not seen.",
  reflection: "Faith is not wishful thinking or pretending to be sure. The writer calls it 'substance' — something solid, real, with weight — and 'evidence,' the kind of proof that convinces. Faith treats God's promises as present reality even before our eyes can see them, because God's character is the evidence. Abraham left home without a map because he trusted the One who gave the promise. You may be waiting for an answer you cannot yet see: healing, restoration, provision, a breakthrough. Faith does not deny the waiting; it fills the waiting with substance — the solid confidence that God is faithful and His promises are true. Hold on to the promise even when the answer is slow, because the God who promised is the same God who always keeps His word.",
  prayer: "God, strengthen my faith. Help me treat Your promises as solid and real, even when I cannot yet see them fulfilled. Amen.",
  journal: "What promise of God am I hoping for, and how can I live as if it is already certain?"
},
{
  day: 15, title: "Abide in the Vine",
  ref: "John 15:5",
  verse: "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.",
  reflection: "A branch does not strain to produce fruit; it stays connected to the vine, and fruit comes. Jesus is strikingly honest: 'without me ye can do nothing' — nothing of lasting, spiritual value. That is not meant to shame us but to free us. So much exhaustion in the Christian life comes from trying to bear fruit while disconnected — serving without praying, giving without abiding, striving without resting in Him. Abiding is simple and daily: time in His Word, honest prayer, obedience in the next small thing, staying in community. Fruit is the result, not the effort. Stay connected today, and let the Vine do what only the Vine can do. Stay close to Him in the ordinary moments today, and the fruit will appear in ways that surprise you.",
  prayer: "Jesus, keep me abiding in You today. I cannot bear fruit apart from You — help me stay connected. Amen.",
  journal: "Am I trying to bear fruit while disconnected? What would abiding look like in my schedule today?"
}
];

DEVOTIONS.push(
{
  day: 16, title: "The Lord Is My Light",
  ref: "Psalm 27:1",
  verse: "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?",
  reflection: "David asks two questions and answers both with the same truth: the Lord. Fear asks, 'Who will protect me?' and David answers, 'The Lord is my light.' Anxiety asks, 'What if I am not strong enough?' and he answers, 'The Lord is the strength of my life.' Light drives out darkness not by arguing with it but by being present. Salvation is not only a future hope; it is a present light in today's dark places. Whatever shadows you face — uncertainty, opposition, loneliness — the Light is already in the room. You do not need to become fearless. You need to remember who is with you, and let His light do what light does. Let His light shine into the corners you have been avoiding, and discover that darkness cannot stand where He is.",
  prayer: "Lord, You are my light and my salvation. Drive out my fear with Your presence today. Amen.",
  journal: "What darkness feels largest right now, and how does it change when I name the Lord as my light?"
},
{
  day: 17, title: "Seek First the Kingdom",
  ref: "Matthew 6:33",
  verse: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
  reflection: "Jesus spoke these words to people worried about food, drink, and clothing — the same basic anxieties we carry today, dressed in modern clothes. His answer is not 'stop caring' but 'reorder your caring.' Seek first — first in priority, first in the morning, first in the decision. When God's kingdom and righteousness come first, everything else finds its proper place; the 'all these things' are added, not chased. The irony is that chasing provision first often leaves us anxious and empty, while seeking God first often brings the provision with it. Today, before you check the news or the bank balance, seek Him first. Let the first thing be the best thing. Put Him first in the very next decision you make, and see how the rest of the day finds its proper order.",
  prayer: "Father, help me seek Your kingdom first today — before my worries, my phone, and my plans. Amen.",
  journal: "What do I seek first most mornings, honestly? What would change if God came first?"
},
{
  day: 18, title: "Be Transformed",
  ref: "Romans 12:2",
  verse: "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.",
  reflection: "The world shapes us quietly — through feeds, ads, gossip, and the slow pressure to want what everyone else wants. Paul says do not be conformed, pressed into that mould. Instead, be transformed — a word that describes a caterpillar becoming a butterfly, a change from the inside out. The instrument of transformation is the renewing of the mind: what we feed our thoughts on, day after day. A mind renewed by Scripture begins to recognise God's will — good, acceptable, perfect — not as a burden but as freedom. Transformation is not instant, but it is real. What you think about today is shaping who you will be tomorrow. Choose one input for your mind today — a psalm, a sermon, a verse — and let it shape your thoughts all day long.",
  prayer: "God, renew my mind today. Transform me from the inside out so I can recognise and follow Your will. Amen.",
  journal: "What has been shaping my thinking most lately — the world, or God's Word?"
},
{
  day: 19, title: "Saved by Grace",
  ref: "Ephesians 2:8-9",
  verse: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works, lest any man should boast.",
  reflection: "Grace is the hardest truth to believe and the sweetest to receive: salvation is a gift, not a wage. If it were earned, the proud would boast and the broken would despair. But God made it a gift so that no one can boast and everyone can receive. Faith is simply the open hand that takes the gift. Many of us live as if grace got us in the door but performance keeps us in the house. It does not. The same grace that saved you sustains you today. You do not have to earn God's love this morning — you already have it, in Christ, fully and freely. Rest in the gift. Live today as someone who is already loved and already accepted, because in Christ, you truly are.",
  prayer: "Father, thank You that salvation is Your gift, not my achievement. Help me live today from grace, not for it. Amen.",
  journal: "Where am I still trying to earn what God has already given freely?"
},
{
  day: 20, title: "Create in Me a Clean Heart",
  ref: "Psalm 51:10",
  verse: "Create in me a clean heart, O God; and renew a right spirit within me.",
  reflection: "David prayed this after his greatest failure. He did not ask God to cover it up, excuse it, or help him move on quickly. He asked for a new creation — 'create,' the same word used for the creation of the world. Only God can make a clean heart; we cannot scrub our way to purity. But notice David's honesty: he comes to God with the mess, not after cleaning it up. God is not shocked by your sin; He is ready to renew you. A right spirit is not a perfect record but a heart turned back toward God. If you have been avoiding God because of guilt, today is the day to come as David did — honest, humble, and hopeful.",
  prayer: "God, create in me a clean heart and renew a right spirit within me. I come to You honestly, trusting Your mercy. Amen.",
  journal: "What do I need to bring honestly to God today instead of hiding it?"
},
{
  day: 21, title: "Work as for the Lord",
  ref: "Colossians 3:23",
  verse: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;",
  reflection: "Most of our life is ordinary work — emails, dishes, spreadsheets, shifts, homework. Paul tells us that none of it is wasted when done 'as to the Lord.' The audience changes everything: when your real Boss is Christ, the boring task becomes an offering, the difficult colleague becomes someone to serve, and excellence becomes worship. This does not mean every job will feel meaningful; it means every job can be meaningful because of who it is for. You do not need a platform or a title to serve God today. You need the next task in front of you, done heartily, as an offering to the Lord who sees what no one else sees. The task in front of you is not beneath God; done for Him, it becomes holy ground.",
  prayer: "Lord, help me do today's work heartily, as for You. Let even ordinary tasks become worship. Amen.",
  journal: "What ordinary task today can I offer to God as worship?"
},
{
  day: 22, title: "Rejoice, Pray, Give Thanks",
  ref: "1 Thessalonians 5:16-18",
  verse: "Rejoice evermore. Pray without ceasing. In all things give thanks: for this is the will of God in Christ Jesus concerning you.",
  reflection: "Three short commands, and a surprising claim: this is the will of God for you. Not a secret plan or a hidden calling — rejoice always, pray continually, give thanks in everything. Notice it says 'in all things,' not 'for all things.' We do not thank God for evil, but we can thank Him in the middle of it, because He is present and at work. Rejoicing is a choice before it is a feeling. Prayer without ceasing is not non-stop talking but a heart that stays turned toward God all day. Gratitude is the practice that keeps both alive. Today, try it in the small moments: rejoice in one good thing, whisper one prayer, thank God for one gift.",
  prayer: "Father, teach me to rejoice always, pray without ceasing, and give thanks in all things. Amen.",
  journal: "What is one thing I can thank God for right now, even in a hard season?"
},
{
  day: 23, title: "A Strong Tower",
  ref: "Proverbs 18:10",
  verse: "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.",
  reflection: "In ancient times, a tower was the safest place in the city — high walls, a clear view, a door that could be shut against the enemy. The proverb says God's name is that tower. His name carries His character: faithful, mighty, merciful, true. When we run into the name of the Lord — when we call on Him, remember who He is, and trust His character — we are safe. Not safe from every hardship, but safe in the deepest sense: held, hidden, and secure in Him. The righteous run; they do not stroll or wait. When fear or temptation comes, run quickly to the tower. The door is open. Run to Him the moment fear or temptation appears, and do not wait until you are already overwhelmed.",
  prayer: "Lord, Your name is my strong tower. Today I run to You for safety and strength. Amen.",
  journal: "What would it look like to 'run' to God's name the moment trouble comes?"
},
{
  day: 24, title: "Wings Like Eagles",
  ref: "Isaiah 40:31",
  verse: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
  reflection: "Waiting on the Lord is not passive. In Hebrew, the word carries the idea of hoping, expecting, and intertwining — like strands twisted into a rope. Those who wait on the Lord have their strength renewed because their strength becomes braided with His. The promise covers every pace of life: soaring like eagles in the high moments, running without weariness in the busy seasons, and walking without fainting in the long, ordinary days. Most of life is walking, and God promises strength for the walk too. If you are tired of waiting, remember: waiting on God is not wasted time. It is how eagles get their wings. Waiting is not wasted when the One you wait for is faithful, so keep hoping and keep walking.",
  prayer: "Lord, I wait on You. Renew my strength today — for soaring, for running, and for the long walk. Amen.",
  journal: "Which pace am I in right now — soaring, running, or walking — and what strength do I need for it?"
},
{
  day: 25, title: "Peace I Leave With You",
  ref: "John 14:27",
  verse: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
  reflection: "The world's peace depends on circumstances going well; when they fall apart, the peace falls apart with them. Jesus offers a different peace — His peace — given as a gift and a legacy: 'Peace I leave with you.' It is not the absence of trouble but the presence of Christ in the trouble. He spoke these words on the night before the cross, when His own heart was troubled, yet He gave peace away. That is how strong this peace is: it holds even in the darkest night. Your heart does not have to be troubled today. Receive the peace Jesus left for you, and let it guard your heart. Receive His peace now, breathe deeply, and let it guard your heart and mind for the rest of the day.",
  prayer: "Jesus, thank You for Your peace. Guard my heart from trouble and fear today. Amen.",
  journal: "Where do I most need Christ's peace today, and what is troubling my heart?"
},
{
  day: 26, title: "A Spirit of Power and Love",
  ref: "2 Timothy 1:7",
  verse: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
  reflection: "Fear is not from God. That sentence alone can change a life. The Spirit God gives us is marked by three things: power — the ability to do what God asks; love — the motive that shapes how we do it; and a sound mind — clear, steady thinking instead of spiralling panic. When fear speaks, it often sounds like wisdom: 'Be careful, stay small, don't risk it.' But the Spirit's voice is different: courageous, loving, and clear. Today, when fear whispers, test it against this verse. If it does not carry power, love, and a sound mind, it is not from God — and you do not have to obey it. Name the fear, test it against this verse, and refuse to obey any voice that does not come from God.",
  prayer: "Holy Spirit, fill me with power, love, and a sound mind today. Drive out every fear that is not from You. Amen.",
  journal: "Which fear has been speaking loudest, and does it sound like power, love, and a sound mind?"
},
{
  day: 27, title: "Taste and See",
  ref: "Psalm 34:8",
  verse: "O taste and see that the LORD is good: blessed is the man that trusteth in him.",
  reflection: "You cannot know honey is sweet by reading about it; you have to taste it. David invites us to experience God's goodness for ourselves, not just to agree with it in theory. Tasting is personal, sensory, and a little bit risky — it requires actually putting it in your mouth. Trust works the same way: it grows by experience. Every time God proves faithful in a small thing, our confidence for the next thing grows. If your faith feels dry or second-hand, do not just study more — taste more. Pray honestly, obey one step, watch for God's goodness in an ordinary day. Blessed is the one who trusts Him — and trust grows by tasting. Taste His goodness in one small thing today, and let that single taste grow your trust for tomorrow.",
  prayer: "Lord, I want to taste and see that You are good — not just know it in my head. Show me Your goodness today. Amen.",
  journal: "When did I last personally experience God's goodness? How can I 'taste' it again today?"
},
{
  day: 28, title: "Walk Humbly",
  ref: "Micah 6:8",
  verse: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
  reflection: "God's requirements are simpler than we make them, and harder than we admit. Do justly: treat people fairly, tell the truth, refuse to exploit. Love mercy: not just show it when convenient, but love it — delight in forgiving, in giving second chances, in kindness. Walk humbly with God: stay close, stay low, remember who is God and who is not. Three verbs, one life. No grand performance is required, only a faithful daily walk. Today, look for one chance to do justice, one chance to show mercy, and one moment to walk humbly — close to God, without needing to be seen. Pick one of the three to practise before the day ends, and let it become the shape of your ordinary life.",
  prayer: "God, show me what is good today: to do justly, love mercy, and walk humbly with You. Amen.",
  journal: "Which of the three — justice, mercy, humility — do I most need to practice today?"
},
{
  day: 29, title: "We Love Because He First Loved Us",
  ref: "1 John 4:19",
  verse: "We love him, because he first loved us.",
  reflection: "Our love for God does not start with us. It starts with Him. Before we ever thought of God, He thought of us; before we ever reached for Him, He reached for us in Christ. That order matters. If love starts with us, it becomes a performance — always anxious, always measuring. If love starts with God, it becomes a response — free, grateful, and secure. The same is true of loving others: we cannot give what we have not received. The love we show today flows from the love we have received. Spend a moment receiving it again this morning: God loved you first, fully, and without condition. Now go and love from that fullness. Receive His love afresh this morning, and then carry it into the first conversation you have today.",
  prayer: "Father, thank You for loving me first. Fill me with Your love today so I can love others from Your fullness. Amen.",
  journal: "Who is one person I can love today as a response to God's love for me?"
},
{
  day: 30, title: "He Makes All Things New",
  ref: "Revelation 21:5",
  verse: "And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.",
  reflection: "The Bible ends not with an escape from the world but with its renewal. God does not throw creation away; He makes it new. And that promise is not only for the future. The God who makes all things new is already at work in you — renewing your mind, restoring what was broken, and writing a story that is not finished yet. Thirty days of devotions end here, but discipleship does not. The same God who began a good work in you will carry it on to completion. Whatever feels old, tired, or beyond repair in your life, hear the throne's declaration: behold, He makes all things new. Keep walking with Him. Step into the next thirty days with the same Shepherd, the same lamp, and the same promise of newness.",
  prayer: "God who makes all things new, renew me today and in the days ahead. Thank You for a story that is not finished. Amen.",
  journal: "What in my life do I most need God to make new — and how will I keep walking with Him after these 30 days?"
}
);

/* Ask Shepherd knowledge base — curated, pastoral answers.
 * Every verse quoted here is a real KJV verse. No verse is invented.
 * Answers are AI-generated drafts and are labelled as such in the UI.
 */
const KB = [
{ id:"prayer", title:"How do I pray?", keywords:["pray","prayer","praying","talk to god","how to pray","prayer life"],
  answer:"Prayer is simply talking honestly with God — you do not need special words. A helpful pattern is the Lord's Prayer: praise God, ask for His will, bring your daily needs, confess your sins, and ask for help against temptation. Pray regularly, briefly, and honestly; God cares more about a sincere heart than polished language. Start with a few minutes each morning and evening, and pray throughout the day as things come up.",
  ref:"Matthew 6:9-13", verse:"After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven." },
{ id:"prayer-unanswered", title:"Why doesn't God answer my prayers?", keywords:["unanswered","not answered","god doesn't listen","why no answer","prayer not working","waiting"],
  answer:"Unanswered prayer is painful, and Scripture is honest about the wait. Sometimes God answers 'yes,' sometimes 'no,' and often 'wait' — His timing and wisdom are greater than ours. Sometimes our motives need refining, or there is a step of obedience He is waiting for. But silence does not mean absence. Keep praying, keep trusting His character even when you cannot see His plan, and talk with your pastor about what you are carrying.",
  ref:"Psalm 27:14", verse:"Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD." },
{ id:"forgiveness", title:"How do I forgive someone who hurt me?", keywords:["forgive","forgiveness","hurt me","bitter","offended","someone hurt"],
  answer:"Forgiveness is a decision before it is a feeling: choosing to release the debt someone owes you, as God released yours in Christ. It does not mean pretending the hurt did not happen, trusting the person again instantly, or staying in an unsafe situation. Forgive in prayer, honestly and repeatedly — feelings often follow the decision. If the hurt is deep or ongoing, seek counsel from your pastor or a trusted mature believer.",
  ref:"Ephesians 4:32", verse:"And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you." },
{ id:"forgive-self", title:"How do I forgive myself?", keywords:["forgive myself","guilt","ashamed","my fault","can't forgive myself","shame"],
  answer:"If you have confessed your sin to God, He has forgiven you — fully. Holding on to guilt after God has released it is not humility; it is refusing His grace. Accept His forgiveness, make amends where you can, and learn from the failure without living in it. If shame keeps returning, tell a pastor or trusted friend and pray together; healing often comes in community, not in isolation.",
  ref:"1 John 1:9", verse:"If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness." },
{ id:"baptism", title:"What is baptism?", keywords:["baptism","baptized","baptise","water baptism","should i be baptized"],
  answer:"Baptism is the public sign of faith in Jesus: going under the water pictures dying with Christ and rising to new life. It does not save you — salvation is by grace through faith — but it is the first step of obedience Jesus commanded for believers. If you have trusted in Christ and have not been baptised, talk to your pastor about taking this step; most churches offer a short preparation class first.",
  ref:"Romans 6:4", verse:"Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life." },
{ id:"communion", title:"What is communion (the Lord's Supper)?", keywords:["communion","lord's supper","eucharist","bread and wine","holy communion"],
  answer:"Communion is the meal Jesus gave His church to remember Him: bread picturing His body and the cup picturing His blood shed for us. We take it together to proclaim His death until He comes, and to examine our hearts before God. It is for believers who have trusted in Christ. If you are unsure whether you should take part, speak with your pastor — they will gladly help.",
  ref:"1 Corinthians 11:26", verse:"For as often as ye eat this bread, and drink this cup, ye do shew the Lord's death till he come." },
{ id:"salvation", title:"How can I be saved?", keywords:["saved","salvation","born again","go to heaven","how to be saved","accept jesus"],
  answer:"Salvation is God's free gift: Jesus Christ died for our sins and rose again, and everyone who repents and trusts in Him is forgiven and given eternal life. You cannot earn it by good works. If you want to receive it, turn from sin and trust Jesus — tell God honestly in prayer, and then tell your pastor so the church can walk with you in baptism and discipleship.",
  ref:"Romans 10:9", verse:"That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved." },
{ id:"faith", title:"What is faith?", keywords:["faith","believe","believing","trust god","doubt","doubting"],
  answer:"Faith is trusting God and His promises even when you cannot see the outcome — like trusting a chair will hold you before you sit. It grows by hearing God's Word, remembering His faithfulness, and taking small steps of obedience. Doubt is not the opposite of faith; it is often part of it. Bring your doubts honestly to God and to mature believers — God is not afraid of your questions.",
  ref:"Hebrews 11:1", verse:"Now faith is the substance of things hoped for, the evidence of things not seen." },
{ id:"bible-reading", title:"How do I start reading the Bible?", keywords:["read the bible","bible reading","start reading","study bible","where to start bible","scripture"],
  answer:"Start with the Gospel of John to meet Jesus, then read a Psalm and a chapter of Proverbs each day. Read a short passage slowly, ask three questions — What does this show me about God? About people? What will I do about it? — and pray it back to God. Fifteen minutes a day, consistently, will change your life more than occasional long sessions. The Reading Plan tab in this app gives you a 7-day start.",
  ref:"Psalm 119:105", verse:"Thy word is a lamp unto my feet, and a light unto my path." },
{ id:"serving", title:"How can I serve in church?", keywords:["serve","serving","volunteer","ministry","help in church","get involved"],
  answer:"Serving starts with availability, not ability: God uses willing hands. Try a role that fits your gifts — welcoming, music, kids, sound, prayer, setup, hospitality — and serve faithfully in small things first. Talk to your pastor or ministry leader about where the need is greatest, and use the Serving Schedule tab here to see open roles. Serving is not about being noticed; it is worship with your hands.",
  ref:"1 Peter 4:10", verse:"As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God." },
{ id:"marriage", title:"How can I strengthen my marriage?", keywords:["marriage","married","husband","wife","spouse","wedding"],
  answer:"A strong marriage is built on daily choices: speak kindly, forgive quickly, pray together, and put your spouse's needs before your own. Love in Scripture is patient, kind, and self-giving — not a feeling that comes and goes but a commitment renewed daily. If you are struggling, do not wait for a crisis: talk honestly with each other and seek counsel from your pastor or a Christian counsellor together.",
  ref:"Ephesians 5:25", verse:"Husbands, love your wives, even as Christ also loved the church, and gave himself for it." },
{ id:"grief", title:"How do I cope with grief and loss?", keywords:["grief","grieving","loss","died","death","lost someone","mourning","bereaved"],
  answer:"Grief is not a lack of faith — even Jesus wept at the grave of His friend. Give yourself permission to grieve, to cry, and to take time; healing is slow and rarely straight. God is near to the brokenhearted, and He comforts us. Lean on your church family, keep praying even when words fail, and speak with your pastor if the pain becomes overwhelming or you feel stuck.",
  ref:"Psalm 34:18", verse:"The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit." },
{ id:"anxiety", title:"How do I deal with anxiety?", keywords:["anxiety","anxious","worry","worried","stress","stressed","panic","fear"],
  answer:"Anxiety is common, and God meets us in it with gentleness, not condemnation. Practice bringing each worry to God in prayer as soon as it comes, breathing slowly, and grounding yourself in what is true today. Limit the noise that feeds fear, rest well, and stay connected to people. If anxiety is severe or constant, please also talk to your pastor and a doctor or counsellor — seeking medical help is wisdom, not weak faith.",
  ref:"Philippians 4:6-7", verse:"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus." },
{ id:"temptation", title:"How do I resist temptation?", keywords:["temptation","tempted","sin","struggling with sin","lust","addiction"],
  answer:"Temptation itself is not sin — Jesus was tempted too — but giving in is. Resist by fleeing the situation when you can, praying honestly, staying in Scripture, and refusing to fight alone: tell a trusted mature believer and ask them to pray with you and check in on you. When you fall, confess quickly and get back up; shame isolates, but grace restores. If a habit has become an addiction, seek help from your pastor and professional support.",
  ref:"1 Corinthians 10:13", verse:"There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it." },
{ id:"worship", title:"What is true worship?", keywords:["worship","praise","singing","worship god","praise god"],
  answer:"Worship is far more than singing on Sunday — it is giving God the honour He deserves with our whole lives: our words, our work, our money, and our choices. Singing is one expression; obedience is another. God seeks worshippers who worship in spirit and in truth — sincerely, from the heart, and according to His Word. Come to corporate worship ready to give, not only to receive.",
  ref:"John 4:24", verse:"God is a Spirit: and they that worship him must worship him in spirit and in truth." },
{ id:"giving", title:"Should Christians give and tithe?", keywords:["giving","tithe","tithing","offering","money","donate","generous"],
  answer:"Giving is an act of worship and trust: everything we have belongs to God, and we return a portion cheerfully. The Old Testament tithe was ten percent; the New Testament emphasises generous, cheerful, regular giving according to what God has provided. Give prayerfully, give proportionately, and give joyfully — not under compulsion. If money is tight, start small and be faithful; God honours a willing heart.",
  ref:"2 Corinthians 9:7", verse:"Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." },
{ id:"evangelism", title:"How do I share my faith with others?", keywords:["share faith","evangelism","witness","tell others","gospel","preach","non-believer","unbeliever"],
  answer:"Sharing your faith starts with your life: love people genuinely, live with integrity, and be ready to explain the hope you have — gently and respectfully. You do not need all the answers; share what Jesus has done for you in simple words, invite people to church or to read a Gospel with you, and pray for them regularly. Respect their freedom: our job is to witness faithfully, and God's job is to open hearts.",
  ref:"1 Peter 3:15", verse:"But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear." },
{ id:"children", title:"How do I raise my children in faith?", keywords:["children","kids","parenting","raise children","family","son","daughter"],
  answer:"Children learn faith mostly by watching it lived: pray with them daily, read Bible stories together, talk about God in ordinary moments, and model repentance when you fail. Be consistent rather than perfect. Bring them to church, let them see you serve and give, and answer their questions honestly. Above all, show them the love of God at home — a home full of grace speaks louder than any lesson.",
  ref:"Proverbs 22:6", verse:"Train up a child in the way he should go: and when he is old, he will not depart from it." },
{ id:"singleness", title:"What does God say about singleness?", keywords:["single","singleness","unmarried","alone","dating","find a spouse"],
  answer:"Singleness is not a waiting room for real life — it is a good and honoured season in God's eyes, with unique freedom to serve Him wholeheartedly. Whether you are single by choice, by circumstance, or for now, your worth is not defined by relationship status. Invest deeply in community, serve generously, and trust God's timing; if you desire marriage, pray for a spouse who loves Christ and seek counsel from mature believers.",
  ref:"1 Corinthians 7:32", verse:"But I would have you without carefulness. He that is unmarried careth for the things that belong to the Lord, how he may please the Lord." },
{ id:"fasting", title:"What is fasting?", keywords:["fasting","fast","skip meals","spiritual discipline"],
  answer:"Fasting is voluntarily setting aside food (or another good thing) for a time to focus on God in prayer. It is not a way to earn God's favour or impress others — Jesus warned against showing off. Fast simply and privately, drink water, keep it short if you are new (one meal or one day), and use the time to pray. If you have a medical condition, are pregnant, or are young, seek medical advice first and consider a different kind of fast.",
  ref:"Matthew 6:17-18", verse:"But thou, when thou fastest, anoint thine head, and wash thy face; that thou appear not unto men to fast, but unto thy Father which is in secret." },
{ id:"holy-spirit", title:"Who is the Holy Spirit?", keywords:["holy spirit","spirit","spirit of god","gifts of the spirit","speaking in tongues"],
  answer:"The Holy Spirit is God Himself — the third Person of the Trinity — who lives in every believer. He convicts us of sin, teaches us truth, comforts us, gives us power to live for God, and produces the fruit of love, joy, and peace in us. He also gives spiritual gifts for serving the church. You do not need a special experience to have Him: if you trust in Christ, the Spirit dwells in you. Ask Him daily to fill you and guide you.",
  ref:"John 14:26", verse:"But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you." },
{ id:"church-attendance", title:"Why should I go to church?", keywords:["go to church","church attendance","skip church","need church","fellowship"],
  answer:"Church is not a building or a performance — it is God's family, and we need each other. We gather to hear God's Word, to worship together, to share communion, to encourage one another, and to be equipped to serve. No Christian grows well alone; like coals in a fire, we stay warm together. If you have been hurt by a church, that pain is real — talk to a pastor, and do not give up on the family God gave you.",
  ref:"Hebrews 10:25", verse:"Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching." },
{ id:"conflict", title:"How do I handle conflict with another Christian?", keywords:["conflict","argument","fight","disagreement","offended by","church conflict","reconciliation"],
  answer:"Jesus gives a clear path: go to the person privately first, speak the truth in love, and listen as much as you speak. Most conflicts grow because we talk about people instead of to them. If private conversation does not resolve it, bring one or two mature believers to help. The goal is always reconciliation, not winning. Pray before you speak, and be willing to admit your own part.",
  ref:"Matthew 18:15", verse:"Moreover if thy brother shall trespass against thee, go and tell him his fault between thee and him alone: if he shall hear thee, thou hast gained thy brother." },
{ id:"gossip", title:"Is gossip really a sin?", keywords:["gossip","gossiping","rumour","rumor","talking behind","slander"],
  answer:"Yes — Scripture treats gossip seriously because words can destroy trust, reputations, and whole communities. Even true information, shared to the wrong person for the wrong reason, can be gossip. A good test: would I say this if the person were here? Does sharing it help them or only make me feel important? If someone brings you gossip, gently refuse to pass it on and pray for the person instead.",
  ref:"Proverbs 16:28", verse:"A froward man soweth strife: and a whisperer separateth chief friends." },
{ id:"money", title:"How should Christians handle money?", keywords:["money","finances","debt","budget","rich","wealth","poor"],
  answer:"Money is a tool and a test: Scripture warns that loving money leads to trouble, but money itself can serve God's purposes. Live within your means, avoid unnecessary debt, save wisely, give generously, and be honest in all dealings. Contentment — being grateful for what God has provided — is the antidote to the endless pressure for more. If debt or money stress is crushing you, seek wise counsel from your pastor or a trusted adviser.",
  ref:"1 Timothy 6:10", verse:"For the love of money is the root of all evil: which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows." }
];

KB.push(
{ id:"work", title:"Does my everyday work matter to God?", keywords:["work","job","career","vocation","workplace","boss","colleague"],
  answer:"Yes — all honest work matters to God. Work was given before the Fall, and God cares about how we do it: with excellence, honesty, and love for the people around us. Your workplace is a mission field and a place of worship at the same time. Do your work as for the Lord, treat colleagues with grace, and let your character — not just your words — point people to Christ.",
  ref:"Colossians 3:23", verse:"And whatsoever ye do, do it heartily, as to the Lord, and not unto men;" },
{ id:"rest", title:"Why is rest (Sabbath) important?", keywords:["rest","sabbath","burnout","tired","exhausted","overworked","sunday rest"],
  answer:"God rested on the seventh day not because He was tired, but to show us the rhythm of life: work and rest belong together. Rest is an act of trust — it declares that the world does not depend on us. Take one day a week to worship, rest, and enjoy God and His gifts without producing. If you are burned out, rest is not laziness; it is obedience.",
  ref:"Exodus 20:8", verse:"Remember the sabbath day, to keep it holy." },
{ id:"healing", title:"Will God heal me?", keywords:["healing","heal","sick","illness","disease","health","doctor"],
  answer:"God is able to heal, and He does heal — sometimes instantly, sometimes gradually through medicine and time, and sometimes His answer is grace to endure. We pray for healing boldly because Jesus healed the sick, and we also trust God's wisdom when healing does not come as we hoped. Seek prayer from your church, follow medical advice, and remember that ultimate healing is promised in the resurrection.",
  ref:"James 5:14-15", verse:"Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord: and the prayer of faith shall save the sick, and the Lord shall raise him up." },
{ id:"suffering", title:"Why does God allow suffering?", keywords:["suffering","pain","why suffering","evil","bad things happen","tragedy"],
  answer:"This is the hardest question in faith, and Scripture does not give a simple answer. We know suffering entered the world through sin, that God does not delight in it, and that He entered into suffering Himself in Jesus. God can bring good out of evil, He comforts us in it, and one day He will end it forever. When there are no answers, hold on to what you do know: God is good, He is with you, and He will make all things new.",
  ref:"Romans 8:18", verse:"For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us." },
{ id:"guidance", title:"How do I know God's will for a decision?", keywords:["god's will","decision","guidance","what should i do","direction","choice","call"],
  answer:"God guides us mainly through His Word, prayer, wise counsel, circumstances, and the peace He gives. Check Scripture first — God will never guide you against His Word. Pray honestly, talk with mature believers, consider your gifts and the open doors, and then decide in faith; God can redirect a moving ship. For big decisions (job, marriage, moving), give it time and seek your pastor's counsel.",
  ref:"Psalm 32:8", verse:"I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye." },
{ id:"repentance", title:"What is repentance?", keywords:["repent","repentance","turn from sin","confess","confession"],
  answer:"Repentance means turning around: honestly admitting your sin to God, turning away from it, and turning toward Him. It is not just feeling sorry — it is a change of mind that leads to a change of direction. True repentance is met with immediate forgiveness and a fresh start. If you have never repented and trusted Christ, today is the day; if you are a believer who has fallen, repentance is the way back home.",
  ref:"Acts 3:19", verse:"Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord." },
{ id:"grace", title:"What is grace?", keywords:["grace","mercy","undeserved","favour","favor"],
  answer:"Grace is God's undeserved favour: He gives us what we could never earn — forgiveness, new life, and His presence. Mercy is God not giving us the punishment we deserve; grace is God giving us the blessing we do not deserve. We are saved by grace, we live by grace, and we grow by grace. The more you understand grace, the more humble and the more joyful you become.",
  ref:"Ephesians 2:8", verse:"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:" },
{ id:"trinity", title:"What is the Trinity?", keywords:["trinity","three persons","father son holy spirit","god three"],
  answer:"The Trinity means one God in three Persons — Father, Son, and Holy Spirit — each fully God, yet one God, not three. It is a mystery our minds cannot fully grasp, but Scripture reveals it: the Father sends the Son, the Son reveals the Father, and the Spirit glorifies the Son. We do not need to fully understand it to worship the God who is, in His very nature, a loving community.",
  ref:"Matthew 28:19", verse:"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:" },
{ id:"jesus", title:"Who is Jesus?", keywords:["jesus","christ","son of god","who is jesus","messiah"],
  answer:"Jesus is the Son of God, fully God and fully man. He lived a sinless life, died on the cross for our sins, rose again on the third day, and now reigns as Lord. He is the only way to the Father, the image of the invisible God, and the Saviour of the world. To know Jesus is to know God — read the Gospels, especially John, to meet Him for yourself.",
  ref:"John 14:6", verse:"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me." },
{ id:"resurrection", title:"Why does the resurrection matter?", keywords:["resurrection","rose again","easter","empty tomb","raised"],
  answer:"The resurrection is the proof that Jesus is who He claimed to be, that His death truly paid for sin, and that death itself is defeated. Because He rose, our faith is not in vain, our sins are forgiven, and we have the hope of eternal life and our own resurrection. The Christian faith stands or falls on the empty tomb — and the tomb is empty.",
  ref:"1 Corinthians 15:20", verse:"But now is Christ risen from the dead, and become the firstfruits of them that slept." },
{ id:"heaven", title:"What is heaven like?", keywords:["heaven","eternal life","afterlife","paradise","new jerusalem","die","dying","death"],
  answer:"Heaven is not a vague cloud — it is the renewed creation where God dwells with His people, with no more death, sorrow, crying, or pain. The greatest joy of heaven is not the streets of gold but the presence of God Himself, face to face. We will be with Christ, reunited with believers, and finally whole. The hope of heaven gives strength for today and comfort in grief.",
  ref:"Revelation 21:4", verse:"And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." },
{ id:"anger", title:"How do I control my anger?", keywords:["anger","angry","rage","temper","frustrated","irritated"],
  answer:"Anger itself is not always sin — even Jesus was angry at injustice — but anger quickly becomes sin when it controls us. Slow down before you speak, name what is really underneath the anger (hurt, fear, tiredness), and pray before reacting. Apologise quickly when you fail. If anger is frequent or destructive, ask a pastor or counsellor for help; taming the tongue is a spiritual discipline.",
  ref:"James 1:19-20", verse:"Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath: for the wrath of man worketh not the righteousness of God." },
{ id:"patience", title:"How can I become more patient?", keywords:["patience","patient","waiting","impatient","longsuffering"],
  answer:"Patience is a fruit of the Spirit, grown by abiding in Christ — not by trying harder. It grows in the very situations that test it: the slow queue, the difficult person, the unanswered prayer. Practice pausing before reacting, remembering how patient God is with you, and choosing to trust His timing. Small, repeated choices to wait well are how patience is formed.",
  ref:"Galatians 5:22", verse:"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith," },
{ id:"hope", title:"How do I hold on to hope?", keywords:["hope","hopeless","despair","give up","no hope"],
  answer:"Christian hope is not optimism that things will work out; it is confidence in God's promises and character, even in darkness. Hold on by remembering what God has already done, by staying close to His people, and by fixing your eyes on Christ rather than on the storm. If you feel hopeless, tell someone today — a pastor, a friend, a counsellor. Hope often returns through the hands of others.",
  ref:"Romans 15:13", verse:"Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost." },
{ id:"loneliness", title:"What do I do when I feel lonely?", keywords:["lonely","loneliness","alone","isolated","no friends","left out"],
  answer:"Loneliness is painful, and even faithful people in Scripture felt it. God promises He will never leave you, and He often meets loneliness through His people — so take a step toward community even when it is hard: join a small group, serve on a team, tell someone honestly how you feel. You are not a burden; you are family. If loneliness persists, talk with your pastor.",
  ref:"Psalm 68:6", verse:"God setteth the solitary in families: he bringeth out those which are bound with chains: but the rebellious dwell in a dry land." },
{ id:"discipleship", title:"What is discipleship?", keywords:["disciple","discipleship","disciple-making","mentor","mentoring","spiritual growth","grow in faith"],
  answer:"A disciple is a follower of Jesus who is learning to live like Him — and discipleship is the lifelong journey of growing in that life, usually with others. It involves learning God's Word, obeying it, praying, serving, and helping others follow Jesus too. Find a mature believer to walk with you, meet regularly, be honest about your struggles, and pass on what you learn to someone else.",
  ref:"Matthew 28:19-20", verse:"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: teaching them to observe all things whatsoever I have commanded you." },
{ id:"small-groups", title:"Why join a small group?", keywords:["small group","cell group","bible study group","fellowship group","life group"],
  answer:"Small groups are where big church becomes personal: a place to study Scripture, pray honestly, share life, and be known. We grow best in community, not alone. In a small group you will find encouragement, accountability, and friends who notice when you are missing. If your church has groups, try one for a few weeks; if not, ask your pastor about starting one.",
  ref:"Acts 2:46-47", verse:"And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart, praising God, and having favour with all the people." },
{ id:"calling", title:"How do I find my calling?", keywords:["calling","purpose","purpose in life","vocation","what is my purpose","plan for my life"],
  answer:"Your primary calling is to know Christ and become like Him; the specific shape — job, ministry, place — unfolds as you obey the next step. Pay attention to your gifts, the needs around you, the counsel of mature believers, and the doors God opens. You do not find your calling by waiting for a voice from heaven; you find it by faithfully serving where you are and following where God leads.",
  ref:"Ephesians 2:10", verse:"For we are the workmanship of God, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them." },
{ id:"gratitude", title:"How do I cultivate gratitude?", keywords:["gratitude","thankful","thankfulness","grateful","contentment"],
  answer:"Gratitude is a habit, not a mood. Each day, name three specific things God has given you — small ones count: a meal, a friend, a sunrise. Write them down, say them aloud in prayer, and thank the people behind them. Gratitude retrains the heart to see God's goodness in ordinary life, and it is the simplest antidote to complaining and comparison.",
  ref:"1 Thessalonians 5:18", verse:"In all things give thanks: for this is the will of God in Christ Jesus concerning you." },
{ id:"leadership", title:"What makes a good church leader?", keywords:["leader","leadership","pastor","elder","deacon","lead a ministry"],
  answer:"Biblical leadership is servanthood: a good leader follows Christ closely, serves rather than dominates, is honest and self-controlled, cares for people, and handles God's Word faithfully. Character matters more than charisma. If you lead, lead by example; if you are considering leadership, talk to your pastor about the church's process and the character qualifications in Scripture.",
  ref:"1 Peter 5:2-3", verse:"Feed the flock of God which is among you, taking the oversight thereof, not by constraint, but willingly; not for filthy lucre, but of a ready mind; neither as being lords over God's heritage, but being ensamples to the flock." },
{ id:"depression", title:"I feel depressed — what should I do?", keywords:["depression","depressed","sad","sadness","down","hopelessness","mental health"],
  answer:"Depression is real, and it is not a sign that you have failed God — even great servants like Elijah and David knew deep darkness. Please do not face it alone: tell your pastor, a trusted friend, and a doctor or counsellor. Keep taking small steps — eat, sleep, get sunlight, stay connected — and keep praying honestly, even when God feels far away. Seeking professional help is an act of wisdom and faith, not weakness.",
  ref:"Psalm 42:11", verse:"Why art thou cast down, O my soul? and why art thou disquieted within me? hope thou in God: for I shall yet praise him, who is the health of my countenance, and my God." }
);

/* 7-day reading plan */
const READING_PLAN = [
  { day: 1, title: "The Good Shepherd", passage: "Psalm 23", note: "Read slowly. Notice how the Shepherd provides, guides, and protects." },
  { day: 2, title: "The Sermon on the Mount", passage: "Matthew 5:1-16", note: "Jesus describes life in His kingdom — salt and light in the world." },
  { day: 3, title: "The Prodigal Son", passage: "Luke 15:11-32", note: "Two sons, one Father, and a love that runs to meet the lost." },
  { day: 4, title: "Faith That Works", passage: "James 1:19-27", note: "Hear the Word — and do it. True religion shows in everyday life." },
  { day: 5, title: "The Fruit of the Spirit", passage: "Galatians 5:16-25", note: "Walk by the Spirit and His fruit will grow in you." },
  { day: 6, title: "Love in Action", passage: "1 Corinthians 13", note: "The greatest chapter on love — read it as a mirror, not a poster." },
  { day: 7, title: "A New Creation", passage: "2 Corinthians 5:14-21", note: "In Christ you are new. You are an ambassador of reconciliation." }
];

/* Synthetic demo volunteers — no real congregant data. */
const DEFAULT_VOLUNTEERS = [
  { id: "v1", name: "Grace M.", role: "Worship", date: "2026-11-22", note: "Lead vocals" },
  { id: "v2", name: "Daniel K.", role: "Sound", date: "2026-11-22", note: "Sound desk" },
  { id: "v3", name: "Ruth A.", role: "Welcome", date: "2026-11-22", note: "Door team" },
  { id: "v4", name: "Samuel T.", role: "Kids", date: "2026-11-29", note: "Sunday school" },
  { id: "v5", name: "Esther L.", role: "Prayer", date: "2026-11-29", note: "Prayer team" }
];
const SERVING_ROLES = ["Worship", "Welcome", "Kids", "Sound", "Prayer", "Communion", "Setup"];

if (typeof module !== "undefined") { module.exports = { DEVOTIONS, KB, READING_PLAN, DEFAULT_VOLUNTEERS, SERVING_ROLES }; }
