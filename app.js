const JKSSB_TOPICS = [
    { id: "tenses", title: "1. Tenses & Sequence of Tenses", desc: "700 Pure Tenses MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "⏳", mode: "standard" },
    { id: "modals", title: "2. Modals & Auxiliaries", desc: "700 Pure Modals MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "⚡", mode: "standard" },
    { id: "articles", title: "3. Articles & Determiners", desc: "700 Pure Articles MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "🅰️", mode: "standard" },
    { id: "narration", title: "4. Narration (Direct & Indirect)", desc: "700 Pure Narration MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "🗣️", mode: "standard" },
    { id: "clauses", title: "5. Clauses (Noun, Adjective, Adverb)", desc: "700 Pure Clauses MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "🔗", mode: "standard" },
    { id: "prepositions", title: "6. Uses of Prepositions", desc: "700 Pure Preposition MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "📍", mode: "standard" },
    { id: "pronouns", title: "7. Pronouns & Relative Pronouns", desc: "700 Pure Pronoun MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "👤", mode: "standard" },
    { id: "homonyms", title: "8. Homonyms, Homophones & Word Pairs", desc: "700 Pure Word-Pair MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "⚖️", mode: "standard" },
    { id: "rearranging", title: "9. Rearranging Jumbled Sentences", desc: "700 Pure Para-Jumble MCQs (Basic: 100, Medium: 500, Hard: 100)", icon: "🧩", mode: "standard" },
    { id: "editing", title: "10. Editing, Proof Reading & Punctuation", desc: "700 Pure Error-Spotting & Punctuation MCQs (Basic/Med/Hard)", icon: "✍️", mode: "standard" },
    { id: "cloze", title: "11. Cloze Test Passages (25 Medium Sets)", desc: "25 Medium Level Passages • 5 Blanks per Passage (125 Qs)", icon: "📝", mode: "cloze" },
    { id: "dialogue", title: "12. Dialogue Completion (20 Sets)", desc: "20 JKSSB Dialogue Sets • 8 Questions per Dialogue (160 Qs)", icon: "💬", mode: "dialogue" }
];

const PURE_SEED_VAULT = {
    tenses: [
        { q: "[JKSSB FAA PYQ] Identify the tense: 'I have been working on the problem.'", options: ["Present Continuous", "Present Perfect Continuous", "Past Perfect", "Past Continuous"], answer: 1, explanation: "'Have/has been + V-ing' is Present Perfect Continuous Tense." },
        { q: "[JKSSB Accounts Asst PYQ] 'By the time we arrived, the movie _______ already started.'", options: ["had", "having", "has", "have"], answer: 0, explanation: "For the earlier of two past actions, Past Perfect ('had + V3') is used." },
        { q: "[JKSSB PYQ] 'I _______ my homework when the phone rang.'", options: ["am doing", "do", "did", "was doing"], answer: 3, explanation: "An ongoing past action interrupted by a shorter past action takes Past Continuous ('was doing')." },
        { q: "[JKSSB PYQ] 'It _______ raining since morning when you rang me up.'", options: ["had been", "has been", "have been", "was"], answer: 0, explanation: "Past reference ('when you rang me up') + 'since morning' takes Past Perfect Continuous ('had been')." },
        { q: "[JKSSB PYQ] 'She _______ her house seven days ago.'", options: ["leave", "leaves", "leaving", "left"], answer: 3, explanation: "Time expressions with 'ago' always take Simple Past (V2 = 'left')." }
    ],
    modals: [
        { q: "[JKSSB FAA PYQ] 'I _______ swim when I was young.'", options: ["might", "should", "could", "will"], answer: 2, explanation: "'Could' expresses past general ability ('when I was young')." },
        { q: "[JKSSB PYQ] 'All company employees _______ abide by the rules and regulations provided.'", options: ["ought to", "would", "could", "might"], answer: 0, explanation: "'Ought to' expresses moral and institutional duty." },
        { q: "[JKSSB PYQ] 'We _______ have locked the gate. Then the dog wouldn't have got out.'", options: ["ought to", "would", "may", "have to"], answer: 0, explanation: "'Ought to have + V3' expresses an unfulfilled past obligation." },
        { q: "[JKSSB PYQ] 'He studied hard lest he _______ fail.'", options: ["would", "should", "could", "might"], answer: 1, explanation: "The conjunction 'lest' is strictly followed by the modal 'should'." },
        { q: "[JKSSB PYQ] In which sentence is the modal verb used to express necessity?", options: ["You should take a break.", "You can take a break.", "You might take a break.", "You could take a break."], answer: 0, explanation: "'Should/Must' expresses obligation or necessity." }
    ],
    articles: [
        { q: "[JKSSB Constable PYQ] 'John decided to enroll in ___ MBA program at ___ University to enhance his skills.'", options: ["an, the", "No article, the", "an, a", "a, an"], answer: 2, explanation: "'MBA' starts with vowel sound 'em' -> 'an'; 'University' starts with consonant sound 'yu' -> 'a'." },
        { q: "[JKSSB Constable PYQ] 'I work at ___ company in New York. ___ company is called Global Tech Solutions.'", options: ["a, the", "the, the", "a, No article", "an, the"], answer: 0, explanation: "First mention of singular countable noun takes 'a'; second specific mention takes 'the'." },
        { q: "[JKSSB PYQ] 'Sudha is studying in ___ Canadian University. It will take ___ hour to reach the airport.'", options: ["an, a", "the, an", "the, a", "a, an"], answer: 3, explanation: "'Canadian' starts with consonant sound -> 'a'; 'hour' has silent 'h' -> 'an'." },
        { q: "[JKSSB PYQ] '___ recent survey indicates that ___ number of drug addicts is growing day by day.'", options: ["A, the", "No article, the", "The, the", "A, a"], answer: 0, explanation: "'A recent survey' (indefinite) and 'the number of' (specific quantity)." },
        { q: "[JKSSB FAA PYQ] 'She had ___ small supporting part ___ play.'", options: ["the, an", "no article, an", "an, no article", "a, in the"], answer: 3, explanation: "'A small supporting part in the play'." }
    ],
    narration: [
        { q: "[JKSSB FAA PYQ] The reporter said, 'We have been following the matter closely for a month.'", options: ["The reporter said that they had been following the matter closely for a month.", "The reporter said that we had been following the matter closely for a month.", "The reporter said that they have been following the matter closely for a month.", "The reporter said that they has been following the matter."], answer: 0, explanation: "'We' changes to 'they' and Present Perfect Continuous changes to Past Perfect Continuous ('had been following')." },
        { q: "[JKSSB Accounts Asst PYQ] 'What are you doing here?', she asked me.", options: ["She asked what I was doing here.", "She wanted to know what I am doing here.", "She wants to know what I was doing here.", "She wanted to know what I was doing there."], answer: 3, explanation: "'Here' becomes 'there' and Present Continuous becomes Past Continuous ('was doing')." },
        { q: "[JKSSB PYQ] He said, 'I must go at once.'", options: ["He said that he has to go at once.", "He said that he had gone at once.", "He said that he had to go at once.", "He asked if he had to go at once."], answer: 2, explanation: "In indirect speech, 'must' indicating immediate necessity converts to 'had to'." },
        { q: "[JKSSB PYQ] My nephew said, 'I have decided to take coaching in badminton.'", options: ["My nephew said that he had decided to take coaching in badminton.", "My nephew said that I have decided to take coaching in badminton.", "My nephew told that he is deciding to take coaching.", "My nephew told that he was deciding."], answer: 0, explanation: "Present Perfect ('have decided') shifts to Past Perfect ('had decided')." }
    ],
    clauses: [
        { q: "[JKSSB Constable PYQ] Pick out the adverb clause: 'Although it was raining, they continued their hike.'", options: ["it was raining", "they continued their hike", "Although it was raining", "continued their hike"], answer: 2, explanation: "'Although it was raining' is a subordinate Adverb Clause of Concession." },
        { q: "[JKSSB FAA PYQ] Determine the function of the underlined clause: 'The bankers need to know **what they should do**.'", options: ["Noun Clause", "Adverb Clause", "Adjective Clause", "Principal Clause"], answer: 0, explanation: "It answers 'need to know what?' (Object of the infinitive 'to know'), so it is a Noun Clause." },
        { q: "[JKSSB PYQ] Pick out the relative clause: 'The cat, which scratched my mum, is wild.'", options: ["The cat which", "which scratched my mum", "is wild", "scratched my mum"], answer: 1, explanation: "'Which scratched my mum' modifies 'The cat' and starts with relative pronoun 'which'." },
        { q: "[JKSSB PYQ] Pick out the subordinate clause: 'If you work on Sunday, I will look after the children.'", options: ["If you work", "on Sunday, I will look after", "I will look after the children", "If you work on Sunday"], answer: 3, explanation: "'If you work on Sunday' is the subordinate conditional clause." }
    ]
};
         Object.assign(PURE_SEED_VAULT, {
    prepositions: [
        { q: "[JKSSB Constable PYQ] 'As they navigated through the dense forest, they stumbled ___ an ancient ruin.'", options: ["towards", "upon", "under", "around"], answer: 1, explanation: "'Stumble upon' means to discover something by chance." },
        { q: "[JKSSB PYQ] 'She stood ___ the window, lost in thought ___ her future plans.'", options: ["by, about", "beside, towards", "by, towards", "in, for"], answer: 0, explanation: "Stand 'by' the window; lost in thought 'about' future plans." },
        { q: "[JKSSB PYQ] 'The team worked tirelessly ___ the guidance of their coach ___ the challenging season.'", options: ["by, about", "under, towards", "under, during", "in, at"], answer: 2, explanation: "'Under' the guidance of someone, and 'during' a season." },
        { q: "[JKSSB PYQ] 'The sergeant asked him to come to the Police station _______.'", options: ["between 4 PM to 5 PM", "between 4 PM and 5 PM", "between 4 PM or 5 PM", "between 4 PM till 5 PM"], answer: 1, explanation: "'Between' is always followed by 'and' (never 'to')." },
        { q: "[JKSSB PYQ] 'We should prevent damage ___ and theft of public property.'", options: ["to", "of", "at", "on"], answer: 0, explanation: "Fixed preposition: 'damage to' something." }
    ],
    pronouns: [
        { q: "[JKSSB Constable PYQ] What is the type of pronouns of underlined words: 'Did **you** do it **yourself**?'", options: ["Personal pronoun, Reflexive pronoun", "Personal pronoun, Personal pronoun", "Interrogative pronoun, Reflexive pronoun", "Demonstrative pronoun, Reflexive"], answer: 0, explanation: "'You' is a Personal pronoun and 'yourself' is a Reflexive/Emphatic pronoun." },
        { q: "[JKSSB Constable PYQ] Which of the following sentences has a possessive pronoun?", options: ["The team members encourage each other.", "There was a period when I experienced joy.", "That cat in the yard belongs to her.", "This book is mine, not yours."], answer: 3, explanation: "'Mine' and 'yours' are possessive pronouns." },
        { q: "[JKSSB PYQ] '_______ of the two sisters is married.'", options: ["Both", "Every", "Each", "Many"], answer: 2, explanation: "With singular verb 'is' and 'of the two', distributive pronoun 'Each' is used." },
        { q: "[JKSSB PYQ] Which one is the correct sentence regarding pronoun usage?", options: ["He who speaks the truth, everybody loves him.", "Everybody loves him who speaks the truth.", "Everybody who loves him speaks the truth.", "Everybody whom he loves speaks truth."], answer: 1, explanation: "'Everybody loves him who speaks the truth' avoids redundant pronoun repetition." }
    ],
    homonyms: [
        { q: "[JKSSB FAA PYQ] 'He is not coming this _______ because he is still feeling _______.'", options: ["weak, week", "weak, weak", "week, week", "week, weak"], answer: 3, explanation: "'Week' means 7 days; 'weak' means lacking physical strength." },
        { q: "[JKSSB Constable PYQ] 'The blacksmith shaped the malleable _______ while the apprentice demonstrated his _______.'", options: ["metal, mettle", "mettle, mettle", "metal, metal", "mettle, metal"], answer: 0, explanation: "'Metal' is iron/steel; 'mettle' means spirit/resilience." },
        { q: "[JKSSB Accounts Asst PYQ] 'Everyone went to the picnic _______ John, who was sick.'", options: ["aspect", "accept", "except", "expect"], answer: 2, explanation: "'Except' means excluding; 'accept' means to receive." },
        { q: "[JKSSB PYQ] 'The President gave _______ to the bill.'", options: ["accent", "ascent", "assent", "ascend"], answer: 2, explanation: "'Assent' means official approval or sanction." },
        { q: "[JKSSB PYQ] 'The mournful _______ of the grieving widow _______ through the empty halls.'", options: ["wail, echoed", "whale, echoed", "pail, filled", "bale, resounded"], answer: 0, explanation: "'Wail' means a prolonged cry of grief (homophone of whale)." }
    ],
    rearranging: [
        { q: "[JKSSB FAA PYQ] Rearrange: Asked / I / come / to / him / today", options: ["I asked to come to him today.", "I asked him to come today.", "Today I come to him asked.", "Today I come him to asked."], answer: 1, explanation: "Subject (I) + Verb (asked) + Object (him) + Infinitive (to come) + Adverb (today)." },
        { q: "[JKSSB PYQ] Rearrange P, Q, R, S:\nP: who secures\nQ: will receive a trophy\nR: the highest marks\nS: the child", options: ["P Q R S", "Q R S P", "S P R Q", "Q R P S"], answer: 2, explanation: "'The child (S) who secures (P) the highest marks (R) will receive a trophy (Q)'." },
        { q: "[JKSSB PYQ] Rearrange P, Q, R, S:\nP: we must read\nQ: if we want to absorb the fruits of great literature\nR: but with concentration\nS: them not as we do cricket stories", options: ["P R Q S", "P R S Q", "P S Q R", "Q P S R"], answer: 3, explanation: "'If we want to absorb... (Q) we must read (P) them not as we do cricket stories (S) but with concentration (R)'." }
    ],
    editing: [
        { q: "[JKSSB Constable PYQ] Find the error part: 'Yesterday, the wild animal destroyed (a)/ crops at a nascent stage (b)/ and cause huge losses (c)/ to the farmers (d).'", options: ["Yesterday, the wild animal destroyed", "crops at a nascent stage", "and cause huge losses", "to the farmers"], answer: 2, explanation: "Parallel past tense required: 'and caused huge losses' instead of 'cause'." },
        { q: "[JKSSB Constable PYQ] Identify the sentence with correct punctuation marks:", options: ["Are you coming to the party? he asked, raising an eyebrow.", "\"Are you coming to the party?\" he asked, raising an eyebrow.", "\"Are you coming to the party\" he asked; raising an eyebrow.", "Are you coming to the party? he asked raising an eyebrow."], answer: 1, explanation: "Direct question must be enclosed in double quotes with a question mark inside." },
        { q: "[JKSSB SI PYQ] Identify the error part: 'The college offer / all the courses of arts / and humanity / but no courses of science.'", options: ["The college offer", "all the courses", "of arts and humanity", "but no courses of science"], answer: 0, explanation: "Singular subject 'The college' requires singular verb 'offers'." }
    ]
});

const SUBS = ["The candidate", "Majid", "The officer", "Every applicant", "The teacher", "The auditor", "Our team", "The student", "The clerk", "The inspector"];
const PLACES = ["in Srinagar", "at the Jammu office", "during the CBT exam", "in the secretariat", "at the district center", "in the valley", "during the audit", "at the university", "in the library", "at the workshop"];

function generatePureSingleQ(topicId, level, setNo, qNum) {
    const idx = (setNo - 1) * 50 + qNum;
    const seeds = PURE_SEED_VAULT[topicId] || PURE_SEED_VAULT.tenses;
    if (qNum < seeds.length && setNo === 1 && level === "basic") {
        return { ...seeds[qNum], tag: `${topicId.toUpperCase()} • PYQ` };
    }
    const s = SUBS[idx % SUBS.length];
    const p = PLACES[(idx * 3) % PLACES.length];
    const v = (idx + setNo) % 5;

    let item;
    if (topicId === "tenses") {
        const rules = [
            { q: `Complete with the correct tense: "${s} _______ the verification report ${p} before the director arrived."`, options: ["submitted", "has submitted", "had submitted", "submits"], answer: 2, explanation: "Past Perfect ('had + V3') is mandatory for the action that happened before another past action." },
            { q: `Spot the right tense: "${s} _______ preparing for the JKSSB exam ${p} since January."`, options: ["is", "was", "has been", "have been"], answer: 2, explanation: "Singular subject with 'since + point of time' takes Present Perfect Continuous ('has been')." },
            { q: `Fill in the blank: "If ${s.toLowerCase()} _______ the instructions carefully ${p}, there will be no error."`, options: ["read", "reads", "will read", "had read"], answer: 1, explanation: "First Conditional: 'If + Simple Present (reads)' pairs with 'will + V1'." },
            { q: `Choose the right verb: "It is high time ${s.toLowerCase()} _______ the pending assignment ${p}."`, options: ["completes", "completed", "will complete", "has completed"], answer: 1, explanation: "After 'It is high time + subject', Simple Past (V2 = 'completed') is always used." },
            { q: `Identify the correct form: "Scarcely had ${s.toLowerCase()} entered the room ${p} _______ the power went out."`, options: ["than", "when", "then", "after"], answer: 1, explanation: "'Scarcely/Hardly ... had' is followed by 'when' in Past Perfect inversion." }
        ];
        item = rules[v];
    } else if (topicId === "modals") {
        const rules = [
            { q: `Select the correct Modal: "${s} _______ revise the syllabus thoroughly ${p} lest marks should be lost."`, options: ["will", "should", "may", "can"], answer: 1, explanation: "Strong advice and 'lest' clauses use the modal 'should'." },
            { q: `Fill in the modal: "${s} _______ carry the original Domicile Certificate ${p}; it is strictly compulsory."`, options: ["might", "could", "must", "may"], answer: 2, explanation: "'Must' denotes mandatory official compulsion." },
            { q: `Choose the appropriate modal: "When ${s.toLowerCase()} was posted ${p}, he _______ solve 50 questions in 30 minutes."`, options: ["can", "could", "may", "must"], answer: 1, explanation: "'Could' expresses past ability." },
            { q: `Pick the right modal: "_______ you please verify this application form ${p}?"`, options: ["Must", "Could", "Might", "Ought"], answer: 1, explanation: "'Could / Would' is used for polite formal requests." },
            { q: `Fill in the modal auxiliary: "${s} _______ have informed the authority earlier ${p}, but forgot."`, options: ["should", "can", "shall", "need"], answer: 0, explanation: "'Should have + V3' indicates a past duty that was not fulfilled." }
        ];
        item = rules[v];
    } else if (topicId === "articles") {
        const rules = [
            { q: `Choose the correct articles: "${s} met ___ honest officer and ___ university professor ${p}."`, options: ["a, an", "an, a", "the, an", "an, the"], answer: 1, explanation: "'Honest' starts with a vowel sound ('an'); 'university' starts with a 'yu' consonant sound ('a')." },
            { q: `Fill in the article: "___ Chenab river flows majestically near the highway ${p}."`, options: ["A", "An", "The", "No article"], answer: 2, explanation: "Names of rivers always take the definite article 'The'." },
            { q: `Select the right article: "${s} was appointed as ___ SDM ${p} last month."`, options: ["a", "an", "the", "No article"], answer: 1, explanation: "Abbreviation 'SDM' begins with vowel sound 'es', so 'an' is used." },
            { q: `Choose the correct option: "___ gold ornaments kept ${p} belong to the bride."`, options: ["A", "An", "The", "No article"], answer: 2, explanation: "When an uncountable material noun ('gold') is particularized, it takes 'The'." },
            { q: `Fill in the blank: "${s} plays ___ flute beautifully during cultural events ${p}."`, options: ["a", "an", "the", "No article"], answer: 2, explanation: "Musical instruments take the definite article 'the'." }
        ];
        item = rules[v];
    } else if (topicId === "narration") {
        const rules = [
            { q: `Change to Indirect Speech: ${s} said ${p}, "I have completed my work."`, options: [`${s} said that he had completed his work.`, `${s} said that he has completed his work.`, `${s} told that I had completed my work.`, `${s} said that he completed his work.`], answer: 0, explanation: "Present Perfect ('have completed') shifts to Past Perfect ('had completed')." },
            { q: `Convert to Indirect Speech: ${s} said to me ${p}, "Are you attending the session today?"`, options: [`${s} asked me if I was attending the session that day.`, `${s} asked me whether I am attending today.`, `${s} told me that I was attending that day.`, `${s} asked me if was I attending that day.`], answer: 0, explanation: "'Today' becomes 'that day' and Present Continuous becomes Past Continuous." },
            { q: `Change the Narration: ${s} said to the clerk ${p}, "Please verify these documents."`, options: [`${s} ordered the clerk to verify these documents.`, `${s} requested the clerk to verify those documents.`, `${s} asked the clerk please verify those documents.`, `${s} told the clerk that verify those documents.`], answer: 1, explanation: "'Please' converts to 'requested + object + to + V1', and 'these' becomes 'those'." },
            { q: `Direct to Indirect: ${s} said ${p}, "Honesty is the best policy."`, options: [`${s} said that honesty was the best policy.`, `${s} said that honesty is the best policy.`, `${s} told that honesty had been the best policy.`, `${s} asked if honesty is the best policy.`], answer: 1, explanation: "Proverbs and universal truths retain their present tense in Indirect Speech." },
            { q: `Convert into Indirect: ${s} said ${p}, "Where did you keep the register?"`, options: [`${s} asked where I had kept the register.`, `${s} asked where did I keep the register.`, `${s} asked where I kept the register.`, `${s} told where I had kept the register.`], answer: 0, explanation: "Simple Past ('did keep') changes to Past Perfect ('had kept') in statement word order." }
        ];
        item = rules[v];
    } else {
        item = seeds[idx % seeds.length];
    }

    const shift = (setNo + qNum) % 4;
    const rotatedOpts = [0, 1, 2, 3].map(i => item.options[(i + shift) % 4]);
    const newAns = (item.answer - shift + 4) % 4;
    return {
        q: `[${level.toUpperCase()} Set ${setNo} • Q${qNum + 1}] ${item.q}`,
        options: rotatedOpts,
        answer: newAns,
        explanation: item.explanation,
        tag: `${topicId.toUpperCase()} • ${level.toUpperCase()}`
    };
                                                                                                               }
                                                                                                                               function buildTopicPureMock(topicId, level, setNo) {
    if (topicId === "cloze") {
        const themes = ["Digital Governance in J&K", "Environmental Conservation in Himalayas", "Importance of Competitive Exams", "Financial Literacy & Banking", "Sustainable Tourism in Kashmir"];
        const theme = themes[(setNo - 1) % themes.length];
        const passage = `📘 CLOZE TEST PASSAGE (Medium Set #${setNo} — ${theme}):\nRead the paragraph carefully and fill in blanks (1) to (5):\n\n"In the modern era of ${theme}, consistent effort is the key to success. Every aspirant ___(1)___ understand that accuracy matters as much as speed. Those ___(2)___ revise their notes systematically always stay ahead ___(3)___ the competition. Neither distractions nor laziness ___(4)___ allowed to derail one's focus, because perseverance ultimately ___(5)___ rich dividends."`;
        const qs = [
            { q: "Select the most appropriate word for Blank (1):", options: ["must", "ought", "dare", "used"], answer: 0, explanation: "'Must' takes bare infinitive 'understand' to show necessity." },
            { q: "Select the most appropriate relative pronoun for Blank (2):", options: ["which", "whom", "who", "whose"], answer: 2, explanation: "'Who' acts as the subject pronoun referring to 'Those (aspirants)'." },
            { q: "Select the most appropriate preposition for Blank (3):", options: ["of", "from", "with", "at"], answer: 0, explanation: "Fixed phrase: 'ahead of' the competition." },
            { q: "Select the correct verb for Blank (4):", options: ["are", "were", "is", "have"], answer: 2, explanation: "With 'Neither...nor', the verb agrees with the closer singular noun 'laziness' -> 'is'." },
            { q: "Select the correct verb form for Blank (5):", options: ["yield", "yielding", "yields", "yielded"], answer: 2, explanation: "Singular uncountable subject 'perseverance' takes singular verb 'yields'." }
        ];
        return qs.map((item, i) => ({ ...item, passage, tag: `Cloze Set ${setNo} • Q${i + 1}/5` }));
    }

    if (topicId === "dialogue") {
        const scenarios = ["Verification Officer &JKSSB Candidate", "Bank Manager & Account Holder", "University Professor & IGNOU Student", "Doctor & Patient at Clinic", "Tourist & Local Guide in Srinagar"];
        const sc = scenarios[(setNo - 1) % scenarios.length];
        const passage = `💬 DIALOGUE CONVERSATION (Set #${setNo} — ${sc}):\nRead the conversation below and answer Questions 1 to 8:\n\nSpeaker A: "Good morning! May I ___(1)___ your application dossier?"\nSpeaker B: "Good morning, Sir. Here ___(2)___ all my original certificates."\nSpeaker A: "How long ___(3)___ you been preparing for this recruitment?"\nSpeaker B: "I have been preparing ___(4)___ the last eight months."\nSpeaker A: "If you qualify this stage, ___(5)___ you join immediately?"\nSpeaker B: "Yes Sir, I would be delighted ___(6)___ serve the department."\nSpeaker A: "Please sign ___(7)___ the bottom of this verification sheet."\nSpeaker B: "Thank you so much! I look forward to ___(8)___ the final list."`;
        const qs = [
            { q: `Dialogue Set #${setNo} — Choose the best word for Blank (1):`, options: ["examine", "examining", "examined", "to examine"], answer: 0, explanation: "Modal 'May' is always followed by V1 ('examine')." },
            { q: `Dialogue Set #${setNo} — Choose the correct verb for Blank (2):`, options: ["is", "are", "was", "has"], answer: 1, explanation: "In 'Here ___ all my original certificates', the plural subject 'certificates' takes 'are'." },
            { q: `Dialogue Set #${setNo} — Choose the right auxiliary for Blank (3):`, options: ["are", "were", "have", "had"], answer: 2, explanation: "Present Perfect Continuous question with 'you' takes 'have'." },
            { q: `Dialogue Set #${setNo} — Choose the correct preposition for Blank (4):`, options: ["since", "for", "from", "by"], answer: 1, explanation: "A period/duration of time ('the last eight months') takes 'for'." },
            { q: `Dialogue Set #${setNo} — Complete the conditional in Blank (5):`, options: ["would", "will", "had", "did"], answer: 1, explanation: "Type-1 Conditional: 'If + Present Simple' pairs with 'will' in the main clause." },
            { q: `Dialogue Set #${setNo} — Fill in Blank (6):`, options: ["for", "in", "to", "with"], answer: 2, explanation: "'Delighted to + V1' is the standard infinitive structure." },
            { q: `Dialogue Set #${setNo} — Choose the exact preposition for Blank (7):`, options: ["at", "on", "in", "over"], answer: 0, explanation: "Standard phrase: 'at the bottom of' a page/sheet." },
            { q: `Dialogue Set #${setNo} — Complete the phrase 'look forward to' in Blank (8):`, options: ["see", "seeing", "saw", "seen"], answer: 1, explanation: "Golden JKSSB Rule: 'Look forward to / accustomed to / with a view to' takes a Gerund (V-ing = 'seeing')." }
        ];
        return qs.map((item, i) => ({ ...item, passage, tag: `Dialogue Set ${setNo} • Q${i + 1}/8` }));
    }

    // For Clause, Preposition, Pronoun, Homonym, Rearranging, Editing -> Use pure topic bank cycling with unique variations
    const arr = [];
    const seeds = PURE_SEED_VAULT[topicId] || PURE_SEED_VAULT.tenses;
    for (let i = 0; i < 50; i++) {
        if (["tenses", "modals", "articles", "narration"].includes(topicId)) {
            arr.push(generatePureSingleQ(topicId, level, setNo, i));
        } else {
            const base = seeds[(i + setNo) % seeds.length];
            const shift = (setNo + i) % 4;
            const rotated = [0, 1, 2, 3].map(k => base.options[(k + shift) % 4]);
            const ans = (base.answer - shift + 4) % 4;
            arr.push({
                q: `[${topicId.toUpperCase()} • ${level.toUpperCase()} Mock ${setNo} • Q${i + 1}] ${base.q}`,
                options: rotated,
                answer: ans,
                explanation: base.explanation,
                tag: `${topicId.toUpperCase()} • ${level.toUpperCase()}`
            });
        }
    }
    return arr;
}

let currentView = "view-dashboard";
let currentTopicId = "tenses", currentLevel = "basic", currentSetNo = 1;
let currentQuestions = [], currentQIndex = 0, userResponses = [], questionStatus = [];
let questionTimeLeft = 60, totalTimeLeft = 3000, totalTimeSpent = 0, examInterval = null;

function getAllAttemptsMap() { try { return JSON.parse(localStorage.getItem("majid_jkssb_attempts_v2") || "{}"); } catch (e) { return {}; } }
function getMockKey(t, l, s) { return `${t}__${l}__${s}`; }
function getAttemptsForMock(t, l, s) { return getAllAttemptsMap()[getMockKey(t, l, s)] || []; }
function saveAttemptForMock(t, l, s, att) {
    const map = getAllAttemptsMap(), key = getMockKey(t, l, s);
    if (!map[key]) map[key] = [];
    map[key].push(att);
    localStorage.setItem("majid_jkssb_attempts_v2", JSON.stringify(map));
    updateTopStats();
}

function showView(viewId, pushHistory = true) {
    ["view-dashboard", "view-sets", "view-exam", "view-result"].forEach(id => document.getElementById(id).classList.add("hidden"));
    document.getElementById(viewId).classList.remove("hidden");
    currentView = viewId;
    const backBtn = document.getElementById("top-back-btn");
    if (viewId === "view-dashboard") backBtn.classList.add("hidden");
    else backBtn.classList.remove("hidden");

    if (pushHistory) {
        history.pushState({ view: viewId, topicId: currentTopicId, level: currentLevel }, "", `#${viewId}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleBackNavigation() {
    if (currentView === "view-exam") {
        if (!confirm("Live Mock Test chal raha hai! Kya tu test chhod kar Sets par wapas jana chahta hai?")) {
            history.pushState({ view: "view-exam" }, "", "#view-exam");
            return;
        }
        stopExamTimer();
        renderMockSetsGrid();
        showView("view-sets", false);
    } else if (currentView === "view-result") {
        renderMockSetsGrid();
        showView("view-sets", false);
    } else if (currentView === "view-sets") {
        renderTopicsGrid();
        updateTopStats();
        showView("view-dashboard", false);
    }
}

window.addEventListener("popstate", () => { handleBackNavigation(); });
                                                                                          function goHome() {
    if (examInterval && !confirm("Live Mock chal raha hai! Kya beech mein chhod kar Home par jana hai?")) return;
    stopExamTimer(); renderTopicsGrid(); updateTopStats(); showView("view-dashboard");
}

function updateTopStats() {
    const map = getAllAttemptsMap();
    let total = 0, sumAcc = 0, best = 0;
    Object.values(map).forEach(arr => arr.forEach(a => {
        total++; sumAcc += (a.accuracy || 0);
        if (parseFloat(a.score) > best) best = parseFloat(a.score);
    }));
    document.getElementById("nav-attempt-count").innerText = total;
    document.getElementById("stat-total-tests").innerText = total;
    document.getElementById("stat-avg-acc").innerText = total > 0 ? `${Math.round(sumAcc / total)}%` : "0%";
    document.getElementById("stat-best-score").innerText = best.toFixed(2);
}

function renderTopicsGrid() {
    const query = (document.getElementById("topic-search")?.value || "").toLowerCase();
    const grid = document.getElementById("topics-grid"); grid.innerHTML = "";
    const map = getAllAttemptsMap();

    JKSSB_TOPICS.filter(t => t.title.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query)).forEach(topic => {
        let count = 0;
        ["basic", "medium", "hard"].forEach(l => { for (let s = 1; s <= 25; s++) count += (map[getMockKey(topic.id, l, s)] || []).length; });
        const badge = topic.mode === "cloze" ? "25 Sets • 125 Qs" : topic.mode === "dialogue" ? "20 Sets • 160 Qs" : "14 Mocks • 700 Qs";
        const card = document.createElement("div");
        card.className = "bg-slate-900 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-5 cursor-pointer transition flex flex-col justify-between shadow-lg";
        card.onclick = () => openTopicSets(topic.id);
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-3">
                    <span class="text-2xl bg-slate-950 w-11 h-11 rounded-xl flex items-center justify-center border border-slate-800">${topic.icon}</span>
                    <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">${badge}</span>
                </div>
                <h4 class="text-base font-extrabold text-white mb-1">${topic.title}</h4>
                <p class="text-xs text-slate-400 mb-4">${topic.desc}</p>
            </div>
            <div class="pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
                <span class="text-slate-400">100% Pure Topic</span>
                <span class="font-bold text-emerald-400">${count > 0 ? `✔ ${count} Attempts` : 'Open Mocks →'}</span>
            </div>`;
        grid.appendChild(card);
    });
}

function openTopicSets(topicId) {
    currentTopicId = topicId;
    const t = JKSSB_TOPICS.find(x => x.id === topicId) || JKSSB_TOPICS[0];
    document.getElementById("selected-topic-title").innerText = `${t.icon} ${t.title}`;
    document.getElementById("selected-topic-desc").innerText = t.desc;
    const tabsBox = document.getElementById("level-tabs-box");
    if (t.mode === "cloze" || t.mode === "dialogue") {
        tabsBox.classList.add("hidden");
        currentLevel = "medium";
        renderMockSetsGrid();
    } else {
        tabsBox.classList.remove("hidden");
        switchLevelTab("basic");
    }
    showView("view-sets");
}

function switchLevelTab(level) {
    currentLevel = level;
    ["basic", "medium", "hard"].forEach(l => {
        document.getElementById(`tab-${l}`).className = l === level
            ? "px-3 py-2 rounded-lg text-xs font-extrabold bg-emerald-500 text-slate-950"
            : "px-3 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white";
    });
    renderMockSetsGrid();
}

function renderMockSetsGrid() {
    const grid = document.getElementById("sets-grid"); grid.innerHTML = "";
    const t = JKSSB_TOPICS.find(x => x.id === currentTopicId);
    const totalSets = t.mode === "cloze" ? 25 : t.mode === "dialogue" ? 20 : (currentLevel === "medium" ? 10 : 2);
    const qPerSet = t.mode === "cloze" ? 5 : t.mode === "dialogue" ? 8 : 50;

    for (let s = 1; s <= totalSets; s++) {
        const past = getAttemptsForMock(currentTopicId, currentLevel, s);
        const has = past.length > 0;
        const best = has ? Math.max(...past.map(a => parseFloat(a.score))).toFixed(2) : null;
        const card = document.createElement("div");
        card.className = "bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-1.5">
                    <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400">${currentLevel.toUpperCase()} MOCK #${s}</span>
                    <span class="text-xs font-mono text-slate-400">${qPerSet} Questions • ${qPerSet} Mins</span>
                </div>
                <h4 class="text-sm md:text-base font-extrabold text-white">${t.title.replace(/^\d+\.\s*/, '')} — Set ${s}</h4>
                ${has ? `<div class="mt-2.5 bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs">
                    <div class="flex justify-between text-emerald-400 font-bold"><span>✅ Attempted ${past.length}x</span><span>Best: ${best}/${qPerSet}</span></div>
                    <div class="flex justify-between text-slate-400 text-[11px] mt-1"><span>Attempt 1: <b class="text-white">${past[0].score}/${qPerSet}</b></span><span>Latest: <b class="text-white">${past[past.length - 1].score}/${qPerSet}</b></span></div>
                </div>` : `<div class="mt-2.5 bg-slate-950/60 border border-slate-800 rounded-xl p-2 text-[11px] text-slate-400">Pure ${t.title.replace(/^\d+\.\s*/, '')} • 1 Min/Q • +1 / -0.25</div>`}
            </div>
            <button onclick="startMockExam(${s})" class="mt-3 w-full py-2.5 rounded-xl font-extrabold text-xs ${has ? 'bg-indigo-600 text-white' : 'bg-emerald-500 text-slate-950'}">
                ${has ? `🔄 Re-Attempt Set ${s} (Attempt #${past.length + 1})` : `▶️ Start Mock Set ${s}`}
            </button>`;
        grid.appendChild(card);
    }
}

function startMockExam(setNo) {
    currentSetNo = setNo;
    currentQuestions = buildTopicPureMock(currentTopicId, currentLevel, currentSetNo);
    const len = currentQuestions.length;
    currentQIndex = 0; userResponses = new Array(len).fill(null); questionStatus = new Array(len).fill("unvisited"); questionStatus[0] = "skipped";
    questionTimeLeft = 60; totalTimeLeft = len * 60; totalTimeSpent = 0;
    const t = JKSSB_TOPICS.find(x => x.id === currentTopicId);
    document.getElementById("exam-badge-level").innerText = `${currentLevel.toUpperCase()} • SET ${setNo}`;
    document.getElementById("exam-title").innerText = `${t.title.replace(/^\d+\.\s*/, '')}`;
    renderCurrentExamQuestion(); renderPalette(); startExamTimer(); showView("view-exam");
}

function startExamTimer() {
    stopExamTimer(); updateTimerUI();
    examInterval = setInterval(() => {
        totalTimeSpent++; totalTimeLeft--; questionTimeLeft--;
        if (totalTimeLeft <= 0) { stopExamTimer(); finalizeAndSubmitExam(); return; }
        if (questionTimeLeft <= 0) {
            if (currentQIndex < currentQuestions.length - 1) { jumpToQuestion(currentQIndex + 1); return; }
            else { stopExamTimer(); finalizeAndSubmitExam(); return; }
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
    const qObj = currentQuestions[currentQIndex], len = currentQuestions.length;
    const pBox = document.getElementById("passage-box");
    if (qObj.passage) { pBox.innerText = qObj.passage; pBox.classList.remove("hidden"); } else { pBox.classList.add("hidden"); }
    document.getElementById("q-number-badge").innerText = `Question ${currentQIndex + 1} of ${len}`;
    document.getElementById("q-tag-badge").innerText = qObj.tag;
    document.getElementById("q-text").innerText = qObj.q;

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
    document.getElementById("btn-next-q").innerText = currentQIndex === len - 1 ? "Submit Test ✓" : "Save & Next →";
}

function clearCurrentResponse() { userResponses[currentQIndex] = null; questionStatus[currentQIndex] = "skipped"; renderCurrentExamQuestion(); renderPalette(); }
function markForReviewAndNext() { questionStatus[currentQIndex] = "review"; if (currentQIndex < currentQuestions.length - 1) jumpToQuestion(currentQIndex + 1); else renderPalette(); }
function nextExamQuestion() { if (currentQIndex < currentQuestions.length - 1) jumpToQuestion(currentQIndex + 1); else confirmSubmitExam(); }
function prevExamQuestion() { if (currentQIndex > 0) jumpToQuestion(currentQIndex - 1); }
function jumpToQuestion(idx) { currentQIndex = idx; if (questionStatus[idx] === "unvisited") questionStatus[idx] = "skipped"; questionTimeLeft = 60; updateTimerUI(); renderCurrentExamQuestion(); renderPalette(); }

function renderPalette() {
    const grid = document.getElementById("palette-grid"); grid.innerHTML = "";
    let a = 0, s = 0, r = 0, u = 0;
    for (let i = 0; i < currentQuestions.length; i++) {
        const st = questionStatus[i];
        if (st === "answered") a++; else if (st === "skipped") s++; else if (st === "review") r++; else u++;
        let cls = st === "answered" ? "bg-emerald-500 text-slate-950 font-bold" : st === "review" ? "bg-purple-600 text-white font-bold" : st === "skipped" ? "bg-amber-500/20 text-amber-300 border-amber-500/40" : "bg-slate-950 border-slate-800 text-slate-400";
        if (i === currentQIndex) cls += " ring-2 ring-white";
        const btn = document.createElement("button"); btn.className = `h-8 rounded-lg border text-xs ${cls}`; btn.innerText = i + 1; btn.onclick = () => jumpToQuestion(i);
        grid.appendChild(btn);
    }
    document.getElementById("pal-answered").innerText = a; document.getElementById("pal-skipped").innerText = s; document.getElementById("pal-review").innerText = r; document.getElementById("pal-unvisited").innerText = u;
}

function confirmSubmitExam() { if (confirm("Kya tu Mock Test submit karna chahta hai?")) finalizeAndSubmitExam(); }

function finalizeAndSubmitExam() {
    stopExamTimer();
    let c = 0, w = 0, sk = 0, len = currentQuestions.length;
    currentQuestions.forEach((q, i) => { if (userResponses[i] === null) sk++; else if (userResponses[i] === q.answer) c++; else w++; });
    const score = ((c * 1.0) - (w * 0.25)).toFixed(2);
    const acc = (c + w) > 0 ? Math.round((c / (c + w)) * 100) : 0;
    const timeStr = `${Math.floor(totalTimeSpent / 60)}m ${totalTimeSpent % 60}s`;
    const past = getAttemptsForMock(currentTopicId, currentLevel, currentSetNo);
    saveAttemptForMock(currentTopicId, currentLevel, currentSetNo, { attemptNo: past.length + 1, date: new Date().toLocaleString("en-IN"), score, maxMarks: len, correct: c, wrong: w, skipped: sk, accuracy: acc, timeTaken: timeStr });

    document.getElementById("res-final-score").innerText = `${score}/${len}`;
    document.getElementById("res-accuracy").innerText = `${acc}%`;
    document.getElementById("res-correct").innerText = c; document.getElementById("res-wrong").innerText = w; document.getElementById("res-skipped").innerText = sk; document.getElementById("res-time-taken").innerText = timeStr;

    const allAtt = getAttemptsForMock(currentTopicId, currentLevel, currentSetNo);
    document.getElementById("res-attempts-tbody").innerHTML = allAtt.map(a => `<tr class="border-b border-slate-800/60"><td class="py-1.5 px-2 font-bold text-emerald-400">Attempt #${a.attemptNo}</td><td class="py-1.5 px-2">${a.date}</td><td class="py-1.5 px-2 font-extrabold text-white">${a.score}/${a.maxMarks || len}</td><td class="py-1.5 px-2 text-emerald-400">${a.correct}</td><td class="py-1.5 px-2 text-rose-400">${a.wrong}</td><td class="py-1.5 px-2 text-amber-400">${a.skipped}</td><td class="py-1.5 px-2">${a.timeTaken}</td></tr>`).join("");
    filterSolutions("all"); showView("view-result");
}

function filterSolutions(mode) {
    const box = document.getElementById("solutions-container"); box.innerHTML = "";
    currentQuestions.forEach((q, idx) => {
        const u = userResponses[idx], isC = u === q.answer, isS = u === null, isW = !isS && !isC;
        if ((mode === "wrong" && !isW) || (mode === "skipped" && !isS) || (mode === "correct" && !isC)) return;
        box.innerHTML += `<div class="bg-slate-950 border border-slate-800 rounded-xl p-4"><div class="flex justify-between text-xs font-bold mb-1.5"><span>Q.${idx + 1}</span><span class="${isC ? 'text-emerald-400' : isW ? 'text-rose-400' : 'text-amber-400'}">${isC ? '✅ Correct (+1)' : isW ? '❌ Wrong (-0.25)' : '⏭️ Skipped'}</span></div><p class="font-bold text-white text-sm mb-2 whitespace-pre-line">${q.q}</p><p class="text-xs text-emerald-400 mb-1">✔ Correct Answer: ${q.options[q.answer]}</p>${isW ? `<p class="text-xs text-rose-400 mb-1">✖ Your Answer: ${q.options[u]}</p>` : ''}<div class="bg-slate-900 p-2.5 rounded-lg text-xs text-slate-300 mt-2">💡 ${q.explanation}</div></div>`;
    });
}

function reattemptCurrentMock() { startMockExam(currentSetNo); }
function backToSetsFromResult() { renderMockSetsGrid(); showView("view-sets"); }
function openHistoryModal() { const map = getAllAttemptsMap(), box = document.getElementById("all-history-content"); box.innerHTML = Object.keys(map).length ? Object.keys(map).map(k => `<div class="bg-slate-950 p-3 rounded-xl border border-slate-800"><div class="font-bold text-emerald-400 mb-1">${k.replace(/__/g, ' • ').toUpperCase()}</div>${map[k].map(a => `<div>Attempt #${a.attemptNo}: <b>${a.score}/${a.maxMarks \vert{}\vert{} 50}</b> (${a.date})</div>`).join("")}</div>`).join("") : "<p class='text-center py-6'>No attempts yet.</p>"; document.getElementById("modal-history").classList.remove("hidden"); }
function closeModal(id) { document.getElementById(id).classList.add("hidden"); }
window.addEventListener("DOMContentLoaded", () => { history.replaceState({ view: "view-dashboard" }, "", "#view-dashboard"); renderTopicsGrid(); updateTopStats(); });
        
