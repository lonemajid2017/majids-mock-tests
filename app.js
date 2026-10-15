const JKSSB_TOPICS = [
    { id: "tenses", title: "1. Tenses & Sequence of Tenses", desc: "Present, Past, Future, Conditional Clauses & Time Expressions asked in JKSSB", icon: "⏳", pyqCount: "45+ PYQs" },
    { id: "narration", title: "2. Narration (Direct & Indirect Speech)", desc: "Assertive, Interrogative, Imperative, Optative & Exclamatory Conversions", icon: "🗣️", pyqCount: "40+ PYQs" },
    { id: "modals", title: "3. Modals & Auxiliaries", desc: "Can, Could, May, Might, Must, Shall, Should, Will, Would, Ought to, Need, Dare", icon: "⚡", pyqCount: "30+ PYQs" },
    { id: "articles", title: "4. Articles & Determiners", desc: "Definite (The), Indefinite (A, An) & Omission of Articles (Zero Article Rules)", icon: "🅰️", pyqCount: "50+ PYQs" },
    { id: "voice", title: "5. Active & Passive Voice", desc: "Tense-wise Voice Transformation, Imperatives, Interrogatives & Prepositional Passives", icon: "🔄", pyqCount: "45+ PYQs" },
    { id: "prepositions", title: "6. Uses of Prepositions", desc: "Fixed Prepositions, Phrasal Prepositions, Place, Time & Direction Rules", icon: "📍", pyqCount: "60+ PYQs" },
    { id: "clauses", title: "7. Clauses (Noun, Adjective, Adverb)", desc: "Principal vs Subordinate Clauses, Relative Pronouns & Conditional Connectors", icon: "🔗", pyqCount: "35+ PYQs" },
    { id: "rearranging", title: "8. Rearranging of Jumbled Sentences", desc: "PQRS Para-Jumbles, Sentence Ordering & Coherent Paragraph Construction", icon: "🧩", pyqCount: "40+ PYQs" },
    { id: "vocab", title: "9. Synonyms & Antonyms", desc: "High-Frequency JKSSB Vocabulary, Contextual Meanings & Word Replacements", icon: "📖", pyqCount: "55+ PYQs" },
    { id: "idioms", title: "10. Idioms and Phrases", desc: "Proverbs, Idiomatic Expressions & Phrasal Verbs from Previous JKSSB Papers", icon: "💡", pyqCount: "50+ PYQs" },
    { id: "homonyms", title: "11. Pairs of Words (Homonyms & Homophones)", desc: "Confusing Word Pairs (Affect/Effect, Beside/Besides, Access/Excess, etc.)", icon: "⚖️", pyqCount: "35+ PYQs" },
    { id: "comprehension", title: "12. Cloze Test & Fill in the Blanks", desc: "Blanks with Phrases, Pronouns, Conjunctions & Contextual Vocabulary", icon: "📝", pyqCount: "40+ PYQs" },
    { id: "pyq_special", title: "13. JKSSB PYQ Memory Vault (2015–2025)", desc: "Actual Questions Asked in JKSSB Assistant Compiler, FAA, VLW, SI & Graduate Exams", icon: "🏆", pyqCount: "All-in-One PYQs" }
];

const CORE_QUESTION_BANK = {
    tenses: [
        { q: "Choose the correct tense form: 'By the time the police arrived, the thief _______.'", options: ["escaped", "has escaped", "had escaped", "was escaping"], answer: 2, explanation: "JKSSB Rule: When two actions happened in the past, the earlier action takes Past Perfect ('had + V3') and the later action takes Simple Past ('arrived')." },
        { q: "Identify the correct verb form: 'It _______ continuously since 6 o'clock this morning.'", options: ["is raining", "was raining", "has been raining", "rains"], answer: 2, explanation: "With 'since/for' indicating an action that started in the past and is still continuing, Present Perfect Continuous ('has/have been + V-ing') is used." },
        { q: "Fill in the blank (JKSSB Assistant Compiler PYQ): 'If you _______ hard, you will surely crack the JKSSB exam.'", options: ["worked", "work", "will work", "had worked"], answer: 1, explanation: "Type-1 Conditional Rule: 'If + Simple Present (work), ... Simple Future (will crack)'." },
        { q: "Spot the correct completion: 'Hardly had I reached the examination hall _______ the bell rang.'", options: ["than", "when", "then", "after"], answer: 1, explanation: "'Hardly/Scarcely ... had' is always followed by 'when' (not 'than'). 'No sooner' takes 'than'." },
        { q: "Choose the right option: 'She behaves as if she _______ the owner of this entire organization.'", options: ["is", "was", "were", "has been"], answer: 2, explanation: "Subjunctive Mood Rule: After 'as if / as though / I wish', unreal present states always take 'were'." },
        { q: "Select the correct verb: 'Neither the players nor the coach _______ present at the meeting yesterday.'", options: ["were", "was", "are", "have been"], answer: 1, explanation: "With 'Neither...nor', the verb agrees with the closer subject ('the coach' = singular) -> 'was'." },
        { q: "Complete the sentence: 'The train _______ before we reached the railway station.'", options: ["left", "has left", "had left", "leaves"], answer: 2, explanation: "Before + Simple Past ('reached') requires Past Perfect ('had left') in the main clause." },
        { q: "Fill in the blank: 'I _______ him for the last ten years.'", options: ["am knowing", "have known", "have been knowing", "knew"], answer: 1, explanation: "Stative verbs like 'know, believe, own' are not used in continuous (-ing) forms. Hence 'have known' is correct." },
        { q: "Choose the correct form: 'If he had informed me earlier, I _______ helped him.'", options: ["would", "will have", "would have", "had"], answer: 2, explanation: "Type-3 Conditional Rule: 'If + had + V3' takes 'would have + V3' in the main clause." },
        { q: "Complete the sentence: 'It is high time you _______ taking your preparation seriously.'", options: ["start", "started", "will start", "have started"], answer: 1, explanation: "Phrases like 'It is high time' followed by a subject always take Simple Past (V2 = 'started')." }
    ],
    narration: [
        { q: "Change into Indirect Speech: He said to me, 'Are you preparing for the JKSSB exam?'", options: ["He asked me whether I am preparing for the JKSSB exam.", "He asked me if I was preparing for the JKSSB exam.", "He told me that I was preparing for the JKSSB exam.", "He asked me if was I preparing for the JKSSB exam."], answer: 1, explanation: "Interrogative reporting uses 'asked + if/whether' and changes Present Continuous to Past Continuous." },
        { q: "Change the Narration: The teacher said, 'The earth revolves around the sun.'", options: ["The teacher said that the earth revolved around the sun.", "The teacher said that the earth revolves around the sun.", "The teacher asked if the earth revolves around the sun.", "The teacher told that the earth had revolved around the sun."], answer: 1, explanation: "Universal Truth Exception: Tense of a universal truth does not change in indirect speech." },
        { q: "Convert to Indirect Speech: She said to the servant, 'Leave the room at once.'", options: ["She requested the servant to leave the room at once.", "She ordered the servant to leave the room at once.", "She said to the servant that leave the room at once.", "She ordered the servant that he should leave the room."], answer: 1, explanation: "Imperative commands change 'said to' into 'ordered' and use 'to + V1' ('to leave')." },
        { q: "Change into Indirect Speech: Bilal said, 'Alas! I have lost my admit card.'", options: ["Bilal exclaimed with sorrow that he had lost his admit card.", "Bilal said sadly that he has lost his admit card.", "Bilal exclaimed with joy that he had lost his admit card.", "Bilal told that alas he lost his admit card."], answer: 0, explanation: "'Alas!' changes to 'exclaimed with sorrow that', and Present Perfect becomes Past Perfect." }
    ],
    modals: [
        { q: "Fill in the blank: 'Candidates _______ carry their original ID proof to the exam center; it is mandatory.'", options: ["may", "might", "must", "could"], answer: 2, explanation: "'Must' expresses strong obligation or official necessity." },
        { q: "Choose the correct Modal: 'Walk carefully lest you _______ fall on the icy road.'", options: ["will", "would", "should", "may"], answer: 2, explanation: "The conjunction 'lest' is ALWAYS followed by the modal 'should'." },
        { q: "Select the right modal: 'When I was in school, I _______ run five kilometers without stopping.'", options: ["can", "could", "may", "must"], answer: 1, explanation: "Past general ability is expressed using 'could'." },
        { q: "Choose the appropriate modal: 'We _______ respect our elders and follow constitutional values.'", options: ["ought to", "need", "dare to", "might"], answer: 0, explanation: "'Ought to' denotes moral duty or social obligation." }
    ],
    articles: [
        { q: "Fill in the blank: 'He is _______ honourable member of the legislative council.'", options: ["a", "an", "the", "No article"], answer: 1, explanation: "In 'honourable', 'h' is silent and starts with a vowel sound ('o'). Therefore, 'an' is used." },
        { q: "Choose the right option: '_______ Jhelum flows through _______ Kashmir Valley.'", options: ["A, the", "The, the", "The, a", "No article, the"], answer: 1, explanation: "Names of rivers ('The Jhelum') and valleys ('the Kashmir Valley') take 'The'." },
        { q: "Select the correct article: 'My brother is studying at _______ European university.'", options: ["an", "a", "the", "No article"], answer: 1, explanation: "'European' starts with a consonant sound '/ju:/' (Yu). Hence, 'a' is used." },
        { q: "Complete the sentence: 'Kalidasa is often called _______ Shakespeare of India.'", options: ["a", "an", "the", "No article"], answer: 2, explanation: "When a proper noun is used as a common noun for comparison, we use 'the'." }
    ],
    voice: [
        { q: "Change to Passive Voice: 'Who taught you English grammar?'", options: ["By whom were you taught English grammar?", "Who was taught English grammar by you?", "By whom you were taught English grammar?", "Whom were you taught English grammar by?"], answer: 0, explanation: "'Who' + V2 converts to 'By whom + were + subject + V3' in Passive Voice." },
        { q: "Convert into Passive Voice: 'Please shut the door.'", options: ["Let the door be shut.", "You are requested to shut the door.", "The door should be shut please.", "Let the door be shutted."], answer: 1, explanation: "Imperatives with 'Please' convert into 'You are requested to + V1'." },
        { q: "Convert to Passive Voice: 'I know him very well.'", options: ["He is known by me very well.", "He is known to me very well.", "He was known to me very well.", "He has been known by me."], answer: 1, explanation: "'Known' always takes the preposition 'to' instead of 'by' in passive construction." }
    ],
    prepositions: [
        { q: "Fill in the blank: 'He died _______ cholera last year, whereas his uncle died _______ his country.'", options: ["from, for", "of, for", "by, of", "with, to"], answer: 1, explanation: "Die 'of' a disease, and die 'for' a noble cause/country." },
        { q: "Choose the exact preposition: 'I prefer tea _______ coffee during winter mornings.'", options: ["than", "over", "to", "from"], answer: 2, explanation: "'Prefer, senior, junior, superior, inferior' ALWAYS take 'to' (never 'than')." },
        { q: "Complete the sentence: 'The candidate was acquitted _______ all charges by the High Court.'", options: ["from", "of", "by", "off"], answer: 1, explanation: "Fixed Preposition: 'Acquitted of' (freed from blame)." }
    ]
};
  Object.assign(CORE_QUESTION_BANK, {
    clauses: [
        { q: "Identify the underlined clause: 'I know the place **where he was born**.'", options: ["Noun Clause", "Adjective (Relative) Clause", "Adverb Clause of Place", "Principal Clause"], answer: 1, explanation: "Because 'where he was born' qualifies the noun 'the place', it is an Adjective Clause." },
        { q: "Identify the clause type: '**What cannot be cured** must be endured.'", options: ["Noun Clause", "Adverb Clause", "Adjective Clause", "Coordinate Clause"], answer: 0, explanation: "Acts as the Subject of the verb 'must be endured', making it a Noun Clause." },
        { q: "Choose the right connector: 'Wait here _______ I return from the office.'", options: ["unless", "until", "if", "lest"], answer: 1, explanation: "'Until' indicates a time limit up to a point, whereas 'unless' indicates a condition." }
    ],
    rearranging: [
        { q: "Rearrange (P, Q, R, S) into a meaningful sentence:\nP: is essential for\nQ: regular practice of mock tests\nR: scoring high marks in\nS: competitive exams like JKSSB", options: ["Q P R S", "P Q R S", "Q R P S", "S P R Q"], answer: 0, explanation: "'Regular practice of mock tests (Q) is essential for (P) scoring high marks in (R) competitive exams like JKSSB (S)'." },
        { q: "Arrange the jumbled segments:\nP: without fear or favour\nQ: the judiciary must\nR: deliver justice to all citizens\nS: in a democratic nation", options: ["S Q R P", "Q P R S", "R P Q S", "P Q R S"], answer: 0, explanation: "'In a democratic nation (S), the judiciary must (Q) deliver justice to all citizens (R) without fear or favour (P)'." }
    ],
    vocab: [
        { q: "Choose the correct SYNONYM of: 'EPHEMERAL'", options: ["Permanent", "Short-lived", "Eternal", "Enormous"], answer: 1, explanation: "'Ephemeral' means lasting for a very short time (short-lived)." },
        { q: "Choose the correct ANTONYM of: 'MITIGATE'", options: ["Alleviate", "Aggravate", "Reduce", "Soften"], answer: 1, explanation: "'Mitigate' means to make less severe. Its opposite (Antonym) is 'Aggravate'." },
        { q: "Select the closest SYNONYM of: 'PRAGMATIC'", options: ["Idealistic", "Practical", "Theoretical", "Careless"], answer: 1, explanation: "'Pragmatic' means dealing with things sensibly and realistically (Practical)." }
    ],
    idioms: [
        { q: "Meaning of the idiom: 'To burn the midnight oil'?", options: ["To waste fuel", "To study or work late into the night", "To create a crisis", "To destroy records"], answer: 1, explanation: "'To burn the midnight oil' means to study or work late at night." },
        { q: "Meaning of the idiom: 'A bolt from the blue'", options: ["A thunderstorm", "A complete and unexpected surprise/shock", "A conspiracy", "A pleasant breeze"], answer: 1, explanation: "Refers to a sudden, unexpected event." },
        { q: "What does 'At the eleventh hour' mean?", options: ["At 11 AM sharp", "At the very last possible moment", "Early in the process", "After midnight"], answer: 1, explanation: "Means at the latest possible moment before it is too late." }
    ],
    homonyms: [
        { q: "Fill in the blanks: 'His words had no _______ on me, as he could not _______ my career.'", options: ["affect, effect", "effect, affect", "effect, effect", "affect, affect"], answer: 1, explanation: "'Effect' is a Noun (result), while 'Affect' is a Verb (to influence)." },
        { q: "Choose the right pair: 'The college _______ is a man of high moral _______.'", options: ["Principle, Principal", "Principal, Principle", "Principal, Principal", "Principle, Principle"], answer: 1, explanation: "'Principal' means head of an institution; 'Principle' means a moral rule." },
        { q: "Select the correct pair: 'She sat _______ her mother, and _______ English, she speaks Urdu.'", options: ["beside, besides", "besides, beside", "beside, beside", "besides, besides"], answer: 0, explanation: "'Beside' means next to; 'Besides' means in addition to." }
    ],
    comprehension: [
        { q: "Cloze Blank: 'Success depends not only on hard work _______ on consistent mock analysis.'", options: ["and also", "but also", "or else", "as well"], answer: 1, explanation: "'Not only' is always paired with 'but also'." },
        { q: "Fill in the blank: 'One must always do _______ duty sincerely.'", options: ["his", "their", "one's", "our"], answer: 2, explanation: "Indefinite pronoun 'One' always takes 'one's'." }
    ],
    pyq_special: [
        { q: "[JKSSB Assistant Compiler PYQ] He said, 'I have been waiting here for two hours.'", options: ["He said that he had been waiting there for two hours.", "He said that he has been waiting here for two hours.", "He told that he was waiting there for two hours.", "He said that I had been waiting there for two hours."], answer: 0, explanation: "Present Perfect Continuous changes to Past Perfect Continuous ('had been waiting'), and 'here' -> 'there'." },
        { q: "[JKSSB PYQ] 'Neither of the two candidates _______ suitable for this post.'", options: ["are", "were", "is", "have been"], answer: 2, explanation: "'Neither of / Either of / Each of' always takes a SINGULAR verb ('is')." },
        { q: "[JKSSB PYQ] Spot the correct preposition: 'He congratulated me _______ my success.'", options: ["for", "on", "at", "with"], answer: 1, explanation: "'Congratulate' always takes the fixed preposition 'on'." }
    ]
});

function makeDynamicJKSSBQuestion(idx, lvl) {
    const subjects = ["Majid", "The candidate", "Our team", "The officer", "The student", "The applicant"];
    const sub = subjects[idx % subjects.length];
    const mode = idx % 5;
    if (mode === 0) return { q: `[${lvl.toUpperCase()} Pattern #${idx + 1}] Choose the correct tense: "${sub} _______ the entire syllabus before the notification was released."`, options: ["completed", "has completed", "had completed", "was completing"], answer: 2, explanation: "Past Perfect ('had + V3') is used for an action completed before another past action." };
    if (mode === 1) return { q: `[${lvl.toUpperCase()} Pattern #${idx + 1}] Fill in the blank: "If ${sub.toLowerCase()} _______ regularly, the score would have crossed 90%."`, options: ["practiced", "had practiced", "practices", "would practice"], answer: 1, explanation: "Third Conditional Rule: 'If + had + V3' pairs with 'would have + V3'." };
    if (mode === 2) return { q: `[${lvl.toUpperCase()} Pattern #${idx + 1}] Spot the correct connector: "No sooner did ${sub.toLowerCase()} enter the hall _______ the gate closed."`, options: ["when", "than", "then", "before"], answer: 1, explanation: "'No sooner ... did' is always followed by 'than'." };
    if (mode === 3) return { q: `[${lvl.toUpperCase()} Pattern #${idx + 1}] Complete the sentence: "Every one of the applicants _______ required to carry the admit card."`, options: ["are", "is", "were", "have been"], answer: 1, explanation: "'Every one of / Each of' always takes a singular verb ('is')." };
    return { q: `[${lvl.toUpperCase()} Pattern #${idx + 1}] Select the right verb: "${sub} along with other aspirants _______ waiting for the result."`, options: ["are", "is", "were", "have"], answer: 1, explanation: "With 'along with / as well as', the verb agrees with the first subject ('${sub}' -> singular 'is')." };
}

function build50QuestionsForMock(topicId, level, setNo) {
    const customKey = `majid_custom_${topicId}_${level}_${setNo}`;
    const customSaved = JSON.parse(localStorage.getItem(customKey) || "[]");
    let basePool = [...(CORE_QUESTION_BANK[topicId] || CORE_QUESTION_BANK.pyq_special)];
    Object.keys(CORE_QUESTION_BANK).forEach(k => { if (k !== topicId) basePool = basePool.concat(CORE_QUESTION_BANK[k]); });

    const final50 = [];
    const seedOffset = (setNo * 17) + (level === "basic" ? 3 : level === "medium" ? 11 : 23);
    for (let i = 0; i < customSaved.length && final50.length < 50; i++) {
        final50.push({ ...customSaved[i], tag: `Custom Set ${setNo}` });
    }
    let qIndex = 0;
    while (final50.length < 50) {
        if (qIndex < basePool.length) {
            const rawQ = basePool[(qIndex + seedOffset) % basePool.length];
            const shift = (setNo + qIndex) % 4;
            const rotatedOptions = [0, 1, 2, 3].map(i => rawQ.options[(i + shift) % 4]);
            const newCorrectIndex = (rawQ.answer - shift + 4) % 4;
            final50.push({ q: rawQ.q, options: rotatedOptions, answer: newCorrectIndex, explanation: rawQ.explanation, tag: `${level.toUpperCase()} • Mock ${setNo}` });
        } else {
            final50.push({ ...makeDynamicJKSSBQuestion(qIndex + seedOffset, level), tag: `${level.toUpperCase()} • Mock ${setNo}` });
        }
        qIndex++;
    }
    return final50;
}

let currentTopicId = "tenses", currentLevel = "basic", currentSetNo = 1;
let currentQuestions = [], currentQIndex = 0, userResponses = [], questionStatus = [];
let questionTimeLeft = 60, totalTimeLeft = 3000, totalTimeSpent = 0, examInterval = null;

function getAllAttemptsMap() { try { return JSON.parse(localStorage.getItem("majid_jkssb_attempts_v1") || "{}"); } catch (e) { return {}; } }
function getMockKey(t, l, s) { return `${t}__${l}__${s}`; }
function getAttemptsForMock(t, l, s) { return getAllAttemptsMap()[getMockKey(t, l, s)] || []; }
function saveAttemptForMock(t, l, s, att) {
    const map = getAllAttemptsMap(), key = getMockKey(t, l, s);
    if (!map[key]) map[key] = [];
    map[key].push(att);
    localStorage.setItem("majid_jkssb_attempts_v1", JSON.stringify(map));
    updateTopStats();
}
function getBookmarks() { try { return JSON.parse(localStorage.getItem("majid_jkssb_bookmarks_v1") || "[]"); } catch (e) { return []; } }
function saveBookmarks(list) { localStorage.setItem("majid_jkssb_bookmarks_v1", JSON.stringify(list)); document.getElementById("nav-bookmark-count").innerText = list.length; }
         function showView(viewId) {
    ["view-dashboard", "view-sets", "view-exam", "view-result"].forEach(id => document.getElementById(id).classList.add("hidden"));
    document.getElementById(viewId).classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
    if (examInterval && !confirm("Live Mock chal raha hai! Kya beech mein chhod kar Home par jana hai?")) return;
    stopExamTimer(); renderTopicsGrid(); updateTopStats(); showView("view-dashboard");
}

function updateTopStats() {
    const map = getAllAttemptsMap();
    let total = 0, sum = 0, best = 0;
    Object.values(map).forEach(arr => arr.forEach(a => { total++; sum += parseFloat(a.score); if (parseFloat(a.score) > best) best = parseFloat(a.score); }));
    document.getElementById("nav-attempt-count").innerText = total;
    document.getElementById("stat-total-tests").innerText = total;
    document.getElementById("stat-avg-score").innerText = total > 0 ? (sum / total).toFixed(2) : "0.0";
    document.getElementById("stat-best-score").innerText = best.toFixed(2);
    document.getElementById("nav-bookmark-count").innerText = getBookmarks().length;
}

function renderTopicsGrid() {
    const query = (document.getElementById("topic-search")?.value || "").toLowerCase();
    const grid = document.getElementById("topics-grid");
    grid.innerHTML = "";
    const map = getAllAttemptsMap();

    JKSSB_TOPICS.filter(t => t.title.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query)).forEach(topic => {
        let count = 0;
        ["basic", "medium", "hard"].forEach(l => { for (let s = 1; s <= 10; s++) count += (map[getMockKey(topic.id, l, s)] || []).length; });
        const card = document.createElement("div");
        card.className = "bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 cursor-pointer transition flex flex-col justify-between shadow-lg";
        card.onclick = () => openTopicSets(topic.id);
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-3">
                    <span class="text-2xl bg-slate-950 w-11 h-11 rounded-xl flex items-center justify-center border border-slate-800">${topic.icon}</span>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">${topic.pyqCount} • 1500 Qs</span>
                </div>
                <h4 class="text-base font-extrabold text-white mb-1">${topic.title}</h4>
                <p class="text-xs text-slate-400 mb-4">${topic.desc}</p>
            </div>
            <div class="pt-3 border-t border-slate-800 flex justify-between items-center text-[11px]">
                <span class="text-slate-400">30 Mocks (Basic • Med • Hard)</span>
                <span class="font-bold text-emerald-400">${count > 0 ? `✔ ${count} Attempts` : 'Open Sets →'}</span>
            </div>`;
        grid.appendChild(card);
    });
}

function openTopicSets(topicId) {
    currentTopicId = topicId;
    const t = JKSSB_TOPICS.find(x => x.id === topicId) || JKSSB_TOPICS[0];
    document.getElementById("selected-topic-title").innerText = `${t.icon} ${t.title}`;
    switchLevelTab(currentLevel);
    showView("view-sets");
}

function switchLevelTab(level) {
    currentLevel = level;
    ["basic", "medium", "hard"].forEach(l => {
        document.getElementById(`tab-${l}`).className = l === level
            ? "px-4 py-2 rounded-lg text-xs font-extrabold bg-emerald-500 text-slate-950"
            : "px-4 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white";
    });
    renderMockSetsGrid();
}

function renderMockSetsGrid() {
    const grid = document.getElementById("sets-grid");
    grid.innerHTML = "";
    const t = JKSSB_TOPICS.find(x => x.id === currentTopicId);

    for (let s = 1; s <= 10; s++) {
        const past = getAttemptsForMock(currentTopicId, currentLevel, s);
        const has = past.length > 0;
        const best = has ? Math.max(...past.map(a => parseFloat(a.score))).toFixed(2) : null;
        const card = document.createElement("div");
        card.className = "bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">${currentLevel.toUpperCase()} MOCK #${s}</span>
                    <span class="text-xs font-mono text-slate-400">Q.${(s - 1) * 50 + 1}–${s * 50}</span>
                </div>
                <h4 class="text-base font-extrabold text-white">${t.title.replace(/^\d+\.\s*/, '')} — Mock ${s}</h4>
                ${has ? `<div class="mt-3 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs">
                    <div class="flex justify-between text-emerald-400 font-bold"><span>✅ Attempted ${past.length}x</span><span>Best:${best}/50</span></div>
                    <div class="flex justify-between text-slate-400 text-[11px] mt-1"><span>Attempt 1: <b class="text-white">${past[0].score}/50</b></span><span>Latest: <b class="text-white">${past[past.length - 1].score}/50</b></span></div>
                </div>` : `<div class="mt-3 bg-slate-950/50 border border-slate-800 rounded-xl p-2.5 text-[11px] text-slate-400">50 JKSSB MCQs • 1 Min/Q Timer • +1 / -0.25</div>`}
            </div>
            <button onclick="startMockExam(${s})" class="mt-4 w-full py-2.5 rounded-xl font-extrabold text-xs ${has ? 'bg-indigo-600 text-white' : 'bg-emerald-500 text-slate-950'}">
                ${has ? `🔄 Re-Attempt Mock ${s} (Attempt #${past.length + 1})` : `▶️ Start Mock ${s}`}
            </button>`;
        grid.appendChild(card);
    }
}

function startMockExam(setNo) {
    currentSetNo = setNo;
    currentQuestions = build50QuestionsForMock(currentTopicId, currentLevel, currentSetNo);
    currentQIndex = 0; userResponses = new Array(50).fill(null); questionStatus = new Array(50).fill("unvisited"); questionStatus[0] = "skipped";
    questionTimeLeft = 60; totalTimeLeft = 3000; totalTimeSpent = 0;
    const t = JKSSB_TOPICS.find(x => x.id === currentTopicId);
    document.getElementById("exam-badge-level").innerText = `${currentLevel.toUpperCase()} • SET ${setNo}`;
    document.getElementById("exam-title").innerText = `${t.title.replace(/^\d+\.\s*/, '')} - Mock ${setNo}`;
    renderCurrentExamQuestion(); renderPalette(); startExamTimer(); showView("view-exam");
}

function startExamTimer() {
    stopExamTimer(); updateTimerUI();
    examInterval = setInterval(() => {
        totalTimeSpent++; totalTimeLeft--; questionTimeLeft--;
        if (totalTimeLeft <= 0) { stopExamTimer(); finalizeAndSubmitExam(); return; }
        if (questionTimeLeft <= 0) {
            if (document.getElementById("auto-next-toggle")?.checked) {
                if (currentQIndex < 49) { jumpToQuestion(currentQIndex + 1); return; }
                else { stopExamTimer(); finalizeAndSubmitExam(); return; }
            } else questionTimeLeft = 60;
        }
        updateTimerUI();
    }, 1000);
}
function stopExamTimer() { if (examInterval) { clearInterval(examInterval); examInterval = null; } }
function updateTimerUI() {
    document.getElementById("question-timer-display").innerText = `${String(Math.floor(questionTimeLeft / 60)).padStart(2, "0")}:${String(questionTimeLeft % 60).padStart(2, "0")}`;
    document.getElementById("question-timer-bar").style.width = `${Math.max(0, (questionTimeLeft / 60) * 100)}%`;
    document.getElementById("total-timer-display").innerText = `${String(Math.floor(totalTimeLeft / 60)).padStart(2, "0")}:${String(totalTimeLeft % 60).padStart(2, "0")}`;
}

function renderCurrentExamQuestion() {
    const qObj = currentQuestions[currentQIndex];
    document.getElementById("q-number-badge").innerText = `Question ${currentQIndex + 1} of 50`;
    document.getElementById("q-tag-badge").innerText = qObj.tag;
    document.getElementById("q-text").innerText = qObj.q;
    const isSaved = getBookmarks().some(b => b.q === qObj.q);
    document.getElementById("btn-bookmark-q").innerText = isSaved ? "⭐ Saved" : "☆ Save Q";

    const box = document.getElementById("q-options"); box.innerHTML = "";
    ["A", "B", "C", "D"].forEach((lettr, idx) => {
        const sel = userResponses[currentQIndex] === idx;
        const btn = document.createElement("button");
        btn.className = `w-full text-left p-3.5 rounded-xl border flex items-center justify-between ${sel ? "bg-emerald-500/15 border-emerald-500 text-white font-semibold" : "bg-slate-950 border-slate-800 text-slate-200"}`;
        btn.onclick = () => { userResponses[currentQIndex] = idx; if (questionStatus[currentQIndex] !== "review") questionStatus[currentQIndex] = "answered"; renderCurrentExamQuestion(); renderPalette(); };
        btn.innerHTML = `<div class="flex items-center gap-3"><span class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold ${sel ? "bg-emerald-500 text-slate-950" : "bg-slate-800"}">${lettr}</span><span class="text-sm">${qObj.options[idx]}</span></div>${sel ? '<span class="text-emerald-400 font-bold text-xs">✓</span>' : ''}`;
        box.appendChild(btn);
    });
    document.getElementById("btn-prev-q").disabled = currentQIndex === 0;
    document.getElementById("btn-next-q").innerText = currentQIndex === 49 ? "Finish & Submit ✓" : "Save & Next →";
}

function clearCurrentResponse() { userResponses[currentQIndex] = null; questionStatus[currentQIndex] = "skipped"; renderCurrentExamQuestion(); renderPalette(); }
function markForReviewAndNext() { questionStatus[currentQIndex] = "review"; if (currentQIndex < 49) jumpToQuestion(currentQIndex + 1); else renderPalette(); }
function nextExamQuestion() { if (currentQIndex < 49) jumpToQuestion(currentQIndex + 1); else confirmSubmitExam(); }
function prevExamQuestion() { if (currentQIndex > 0) jumpToQuestion(currentQIndex - 1); }
function jumpToQuestion(idx) { currentQIndex = idx; if (questionStatus[idx] === "unvisited") questionStatus[idx] = "skipped"; questionTimeLeft = 60; updateTimerUI(); renderCurrentExamQuestion(); renderPalette(); }

function renderPalette() {
    const grid = document.getElementById("palette-grid"); grid.innerHTML = "";
    let a = 0, s = 0, r = 0, u = 0;
    for (let i = 0; i < 50; i++) {
        const st = questionStatus[i];
        if (st === "answered") a++; else if (st === "skipped") s++; else if (st === "review") r++; else u++;
        let cls = st === "answered" ? "bg-emerald-500 text-slate-950 font-bold" : st === "review" ? "bg-purple-600 text-white font-bold" : st === "skipped" ? "bg-amber-500/20 text-amber-300 border-amber-500/40" : "bg-slate-950 border-slate-800 text-slate-400";
        if (i === currentQIndex) cls += " ring-2 ring-white";
        const btn = document.createElement("button"); btn.className = `h-8 rounded-lg border text-xs ${cls}`; btn.innerText = i + 1; btn.onclick = () => jumpToQuestion(i);
        grid.appendChild(btn);
    }
    document.getElementById("pal-answered").innerText = a; document.getElementById("pal-skipped").innerText = s; document.getElementById("pal-review").innerText = r; document.getElementById("pal-unvisited").innerText = u;
}

function confirmSubmitExam() { if (confirm("Submit Mock Test now?")) finalizeAndSubmitExam(); }

function finalizeAndSubmitExam() {
    stopExamTimer();
    let c = 0, w = 0, sk = 0;
    currentQuestions.forEach((q, i) => { if (userResponses[i] === null) sk++; else if (userResponses[i] === q.answer) c++; else w++; });
    const score = ((c * 1.0) - (w * 0.25)).toFixed(2);
    const acc = (c + w) > 0 ? Math.round((c / (c + w)) * 100) : 0;
    const timeStr = `${Math.floor(totalTimeSpent / 60)}m ${totalTimeSpent % 60}s`;
    const past = getAttemptsForMock(currentTopicId, currentLevel, currentSetNo);
    const attObj = { attemptNo: past.length + 1, date: new Date().toLocaleString("en-IN"), score, correct: c, wrong: w, skipped: sk, accuracy: acc, timeTaken: timeStr };
    saveAttemptForMock(currentTopicId, currentLevel, currentSetNo, attObj);

    document.getElementById("res-final-score").innerText = score;
    document.getElementById("res-accuracy").innerText = `${acc}%`;
    document.getElementById("res-correct").innerText = c;
    document.getElementById("res-wrong").innerText = w;
    document.getElementById("res-skipped").innerText = sk;
    document.getElementById("res-time-taken").innerText = timeStr;

    const allAtt = getAttemptsForMock(currentTopicId, currentLevel, currentSetNo);
    document.getElementById("res-attempts-tbody").innerHTML = allAtt.map(a => `<tr class="border-b border-slate-800/60"><td class="py-2 px-3 font-bold text-emerald-400">Attempt #${a.attemptNo}</td><td class="py-2 px-3">${a.date}</td><td class="py-2 px-3 font-extrabold text-white">${a.score}/50</td><td class="py-2 px-3 text-emerald-400">${a.correct}</td><td class="py-2 px-3 text-rose-400">${a.wrong}</td><td class="py-2 px-3 text-amber-400">${a.skipped}</td><td class="py-2 px-3">${a.timeTaken}</td></tr>`).join("");
    filterSolutions("all"); showView("view-result");
}

function filterSolutions(mode) {
    const box = document.getElementById("solutions-container"); box.innerHTML = "";
    currentQuestions.forEach((q, idx) => {
        const u = userResponses[idx], isC = u === q.answer, isS = u === null, isW = !isS && !isC;
        if ((mode === "wrong" && !isW) || (mode === "skipped" && !isS) || (mode === "correct" && !isC)) return;
        box.innerHTML += `<div class="bg-slate-950 border border-slate-800 rounded-xl p-4"><div class="flex justify-between text-xs font-bold mb-2"><span>Q.${idx + 1}</span><span class="${isC ? 'text-emerald-400' : isW ? 'text-rose-400' : 'text-amber-400'}">${isC ? '✅ Correct (+1)' : isW ? '❌ Wrong (-0.25)' : '⏭️ Skipped'}</span></div><p class="font-bold text-white text-sm mb-2">${q.q}</p><p class="text-xs text-emerald-400 mb-1">✔ Correct Answer: ${q.options[q.answer]}</p>${isW ? `<p class="text-xs text-rose-400 mb-1">✖ Your Answer: ${q.options[u]}</p>` : ''}<div class="bg-slate-900 p-2.5 rounded-lg text-xs text-slate-300 mt-2">💡 ${q.explanation}</div></div>`;
    });
}

function reattemptCurrentMock() { startMockExam(currentSetNo); }
function backToSetsFromResult() { renderMockSetsGrid(); showView("view-sets"); }
function toggleBookmarkCurrent() { const q = currentQuestions[currentQIndex]; let l = getBookmarks(); const i = l.findIndex(b => b.q === q.q); if (i >= 0) l.splice(i, 1); else l.push({ q: q.q, answerText: q.options[q.answer], explanation: q.explanation, topic: currentTopicId.toUpperCase() }); saveBookmarks(l); renderCurrentExamQuestion(); }
function openHistoryModal() { const map = getAllAttemptsMap(), box = document.getElementById("all-history-content"); box.innerHTML = Object.keys(map).length ? Object.keys(map).map(k => `<div class="bg-slate-950 p-3 rounded-xl border border-slate-800"><div class="font-bold text-emerald-400 mb-1">${k.replace(/__/g, ' • ').toUpperCase()}</div>${map[k].map(a => `<div>Attempt #${a.attemptNo}: <b>${a.score}/50</b> (${a.date})</div>`).join("")}</div>`).join("") : "<p class='text-center py-6'>No attempts yet.</p>"; document.getElementById("modal-history").classList.remove("hidden"); }
function clearAllHistory() { if (confirm("Reset all saved history?")) { localStorage.removeItem("majid_jkssb_attempts_v1"); updateTopStats(); renderTopicsGrid(); closeModal("modal-history"); } }
function openBookmarksModal() { const l = getBookmarks(); document.getElementById("bookmarks-content").innerHTML = l.length ? l.map((b, i) => `<div class="bg-slate-950 p-3 rounded-xl border border-slate-800"><b>Q${i + 1}: ${b.q}</b><p class="text-emerald-400 mt-1">✔ ${b.answerText}</p><p class="text-slate-400 mt-1">💡 ${b.explanation}</p></div>`).join("") : "<p class='text-center py-6'>No saved questions yet.</p>"; document.getElementById("modal-bookmarks").classList.remove("hidden"); }
function openImporterModal() { document.getElementById("imp-topic").innerHTML = JKSSB_TOPICS.map(t => `<option value="${t.id}">${t.title}</option>`).join(""); document.getElementById("modal-importer").classList.remove("hidden"); }
function saveCustomQuestions() { try { const p = JSON.parse(document.getElementById("imp-json").value.trim()); localStorage.setItem(`majid_custom_${document.getElementById("imp-topic").value}_${document.getElementById("imp-level").value}_${document.getElementById("imp-set").value}`, JSON.stringify(p)); alert("Saved!"); closeModal("modal-importer"); } catch (e) { alert("Invalid JSON!"); } }
function closeModal(id) { document.getElementById(id).classList.add("hidden"); }
window.addEventListener("DOMContentLoaded", () => { renderTopicsGrid(); updateTopStats(); });
                                           
