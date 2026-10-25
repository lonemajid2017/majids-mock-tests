
// ============================================================================
// FILE NAME: extra_questions.js
// Plug-and-Play Module for JKSSB & SSC CGL Mock Test Portal (Developed by Lone Majid)
// Automatically loaded by index.html — ZERO edits needed in index.html!
//
// Adds the "ACTS" Folder containing 4 Complete Topics (30 Sets • 540 Unique Questions):
//   1. J&K Reorganisation Act, 2019 (100 Qs: 4 Statement Sets × 15 Qs + 2 One-Liner Sets × 20 Qs)
//   2. Popular Personalities (240 Qs: 12 Sets × 20 Qs — 4 Statement/Match Sets + 8 One-Liner Sets)
//   3. Languages of India (100 Qs: 4 Statement Sets × 15 Qs + 2 One-Liner Sets × 20 Qs)
//   4. J&K Panchayati Raj Act, 1989 (100 Qs: 4 Statement Sets × 15 Qs + 2 One-Liner Sets × 20 Qs)
// Plus: Built-in Future Expansion System (acts_more.js, acts_topic5.js ... acts_topic10.js)
//       so new topics can be added inside the ACTS folder anytime without editing this file!
// ============================================================================

(function () {
  if (window.__JKSSB_ACTS_MODULE_LOADED__) return;
  window.__JKSSB_ACTS_MODULE_LOADED__ = true;

  const ACTS_TOPICS_MAP = {
  "acts_reorg": {
    "key": "acts_reorg",
    "name": "J&K Reorganisation Act, 2019",
    "shortBadge": "6 Sets • 100 Qs",
    "icon": "🏛️",
    "desc": "Act No. 34 of 2019 (14 Parts, 103 Sections, 5 Schedules, Delimitation 2022 & 2023 Amendments). 4 Statement-Based Sets (15 Qs each = 60 Qs) + 2 One-Liner Sets (20 Qs each = 40 Qs).",
    "subtitle": "Sets 1–4: Statement-Based (15 Qs / 15 Mins each) • Sets 5–6: High-Yield One-Liners (20 Qs / 20 Mins each) • JKSSB Assistant Compiler Level",
    "SET_TITLES": [
      "Set 1: Statement-Based Questions — Part I (15 Qs)",
      "Set 2: Statement-Based Questions — Part II (15 Qs)",
      "Set 3: Statement-Based Questions — Part III (15 Qs)",
      "Set 4: Statement-Based Questions — Part IV (15 Qs)",
      "Set 5: High-Frequency One-Liner MCQs — Part I (20 Qs)",
      "Set 6: High-Frequency One-Liner MCQs — Part II (20 Qs)"
    ],
    "sets": [
      [
        {
          "q": "With reference to 'Enactment, Assent & Appointed Day of Act No. 34 of 2019' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: The Jammu and Kashmir Reorganisation Act, 2019 is enacted as Act No. 34 of 2019 and received Presidential assent on 9 August 2019.\nStatement II: The Act came into force on the 'Appointed Day', 31 October 2019, reorganising the former State into two Union Territories.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Enactment, Assent & Appointed Day of Act No. 34 of 2019."
        },
        {
          "q": "Consider the following statements regarding 'Parliamentary Passage & Constitutional Orders (August 2019)' (J&K Reorganisation Act, 2019):\nStatement I: On 5 August 2019, Presidential Order C.O. 272 (The Constitution (Application to Jammu and Kashmir) Order, 2019) was issued, and the Reorganisation Bill was passed by the Rajya Sabha by 125 votes to 61.\nStatement II: The Jammu and Kashmir Reorganisation Act, 2019 itself directly repealed Article 370 of the Constitution.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (On 5 August 2019, Presidential Order C.O. 272 (The Constitution (Application to Jammu and Kashmir) Order, 2019) was issued, and the Reorganisation Bill was passed by the Rajya Sabha by 125 votes to 61.). Statement II is incorrect: The changes to Article 370 took place through Presidential Orders C.O. 272 and C.O. 273 under the constitutional process, whereas the Reorganisation Act separately reorganised the State into two Union Territories."
        },
        {
          "q": "With reference to 'Overall Structure of the J&K Reorganisation Act, 2019' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: The original Jammu and Kashmir Reorganisation Act, 2019 is divided into 14 Parts, 103 numbered Sections, and 5 Schedules.\nStatement II: Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Overall Structure of the J&K Reorganisation Act, 2019."
        },
        {
          "q": "Consider the following statements regarding 'Section 3 & Section 4 — Creation of Two Union Territories' (J&K Reorganisation Act, 2019):\nStatement I: Section 3 of the Act formed the Union Territory of Ladakh without a legislature, comprising the districts of Leh and Kargil.\nStatement II: Section 3 formed the UT of Jammu and Kashmir, while Section 4 formed the UT of Ladakh.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Section 3 of the Act formed the Union Territory of Ladakh without a legislature, comprising the districts of Leh and Kargil.). Statement II is incorrect: Section 3 deals with the formation of the UT of Ladakh (without legislature) and Section 4 deals with the formation of the UT of Jammu and Kashmir (with legislature)."
        },
        {
          "q": "With reference to 'Section 5, Section 6 & Section 7 (Part II Provisions)' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Section 5 provides for the office of Lieutenant Governor for both Union Territories, while Section 6 amended the First Schedule to the Constitution of India.\nStatement II: Section 7 preserves the power of the UT Government of Jammu and Kashmir to alter the names, areas, or boundaries of districts or territorial divisions within the UT.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Section 5, Section 6 & Section 7 (Part II Provisions)."
        },
        {
          "q": "Consider the following statements regarding 'Parliamentary Representation — Rajya Sabha (Secs 8–9) & Lok Sabha (Sec 10)' (J&K Reorganisation Act, 2019):\nStatement I: Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.\nStatement II: Both the UT of Jammu and Kashmir and the UT of Ladakh have 1 seat each in the Rajya Sabha.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.). Statement II is incorrect: J&K UT has 4 Rajya Sabha seats and 5 Lok Sabha seats, whereas Ladakh UT has 0 Rajya Sabha seats and 1 Lok Sabha seat."
        },
        {
          "q": "With reference to 'Section 13 — Application of Article 239A (Puducherry Model)' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Section 13 of the J&K Reorganisation Act, 2019 states that the provisions contained in Article 239A of the Constitution shall apply to the Union Territory of Jammu and Kashmir.\nStatement II: This places the legislative and Council of Ministers framework of J&K UT on the constitutional model applicable to the Union Territory of Puducherry (rather than Article 239AA of Delhi).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Section 13 — Application of Article 239A (Puducherry Model)."
        },
        {
          "q": "Consider the following statements regarding 'Section 14 — Legislative Assembly Strength & 2023 Amendment' (J&K Reorganisation Act, 2019):\nStatement I: Originally, Section 14(3) fixed the total number of seats in the J&K Legislative Assembly at 107, which was increased to 114 by the J&K Reorganisation (Amendment) Act, 2023 (Act No. 35 of 2023).\nStatement II: All 114 seats mentioned in the amended Section 14 are filled by direct election in the UT of Jammu and Kashmir.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Originally, Section 14(3) fixed the total number of seats in the J&K Legislative Assembly at 107, which was increased to 114 by the J&K Reorganisation (Amendment) Act, 2023 (Act No. 35 of 2023).). Statement II is incorrect: Out of the statutory figure of 114 seats, 24 seats for PoJK remain vacant under Section 14(4), so 90 constituencies are filled by direct election."
        },
        {
          "q": "With reference to 'J&K Delimitation Commission (2022) & Regional / Category Seat Distribution' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Chaired by Justice (Retd.) Ranjana Prakash Desai (with the CEC and J&K SEC as ex-officio members), the Delimitation Commission published its final order on 5 May 2022.\nStatement II: Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding J&K Delimitation Commission (2022) & Regional / Category Seat Distribution."
        },
        {
          "q": "Consider the following statements regarding 'Sections 14A & 14B — Women's Reservation (Second Amendment Act, 2023)' (J&K Reorganisation Act, 2019):\nStatement I: The J&K Reorganisation (Second Amendment) Act, 2023 (Act No. 38 of 2023, assented on 20 December 2023) inserted Sections 14A and 14B providing for 1/3rd reservation for women in the J&K Legislative Assembly (including within SC and ST reserved seats).\nStatement II: The one-third women's reservation under Section 14A was immediately implemented during the September–October 2024 J&K Assembly elections.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (The J&K Reorganisation (Second Amendment) Act, 2023 (Act No. 38 of 2023, assented on 20 December 2023) inserted Sections 14A and 14B providing for 1/3rd reservation for women in the J&K Legislative Assembly (including within SC and ST reserved seats).). Statement II is incorrect: Under Section 14B, the women's reservation provision is tied to the first post-commencement Census and subsequent delimitation, so it was not operational in the 2024 election."
        },
        {
          "q": "With reference to 'Sections 15, 15A & 15B — Nominations by the Lieutenant Governor' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Under Section 15, the Lieutenant Governor may nominate 2 women to the Legislative Assembly if women are not adequately represented.\nStatement II: Inserted by Amendment Act No. 35 of 2023 (assented 15 Dec 2023, effective 26 Dec 2023), Section 15A empowers the LG to nominate up to 2 members from the Kashmiri migrant community (one of whom must be a woman), and Section 15B empowers the LG to nominate 1 member representing displaced persons from PoJK.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Sections 15, 15A & 15B — Nominations by the Lieutenant Governor."
        },
        {
          "q": "Consider the following statements regarding 'Sections 16, 17 & 18 — Qualifications, Term & Sessions of Assembly' (J&K Reorganisation Act, 2019):\nStatement I: Under Section 16, a person must be a citizen of India and at least 25 years of age to be chosen to fill a seat in the J&K Legislative Assembly.\nStatement II: The normal term of the J&K Legislative Assembly under Section 17 is 6 years.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Section 16, a person must be a citizen of India and at least 25 years of age to be chosen to fill a seat in the J&K Legislative Assembly.). Statement II is incorrect: While the former J&K State Assembly earlier had a 6-year term, under Section 17 of the Reorganisation Act, 2019 the normal term of the UT Legislative Assembly is 5 years."
        },
        {
          "q": "With reference to 'Sections 19, 20, 21 & 22 — Speaker, LG's Special Address & Rights of Advocate General' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Under Section 19, the Legislative Assembly elects two of its members as Speaker and Deputy Speaker, and a minimum 14 days' notice is required to move a resolution for their removal.\nStatement II: Under Section 21, the Lieutenant Governor addresses the Assembly at the commencement of the first session after each general election and the first session of each year; under Section 22, Ministers and the Advocate General have the right to speak and participate in Assembly proceedings (without a right to vote unless elected as an MLA).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Sections 19, 20, 21 & 22 — Speaker, LG's Special Address & Rights of Advocate General."
        },
        {
          "q": "Consider the following statements regarding 'Sections 24, 25 & 26 — Oath, Quorum, Casting Vote & Vacation of Seats' (J&K Reorganisation Act, 2019):\nStatement I: Under Section 25, the quorum to constitute a meeting of the J&K Legislative Assembly is 10 members or one-tenth (1/10th) of the total number of members of the Assembly, whichever is greater.\nStatement II: The Speaker votes in the first instance on every Bill in the Assembly but has no casting vote in case of a tie.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Section 25, the quorum to constitute a meeting of the J&K Legislative Assembly is 10 members or one-tenth (1/10th) of the total number of members of the Assembly, whichever is greater.). Statement II is incorrect: Under Section 25(1), the Speaker does NOT vote in the first instance, but shall have and exercise a casting vote in the case of an equality of votes."
        },
        {
          "q": "With reference to 'Sections 27, 28 & 29 — Disqualifications, Anti-Defection & ₹500 Penalty' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Section 28 applies the anti-defection provisions of the Tenth Schedule of the Constitution to members of the J&K Legislative Assembly.\nStatement II: Under Section 29, if a person sits or votes as a member of the Legislative Assembly before taking oath (Section 24) or when knowing that he is not qualified or is disqualified, he is liable to a penalty of ₹500 for each day on which he so sits or votes.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Sections 27, 28 & 29 — Disqualifications, Anti-Defection & ₹500 Penalty."
        }
      ],
      [
        {
          "q": "Consider the following statements regarding 'Sections 32 & 35 — Extent of Legislative Powers & Excluded Subjects' (J&K Reorganisation Act, 2019):\nStatement I: Under Section 32, the J&K Legislative Assembly may make laws for the whole or any part of the UT with respect to any matter in the State List—EXCEPT Entry 1 ('Public Order') and Entry 2 ('Police')—and any matter in the Concurrent List applicable to UTs.\nStatement II: Under Section 32, 'Public Order' and 'Police' are under the exclusive legislative control of the J&K Legislative Assembly.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Section 32, the J&K Legislative Assembly may make laws for the whole or any part of the UT with respect to any matter in the State List—EXCEPT Entry 1 ('Public Order') and Entry 2 ('Police')—and any matter in the Concurrent List applicable to UTs.). Statement II is incorrect: Section 32(1) expressly excludes Entry 1 ('Public Order') and Entry 2 ('Police') of the State List from the law-making powers of the J&K Legislative Assembly."
        },
        {
          "q": "With reference to 'Sections 36, 41, 47, 48, 49 & 50 — Money Bills, Budget, Language & Courts' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Section 41 deals with the presentation of the Annual Financial Statement (Budget) before the Assembly with the prior recommendation of the Lieutenant Governor.\nStatement II: Section 47 provides that business in the Assembly shall be transacted in the official language(s) of the UT or in Hindi or in English, while Section 48 stipulates that the authoritative text of all Bills and Acts shall be in the English language.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Sections 36, 41, 47, 48, 49 & 50 — Money Bills, Budget, Language & Courts."
        },
        {
          "q": "Consider the following statements regarding 'Sections 53, 54, 56 & 57 — Council of Ministers & Abolition of Legislative Council' (J&K Reorganisation Act, 2019):\nStatement I: Under Section 53, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Lieutenant Governor, and the total number of Ministers (including the Chief Minister) shall NOT exceed 10% of the total number of members in the Legislative Assembly.\nStatement II: Under Section 53, the maximum strength of the Council of Ministers in J&K UT is 15% of the Assembly strength.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Section 53, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Lieutenant Governor, and the total number of Ministers (including the Chief Minister) shall NOT exceed 10% of the total number of members in the Legislative Assembly.). Statement II is incorrect: In the UT of Jammu and Kashmir, Section 53(1) caps the Council of Ministers at 10% of the total strength of the Legislative Assembly (unlike the 15% limit in States)."
        },
        {
          "q": "With reference to 'Part IV (Section 58) — Administration of the Union Territory of Ladakh' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Under Part IV (Section 58), the Union Territory of Ladakh is administered by the President acting through a Lieutenant Governor appointed by him under Article 239 of the Constitution.\nStatement II: Under Section 58(2), the President may make regulations under Article 240 for the peace, progress, and good government of the Union Territory of Ladakh.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Part IV (Section 58) — Administration of the Union Territory of Ladakh."
        },
        {
          "q": "Consider the following statements regarding 'Part VII (Sections 67–73) — Funds of J&K UT & Failure of Constitutional Machinery' (J&K Reorganisation Act, 2019):\nStatement I: Sections 67, 68, and 69 establish the Consolidated Fund of the UT of J&K, the Public Account of the UT of J&K, and the Contingency Fund of the UT of J&K respectively.\nStatement II: Section 73 deals with the abolition of the High Court of Jammu and Kashmir.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Sections 67, 68, and 69 establish the Consolidated Fund of the UT of J&K, the Public Account of the UT of J&K, and the Contingency Fund of the UT of J&K respectively.). Statement II is incorrect: Section 73 deals with provisions in case of failure of constitutional machinery in the UT of J&K, whereas Section 75 deals with the common High Court."
        },
        {
          "q": "With reference to 'Part VIII (Section 75) & Part IX (Section 79) — High Court & Advocate General' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: Under Section 75 (Part VIII), the High Court of Jammu and Kashmir (renamed in 2021 as the High Court of Jammu and Kashmir and Ladakh) functions as the common High Court for both the UT of J&K and the UT of Ladakh.\nStatement II: Under Section 79 (Part IX), the Lieutenant Governor appoints a person who is qualified to be appointed a Judge of a High Court to be the Advocate General for the Union Territory of Jammu and Kashmir.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Part VIII (Section 75) & Part IX (Section 79) — High Court & Advocate General."
        },
        {
          "q": "Consider the following statements regarding 'Parts X, XI, XII, XIII & XIV (Sections 80 to 103) — Assets, Services & Adaptation of Laws' (J&K Reorganisation Act, 2019):\nStatement I: Part XI (Section 84) deals with the apportionment of assets and liabilities between the two UTs; Part XII (Section 85) provides for Advisory Committees; and Part XIII (Section 88 & Section 93) covers All India Services (AGMUT cadre) and the Public Service Commission (J&K PSC for J&K UT; UPSC for Ladakh).\nStatement II: Under Section 93, a separate State Public Service Commission was created for the UT of Ladakh at Leh.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Part XI (Section 84) deals with the apportionment of assets and liabilities between the two UTs; Part XII (Section 85) provides for Advisory Committees; and Part XIII (Section 88 & Section 93) covers All India Services (AGMUT cadre) and the Public Service Commission (J&K PSC for J&K UT; UPSC for Ladakh).). Statement II is incorrect: Under Section 93, the Union Public Service Commission (UPSC) serves the needs of the UT of Ladakh, while the J&K PSC serves the UT of Jammu and Kashmir."
        },
        {
          "q": "With reference to 'The Five Schedules of the J&K Reorganisation Act, 2019' (J&K Reorganisation Act, 2019), consider the following statements:\nStatement I: The First Schedule relates to Rajya Sabha members (Sections 8–9), the Second Schedule relates to Parliamentary Constituencies (Section 11), and the Third Schedule relates to Assembly Constituencies.\nStatement II: The Fourth Schedule contains the Forms of Oaths or Affirmations (for candidates, MLAs, and Ministers), while the Fifth Schedule contains the tables of Central Laws made applicable (106), State Laws repealed (153), and State Laws continued with amendments (166).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding The Five Schedules of the J&K Reorganisation Act, 2019."
        },
        {
          "q": "Consider the following statements regarding 'Supreme Court Judgment on Article 370 (11 December 2023) & 2024 Assembly Elections' (J&K Reorganisation Act, 2019):\nStatement I: On 11 December 2023, a five-judge Constitution Bench of the Supreme Court unanimously upheld the constitutional validity of the August 2019 orders rendering Article 370 inoperative and directed the ECI to conduct J&K Assembly elections by 30 September 2024.\nStatement II: The Supreme Court judgment of 11 December 2023 struck down the Jammu and Kashmir Reorganisation Act, 2019 as unconstitutional.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (On 11 December 2023, a five-judge Constitution Bench of the Supreme Court unanimously upheld the constitutional validity of the August 2019 orders rendering Article 370 inoperative and directed the ECI to conduct J&K Assembly elections by 30 September 2024.). Statement II is incorrect: The Supreme Court upheld the Union Government's action on Article 370 and directed Assembly elections while recording the Union's assurance that statehood would be restored as soon as possible."
        },
        {
          "q": "Examine the following two statements regarding 'Enactment, Assent & Appointed Day of Act No. 34 of 2019' and 'Overall Structure of the J&K Reorganisation Act, 2019':\nStatement I: The two Union Territories came into existence legally on 9 August 2019, the very day the Act received Presidential assent.\nStatement II: Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (While Presidential assent was received on 9 August 2019, the two Union Territories legally came into existence on the Appointed Day, 31 October 2019.). Statement II is correct (Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.)."
        },
        {
          "q": "Consider the following statements comparing 'Parliamentary Passage & Constitutional Orders (August 2019)' and 'Parliamentary Representation — Rajya Sabha (Secs 8–9) & Lok Sabha (Sec 10)':\nStatement I: On 6 August 2019, Presidential Order C.O. 273 declared Article 370 inoperative (except as modified), and the Lok Sabha passed the Reorganisation Bill by 370 votes to 70.\nStatement II: Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: On 6 August 2019, Presidential Order C.O. 273 declared Article 370 inoperative (except as modified), and the Lok Sabha passed the Reorganisation Bill by 370 votes to 70. II: Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.)"
        },
        {
          "q": "Examine the following two statements regarding 'Overall Structure of the J&K Reorganisation Act, 2019' and 'J&K Delimitation Commission (2022) & Regional / Category Seat Distribution':\nStatement I: The Act originally contained 12 Parts, 83 Sections, and 6 Schedules.\nStatement II: Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (The J&K Reorganisation Act, 2019 has 14 Parts, 103 original numbered sections, and 5 Schedules (whereas the J&K Panchayati Raj Act, 1989 has 83 sections and 6 schedules).). Statement II is correct (Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).)."
        },
        {
          "q": "Consider the following statements comparing 'Section 3 & Section 4 — Creation of Two Union Territories' and 'Sections 16, 17 & 18 — Qualifications, Term & Sessions of Assembly':\nStatement I: Section 4 of the Act formed the Union Territory of Jammu and Kashmir with a Legislative Assembly, comprising the remaining 20 districts of the former State.\nStatement II: Under Section 16, a person must be a citizen of India and at least 25 years of age to be chosen to fill a seat in the J&K Legislative Assembly.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Section 4 of the Act formed the Union Territory of Jammu and Kashmir with a Legislative Assembly, comprising the remaining 20 districts of the former State. II: Under Section 16, a person must be a citizen of India and at least 25 years of age to be chosen to fill a seat in the J&K Legislative Assembly.)"
        },
        {
          "q": "Examine the following two statements regarding 'Section 5, Section 6 & Section 7 (Part II Provisions)' and 'Sections 27, 28 & 29 — Disqualifications, Anti-Defection & ₹500 Penalty':\nStatement I: Under Section 6, Jammu and Kashmir was retained in the list of States in the First Schedule of the Constitution.\nStatement II: Under Section 29, if a person sits or votes as a member of the Legislative Assembly before taking oath (Section 24) or when knowing that he is not qualified or is disqualified, he is liable to a penalty of ₹500 for each day on which he so sits or votes.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Section 6 removed Jammu and Kashmir from the list of States in the First Schedule and added 'Jammu and Kashmir' and 'Ladakh' under the list of Union Territories.). Statement II is correct (Under Section 29, if a person sits or votes as a member of the Legislative Assembly before taking oath (Section 24) or when knowing that he is not qualified or is disqualified, he is liable to a penalty of ₹500 for each day on which he so sits or votes.)."
        },
        {
          "q": "Consider the following statements comparing 'Parliamentary Representation — Rajya Sabha (Secs 8–9) & Lok Sabha (Sec 10)' and 'Sections 53, 54, 56 & 57 — Council of Ministers & Abolition of Legislative Council':\nStatement I: Under Section 10, the Union Territory of Jammu and Kashmir is allocated 5 seats in the Lok Sabha and the Union Territory of Ladakh is allocated 1 seat in the Lok Sabha.\nStatement II: Under Section 53, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Lieutenant Governor, and the total number of Ministers (including the Chief Minister) shall NOT exceed 10% of the total number of members in the Legislative Assembly.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 10, the Union Territory of Jammu and Kashmir is allocated 5 seats in the Lok Sabha and the Union Territory of Ladakh is allocated 1 seat in the Lok Sabha. II: Under Section 53, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Lieutenant Governor, and the total number of Ministers (including the Chief Minister) shall NOT exceed 10% of the total number of members in the Legislative Assembly.)"
        }
      ],
      [
        {
          "q": "Examine the following two statements regarding 'Section 13 — Application of Article 239A (Puducherry Model)' and 'Part VIII (Section 75) & Part IX (Section 79) — High Court & Advocate General':\nStatement I: Section 13 applies Article 239AA (the National Capital Territory of Delhi model) to the UT of Jammu and Kashmir.\nStatement II: Under Section 79 (Part IX), the Lieutenant Governor appoints a person who is qualified to be appointed a Judge of a High Court to be the Advocate General for the Union Territory of Jammu and Kashmir.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Section 13 specifically applies Article 239A (the Puducherry model) to the Union Territory of Jammu and Kashmir.). Statement II is correct (Under Section 79 (Part IX), the Lieutenant Governor appoints a person who is qualified to be appointed a Judge of a High Court to be the Advocate General for the Union Territory of Jammu and Kashmir.)."
        },
        {
          "q": "Consider the following statements comparing 'Section 14 — Legislative Assembly Strength & 2023 Amendment' and 'Supreme Court Judgment on Article 370 (11 December 2023) & 2024 Assembly Elections':\nStatement I: Under Section 14(4), 24 seats remain vacant for the area of the Union Territory under the occupation of Pakistan (PoJK) and are excluded when reckoning the total membership of the Assembly, leaving 90 directly elected seats (114 minus 24 = 90).\nStatement II: On 11 December 2023, a five-judge Constitution Bench of the Supreme Court unanimously upheld the constitutional validity of the August 2019 orders rendering Article 370 inoperative and directed the ECI to conduct J&K Assembly elections by 30 September 2024.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 14(4), 24 seats remain vacant for the area of the Union Territory under the occupation of Pakistan (PoJK) and are excluded when reckoning the total membership of the Assembly, leaving 90 directly elected seats (114 minus 24 = 90). II: On 11 December 2023, a five-judge Constitution Bench of the Supreme Court unanimously upheld the constitutional validity of the August 2019 orders rendering Article 370 inoperative and directed the ECI to conduct J&K Assembly elections by 30 September 2024.)"
        },
        {
          "q": "Examine the following two statements regarding 'J&K Delimitation Commission (2022) & Regional / Category Seat Distribution' and 'Overall Structure of the J&K Reorganisation Act, 2019':\nStatement I: The 2022 Delimitation Order reserved 9 Assembly seats for Scheduled Castes (SCs) and 7 seats for Scheduled Tribes (STs).\nStatement II: Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (7 seats are reserved for Scheduled Castes (SCs) and 9 seats are reserved for Scheduled Tribes (STs) in the J&K Legislative Assembly.). Statement II is correct (Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.)."
        },
        {
          "q": "Consider the following statements comparing 'Sections 14A & 14B — Women's Reservation (Second Amendment Act, 2023)' and 'Parliamentary Representation — Rajya Sabha (Secs 8–9) & Lok Sabha (Sec 10)':\nStatement I: Under Section 14B, this one-third reservation for women will take effect only after the publication of figures of the first Census taken after the commencement of the 2023 Amendment Act and a subsequent delimitation exercise.\nStatement II: Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 14B, this one-third reservation for women will take effect only after the publication of figures of the first Census taken after the commencement of the 2023 Amendment Act and a subsequent delimitation exercise. II: Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.)"
        },
        {
          "q": "Examine the following two statements regarding 'Sections 15, 15A & 15B — Nominations by the Lieutenant Governor' and 'J&K Delimitation Commission (2022) & Regional / Category Seat Distribution':\nStatement I: Under Section 15A, the Lieutenant Governor nominates 5 members from the Kashmiri migrant community.\nStatement II: Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Section 15A provides for nominating not more than 2 members from the Kashmiri migrant community (including 1 woman), and Section 15B provides for 1 member from PoJK displaced persons.). Statement II is correct (Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).)."
        },
        {
          "q": "Consider the following statements comparing 'Sections 16, 17 & 18 — Qualifications, Term & Sessions of Assembly' and 'Sections 19, 20, 21 & 22 — Speaker, LG's Special Address & Rights of Advocate General':\nStatement I: Under Section 17, the normal duration of the J&K Legislative Assembly is 5 years from the date appointed for its first meeting, and under Section 18 no more than 6 months shall elapse between two sessions.\nStatement II: Under Section 19, the Legislative Assembly elects two of its members as Speaker and Deputy Speaker, and a minimum 14 days' notice is required to move a resolution for their removal.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 17, the normal duration of the J&K Legislative Assembly is 5 years from the date appointed for its first meeting, and under Section 18 no more than 6 months shall elapse between two sessions. II: Under Section 19, the Legislative Assembly elects two of its members as Speaker and Deputy Speaker, and a minimum 14 days' notice is required to move a resolution for their removal.)"
        },
        {
          "q": "Examine the following two statements regarding 'Sections 19, 20, 21 & 22 — Speaker, LG's Special Address & Rights of Advocate General' and 'Sections 27, 28 & 29 — Disqualifications, Anti-Defection & ₹500 Penalty':\nStatement I: The Speaker of the J&K Legislative Assembly is appointed by the Chief Justice of the High Court under Section 19.\nStatement II: Under Section 29, if a person sits or votes as a member of the Legislative Assembly before taking oath (Section 24) or when knowing that he is not qualified or is disqualified, he is liable to a penalty of ₹500 for each day on which he so sits or votes.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Under Section 19, the Speaker and Deputy Speaker are elected by the Legislative Assembly from among its own members.). Statement II is correct (Under Section 29, if a person sits or votes as a member of the Legislative Assembly before taking oath (Section 24) or when knowing that he is not qualified or is disqualified, he is liable to a penalty of ₹500 for each day on which he so sits or votes.)."
        },
        {
          "q": "Consider the following statements comparing 'Sections 24, 25 & 26 — Oath, Quorum, Casting Vote & Vacation of Seats' and 'Sections 53, 54, 56 & 57 — Council of Ministers & Abolition of Legislative Council':\nStatement I: Under Section 26, if a member of the Legislative Assembly is absent from all meetings for a period of 60 days without permission of the House, the Assembly may declare his seat vacant.\nStatement II: Under Section 53, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Lieutenant Governor, and the total number of Ministers (including the Chief Minister) shall NOT exceed 10% of the total number of members in the Legislative Assembly.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 26, if a member of the Legislative Assembly is absent from all meetings for a period of 60 days without permission of the House, the Assembly may declare his seat vacant. II: Under Section 53, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Lieutenant Governor, and the total number of Ministers (including the Chief Minister) shall NOT exceed 10% of the total number of members in the Legislative Assembly.)"
        },
        {
          "q": "Examine the following two statements regarding 'Sections 27, 28 & 29 — Disqualifications, Anti-Defection & ₹500 Penalty' and 'Part VIII (Section 75) & Part IX (Section 79) — High Court & Advocate General':\nStatement I: Under Section 29, the daily penalty for sitting and voting illegally in the J&K Assembly is ₹10,000 per day.\nStatement II: Under Section 79 (Part IX), the Lieutenant Governor appoints a person who is qualified to be appointed a Judge of a High Court to be the Advocate General for the Union Territory of Jammu and Kashmir.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Section 29 prescribes a statutory penalty of ₹500 per day (recovered as a debt due to the UT).). Statement II is correct (Under Section 79 (Part IX), the Lieutenant Governor appoints a person who is qualified to be appointed a Judge of a High Court to be the Advocate General for the Union Territory of Jammu and Kashmir.)."
        },
        {
          "q": "Consider the following statements comparing 'Sections 32 & 35 — Extent of Legislative Powers & Excluded Subjects' and 'Supreme Court Judgment on Article 370 (11 December 2023) & 2024 Assembly Elections':\nStatement I: Under Section 35, if any provision of a law made by the Legislative Assembly is repugnant to any provision of a law made by Parliament, the law made by Parliament shall prevail.\nStatement II: On 11 December 2023, a five-judge Constitution Bench of the Supreme Court unanimously upheld the constitutional validity of the August 2019 orders rendering Article 370 inoperative and directed the ECI to conduct J&K Assembly elections by 30 September 2024.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 35, if any provision of a law made by the Legislative Assembly is repugnant to any provision of a law made by Parliament, the law made by Parliament shall prevail. II: On 11 December 2023, a five-judge Constitution Bench of the Supreme Court unanimously upheld the constitutional validity of the August 2019 orders rendering Article 370 inoperative and directed the ECI to conduct J&K Assembly elections by 30 September 2024.)"
        },
        {
          "q": "Examine the following two statements regarding 'Sections 36, 41, 47, 48, 49 & 50 — Money Bills, Budget, Language & Courts' and 'Overall Structure of the J&K Reorganisation Act, 2019':\nStatement I: Section 49 allows the J&K Legislative Assembly to freely debate and vote on the judicial conduct of Supreme Court and High Court Judges.\nStatement II: Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Section 49 strictly prohibits any discussion in the Legislative Assembly with respect to the conduct of any Judge of the Supreme Court or of a High Court in the discharge of his duties.). Statement II is correct (Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.)."
        },
        {
          "q": "Consider the following statements comparing 'Sections 53, 54, 56 & 57 — Council of Ministers & Abolition of Legislative Council' and 'Parliamentary Representation — Rajya Sabha (Secs 8–9) & Lok Sabha (Sec 10)':\nStatement I: Under Section 57, the Legislative Council of the erstwhile State of Jammu and Kashmir was abolished, and all Bills pending ONLY in the Legislative Council lapsed.\nStatement II: Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 57, the Legislative Council of the erstwhile State of Jammu and Kashmir was abolished, and all Bills pending ONLY in the Legislative Council lapsed. II: Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.)"
        },
        {
          "q": "Examine the following two statements regarding 'Part IV (Section 58) — Administration of the Union Territory of Ladakh' and 'J&K Delimitation Commission (2022) & Regional / Category Seat Distribution':\nStatement I: Section 58 provides for a 30-member Legislative Assembly for the Union Territory of Ladakh.\nStatement II: Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Ladakh is a Union Territory without a legislature under Section 3 and Section 58.). Statement II is correct (Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).)."
        },
        {
          "q": "Consider the following statements comparing 'Part VII (Sections 67–73) — Funds of J&K UT & Failure of Constitutional Machinery' and 'Sections 16, 17 & 18 — Qualifications, Term & Sessions of Assembly':\nStatement I: Section 73 provides that in case of failure of constitutional machinery in the UT of J&K, the President may, on receipt of a report from the Lieutenant Governor or otherwise, by order suspend the operation of provisions of the Act and assume administration.\nStatement II: Under Section 16, a person must be a citizen of India and at least 25 years of age to be chosen to fill a seat in the J&K Legislative Assembly.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Section 73 provides that in case of failure of constitutional machinery in the UT of J&K, the President may, on receipt of a report from the Lieutenant Governor or otherwise, by order suspend the operation of provisions of the Act and assume administration. II: Under Section 16, a person must be a citizen of India and at least 25 years of age to be chosen to fill a seat in the J&K Legislative Assembly.)"
        },
        {
          "q": "Examine the following two statements regarding 'Part VIII (Section 75) & Part IX (Section 79) — High Court & Advocate General' and 'Sections 27, 28 & 29 — Disqualifications, Anti-Defection & ₹500 Penalty':\nStatement I: Under the Reorganisation Act, separate High Courts were established at Srinagar for J&K and at Leh for Ladakh.\nStatement II: Under Section 29, if a person sits or votes as a member of the Legislative Assembly before taking oath (Section 24) or when knowing that he is not qualified or is disqualified, he is liable to a penalty of ₹500 for each day on which he so sits or votes.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Under Section 75, both Union Territories share a single common High Court (the High Court of Jammu and Kashmir and Ladakh).). Statement II is correct (Under Section 29, if a person sits or votes as a member of the Legislative Assembly before taking oath (Section 24) or when knowing that he is not qualified or is disqualified, he is liable to a penalty of ₹500 for each day on which he so sits or votes.)."
        }
      ],
      [
        {
          "q": "Consider the following statements comparing 'Parts X, XI, XII, XIII & XIV (Sections 80 to 103) — Assets, Services & Adaptation of Laws' and 'Sections 53, 54, 56 & 57 — Council of Ministers & Abolition of Legislative Council':\nStatement I: In Part XIV, Section 95 applies Central laws listed in the Fifth Schedule, Section 96 empowers the Central Government to adapt laws, and Section 103 empowers the President to issue orders to remove difficulties.\nStatement II: Under Section 53, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Lieutenant Governor, and the total number of Ministers (including the Chief Minister) shall NOT exceed 10% of the total number of members in the Legislative Assembly.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: In Part XIV, Section 95 applies Central laws listed in the Fifth Schedule, Section 96 empowers the Central Government to adapt laws, and Section 103 empowers the President to issue orders to remove difficulties. II: Under Section 53, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Lieutenant Governor, and the total number of Ministers (including the Chief Minister) shall NOT exceed 10% of the total number of members in the Legislative Assembly.)"
        },
        {
          "q": "Examine the following two statements regarding 'The Five Schedules of the J&K Reorganisation Act, 2019' and 'Part VIII (Section 75) & Part IX (Section 79) — High Court & Advocate General':\nStatement I: The Fourth Schedule of the J&K Reorganisation Act deals with the allocation of seats in the Rajya Sabha.\nStatement II: Under Section 79 (Part IX), the Lieutenant Governor appoints a person who is qualified to be appointed a Judge of a High Court to be the Advocate General for the Union Territory of Jammu and Kashmir.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (In the J&K Reorganisation Act, 2019, the First Schedule deals with Rajya Sabha members, whereas the Fourth Schedule contains Forms of Oaths or Affirmations.). Statement II is correct (Under Section 79 (Part IX), the Lieutenant Governor appoints a person who is qualified to be appointed a Judge of a High Court to be the Advocate General for the Union Territory of Jammu and Kashmir.)."
        },
        {
          "q": "Consider the following statements comparing 'Supreme Court Judgment on Article 370 (11 December 2023) & 2024 Assembly Elections' and 'Enactment, Assent & Appointed Day of Act No. 34 of 2019':\nStatement I: Following the judgment, three-phase Assembly elections were held in September–October 2024 across all 90 constituencies (counting on 8 October 2024), with the ECI recording the current Assembly term from 4 November 2024 to 3 November 2029.\nStatement II: The Jammu and Kashmir Reorganisation Act, 2019 is enacted as Act No. 34 of 2019 and received Presidential assent on 9 August 2019.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Following the judgment, three-phase Assembly elections were held in September–October 2024 across all 90 constituencies (counting on 8 October 2024), with the ECI recording the current Assembly term from 4 November 2024 to 3 November 2029. II: The Jammu and Kashmir Reorganisation Act, 2019 is enacted as Act No. 34 of 2019 and received Presidential assent on 9 August 2019.)"
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Enactment, Assent & Appointed Day of Act No. 34 of 2019', 'Overall Structure of the J&K Reorganisation Act, 2019', and 'Section 5, Section 6 & Section 7 (Part II Provisions)'), consider the following three statements:\nI. The Jammu and Kashmir Reorganisation Act, 2019 is enacted as Act No. 34 of 2019 and received Presidential assent on 9 August 2019.\nII. Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.\nIII. Under Section 6, Jammu and Kashmir was retained in the list of States in the First Schedule of the Constitution.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Section 6 removed Jammu and Kashmir from the list of States in the First Schedule and added 'Jammu and Kashmir' and 'Ladakh' under the list of Union Territories."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Parliamentary Passage & Constitutional Orders (August 2019)', 'Parliamentary Representation — Rajya Sabha (Secs 8–9) & Lok Sabha (Sec 10)', and 'Sections 14A & 14B — Women's Reservation (Second Amendment Act, 2023)'), consider the following three statements:\nI. On 5 August 2019, Presidential Order C.O. 272 (The Constitution (Application to Jammu and Kashmir) Order, 2019) was issued, and the Reorganisation Bill was passed by the Rajya Sabha by 125 votes to 61.\nII. Under Section 10, the Union Territory of Jammu and Kashmir is allocated 5 seats in the Lok Sabha and the Union Territory of Ladakh is allocated 1 seat in the Lok Sabha.\nIII. The one-third women's reservation under Section 14A was immediately implemented during the September–October 2024 J&K Assembly elections.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 14B, the women's reservation provision is tied to the first post-commencement Census and subsequent delimitation, so it was not operational in the 2024 election."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Overall Structure of the J&K Reorganisation Act, 2019', 'J&K Delimitation Commission (2022) & Regional / Category Seat Distribution', and 'Sections 27, 28 & 29 — Disqualifications, Anti-Defection & ₹500 Penalty'), consider the following three statements:\nI. The original Jammu and Kashmir Reorganisation Act, 2019 is divided into 14 Parts, 103 numbered Sections, and 5 Schedules.\nII. Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).\nIII. Under Section 29, the daily penalty for sitting and voting illegally in the J&K Assembly is ₹10,000 per day.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Section 29 prescribes a statutory penalty of ₹500 per day (recovered as a debt due to the UT)."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Section 3 & Section 4 — Creation of Two Union Territories', 'Sections 16, 17 & 18 — Qualifications, Term & Sessions of Assembly', and 'Part VII (Sections 67–73) — Funds of J&K UT & Failure of Constitutional Machinery'), consider the following three statements:\nI. Section 3 of the Act formed the Union Territory of Ladakh without a legislature, comprising the districts of Leh and Kargil.\nII. Under Section 17, the normal duration of the J&K Legislative Assembly is 5 years from the date appointed for its first meeting, and under Section 18 no more than 6 months shall elapse between two sessions.\nIII. Section 73 deals with the abolition of the High Court of Jammu and Kashmir.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Section 73 deals with provisions in case of failure of constitutional machinery in the UT of J&K, whereas Section 75 deals with the common High Court."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Section 5, Section 6 & Section 7 (Part II Provisions)', 'Sections 27, 28 & 29 — Disqualifications, Anti-Defection & ₹500 Penalty', and 'Enactment, Assent & Appointed Day of Act No. 34 of 2019'), consider the following three statements:\nI. Section 5 provides for the office of Lieutenant Governor for both Union Territories, while Section 6 amended the First Schedule to the Constitution of India.\nII. Under Section 29, if a person sits or votes as a member of the Legislative Assembly before taking oath (Section 24) or when knowing that he is not qualified or is disqualified, he is liable to a penalty of ₹500 for each day on which he so sits or votes.\nIII. The two Union Territories came into existence legally on 9 August 2019, the very day the Act received Presidential assent.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: While Presidential assent was received on 9 August 2019, the two Union Territories legally came into existence on the Appointed Day, 31 October 2019."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Parliamentary Representation — Rajya Sabha (Secs 8–9) & Lok Sabha (Sec 10)', 'Sections 53, 54, 56 & 57 — Council of Ministers & Abolition of Legislative Council', and 'Section 13 — Application of Article 239A (Puducherry Model)'), consider the following three statements:\nI. Under Sections 8 and 9 (read with the First Schedule), the Union Territory of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha, while the UT of Ladakh has no Rajya Sabha seat.\nII. Under Section 57, the Legislative Council of the erstwhile State of Jammu and Kashmir was abolished, and all Bills pending ONLY in the Legislative Council lapsed.\nIII. Section 13 applies Article 239AA (the National Capital Territory of Delhi model) to the UT of Jammu and Kashmir.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Section 13 specifically applies Article 239A (the Puducherry model) to the Union Territory of Jammu and Kashmir."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Section 13 — Application of Article 239A (Puducherry Model)', 'Part VIII (Section 75) & Part IX (Section 79) — High Court & Advocate General', and 'Sections 15, 15A & 15B — Nominations by the Lieutenant Governor'), consider the following three statements:\nI. Section 13 of the J&K Reorganisation Act, 2019 states that the provisions contained in Article 239A of the Constitution shall apply to the Union Territory of Jammu and Kashmir.\nII. Under Section 79 (Part IX), the Lieutenant Governor appoints a person who is qualified to be appointed a Judge of a High Court to be the Advocate General for the Union Territory of Jammu and Kashmir.\nIII. Under Section 15A, the Lieutenant Governor nominates 5 members from the Kashmiri migrant community.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Section 15A provides for nominating not more than 2 members from the Kashmiri migrant community (including 1 woman), and Section 15B provides for 1 member from PoJK displaced persons."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Section 14 — Legislative Assembly Strength & 2023 Amendment', 'Supreme Court Judgment on Article 370 (11 December 2023) & 2024 Assembly Elections', and 'Sections 32 & 35 — Extent of Legislative Powers & Excluded Subjects'), consider the following three statements:\nI. Originally, Section 14(3) fixed the total number of seats in the J&K Legislative Assembly at 107, which was increased to 114 by the J&K Reorganisation (Amendment) Act, 2023 (Act No. 35 of 2023).\nII. Following the judgment, three-phase Assembly elections were held in September–October 2024 across all 90 constituencies (counting on 8 October 2024), with the ECI recording the current Assembly term from 4 November 2024 to 3 November 2029.\nIII. Under Section 32, 'Public Order' and 'Police' are under the exclusive legislative control of the J&K Legislative Assembly.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Section 32(1) expressly excludes Entry 1 ('Public Order') and Entry 2 ('Police') of the State List from the law-making powers of the J&K Legislative Assembly."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('J&K Delimitation Commission (2022) & Regional / Category Seat Distribution', 'Overall Structure of the J&K Reorganisation Act, 2019', and 'Part VIII (Section 75) & Part IX (Section 79) — High Court & Advocate General'), consider the following three statements:\nI. Chaired by Justice (Retd.) Ranjana Prakash Desai (with the CEC and J&K SEC as ex-officio members), the Delimitation Commission published its final order on 5 May 2022.\nII. Subsequent amendments in 2023 inserted additional lettered sections—namely Sections 14A, 14B, 15A, and 15B—without renumbering the final Section 103.\nIII. Under the Reorganisation Act, separate High Courts were established at Srinagar for J&K and at Leh for Ladakh.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 75, both Union Territories share a single common High Court (the High Court of Jammu and Kashmir and Ladakh)."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Sections 14A & 14B — Women's Reservation (Second Amendment Act, 2023)', 'Parliamentary Representation — Rajya Sabha (Secs 8–9) & Lok Sabha (Sec 10)', and 'Parliamentary Passage & Constitutional Orders (August 2019)'), consider the following three statements:\nI. The J&K Reorganisation (Second Amendment) Act, 2023 (Act No. 38 of 2023, assented on 20 December 2023) inserted Sections 14A and 14B providing for 1/3rd reservation for women in the J&K Legislative Assembly (including within SC and ST reserved seats).\nII. Under Section 10, the Union Territory of Jammu and Kashmir is allocated 5 seats in the Lok Sabha and the Union Territory of Ladakh is allocated 1 seat in the Lok Sabha.\nIII. The Jammu and Kashmir Reorganisation Act, 2019 itself directly repealed Article 370 of the Constitution.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: The changes to Article 370 took place through Presidential Orders C.O. 272 and C.O. 273 under the constitutional process, whereas the Reorganisation Act separately reorganised the State into two Union Territories."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Sections 15, 15A & 15B — Nominations by the Lieutenant Governor', 'J&K Delimitation Commission (2022) & Regional / Category Seat Distribution', and 'Section 13 — Application of Article 239A (Puducherry Model)'), consider the following three statements:\nI. Under Section 15, the Lieutenant Governor may nominate 2 women to the Legislative Assembly if women are not adequately represented.\nII. Out of the 90 elected Assembly constituencies, 43 are in the Jammu region and 47 are in the Kashmir region, with 7 seats reserved for Scheduled Castes (SCs) and 9 seats reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir).\nIII. Section 13 applies Article 239AA (the National Capital Territory of Delhi model) to the UT of Jammu and Kashmir.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Section 13 specifically applies Article 239A (the Puducherry model) to the Union Territory of Jammu and Kashmir."
        },
        {
          "q": "With reference to J&K Reorganisation Act, 2019 ('Sections 16, 17 & 18 — Qualifications, Term & Sessions of Assembly', 'Sections 19, 20, 21 & 22 — Speaker, LG's Special Address & Rights of Advocate General', and 'Sections 24, 25 & 26 — Oath, Quorum, Casting Vote & Vacation of Seats'), consider the following three statements:\nI. Under Section 16, a person must be a citizen of India and at least 25 years of age to be chosen to fill a seat in the J&K Legislative Assembly.\nII. Under Section 21, the Lieutenant Governor addresses the Assembly at the commencement of the first session after each general election and the first session of each year; under Section 22, Ministers and the Advocate General have the right to speak and participate in Assembly proceedings (without a right to vote unless elected as an MLA).\nIII. The Speaker votes in the first instance on every Bill in the Assembly but has no casting vote in case of a tie.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 25(1), the Speaker does NOT vote in the first instance, but shall have and exercise a casting vote in the case of an equality of votes."
        }
      ],
      [
        {
          "q": "What is the official Act Number of the Jammu and Kashmir Reorganisation Act, 2019?",
          "o": [
            "Act No. 19 of 2019",
            "Act No. 35 of 2019",
            "Act No. 38 of 2019",
            "Act No. 34 of 2019"
          ],
          "a": 3,
          "e": "The Jammu and Kashmir Reorganisation Act, 2019 is enacted as Act No. 34 of 2019."
        },
        {
          "q": "On which date did the Jammu and Kashmir Reorganisation Act, 2019 receive the assent of the President of India?",
          "o": [
            "6 August 2019",
            "5 August 2019",
            "9 August 2019",
            "31 October 2019"
          ],
          "a": 2,
          "e": "The Act received Presidential assent on 9 August 2019."
        },
        {
          "q": "What was the 'Appointed Day' on which the Jammu and Kashmir Reorganisation Act, 2019 came into force and the two Union Territories came into existence?",
          "o": [
            "9 August 2019",
            "31 October 2019",
            "15 August 2019",
            "26 January 2020"
          ],
          "a": 1,
          "e": "31 October 2019 (National Unity Day) was notified as the Appointed Day."
        },
        {
          "q": "How many Parts, original numbered Sections, and Schedules are there in the Jammu and Kashmir Reorganisation Act, 2019?",
          "o": [
            "14 Parts, 103 Sections, and 5 Schedules",
            "12 Parts, 95 Sections, and 6 Schedules",
            "14 Parts, 83 Sections, and 4 Schedules",
            "15 Parts, 114 Sections, and 5 Schedules"
          ],
          "a": 0,
          "e": "The Act consists of 14 Parts, 103 original numbered Sections, and 5 Schedules."
        },
        {
          "q": "Who introduced the Jammu and Kashmir Reorganisation Bill, 2019 in the Rajya Sabha on 5 August 2019?",
          "o": [
            "Prime Minister Narendra Modi",
            "Union Law Minister Ravi Shankar Prasad",
            "Defence Minister Rajnath Singh",
            "Union Home Minister Amit Shah"
          ],
          "a": 3,
          "e": "Union Home Minister Amit Shah introduced the Bill in the Rajya Sabha on 5 August 2019."
        },
        {
          "q": "Which Section of the J&K Reorganisation Act, 2019 provides for the formation of the Union Territory of Ladakh without a legislature?",
          "o": [
            "Section 5",
            "Section 4",
            "Section 3",
            "Section 58"
          ],
          "a": 2,
          "e": "Section 3 provides for the formation of the Union Territory of Ladakh (comprising Kargil and Leh districts) without a legislature."
        },
        {
          "q": "Which Section of the J&K Reorganisation Act, 2019 provides for the formation of the Union Territory of Jammu and Kashmir with a legislature?",
          "o": [
            "Section 3",
            "Section 4",
            "Section 6",
            "Section 14"
          ],
          "a": 1,
          "e": "Section 4 provides for the formation of the Union Territory of Jammu and Kashmir with a Legislative Assembly."
        },
        {
          "q": "Which Section of the J&K Reorganisation Act, 2019 amended the First Schedule to the Constitution of India?",
          "o": [
            "Section 6",
            "Section 2",
            "Section 8",
            "Section 13"
          ],
          "a": 0,
          "e": "Section 6 amended the First Schedule to the Constitution, moving J&K from the list of States to Union Territories alongside Ladakh."
        },
        {
          "q": "How many seats are allocated to the Union Territory of Jammu and Kashmir in the Rajya Sabha (Council of States) under Section 8 and the First Schedule?",
          "o": [
            "3 seats",
            "5 seats",
            "6 seats",
            "4 seats"
          ],
          "a": 3,
          "e": "The UT of Jammu and Kashmir is allocated 4 seats in the Rajya Sabha (while Ladakh has 0 Rajya Sabha seats)."
        },
        {
          "q": "How many Lok Sabha (House of the People) seats are allocated to the UT of Jammu and Kashmir and the UT of Ladakh respectively under Section 10?",
          "o": [
            "6 for J&K and 1 for Ladakh",
            "4 for J&K and 2 for Ladakh",
            "5 for J&K and 1 for Ladakh",
            "5 for J&K and 0 for Ladakh"
          ],
          "a": 2,
          "e": "Under Section 10, J&K UT has 5 Lok Sabha seats and Ladakh UT has 1 Lok Sabha seat."
        },
        {
          "q": "Under Section 13 of the J&K Reorganisation Act, 2019, which Article of the Indian Constitution (applicable to Puducherry) is applied to the UT of Jammu and Kashmir?",
          "o": [
            "Article 239AA",
            "Article 239A",
            "Article 240",
            "Article 244A"
          ],
          "a": 1,
          "e": "Section 13 applies Article 239A of the Constitution to the Union Territory of Jammu and Kashmir."
        },
        {
          "q": "Following the 2022 Delimitation Order and the 2023 Amendment Act, how many directly elected Assembly constituencies exist in the UT of Jammu and Kashmir?",
          "o": [
            "90 constituencies (43 in Jammu and 47 in Kashmir)",
            "83 constituencies",
            "107 constituencies",
            "114 constituencies"
          ],
          "a": 0,
          "e": "There are 90 directly elected Assembly constituencies: 43 in Jammu region and 47 in Kashmir region."
        },
        {
          "q": "What is the amended statutory total number of seats mentioned in Section 14(3) of the Act after the 2023 Amendment (including the 24 vacant seats for PoJK)?",
          "o": [
            "111 seats",
            "107 seats",
            "90 seats",
            "114 seats"
          ],
          "a": 3,
          "e": "Act No. 35 of 2023 substituted '114' for '107' in Section 14(3), with 24 seats remaining vacant for PoJK (114 - 24 = 90 elected seats)."
        },
        {
          "q": "How many seats in the J&K Legislative Assembly remain vacant under Section 14(4) for the area under the occupation of Pakistan (PoJK)?",
          "o": [
            "25 seats",
            "20 seats",
            "24 seats",
            "14 seats"
          ],
          "a": 2,
          "e": "24 seats remain vacant under Section 14(4) for the territories under Pakistan's occupation."
        },
        {
          "q": "How many seats are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively in the 90-member J&K Legislative Assembly?",
          "o": [
            "9 for SCs and 7 for STs",
            "7 for SCs and 9 for STs",
            "6 for SCs and 9 for STs",
            "8 for SCs and 8 for STs"
          ],
          "a": 1,
          "e": "7 seats are reserved for Scheduled Castes (SCs) and 9 seats are reserved for Scheduled Tribes (STs — 6 in Jammu and 3 in Kashmir)."
        },
        {
          "q": "Who chaired the Jammu and Kashmir Delimitation Commission whose final order was published on 5 May 2022?",
          "o": [
            "Justice (Retd.) Ranjana Prakash Desai",
            "Justice N.V. Ramana",
            "Justice D.Y. Chandrachud",
            "Sushil Chandra"
          ],
          "a": 0,
          "e": "Retired Supreme Court Judge Justice Ranjana Prakash Desai chaired the J&K Delimitation Commission."
        },
        {
          "q": "Which Sections inserted by the J&K Reorganisation (Second Amendment) Act, 2023 (Act No. 38 of 2023) provide for 1/3rd reservation for women in the J&K Legislative Assembly?",
          "o": [
            "Sections 16A and 16B",
            "Sections 15A and 15B",
            "Sections 13A and 13B",
            "Sections 14A and 14B"
          ],
          "a": 3,
          "e": "Sections 14A and 14B (inserted by Act No. 38 of 2023) provide for one-third reservation for women in the J&K Assembly."
        },
        {
          "q": "Under Section 15A (inserted in December 2023), the Lieutenant Governor may nominate up to how many members from the Kashmiri migrant community to the J&K Assembly?",
          "o": [
            "3 members",
            "1 member",
            "Not more than 2 members (one of whom must be a woman)",
            "4 members"
          ],
          "a": 2,
          "e": "Under Section 15A, the LG may nominate up to 2 members from the Kashmiri migrant community, including 1 woman."
        },
        {
          "q": "Under Section 15B (inserted in December 2023), the Lieutenant Governor may nominate how many members representing displaced persons from Pakistan-occupied J&K (PoJK)?",
          "o": [
            "2 members",
            "1 member",
            "3 members",
            "4 members"
          ],
          "a": 1,
          "e": "Under Section 15B, the LG may nominate 1 member representing displaced persons from PoJK."
        },
        {
          "q": "Under Section 16 of the Act, what is the minimum age required to be chosen as a member of the Legislative Assembly (MLA) of J&K UT?",
          "o": [
            "25 years",
            "21 years",
            "30 years",
            "18 years"
          ],
          "a": 0,
          "e": "Under Section 16(b), a candidate for the Legislative Assembly must not be less than 25 years of age."
        }
      ],
      [
        {
          "q": "Under Section 25(3) of the Act, what is the quorum required to constitute a meeting of the J&K Legislative Assembly?",
          "o": [
            "20 members",
            "15 members or one-fifth",
            "One-third of total members",
            "10 members or one-tenth (1/10th) of total membership, whichever is greater"
          ],
          "a": 3,
          "e": "Quorum under Section 25(3) is 10 members or 1/10th of the total number of members of the Assembly, whichever is greater."
        },
        {
          "q": "Under Section 26(4), after how many days of continuous absence from all meetings without permission of the Assembly can a member's seat be declared vacant?",
          "o": [
            "90 days",
            "30 days",
            "60 days",
            "14 days"
          ],
          "a": 2,
          "e": "If a member is absent for 60 days without permission of the Assembly, the House may declare his seat vacant."
        },
        {
          "q": "Which Section of the J&K Reorganisation Act, 2019 applies the Tenth Schedule (anti-defection law) to members of the J&K Legislative Assembly?",
          "o": [
            "Section 27",
            "Section 28",
            "Section 29",
            "Section 30"
          ],
          "a": 1,
          "e": "Section 28 deals with disqualification on the ground of defection under the Tenth Schedule."
        },
        {
          "q": "What is the daily monetary penalty prescribed under Section 29 for sitting or voting in the J&K Assembly before taking oath or when disqualified?",
          "o": [
            "₹500 per day",
            "₹1,000 per day",
            "₹200 per day",
            "₹5,000 per day"
          ],
          "a": 0,
          "e": "Section 29 imposes a penalty of ₹500 for each day a person sits or votes illegally."
        },
        {
          "q": "Under Section 32(1) of the Act, the J&K Legislative Assembly can make laws on matters in the State List EXCEPT which two entries?",
          "o": [
            "Entry 8 ('Intoxicating Liquors') and Entry 9 ('Relief of the Disabled')",
            "Entry 18 ('Land') and Entry 30 ('Money-lending')",
            "Entry 5 ('Local Government') and Entry 6 ('Public Health')",
            "Entry 1 ('Public Order') and Entry 2 ('Police')"
          ],
          "a": 3,
          "e": "Section 32(1) excludes Entry 1 (Public Order) and Entry 2 (Police) of the State List from the Assembly's legislative competence."
        },
        {
          "q": "Which Section of the J&K Reorganisation Act, 2019 deals with the presentation of the Annual Financial Statement (Budget) before the Legislative Assembly?",
          "o": [
            "Section 45",
            "Section 36",
            "Section 41",
            "Section 50"
          ],
          "a": 2,
          "e": "Section 41 deals with the Annual Financial Statement."
        },
        {
          "q": "Which Section of the Act provides for the official language(s) to be used for conducting business in the J&K Legislative Assembly?",
          "o": [
            "Section 48",
            "Section 47",
            "Section 49",
            "Section 52"
          ],
          "a": 1,
          "e": "Section 47 deals with the official language or languages of the UT and language to be used in the Legislative Assembly."
        },
        {
          "q": "According to Section 53(1) of the Act, the strength of the Council of Ministers (including the Chief Minister) in J&K UT shall NOT exceed what percentage of the total number of MLAs?",
          "o": [
            "10% of the total strength of the Legislative Assembly",
            "15% of the total strength",
            "12% of the total strength",
            "20% of the total strength"
          ],
          "a": 0,
          "e": "Under Section 53(1), the Council of Ministers cannot exceed 10% of the total number of members in the Legislative Assembly."
        },
        {
          "q": "Which Section of the J&K Reorganisation Act, 2019 abolished the Legislative Council of the former State of Jammu and Kashmir?",
          "o": [
            "Section 60",
            "Section 53",
            "Section 58",
            "Section 57"
          ],
          "a": 3,
          "e": "Section 57 abolished the Legislative Council of the former State of Jammu and Kashmir."
        },
        {
          "q": "Which Part and Section of the Act deal with the administration of the Union Territory of Ladakh?",
          "o": [
            "Part V, Section 60",
            "Part III, Section 50",
            "Part IV, Section 58",
            "Part VI, Section 65"
          ],
          "a": 2,
          "e": "Part IV (Section 58) deals with the administration of the Union Territory of Ladakh."
        },
        {
          "q": "Which Section of the Act establishes the Consolidated Fund of the Union Territory of Jammu and Kashmir?",
          "o": [
            "Section 68",
            "Section 67",
            "Section 69",
            "Section 73"
          ],
          "a": 1,
          "e": "Section 67 establishes the Consolidated Fund of the UT of J&K (Section 68 is Public Account and Section 69 is Contingency Fund)."
        },
        {
          "q": "Which Section of the Act contains provisions in case of failure of constitutional machinery in the Union Territory of Jammu and Kashmir?",
          "o": [
            "Section 73",
            "Section 70",
            "Section 75",
            "Section 79"
          ],
          "a": 0,
          "e": "Section 73 provides for President's action on receipt of a report from the LG in case of failure of constitutional machinery."
        },
        {
          "q": "Under which Section of the Act does the High Court of Jammu and Kashmir and Ladakh function as the common High Court for both Union Territories?",
          "o": [
            "Section 84 (Part XI)",
            "Section 73 (Part VII)",
            "Section 79 (Part IX)",
            "Section 75 (Part VIII)"
          ],
          "a": 3,
          "e": "Section 75 in Part VIII provides for the common High Court for the UT of J&K and the UT of Ladakh."
        },
        {
          "q": "Which Section of the J&K Reorganisation Act, 2019 provides for the appointment of the Advocate General for the Union Territory of Jammu and Kashmir?",
          "o": [
            "Section 80 (Part X)",
            "Section 75 (Part VIII)",
            "Section 79 (Part IX)",
            "Section 88 (Part XIII)"
          ],
          "a": 2,
          "e": "Section 79 (Part IX) provides for the Advocate General for the UT of J&K, appointed by the Lieutenant Governor."
        },
        {
          "q": "Into which All India Services cadre were the future allocations and existing officers of the erstwhile J&K cadre merged under Part XIII (Section 88 and subsequent amendment)?",
          "o": [
            "UT-Northern Cadre",
            "AGMUT Cadre (Arunachal Pradesh, Goa, Mizoram and Union Territories)",
            "Central Secretariat Cadre",
            "Himachal-Punjab Cadre"
          ],
          "a": 1,
          "e": "IAS, IPS, and IFoS officers for the UTs of J&K and Ladakh are borne on the AGMUT cadre."
        },
        {
          "q": "Which Section of the Act deals with the Public Service Commission (continuing J&K PSC for J&K UT and assigning UPSC for Ladakh UT)?",
          "o": [
            "Section 93",
            "Section 88",
            "Section 90",
            "Section 95"
          ],
          "a": 0,
          "e": "Section 93 in Part XIII deals with the Public Service Commission provisions for both UTs."
        },
        {
          "q": "Which Schedule of the J&K Reorganisation Act, 2019 contains the Forms of Oaths or Affirmations for candidates, MLAs, and Ministers?",
          "o": [
            "Fifth Schedule",
            "First Schedule",
            "Third Schedule",
            "Fourth Schedule"
          ],
          "a": 3,
          "e": "The Fourth Schedule sets out the statutory Forms of Oaths or Affirmations."
        },
        {
          "q": "Which Schedule of the J&K Reorganisation Act, 2019 lists the Central laws made applicable to the UTs and State laws repealed or continued?",
          "o": [
            "Third Schedule",
            "Second Schedule",
            "Fifth Schedule (read with Section 95)",
            "Fourth Schedule"
          ],
          "a": 2,
          "e": "The Fifth Schedule (read with Section 95) contains the tables of Central and State laws."
        },
        {
          "q": "Which Section—the final numbered section of the J&K Reorganisation Act, 2019—empowers the President to issue orders for removing difficulties in giving effect to the Act?",
          "o": [
            "Section 96",
            "Section 103",
            "Section 100",
            "Section 101"
          ],
          "a": 1,
          "e": "Section 103 confers the power to remove difficulties."
        },
        {
          "q": "Under the Jammu and Kashmir Official Languages Act, 2020 (enacted in September 2020), which five languages are the official languages of the UT of Jammu and Kashmir?",
          "o": [
            "Kashmiri, Dogri, Urdu, Hindi, and English",
            "Kashmiri, Dogri, Punjabi, Urdu, and English",
            "Bhoti, Urdu, Purgi, Hindi, and English",
            "Kashmiri, Gojri, Pahari, Urdu, and English"
          ],
          "a": 0,
          "e": "The five official languages of J&K UT are Kashmiri, Dogri, Urdu, Hindi, and English (whereas Ladakh UT has Bhoti, Urdu, Purgi, Hindi, and English)."
        }
      ]
    ]
  },
  "acts_personalities": {
    "key": "acts_personalities",
    "name": "Popular Personalities (National & International)",
    "shortBadge": "12 Sets • 240 Qs",
    "icon": "🌟",
    "desc": "Freedom Fighters, Reformers, Rulers, Scientists, Space/Inventors, Literature, Cinema/Music/Arts, Economics, World Leaders, Sports & 2026 Padma/Sports Awards. 12 Sets × 20 Questions (240 Qs).",
    "subtitle": "Sets 1–4: Statement-Based & Match (20 Qs each = 80 Qs) • Sets 5–12: High-Frequency One-Liners (20 Qs each = 160 Qs) • Updated through Oct 2026",
    "SET_TITLES": [
      "Set 1: Statement-Based & Match — Part I (Freedom Movement & Reformers • 20 Qs)",
      "Set 2: Statement-Based & Match — Part II (Rulers, Scientists & Literature • 20 Qs)",
      "Set 3: Statement-Based & Match — Part III (World Leaders, Sports & 2026 Awards • 20 Qs)",
      "Set 4: Statement-Based & Match — Part IV (Comprehensive Multi-Statement • 20 Qs)",
      "Set 5: High-Yield One-Liner MCQs — Part I (Freedom Struggle & National Leaders • 20 Qs)",
      "Set 6: High-Yield One-Liner MCQs — Part II (Social Reformers, Spiritual & Rulers • 20 Qs)",
      "Set 7: High-Yield One-Liner MCQs — Part III (Scientists, Space & Inventors • 20 Qs)",
      "Set 8: High-Yield One-Liner MCQs — Part IV (Literature, Cinema, Music & Economics • 20 Qs)",
      "Set 9: High-Yield One-Liner MCQs — Part V (World Leaders, Thinkers & Sports • 20 Qs)",
      "Set 10: High-Yield One-Liner MCQs — Part VI (2026 Padma, Phalke & Sports Awards • 20 Qs)",
      "Set 11: High-Yield One-Liner MCQs — Part VII (Famous Titles, Nicknames & Olympics • 20 Qs)",
      "Set 12: High-Yield One-Liner MCQs — Part VIII (Books, Arts & Global Pioneers • 20 Qs)"
    ],
    "sets": [
      [
        {
          "q": "With reference to Popular Personalities (Mahatma Gandhi), consider the following statements:\nStatement I: Mahatma Gandhi championed Ahimsa and Satyagraha and led the Non-Cooperation (1920), Civil Disobedience (1930), and Quit India (1942) movements.\nStatement II: He authored his autobiography 'The Story of My Experiments with Truth' and 'Hind Swaraj'.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Mahatma Gandhi (Father of the Nation)."
        },
        {
          "q": "Consider the following two statements regarding Jawaharlal Nehru:\nStatement I: Jawaharlal Nehru served as the first Prime Minister of independent India and authored 'The Discovery of India'.\nStatement II: Jawaharlal Nehru founded the Swatantra Party in 1959.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: C. Rajagopalachari founded the Swatantra Party in 1959, whereas Jawaharlal Nehru was India's first Prime Minister."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Subhas Chandra Bose founded the Servants of India Society in 1905.\nStatement II: Fondly called the 'People's President', he authored the inspiring autobiography 'Wings of Fire'.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Gopal Krishna Gokhale founded the Servants of India Society in 1905, while Netaji Subhas Chandra Bose founded the Forward Bloc in 1939.). Statement II is correct (Fondly called the 'People's President', he authored the inspiring autobiography 'Wings of Fire'.)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Sardar Vallabhbhai Patel — Iron Man of India\nII. Madan Mohan Malaviya & Annie Besant — Mahamana & Grand Old Lady of India\nIII. Qutb-ud-din Aibak, Razia Sultana, Alauddin Khalji & Muhammad bin Tughlaq — Delhi Sultanate Rulers\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Sardar Vallabhbhai Patel (Iron Man of India), Madan Mohan Malaviya & Annie Besant (Mahamana & Grand Old Lady of India), and Qutb-ud-din Aibak, Razia Sultana, Alauddin Khalji & Muhammad bin Tughlaq (Delhi Sultanate Rulers)."
        },
        {
          "q": "With reference to Popular Personalities (Dr. B. R. Ambedkar), consider the following statements:\nStatement I: Dr. B. R. Ambedkar served as the Chairman of the Drafting Committee of the Constituent Assembly and as independent India's first Law Minister.\nStatement II: Known as the 'Father of the Indian Constitution', he authored the famous work 'Annihilation of Caste'.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Dr. B. R. Ambedkar (Father of the Indian Constitution)."
        },
        {
          "q": "Consider the following two statements regarding Bhagat Singh:\nStatement I: Honoured as 'Shaheed-e-Azam', Bhagat Singh was a key leader of the Hindustan Socialist Republican Association (HSRA).\nStatement II: Bhagat Singh was executed in connection with the Kakori Train Action of 1925.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Ram Prasad Bismil, Ashfaqulla Khan, Roshan Singh, and Rajendra Lahiri were executed in the Kakori case; Bhagat Singh, Rajguru, and Sukhdev were executed on 23 March 1931 in the Lahore Conspiracy Case."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Lala Lajpat Rai was known by the title 'Deshbandhu'.\nStatement II: Sir Syed Ahmad Khan promoted modern scientific education among Muslims and founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875 (precursor to Aligarh Muslim University).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Chittaranjan Das was known as 'Deshbandhu', whereas Lala Lajpat Rai was known as 'Punjab Kesari'.). Statement II is correct (Sir Syed Ahmad Khan promoted modern scientific education among Muslims and founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875 (precursor to Aligarh Muslim University).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Bal Gangadhar Tilak — Lokmanya\nII. Guru Nanak Dev, Guru Gobind Singh, Kabir & Tulsidas — Sikh Gurus & Bhakti Movement Saints\nIII. Dr. Rajendra Prasad — Ajatshatru / First Citizen of India\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Bal Gangadhar Tilak (Lokmanya), Guru Nanak Dev, Guru Gobind Singh, Kabir & Tulsidas (Sikh Gurus & Bhakti Movement Saints), and Dr. Rajendra Prasad (Ajatshatru / First Citizen of India)."
        },
        {
          "q": "With reference to Popular Personalities (Bipin Chandra Pal), consider the following statements:\nStatement I: Bipin Chandra Pal, representing Bengal in the 'Lal-Bal-Pal' triumvirate, was a leading exponent of Swadeshi and assertive nationalism.\nStatement II: He is remembered in Indian nationalist history by the epithet 'Father of Revolutionary Thought in India'.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Bipin Chandra Pal (Father of Revolutionary Thought)."
        },
        {
          "q": "Consider the following two statements regarding Sarojini Naidu:\nStatement I: Celebrated as the 'Nightingale of India' (Bharat Kokila) for her lyrical English poetry, Sarojini Naidu presided over the 1925 Kanpur Session as the first Indian woman President of the INC.\nStatement II: Sarojini Naidu was the first woman Prime Minister of India.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Indira Gandhi was the first woman Prime Minister of India, while Sarojini Naidu was the first woman Governor of an Indian state."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Dr. Rajendra Prasad was the first Vice-President of India.\nStatement II: J. J. Thomson discovered the electron (1897), Ernest Rutherford discovered the atomic nucleus, James Chadwick discovered the neutron (1932), Dmitri Mendeleev created the Periodic Table, and Marie Curie became the first person to win Nobel Prizes in two different scientific fields (Physics 1903 and Chemistry 1911).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Dr. S. Radhakrishnan was the first Vice-President of India, while Dr. Rajendra Prasad was the first President of India.). Statement II is correct (J. J. Thomson discovered the electron (1897), Ernest Rutherford discovered the atomic nucleus, James Chadwick discovered the neutron (1932), Dmitri Mendeleev created the Periodic Table, and Marie Curie became the first person to win Nobel Prizes in two different scientific fields (Physics 1903 and Chemistry 1911).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Dr. A. P. J. Abdul Kalam — Missile Man of India / People's President\nII. Explorers, Geographers & Historians — Eratosthenes, Herodotus, Wegener, Hillary & Tenzing — Exploration & Geography\nIII. Rabindranath Tagore, Kalidasa, Banabhatta, Bankim Chandra & Premchand — Literary Giants of India\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Dr. A. P. J. Abdul Kalam (Missile Man of India / People's President), Explorers, Geographers & Historians — Eratosthenes, Herodotus, Wegener, Hillary & Tenzing (Exploration & Geography), and Rabindranath Tagore, Kalidasa, Banabhatta, Bankim Chandra & Premchand (Literary Giants of India)."
        },
        {
          "q": "With reference to Popular Personalities (Dadabhai Naoroji), consider the following statements:\nStatement I: Revered as the 'Grand Old Man of India', Dadabhai Naoroji propounded the 'Drain of Wealth Theory' in his book 'Poverty and Un-British Rule in India'.\nStatement II: He was the first Indian to be elected to the British House of Commons (from Central Finsbury in 1892 on a Liberal ticket) and presided over three INC sessions (1886, 1893, 1906).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Dadabhai Naoroji (Grand Old Man of India)."
        },
        {
          "q": "Consider the following two statements regarding Gopal Krishna Gokhale:\nStatement I: Moderate nationalist leader Gopal Krishna Gokhale founded the 'Servants of India Society' at Pune in 1905.\nStatement II: Gopal Krishna Gokhale founded the Banaras Hindu University in 1916.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Pandit Madan Mohan Malaviya founded the Banaras Hindu University (BHU) in 1916, while Gokhale founded the Servants of India Society in 1905."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Madan Mohan Malaviya was known by the title 'Deshbandhu'.\nStatement II: In the coaching and lifetime categories, I. Arumainayagam (Football) received the Arjuna Award (Lifetime), while Parveer Singh (Athletics), Chhote Lal Yadav (Boxing), and Neha Nandkumar Chavan (Shooting) received the Dronacharya Award (Regular), and Dharmendra Singh Yadav (Boxing) and Virender Kumar (Wrestling) received the Dronacharya Award (Lifetime).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Madan Mohan Malaviya was known as 'Mahamana', whereas Chittaranjan Das was known as 'Deshbandhu'.). Statement II is correct (In the coaching and lifetime categories, I. Arumainayagam (Football) received the Arjuna Award (Lifetime), while Parveer Singh (Athletics), Chhote Lal Yadav (Boxing), and Neha Nandkumar Chavan (Shooting) received the Dronacharya Award (Regular), and Dharmendra Singh Yadav (Boxing) and Virender Kumar (Wrestling) received the Dronacharya Award (Lifetime).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Lal Bahadur Shastri, Indira Gandhi & Morarji Desai — Man of Peace & Iron Lady of India\nII. Subhas Chandra Bose — Netaji\nIII. Aruna Asaf Ali, Usha Mehta, Matangini Hazra & Kanaklata Barua — Heroines of the 1942 Quit India Movement\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Lal Bahadur Shastri, Indira Gandhi & Morarji Desai (Man of Peace & Iron Lady of India), Subhas Chandra Bose (Netaji), and Aruna Asaf Ali, Usha Mehta, Matangini Hazra & Kanaklata Barua (Heroines of the 1942 Quit India Movement)."
        },
        {
          "q": "With reference to Popular Personalities (Dr. S. Radhakrishnan, Maulana Azad & Dr. Manmohan Singh), consider the following statements:\nStatement I: Philosopher-statesman Dr. Sarvepalli Radhakrishnan served as India's first Vice-President and second President; his birth anniversary on 5 September is celebrated as Teachers' Day.\nStatement II: Maulana Abul Kalam Azad served as independent India's first Education Minister, while economist Dr. Manmohan Singh served as Finance Minister during the landmark 1991 LPG economic reforms and later as Prime Minister (2004–2014).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Dr. S. Radhakrishnan, Maulana Azad & Dr. Manmohan Singh (Teachers' Day, Education Day & 1991 Reforms)."
        },
        {
          "q": "Consider the following two statements regarding Chittaranjan Das, Jayaprakash Narayan & Vinoba Bhave:\nStatement I: Chittaranjan Das, revered as 'Deshbandhu' (Friend of the Nation), co-founded the Swaraj Party in 1923 with Motilal Nehru.\nStatement II: Jayaprakash Narayan initiated the Bhoodan Movement in 1951.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Acharya Vinoba Bhave initiated the Bhoodan Movement in 1951, whereas Jayaprakash Narayan ('Loknayak') led the Total Revolution movement."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Aruna Asaf Ali was the first woman President of the Indian National Congress in 1917.\nStatement II: Fondly called the 'People's President', he authored the inspiring autobiography 'Wings of Fire'.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Annie Besant was the first woman President of the INC (1917), while Aruna Asaf Ali is famous as the 'Heroine of the 1942 Quit India Movement'.). Statement II is correct (Fondly called the 'People's President', he authored the inspiring autobiography 'Wings of Fire'.)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Khan Abdul Ghaffar Khan, Birsa Munda & Alluri Sitarama Raju — Frontier Gandhi & Tribal Freedom Icons\nII. Madan Mohan Malaviya & Annie Besant — Mahamana & Grand Old Lady of India\nIII. 2026 Padma Awards & 72nd National Film Awards (Dadasaheb Phalke Award) — 2026 Current Affairs Update\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Khan Abdul Ghaffar Khan, Birsa Munda & Alluri Sitarama Raju (Frontier Gandhi & Tribal Freedom Icons), Madan Mohan Malaviya & Annie Besant (Mahamana & Grand Old Lady of India), and 2026 Padma Awards & 72nd National Film Awards (Dadasaheb Phalke Award) (2026 Current Affairs Update)."
        }
      ],
      [
        {
          "q": "With reference to Popular Personalities (Raja Ram Mohan Roy & Ishwar Chandra Vidyasagar), consider the following statements:\nStatement I: Raja Ram Mohan Roy, revered as the 'Father of the Indian Renaissance', founded the Brahmo Samaj in 1828 and campaigned successfully for the abolition of Sati (1829).\nStatement II: Pandit Ishwar Chandra Vidyasagar ('Ocean of Knowledge') championed women's education and played the decisive role in the passage of the Hindu Widows' Remarriage Act, 1856.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Raja Ram Mohan Roy & Ishwar Chandra Vidyasagar (Father of Indian Renaissance & Ocean of Knowledge)."
        },
        {
          "q": "Consider the following two statements regarding Jyotirao Phule, Savitribai Phule & Fatima Sheikh:\nStatement I: Mahatma Jyotirao Phule ('Pioneer of Social Revolution') founded the Satyashodhak Samaj in 1873 and authored 'Gulamgiri' to fight caste discrimination.\nStatement II: Savitribai Phule founded the Ramakrishna Mission at Belur in 1897.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Swami Vivekananda founded the Ramakrishna Mission in 1897, while Savitribai Phule was the 'First Woman Teacher of India'."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Swami Dayanand Saraswati addressed the World's Parliament of Religions in Chicago in 1893.\nStatement II: Sir Syed Ahmad Khan promoted modern scientific education among Muslims and founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875 (precursor to Aligarh Muslim University).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (It was Swami Vivekananda who delivered the historic address at the Chicago Parliament of Religions in September 1893.). Statement II is correct (Sir Syed Ahmad Khan promoted modern scientific education among Muslims and founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875 (precursor to Aligarh Muslim University).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Sri Narayana Guru, Periyar E.V. Ramasamy & Sir Syed Ahmad Khan — Anti-Caste & Educational Reformers\nII. Guru Nanak Dev, Guru Gobind Singh, Kabir & Tulsidas — Sikh Gurus & Bhakti Movement Saints\nIII. Ibn Sina (Avicenna), Al-Biruni, Rumi & Mother Teresa — International Spiritual, Scholarly & Humanitarian Icons\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Sri Narayana Guru, Periyar E.V. Ramasamy & Sir Syed Ahmad Khan (Anti-Caste & Educational Reformers), Guru Nanak Dev, Guru Gobind Singh, Kabir & Tulsidas (Sikh Gurus & Bhakti Movement Saints), and Ibn Sina (Avicenna), Al-Biruni, Rumi & Mother Teresa (International Spiritual, Scholarly & Humanitarian Icons)."
        },
        {
          "q": "With reference to Popular Personalities (Gautama Buddha & Bhagwan Mahavira), consider the following statements:\nStatement I: Gautama Buddha (born at Lumbini, enlightenment at Bodh Gaya, first sermon at Sarnath, Mahaparinirvana at Kushinagar) founded Buddhism and taught the Four Noble Truths and the Eightfold Path.\nStatement II: Vardhamana Mahavira was the 24th and last Tirthankara of Jainism (whereas Rishabhanatha was the 1st Tirthankara and Parshvanatha was the 23rd Tirthankara) and added the fifth vow of 'Brahmacharya' to the four existing vows (Ahimsa, Satya, Asteya, Aparigraha).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Gautama Buddha & Bhagwan Mahavira (Buddhism & Jainism Founders)."
        },
        {
          "q": "Consider the following two statements regarding Adi Shankaracharya, Ramanujacharya & Madhvacharya:\nStatement I: Adi Shankaracharya expounded the philosophy of 'Advaita Vedanta' (Non-dualism) and established four cardinal mathas at Sringeri, Dwarka, Puri, and Jyotirmath (Joshimath).\nStatement II: Adi Shankaracharya propounded the philosophy of Dvaita (Dualism).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Adi Shankaracharya propounded Advaita Vedanta (Non-dualism), whereas Madhvacharya propounded Dvaita Vedanta."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Guru Nanak Dev founded the Khalsa Panth in 1699.\nStatement II: J. J. Thomson discovered the electron (1897), Ernest Rutherford discovered the atomic nucleus, James Chadwick discovered the neutron (1932), Dmitri Mendeleev created the Periodic Table, and Marie Curie became the first person to win Nobel Prizes in two different scientific fields (Physics 1903 and Chemistry 1911).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (The 10th Sikh Guru, Guru Gobind Singh, founded the Khalsa Panth on Baisakhi day in 1699.). Statement II is correct (J. J. Thomson discovered the electron (1897), Ernest Rutherford discovered the atomic nucleus, James Chadwick discovered the neutron (1932), Dmitri Mendeleev created the Periodic Table, and Marie Curie became the first person to win Nobel Prizes in two different scientific fields (Physics 1903 and Chemistry 1911).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Ibn Sina (Avicenna), Al-Biruni, Rumi & Mother Teresa — International Spiritual, Scholarly & Humanitarian Icons\nII. Explorers, Geographers & Historians — Eratosthenes, Herodotus, Wegener, Hillary & Tenzing — Exploration & Geography\nIII. Lala Lajpat Rai — Punjab Kesari\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Ibn Sina (Avicenna), Al-Biruni, Rumi & Mother Teresa (International Spiritual, Scholarly & Humanitarian Icons), Explorers, Geographers & Historians — Eratosthenes, Herodotus, Wegener, Hillary & Tenzing (Exploration & Geography), and Lala Lajpat Rai (Punjab Kesari)."
        },
        {
          "q": "With reference to Popular Personalities (Chandragupta Maurya, Chanakya (Kautilya) & Emperor Ashoka), consider the following statements:\nStatement I: Chandragupta Maurya founded the Mauryan Empire in 322 BCE with the counsel of his mentor and Prime Minister Chanakya (Kautilya / Vishnugupta), who authored the classic treatise on statecraft 'Arthashastra'.\nStatement II: Mauryan Emperor Ashoka the Great embraced Buddhism after the Kalinga War and propagated 'Dhamma' through rock and pillar edicts across the subcontinent.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Chandragupta Maurya, Chanakya (Kautilya) & Emperor Ashoka (Mauryan Empire Builders)."
        },
        {
          "q": "Consider the following two statements regarding Samudragupta, Chandragupta II (Vikramaditya), Harshavardhana & Pulakeshin II:\nStatement I: Gupta Emperor Samudragupta is called the 'Napoleon of India' (by historian V.A. Smith) for his extensive military conquests recorded in Harisena's Allahabad Pillar Inscription (Prayag Prashasti), while Chandragupta II assumed the title 'Vikramaditya'.\nStatement II: Chandragupta Maurya is known as the 'Napoleon of India'.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Gupta Emperor Samudragupta is known as the 'Napoleon of India'."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Alauddin Khalji shifted the capital from Delhi to Daulatabad and introduced token currency.\nStatement II: In the coaching and lifetime categories, I. Arumainayagam (Football) received the Arjuna Award (Lifetime), while Parveer Singh (Athletics), Chhote Lal Yadav (Boxing), and Neha Nandkumar Chavan (Shooting) received the Dronacharya Award (Regular), and Dharmendra Singh Yadav (Boxing) and Virender Kumar (Wrestling) received the Dronacharya Award (Lifetime).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (It was Muhammad bin Tughlaq who shifted the capital to Daulatabad and introduced token currency, whereas Alauddin Khalji introduced market control reforms.). Statement II is correct (In the coaching and lifetime categories, I. Arumainayagam (Football) received the Arjuna Award (Lifetime), while Parveer Singh (Athletics), Chhote Lal Yadav (Boxing), and Neha Nandkumar Chavan (Shooting) received the Dronacharya Award (Regular), and Dharmendra Singh Yadav (Boxing) and Virender Kumar (Wrestling) received the Dronacharya Award (Lifetime).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Babur, Sher Shah Suri, Akbar, Shivaji Maharaj, Krishnadevaraya & Raja Raja Chola I — Mughal, Sur, Maratha, Vijayanagara & Chola Rulers\nII. Subhas Chandra Bose — Netaji\nIII. Sushruta, Charaka, Aryabhata, J. C. Bose, S. N. Bose & S. Chandrasekhar — Ancient & Modern Indian Scientific Luminaries\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Babur, Sher Shah Suri, Akbar, Shivaji Maharaj, Krishnadevaraya & Raja Raja Chola I (Mughal, Sur, Maratha, Vijayanagara & Chola Rulers), Subhas Chandra Bose (Netaji), and Sushruta, Charaka, Aryabhata, J. C. Bose, S. N. Bose & S. Chandrasekhar (Ancient & Modern Indian Scientific Luminaries)."
        },
        {
          "q": "With reference to Popular Personalities (Sir C. V. Raman, Homi J. Bhabha & Vikram Sarabhai), consider the following statements:\nStatement I: Sir C. V. Raman won the 1930 Nobel Prize in Physics for discovering the 'Raman Effect' (scattering of light); his discovery date, 28 February, is celebrated annually as National Science Day.\nStatement II: Dr. Homi J. Bhabha is revered as the 'Father of the Indian Nuclear Programme', while Dr. Vikram Sarabhai is revered as the 'Father of the Indian Space Programme'.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Sir C. V. Raman, Homi J. Bhabha & Vikram Sarabhai (Pioneers of Indian Physics, Nuclear & Space Science)."
        },
        {
          "q": "Consider the following two statements regarding M. S. Swaminathan, Verghese Kurien, Salim Ali & Tessy Thomas:\nStatement I: Agricultural scientist Dr. M. S. Swaminathan is known as the 'Father of the Green Revolution in India' (conferred Bharat Ratna in 2024), while Dr. Verghese Kurien is known as the 'Father of the White Revolution' for spearheading 'Operation Flood' (Amul dairy cooperative movement).\nStatement II: Dr. Verghese Kurien is known as the 'Father of the Green Revolution in India'.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Dr. M. S. Swaminathan is the 'Father of the Green Revolution in India', while Dr. Verghese Kurien is the 'Father of the White Revolution'."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Charaka invented the Crescograph to measure plant growth.\nStatement II: Fondly called the 'People's President', he authored the inspiring autobiography 'Wings of Fire'.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Sir Jagadish Chandra Bose invented the Crescograph, whereas Charaka authored the ancient medical treatise 'Charaka Samhita'.). Statement II is correct (Fondly called the 'People's President', he authored the inspiring autobiography 'Wings of Fire'.)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Isaac Newton, Albert Einstein, Galileo Galilei, Marie Curie & Atomic Pioneers — Physics & Atomic Discoveries\nII. Madan Mohan Malaviya & Annie Besant — Mahamana & Grand Old Lady of India\nIII. Lal Bahadur Shastri, Indira Gandhi & Morarji Desai — Man of Peace & Iron Lady of India\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Isaac Newton, Albert Einstein, Galileo Galilei, Marie Curie & Atomic Pioneers (Physics & Atomic Discoveries), Madan Mohan Malaviya & Annie Besant (Mahamana & Grand Old Lady of India), and Lal Bahadur Shastri, Indira Gandhi & Morarji Desai (Man of Peace & Iron Lady of India)."
        },
        {
          "q": "With reference to Popular Personalities (Medical & Biological Pioneers — Harvey, Jenner, Pasteur, Fleming, Mendel, Darwin & Salk), consider the following statements:\nStatement I: William Harvey discovered the circulation of blood; Edward Jenner pioneered the world's first vaccine (against smallpox); Louis Pasteur developed germ theory, pasteurization, and the rabies vaccine; Alexander Fleming discovered penicillin (1928); and Jonas Salk developed the first successful polio vaccine.\nStatement II: Gregor Mendel ('Father of Genetics') discovered the laws of inheritance through pea-plant experiments; Charles Darwin ('Father of Evolutionary Biology') propounded evolution by natural selection; Antonie van Leeuwenhoek is the 'Father of Microbiology'; and James Watson & Francis Crick (with Rosalind Franklin's X-ray diffraction data) discovered the DNA double-helix structure.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Medical & Biological Pioneers — Harvey, Jenner, Pasteur, Fleming, Mendel, Darwin & Salk (Biology & Medicine)."
        },
        {
          "q": "Consider the following two statements regarding Space Pioneers & World Inventors — Gagarin, Armstrong, Rakesh Sharma, Kalpana Chawla & Berners-Lee:\nStatement I: Soviet cosmonaut Yuri Gagarin became the first human in space (12 April 1961), Valentina Tereshkova became the first woman in space (1963), and American astronaut Neil Armstrong (with Buzz Aldrin on Apollo 11) became the first person to walk on the Moon (July 1969).\nStatement II: Rakesh Sharma was the first person in the world to walk on the Moon in 1969.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Neil Armstrong was the first person to walk on the Moon (July 1969), while Rakesh Sharma became the first Indian citizen in space in 1984."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Herodotus propounded the Continental Drift Theory in 1912.\nStatement II: Sir Syed Ahmad Khan promoted modern scientific education among Muslims and founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875 (precursor to Aligarh Muslim University).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (German meteorologist Alfred Wegener propounded the Continental Drift Theory in 1912, whereas Herodotus is the 'Father of History'.). Statement II is correct (Sir Syed Ahmad Khan promoted modern scientific education among Muslims and founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875 (precursor to Aligarh Muslim University).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Rabindranath Tagore, Kalidasa, Banabhatta, Bankim Chandra & Premchand — Literary Giants of India\nII. Guru Nanak Dev, Guru Gobind Singh, Kabir & Tulsidas — Sikh Gurus & Bhakti Movement Saints\nIII. World Political Leaders & Unifiers — Lincoln, Mandela, Bismarck, Mazzini, Thatcher & Gorbachev — World Leaders\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Rabindranath Tagore, Kalidasa, Banabhatta, Bankim Chandra & Premchand (Literary Giants of India), Guru Nanak Dev, Guru Gobind Singh, Kabir & Tulsidas (Sikh Gurus & Bhakti Movement Saints), and World Political Leaders & Unifiers — Lincoln, Mandela, Bismarck, Mazzini, Thatcher & Gorbachev (World Leaders)."
        }
      ],
      [
        {
          "q": "With reference to Popular Personalities (Indian Cinema, Classical Music & Painting Icons — Phalke, Ray, Lata, Subbulakshmi & Bismillah Khan), consider the following statements:\nStatement I: Dadasaheb Phalke, revered as the 'Father of Indian Cinema', directed India's first full-length feature film 'Raja Harishchandra' in 1913; Satyajit Ray won an Honorary Academy Award (Oscar) and the Bharat Ratna; and Raj Kapoor is known as the 'Showman of Indian Cinema'.\nStatement II: In music and art, Lata Mangeshkar ('Nightingale of India' in playback singing), Carnatic vocalist M. S. Subbulakshmi (first musician to receive the Bharat Ratna, 1998), Shehnai maestro Ustad Bismillah Khan, Sitar maestro Pandit Ravi Shankar, and Khayal vocalist Pandit Bhimsen Joshi were all honoured with the Bharat Ratna.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Indian Cinema, Classical Music & Painting Icons — Phalke, Ray, Lata, Subbulakshmi & Bismillah Khan (Cinema, Music & Arts)."
        },
        {
          "q": "Consider the following two statements regarding Business, Aviation & Economics — J.R.D. Tata, Amartya Sen, Abhijit Banerjee, Adam Smith & Keynes:\nStatement I: J. R. D. Tata is known as the 'Father of Indian Civil Aviation' (piloting India's first commercial mail flight in 1932), while Lord Dalhousie is called the 'Father of Indian Railways' (first train Bombay to Thane, 1853).\nStatement II: Amartya Sen is known as the 'Father of Indian Civil Aviation'.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: J. R. D. Tata is the 'Father of Indian Civil Aviation', while Amartya Sen won the 1998 Nobel Memorial Prize in Economic Sciences."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: Otto von Bismarck founded 'Young Italy' and led the unification of Italy.\nStatement II: J. J. Thomson discovered the electron (1897), Ernest Rutherford discovered the atomic nucleus, James Chadwick discovered the neutron (1932), Dmitri Mendeleev created the Periodic Table, and Marie Curie became the first person to win Nobel Prizes in two different scientific fields (Physics 1903 and Chemistry 1911).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Otto von Bismarck unified Germany, whereas Giuseppe Mazzini (founder of Young Italy) and Giuseppe Garibaldi led the unification of Italy.). Statement II is correct (J. J. Thomson discovered the electron (1897), Ernest Rutherford discovered the atomic nucleus, James Chadwick discovered the neutron (1932), Dmitri Mendeleev created the Periodic Table, and Marie Curie became the first person to win Nobel Prizes in two different scientific fields (Physics 1903 and Chemistry 1911).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. Political Thinkers & Philosophers — Aristotle, Plato, Hobbes, Locke, Rousseau, Montesquieu & Marx — Political Philosophy\nII. Explorers, Geographers & Historians — Eratosthenes, Herodotus, Wegener, Hillary & Tenzing — Exploration & Geography\nIII. Swami Vivekananda & Swami Dayanand Saraswati — Cyclonic Monk of India & Founder of Arya Samaj\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: Political Thinkers & Philosophers — Aristotle, Plato, Hobbes, Locke, Rousseau, Montesquieu & Marx (Political Philosophy), Explorers, Geographers & Historians — Eratosthenes, Herodotus, Wegener, Hillary & Tenzing (Exploration & Geography), and Swami Vivekananda & Swami Dayanand Saraswati (Cyclonic Monk of India & Founder of Arya Samaj)."
        },
        {
          "q": "With reference to Popular Personalities (Cricket Legends — Tendulkar, Gavaskar, Kapil Dev, Dhoni, Dravid, Ganguly & Bradman), consider the following statements:\nStatement I: Sachin Tendulkar ('Master Blaster') was the first male cricketer to score an ODI double century (200* vs South Africa, 2010), holds the record for 100 international centuries, and is the only sportsperson awarded the Bharat Ratna (2014).\nStatement II: Sunil Gavaskar ('Little Master') was the first batter to reach 10,000 Test runs; Kapil Dev ('Haryana Hurricane') captained India to the 1983 World Cup win; M. S. Dhoni captained India to the 2007 T20 World Cup, 2011 ODI World Cup, and 2013 Champions Trophy titles; Rahul Dravid is nicknamed 'The Wall'; Sourav Ganguly is called 'Dada'; and Sir Don Bradman finished with a legendary Test batting average of 99.94.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Cricket Legends — Tendulkar, Gavaskar, Kapil Dev, Dhoni, Dravid, Ganguly & Bradman (Cricket Personalities)."
        },
        {
          "q": "Consider the following two statements regarding Global & Indian Sports Icons — Dhyan Chand, Milkha Singh, P.T. Usha, Anand, Neeraj Chopra, Bindra & Mary Kom:\nStatement I: Major Dhyan Chand, known as the 'Wizard of Hockey', won three consecutive Olympic gold medals (1928, 1932, 1936), and his birthday on 29 August is celebrated as India's National Sports Day; Milkha Singh is the 'Flying Sikh'; P. T. Usha is the 'Payyoli Express'; Hima Das is the 'Dhing Express'; and Viswanathan Anand ('Tiger of Madras') was India's first Chess Grandmaster and five-time World Champion, while Gukesh D became the youngest undisputed World Chess Champion in 2024.\nStatement II: Neeraj Chopra won India's very first individual Olympic gold medal at the 2008 Beijing Olympics.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct. Statement II is incorrect: Shooter Abhinav Bindra won India's first individual Olympic gold medal at the 2008 Beijing Olympics, while Neeraj Chopra won India's first Olympic track-and-field gold medal at Tokyo 2020."
        },
        {
          "q": "Examine the following statements regarding Popular Personalities:\nStatement I: In the 2026 Padma Awards, cricketer Rohit Sharma was awarded the Padma Vibhushan.\nStatement II: In the coaching and lifetime categories, I. Arumainayagam (Football) received the Arjuna Award (Lifetime), while Parveer Singh (Athletics), Chhote Lal Yadav (Boxing), and Neha Nandkumar Chavan (Shooting) received the Dronacharya Award (Regular), and Dharmendra Singh Yadav (Boxing) and Virender Kumar (Wrestling) received the Dronacharya Award (Lifetime).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Rohit Sharma, Harmanpreet Kaur, Savita Punia, and Praveen Kumar received the Padma Shri in 2026, while Vijay Amritraj received the Padma Bhushan.). Statement II is correct (In the coaching and lifetime categories, I. Arumainayagam (Football) received the Arjuna Award (Lifetime), while Parveer Singh (Athletics), Chhote Lal Yadav (Boxing), and Neha Nandkumar Chavan (Shooting) received the Dronacharya Award (Regular), and Dharmendra Singh Yadav (Boxing) and Virender Kumar (Wrestling) received the Dronacharya Award (Lifetime).)."
        },
        {
          "q": "Consider the following pairs of Personalities and their Titles / Key Associations:\nI. National Sports Awards 2025 (Announced 18 August 2026) — 2026 Current Sports Awards\nII. Subhas Chandra Bose — Netaji\nIII. Sardar Vallabhbhai Patel — Iron Man of India\nWhich of the above pairs are correctly matched?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III"
          ],
          "a": 3,
          "e": "All three pairs are correctly matched: National Sports Awards 2025 (Announced 18 August 2026) (2026 Current Sports Awards), Subhas Chandra Bose (Netaji), and Sardar Vallabhbhai Patel (Iron Man of India)."
        },
        {
          "q": "Consider the following three statements regarding 'Mahatma Gandhi', 'Bhagat Singh', and 'Sarojini Naidu':\nI. He authored his autobiography 'The Story of My Experiments with Truth' and 'Hind Swaraj'.\nII. Honoured as 'Shaheed-e-Azam', Bhagat Singh was a key leader of the Hindustan Socialist Republican Association (HSRA).\nIII. Sarojini Naidu was the first woman Prime Minister of India.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect: Indira Gandhi was the first woman Prime Minister of India, while Sarojini Naidu was the first woman Governor of an Indian state."
        },
        {
          "q": "Identify the INCORRECT statement(s) among the three given below:\nI. Jawaharlal Nehru served as the first Prime Minister of independent India and authored 'The Discovery of India'.\nII. He is remembered in Indian nationalist history by the epithet 'Father of Revolutionary Thought in India'.\nIII. Jawaharlal Nehru founded the Swatantra Party in 1959.\nSelect the correct answer using the options below:",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: C. Rajagopalachari founded the Swatantra Party in 1959, whereas Jawaharlal Nehru was India's first Prime Minister."
        },
        {
          "q": "Compare the following two statements on National & International Personalities:\nStatement I: He led the Indian National Army (Azad Hind Fauj) and proclaimed the Provisional Government of Free India (Azad Hind) in Singapore in 1943.\nStatement II: Sri Narayana Guru led the social reform movement against caste discrimination in Kerala, while Periyar E.V. Ramasamy launched the 'Self-Respect Movement' (1925) in Tamil Nadu.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: He led the Indian National Army (Azad Hind Fauj) and proclaimed the Provisional Government of Free India (Azad Hind) in Singapore in 1943. II: Sri Narayana Guru led the social reform movement against caste discrimination in Kerala, while Periyar E.V. Ramasamy launched the 'Self-Respect Movement' (1925) in Tamil Nadu.)"
        },
        {
          "q": "With reference to Freedom Struggle & Polity and Freedom Struggle & Education, examine the statements below:\nStatement I: Known as the 'Iron Man of India', Sardar Vallabhbhai Patel served as India's first Deputy Prime Minister and first Home Minister.\nStatement II: Madan Mohan Malaviya was known by the title 'Deshbandhu'.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Known as the 'Iron Man of India', Sardar Vallabhbhai Patel served as India's first Deputy Prime Minister and first Home Minister.). Statement II is incorrect (Madan Mohan Malaviya was known as 'Mahamana', whereas Chittaranjan Das was known as 'Deshbandhu'.)."
        },
        {
          "q": "Consider the following three statements regarding 'Dr. B. R. Ambedkar', 'Chittaranjan Das, Jayaprakash Narayan & Vinoba Bhave', and 'Space Pioneers & World Inventors — Gagarin, Armstrong, Rakesh Sharma, Kalpana Chawla & Berners-Lee':\nI. Known as the 'Father of the Indian Constitution', he authored the famous work 'Annihilation of Caste'.\nII. Chittaranjan Das, revered as 'Deshbandhu' (Friend of the Nation), co-founded the Swaraj Party in 1923 with Motilal Nehru.\nIII. Rakesh Sharma was the first person in the world to walk on the Moon in 1969.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect: Neil Armstrong was the first person to walk on the Moon (July 1969), while Rakesh Sharma became the first Indian citizen in space in 1984."
        },
        {
          "q": "Identify the INCORRECT statement(s) among the three given below:\nI. Honoured as 'Shaheed-e-Azam', Bhagat Singh was a key leader of the Hindustan Socialist Republican Association (HSRA).\nII. Pandit Ishwar Chandra Vidyasagar ('Ocean of Knowledge') championed women's education and played the decisive role in the passage of the Hindu Widows' Remarriage Act, 1856.\nIII. Bhagat Singh was executed in connection with the Kakori Train Action of 1925.\nSelect the correct answer using the options below:",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Ram Prasad Bismil, Ashfaqulla Khan, Roshan Singh, and Rajendra Lahiri were executed in the Kakori case; Bhagat Singh, Rajguru, and Sukhdev were executed on 23 March 1931 in the Lahore Conspiracy Case."
        },
        {
          "q": "Compare the following two statements on National & International Personalities:\nStatement I: He was severely injured in a police lathi-charge while leading a protest against the all-white Simon Commission in Lahore in 1928 and later succumbed to his injuries.\nStatement II: Known as the 'Iron Man of India', Sardar Vallabhbhai Patel served as India's first Deputy Prime Minister and first Home Minister.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: He was severely injured in a police lathi-charge while leading a protest against the all-white Simon Commission in Lahore in 1928 and later succumbed to his injuries. II: Known as the 'Iron Man of India', Sardar Vallabhbhai Patel served as India's first Deputy Prime Minister and first Home Minister.)"
        },
        {
          "q": "With reference to Freedom Struggle and Spiritual Figures, examine the statements below:\nStatement I: Conferred the title 'Lokmanya', Bal Gangadhar Tilak declared 'Swaraj is my birthright and I shall have it!' and launched the Home Rule League in April 1916.\nStatement II: Guru Nanak Dev founded the Khalsa Panth in 1699.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Conferred the title 'Lokmanya', Bal Gangadhar Tilak declared 'Swaraj is my birthright and I shall have it!' and launched the Home Rule League in April 1916.). Statement II is incorrect (The 10th Sikh Guru, Guru Gobind Singh, founded the Khalsa Panth on Baisakhi day in 1699.)."
        },
        {
          "q": "Consider the following three statements regarding 'Bipin Chandra Pal', 'Samudragupta, Chandragupta II (Vikramaditya), Harshavardhana & Pulakeshin II', and 'Chittaranjan Das, Jayaprakash Narayan & Vinoba Bhave':\nI. He is remembered in Indian nationalist history by the epithet 'Father of Revolutionary Thought in India'.\nII. Gupta Emperor Samudragupta is called the 'Napoleon of India' (by historian V.A. Smith) for his extensive military conquests recorded in Harisena's Allahabad Pillar Inscription (Prayag Prashasti), while Chandragupta II assumed the title 'Vikramaditya'.\nIII. Jayaprakash Narayan initiated the Bhoodan Movement in 1951.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect: Acharya Vinoba Bhave initiated the Bhoodan Movement in 1951, whereas Jayaprakash Narayan ('Loknayak') led the Total Revolution movement."
        },
        {
          "q": "Identify the INCORRECT statement(s) among the three given below:\nI. Celebrated as the 'Nightingale of India' (Bharat Kokila) for her lyrical English poetry, Sarojini Naidu presided over the 1925 Kanpur Session as the first Indian woman President of the INC.\nII. Dr. Homi J. Bhabha is revered as the 'Father of the Indian Nuclear Programme', while Dr. Vikram Sarabhai is revered as the 'Father of the Indian Space Programme'.\nIII. Sarojini Naidu was the first woman Prime Minister of India.\nSelect the correct answer using the options below:",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Indira Gandhi was the first woman Prime Minister of India, while Sarojini Naidu was the first woman Governor of an Indian state."
        },
        {
          "q": "Compare the following two statements on National & International Personalities:\nStatement I: He became the first President of independent India in 1950 and earlier participated in the Champaran Satyagraha (1917).\nStatement II: Babur founded the Mughal Empire after winning the First Battle of Panipat (1526); Sher Shah Suri built the Grand Trunk Road (Sadak-e-Azam) and introduced the silver 'Rupiya'; and Akbar introduced the 'Mansabdari' system and 'Sulh-i-kul' (universal peace).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: He became the first President of independent India in 1950 and earlier participated in the Champaran Satyagraha (1917). II: Babur founded the Mughal Empire after winning the First Battle of Panipat (1526); Sher Shah Suri built the Grand Trunk Road (Sadak-e-Azam) and introduced the silver 'Rupiya'; and Akbar introduced the 'Mansabdari' system and 'Sulh-i-kul' (universal peace).)"
        },
        {
          "q": "With reference to Science & Public Life and World History & Geography, examine the statements below:\nStatement I: Dr. A. P. J. Abdul Kalam, revered as the 'Missile Man of India' for leading the Integrated Guided Missile Development Programme (Agni and Prithvi), served as the 11th President of India (2002–2007).\nStatement II: Herodotus propounded the Continental Drift Theory in 1912.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Dr. A. P. J. Abdul Kalam, revered as the 'Missile Man of India' for leading the Integrated Guided Missile Development Programme (Agni and Prithvi), served as the 11th President of India (2002–2007).). Statement II is incorrect (German meteorologist Alfred Wegener propounded the Continental Drift Theory in 1912, whereas Herodotus is the 'Father of History'.)."
        }
      ],
      [
        {
          "q": "Consider the following three statements regarding 'Dadabhai Naoroji', 'Business, Aviation & Economics — J.R.D. Tata, Amartya Sen, Abhijit Banerjee, Adam Smith & Keynes', and 'Global & Indian Sports Icons — Dhyan Chand, Milkha Singh, P.T. Usha, Anand, Neeraj Chopra, Bindra & Mary Kom':\nI. He was the first Indian to be elected to the British House of Commons (from Central Finsbury in 1892 on a Liberal ticket) and presided over three INC sessions (1886, 1893, 1906).\nII. J. R. D. Tata is known as the 'Father of Indian Civil Aviation' (piloting India's first commercial mail flight in 1932), while Lord Dalhousie is called the 'Father of Indian Railways' (first train Bombay to Thane, 1853).\nIII. Neeraj Chopra won India's very first individual Olympic gold medal at the 2008 Beijing Olympics.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect: Shooter Abhinav Bindra won India's first individual Olympic gold medal at the 2008 Beijing Olympics, while Neeraj Chopra won India's first Olympic track-and-field gold medal at Tokyo 2020."
        },
        {
          "q": "Identify the INCORRECT statement(s) among the three given below:\nI. Moderate nationalist leader Gopal Krishna Gokhale founded the 'Servants of India Society' at Pune in 1905.\nII. Sunil Gavaskar ('Little Master') was the first batter to reach 10,000 Test runs; Kapil Dev ('Haryana Hurricane') captained India to the 1983 World Cup win; M. S. Dhoni captained India to the 2007 T20 World Cup, 2011 ODI World Cup, and 2013 Champions Trophy titles; Rahul Dravid is nicknamed 'The Wall'; Sourav Ganguly is called 'Dada'; and Sir Don Bradman finished with a legendary Test batting average of 99.94.\nIII. Gopal Krishna Gokhale founded the Banaras Hindu University in 1916.\nSelect the correct answer using the options below:",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Pandit Madan Mohan Malaviya founded the Banaras Hindu University (BHU) in 1916, while Gokhale founded the Servants of India Society in 1905."
        },
        {
          "q": "Compare the following two statements on National & International Personalities:\nStatement I: Mrs. Annie Besant, known as the 'Grand Old Lady of India' (and 'Vasant'), led the Home Rule Movement (1916) and became the first woman President of the INC at Calcutta in 1917.\nStatement II: Dr. A. P. J. Abdul Kalam, revered as the 'Missile Man of India' for leading the Integrated Guided Missile Development Programme (Agni and Prithvi), served as the 11th President of India (2002–2007).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Mrs. Annie Besant, known as the 'Grand Old Lady of India' (and 'Vasant'), led the Home Rule Movement (1916) and became the first woman President of the INC at Calcutta in 1917. II: Dr. A. P. J. Abdul Kalam, revered as the 'Missile Man of India' for leading the Integrated Guided Missile Development Programme (Agni and Prithvi), served as the 11th President of India (2002–2007).)"
        },
        {
          "q": "With reference to Indian Polity and Freedom Struggle, examine the statements below:\nStatement I: Lal Bahadur Shastri, India's second Prime Minister, is known as the 'Man of Peace' and gave the iconic slogan 'Jai Jawan, Jai Kisan'.\nStatement II: Subhas Chandra Bose founded the Servants of India Society in 1905.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Lal Bahadur Shastri, India's second Prime Minister, is known as the 'Man of Peace' and gave the iconic slogan 'Jai Jawan, Jai Kisan'.). Statement II is incorrect (Gopal Krishna Gokhale founded the Servants of India Society in 1905, while Netaji Subhas Chandra Bose founded the Forward Bloc in 1939.)."
        },
        {
          "q": "Consider the following three statements regarding 'Dr. S. Radhakrishnan, Maulana Azad & Dr. Manmohan Singh', 'Bhagat Singh', and 'Adi Shankaracharya, Ramanujacharya & Madhvacharya':\nI. Maulana Abul Kalam Azad served as independent India's first Education Minister, while economist Dr. Manmohan Singh served as Finance Minister during the landmark 1991 LPG economic reforms and later as Prime Minister (2004–2014).\nII. Honoured as 'Shaheed-e-Azam', Bhagat Singh was a key leader of the Hindustan Socialist Republican Association (HSRA).\nIII. Adi Shankaracharya propounded the philosophy of Dvaita (Dualism).\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect: Adi Shankaracharya propounded Advaita Vedanta (Non-dualism), whereas Madhvacharya propounded Dvaita Vedanta."
        },
        {
          "q": "Identify the INCORRECT statement(s) among the three given below:\nI. Chittaranjan Das, revered as 'Deshbandhu' (Friend of the Nation), co-founded the Swaraj Party in 1923 with Motilal Nehru.\nII. He is remembered in Indian nationalist history by the epithet 'Father of Revolutionary Thought in India'.\nIII. Jayaprakash Narayan initiated the Bhoodan Movement in 1951.\nSelect the correct answer using the options below:",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Acharya Vinoba Bhave initiated the Bhoodan Movement in 1951, whereas Jayaprakash Narayan ('Loknayak') led the Total Revolution movement."
        },
        {
          "q": "Compare the following two statements on National & International Personalities:\nStatement I: During the 1942 Quit India Movement, 73-year-old Gandhian Matangini Hazra ('Gandhi Buri') in Tamluk (Bengal) and teenage freedom fighter Kanaklata Barua in Gohpur (Assam) attained martyrdom while holding the national Tricolour.\nStatement II: Rabindranath Tagore ('Gurudev') became the first Asian Nobel laureate when he won the 1913 Nobel Prize in Literature for 'Gitanjali', and he composed India's national anthem 'Jana Gana Mana'.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: During the 1942 Quit India Movement, 73-year-old Gandhian Matangini Hazra ('Gandhi Buri') in Tamluk (Bengal) and teenage freedom fighter Kanaklata Barua in Gohpur (Assam) attained martyrdom while holding the national Tricolour. II: Rabindranath Tagore ('Gurudev') became the first Asian Nobel laureate when he won the 1913 Nobel Prize in Literature for 'Gitanjali', and he composed India's national anthem 'Jana Gana Mana'.)"
        },
        {
          "q": "With reference to Freedom Struggle and Freedom Struggle & Education, examine the statements below:\nStatement I: Pashtun non-violent leader Khan Abdul Ghaffar Khan, known as 'Frontier Gandhi' (and Badshah Khan), founded the 'Khudai Khidmatgar' (Red Shirt) movement in the North-West Frontier Province.\nStatement II: Madan Mohan Malaviya was known by the title 'Deshbandhu'.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Pashtun non-violent leader Khan Abdul Ghaffar Khan, known as 'Frontier Gandhi' (and Badshah Khan), founded the 'Khudai Khidmatgar' (Red Shirt) movement in the North-West Frontier Province.). Statement II is incorrect (Madan Mohan Malaviya was known as 'Mahamana', whereas Chittaranjan Das was known as 'Deshbandhu'.)."
        },
        {
          "q": "Consider the following three statements regarding 'Raja Ram Mohan Roy & Ishwar Chandra Vidyasagar', 'Chittaranjan Das, Jayaprakash Narayan & Vinoba Bhave', and 'Bhagat Singh':\nI. Pandit Ishwar Chandra Vidyasagar ('Ocean of Knowledge') championed women's education and played the decisive role in the passage of the Hindu Widows' Remarriage Act, 1856.\nII. Chittaranjan Das, revered as 'Deshbandhu' (Friend of the Nation), co-founded the Swaraj Party in 1923 with Motilal Nehru.\nIII. Bhagat Singh was executed in connection with the Kakori Train Action of 1925.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect: Ram Prasad Bismil, Ashfaqulla Khan, Roshan Singh, and Rajendra Lahiri were executed in the Kakori case; Bhagat Singh, Rajguru, and Sukhdev were executed on 23 March 1931 in the Lahore Conspiracy Case."
        },
        {
          "q": "Identify the INCORRECT statement(s) among the three given below:\nI. Mahatma Jyotirao Phule ('Pioneer of Social Revolution') founded the Satyashodhak Samaj in 1873 and authored 'Gulamgiri' to fight caste discrimination.\nII. Pandit Ishwar Chandra Vidyasagar ('Ocean of Knowledge') championed women's education and played the decisive role in the passage of the Hindu Widows' Remarriage Act, 1856.\nIII. Savitribai Phule founded the Ramakrishna Mission at Belur in 1897.\nSelect the correct answer using the options below:",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Swami Vivekananda founded the Ramakrishna Mission in 1897, while Savitribai Phule was the 'First Woman Teacher of India'."
        },
        {
          "q": "Compare the following two statements on National & International Personalities:\nStatement I: Swami Dayanand Saraswati founded the Arya Samaj in 1875, gave the call 'Back to the Vedas', and authored 'Satyarth Prakash'.\nStatement II: Pashtun non-violent leader Khan Abdul Ghaffar Khan, known as 'Frontier Gandhi' (and Badshah Khan), founded the 'Khudai Khidmatgar' (Red Shirt) movement in the North-West Frontier Province.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Swami Dayanand Saraswati founded the Arya Samaj in 1875, gave the call 'Back to the Vedas', and authored 'Satyarth Prakash'. II: Pashtun non-violent leader Khan Abdul Ghaffar Khan, known as 'Frontier Gandhi' (and Badshah Khan), founded the 'Khudai Khidmatgar' (Red Shirt) movement in the North-West Frontier Province.)"
        },
        {
          "q": "With reference to Social Reform and Spiritual Figures, examine the statements below:\nStatement I: Sri Narayana Guru led the social reform movement against caste discrimination in Kerala, while Periyar E.V. Ramasamy launched the 'Self-Respect Movement' (1925) in Tamil Nadu.\nStatement II: Guru Nanak Dev founded the Khalsa Panth in 1699.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Sri Narayana Guru led the social reform movement against caste discrimination in Kerala, while Periyar E.V. Ramasamy launched the 'Self-Respect Movement' (1925) in Tamil Nadu.). Statement II is incorrect (The 10th Sikh Guru, Guru Gobind Singh, founded the Khalsa Panth on Baisakhi day in 1699.)."
        },
        {
          "q": "Consider the following three statements regarding 'Gautama Buddha & Bhagwan Mahavira', 'Samudragupta, Chandragupta II (Vikramaditya), Harshavardhana & Pulakeshin II', and 'M. S. Swaminathan, Verghese Kurien, Salim Ali & Tessy Thomas':\nI. Vardhamana Mahavira was the 24th and last Tirthankara of Jainism (whereas Rishabhanatha was the 1st Tirthankara and Parshvanatha was the 23rd Tirthankara) and added the fifth vow of 'Brahmacharya' to the four existing vows (Ahimsa, Satya, Asteya, Aparigraha).\nII. Gupta Emperor Samudragupta is called the 'Napoleon of India' (by historian V.A. Smith) for his extensive military conquests recorded in Harisena's Allahabad Pillar Inscription (Prayag Prashasti), while Chandragupta II assumed the title 'Vikramaditya'.\nIII. Dr. Verghese Kurien is known as the 'Father of the Green Revolution in India'.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect: Dr. M. S. Swaminathan is the 'Father of the Green Revolution in India', while Dr. Verghese Kurien is the 'Father of the White Revolution'."
        },
        {
          "q": "Identify the INCORRECT statement(s) among the three given below:\nI. Adi Shankaracharya expounded the philosophy of 'Advaita Vedanta' (Non-dualism) and established four cardinal mathas at Sringeri, Dwarka, Puri, and Jyotirmath (Joshimath).\nII. Dr. Homi J. Bhabha is revered as the 'Father of the Indian Nuclear Programme', while Dr. Vikram Sarabhai is revered as the 'Father of the Indian Space Programme'.\nIII. Adi Shankaracharya propounded the philosophy of Dvaita (Dualism).\nSelect the correct answer using the options below:",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Adi Shankaracharya propounded Advaita Vedanta (Non-dualism), whereas Madhvacharya propounded Dvaita Vedanta."
        },
        {
          "q": "Compare the following two statements on National & International Personalities:\nStatement I: Among Bhakti saints, Kabir was a mystic poet of the Nirguna stream whose compositions are collected in 'Bijak', Tulsidas authored the Awadhi epic 'Ramcharitmanas', and Surdas composed 'Sur Sagar'.\nStatement II: In the National Sports Awards 2025 (announced on 18 August 2026), Arjuna Award recipients include Tejaswin Shankar, Muhammed Ajmal V, and Priyanka Goswami (Athletics); Treesa Jolly and Pullela Gayatri Gopichand (Badminton); Vidit Santosh Gujarathi and Divya Jitendra Deshmukh (Chess); Lalremsiami and Rajkumar Pal (Hockey); Akhil Sheoran (Shooting); and Rudransh Khandelwal (Para-shooting).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Among Bhakti saints, Kabir was a mystic poet of the Nirguna stream whose compositions are collected in 'Bijak', Tulsidas authored the Awadhi epic 'Ramcharitmanas', and Surdas composed 'Sur Sagar'. II: In the National Sports Awards 2025 (announced on 18 August 2026), Arjuna Award recipients include Tejaswin Shankar, Muhammed Ajmal V, and Priyanka Goswami (Athletics); Treesa Jolly and Pullela Gayatri Gopichand (Badminton); Vidit Santosh Gujarathi and Divya Jitendra Deshmukh (Chess); Lalremsiami and Rajkumar Pal (Hockey); Akhil Sheoran (Shooting); and Rudransh Khandelwal (Para-shooting).)"
        },
        {
          "q": "With reference to World Figures and World History & Geography, examine the statements below:\nStatement I: Ibn Sina (Avicenna) was a renowned Persian polymath and physician who authored 'The Canon of Medicine' (Al-Qanun fi al-Tibb), while Al-Biruni accompanied Mahmud of Ghazni to the subcontinent and wrote the encyclopedic treatise 'Kitab-ul-Hind' (Tahqiq-i-Hind).\nStatement II: Herodotus propounded the Continental Drift Theory in 1912.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Ibn Sina (Avicenna) was a renowned Persian polymath and physician who authored 'The Canon of Medicine' (Al-Qanun fi al-Tibb), while Al-Biruni accompanied Mahmud of Ghazni to the subcontinent and wrote the encyclopedic treatise 'Kitab-ul-Hind' (Tahqiq-i-Hind).). Statement II is incorrect (German meteorologist Alfred Wegener propounded the Continental Drift Theory in 1912, whereas Herodotus is the 'Father of History'.)."
        },
        {
          "q": "Consider the following three statements regarding 'Chandragupta Maurya, Chanakya (Kautilya) & Emperor Ashoka', 'Business, Aviation & Economics — J.R.D. Tata, Amartya Sen, Abhijit Banerjee, Adam Smith & Keynes', and 'Gopal Krishna Gokhale':\nI. Mauryan Emperor Ashoka the Great embraced Buddhism after the Kalinga War and propagated 'Dhamma' through rock and pillar edicts across the subcontinent.\nII. J. R. D. Tata is known as the 'Father of Indian Civil Aviation' (piloting India's first commercial mail flight in 1932), while Lord Dalhousie is called the 'Father of Indian Railways' (first train Bombay to Thane, 1853).\nIII. Gopal Krishna Gokhale founded the Banaras Hindu University in 1916.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect: Pandit Madan Mohan Malaviya founded the Banaras Hindu University (BHU) in 1916, while Gokhale founded the Servants of India Society in 1905."
        },
        {
          "q": "Identify the INCORRECT statement(s) among the three given below:\nI. Gupta Emperor Samudragupta is called the 'Napoleon of India' (by historian V.A. Smith) for his extensive military conquests recorded in Harisena's Allahabad Pillar Inscription (Prayag Prashasti), while Chandragupta II assumed the title 'Vikramaditya'.\nII. Sunil Gavaskar ('Little Master') was the first batter to reach 10,000 Test runs; Kapil Dev ('Haryana Hurricane') captained India to the 1983 World Cup win; M. S. Dhoni captained India to the 2007 T20 World Cup, 2011 ODI World Cup, and 2013 Champions Trophy titles; Rahul Dravid is nicknamed 'The Wall'; Sourav Ganguly is called 'Dada'; and Sir Don Bradman finished with a legendary Test batting average of 99.94.\nIII. Chandragupta Maurya is known as the 'Napoleon of India'.\nSelect the correct answer using the options below:",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Gupta Emperor Samudragupta is known as the 'Napoleon of India'."
        },
        {
          "q": "Compare the following two statements on National & International Personalities:\nStatement I: Alauddin Khalji is famous for his strict market control and price regulations, while Muhammad bin Tughlaq is known for transferring his capital from Delhi to Daulatabad (Devagiri) and introducing token copper currency.\nStatement II: Ibn Sina (Avicenna) was a renowned Persian polymath and physician who authored 'The Canon of Medicine' (Al-Qanun fi al-Tibb), while Al-Biruni accompanied Mahmud of Ghazni to the subcontinent and wrote the encyclopedic treatise 'Kitab-ul-Hind' (Tahqiq-i-Hind).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Alauddin Khalji is famous for his strict market control and price regulations, while Muhammad bin Tughlaq is known for transferring his capital from Delhi to Daulatabad (Devagiri) and introducing token copper currency. II: Ibn Sina (Avicenna) was a renowned Persian polymath and physician who authored 'The Canon of Medicine' (Al-Qanun fi al-Tibb), while Al-Biruni accompanied Mahmud of Ghazni to the subcontinent and wrote the encyclopedic treatise 'Kitab-ul-Hind' (Tahqiq-i-Hind).)"
        },
        {
          "q": "With reference to Medieval History and Freedom Struggle, examine the statements below:\nStatement I: Babur founded the Mughal Empire after winning the First Battle of Panipat (1526); Sher Shah Suri built the Grand Trunk Road (Sadak-e-Azam) and introduced the silver 'Rupiya'; and Akbar introduced the 'Mansabdari' system and 'Sulh-i-kul' (universal peace).\nStatement II: Subhas Chandra Bose founded the Servants of India Society in 1905.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Babur founded the Mughal Empire after winning the First Battle of Panipat (1526); Sher Shah Suri built the Grand Trunk Road (Sadak-e-Azam) and introduced the silver 'Rupiya'; and Akbar introduced the 'Mansabdari' system and 'Sulh-i-kul' (universal peace).). Statement II is incorrect (Gopal Krishna Gokhale founded the Servants of India Society in 1905, while Netaji Subhas Chandra Bose founded the Forward Bloc in 1939.)."
        }
      ],
      [
        {
          "q": "Who authored the autobiography 'The Story of My Experiments with Truth' and led the Dandi March in 1930?",
          "o": [
            "Jawaharlal Nehru",
            "Mahatma Gandhi",
            "Subhas Chandra Bose",
            "Dr. Rajendra Prasad"
          ],
          "a": 1,
          "e": "Mahatma Gandhi (Father of the Nation) authored 'The Story of My Experiments with Truth'."
        },
        {
          "q": "Which national leader authored 'The Discovery of India' and was a key architect of Panchsheel and the Non-Aligned Movement?",
          "o": [
            "Jawaharlal Nehru",
            "Sardar Vallabhbhai Patel",
            "Lal Bahadur Shastri",
            "Maulana Abul Kalam Azad"
          ],
          "a": 0,
          "e": "Pandit Jawaharlal Nehru authored 'The Discovery of India' and spearheaded Five-Year Plans and NAM."
        },
        {
          "q": "Who is revered as 'Netaji' and established the Provisional Government of Free India (Azad Hind) in 1943?",
          "o": [
            "Chittaranjan Das",
            "Rash Behari Bose",
            "Bhagat Singh",
            "Subhas Chandra Bose"
          ],
          "a": 3,
          "e": "Netaji Subhas Chandra Bose led the INA and formed the Azad Hind Government in 1943."
        },
        {
          "q": "Who is known as the 'Iron Man of India' for his monumental role in the integration of princely states and served as India's first Deputy Prime Minister?",
          "o": [
            "Gopal Krishna Gokhale",
            "Dr. Rajendra Prasad",
            "Sardar Vallabhbhai Patel",
            "C. Rajagopalachari"
          ],
          "a": 2,
          "e": "Sardar Vallabhbhai Patel (Iron Man of India) led the Bardoli Satyagraha (1928) and integrated the princely states."
        },
        {
          "q": "Who chaired the Drafting Committee of the Indian Constitution, served as India's first Law Minister, and authored 'Annihilation of Caste'?",
          "o": [
            "Dr. Rajendra Prasad",
            "Dr. B. R. Ambedkar",
            "B. N. Rau",
            "Jawaharlal Nehru"
          ],
          "a": 1,
          "e": "Dr. B.R. Ambedkar (Father of the Indian Constitution) chaired the Drafting Committee and wrote 'Annihilation of Caste'."
        },
        {
          "q": "Which revolutionary leader is revered by the title 'Shaheed-e-Azam' and was executed alongside Rajguru and Sukhdev in March 1931?",
          "o": [
            "Bhagat Singh",
            "Chandrashekhar Azad",
            "Udham Singh",
            "Ram Prasad Bismil"
          ],
          "a": 0,
          "e": "Bhagat Singh is known as 'Shaheed-e-Azam'."
        },
        {
          "q": "Which nationalist leader of the 'Lal-Bal-Pal' trio was popularly known as 'Punjab Kesari' and died following injuries sustained during an anti-Simon Commission protest?",
          "o": [
            "Ajit Singh",
            "Bal Gangadhar Tilak",
            "Bipin Chandra Pal",
            "Lala Lajpat Rai"
          ],
          "a": 3,
          "e": "Lala Lajpat Rai is known as 'Punjab Kesari'."
        },
        {
          "q": "Who is popularly known by the title 'Lokmanya', founded the newspapers 'Kesari' and 'Maratha', and proclaimed 'Swaraj is my birthright'?",
          "o": [
            "Madan Mohan Malaviya",
            "Gopal Krishna Gokhale",
            "Bal Gangadhar Tilak",
            "Bipin Chandra Pal"
          ],
          "a": 2,
          "e": "Lokmanya Bal Gangadhar Tilak started Kesari and Maratha and led the Home Rule Movement."
        },
        {
          "q": "Which member of the 'Lal-Bal-Pal' trio is known by the title 'Father of Revolutionary Thought' in India?",
          "o": [
            "Lala Lajpat Rai",
            "Bipin Chandra Pal",
            "Aurobindo Ghose",
            "Chittaranjan Das"
          ],
          "a": 1,
          "e": "Bipin Chandra Pal is known as the 'Father of Revolutionary Thought in India'."
        },
        {
          "q": "Who is known as the 'Nightingale of India' (in the freedom movement) and became both the first Indian woman President of the INC (1925) and the first woman Governor of an Indian state?",
          "o": [
            "Sarojini Naidu",
            "Annie Besant",
            "Aruna Asaf Ali",
            "Sucheta Kripalani"
          ],
          "a": 0,
          "e": "Sarojini Naidu (Nightingale of India) became the first Indian woman INC President (1925) and first woman Governor."
        },
        {
          "q": "Who served as the President of the Constituent Assembly, became the first President of independent India, and was known by the title 'Ajatshatru'?",
          "o": [
            "Zakir Husain",
            "Dr. S. Radhakrishnan",
            "C. Rajagopalachari",
            "Dr. Rajendra Prasad"
          ],
          "a": 3,
          "e": "Dr. Rajendra Prasad was the first President of India and was known as 'Ajatshatru'."
        },
        {
          "q": "Who is celebrated as the 'Missile Man of India' and 'People's President', served as the 11th President of India, and authored 'Wings of Fire'?",
          "o": [
            "Homi J. Bhabha",
            "Vikram Sarabhai",
            "Dr. A. P. J. Abdul Kalam",
            "Satish Dhawan"
          ],
          "a": 2,
          "e": "Dr. A.P.J. Abdul Kalam (11th President of India) is the 'Missile Man of India' and author of 'Wings of Fire'."
        },
        {
          "q": "Who is known as the 'Grand Old Man of India', formulated the 'Drain of Wealth Theory', and became the first Indian elected to the British House of Commons?",
          "o": [
            "Gopal Krishna Gokhale",
            "Dadabhai Naoroji",
            "Pherozeshah Mehta",
            "Surendranath Banerjea"
          ],
          "a": 1,
          "e": "Dadabhai Naoroji is the 'Grand Old Man of India'."
        },
        {
          "q": "Which Moderate nationalist leader founded the 'Servants of India Society' in 1905 and is known as the 'Political Guru of Mahatma Gandhi'?",
          "o": [
            "Gopal Krishna Gokhale",
            "Mahadev Govind Ranade",
            "Dadabhai Naoroji",
            "Madan Mohan Malaviya"
          ],
          "a": 0,
          "e": "Gopal Krishna Gokhale founded the Servants of India Society and was Gandhi's political mentor."
        },
        {
          "q": "Which nationalist leader and educationist was honoured with the title 'Mahamana' and founded the Banaras Hindu University (BHU)?",
          "o": [
            "Lala Hansraj",
            "Gopal Krishna Gokhale",
            "Chittaranjan Das",
            "Madan Mohan Malaviya"
          ],
          "a": 3,
          "e": "Pandit Madan Mohan Malaviya is known as 'Mahamana'."
        },
        {
          "q": "Which second Prime Minister of India is known as the 'Man of Peace' and gave the famous slogan 'Jai Jawan, Jai Kisan'?",
          "o": [
            "Morarji Desai",
            "Jawaharlal Nehru",
            "Lal Bahadur Shastri",
            "Atal Bihari Vajpayee"
          ],
          "a": 2,
          "e": "Lal Bahadur Shastri (Man of Peace) gave the slogan 'Jai Jawan, Jai Kisan'."
        },
        {
          "q": "Whose birth anniversary on 5 September is celebrated across India as 'Teachers' Day', having served as India's first Vice-President and second President?",
          "o": [
            "Dr. Zakir Husain",
            "Dr. Sarvepalli Radhakrishnan",
            "Maulana Abul Kalam Azad",
            "Dr. Rajendra Prasad"
          ],
          "a": 1,
          "e": "Dr. S. Radhakrishnan's birthday (5 September) is observed as Teachers' Day."
        },
        {
          "q": "Which socialist leader is popularly known by the title 'Loknayak' and spearheaded the 'Total Revolution' (Sampoorna Kranti) movement?",
          "o": [
            "Jayaprakash Narayan",
            "Ram Manohar Lohia",
            "Vinoba Bhave",
            "Chittaranjan Das"
          ],
          "a": 0,
          "e": "Jayaprakash Narayan is revered as 'Loknayak'."
        },
        {
          "q": "Who is celebrated as the 'Heroine of the Quit India Movement' for hoisting the Indian National Flag at Gowalia Tank Maidan on 9 August 1942?",
          "o": [
            "Kanaklata Barua",
            "Usha Mehta",
            "Sarojini Naidu",
            "Aruna Asaf Ali"
          ],
          "a": 3,
          "e": "Aruna Asaf Ali hoisted the Congress flag at Gowalia Tank Maidan in Bombay on 9 August 1942."
        },
        {
          "q": "Which Pashtun freedom fighter is known as 'Frontier Gandhi' and founded the non-violent 'Khudai Khidmatgar' (Servants of God) movement?",
          "o": [
            "Rafi Ahmad Kidwai",
            "Maulana Abul Kalam Azad",
            "Khan Abdul Ghaffar Khan",
            "Hakim Ajmal Khan"
          ],
          "a": 2,
          "e": "Khan Abdul Ghaffar Khan is popularly known as 'Frontier Gandhi'."
        }
      ],
      [
        {
          "q": "Who is honoured as the 'Father of the Indian Renaissance' and founded the Brahmo Samaj in 1828?",
          "o": [
            "Ishwar Chandra Vidyasagar",
            "Raja Ram Mohan Roy",
            "Swami Dayanand Saraswati",
            "Keshab Chandra Sen"
          ],
          "a": 1,
          "e": "Raja Ram Mohan Roy is known as the 'Father of the Indian Renaissance'."
        },
        {
          "q": "Who is revered as the 'First Woman Teacher of India' for pioneering girls' education in 19th-century Pune alongside Jyotirao Phule and Fatima Sheikh?",
          "o": [
            "Savitribai Phule",
            "Pandita Ramabai",
            "Sarojini Naidu",
            "Annie Besant"
          ],
          "a": 0,
          "e": "Savitribai Phule is honoured as the 'First Woman Teacher of India'."
        },
        {
          "q": "Which spiritual leader is known as the 'Cyclonic Monk of India', founded the Ramakrishna Mission in 1897, and whose birthday on 12 January is observed as National Youth Day?",
          "o": [
            "Ramana Maharshi",
            "Swami Dayanand Saraswati",
            "Sri Aurobindo",
            "Swami Vivekananda"
          ],
          "a": 3,
          "e": "Swami Vivekananda is known as the 'Cyclonic Monk of India' and his birthday (12 January) is National Youth Day."
        },
        {
          "q": "Who founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875, which later grew into the Aligarh Muslim University (AMU)?",
          "o": [
            "Badruddin Tyabji",
            "Maulana Abul Kalam Azad",
            "Sir Syed Ahmad Khan",
            "Mirza Ghulam Ahmad"
          ],
          "a": 2,
          "e": "Sir Syed Ahmad Khan founded the MAO College at Aligarh in 1875."
        },
        {
          "q": "Who was the 24th Tirthankara of Jainism, associated with the five great vows (Pancha Mahavratas: Ahimsa, Satya, Asteya, Aparigraha, and Brahmacharya)?",
          "o": [
            "Rishabhanatha",
            "Vardhamana Mahavira",
            "Parshvanatha",
            "Gautama Buddha"
          ],
          "a": 1,
          "e": "Vardhamana Mahavira was the 24th Tirthankara of Jainism (while Rishabhanatha was the 1st)."
        },
        {
          "q": "Which classical Indian philosopher expounded the doctrine of 'Advaita Vedanta' (non-dualism) and established four mathas at Sringeri, Dwarka, Puri, and Jyotirmath?",
          "o": [
            "Adi Shankaracharya",
            "Ramanujacharya",
            "Madhvacharya",
            "Vallabhacharya"
          ],
          "a": 0,
          "e": "Adi Shankaracharya propounded Advaita Vedanta and established the four mathas."
        },
        {
          "q": "Which 10th Sikh Guru founded the 'Khalsa Panth' in 1699 and introduced the 'Five Ks' (Kesh, Kara, Kanga, Kachera, and Kirpan)?",
          "o": [
            "Guru Tegh Bahadur",
            "Guru Nanak Dev",
            "Guru Arjan Dev",
            "Guru Gobind Singh"
          ],
          "a": 3,
          "e": "Guru Gobind Singh (10th Sikh Guru) founded the Khalsa Panth in 1699."
        },
        {
          "q": "Which 11th-century scholar of astronomy, mathematics, and Indology authored the famous Arabic work 'Kitab-ul-Hind'?",
          "o": [
            "Ibn Battuta",
            "Ibn Sina (Avicenna)",
            "Al-Biruni",
            "Rumi"
          ],
          "a": 2,
          "e": "Al-Biruni authored 'Kitab-ul-Hind', while Ibn Sina authored 'The Canon of Medicine' and Ibn Battuta wrote 'Rihla'."
        },
        {
          "q": "Who authored the ancient Sanskrit treatise on statecraft, economic policy, and military strategy titled 'Arthashastra'?",
          "o": [
            "Banabhatta",
            "Chanakya (Kautilya / Vishnugupta)",
            "Kalidasa",
            "Harisena"
          ],
          "a": 1,
          "e": "Chanakya (also known as Kautilya or Vishnugupta) authored the 'Arthashastra'."
        },
        {
          "q": "Which Gupta emperor is popularly known as the 'Napoleon of India' for his undefeated military campaigns recorded in the Allahabad Pillar Inscription?",
          "o": [
            "Samudragupta",
            "Chandragupta II (Vikramaditya)",
            "Skandagupta",
            "Chandragupta I"
          ],
          "a": 0,
          "e": "Samudragupta is called the 'Napoleon of India'."
        },
        {
          "q": "Who was the first and only woman ruler to occupy the throne of the Delhi Sultanate (reigning from 1236 to 1240)?",
          "o": [
            "Noor Jahan",
            "Chand Bibi",
            "Rani Durgavati",
            "Razia Sultana"
          ],
          "a": 3,
          "e": "Razia Sultana (of the Slave/Mamluk dynasty) was the only woman ruler of the Delhi Sultanate."
        },
        {
          "q": "Which Chola emperor constructed the magnificent Brihadisvara Temple at Thanjavur (a UNESCO World Heritage Site)?",
          "o": [
            "Krishnadevaraya",
            "Rajendra Chola I",
            "Raja Raja Chola I",
            "Pulakeshin II"
          ],
          "a": 2,
          "e": "Raja Raja Chola I built the Brihadisvara Temple at Thanjavur (while his son Rajendra Chola I built Gangaikonda Cholapuram)."
        },
        {
          "q": "Who is honoured as the 'Father of the Indian Space Programme' and played the foundational role in establishing ISRO?",
          "o": [
            "Dr. Homi J. Bhabha",
            "Dr. Vikram Sarabhai",
            "Dr. C. V. Raman",
            "Dr. Satish Dhawan"
          ],
          "a": 1,
          "e": "Dr. Vikram Sarabhai is the 'Father of the Indian Space Programme' (and Homi J. Bhabha is the 'Father of the Indian Nuclear Programme')."
        },
        {
          "q": "Who is celebrated as the 'Father of the Green Revolution in India' for introducing high-yielding varieties of wheat and rice?",
          "o": [
            "Dr. M. S. Swaminathan",
            "Dr. Verghese Kurien",
            "Dr. P. C. Mahalanobis",
            "Dr. Salim Ali"
          ],
          "a": 0,
          "e": "Dr. M. S. Swaminathan is the 'Father of the Green Revolution in India'."
        },
        {
          "q": "Which ancient Indian physician and scholar authored the 'Sushruta Samhita' and is revered worldwide as the 'Father of Surgery'?",
          "o": [
            "Patanjali",
            "Charaka",
            "Aryabhata",
            "Sushruta"
          ],
          "a": 3,
          "e": "Sushruta is revered as the 'Father of Surgery' (while Charaka is the 'Father of Ayurveda')."
        },
        {
          "q": "Who was the first woman Nobel laureate and the only scientist in history to win Nobel Prizes in two different scientific fields—Physics (1903) and Chemistry (1911)?",
          "o": [
            "Dorothy Hodgkin",
            "Rosalind Franklin",
            "Marie Curie",
            "Lise Meitner"
          ],
          "a": 2,
          "e": "Marie Curie won the Nobel Prize in Physics (1903) and Chemistry (1911) for her work on radioactivity, polonium, and radium."
        },
        {
          "q": "Which scientist conducted hybridization experiments on garden pea plants and is known as the 'Father of Genetics'?",
          "o": [
            "Charles Darwin",
            "Gregor Johann Mendel",
            "Louis Pasteur",
            "Alexander Fleming"
          ],
          "a": 1,
          "e": "Gregor Mendel is known as the 'Father of Genetics'."
        },
        {
          "q": "Who became the FIRST Indian citizen to travel into space aboard the Soviet spacecraft Soyuz T-11 in April 1984?",
          "o": [
            "Rakesh Sharma",
            "Kalpana Chawla",
            "Sunita Williams",
            "Ravish Malhotra"
          ],
          "a": 0,
          "e": "Wing Commander (then Squadron Leader) Rakesh Sharma became the first Indian citizen in space in April 1984."
        },
        {
          "q": "Which ancient Greek scholar coined the term 'Geography', calculated the circumference of the Earth, and is revered as the 'Father of Geography'?",
          "o": [
            "Alfred Wegener",
            "Herodotus",
            "Ptolemy",
            "Eratosthenes"
          ],
          "a": 3,
          "e": "Eratosthenes is known as the 'Father of Geography' (and Herodotus is the 'Father of History')."
        },
        {
          "q": "Who is revered as 'Gurudev' and became the first Asian to win the Nobel Prize in Literature (1913) for his work 'Gitanjali'?",
          "o": [
            "Subramania Bharati",
            "Bankim Chandra Chattopadhyay",
            "Rabindranath Tagore",
            "Maithili Sharan Gupt"
          ],
          "a": 2,
          "e": "Rabindranath Tagore ('Gurudev') won the 1913 Nobel Prize in Literature for 'Gitanjali'."
        }
      ],
      [
        {
          "q": "Who directed India's first full-length silent feature film 'Raja Harishchandra' in 1913 and is revered as the 'Father of Indian Cinema'?",
          "o": [
            "Satyajit Ray",
            "Dadasaheb Phalke",
            "Raj Kapoor",
            "Guru Dutt"
          ],
          "a": 1,
          "e": "Dhundiraj Govind Phalke (Dadasaheb Phalke) is the 'Father of Indian Cinema'."
        },
        {
          "q": "Which Indian economist was awarded the Nobel Memorial Prize in Economic Sciences in 1998 for his pioneering contributions to welfare economics and the capability approach?",
          "o": [
            "Amartya Sen",
            "Abhijit Banerjee",
            "Manmohan Singh",
            "P. C. Mahalanobis"
          ],
          "a": 0,
          "e": "Prof. Amartya Sen won the 1998 Nobel Prize in Economic Sciences (and Bharat Ratna in 1999)."
        },
        {
          "q": "Which anti-apartheid revolutionary spent 27 years in prison, won the 1993 Nobel Peace Prize, and became the first Black President of South Africa in 1994?",
          "o": [
            "Desmond Tutu",
            "Martin Luther King Jr.",
            "Barack Obama",
            "Nelson Mandela"
          ],
          "a": 3,
          "e": "Nelson Mandela became South Africa's first Black President in 1994."
        },
        {
          "q": "Which ancient Greek philosopher and student of Plato is revered as the 'Father of Political Science'?",
          "o": [
            "Plato",
            "Socrates",
            "Aristotle",
            "Thomas Hobbes"
          ],
          "a": 2,
          "e": "Aristotle is known as the 'Father of Political Science'."
        },
        {
          "q": "Which legendary Indian cricketer is nicknamed 'Little Master' and became the first batter in cricket history to score 10,000 runs in Test matches?",
          "o": [
            "Sachin Tendulkar",
            "Sunil Gavaskar",
            "Rahul Dravid",
            "Kapil Dev"
          ],
          "a": 1,
          "e": "Sunil Gavaskar ('Little Master') was the first cricketer to reach 10,000 Test runs."
        },
        {
          "q": "Whose birth anniversary on 29 August is celebrated across India as 'National Sports Day', being revered worldwide as the 'Wizard of Hockey'?",
          "o": [
            "Major Dhyan Chand",
            "Milkha Singh",
            "Balbir Singh Sr.",
            "K. D. Jadhav"
          ],
          "a": 0,
          "e": "Major Dhyan Chand ('Wizard of Hockey') was born on 29 August, celebrated as National Sports Day."
        },
        {
          "q": "Which acclaimed veteran actor was conferred the prestigious Dadasaheb Phalke Award (for 2024) at the 72nd National Film Awards held on 22 September 2026?",
          "o": [
            "R. Madhavan",
            "Mammootty",
            "Dharmendra Singh Deol",
            "Anant Nag"
          ],
          "a": 3,
          "e": "Veteran actor Anant Nag was conferred the Dadasaheb Phalke Award at the 72nd National Film Awards on 22 September 2026."
        },
        {
          "q": "In the National Sports Awards 2025 (announced in August 2026), Vidit Santosh Gujarathi and Divya Jitendra Deshmukh received the Arjuna Award for which sport?",
          "o": [
            "Shooting",
            "Badminton",
            "Chess",
            "Table Tennis"
          ],
          "a": 2,
          "e": "Grandmasters Vidit Santosh Gujarathi and Divya Jitendra Deshmukh received the Arjuna Award 2025 for Chess."
        },
        {
          "q": "Who is known as the 'Grand Old Lady of India' and became the first woman President of the Indian National Congress in 1917?",
          "o": [
            "Sarojini Naidu",
            "Annie Besant",
            "Nellie Sengupta",
            "Aruna Asaf Ali"
          ],
          "a": 1,
          "e": "Mrs. Annie Besant is known as the 'Grand Old Lady of India' and presided over the 1917 Calcutta INC Session."
        },
        {
          "q": "Who was the last Governor-General of independent India (and the only Indian to hold the post), affectionately known as 'Rajaji', who later founded the Swatantra Party?",
          "o": [
            "C. Rajagopalachari",
            "Dr. Rajendra Prasad",
            "Sardar Vallabhbhai Patel",
            "K. Kamaraj"
          ],
          "a": 0,
          "e": "Chakravarti Rajagopalachari ('Rajaji') served as the last Governor-General of India and founded the Swatantra Party in 1959."
        },
        {
          "q": "Which revolutionary freedom fighter died fighting British police single-handedly at Alfred Park in Allahabad on 27 February 1931, fulfilling his pledge to remain 'Azad' (free)?",
          "o": [
            "Surya Sen",
            "Bhagat Singh",
            "Ram Prasad Bismil",
            "Chandrashekhar Azad"
          ],
          "a": 3,
          "e": "Chandrashekhar Azad attained martyrdom at Alfred Park, Allahabad on 27 February 1931."
        },
        {
          "q": "Which revolutionary leader, fondly called 'Masterda', organized and led the famous Chittagong Armoury Raid in April 1930?",
          "o": [
            "Khudiram Bose",
            "Rash Behari Bose",
            "Surya Sen",
            "Batukeshwar Dutt"
          ],
          "a": 2,
          "e": "Surya Sen ('Masterda') led the Chittagong Armoury Raid in Bengal in 1930."
        },
        {
          "q": "Which Indian revolutionary travelled to London and assassinated Sir Michael O'Dwyer (former Lieutenant Governor of Punjab during the Jallianwala Bagh massacre) at Caxton Hall in March 1940?",
          "o": [
            "Madan Lal Dhingra",
            "Udham Singh",
            "Bhagat Singh",
            "Sukhdev"
          ],
          "a": 1,
          "e": "Shaheed Udham Singh shot Michael O'Dwyer in London on 13 March 1940."
        },
        {
          "q": "Who founded the secret revolutionary society 'Abhinav Bharat' in 1904 and authored 'The Indian War of Independence, 1857'?",
          "o": [
            "Vinayak Damodar Savarkar (Veer Savarkar)",
            "Aurobindo Ghose",
            "Bipin Chandra Pal",
            "Shyamji Krishna Varma"
          ],
          "a": 0,
          "e": "V. D. Savarkar founded Abhinav Bharat (1904) and wrote 'The Indian War of Independence, 1857'."
        },
        {
          "q": "Which nationalist philosopher edited the English weekly 'Bande Mataram' during the Swadeshi Movement and later established his ashram at Pondicherry to expound 'Integral Yoga'?",
          "o": [
            "Dayanand Saraswati",
            "Swami Vivekananda",
            "Ramana Maharshi",
            "Sri Aurobindo (Aurobindo Ghose)"
          ],
          "a": 3,
          "e": "Sri Aurobindo edited 'Bande Mataram' and later developed the philosophy of Integral Yoga at Pondicherry."
        },
        {
          "q": "Who was the last Mughal Emperor who served as the symbolic leader of the Revolt of 1857 before being exiled by the British to Rangoon?",
          "o": [
            "Shah Alam II",
            "Akbar II",
            "Bahadur Shah II (Bahadur Shah Zafar)",
            "Alamgir II"
          ],
          "a": 2,
          "e": "Bahadur Shah Zafar (Bahadur Shah II) was the last Mughal Emperor and symbolic head of the 1857 Revolt."
        },
        {
          "q": "Who initiated the 'Bhoodan Movement' (Land-Gift Movement) in 1951 at Pochampally (Telangana) and was chosen by Mahatma Gandhi as the first Individual Satyagrahi in 1940?",
          "o": [
            "Jayaprakash Narayan",
            "Acharya Vinoba Bhave",
            "Baba Amte",
            "Mahatma Gandhi"
          ],
          "a": 1,
          "e": "Acharya Vinoba Bhave initiated the Bhoodan Movement in April 1951."
        },
        {
          "q": "Who founded the 'Bharatiya Jana Sangh' in October 1951 and earlier served as independent India's first Minister for Industry and Supply?",
          "o": [
            "Dr. Shyama Prasad Mukherjee",
            "Deendayal Upadhyaya",
            "Atal Bihari Vajpayee",
            "K. M. Munshi"
          ],
          "a": 0,
          "e": "Dr. Shyama Prasad Mukherjee served as the first Industry and Supply Minister and founded the Bharatiya Jana Sangh in 1951."
        },
        {
          "q": "Which social reformer, jurist, and Maharashtra leader was a key pillar of the 'Prarthana Samaj' and the 'Poona Sarvajanik Sabha'?",
          "o": [
            "Keshab Chandra Sen",
            "Jyotirao Phule",
            "Gopalhari Deshmukh",
            "Justice Mahadev Govind Ranade (M. G. Ranade)"
          ],
          "a": 3,
          "e": "Justice M. G. Ranade was a leading figure of the Prarthana Samaj and Poona Sarvajanik Sabha."
        },
        {
          "q": "Which pioneer woman social reformer founded the 'Arya Mahila Samaj' and 'Mukti Mission' for the education and shelter of widows in 19th-century Maharashtra?",
          "o": [
            "Fatima Sheikh",
            "Savitribai Phule",
            "Pandita Ramabai",
            "Ramabai Ranade"
          ],
          "a": 2,
          "e": "Sanskrit scholar Pandita Ramabai founded the Arya Mahila Samaj and Mukti Mission."
        }
      ],
      [
        {
          "q": "Who was the 1st Tirthankara and the 23rd Tirthankara of Jainism respectively?",
          "o": [
            "Parshvanatha (1st) and Mahavira (23rd)",
            "Rishabhanatha (1st) and Parshvanatha (23rd)",
            "Rishabhanatha (1st) and Mahavira (23rd)",
            "Neminatha (1st) and Parshvanatha (23rd)"
          ],
          "a": 1,
          "e": "Rishabhanatha (Adinatha) was the 1st Tirthankara, Parshvanatha was the 23rd, and Mahavira was the 24th."
        },
        {
          "q": "Which Indian Buddhist monk is traditionally credited with transmitting Chan (Zen) Buddhism to China in the 5th–6th century CE?",
          "o": [
            "Bodhidharma",
            "Nagarjuna",
            "Padmasambhava",
            "Atisha"
          ],
          "a": 0,
          "e": "Bodhidharma is traditionally regarded as the transmitter of Chan (Zen) Buddhism to China."
        },
        {
          "q": "In early Islamic history, who were the four 'Rashidun' (Rightly Guided) Caliphs in correct chronological order?",
          "o": [
            "Uthman, Umar, Abu Bakr, and Ali",
            "Umar, Abu Bakr, Ali, and Uthman",
            "Abu Bakr, Ali, Umar, and Uthman",
            "Abu Bakr (1st), Umar ibn al-Khattab (2nd), Uthman ibn Affan (3rd), and Ali ibn Abi Talib (4th)"
          ],
          "a": 3,
          "e": "The four Rashidun Caliphs in order were Abu Bakr (1st), Umar (2nd), Uthman (3rd), and Ali (4th)."
        },
        {
          "q": "Who initiated the 16th-century Protestant Reformation in Europe by nailing his 'Ninety-five Theses' in 1517?",
          "o": [
            "Saint Augustine",
            "St. Peter",
            "Martin Luther",
            "John Calvin"
          ],
          "a": 2,
          "e": "German theologian Martin Luther initiated the Protestant Reformation in 1517."
        },
        {
          "q": "Which brave Gond queen of Garha-Katanga (Central India) fiercely resisted Mughal expansion under Emperor Akbar in 1564 and chose martyrdom on the battlefield?",
          "o": [
            "Rani Abbakka",
            "Rani Durgavati",
            "Rani Lakshmibai",
            "Razia Sultana"
          ],
          "a": 1,
          "e": "Rani Durgavati of the Gond kingdom fought heroically against Akbar's general Asaf Khan in 1564."
        },
        {
          "q": "Which Chahamana (Chauhan) ruler of Ajmer and Delhi fought against Muhammad Ghori in the First (1191) and Second (1192) Battles of Tarain?",
          "o": [
            "Prithviraj Chauhan (Prithviraj III)",
            "Vigraharaja IV",
            "Jaichand",
            "Rana Sanga"
          ],
          "a": 0,
          "e": "Prithviraj Chauhan (Prithviraj III) defeated Muhammad Ghori in the First Battle of Tarain (1191) before being defeated in the Second (1192)."
        },
        {
          "q": "Which Tuluva dynasty emperor of the Vijayanagara Empire was a great patron of the 'Ashtadiggajas' and authored the Telugu work 'Amuktamalyada'?",
          "o": [
            "Deva Raya II",
            "Harihara I",
            "Bukka Raya I",
            "Krishnadevaraya"
          ],
          "a": 3,
          "e": "Emperor Krishnadevaraya (reigned 1509–1529) authored 'Amuktamalyada'."
        },
        {
          "q": "Which Chola emperor, son of Raja Raja Chola I, led successful naval expeditions to Southeast Asia (Srivijaya) and assumed the title 'Gangaikonda Chola'?",
          "o": [
            "Kulottunga I",
            "Raja Raja Chola I",
            "Rajendra Chola I",
            "Parantaka I"
          ],
          "a": 2,
          "e": "Rajendra Chola I assumed the title 'Gangaikonda Chola' and founded the capital Gangaikonda Cholapuram."
        },
        {
          "q": "Which Indian astrophysicist formulated the famous 'Ionization Equation' explaining the physical and chemical conditions inside stars?",
          "o": [
            "Satyendra Nath Bose",
            "Meghnad Saha",
            "Subrahmanyan Chandrasekhar",
            "Vikram Sarabhai"
          ],
          "a": 1,
          "e": "Prof. Meghnad Saha formulated the Saha Ionization Equation in 1920."
        },
        {
          "q": "Which Indian statistician founded the Indian Statistical Institute (ISI) in Calcutta, introduced the 'Mahalanobis Distance', and drafted India's Second Five-Year Plan model?",
          "o": [
            "P. C. Mahalanobis",
            "C. R. Rao",
            "Srinivasa Ramanujan",
            "G. N. Ramachandran"
          ],
          "a": 0,
          "e": "Prasanta Chandra Mahalanobis founded the ISI and formulated the Second Five-Year Plan model."
        },
        {
          "q": "Which eminent Indian biophysicist discovered the triple-helical structure of collagen and devised the famous 'Ramachandran Plot' for protein structure?",
          "o": [
            "C. N. R. Rao",
            "Har Gobind Khorana",
            "Birbal Sahni",
            "G. N. Ramachandran"
          ],
          "a": 3,
          "e": "Prof. G. N. Ramachandran created the Ramachandran Plot used worldwide in structural biology."
        },
        {
          "q": "Who is revered as the 'Birdman of India' for his pioneering systematic bird surveys across India and his classic work 'Handbook of the Birds of India and Pakistan'?",
          "o": [
            "M. S. Swaminathan",
            "Birbal Sahni",
            "Dr. Salim Ali",
            "Jim Corbett"
          ],
          "a": 2,
          "e": "Ornithologist Dr. Salim Ali is known as the 'Birdman of India'."
        },
        {
          "q": "Which Indian aerospace scientist served as the Project Director for the Agni-IV and Agni-V missile systems and is popularly known as the 'Missile Woman of India'?",
          "o": [
            "Ritu Karidhal",
            "Dr. Tessy Thomas",
            "Muthayya Vanitha",
            "Kalpana Chawla"
          ],
          "a": 1,
          "e": "Dr. Tessy Thomas is popularly known as the 'Missile Woman of India'."
        },
        {
          "q": "Which eminent Indian solid-state and materials chemist was awarded the Bharat Ratna in 2014 alongside cricketer Sachin Tendulkar?",
          "o": [
            "Prof. C. N. R. Rao",
            "Dr. Anil Kakodkar",
            "Dr. U. R. Rao",
            "Dr. Satish Dhawan"
          ],
          "a": 0,
          "e": "Prof. C. N. R. Rao (Chintamani Nagesa Ramachandra Rao) received the Bharat Ratna in 2014."
        },
        {
          "q": "Who discovered electromagnetic induction and the laws of electrolysis?",
          "o": [
            "J. J. Thomson",
            "Nikola Tesla",
            "James Clerk Maxwell",
            "Michael Faraday"
          ],
          "a": 3,
          "e": "English scientist Michael Faraday discovered electromagnetic induction and the laws of electrolysis."
        },
        {
          "q": "Which Polish-born astronomer proposed the 'Heliocentric Model' of the solar system (placing the Sun, rather than the Earth, at the centre)?",
          "o": [
            "Galileo Galilei",
            "Johannes Kepler",
            "Nicolaus Copernicus",
            "Edwin Hubble"
          ],
          "a": 2,
          "e": "Nicolaus Copernicus formulated the heliocentric model of the solar system (while Johannes Kepler discovered the three laws of planetary motion)."
        },
        {
          "q": "Which ancient Greek mathematician authored the treatise 'Elements' and is revered as the 'Father of Geometry'?",
          "o": [
            "Archimedes",
            "Euclid",
            "Pythagoras",
            "Eratosthenes"
          ],
          "a": 1,
          "e": "Euclid is known as the 'Father of Geometry' (while Archimedes discovered the principle of buoyancy)."
        },
        {
          "q": "Which Russian chemist formulated the Periodic Law and created the first version of the 'Periodic Table of Elements' in 1869?",
          "o": [
            "Dmitri Mendeleev",
            "Antoine Lavoisier",
            "John Dalton",
            "Henry Moseley"
          ],
          "a": 0,
          "e": "Dmitri Mendeleev created the Periodic Table of Elements."
        },
        {
          "q": "Which English physician first accurately described the systemic circulation of blood pumped by the heart in 1628?",
          "o": [
            "Robert Koch",
            "Edward Jenner",
            "Alexander Fleming",
            "William Harvey"
          ],
          "a": 3,
          "e": "William Harvey discovered the circulation of blood in the human body."
        },
        {
          "q": "Who discovered the antibiotic 'Penicillin' from the mould Penicillium notatum in 1928?",
          "o": [
            "Jonas Salk",
            "Louis Pasteur",
            "Sir Alexander Fleming",
            "Robert Koch"
          ],
          "a": 2,
          "e": "Scottish bacteriologist Sir Alexander Fleming discovered penicillin in 1928."
        }
      ],
      [
        {
          "q": "Which Dutch scientist made pioneering microscopic observations of bacteria and protozoa ('animalcules') and is known as the 'Father of Microbiology'?",
          "o": [
            "Robert Hooke",
            "Antonie van Leeuwenhoek",
            "Louis Pasteur",
            "Robert Koch"
          ],
          "a": 1,
          "e": "Antonie van Leeuwenhoek is known as the 'Father of Microbiology'."
        },
        {
          "q": "Who became the FIRST human being to journey into outer space aboard Vostok 1 on 12 April 1961?",
          "o": [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "Alan Shepard"
          ],
          "a": 0,
          "e": "Soviet cosmonaut Yuri Gagarin became the first human in space on 12 April 1961."
        },
        {
          "q": "Who became the FIRST woman in the world to fly in space aboard Vostok 6 in June 1963?",
          "o": [
            "Svetlana Savitskaya",
            "Sally Ride",
            "Kalpana Chawla",
            "Valentina Tereshkova"
          ],
          "a": 3,
          "e": "Soviet cosmonaut Valentina Tereshkova became the first woman in space in June 1963."
        },
        {
          "q": "Who invented the 'World Wide Web' (WWW) in 1989 while working at CERN?",
          "o": [
            "Charles Babbage",
            "Vint Cerf",
            "Sir Tim Berners-Lee",
            "Alan Turing"
          ],
          "a": 2,
          "e": "British computer scientist Sir Tim Berners-Lee invented the World Wide Web."
        },
        {
          "q": "Which American physicist built and launched the world's first liquid-fueled rocket in 1926 and is known as the 'Father of Modern Rocketry'?",
          "o": [
            "Sergei Korolev",
            "Robert H. Goddard",
            "Wernher von Braun",
            "Edwin Hubble"
          ],
          "a": 1,
          "e": "Robert Goddard is revered as the 'Father of Modern Rocketry'."
        },
        {
          "q": "Which American astronomer demonstrated that the universe is expanding and formulated 'Hubble's Law'?",
          "o": [
            "Edwin Hubble",
            "Carl Sagan",
            "Galileo Galilei",
            "Johannes Kepler"
          ],
          "a": 0,
          "e": "Edwin Hubble discovered that galaxies are receding from one another (Hubble's Law)."
        },
        {
          "q": "Which 14th-century Moroccan explorer and scholar travelled across Africa, the Middle East, Central Asia, and India (visiting the court of Muhammad bin Tughlaq) and dictated his travelogue 'Rihla'?",
          "o": [
            "Zheng He",
            "Marco Polo",
            "Al-Biruni",
            "Ibn Battuta"
          ],
          "a": 3,
          "e": "Moroccan traveller Ibn Battuta visited India during the reign of Muhammad bin Tughlaq."
        },
        {
          "q": "Who is honoured as the 'Father of Modern Hindi Literature' and Modern Hindi Theatre, having authored works like 'Andher Nagari' and 'Bharat Durdasha'?",
          "o": [
            "Maithili Sharan Gupt",
            "Munshi Premchand",
            "Bharatendu Harishchandra",
            "Jaishankar Prasad"
          ],
          "a": 2,
          "e": "Bharatendu Harishchandra (1850–1885) is revered as the 'Father of Modern Hindi Literature'."
        },
        {
          "q": "Which celebrated Hindi poet was honoured by Mahatma Gandhi with the title 'Rashtra Kavi' (National Poet) and authored 'Bharat-Bharati' and 'Saket'?",
          "o": [
            "Ramdhari Singh Dinkar",
            "Maithili Sharan Gupt",
            "Sumitranandan Pant",
            "Suryakant Tripathi Nirala"
          ],
          "a": 1,
          "e": "Maithili Sharan Gupt is revered as 'Rashtra Kavi'."
        },
        {
          "q": "Which acclaimed Punjabi poet and novelist authored the famous Partition novel 'Pinjar' and the poem 'Ajj Aakhaan Waris Shah Nu'?",
          "o": [
            "Amrita Pritam",
            "Khushwant Singh",
            "Mulk Raj Anand",
            "Bisham Sahni"
          ],
          "a": 0,
          "e": "Amrita Pritam authored the classic Partition novel 'Pinjar'."
        },
        {
          "q": "Which pioneer of Indian English fiction created the fictional South Indian town of 'Malgudi' in works like 'Swami and Friends', 'Malgudi Days', and 'The Guide'?",
          "o": [
            "Raja Rao",
            "Mulk Raj Anand",
            "Ruskin Bond",
            "R. K. Narayan"
          ],
          "a": 3,
          "e": "R. K. Narayan created the iconic fictional town of Malgudi (while Mulk Raj Anand wrote 'Untouchable' and Khushwant Singh wrote 'Train to Pakistan')."
        },
        {
          "q": "Which legendary Carnatic classical vocalist became the FIRST musician ever to be awarded the Bharat Ratna (1998) and also won the Ramon Magsaysay Award (1974)?",
          "o": [
            "Bhimsen Joshi",
            "Lata Mangeshkar",
            "M. S. Subbulakshmi",
            "Gangubai Hangal"
          ],
          "a": 2,
          "e": "Madurai Shanmukhavadivu Subbulakshmi (M. S. Subbulakshmi) was the first musician to receive the Bharat Ratna in 1998."
        },
        {
          "q": "With which musical instruments are Bharat Ratna awardees Ustad Bismillah Khan and Pandit Ravi Shankar associated respectively?",
          "o": [
            "Tabla (Bismillah Khan) and Flute (Ravi Shankar)",
            "Shehnai (Bismillah Khan) and Sitar (Ravi Shankar)",
            "Sarod (Bismillah Khan) and Santoor (Ravi Shankar)",
            "Santoor (Bismillah Khan) and Sitar (Ravi Shankar)"
          ],
          "a": 1,
          "e": "Ustad Bismillah Khan was a Shehnai maestro and Pandit Ravi Shankar was a Sitar maestro."
        },
        {
          "q": "Which 19th-century Indian painter is celebrated as a pioneer of modern Indian art for fusing European academic realism with themes from the Mahabharata and Ramayana?",
          "o": [
            "Raja Ravi Varma",
            "Abanindranath Tagore",
            "Amrita Sher-Gil",
            "M. F. Husain"
          ],
          "a": 0,
          "e": "Raja Ravi Varma of Travancore pioneered modern Indian painting with classical mythological themes."
        },
        {
          "q": "Which Bangladeshi economist founded the Grameen Bank, pioneered the concepts of 'Microcredit' and 'Microfinance', and was awarded the 2006 Nobel Peace Prize?",
          "o": [
            "Mahbub ul Haq",
            "Amartya Sen",
            "Abhijit Banerjee",
            "Muhammad Yunus"
          ],
          "a": 3,
          "e": "Prof. Muhammad Yunus (along with Grameen Bank) won the 2006 Nobel Peace Prize for pioneering microcredit."
        },
        {
          "q": "Which US President led the nation through the Great Depression and World War II and launched the 'New Deal' economic recovery programme?",
          "o": [
            "Abraham Lincoln",
            "Woodrow Wilson",
            "Franklin D. Roosevelt (FDR)",
            "Theodore Roosevelt"
          ],
          "a": 2,
          "e": "Franklin D. Roosevelt (32nd US President) introduced the 'New Deal' during the Great Depression."
        },
        {
          "q": "Which US President proposed the famous 'Fourteen Points' for world peace in 1918 and championed the creation of the League of Nations after World War I?",
          "o": [
            "Franklin D. Roosevelt",
            "Woodrow Wilson",
            "Thomas Jefferson",
            "George Washington"
          ],
          "a": 1,
          "e": "President Woodrow Wilson presented the Fourteen Points and advocated the League of Nations."
        },
        {
          "q": "Who was the founding leader of the modern secular Republic of Turkey (serving as its first President from 1923 to 1938)?",
          "o": [
            "Mustafa Kemal Ataturk",
            "Suleiman the Magnificent",
            "Ismet Inonu",
            "Anwar Sadat"
          ],
          "a": 0,
          "e": "Mustafa Kemal Ataturk ('Father of the Turks') founded the modern Republic of Turkey in 1923."
        },
        {
          "q": "Which last leader of the Soviet Union (USSR) introduced the twin reform policies of 'Glasnost' (openness) and 'Perestroika' (restructuring) in the 1980s?",
          "o": [
            "Nikita Khrushchev",
            "Vladimir Lenin",
            "Joseph Stalin",
            "Mikhail Gorbachev"
          ],
          "a": 3,
          "e": "Mikhail Gorbachev introduced Glasnost and Perestroika and won the 1990 Nobel Peace Prize."
        },
        {
          "q": "Which English political philosopher authored 'Leviathan' (1651), arguing that life in the state of nature without a strong sovereign would be 'solitary, poor, nasty, brutish, and short'?",
          "o": [
            "Jean-Jacques Rousseau",
            "John Locke",
            "Thomas Hobbes",
            "Niccolo Machiavelli"
          ],
          "a": 2,
          "e": "Thomas Hobbes authored 'Leviathan' (1651)."
        }
      ],
      [
        {
          "q": "Which Italian Renaissance political thinker authored the treatise 'The Prince' (Il Principe) on realistic statecraft and power politics?",
          "o": [
            "Montesquieu",
            "Niccolo Machiavelli",
            "Thomas Hobbes",
            "Rousseau"
          ],
          "a": 1,
          "e": "Niccolo Machiavelli authored 'The Prince'."
        },
        {
          "q": "Which Scottish economist and philosopher authored 'The Wealth of Nations' (1776) and is universally known as the 'Father of Economics'?",
          "o": [
            "Adam Smith",
            "Karl Marx",
            "John Maynard Keynes",
            "David Ricardo"
          ],
          "a": 0,
          "e": "Adam Smith authored 'An Inquiry into the Nature and Causes of the Wealth of Nations' (1776)."
        },
        {
          "q": "Which Sri Lankan spin bowler holds the all-time world record for the highest number of wickets in both Test cricket (800 wickets) and ODI cricket (534 wickets)?",
          "o": [
            "James Anderson",
            "Shane Warne",
            "Anil Kumble",
            "Muttiah Muralitharan"
          ],
          "a": 3,
          "e": "Muttiah Muralitharan holds the world record with 800 Test wickets and 534 ODI wickets."
        },
        {
          "q": "Which Brazilian football legend—nicknamed 'The King of Football'—remains the only player in history to win three FIFA World Cups (1958, 1962, and 1970)?",
          "o": [
            "Lionel Messi",
            "Diego Maradona",
            "Pelé (Edson Arantes do Nascimento)",
            "Ronaldo Nazario"
          ],
          "a": 2,
          "e": "Pelé won three FIFA World Cups with Brazil in 1958, 1962, and 1970."
        },
        {
          "q": "Which Spanish tennis legend is nicknamed the 'King of Clay' for winning a record 14 French Open (Roland Garros) men's singles titles?",
          "o": [
            "Roger Federer",
            "Rafael Nadal",
            "Novak Djokovic",
            "Carlos Alcaraz"
          ],
          "a": 1,
          "e": "Rafael Nadal is known as the 'King of Clay'."
        },
        {
          "q": "Which Jamaican sprinter, nicknamed 'Lightning Bolt', holds the world records in both the 100m (9.58s) and 200m (19.19s) and won eight Olympic gold medals?",
          "o": [
            "Usain Bolt",
            "Carl Lewis",
            "Michael Johnson",
            "Yohan Blake"
          ],
          "a": 0,
          "e": "Usain Bolt ('Lightning Bolt') won 100m and 200m gold across three consecutive Olympics (2008, 2012, 2016)."
        },
        {
          "q": "Which American swimmer is the most decorated Olympian of all time, having won a record 23 Olympic gold medals (28 medals in total)?",
          "o": [
            "Caeleb Dressel",
            "Mark Spitz",
            "Ian Thorpe",
            "Michael Phelps"
          ],
          "a": 3,
          "e": "Michael Phelps ('The Baltimore Bullet') won 23 Olympic gold medals."
        },
        {
          "q": "Which Indian teenager became the youngest undisputed World Chess Champion in history by defeating Ding Liren in December 2024?",
          "o": [
            "Arjun Erigaisi",
            "R. Praggnanandhaa",
            "Gukesh D (Dommaraju Gukesh)",
            "Vidit Gujarathi"
          ],
          "a": 2,
          "e": "18-year-old Gukesh D became the youngest undisputed World Chess Champion in December 2024."
        },
        {
          "q": "Which Indian pistol shooter won two bronze medals at the 2024 Paris Olympics (becoming the first athlete from independent India to win two medals in a single Olympic Games) and received the Major Dhyan Chand Khel Ratna Award 2024?",
          "o": [
            "Avani Lekhara",
            "Manu Bhaker",
            "Esha Singh",
            "Rahi Sarnobat"
          ],
          "a": 1,
          "e": "Manu Bhaker won two bronze medals at the 2024 Paris Olympics and received the Khel Ratna Award."
        },
        {
          "q": "Which five personalities were conferred the 'Padma Vibhushan' (India's second-highest civilian honour) in the 2026 Padma Awards?",
          "o": [
            "Dharmendra Singh Deol, Dr. N. Rajam, P. Narayanan, Justice K. T. Thomas, and V. S. Achuthanandhan",
            "Alka Yagnik, Mammootty, Piyush Pandey, Uday Kotak, and Vijay Amritraj",
            "Rohit Sharma, Harmanpreet Kaur, Savita Punia, R. Madhavan, and Satish Shah",
            "Anant Nag, Ratan Tata, M. S. Swaminathan, and Karpoori Thakur"
          ],
          "a": 0,
          "e": "The five Padma Vibhushan 2026 awardees are Dharmendra Singh Deol (Art, posthumous), N. Rajam (Art), P. Narayanan (Literature & Education), K. T. Thomas (Public Affairs), and V. S. Achuthanandhan (Public Affairs, posthumous)."
        },
        {
          "q": "In the 2026 Padma Awards, legendary violinist Dr. N. Rajam was awarded the Padma Vibhushan in which category?",
          "o": [
            "Social Work",
            "Public Affairs",
            "Literature and Education",
            "Art"
          ],
          "a": 3,
          "e": "Hindustani classical violinist Dr. N. Rajam received the Padma Vibhushan 2026 in the field of Art."
        },
        {
          "q": "In the 2026 Padma Awards, former Supreme Court Judge Justice K. T. Thomas and former Kerala Chief Minister V. S. Achuthanandhan (posthumous) received the Padma Vibhushan in which category?",
          "o": [
            "Literature and Education",
            "Social Work",
            "Public Affairs",
            "Civil Service"
          ],
          "a": 2,
          "e": "Both Justice K. T. Thomas and V. S. Achuthanandhan received the Padma Vibhushan 2026 for Public Affairs."
        },
        {
          "q": "Which former Indian tennis legend and broadcaster was awarded the 'Padma Bhushan' in the Sports category in the 2026 Padma Awards?",
          "o": [
            "Leander Paes",
            "Vijay Amritraj",
            "Rohan Bopanna",
            "Mahesh Bhupathi"
          ],
          "a": 1,
          "e": "Tennis legend Vijay Amritraj received the Padma Bhushan 2026 in the Sports category."
        },
        {
          "q": "Which two Indian cricket team captains (men's and women's) were conferred the 'Padma Shri' in the Sports category in the 2026 Padma Awards?",
          "o": [
            "Rohit Sharma and Harmanpreet Kaur",
            "Virat Kohli and Smriti Mandhana",
            "M. S. Dhoni and Mithali Raj",
            "Hardik Pandya and Deepti Sharma"
          ],
          "a": 0,
          "e": "Rohit Sharma and Harmanpreet Kaur (along with hockey goalkeeper Savita Punia and para-athlete Praveen Kumar) received the Padma Shri 2026 in Sports."
        },
        {
          "q": "Which celebrated advertising pioneer ('Father of Indian Advertising' behind iconic campaigns) was posthumously conferred the Padma Bhushan in 2026?",
          "o": [
            "R. Balki",
            "Alyque Padamsee",
            "Prasoon Joshi",
            "Piyush Pandey"
          ],
          "a": 3,
          "e": "Advertising legend Piyush Pandey was posthumously awarded the Padma Bhushan 2026 in the Art category."
        },
        {
          "q": "Which veteran footballer was conferred the 'Arjuna Award (Lifetime)' in the National Sports Awards 2025 (announced on 18 August 2026)?",
          "o": [
            "Bhaichung Bhutia",
            "Sunil Chhetri",
            "I. Arumainayagam",
            "I. M. Vijayan"
          ],
          "a": 2,
          "e": "Veteran Indian footballer I. Arumainayagam received the Arjuna Award (Lifetime) 2025."
        },
        {
          "q": "In the National Sports Awards 2025 (announced 18 August 2026), which women's doubles badminton pair received the Arjuna Award?",
          "o": [
            "Ashwini Ponnappa and Tanisha Crasto",
            "Treesa Jolly and Pullela Gayatri Gopichand",
            "Jwala Gutta and Sikki Reddy",
            "P. V. Sindhu and Saina Nehwal"
          ],
          "a": 1,
          "e": "Badminton duo Treesa Jolly and Pullela Gayatri Gopichand both received the Arjuna Award 2025."
        },
        {
          "q": "Which two Indian hockey players—representing the women's and men's national teams respectively—received the Arjuna Award 2025 (announced in August 2026)?",
          "o": [
            "Lalremsiami and Rajkumar Pal",
            "Savita Punia and Harmanpreet Singh",
            "Vandana Katariya and PR Sreejesh",
            "Salima Tete and Manpreet Singh"
          ],
          "a": 0,
          "e": "Hockey players Lalremsiami and Rajkumar Pal received the Arjuna Award 2025."
        },
        {
          "q": "Who is popularly known by the nickname 'Master Blaster' and was the first male cricketer to score an ODI double century?",
          "o": [
            "Sunil Gavaskar",
            "Virat Kohli",
            "Rohit Sharma",
            "Sachin Tendulkar"
          ],
          "a": 3,
          "e": "Sachin Tendulkar is known as the 'Master Blaster'."
        },
        {
          "q": "Which former Indian cricket captain is popularly known by the nickname 'Haryana Hurricane' and led India to the 1983 World Cup title?",
          "o": [
            "Sourav Ganguly",
            "M. S. Dhoni",
            "Kapil Dev",
            "Mohinder Amarnath"
          ],
          "a": 2,
          "e": "Kapil Dev is nicknamed the 'Haryana Hurricane'."
        }
      ],
      [
        {
          "q": "Which Indian batting legend is known by the nickname 'The Wall' and also served as head coach of the Indian men's cricket team?",
          "o": [
            "V. V. S. Laxman",
            "Rahul Dravid",
            "Sunil Gavaskar",
            "Cheteshwar Pujara"
          ],
          "a": 1,
          "e": "Rahul Dravid is popularly known as 'The Wall'."
        },
        {
          "q": "Which former India cricket captain and BCCI President is affectionately called 'Dada' (Prince of Kolkata)?",
          "o": [
            "Sourav Ganguly",
            "Rahul Dravid",
            "Anil Kumble",
            "Mohammad Azharuddin"
          ],
          "a": 0,
          "e": "Sourav Ganguly is popularly known as 'Dada'."
        },
        {
          "q": "Which legendary Australian cricketer retired with an all-time record Test batting average of 99.94?",
          "o": [
            "Allan Border",
            "Ricky Ponting",
            "Steve Waugh",
            "Sir Don Bradman"
          ],
          "a": 3,
          "e": "Sir Donald Bradman retired with a Test batting average of 99.94."
        },
        {
          "q": "Which legendary Indian sprinter is famously known as the 'Flying Sikh' (a title given to him by General Ayub Khan)?",
          "o": [
            "Makhan Singh",
            "Gurbachan Singh Randhawa",
            "Milkha Singh",
            "Tejaswin Shankar"
          ],
          "a": 2,
          "e": "Milkha Singh is revered as the 'Flying Sikh'."
        },
        {
          "q": "Which legendary Indian track-and-field athlete is popularly known as the 'Payyoli Express' (and 'Queen of Indian Track and Field')?",
          "o": [
            "Hima Das",
            "P. T. Usha",
            "Anju Bobby George",
            "Shiny Wilson"
          ],
          "a": 1,
          "e": "P. T. Usha is known as the 'Payyoli Express'."
        },
        {
          "q": "Which Indian chess legend is nicknamed the 'Tiger of Madras' (and 'Lightning Kid') and became India's first Grandmaster in 1988?",
          "o": [
            "Viswanathan Anand",
            "Gukesh D",
            "Pentala Harikrishna",
            "R. Praggnanandhaa"
          ],
          "a": 0,
          "e": "Viswanathan Anand is nicknamed the 'Tiger of Madras'."
        },
        {
          "q": "Which American heavyweight boxing legend (born Cassius Clay) was universally known by the nickname 'The Greatest'?",
          "o": [
            "George Foreman",
            "Mike Tyson",
            "Joe Frazier",
            "Muhammad Ali"
          ],
          "a": 3,
          "e": "Muhammad Ali was known as 'The Greatest'."
        },
        {
          "q": "Which six-time Women's World Boxing Champion and Olympic bronze medalist from Manipur is popularly known as 'Magnificent Mary'?",
          "o": [
            "Nikhat Zareen",
            "Lovlina Borgohain",
            "M. C. Mary Kom",
            "Sarita Devi"
          ],
          "a": 2,
          "e": "M. C. Mary Kom is known as 'Magnificent Mary'."
        },
        {
          "q": "Which Assamese sprinter, who won gold in the 400m at the World U20 Championships, is nicknamed the 'Dhing Express'?",
          "o": [
            "Dutee Chand",
            "Hima Das",
            "P. T. Usha",
            "Srabani Nanda"
          ],
          "a": 1,
          "e": "Hima Das is nicknamed the 'Dhing Express'."
        },
        {
          "q": "Who became the FIRST Indian woman in history to win an Olympic medal (winning bronze in weightlifting at the 2000 Sydney Olympics)?",
          "o": [
            "Karnam Malleswari",
            "Mirabai Chanu",
            "P. V. Sindhu",
            "Saina Nehwal"
          ],
          "a": 0,
          "e": "Weightlifter Karnam Malleswari became the first Indian woman to win an Olympic medal in 2000."
        },
        {
          "q": "Who won India's FIRST individual Olympic gold medal (in the Men's 10m Air Rifle shooting event at the 2008 Beijing Olympics)?",
          "o": [
            "Vijay Kumar",
            "Rajyavardhan Singh Rathore",
            "Gagan Narang",
            "Abhinav Bindra"
          ],
          "a": 3,
          "e": "Abhinav Bindra won India's first individual Olympic gold medal at Beijing 2008."
        },
        {
          "q": "Which Indian badminton star has won two consecutive Olympic medals—a Silver at Rio 2016 and a Bronze at Tokyo 2020?",
          "o": [
            "Aparna Popat",
            "Saina Nehwal",
            "P. V. Sindhu",
            "Jwala Gutta"
          ],
          "a": 2,
          "e": "P. V. Sindhu won silver at Rio 2016 and bronze at Tokyo 2020 (while Saina Nehwal won bronze at London 2012)."
        },
        {
          "q": "Which Indian weightlifter won the Silver medal in the women's 49 kg category at the Tokyo 2020 Olympics?",
          "o": [
            "Karnam Malleswari",
            "Saikhom Mirabai Chanu",
            "Kunjarani Devi",
            "Bindyarani Devi"
          ],
          "a": 1,
          "e": "Mirabai Chanu won the silver medal in weightlifting at the Tokyo 2020 Olympics."
        },
        {
          "q": "Which Indian woman wrestler won a historic Bronze medal in the 58 kg freestyle category at the 2016 Rio Olympics?",
          "o": [
            "Sakshi Malik",
            "Vinesh Phogat",
            "Babita Phogat",
            "Geeta Phogat"
          ],
          "a": 0,
          "e": "Sakshi Malik became the first Indian female wrestler to win an Olympic medal (Bronze, Rio 2016)."
        },
        {
          "q": "Which Indian wrestler won two individual Olympic medals—Bronze at Beijing 2008 and Silver at London 2012?",
          "o": [
            "Ravi Kumar Dahiya",
            "Yogeshwar Dutt",
            "Bajrang Punia",
            "Sushil Kumar"
          ],
          "a": 3,
          "e": "Sushil Kumar won bronze at Beijing 2008 and silver at London 2012."
        },
        {
          "q": "Which Indian para-shooter became the FIRST Indian woman to win a Paralympic Gold medal (at Tokyo 2020, and defended her gold at Paris 2024)?",
          "o": [
            "Bhavina Patel",
            "Deepa Malik",
            "Avani Lekhara",
            "Mona Agarwal"
          ],
          "a": 2,
          "e": "Avani Lekhara is the first Indian woman to win a Paralympic gold medal (and two Paralympic golds)."
        },
        {
          "q": "Which Indian para-javelin thrower has won two Paralympic Gold medals (Athens 2004 and Rio 2016) and a Silver medal (Tokyo 2020)?",
          "o": [
            "Sumit Antil",
            "Devendra Jhajharia",
            "Mariyappan Thangavelu",
            "Praveen Kumar"
          ],
          "a": 1,
          "e": "Devendra Jhajharia is a multiple Paralympic gold medalist in javelin throw."
        },
        {
          "q": "Which Indian javelin thrower won the Gold medal at the Tokyo 2020 Olympics (87.58m) and the Silver medal at the Paris 2024 Olympics (89.45m)?",
          "o": [
            "Neeraj Chopra",
            "Kishore Jena",
            "Shivpal Singh",
            "Davinder Singh Kang"
          ],
          "a": 0,
          "e": "Neeraj Chopra won Olympic gold at Tokyo 2020 and silver at Paris 2024."
        },
        {
          "q": "Which Argentine football legend captained his national team to victory in the 2022 FIFA World Cup in Qatar and has won a record eight Ballon d'Or awards?",
          "o": [
            "Gabriel Batistuta",
            "Diego Maradona",
            "Angel Di Maria",
            "Lionel Messi"
          ],
          "a": 3,
          "e": "Lionel Messi captained Argentina to the 2022 FIFA World Cup title."
        },
        {
          "q": "Which Argentine football icon captained Argentina to the 1986 FIFA World Cup triumph in Mexico?",
          "o": [
            "Mario Kempes",
            "Lionel Messi",
            "Diego Maradona",
            "Daniel Passarella"
          ],
          "a": 2,
          "e": "Diego Maradona captained Argentina to the 1986 FIFA World Cup victory."
        }
      ],
      [
        {
          "q": "Which Serbian tennis champion holds the all-time men's record for the most Grand Slam singles titles (24) and won the Olympic singles gold at Paris 2024?",
          "o": [
            "Roger Federer",
            "Novak Djokovic",
            "Rafael Nadal",
            "Pete Sampras"
          ],
          "a": 1,
          "e": "Novak Djokovic holds the record for the most men's Grand Slam singles titles."
        },
        {
          "q": "Which American women's tennis legend won 23 Grand Slam singles titles in the Open Era?",
          "o": [
            "Serena Williams",
            "Venus Williams",
            "Steffi Graf",
            "Martina Navratilova"
          ],
          "a": 0,
          "e": "Serena Williams won 23 Grand Slam singles titles."
        },
        {
          "q": "Which Indian tennis legend won a bronze medal in men's singles at the 1996 Atlanta Olympics along with 18 Grand Slam doubles/mixed-doubles titles?",
          "o": [
            "Vijay Amritraj",
            "Mahesh Bhupathi",
            "Rohan Bopanna",
            "Leander Paes"
          ],
          "a": 3,
          "e": "Leander Paes won the singles bronze medal at the 1996 Atlanta Olympics."
        },
        {
          "q": "Which Norwegian Chess Grandmaster reigned as the five-time World Classical Chess Champion from 2013 to 2023?",
          "o": [
            "Vladimir Kramnik",
            "Garry Kasparov",
            "Magnus Carlsen",
            "Fabiano Caruana"
          ],
          "a": 2,
          "e": "Magnus Carlsen of Norway held the World Chess Championship from 2013 to 2023."
        },
        {
          "q": "Who founded 'Reliance Industries' and pioneered the equity cult among retail investors in India?",
          "o": [
            "J. R. D. Tata",
            "Dhirubhai Ambani",
            "G. D. Birla",
            "Lakshmi Mittal"
          ],
          "a": 1,
          "e": "Dhirubhai Ambani founded Reliance Industries."
        },
        {
          "q": "Who is the founder of India's premier biotechnology company 'Biocon'?",
          "o": [
            "Kiran Mazumdar-Shaw",
            "Indra Nooyi",
            "Falguni Nayar",
            "Chanda Kochhar"
          ],
          "a": 0,
          "e": "Kiran Mazumdar-Shaw founded Biocon in 1978."
        },
        {
          "q": "Who co-founded the IT giant 'Infosys' in 1981 along with six software engineers?",
          "o": [
            "Ratan Tata",
            "Azim Premji",
            "Shiv Nadar",
            "N. R. Narayana Murthy"
          ],
          "a": 3,
          "e": "N. R. Narayana Murthy co-founded Infosys (while Azim Premji led Wipro and Shiv Nadar founded HCL)."
        },
        {
          "q": "Who is known as the 'Father of the White Revolution in India' (and 'Milkman of India') for architecting 'Operation Flood'?",
          "o": [
            "Sam Pitroda",
            "Dr. M. S. Swaminathan",
            "Dr. Verghese Kurien",
            "C. Subramaniam"
          ],
          "a": 2,
          "e": "Dr. Verghese Kurien is the 'Father of the White Revolution in India'."
        },
        {
          "q": "Which Governor-General of British India is referred to as the 'Father of Indian Railways' for initiating the railway network in 1853?",
          "o": [
            "Lord Curzon",
            "Lord Dalhousie",
            "Lord Canning",
            "Lord Ripon"
          ],
          "a": 1,
          "e": "Lord Dalhousie is called the 'Father of Indian Railways'."
        },
        {
          "q": "Which classical Sanskrit poet and dramatist authored 'Abhijnanashakuntalam', 'Vikramorvasiyam', and 'Malavikagnimitram'?",
          "o": [
            "Kalidasa",
            "Bhasa",
            "Bhavabhuti",
            "Shudraka"
          ],
          "a": 0,
          "e": "Kalidasa authored the Sanskrit drama 'Abhijnanashakuntalam'."
        },
        {
          "q": "Which 7th-century court poet of Emperor Harshavardhana authored his biography 'Harshacharita' and the romantic novel 'Kadambari'?",
          "o": [
            "Dandin",
            "Ravikirti",
            "Harisena",
            "Banabhatta"
          ],
          "a": 3,
          "e": "Banabhatta was the Asthana Kavi of Harshavardhana and wrote 'Harshacharita' and 'Kadambari'."
        },
        {
          "q": "Who authored the iconic Partition novel 'Train to Pakistan' (1956) and 'A History of the Sikhs'?",
          "o": [
            "R. K. Narayan",
            "Mulk Raj Anand",
            "Khushwant Singh",
            "Ruskin Bond"
          ],
          "a": 2,
          "e": "Khushwant Singh authored 'Train to Pakistan'."
        },
        {
          "q": "Which pioneer Indian English novelist authored 'Untouchable' (1935) and 'Coolie' (1936)?",
          "o": [
            "R. K. Narayan",
            "Mulk Raj Anand",
            "Raja Rao",
            "Bhabani Bhattacharya"
          ],
          "a": 1,
          "e": "Mulk Raj Anand authored 'Untouchable' and 'Coolie'."
        },
        {
          "q": "Which nationalist Tamil poet and journalist is revered by the title 'Mahakavi Bharati' (Subramania Bharati)?",
          "o": [
            "C. Subramania Bharati",
            "Bharathidasan",
            "V. O. Chidambaram Pillai",
            "Tiruppur Kumaran"
          ],
          "a": 0,
          "e": "Subramania Bharati is revered as 'Mahakavi Bharati'."
        },
        {
          "q": "Which legendary actor-filmmaker of Hindi cinema (maker of 'Awaara', 'Shree 420', and 'Mera Naam Joker') is known as the 'Showman of Indian Cinema'?",
          "o": [
            "V. Shantaram",
            "Guru Dutt",
            "Bimal Roy",
            "Raj Kapoor"
          ],
          "a": 3,
          "e": "Raj Kapoor is known as the 'Showman of Indian Cinema'."
        },
        {
          "q": "Which acclaimed Indian filmmaker directed the classic films 'Pyaasa' (1957) and 'Kaagaz Ke Phool' (1959)?",
          "o": [
            "Mrinal Sen",
            "Satyajit Ray",
            "Guru Dutt",
            "Shyam Benegal"
          ],
          "a": 2,
          "e": "Guru Dutt directed and starred in 'Pyaasa' and 'Kaagaz Ke Phool'."
        },
        {
          "q": "Which Hindustani classical vocalist of the Kirana Gharana was honoured as the 'Khayal Maestro' and awarded the Bharat Ratna in 2008?",
          "o": [
            "Pandit Jasraj",
            "Pandit Bhimsen Joshi",
            "Kumar Gandharva",
            "Bade Ghulam Ali Khan"
          ],
          "a": 1,
          "e": "Pandit Bhimsen Joshi received the Bharat Ratna in 2008."
        },
        {
          "q": "Which world-renowned Indian classical musician and son of Ustad Alla Rakha was a legendary Tabla virtuoso?",
          "o": [
            "Ustad Zakir Hussain",
            "Ustad Amjad Ali Khan",
            "Pandit Hariprasad Chaurasia",
            "Pandit Shivkumar Sharma"
          ],
          "a": 0,
          "e": "Ustad Zakir Hussain was a globally acclaimed Tabla virtuoso."
        },
        {
          "q": "Which pioneer of modern Indian painting (born in Budapest in 1913) painted 'Three Girls' and is often called 'India's Frida Kahlo'?",
          "o": [
            "Nandalal Bose",
            "Anjolie Ela Menon",
            "Raja Ravi Varma",
            "Amrita Sher-Gil"
          ],
          "a": 3,
          "e": "Amrita Sher-Gil is one of the most important pioneers of 20th-century modern Indian painting."
        },
        {
          "q": "Who invented the tactile reading and writing system of raised dots for the visually impaired?",
          "o": [
            "Thomas Edison",
            "Alexander Graham Bell",
            "Louis Braille",
            "Johannes Gutenberg"
          ],
          "a": 2,
          "e": "French educator Louis Braille invented the Braille system."
        }
      ]
    ]
  },
  "acts_languages": {
    "key": "acts_languages",
    "name": "Languages of India (Principal Languages & Civics)",
    "shortBadge": "6 Sets • 100 Qs",
    "icon": "🗣️",
    "desc": "Part XVII (Arts. 343–351), Eighth Schedule (22 Languages & Amendments), 11 Classical Languages (2024 Update), Language Families, Scripts & J&K/Ladakh Official Languages. 60 Statement + 40 One-Liner Qs.",
    "subtitle": "Sets 1–4: Statement-Based (15 Qs / 15 Mins each) • Sets 5–6: High-Yield One-Liners (20 Qs / 20 Mins each) • JKSSB Assistant Compiler Level",
    "SET_TITLES": [
      "Set 1: Statement-Based Questions — Part I (15 Qs)",
      "Set 2: Statement-Based Questions — Part II (15 Qs)",
      "Set 3: Statement-Based Questions — Part III (15 Qs)",
      "Set 4: Statement-Based Questions — Part IV (15 Qs)",
      "Set 5: High-Frequency One-Liner MCQs — Part I (20 Qs)",
      "Set 6: High-Frequency One-Liner MCQs — Part II (20 Qs)"
    ],
    "sets": [
      [
        {
          "q": "With reference to 'National Language vs Official Language of the Union (Article 343)' (Languages of India), consider the following statements:\nStatement I: The Constitution of India does NOT declare any language as the 'National Language' of India.\nStatement II: Under Article 343(1) in Part XVII of the Constitution, the official language of the Union shall be Hindi in Devanagari script, and the form of numerals for official purposes of the Union shall be the international form of Indian numerals.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding National Language vs Official Language of the Union (Article 343)."
        },
        {
          "q": "Consider the following statements regarding 'Continuation of English in Union Official Business (Official Languages Act, 1963)' (Languages of India):\nStatement I: Article 343(2) initially provided for the continued use of the English language for official purposes of the Union for a period of 15 years from the commencement of the Constitution (i.e., up to 1965).\nStatement II: The Official Languages Act, 1963 completely banned the use of English in Union Government offices from 26 January 1965.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Article 343(2) initially provided for the continued use of the English language for official purposes of the Union for a period of 15 years from the commencement of the Constitution (i.e., up to 1965).). Statement II is incorrect: Section 3 of the Official Languages Act, 1963 expressly continued the use of English in addition to Hindi beyond 1965."
        },
        {
          "q": "With reference to 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope' (Languages of India), consider the following statements:\nStatement I: Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.\nStatement II: Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope."
        },
        {
          "q": "Consider the following statements regarding 'Articles 345, 346 & 347 — Regional / State Official Languages' (Languages of India):\nStatement I: Under Article 345, the Legislature of a State may by law adopt any one or more of the languages in use in the State or Hindi as the language or languages to be used for official purposes of that State.\nStatement II: Under Article 345, a State Legislature can only adopt a language that is listed in the Eighth Schedule of the Constitution.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Article 345, the Legislature of a State may by law adopt any one or more of the languages in use in the State or Hindi as the language or languages to be used for official purposes of that State.). Statement II is incorrect: A State Legislature under Article 345 can adopt 'any one or more of the languages in use in the State' (even if it is not in the Eighth Schedule, such as English in Nagaland/Arunachal Pradesh, Mizo in Mizoram, or Kokborok in Tripura)."
        },
        {
          "q": "With reference to 'Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts' (Languages of India), consider the following statements:\nStatement I: Under Article 348(1), until Parliament by law otherwise provides, all proceedings in the Supreme Court and in every High Court, and the authoritative texts of all Bills, Acts, Ordinances, orders, rules, and regulations at the Union and State levels, shall be in the English language.\nStatement II: Under Article 348(2), the Governor of a State may, with the previous consent of the President, authorize the use of Hindi or any other language used for official purposes of the State in proceedings in the High Court (though judgments, decrees, and orders must still be in English).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts."
        },
        {
          "q": "Consider the following statements regarding 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi' (Languages of India):\nStatement I: Under Article 350, every person is entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State.\nStatement II: Article 351 directs the Union to promote the spread of the English language across India.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Article 350, every person is entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State.). Statement II is incorrect: Article 351 is the directive for the development and spread of the Hindi language so that it may serve as a medium of expression for all elements of the composite culture of India, drawing primarily on Sanskrit and secondarily on other languages."
        },
        {
          "q": "With reference to 'Articles 120, 210, 29(1) & 30 — Parliament, State Legislatures & Fundamental Rights' (Languages of India), consider the following statements:\nStatement I: Article 120 deals with the language to be used in Parliament (Hindi or English, with the Chairman of Rajya Sabha or Speaker of Lok Sabha empowered to permit a member who cannot adequately express himself in either to speak in his mother-tongue); Article 210 contains the parallel provision for State Legislatures.\nStatement II: Under Fundamental Rights (Part III), Article 29(1) guarantees that any section of citizens residing in India having a distinct language, script, or culture of its own shall have the right to conserve the same, and Article 30 guarantees the right of religious and linguistic minorities to establish and administer educational institutions of their choice.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Articles 120, 210, 29(1) & 30 — Parliament, State Legislatures & Fundamental Rights."
        },
        {
          "q": "Consider the following statements regarding 'The Eighth Schedule — Evolution from 14 to 22 Scheduled Languages' (Languages of India):\nStatement I: The Eighth Schedule to the Constitution originally contained 14 languages in 1950; Sindhi was added as the 15th language by the 21st Constitutional Amendment Act, 1967.\nStatement II: The 96th Constitutional Amendment Act, 2011 added Bhojpuri as the 23rd language in the Eighth Schedule.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (The Eighth Schedule to the Constitution originally contained 14 languages in 1950; Sindhi was added as the 15th language by the 21st Constitutional Amendment Act, 1967.). Statement II is incorrect: The 96th Amendment Act, 2011 did NOT add any new language; it simply substituted the spelling 'Odia' for 'Oriya' in the Eighth Schedule."
        },
        {
          "q": "With reference to 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)' (Languages of India), consider the following statements:\nStatement I: The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.\nStatement II: English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)."
        },
        {
          "q": "Consider the following statements regarding '11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)' (Languages of India):\nStatement I: Between 2004 and 2014, six languages were granted Classical Language status in chronological order: Tamil (12 Oct 2004 — First), Sanskrit (25 Nov 2005), Kannada (31 Oct 2008), Telugu (31 Oct 2008), Malayalam (8 Aug 2013), and Odia (1 March 2014).\nStatement II: Sanskrit was the very first language in India to be accorded Classical Language status in 2004.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Between 2004 and 2014, six languages were granted Classical Language status in chronological order: Tamil (12 Oct 2004 — First), Sanskrit (25 Nov 2005), Kannada (31 Oct 2008), Telugu (31 Oct 2008), Malayalam (8 Aug 2013), and Odia (1 March 2014).). Statement II is incorrect: Tamil was the first language in India to be accorded Classical Language status (in October 2004), followed by Sanskrit in November 2005."
        },
        {
          "q": "With reference to 'Criteria for Classical Languages & Scheduled vs Classical Distinction' (Languages of India), consider the following statements:\nStatement I: The Government of India's criteria for declaring a language as 'Classical' include high antiquity of its early texts/recorded history over a period of 1,500–2,000 years, a body of ancient literature considered a valuable heritage by generations, knowledge texts (prose as well as poetry) and epigraphical/inscriptional evidence, and distinction from its modern form.\nStatement II: While 9 of the 11 Classical Languages (Tamil, Sanskrit, Kannada, Telugu, Malayalam, Odia, Marathi, Assamese, and Bengali) are also in the Eighth Schedule, Pali and Prakrit are recognized Classical Languages that are NOT in the Eighth Schedule.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Criteria for Classical Languages & Scheduled vs Classical Distinction."
        },
        {
          "q": "Consider the following statements regarding 'Language Families of India & Census 2011 Shares' (Languages of India):\nStatement I: According to Census of India 2011 (Statement 9), the Indo-European family's Indo-Aryan branch is the largest linguistic group in India, spoken by approximately 78.05% of the population, followed by the Dravidian family at 19.64%.\nStatement II: Khasi (spoken in Meghalaya) belongs to the Dravidian language family.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (According to Census of India 2011 (Statement 9), the Indo-European family's Indo-Aryan branch is the largest linguistic group in India, spoken by approximately 78.05% of the population, followed by the Dravidian family at 19.64%.). Statement II is incorrect: Khasi belongs to the Mon-Khmer branch of the Austro-Asiatic language family (along with Santali, Mundari, Ho, and Nicobarese)."
        },
        {
          "q": "With reference to 'Classification of Indian Languages into Families (Indo-Aryan, Dravidian, Austro-Asiatic, Tibeto-Burmese)' (Languages of India), consider the following statements:\nStatement I: Hindi, Bengali, Marathi, Gujarati, Punjabi, Assamese, Odia, Urdu, Kashmiri, Dogri, Konkani, Maithili, Nepali, Sindhi, and Sanskrit belong to the Indo-Aryan branch of the Indo-European family; Tamil, Telugu, Kannada, Malayalam, Tulu, Gondi, Kurukh, and Brahui belong to the Dravidian family.\nStatement II: Among the four languages added by the 92nd Amendment (2003), Bodo belongs to the Tibeto-Burmese family, Santali belongs to the Austro-Asiatic family, and Dogri and Maithili belong to the Indo-Aryan branch.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Classification of Indian Languages into Families (Indo-Aryan, Dravidian, Austro-Asiatic, Tibeto-Burmese)."
        },
        {
          "q": "Consider the following statements regarding 'Official Languages of J&K UT (2020 Act) vs Ladakh UT (2025 Regulation)' (Languages of India):\nStatement I: Under the Jammu and Kashmir Official Languages Act, 2020 (enacted 26 Sept 2020, enforced 29 Sept 2020), the Union Territory of Jammu and Kashmir has five official languages: Kashmiri, Dogri, Urdu, Hindi, and English (prior to 2020, Urdu was the sole official language).\nStatement II: Both Jammu & Kashmir UT and Ladakh UT have the exact same five official languages (Kashmiri, Dogri, Urdu, Hindi, and English).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under the Jammu and Kashmir Official Languages Act, 2020 (enacted 26 Sept 2020, enforced 29 Sept 2020), the Union Territory of Jammu and Kashmir has five official languages: Kashmiri, Dogri, Urdu, Hindi, and English (prior to 2020, Urdu was the sole official language).). Statement II is incorrect: While Urdu, Hindi, and English are common to both UTs, J&K UT has Kashmiri and Dogri, whereas Ladakh UT has Bhoti and Purgi under the 2025 Regulation."
        },
        {
          "q": "With reference to 'Scripts of Major Indian Languages & State/UT Language Associations' (Languages of India), consider the following statements:\nStatement I: Hindi, Marathi, Sanskrit, Nepali, Bodo, Maithili, and modern Dogri (historically written in Takri script) use the Devanagari script; Punjabi uses Gurmukhi in India; Santali uses the Ol Chiki script; and Manipuri (Meitei) uses Meitei Mayek and the Bengali-Assamese script.\nStatement II: Regarding regional associations: Konkani and Marathi are used in Goa; Kokborok and Bengali in Tripura; Khasi, Garo, and English in Meghalaya; English is the official state language in Nagaland and Arunachal Pradesh; and Malayalam along with Mahl (Dhivehi, on Minicoy Island) is spoken in Lakshadweep.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Scripts of Major Indian Languages & State/UT Language Associations."
        }
      ],
      [
        {
          "q": "Consider the following statements comparing 'National Language vs Official Language of the Union (Article 343)' and 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope':\nStatement I: Under Article 343(1) in Part XVII of the Constitution, the official language of the Union shall be Hindi in Devanagari script, and the form of numerals for official purposes of the Union shall be the international form of Indian numerals.\nStatement II: Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Article 343(1) in Part XVII of the Constitution, the official language of the Union shall be Hindi in Devanagari script, and the form of numerals for official purposes of the Union shall be the international form of Indian numerals. II: Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.)"
        },
        {
          "q": "Examine the following two statements regarding 'Continuation of English in Union Official Business (Official Languages Act, 1963)' and 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi':\nStatement I: The Official Languages Act, 1963 completely banned the use of English in Union Government offices from 26 January 1965.\nStatement II: Inserted by the 7th Constitutional Amendment Act, 1956, Article 350A directs every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups, and Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Section 3 of the Official Languages Act, 1963 expressly continued the use of English in addition to Hindi beyond 1965.). Statement II is correct (Inserted by the 7th Constitutional Amendment Act, 1956, Article 350A directs every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups, and Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President.)."
        },
        {
          "q": "Consider the following statements comparing 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope' and 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)':\nStatement I: Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha).\nStatement II: The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha). II: The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.)"
        },
        {
          "q": "Examine the following two statements regarding 'Articles 345, 346 & 347 — Regional / State Official Languages' and 'Language Families of India & Census 2011 Shares':\nStatement I: Under Article 345, a State Legislature can only adopt a language that is listed in the Eighth Schedule of the Constitution.\nStatement II: The Austro-Asiatic family (including Santali, Mundari, Ho, Khasi, and Nicobarese) accounts for about 1.11% of the population, and the Tibeto-Burmese (Sino-Tibetan) family (including Bodo, Manipuri/Meitei, Mizo, Garo, and Naga languages) accounts for about 1.01%.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (A State Legislature under Article 345 can adopt 'any one or more of the languages in use in the State' (even if it is not in the Eighth Schedule, such as English in Nagaland/Arunachal Pradesh, Mizo in Mizoram, or Kokborok in Tripura).). Statement II is correct (The Austro-Asiatic family (including Santali, Mundari, Ho, Khasi, and Nicobarese) accounts for about 1.11% of the population, and the Tibeto-Burmese (Sino-Tibetan) family (including Bodo, Manipuri/Meitei, Mizo, Garo, and Naga languages) accounts for about 1.01%.)."
        },
        {
          "q": "Consider the following statements comparing 'Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts' and 'Scripts of Major Indian Languages & State/UT Language Associations':\nStatement I: Under Article 348(2), the Governor of a State may, with the previous consent of the President, authorize the use of Hindi or any other language used for official purposes of the State in proceedings in the High Court (though judgments, decrees, and orders must still be in English).\nStatement II: Hindi, Marathi, Sanskrit, Nepali, Bodo, Maithili, and modern Dogri (historically written in Takri script) use the Devanagari script; Punjabi uses Gurmukhi in India; Santali uses the Ol Chiki script; and Manipuri (Meitei) uses Meitei Mayek and the Bengali-Assamese script.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Article 348(2), the Governor of a State may, with the previous consent of the President, authorize the use of Hindi or any other language used for official purposes of the State in proceedings in the High Court (though judgments, decrees, and orders must still be in English). II: Hindi, Marathi, Sanskrit, Nepali, Bodo, Maithili, and modern Dogri (historically written in Takri script) use the Devanagari script; Punjabi uses Gurmukhi in India; Santali uses the Ol Chiki script; and Manipuri (Meitei) uses Meitei Mayek and the Bengali-Assamese script.)"
        },
        {
          "q": "Examine the following two statements regarding 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi' and 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope':\nStatement I: Article 351 directs the Union to promote the spread of the English language across India.\nStatement II: Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Article 351 is the directive for the development and spread of the Hindi language so that it may serve as a medium of expression for all elements of the composite culture of India, drawing primarily on Sanskrit and secondarily on other languages.). Statement II is correct (Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha).)."
        },
        {
          "q": "Consider the following statements comparing 'Articles 120, 210, 29(1) & 30 — Parliament, State Legislatures & Fundamental Rights' and 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi':\nStatement I: Under Fundamental Rights (Part III), Article 29(1) guarantees that any section of citizens residing in India having a distinct language, script, or culture of its own shall have the right to conserve the same, and Article 30 guarantees the right of religious and linguistic minorities to establish and administer educational institutions of their choice.\nStatement II: Under Article 350, every person is entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Fundamental Rights (Part III), Article 29(1) guarantees that any section of citizens residing in India having a distinct language, script, or culture of its own shall have the right to conserve the same, and Article 30 guarantees the right of religious and linguistic minorities to establish and administer educational institutions of their choice. II: Under Article 350, every person is entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State.)"
        },
        {
          "q": "Examine the following two statements regarding 'The Eighth Schedule — Evolution from 14 to 22 Scheduled Languages' and 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)':\nStatement I: The 96th Constitutional Amendment Act, 2011 added Bhojpuri as the 23rd language in the Eighth Schedule.\nStatement II: English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (The 96th Amendment Act, 2011 did NOT add any new language; it simply substituted the spelling 'Odia' for 'Oriya' in the Eighth Schedule.). Statement II is correct (English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution.)."
        },
        {
          "q": "Consider the following statements comparing 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)' and 'Language Families of India & Census 2011 Shares':\nStatement I: English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution.\nStatement II: According to Census of India 2011 (Statement 9), the Indo-European family's Indo-Aryan branch is the largest linguistic group in India, spoken by approximately 78.05% of the population, followed by the Dravidian family at 19.64%.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution. II: According to Census of India 2011 (Statement 9), the Indo-European family's Indo-Aryan branch is the largest linguistic group in India, spoken by approximately 78.05% of the population, followed by the Dravidian family at 19.64%.)"
        },
        {
          "q": "Examine the following two statements regarding '11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)' and 'Scripts of Major Indian Languages & State/UT Language Associations':\nStatement I: Sanskrit was the very first language in India to be accorded Classical Language status in 2004.\nStatement II: Regarding regional associations: Konkani and Marathi are used in Goa; Kokborok and Bengali in Tripura; Khasi, Garo, and English in Meghalaya; English is the official state language in Nagaland and Arunachal Pradesh; and Malayalam along with Mahl (Dhivehi, on Minicoy Island) is spoken in Lakshadweep.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Tamil was the first language in India to be accorded Classical Language status (in October 2004), followed by Sanskrit in November 2005.). Statement II is correct (Regarding regional associations: Konkani and Marathi are used in Goa; Kokborok and Bengali in Tripura; Khasi, Garo, and English in Meghalaya; English is the official state language in Nagaland and Arunachal Pradesh; and Malayalam along with Mahl (Dhivehi, on Minicoy Island) is spoken in Lakshadweep.)."
        },
        {
          "q": "Consider the following statements comparing 'Criteria for Classical Languages & Scheduled vs Classical Distinction' and 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope':\nStatement I: While 9 of the 11 Classical Languages (Tamil, Sanskrit, Kannada, Telugu, Malayalam, Odia, Marathi, Assamese, and Bengali) are also in the Eighth Schedule, Pali and Prakrit are recognized Classical Languages that are NOT in the Eighth Schedule.\nStatement II: Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: While 9 of the 11 Classical Languages (Tamil, Sanskrit, Kannada, Telugu, Malayalam, Odia, Marathi, Assamese, and Bengali) are also in the Eighth Schedule, Pali and Prakrit are recognized Classical Languages that are NOT in the Eighth Schedule. II: Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.)"
        },
        {
          "q": "Examine the following two statements regarding 'Language Families of India & Census 2011 Shares' and 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi':\nStatement I: Khasi (spoken in Meghalaya) belongs to the Dravidian language family.\nStatement II: Inserted by the 7th Constitutional Amendment Act, 1956, Article 350A directs every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups, and Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Khasi belongs to the Mon-Khmer branch of the Austro-Asiatic language family (along with Santali, Mundari, Ho, and Nicobarese).). Statement II is correct (Inserted by the 7th Constitutional Amendment Act, 1956, Article 350A directs every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups, and Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President.)."
        },
        {
          "q": "Consider the following statements comparing 'Classification of Indian Languages into Families (Indo-Aryan, Dravidian, Austro-Asiatic, Tibeto-Burmese)' and 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)':\nStatement I: Among the four languages added by the 92nd Amendment (2003), Bodo belongs to the Tibeto-Burmese family, Santali belongs to the Austro-Asiatic family, and Dogri and Maithili belong to the Indo-Aryan branch.\nStatement II: The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Among the four languages added by the 92nd Amendment (2003), Bodo belongs to the Tibeto-Burmese family, Santali belongs to the Austro-Asiatic family, and Dogri and Maithili belong to the Indo-Aryan branch. II: The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.)"
        },
        {
          "q": "Examine the following two statements regarding 'Official Languages of J&K UT (2020 Act) vs Ladakh UT (2025 Regulation)' and 'Language Families of India & Census 2011 Shares':\nStatement I: Both Jammu & Kashmir UT and Ladakh UT have the exact same five official languages (Kashmiri, Dogri, Urdu, Hindi, and English).\nStatement II: The Austro-Asiatic family (including Santali, Mundari, Ho, Khasi, and Nicobarese) accounts for about 1.11% of the population, and the Tibeto-Burmese (Sino-Tibetan) family (including Bodo, Manipuri/Meitei, Mizo, Garo, and Naga languages) accounts for about 1.01%.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (While Urdu, Hindi, and English are common to both UTs, J&K UT has Kashmiri and Dogri, whereas Ladakh UT has Bhoti and Purgi under the 2025 Regulation.). Statement II is correct (The Austro-Asiatic family (including Santali, Mundari, Ho, Khasi, and Nicobarese) accounts for about 1.11% of the population, and the Tibeto-Burmese (Sino-Tibetan) family (including Bodo, Manipuri/Meitei, Mizo, Garo, and Naga languages) accounts for about 1.01%.)."
        },
        {
          "q": "Consider the following statements comparing 'Scripts of Major Indian Languages & State/UT Language Associations' and 'National Language vs Official Language of the Union (Article 343)':\nStatement I: Regarding regional associations: Konkani and Marathi are used in Goa; Kokborok and Bengali in Tripura; Khasi, Garo, and English in Meghalaya; English is the official state language in Nagaland and Arunachal Pradesh; and Malayalam along with Mahl (Dhivehi, on Minicoy Island) is spoken in Lakshadweep.\nStatement II: The Constitution of India does NOT declare any language as the 'National Language' of India.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Regarding regional associations: Konkani and Marathi are used in Goa; Kokborok and Bengali in Tripura; Khasi, Garo, and English in Meghalaya; English is the official state language in Nagaland and Arunachal Pradesh; and Malayalam along with Mahl (Dhivehi, on Minicoy Island) is spoken in Lakshadweep. II: The Constitution of India does NOT declare any language as the 'National Language' of India.)"
        }
      ],
      [
        {
          "q": "With reference to Languages of India ('National Language vs Official Language of the Union (Article 343)', 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope', and 'Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts'), consider the following three statements:\nI. The Constitution of India does NOT declare any language as the 'National Language' of India.\nII. Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha).\nIII. Article 348 mandates that all proceedings in the Supreme Court of India must be conducted in Hindi.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Article 348(1), all proceedings in the Supreme Court are conducted in English unless Parliament by law provides otherwise."
        },
        {
          "q": "With reference to Languages of India ('Continuation of English in Union Official Business (Official Languages Act, 1963)', 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi', and '11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)'), consider the following three statements:\nI. Article 343(2) initially provided for the continued use of the English language for official purposes of the Union for a period of 15 years from the commencement of the Constitution (i.e., up to 1965).\nII. Inserted by the 7th Constitutional Amendment Act, 1956, Article 350A directs every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups, and Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President.\nIII. Sanskrit was the very first language in India to be accorded Classical Language status in 2004.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Tamil was the first language in India to be accorded Classical Language status (in October 2004), followed by Sanskrit in November 2005."
        },
        {
          "q": "With reference to Languages of India ('Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope', 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)', and 'Scripts of Major Indian Languages & State/UT Language Associations'), consider the following three statements:\nI. Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.\nII. English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution.\nIII. Santali is traditionally written in the Gurmukhi script.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Santali is written in the 'Ol Chiki' script (devised by Pandit Raghunath Murmu in 1925), whereas Punjabi is written in the Gurmukhi script."
        },
        {
          "q": "With reference to Languages of India ('Articles 345, 346 & 347 — Regional / State Official Languages', 'Language Families of India & Census 2011 Shares', and 'Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts'), consider the following three statements:\nI. Under Article 345, the Legislature of a State may by law adopt any one or more of the languages in use in the State or Hindi as the language or languages to be used for official purposes of that State.\nII. The Austro-Asiatic family (including Santali, Mundari, Ho, Khasi, and Nicobarese) accounts for about 1.11% of the population, and the Tibeto-Burmese (Sino-Tibetan) family (including Bodo, Manipuri/Meitei, Mizo, Garo, and Naga languages) accounts for about 1.01%.\nIII. Article 348 mandates that all proceedings in the Supreme Court of India must be conducted in Hindi.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Article 348(1), all proceedings in the Supreme Court are conducted in English unless Parliament by law provides otherwise."
        },
        {
          "q": "With reference to Languages of India ('Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts', 'Scripts of Major Indian Languages & State/UT Language Associations', and '11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)'), consider the following three statements:\nI. Under Article 348(1), until Parliament by law otherwise provides, all proceedings in the Supreme Court and in every High Court, and the authoritative texts of all Bills, Acts, Ordinances, orders, rules, and regulations at the Union and State levels, shall be in the English language.\nII. Regarding regional associations: Konkani and Marathi are used in Goa; Kokborok and Bengali in Tripura; Khasi, Garo, and English in Meghalaya; English is the official state language in Nagaland and Arunachal Pradesh; and Malayalam along with Mahl (Dhivehi, on Minicoy Island) is spoken in Lakshadweep.\nIII. Sanskrit was the very first language in India to be accorded Classical Language status in 2004.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Tamil was the first language in India to be accorded Classical Language status (in October 2004), followed by Sanskrit in November 2005."
        },
        {
          "q": "With reference to Languages of India ('Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi', 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope', and 'Scripts of Major Indian Languages & State/UT Language Associations'), consider the following three statements:\nI. Under Article 350, every person is entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State.\nII. Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha).\nIII. Santali is traditionally written in the Gurmukhi script.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Santali is written in the 'Ol Chiki' script (devised by Pandit Raghunath Murmu in 1925), whereas Punjabi is written in the Gurmukhi script."
        },
        {
          "q": "With reference to Languages of India ('Articles 120, 210, 29(1) & 30 — Parliament, State Legislatures & Fundamental Rights', 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi', and 'Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts'), consider the following three statements:\nI. Article 120 deals with the language to be used in Parliament (Hindi or English, with the Chairman of Rajya Sabha or Speaker of Lok Sabha empowered to permit a member who cannot adequately express himself in either to speak in his mother-tongue); Article 210 contains the parallel provision for State Legislatures.\nII. Inserted by the 7th Constitutional Amendment Act, 1956, Article 350A directs every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups, and Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President.\nIII. Article 348 mandates that all proceedings in the Supreme Court of India must be conducted in Hindi.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Article 348(1), all proceedings in the Supreme Court are conducted in English unless Parliament by law provides otherwise."
        },
        {
          "q": "With reference to Languages of India ('The Eighth Schedule — Evolution from 14 to 22 Scheduled Languages', 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)', and '11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)'), consider the following three statements:\nI. The Eighth Schedule to the Constitution originally contained 14 languages in 1950; Sindhi was added as the 15th language by the 21st Constitutional Amendment Act, 1967.\nII. English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution.\nIII. Sanskrit was the very first language in India to be accorded Classical Language status in 2004.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Tamil was the first language in India to be accorded Classical Language status (in October 2004), followed by Sanskrit in November 2005."
        },
        {
          "q": "With reference to Languages of India ('Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)', 'Language Families of India & Census 2011 Shares', and 'Scripts of Major Indian Languages & State/UT Language Associations'), consider the following three statements:\nI. The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.\nII. The Austro-Asiatic family (including Santali, Mundari, Ho, Khasi, and Nicobarese) accounts for about 1.11% of the population, and the Tibeto-Burmese (Sino-Tibetan) family (including Bodo, Manipuri/Meitei, Mizo, Garo, and Naga languages) accounts for about 1.01%.\nIII. Santali is traditionally written in the Gurmukhi script.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Santali is written in the 'Ol Chiki' script (devised by Pandit Raghunath Murmu in 1925), whereas Punjabi is written in the Gurmukhi script."
        },
        {
          "q": "With reference to Languages of India ('11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)', 'Scripts of Major Indian Languages & State/UT Language Associations', and 'Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts'), consider the following three statements:\nI. Between 2004 and 2014, six languages were granted Classical Language status in chronological order: Tamil (12 Oct 2004 — First), Sanskrit (25 Nov 2005), Kannada (31 Oct 2008), Telugu (31 Oct 2008), Malayalam (8 Aug 2013), and Odia (1 March 2014).\nII. Regarding regional associations: Konkani and Marathi are used in Goa; Kokborok and Bengali in Tripura; Khasi, Garo, and English in Meghalaya; English is the official state language in Nagaland and Arunachal Pradesh; and Malayalam along with Mahl (Dhivehi, on Minicoy Island) is spoken in Lakshadweep.\nIII. Article 348 mandates that all proceedings in the Supreme Court of India must be conducted in Hindi.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Article 348(1), all proceedings in the Supreme Court are conducted in English unless Parliament by law provides otherwise."
        },
        {
          "q": "With reference to Languages of India ('Criteria for Classical Languages & Scheduled vs Classical Distinction', 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope', and '11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)'), consider the following three statements:\nI. The Government of India's criteria for declaring a language as 'Classical' include high antiquity of its early texts/recorded history over a period of 1,500–2,000 years, a body of ancient literature considered a valuable heritage by generations, knowledge texts (prose as well as poetry) and epigraphical/inscriptional evidence, and distinction from its modern form.\nII. Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha).\nIII. Sanskrit was the very first language in India to be accorded Classical Language status in 2004.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Tamil was the first language in India to be accorded Classical Language status (in October 2004), followed by Sanskrit in November 2005."
        },
        {
          "q": "With reference to Languages of India ('Language Families of India & Census 2011 Shares', 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi', and 'Scripts of Major Indian Languages & State/UT Language Associations'), consider the following three statements:\nI. According to Census of India 2011 (Statement 9), the Indo-European family's Indo-Aryan branch is the largest linguistic group in India, spoken by approximately 78.05% of the population, followed by the Dravidian family at 19.64%.\nII. Inserted by the 7th Constitutional Amendment Act, 1956, Article 350A directs every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups, and Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President.\nIII. Santali is traditionally written in the Gurmukhi script.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Santali is written in the 'Ol Chiki' script (devised by Pandit Raghunath Murmu in 1925), whereas Punjabi is written in the Gurmukhi script."
        },
        {
          "q": "With reference to Languages of India ('Classification of Indian Languages into Families (Indo-Aryan, Dravidian, Austro-Asiatic, Tibeto-Burmese)', 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)', and 'Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts'), consider the following three statements:\nI. Hindi, Bengali, Marathi, Gujarati, Punjabi, Assamese, Odia, Urdu, Kashmiri, Dogri, Konkani, Maithili, Nepali, Sindhi, and Sanskrit belong to the Indo-Aryan branch of the Indo-European family; Tamil, Telugu, Kannada, Malayalam, Tulu, Gondi, Kurukh, and Brahui belong to the Dravidian family.\nII. English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution.\nIII. Article 348 mandates that all proceedings in the Supreme Court of India must be conducted in Hindi.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Article 348(1), all proceedings in the Supreme Court are conducted in English unless Parliament by law provides otherwise."
        },
        {
          "q": "With reference to Languages of India ('Official Languages of J&K UT (2020 Act) vs Ladakh UT (2025 Regulation)', 'Language Families of India & Census 2011 Shares', and '11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)'), consider the following three statements:\nI. Under the Jammu and Kashmir Official Languages Act, 2020 (enacted 26 Sept 2020, enforced 29 Sept 2020), the Union Territory of Jammu and Kashmir has five official languages: Kashmiri, Dogri, Urdu, Hindi, and English (prior to 2020, Urdu was the sole official language).\nII. The Austro-Asiatic family (including Santali, Mundari, Ho, Khasi, and Nicobarese) accounts for about 1.11% of the population, and the Tibeto-Burmese (Sino-Tibetan) family (including Bodo, Manipuri/Meitei, Mizo, Garo, and Naga languages) accounts for about 1.01%.\nIII. Sanskrit was the very first language in India to be accorded Classical Language status in 2004.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Tamil was the first language in India to be accorded Classical Language status (in October 2004), followed by Sanskrit in November 2005."
        },
        {
          "q": "With reference to Languages of India ('Scripts of Major Indian Languages & State/UT Language Associations', 'National Language vs Official Language of the Union (Article 343)', and 'Continuation of English in Union Official Business (Official Languages Act, 1963)'), consider the following three statements:\nI. Hindi, Marathi, Sanskrit, Nepali, Bodo, Maithili, and modern Dogri (historically written in Takri script) use the Devanagari script; Punjabi uses Gurmukhi in India; Santali uses the Ol Chiki script; and Manipuri (Meitei) uses Meitei Mayek and the Bengali-Assamese script.\nII. Under Article 343(1) in Part XVII of the Constitution, the official language of the Union shall be Hindi in Devanagari script, and the form of numerals for official purposes of the Union shall be the international form of Indian numerals.\nIII. The Official Languages Act, 1963 completely banned the use of English in Union Government offices from 26 January 1965.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Section 3 of the Official Languages Act, 1963 expressly continued the use of English in addition to Hindi beyond 1965."
        }
      ],
      [
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'National Language vs Official Language of the Union (Article 343)' and 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope'):\nI. Under Article 343(1) in Part XVII of the Constitution, the official language of the Union shall be Hindi in Devanagari script, and the form of numerals for official purposes of the Union shall be the international form of Indian numerals.\nII. Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.\nIII. Article 343 declares Hindi as the National Language of India and Devanagari numerals as the official numerals of the Union.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Hindi is the 'Official Language of the Union' (not National Language), and Article 343(1) specifies the 'international form of Indian numerals' (1, 2, 3...) rather than Devanagari numerals."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Continuation of English in Union Official Business (Official Languages Act, 1963)' and 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi'):\nI. Under Article 343(3), Parliament enacted the Official Languages Act, 1963, whose Section 3 continues the use of English in addition to Hindi for official purposes of the Union and for the transaction of business in Parliament.\nII. Under Article 350, every person is entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State.\nIII. The Official Languages Act, 1963 completely banned the use of English in Union Government offices from 26 January 1965.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Section 3 of the Official Languages Act, 1963 expressly continued the use of English in addition to Hindi beyond 1965."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope' and 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)'):\nI. Article 344 provides for the appointment of an Official Language Commission by the President and a 30-member Parliamentary Committee on Official Language (20 from Lok Sabha and 10 from Rajya Sabha).\nII. The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.\nIII. Part XVII of the Constitution spans Articles 330 to 342.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Articles 330 to 342 (Part XVI) deal with Special Provisions relating to certain classes (SC/ST), whereas Part XVII (Articles 343 to 351) deals with Official Language."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Articles 345, 346 & 347 — Regional / State Official Languages' and 'Language Families of India & Census 2011 Shares'):\nI. Article 346 governs the official language for communication between one State and another or between a State and the Union, while Article 347 empowers the President to direct official recognition of a language spoken by a substantial proportion of a State's population.\nII. According to Census of India 2011 (Statement 9), the Indo-European family's Indo-Aryan branch is the largest linguistic group in India, spoken by approximately 78.05% of the population, followed by the Dravidian family at 19.64%.\nIII. Under Article 345, a State Legislature can only adopt a language that is listed in the Eighth Schedule of the Constitution.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: A State Legislature under Article 345 can adopt 'any one or more of the languages in use in the State' (even if it is not in the Eighth Schedule, such as English in Nagaland/Arunachal Pradesh, Mizo in Mizoram, or Kokborok in Tripura)."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Article 348 & Article 349 — Language of Supreme Court, High Courts, Bills & Acts' and 'Scripts of Major Indian Languages & State/UT Language Associations'):\nI. Under Article 348(2), the Governor of a State may, with the previous consent of the President, authorize the use of Hindi or any other language used for official purposes of the State in proceedings in the High Court (though judgments, decrees, and orders must still be in English).\nII. Hindi, Marathi, Sanskrit, Nepali, Bodo, Maithili, and modern Dogri (historically written in Takri script) use the Devanagari script; Punjabi uses Gurmukhi in India; Santali uses the Ol Chiki script; and Manipuri (Meitei) uses Meitei Mayek and the Bengali-Assamese script.\nIII. Article 348 mandates that all proceedings in the Supreme Court of India must be conducted in Hindi.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Under Article 348(1), all proceedings in the Supreme Court are conducted in English unless Parliament by law provides otherwise."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi' and 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope'):\nI. Inserted by the 7th Constitutional Amendment Act, 1956, Article 350A directs every State and local authority to endeavour to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups, and Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President.\nII. Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.\nIII. Article 351 directs the Union to promote the spread of the English language across India.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Article 351 is the directive for the development and spread of the Hindi language so that it may serve as a medium of expression for all elements of the composite culture of India, drawing primarily on Sanskrit and secondarily on other languages."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Articles 120, 210, 29(1) & 30 — Parliament, State Legislatures & Fundamental Rights' and 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi'):\nI. Under Fundamental Rights (Part III), Article 29(1) guarantees that any section of citizens residing in India having a distinct language, script, or culture of its own shall have the right to conserve the same, and Article 30 guarantees the right of religious and linguistic minorities to establish and administer educational institutions of their choice.\nII. Under Article 350, every person is entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State.\nIII. Article 120 deals with the official language of the Supreme Court.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Article 120 deals with the language to be used in Parliament, whereas Article 348 deals with the language of the Supreme Court and High Courts."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'The Eighth Schedule — Evolution from 14 to 22 Scheduled Languages' and 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)'):\nI. The 71st Amendment Act, 1992 added 3 languages—Konkani, Manipuri (Meitei), and Nepali (taking the total to 18)—and the 92nd Amendment Act, 2003 (effective 2004) added 4 languages—Bodo, Dogri, Maithili, and Santali—bringing the current total to 22 Scheduled Languages.\nII. The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.\nIII. The 96th Constitutional Amendment Act, 2011 added Bhojpuri as the 23rd language in the Eighth Schedule.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: The 96th Amendment Act, 2011 did NOT add any new language; it simply substituted the spelling 'Odia' for 'Oriya' in the Eighth Schedule."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)' and 'Language Families of India & Census 2011 Shares'):\nI. English, Bhojpuri, Rajasthani, Tulu, Khasi, Garo, Mizo, Kokborok, Gondi, Bhili, Bhoti, Purgi, Pali, and Prakrit are NOT listed in the Eighth Schedule of the Constitution.\nII. According to Census of India 2011 (Statement 9), the Indo-European family's Indo-Aryan branch is the largest linguistic group in India, spoken by approximately 78.05% of the population, followed by the Dravidian family at 19.64%.\nIII. English and Bhojpuri are both included among the 22 Scheduled Languages in the Eighth Schedule.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Neither English nor Bhojpuri is included in the Eighth Schedule."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on '11 Classical Languages of India — 6 Earlier (2004–2014) + 5 New (October 2024)' and 'Scripts of Major Indian Languages & State/UT Language Associations'):\nI. In October 2024 (Cabinet approval 3 Oct 2024, notified 4 Oct 2024), the Government of India accorded Classical Language status to five more languages—Marathi, Assamese, Bengali (Bangla), Pali, and Prakrit—taking the total number of Classical Languages of India to 11.\nII. Hindi, Marathi, Sanskrit, Nepali, Bodo, Maithili, and modern Dogri (historically written in Takri script) use the Devanagari script; Punjabi uses Gurmukhi in India; Santali uses the Ol Chiki script; and Manipuri (Meitei) uses Meitei Mayek and the Bengali-Assamese script.\nIII. Sanskrit was the very first language in India to be accorded Classical Language status in 2004.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Tamil was the first language in India to be accorded Classical Language status (in October 2004), followed by Sanskrit in November 2005."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Criteria for Classical Languages & Scheduled vs Classical Distinction' and 'Part XVII of the Constitution (Articles 343 to 351) — Structure & Scope'):\nI. While 9 of the 11 Classical Languages (Tamil, Sanskrit, Kannada, Telugu, Malayalam, Odia, Marathi, Assamese, and Bengali) are also in the Eighth Schedule, Pali and Prakrit are recognized Classical Languages that are NOT in the Eighth Schedule.\nII. Part XVII of the Indian Constitution, spanning Articles 343 to 351, deals with 'Official Language' and is divided into four chapters: Language of the Union, Regional Languages, Language of the Supreme Court/High Courts, and Special Directives.\nIII. Every Classical Language of India must necessarily be one of the 22 Scheduled Languages in the Eighth Schedule.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Pali (associated with Buddhist canon) and Prakrit (associated with Jain Agamas and ancient inscriptions) were recognized as Classical Languages in October 2024 even though they are not in the Eighth Schedule."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Language Families of India & Census 2011 Shares' and 'Articles 350, 350A, 350B & 351 — Special Directives for Linguistic Protection & Hindi'):\nI. The Austro-Asiatic family (including Santali, Mundari, Ho, Khasi, and Nicobarese) accounts for about 1.11% of the population, and the Tibeto-Burmese (Sino-Tibetan) family (including Bodo, Manipuri/Meitei, Mizo, Garo, and Naga languages) accounts for about 1.01%.\nII. Under Article 350, every person is entitled to submit a representation for the redress of any grievance to any officer or authority of the Union or a State in any of the languages used in the Union or in the State.\nIII. Khasi (spoken in Meghalaya) belongs to the Dravidian language family.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Khasi belongs to the Mon-Khmer branch of the Austro-Asiatic language family (along with Santali, Mundari, Ho, and Nicobarese)."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Classification of Indian Languages into Families (Indo-Aryan, Dravidian, Austro-Asiatic, Tibeto-Burmese)' and 'Which Languages Are IN vs NOT IN the Eighth Schedule (Major Exam Trap)'):\nI. Among the four languages added by the 92nd Amendment (2003), Bodo belongs to the Tibeto-Burmese family, Santali belongs to the Austro-Asiatic family, and Dogri and Maithili belong to the Indo-Aryan branch.\nII. The 22 Scheduled Languages in the Eighth Schedule are: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.\nIII. All 22 Scheduled Languages in the Eighth Schedule belong exclusively to the Indo-Aryan and Dravidian language families.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: The 22 Scheduled Languages span four families/branches: 15 Indo-Aryan, 4 Dravidian (Tamil, Telugu, Kannada, Malayalam), 1 Austro-Asiatic (Santali), and 2 Tibeto-Burmese (Bodo and Manipuri/Meitei)."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Official Languages of J&K UT (2020 Act) vs Ladakh UT (2025 Regulation)' and 'Language Families of India & Census 2011 Shares'):\nI. Under the Ladakh Official Languages Regulation, 2025, the Union Territory of Ladakh has five official languages: Bhoti, Urdu, Purgi, Hindi, and English.\nII. According to Census of India 2011 (Statement 9), the Indo-European family's Indo-Aryan branch is the largest linguistic group in India, spoken by approximately 78.05% of the population, followed by the Dravidian family at 19.64%.\nIII. Both Jammu & Kashmir UT and Ladakh UT have the exact same five official languages (Kashmiri, Dogri, Urdu, Hindi, and English).\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: While Urdu, Hindi, and English are common to both UTs, J&K UT has Kashmiri and Dogri, whereas Ladakh UT has Bhoti and Purgi under the 2025 Regulation."
        },
        {
          "q": "Consider the following three statements under Languages of India (focusing on 'Scripts of Major Indian Languages & State/UT Language Associations' and 'National Language vs Official Language of the Union (Article 343)'):\nI. Regarding regional associations: Konkani and Marathi are used in Goa; Kokborok and Bengali in Tripura; Khasi, Garo, and English in Meghalaya; English is the official state language in Nagaland and Arunachal Pradesh; and Malayalam along with Mahl (Dhivehi, on Minicoy Island) is spoken in Lakshadweep.\nII. The Constitution of India does NOT declare any language as the 'National Language' of India.\nIII. Santali is traditionally written in the Gurmukhi script.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Santali is written in the 'Ol Chiki' script (devised by Pandit Raghunath Murmu in 1925), whereas Punjabi is written in the Gurmukhi script."
        }
      ],
      [
        {
          "q": "Which Part and Articles of the Constitution of India deal with 'Official Language'?",
          "o": [
            "Part XVI (Articles 330 to 342)",
            "Part XVII (Articles 343 to 351)",
            "Part XV (Articles 324 to 329)",
            "Part XVIII (Articles 352 to 360)"
          ],
          "a": 1,
          "e": "Part XVII of the Constitution (Articles 343 to 351) deals with Official Language."
        },
        {
          "q": "Which Article of the Constitution declares that the official language of the Union shall be Hindi in Devanagari script?",
          "o": [
            "Article 343",
            "Article 344",
            "Article 345",
            "Article 351"
          ],
          "a": 0,
          "e": "Article 343(1) declares Hindi in Devanagari script as the official language of the Union."
        },
        {
          "q": "Does the Constitution of India declare any language as the 'National Language' of India?",
          "o": [
            "Yes, both Hindi and English",
            "Yes, Hindi under Article 343",
            "Yes, Sanskrit under Article 351",
            "No, the Constitution does not declare any National Language"
          ],
          "a": 3,
          "e": "India has no constitutionally declared National Language; Hindi is the Official Language of the Union."
        },
        {
          "q": "Under which Act of Parliament does the English language continue to be used in addition to Hindi for official purposes of the Union?",
          "o": [
            "Representation of the People Act, 1951",
            "Official Languages Act, 1950",
            "Official Languages Act, 1963 (Section 3)",
            "States Reorganisation Act, 1956"
          ],
          "a": 2,
          "e": "Section 3 of the Official Languages Act, 1963 provides for the continued use of English in addition to Hindi for Union official purposes and in Parliament."
        },
        {
          "q": "How many languages are currently listed in the Eighth Schedule to the Constitution of India?",
          "o": [
            "14 languages",
            "22 languages",
            "18 languages",
            "25 languages"
          ],
          "a": 1,
          "e": "There are 22 Scheduled Languages in the Eighth Schedule."
        },
        {
          "q": "How many languages were originally included in the Eighth Schedule when the Constitution commenced on 26 January 1950?",
          "o": [
            "14 languages",
            "15 languages",
            "18 languages",
            "12 languages"
          ],
          "a": 0,
          "e": "Originally in 1950, the Eighth Schedule contained 14 languages."
        },
        {
          "q": "Which language was added as the 15th language to the Eighth Schedule by the 21st Constitutional Amendment Act, 1967?",
          "o": [
            "Dogri",
            "Konkani",
            "Nepali",
            "Sindhi"
          ],
          "a": 3,
          "e": "Sindhi was added to the Eighth Schedule by the 21st Amendment Act of 1967."
        },
        {
          "q": "Which three languages were added to the Eighth Schedule by the 71st Constitutional Amendment Act, 1992?",
          "o": [
            "Sindhi, Konkani, and Santali",
            "Bodo, Dogri, and Maithili",
            "Konkani, Manipuri (Meitei), and Nepali",
            "Nepali, Bodo, and Tulu"
          ],
          "a": 2,
          "e": "The 71st Amendment Act, 1992 (Mnemonic: 'NaMaK') added Nepali, Manipuri, and Konkani."
        },
        {
          "q": "Which four languages were added to the Eighth Schedule by the 92nd Constitutional Amendment Act, 2003 (effective 2004)?",
          "o": [
            "Konkani, Manipuri, Nepali, and Sindhi",
            "Bodo, Dogri, Maithili, and Santali",
            "Bodo, Dogri, Bhojpuri, and Rajasthani",
            "Maithili, Santali, Khasi, and Mizo"
          ],
          "a": 1,
          "e": "The 92nd Amendment Act, 2003 (Mnemonic: 'BDMS') added Bodo, Dogri, Maithili, and Santali."
        },
        {
          "q": "Which Constitutional Amendment Act in 2011 changed the spelling of 'Oriya' to 'Odia' in the Eighth Schedule?",
          "o": [
            "96th Constitutional Amendment Act, 2011",
            "92nd Constitutional Amendment Act, 2003",
            "97th Constitutional Amendment Act, 2011",
            "100th Constitutional Amendment Act, 2015"
          ],
          "a": 0,
          "e": "The 96th Amendment Act of 2011 substituted 'Odia' for 'Oriya' in the Eighth Schedule."
        },
        {
          "q": "Which of the following languages is NOT included in the Eighth Schedule of the Indian Constitution?",
          "o": [
            "Sindhi",
            "Dogri",
            "Santali",
            "Bhojpuri (and English)"
          ],
          "a": 3,
          "e": "Neither Bhojpuri nor English is included in the Eighth Schedule."
        },
        {
          "q": "Which Article of the Constitution provides for the appointment of a Commission and a Committee of Parliament on Official Language?",
          "o": [
            "Article 346",
            "Article 343",
            "Article 344",
            "Article 350B"
          ],
          "a": 2,
          "e": "Article 344 provides for the Official Language Commission and the 30-member Parliamentary Committee on Official Language."
        },
        {
          "q": "Which Article empowers the Legislature of a State to adopt one or more languages in use in the State (or Hindi) as the official language(s) of that State?",
          "o": [
            "Article 343",
            "Article 345",
            "Article 348",
            "Article 351"
          ],
          "a": 1,
          "e": "Article 345 deals with the official language or languages of a State."
        },
        {
          "q": "Which Article provides that until Parliament by law otherwise provides, all proceedings in the Supreme Court and in every High Court shall be in the English language?",
          "o": [
            "Article 348",
            "Article 345",
            "Article 347",
            "Article 350"
          ],
          "a": 0,
          "e": "Article 348 deals with the language to be used in the Supreme Court and High Courts and for Acts, Bills, etc."
        },
        {
          "q": "Which Article directs every State and local authority to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children of linguistic minority groups?",
          "o": [
            "Article 351",
            "Article 350",
            "Article 350B",
            "Article 350A"
          ],
          "a": 3,
          "e": "Article 350A (inserted by the 7th Amendment Act, 1956) provides for mother-tongue instruction at the primary stage."
        },
        {
          "q": "Which Article of the Constitution provides for the appointment of a 'Special Officer for Linguistic Minorities' by the President of India?",
          "o": [
            "Article 347",
            "Article 350A",
            "Article 350B",
            "Article 338"
          ],
          "a": 2,
          "e": "Article 350B provides for a Special Officer for Linguistic Minorities."
        },
        {
          "q": "Which Article of the Constitution contains the directive to the Union for the development and spread of the Hindi language?",
          "o": [
            "Article 343",
            "Article 351",
            "Article 348",
            "Article 350"
          ],
          "a": 1,
          "e": "Article 351 directs the Union to promote the spread and development of the Hindi language."
        },
        {
          "q": "Which Article of the Constitution governs the language to be used in Parliament (Hindi or English, or mother-tongue with permission)?",
          "o": [
            "Article 120",
            "Article 210",
            "Article 343",
            "Article 348"
          ],
          "a": 0,
          "e": "Article 120 deals with the language to be used in Parliament (while Article 210 deals with State Legislatures)."
        },
        {
          "q": "Under Fundamental Rights, which Article guarantees that any section of citizens having a distinct language, script, or culture of its own shall have the right to conserve the same?",
          "o": [
            "Article 25",
            "Article 30(1)",
            "Article 19(1)(a)",
            "Article 29(1)"
          ],
          "a": 3,
          "e": "Article 29(1) protects the right of any section of citizens to conserve its distinct language, script, or culture."
        },
        {
          "q": "How many languages in India currently hold the status of 'Classical Language' after the five new additions approved in October 2024?",
          "o": [
            "8 Classical Languages",
            "6 Classical Languages",
            "11 Classical Languages",
            "12 Classical Languages"
          ],
          "a": 2,
          "e": "With the addition of 5 languages in October 2024, India now recognizes 11 Classical Languages."
        }
      ],
      [
        {
          "q": "Which was the FIRST language in India to be accorded 'Classical Language' status by the Government of India in October 2004?",
          "o": [
            "Sanskrit",
            "Tamil",
            "Kannada",
            "Telugu"
          ],
          "a": 1,
          "e": "Tamil was the first language declared as a Classical Language on 12 October 2004 (followed by Sanskrit in November 2005)."
        },
        {
          "q": "Which five languages were newly granted 'Classical Language' status by the Union Cabinet in October 2024?",
          "o": [
            "Marathi, Assamese, Bengali, Pali, and Prakrit",
            "Marathi, Gujarati, Punjabi, Pali, and Prakrit",
            "Maithili, Bodo, Dogri, Santali, and Konkani",
            "Urdu, Kashmiri, Sindhi, Nepali, and Manipuri"
          ],
          "a": 0,
          "e": "On 3–4 October 2024, Marathi, Assamese, Bengali, Pali, and Prakrit were granted Classical Language status."
        },
        {
          "q": "Which two newly recognized Classical Languages (added in October 2024) are ancient literary languages that are NOT part of the 22 Scheduled Languages in the Eighth Schedule?",
          "o": [
            "Tamil and Kannada",
            "Sanskrit and Odia",
            "Marathi and Assamese",
            "Pali and Prakrit"
          ],
          "a": 3,
          "e": "Pali and Prakrit are among the 11 Classical Languages but are not listed in the Eighth Schedule."
        },
        {
          "q": "In which year was Odia (the sixth language) granted Classical Language status prior to the 2024 expansion?",
          "o": [
            "2013",
            "2008",
            "2014 (1 March 2014)",
            "2005"
          ],
          "a": 2,
          "e": "Odia was accorded Classical Language status on 1 March 2014 (Malayalam was in August 2013, and Kannada & Telugu in October 2008)."
        },
        {
          "q": "According to the Census of India 2011 family-wise classification, which language branch has the highest percentage of speakers in India (approx. 78.05%)?",
          "o": [
            "Dravidian family",
            "Indo-Aryan branch (of the Indo-European family)",
            "Austro-Asiatic family",
            "Tibeto-Burmese family"
          ],
          "a": 1,
          "e": "The Indo-Aryan branch accounts for approximately 78.05% of India's population in the 2011 Census."
        },
        {
          "q": "According to the 2011 Census, what is the approximate share of speakers of the Dravidian language family (the second-largest group in India)?",
          "o": [
            "19.64%",
            "78.05%",
            "5.20%",
            "1.11%"
          ],
          "a": 0,
          "e": "The Dravidian family is the second-largest group, spoken by approximately 19.64% of the population."
        },
        {
          "q": "To which language family does 'Santali' (one of the 22 Scheduled Languages) and 'Khasi' (spoken in Meghalaya) belong?",
          "o": [
            "Indo-Aryan branch",
            "Dravidian language family",
            "Tibeto-Burmese language family",
            "Austro-Asiatic language family"
          ],
          "a": 3,
          "e": "Santali, Mundari, Ho, Khasi, and Nicobarese belong to the Austro-Asiatic language family."
        },
        {
          "q": "To which language family do 'Bodo' and 'Manipuri (Meitei)'—both included in the Eighth Schedule—belong?",
          "o": [
            "Dravidian family",
            "Austro-Asiatic family",
            "Tibeto-Burmese (Sino-Tibetan) family",
            "Indo-Aryan branch"
          ],
          "a": 2,
          "e": "Bodo, Manipuri (Meitei), Mizo, Garo, and Naga languages belong to the Tibeto-Burmese subfamily."
        },
        {
          "q": "Under the Census of India 2011 C-16 language table, 'English' is classified under which branch of the Indo-European family?",
          "o": [
            "Indo-Aryan branch",
            "Germanic branch",
            "Iranian branch",
            "Celtic branch"
          ],
          "a": 1,
          "e": "English belongs to the Germanic branch of the Indo-European language family."
        },
        {
          "q": "How many languages (with 10,000 or more speakers) are listed in the Census of India 2011 C-16 summary?",
          "o": [
            "121 languages (22 Scheduled and 99 Non-Scheduled)",
            "100 languages",
            "270 languages",
            "88 languages"
          ],
          "a": 0,
          "e": "Census 2011 lists 121 languages (22 Scheduled + 99 Non-Scheduled) and 270 mother tongues with 10,000+ speakers."
        },
        {
          "q": "When was the Jammu and Kashmir Official Languages Act, 2020 enacted by Parliament to establish five official languages for the UT of J&K?",
          "o": [
            "December 2023",
            "August 2019",
            "May 2022",
            "September 2020 (enacted 26 Sept 2020, came into force 29 Sept 2020)"
          ],
          "a": 3,
          "e": "The J&K Official Languages Act, 2020 was enacted on 26 September 2020 and enforced on 29 September 2020."
        },
        {
          "q": "Which was the sole official language of the erstwhile State of Jammu and Kashmir prior to the enactment of the J&K Official Languages Act, 2020?",
          "o": [
            "Dogri",
            "Kashmiri",
            "Urdu",
            "English"
          ],
          "a": 2,
          "e": "Urdu was the official language of the former State before the 2020 Act established the five-language list (Kashmiri, Dogri, Urdu, Hindi, English)."
        },
        {
          "q": "Under the Ladakh Official Languages Regulation, 2025, which five languages are the official languages of the Union Territory of Ladakh?",
          "o": [
            "Kashmiri, Dogri, Urdu, Hindi, and English",
            "Bhoti, Urdu, Purgi, Hindi, and English",
            "Ladakhi, Balti, Shina, Hindi, and English",
            "Bhoti, Tibetan, Urdu, Dogri, and English"
          ],
          "a": 1,
          "e": "The Ladakh Official Languages Regulation, 2025 specifies Bhoti, Urdu, Purgi, Hindi, and English as the five official languages of Ladakh UT."
        },
        {
          "q": "What is the name of the traditional script of the Santali language (devised by Pandit Raghunath Murmu)?",
          "o": [
            "Ol Chiki",
            "Takri",
            "Meitei Mayek",
            "Gurmukhi"
          ],
          "a": 0,
          "e": "Santali is written in the Ol Chiki script."
        },
        {
          "q": "Which historical script was traditionally used to write the Dogri language in the Jammu region before the standard adoption of Devanagari?",
          "o": [
            "Modi script",
            "Sharada script",
            "Kharosthi script",
            "Takri script"
          ],
          "a": 3,
          "e": "Dogri was historically written in the Takri (Dogra Akkhar) script and is now commonly written in Devanagari."
        },
        {
          "q": "Which script is the standard official script used to write the Punjabi language in Indian Punjab?",
          "o": [
            "Devanagari script",
            "Shahmukhi script",
            "Gurmukhi script",
            "Takri script"
          ],
          "a": 2,
          "e": "Gurmukhi is the standard script for Punjabi in India (while Shahmukhi, a Perso-Arabic script, is used in Pakistan)."
        },
        {
          "q": "'Kokborok' is a prominent indigenous language (of the Tibeto-Burmese family) widely spoken in which Indian State?",
          "o": [
            "Meghalaya",
            "Tripura",
            "Mizoram",
            "Sikkim"
          ],
          "a": 1,
          "e": "Kokborok (along with Bengali) is a major language of Tripura."
        },
        {
          "q": "In which Island of the Union Territory of Lakshadweep is the 'Mahl' (Dhivehi) language spoken alongside Malayalam?",
          "o": [
            "Minicoy Island",
            "Kavaratti Island",
            "Agatti Island",
            "Andrott Island"
          ],
          "a": 0,
          "e": "While Malayalam is spoken across Lakshadweep, Mahl (closely related to Dhivehi of Maldives) is spoken on Minicoy Island."
        },
        {
          "q": "Which of the following Dravidian languages is spoken by the 'Paharia / Oraon' tribal communities in Eastern/Central India (Jharkhand, Chhattisgarh, Odisha)?",
          "o": [
            "Bodo",
            "Khasi",
            "Mundari",
            "Kurukh (and Malto)"
          ],
          "a": 3,
          "e": "Kurukh (spoken by Oraon tribes) and Gondi are important Dravidian languages spoken in Central and Eastern India."
        },
        {
          "q": "Which of the following Indian States has 'English' as its sole official State language under Article 345?",
          "o": [
            "Manipur",
            "Assam",
            "Nagaland (and Arunachal Pradesh)",
            "Goa"
          ],
          "a": 2,
          "e": "Nagaland and Arunachal Pradesh use English as their official state language."
        }
      ]
    ]
  },
  "acts_panchayat": {
    "key": "acts_panchayat",
    "name": "J&K Panchayati Raj Act, 1989 (Updated to 2026)",
    "shortBadge": "6 Sets • 100 Qs",
    "icon": "⚖️",
    "desc": "Act No. IX of 1989 (Ward/Halqa Majlis, Halqa Panchayat, BDC, SEC, DDC, 5 Standing Committees, Panchayati Adalat Secs 48–79A, Schedules & 2024–2026 Amendments). 60 Statement + 40 One-Liner Qs.",
    "subtitle": "Sets 1–4: Statement-Based (15 Qs / 15 Mins each) • Sets 5–6: High-Yield One-Liners (20 Qs / 20 Mins each) • Includes 2024 OBC, 2025 SEC Age 70 & 2026 Rules Updates",
    "SET_TITLES": [
      "Set 1: Statement-Based Questions — Part I (15 Qs)",
      "Set 2: Statement-Based Questions — Part II (15 Qs)",
      "Set 3: Statement-Based Questions — Part III (15 Qs)",
      "Set 4: Statement-Based Questions — Part IV (15 Qs)",
      "Set 5: High-Frequency One-Liner MCQs — Part I (20 Qs)",
      "Set 6: High-Frequency One-Liner MCQs — Part II (20 Qs)"
    ],
    "sets": [
      [
        {
          "q": "With reference to 'Enactment, Commencement & Repeal (Sections 1 to 3 and Section 83)' (J&K Panchayati Raj Act, 1989), consider the following statements:\nStatement I: The Jammu and Kashmir Panchayati Raj Act, 1989 is Act No. IX of 1989; it received assent on 11 July 1989 and came into force on 1 July 1997 (under SRO-220 dated 30 June 1997).\nStatement II: Under Section 3, the provisions of this Act override any inconsistent provisions in other laws, and under Section 83 it repealed the Jammu and Kashmir Village Panchayat Act, 1958.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Enactment, Commencement & Repeal (Sections 1 to 3 and Section 83)."
        },
        {
          "q": "Consider the following statements regarding 'Three-Tier Panchayati Raj System in Jammu & Kashmir' (J&K Panchayati Raj Act, 1989):\nStatement I: The J&K Panchayati Raj Act, 1989 provides for a three-tier structure consisting of: (1) Halqa Panchayat at the village/halqa level, (2) Block Development Council (BDC) at the block level, and (3) District Development Council (DDC) at the district level.\nStatement II: The third tier in J&K is still called the District Planning and Development Board (DPDB) headed by a nominated Cabinet Minister.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (The J&K Panchayati Raj Act, 1989 provides for a three-tier structure consisting of: (1) Halqa Panchayat at the village/halqa level, (2) Block Development Council (BDC) at the block level, and (3) District Development Council (DDC) at the district level.). Statement II is incorrect: The 2020 amendment replaced the old DPDB with the elected District Development Council (DDC) under Sections 45–47."
        },
        {
          "q": "With reference to 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)' (J&K Panchayati Raj Act, 1989), consider the following statements:\nStatement I: Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.\nStatement II: Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)."
        },
        {
          "q": "Consider the following statements regarding 'Sections 3C & 3D — Halqa Majlis (Composition, Meetings, Quorum & Social Audit)' (J&K Panchayati Raj Act, 1989):\nStatement I: Under Section 3C, a Halqa Majlis consists of all persons whose names are included in the electoral roll relating to the Halqa Panchayat area; the Sarpanch presides over its meetings, and the Secretary of the Halqa Panchayat records the minutes.\nStatement II: Only elected Panches are members of the Halqa Majlis under Section 3C.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Section 3C, a Halqa Majlis consists of all persons whose names are included in the electoral roll relating to the Halqa Panchayat area; the Sarpanch presides over its meetings, and the Secretary of the Halqa Panchayat records the minutes.). Statement II is incorrect: All registered voters of the Halqa Panchayat area are members of the Halqa Majlis (analogous to the Gram Sabha)."
        },
        {
          "q": "With reference to 'Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches' (J&K Panchayati Raj Act, 1989), consider the following statements:\nStatement I: Under Section 4, a Halqa Panchayat is constituted for a Halqa having a population normally not exceeding 3,000 in hilly areas and 4,500 in plain areas.\nStatement II: Every Halqa Panchayat consists of a Sarpanch and not less than 7 and not more than 11 Panches (excluding the Sarpanch) as the prescribed authority may fix.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches."
        },
        {
          "q": "Consider the following statements regarding 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)' (J&K Panchayati Raj Act, 1989):\nStatement I: Under the current Act (Section 4 and Section 40), both the Sarpanch and the Panches of a Halqa Panchayat are elected directly by the electorate of the Halqa, whereas the Naib-Sarpanch is elected indirectly by the Panches from among themselves at the first notified meeting.\nStatement II: Both the Sarpanch and the Naib-Sarpanch are elected directly by the voters of the Halqa.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under the current Act (Section 4 and Section 40), both the Sarpanch and the Panches of a Halqa Panchayat are elected directly by the electorate of the Halqa, whereas the Naib-Sarpanch is elected indirectly by the Panches from among themselves at the first notified meeting.). Statement II is incorrect: While the Sarpanch is directly elected by the voters of the Halqa, the Naib-Sarpanch is elected indirectly by the Panches from among themselves."
        },
        {
          "q": "With reference to 'Sections 5, 6 & 7 — Term, Disqualifications (Age 21) & Removal of Sarpanch/Naib-Sarpanch' (J&K Panchayati Raj Act, 1989), consider the following statements:\nStatement I: Under Section 5, the term of office of the Sarpanch, Naib-Sarpanch, and Panches is 5 years from the date of constitution of the Halqa Panchayat; under Section 6, the minimum age to be a member of a Halqa Panchayat is 21 years (and a false reserved-category certificate attracts a 6-year disqualification).\nStatement II: Under Section 7, a Sarpanch or Naib-Sarpanch may be removed on grounds of gross misconduct, neglect of duty, disqualification, or failure to attend 3 consecutive meetings of the Halqa Panchayat by a resolution passed by not less than two-thirds (2/3rd) of the total number of Panches at a special meeting.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Sections 5, 6 & 7 — Term, Disqualifications (Age 21) & Removal of Sarpanch/Naib-Sarpanch."
        },
        {
          "q": "Consider the following statements regarding 'Sections 8, 9 & 11 — Casual Vacancies, Appointment of Administrator & Resignation' (J&K Panchayati Raj Act, 1989):\nStatement I: Under Section 9, if the Government is satisfied that a Halqa Panchayat cannot be constituted due to difficulty in holding elections or failure of the electorate to elect Panches, it may appoint an Administrator (not below the rank of Additional District Magistrate) for a period not exceeding 6 months.\nStatement II: Under Section 9, an Administrator can be appointed to run a Halqa Panchayat for 3 years at a stretch.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Section 9, if the Government is satisfied that a Halqa Panchayat cannot be constituted due to difficulty in holding elections or failure of the electorate to elect Panches, it may appoint an Administrator (not below the rank of Additional District Magistrate) for a period not exceeding 6 months.). Statement II is incorrect: Under Section 9, the appointment of an Administrator for a Halqa Panchayat is subject to a maximum period of 6 months."
        },
        {
          "q": "With reference to 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat' (J&K Panchayati Raj Act, 1989), consider the following statements:\nStatement I: Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.\nStatement II: Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat."
        },
        {
          "q": "Consider the following statements regarding 'Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings' (J&K Panchayati Raj Act, 1989):\nStatement I: Section 13 vests village roads and local public properties in the Halqa Panchayat; Section 14 establishes the Halqa Panchayat Fund (linked to Schedule I-C); and Section 18 provides that arrears of taxes or dues under the Act are recoverable as arrears of land revenue.\nStatement II: Under Section 24, the Halqa Panchayat is required to meet only twice in a financial year.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Section 13 vests village roads and local public properties in the Halqa Panchayat; Section 14 establishes the Halqa Panchayat Fund (linked to Schedule I-C); and Section 18 provides that arrears of taxes or dues under the Act are recoverable as arrears of land revenue.). Statement II is incorrect: The Halqa Majlis meets at least twice in a financial year (Section 3C), whereas the Halqa Panchayat (and BDC) must meet at least once every month (Sections 24 and 35)."
        },
        {
          "q": "With reference to 'Chapter VI (Sections 27 to 35) — Block Development Council (BDC)' (J&K Panchayati Raj Act, 1989), consider the following statements:\nStatement I: Under Section 27, a Block Development Council (BDC) is constituted for every Block and consists of a Chairperson and all Sarpanches of Halqa Panchayats falling within the Block; reservations apply for SCs, STs, OBCs (added in 2024), and 1/3rd for women.\nStatement II: Under Sections 28 and 41, the BDC Chairperson is elected by the electoral college comprising all Panches and Sarpanches of Halqa Panchayats in the Block from among themselves; the Block Development Officer (BDO) is the ex-officio Secretary of the BDC; the BDC term is 5 years (Section 29); it meets at least once a month (Section 35); and its Chairperson can be removed by a 2/3rd majority of total Sarpanches of the Block (Section 30).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Chapter VI (Sections 27 to 35) — Block Development Council (BDC)."
        },
        {
          "q": "Consider the following statements regarding 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates' (J&K Panchayati Raj Act, 1989):\nStatement I: Under Section 36, the superintendence, direction, and control of the preparation of electoral rolls and conduct of all elections under the Act vests in the State Election Commission (SEC) appointed by the Lieutenant Governor.\nStatement II: The maximum age limit for the State Election Commissioner under Section 36A is still 62 years.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Section 36, the superintendence, direction, and control of the preparation of electoral rolls and conduct of all elections under the Act vests in the State Election Commission (SEC) appointed by the Lieutenant Governor.). Statement II is incorrect: The J&K Panchayati Raj (Amendment) Act, 2025 raised the upper age limit of the State Election Commissioner from 65 years to 70 years."
        },
        {
          "q": "With reference to 'Chapter VIII (Sections 45 to 47B) — District Development Council (DDC) & 5 Standing Committees' (J&K Panchayati Raj Act, 1989), consider the following statements:\nStatement I: Under Section 45 and 45A, every district has a District Development Council (DDC) consisting of 14 directly elected members from territorial constituencies in rural areas, plus all MLAs of the district and all BDC Chairpersons of the district; the Additional District Development Commissioner (ADDC) is the ex-officio Chief Executive Officer (CEO) of the DDC.\nStatement II: The DDC has a 5-year term, meets at least 4 times in a financial year (quorum = 1/2), elects a Chairperson and Vice-Chairperson from among the 14 directly elected members (removable by 2/3rd of directly elected members), and constitutes 5 Standing Committees under Section 45D: (1) Finance, (2) Development, (3) Public Works, (4) Health and Education, and (5) Welfare (Mnemonic: F-D-P-H-W).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Chapter VIII (Sections 45 to 47B) — District Development Council (DDC) & 5 Standing Committees."
        },
        {
          "q": "Consider the following statements regarding 'Chapter IX (Sections 48 to 60) — Panchayati Adalat (Composition, Age 30 & Criminal Fines)' (J&K Panchayati Raj Act, 1989):\nStatement I: Under Section 48, a Panchayati Adalat consists of 5 members nominated by the prescribed authority out of a panel recommended by the Halqa Panchayat; a member must be literate, at least 30 years of age, not a Sarpanch/Naib-Sarpanch/Panch, and not a Government employee; its term is 5 years, its quorum is 3 members, its members elect a Chairperson from among themselves (Section 50), and the Halqa Panchayat Secretary acts as its judicial clerk (Section 51).\nStatement II: A Panchayati Adalat consists of 7 members with a minimum age of 21 years and can sentence an offender to 6 months' imprisonment.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 0,
          "e": "Statement I is correct (Under Section 48, a Panchayati Adalat consists of 5 members nominated by the prescribed authority out of a panel recommended by the Halqa Panchayat; a member must be literate, at least 30 years of age, not a Sarpanch/Naib-Sarpanch/Panch, and not a Government employee; its term is 5 years, its quorum is 3 members, its members elect a Chairperson from among themselves (Section 50), and the Halqa Panchayat Secretary acts as its judicial clerk (Section 51).). Statement II is incorrect: A Panchayati Adalat has 5 members (quorum 3, minimum age 30 years) and has NO power to award imprisonment—its maximum criminal penalty is a fine of Rs 1,000 (Section 58)."
        },
        {
          "q": "With reference to 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules' (J&K Panchayati Raj Act, 1989), consider the following statements:\nStatement I: Under Section 67, the civil jurisdiction of a Panchayati Adalat extends to suits for money, damages, or movable property up to a maximum value of Rs 3,000 (with interest up to 10% per annum under Section 70 and no arrest/imprisonment in execution of a civil decree under Section 78); under Section 74, a revision application lies within 60 days before the District Judge (for civil suits) or Sessions Judge (for criminal cases); and under Section 77, contempt of the Adalat attracts a fine up to Rs 200.\nStatement II: Under Section 80, the Government has the power to make Rules (e.g., J&K Panchayati Raj Rules, 1996), whereas under Section 81 Panchayati Raj institutions have the power to make Bye-Laws; the Act has 6 key Schedules: I-A (HP Functions), I-B (HP Staff), I-C (HP Fund), II-A (BDC Functions), II-B (BDC Staff), and II-C (BDC Fund).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements I and II are correct regarding Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules."
        }
      ],
      [
        {
          "q": "Consider the following statements comparing 'Enactment, Commencement & Repeal (Sections 1 to 3 and Section 83)' and 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)':\nStatement I: Under Section 3, the provisions of this Act override any inconsistent provisions in other laws, and under Section 83 it repealed the Jammu and Kashmir Village Panchayat Act, 1958.\nStatement II: Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 3, the provisions of this Act override any inconsistent provisions in other laws, and under Section 83 it repealed the Jammu and Kashmir Village Panchayat Act, 1958. II: Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.)"
        },
        {
          "q": "Examine the following two statements regarding 'Three-Tier Panchayati Raj System in Jammu & Kashmir' and 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)':\nStatement I: The third tier in J&K is still called the District Planning and Development Board (DPDB) headed by a nominated Cabinet Minister.\nStatement II: Seats in every Halqa Panchayat are reserved for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs — added by the 2024 Amendment Act), and not less than one-third (1/3rd) of the total seats (including SC/ST/OBC women) are reserved for women.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (The 2020 amendment replaced the old DPDB with the elected District Development Council (DDC) under Sections 45–47.). Statement II is correct (Seats in every Halqa Panchayat are reserved for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs — added by the 2024 Amendment Act), and not less than one-third (1/3rd) of the total seats (including SC/ST/OBC women) are reserved for women.)."
        },
        {
          "q": "Consider the following statements comparing 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)' and 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat':\nStatement I: Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters.\nStatement II: Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters. II: Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.)"
        },
        {
          "q": "Examine the following two statements regarding 'Sections 3C & 3D — Halqa Majlis (Composition, Meetings, Quorum & Social Audit)' and 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates':\nStatement I: Only elected Panches are members of the Halqa Majlis under Section 3C.\nStatement II: Under the 2025 Amendment Act (Act No. V of 2025, amending Section 36A), the State Election Commissioner holds office for a term of 5 years (including any reappointment) or until attaining the age of 70 years (increased from 65 to 70 years), whichever is earlier; under the 2024 Amendment to Section 36B, the SEC can be removed only in like manner and on like grounds as a Judge of a High Court; and the June 2026 Rules update set four qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) for electoral rolls.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (All registered voters of the Halqa Panchayat area are members of the Halqa Majlis (analogous to the Gram Sabha).). Statement II is correct (Under the 2025 Amendment Act (Act No. V of 2025, amending Section 36A), the State Election Commissioner holds office for a term of 5 years (including any reappointment) or until attaining the age of 70 years (increased from 65 to 70 years), whichever is earlier; under the 2024 Amendment to Section 36B, the SEC can be removed only in like manner and on like grounds as a Judge of a High Court; and the June 2026 Rules update set four qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) for electoral rolls.)."
        },
        {
          "q": "Consider the following statements comparing 'Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches' and 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules':\nStatement I: Every Halqa Panchayat consists of a Sarpanch and not less than 7 and not more than 11 Panches (excluding the Sarpanch) as the prescribed authority may fix.\nStatement II: Under Section 67, the civil jurisdiction of a Panchayati Adalat extends to suits for money, damages, or movable property up to a maximum value of Rs 3,000 (with interest up to 10% per annum under Section 70 and no arrest/imprisonment in execution of a civil decree under Section 78); under Section 74, a revision application lies within 60 days before the District Judge (for civil suits) or Sessions Judge (for criminal cases); and under Section 77, contempt of the Adalat attracts a fine up to Rs 200.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Every Halqa Panchayat consists of a Sarpanch and not less than 7 and not more than 11 Panches (excluding the Sarpanch) as the prescribed authority may fix. II: Under Section 67, the civil jurisdiction of a Panchayati Adalat extends to suits for money, damages, or movable property up to a maximum value of Rs 3,000 (with interest up to 10% per annum under Section 70 and no arrest/imprisonment in execution of a civil decree under Section 78); under Section 74, a revision application lies within 60 days before the District Judge (for civil suits) or Sessions Judge (for criminal cases); and under Section 77, contempt of the Adalat attracts a fine up to Rs 200.)"
        },
        {
          "q": "Examine the following two statements regarding 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)' and 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)':\nStatement I: Both the Sarpanch and the Naib-Sarpanch are elected directly by the voters of the Halqa.\nStatement II: Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (While the Sarpanch is directly elected by the voters of the Halqa, the Naib-Sarpanch is elected indirectly by the Panches from among themselves.). Statement II is correct (Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters.)."
        },
        {
          "q": "Consider the following statements comparing 'Sections 5, 6 & 7 — Term, Disqualifications (Age 21) & Removal of Sarpanch/Naib-Sarpanch' and 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)':\nStatement I: Under Section 7, a Sarpanch or Naib-Sarpanch may be removed on grounds of gross misconduct, neglect of duty, disqualification, or failure to attend 3 consecutive meetings of the Halqa Panchayat by a resolution passed by not less than two-thirds (2/3rd) of the total number of Panches at a special meeting.\nStatement II: Under the current Act (Section 4 and Section 40), both the Sarpanch and the Panches of a Halqa Panchayat are elected directly by the electorate of the Halqa, whereas the Naib-Sarpanch is elected indirectly by the Panches from among themselves at the first notified meeting.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 7, a Sarpanch or Naib-Sarpanch may be removed on grounds of gross misconduct, neglect of duty, disqualification, or failure to attend 3 consecutive meetings of the Halqa Panchayat by a resolution passed by not less than two-thirds (2/3rd) of the total number of Panches at a special meeting. II: Under the current Act (Section 4 and Section 40), both the Sarpanch and the Panches of a Halqa Panchayat are elected directly by the electorate of the Halqa, whereas the Naib-Sarpanch is elected indirectly by the Panches from among themselves at the first notified meeting.)"
        },
        {
          "q": "Examine the following two statements regarding 'Sections 8, 9 & 11 — Casual Vacancies, Appointment of Administrator & Resignation' and 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat':\nStatement I: Under Section 9, an Administrator can be appointed to run a Halqa Panchayat for 3 years at a stretch.\nStatement II: Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (Under Section 9, the appointment of an Administrator for a Halqa Panchayat is subject to a maximum period of 6 months.). Statement II is correct (Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests.)."
        },
        {
          "q": "Consider the following statements comparing 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat' and 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates':\nStatement I: Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests.\nStatement II: Under Section 36, the superintendence, direction, and control of the preparation of electoral rolls and conduct of all elections under the Act vests in the State Election Commission (SEC) appointed by the Lieutenant Governor.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests. II: Under Section 36, the superintendence, direction, and control of the preparation of electoral rolls and conduct of all elections under the Act vests in the State Election Commission (SEC) appointed by the Lieutenant Governor.)"
        },
        {
          "q": "Examine the following two statements regarding 'Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings' and 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules':\nStatement I: Under Section 24, the Halqa Panchayat is required to meet only twice in a financial year.\nStatement II: Under Section 80, the Government has the power to make Rules (e.g., J&K Panchayati Raj Rules, 1996), whereas under Section 81 Panchayati Raj institutions have the power to make Bye-Laws; the Act has 6 key Schedules: I-A (HP Functions), I-B (HP Staff), I-C (HP Fund), II-A (BDC Functions), II-B (BDC Staff), and II-C (BDC Fund).\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (The Halqa Majlis meets at least twice in a financial year (Section 3C), whereas the Halqa Panchayat (and BDC) must meet at least once every month (Sections 24 and 35).). Statement II is correct (Under Section 80, the Government has the power to make Rules (e.g., J&K Panchayati Raj Rules, 1996), whereas under Section 81 Panchayati Raj institutions have the power to make Bye-Laws; the Act has 6 key Schedules: I-A (HP Functions), I-B (HP Staff), I-C (HP Fund), II-A (BDC Functions), II-B (BDC Staff), and II-C (BDC Fund).)."
        },
        {
          "q": "Consider the following statements comparing 'Chapter VI (Sections 27 to 35) — Block Development Council (BDC)' and 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)':\nStatement I: Under Sections 28 and 41, the BDC Chairperson is elected by the electoral college comprising all Panches and Sarpanches of Halqa Panchayats in the Block from among themselves; the Block Development Officer (BDO) is the ex-officio Secretary of the BDC; the BDC term is 5 years (Section 29); it meets at least once a month (Section 35); and its Chairperson can be removed by a 2/3rd majority of total Sarpanches of the Block (Section 30).\nStatement II: Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Sections 28 and 41, the BDC Chairperson is elected by the electoral college comprising all Panches and Sarpanches of Halqa Panchayats in the Block from among themselves; the Block Development Officer (BDO) is the ex-officio Secretary of the BDC; the BDC term is 5 years (Section 29); it meets at least once a month (Section 35); and its Chairperson can be removed by a 2/3rd majority of total Sarpanches of the Block (Section 30). II: Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.)"
        },
        {
          "q": "Examine the following two statements regarding 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates' and 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)':\nStatement I: The maximum age limit for the State Election Commissioner under Section 36A is still 62 years.\nStatement II: Seats in every Halqa Panchayat are reserved for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs — added by the 2024 Amendment Act), and not less than one-third (1/3rd) of the total seats (including SC/ST/OBC women) are reserved for women.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (The J&K Panchayati Raj (Amendment) Act, 2025 raised the upper age limit of the State Election Commissioner from 65 years to 70 years.). Statement II is correct (Seats in every Halqa Panchayat are reserved for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs — added by the 2024 Amendment Act), and not less than one-third (1/3rd) of the total seats (including SC/ST/OBC women) are reserved for women.)."
        },
        {
          "q": "Consider the following statements comparing 'Chapter VIII (Sections 45 to 47B) — District Development Council (DDC) & 5 Standing Committees' and 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat':\nStatement I: The DDC has a 5-year term, meets at least 4 times in a financial year (quorum = 1/2), elects a Chairperson and Vice-Chairperson from among the 14 directly elected members (removable by 2/3rd of directly elected members), and constitutes 5 Standing Committees under Section 45D: (1) Finance, (2) Development, (3) Public Works, (4) Health and Education, and (5) Welfare (Mnemonic: F-D-P-H-W).\nStatement II: Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: The DDC has a 5-year term, meets at least 4 times in a financial year (quorum = 1/2), elects a Chairperson and Vice-Chairperson from among the 14 directly elected members (removable by 2/3rd of directly elected members), and constitutes 5 Standing Committees under Section 45D: (1) Finance, (2) Development, (3) Public Works, (4) Health and Education, and (5) Welfare (Mnemonic: F-D-P-H-W). II: Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.)"
        },
        {
          "q": "Examine the following two statements regarding 'Chapter IX (Sections 48 to 60) — Panchayati Adalat (Composition, Age 30 & Criminal Fines)' and 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates':\nStatement I: A Panchayati Adalat consists of 7 members with a minimum age of 21 years and can sentence an offender to 6 months' imprisonment.\nStatement II: Under the 2025 Amendment Act (Act No. V of 2025, amending Section 36A), the State Election Commissioner holds office for a term of 5 years (including any reappointment) or until attaining the age of 70 years (increased from 65 to 70 years), whichever is earlier; under the 2024 Amendment to Section 36B, the SEC can be removed only in like manner and on like grounds as a Judge of a High Court; and the June 2026 Rules update set four qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) for electoral rolls.\nWhich of the above statements is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 1,
          "e": "Statement I is incorrect (A Panchayati Adalat has 5 members (quorum 3, minimum age 30 years) and has NO power to award imprisonment—its maximum criminal penalty is a fine of Rs 1,000 (Section 58).). Statement II is correct (Under the 2025 Amendment Act (Act No. V of 2025, amending Section 36A), the State Election Commissioner holds office for a term of 5 years (including any reappointment) or until attaining the age of 70 years (increased from 65 to 70 years), whichever is earlier; under the 2024 Amendment to Section 36B, the SEC can be removed only in like manner and on like grounds as a Judge of a High Court; and the June 2026 Rules update set four qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) for electoral rolls.)."
        },
        {
          "q": "Consider the following statements comparing 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules' and 'Enactment, Commencement & Repeal (Sections 1 to 3 and Section 83)':\nStatement I: Under Section 80, the Government has the power to make Rules (e.g., J&K Panchayati Raj Rules, 1996), whereas under Section 81 Panchayati Raj institutions have the power to make Bye-Laws; the Act has 6 key Schedules: I-A (HP Functions), I-B (HP Staff), I-C (HP Fund), II-A (BDC Functions), II-B (BDC Staff), and II-C (BDC Fund).\nStatement II: The Jammu and Kashmir Panchayati Raj Act, 1989 is Act No. IX of 1989; it received assent on 11 July 1989 and came into force on 1 July 1997 (under SRO-220 dated 30 June 1997).\nWhich of the statements given above is/are correct?",
          "o": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II",
            "Neither Statement I nor Statement II"
          ],
          "a": 2,
          "e": "Both statements are correct. (I: Under Section 80, the Government has the power to make Rules (e.g., J&K Panchayati Raj Rules, 1996), whereas under Section 81 Panchayati Raj institutions have the power to make Bye-Laws; the Act has 6 key Schedules: I-A (HP Functions), I-B (HP Staff), I-C (HP Fund), II-A (BDC Functions), II-B (BDC Staff), and II-C (BDC Fund). II: The Jammu and Kashmir Panchayati Raj Act, 1989 is Act No. IX of 1989; it received assent on 11 July 1989 and came into force on 1 July 1997 (under SRO-220 dated 30 June 1997).)"
        }
      ],
      [
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Enactment, Commencement & Repeal (Sections 1 to 3 and Section 83)', 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)', and 'Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches'), consider the following three statements:\nI. The Jammu and Kashmir Panchayati Raj Act, 1989 is Act No. IX of 1989; it received assent on 11 July 1989 and came into force on 1 July 1997 (under SRO-220 dated 30 June 1997).\nII. Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters.\nIII. A Halqa Panchayat in J&K consists of 15 to 25 Panches excluding the Sarpanch.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 4(2), a Halqa Panchayat consists of not less than 7 and not more than 11 Panches besides the Sarpanch."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Three-Tier Panchayati Raj System in Jammu & Kashmir', 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)', and 'Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings'), consider the following three statements:\nI. The J&K Panchayati Raj Act, 1989 provides for a three-tier structure consisting of: (1) Halqa Panchayat at the village/halqa level, (2) Block Development Council (BDC) at the block level, and (3) District Development Council (DDC) at the district level.\nII. Seats in every Halqa Panchayat are reserved for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs — added by the 2024 Amendment Act), and not less than one-third (1/3rd) of the total seats (including SC/ST/OBC women) are reserved for women.\nIII. Under Section 24, the Halqa Panchayat is required to meet only twice in a financial year.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: The Halqa Majlis meets at least twice in a financial year (Section 3C), whereas the Halqa Panchayat (and BDC) must meet at least once every month (Sections 24 and 35)."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)', 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat', and 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules'), consider the following three statements:\nI. Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.\nII. Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests.\nIII. Under Section 80, the Halqa Panchayat makes Rules for the UT, and under Section 67 the civil suit limit of a Panchayati Adalat is Rs 50,000.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 80 the Government makes Rules (while Panchayats make Bye-Laws under Section 81), and the main civil suit limit under Section 67 is Rs 3,000."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Sections 3C & 3D — Halqa Majlis (Composition, Meetings, Quorum & Social Audit)', 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates', and 'Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches'), consider the following three statements:\nI. Under Section 3C, a Halqa Majlis consists of all persons whose names are included in the electoral roll relating to the Halqa Panchayat area; the Sarpanch presides over its meetings, and the Secretary of the Halqa Panchayat records the minutes.\nII. Under the 2025 Amendment Act (Act No. V of 2025, amending Section 36A), the State Election Commissioner holds office for a term of 5 years (including any reappointment) or until attaining the age of 70 years (increased from 65 to 70 years), whichever is earlier; under the 2024 Amendment to Section 36B, the SEC can be removed only in like manner and on like grounds as a Judge of a High Court; and the June 2026 Rules update set four qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) for electoral rolls.\nIII. A Halqa Panchayat in J&K consists of 15 to 25 Panches excluding the Sarpanch.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 4(2), a Halqa Panchayat consists of not less than 7 and not more than 11 Panches besides the Sarpanch."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches', 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules', and 'Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings'), consider the following three statements:\nI. Under Section 4, a Halqa Panchayat is constituted for a Halqa having a population normally not exceeding 3,000 in hilly areas and 4,500 in plain areas.\nII. Under Section 80, the Government has the power to make Rules (e.g., J&K Panchayati Raj Rules, 1996), whereas under Section 81 Panchayati Raj institutions have the power to make Bye-Laws; the Act has 6 key Schedules: I-A (HP Functions), I-B (HP Staff), I-C (HP Fund), II-A (BDC Functions), II-B (BDC Staff), and II-C (BDC Fund).\nIII. Under Section 24, the Halqa Panchayat is required to meet only twice in a financial year.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: The Halqa Majlis meets at least twice in a financial year (Section 3C), whereas the Halqa Panchayat (and BDC) must meet at least once every month (Sections 24 and 35)."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)', 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)', and 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules'), consider the following three statements:\nI. Under the current Act (Section 4 and Section 40), both the Sarpanch and the Panches of a Halqa Panchayat are elected directly by the electorate of the Halqa, whereas the Naib-Sarpanch is elected indirectly by the Panches from among themselves at the first notified meeting.\nII. Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters.\nIII. Under Section 80, the Halqa Panchayat makes Rules for the UT, and under Section 67 the civil suit limit of a Panchayati Adalat is Rs 50,000.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 80 the Government makes Rules (while Panchayats make Bye-Laws under Section 81), and the main civil suit limit under Section 67 is Rs 3,000."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Sections 5, 6 & 7 — Term, Disqualifications (Age 21) & Removal of Sarpanch/Naib-Sarpanch', 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)', and 'Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches'), consider the following three statements:\nI. Under Section 5, the term of office of the Sarpanch, Naib-Sarpanch, and Panches is 5 years from the date of constitution of the Halqa Panchayat; under Section 6, the minimum age to be a member of a Halqa Panchayat is 21 years (and a false reserved-category certificate attracts a 6-year disqualification).\nII. Seats in every Halqa Panchayat are reserved for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs — added by the 2024 Amendment Act), and not less than one-third (1/3rd) of the total seats (including SC/ST/OBC women) are reserved for women.\nIII. A Halqa Panchayat in J&K consists of 15 to 25 Panches excluding the Sarpanch.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 4(2), a Halqa Panchayat consists of not less than 7 and not more than 11 Panches besides the Sarpanch."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Sections 8, 9 & 11 — Casual Vacancies, Appointment of Administrator & Resignation', 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat', and 'Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings'), consider the following three statements:\nI. Under Section 9, if the Government is satisfied that a Halqa Panchayat cannot be constituted due to difficulty in holding elections or failure of the electorate to elect Panches, it may appoint an Administrator (not below the rank of Additional District Magistrate) for a period not exceeding 6 months.\nII. Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests.\nIII. Under Section 24, the Halqa Panchayat is required to meet only twice in a financial year.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: The Halqa Majlis meets at least twice in a financial year (Section 3C), whereas the Halqa Panchayat (and BDC) must meet at least once every month (Sections 24 and 35)."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat', 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates', and 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules'), consider the following three statements:\nI. Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.\nII. Under the 2025 Amendment Act (Act No. V of 2025, amending Section 36A), the State Election Commissioner holds office for a term of 5 years (including any reappointment) or until attaining the age of 70 years (increased from 65 to 70 years), whichever is earlier; under the 2024 Amendment to Section 36B, the SEC can be removed only in like manner and on like grounds as a Judge of a High Court; and the June 2026 Rules update set four qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) for electoral rolls.\nIII. Under Section 80, the Halqa Panchayat makes Rules for the UT, and under Section 67 the civil suit limit of a Panchayati Adalat is Rs 50,000.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 80 the Government makes Rules (while Panchayats make Bye-Laws under Section 81), and the main civil suit limit under Section 67 is Rs 3,000."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings', 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules', and 'Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches'), consider the following three statements:\nI. Section 13 vests village roads and local public properties in the Halqa Panchayat; Section 14 establishes the Halqa Panchayat Fund (linked to Schedule I-C); and Section 18 provides that arrears of taxes or dues under the Act are recoverable as arrears of land revenue.\nII. Under Section 80, the Government has the power to make Rules (e.g., J&K Panchayati Raj Rules, 1996), whereas under Section 81 Panchayati Raj institutions have the power to make Bye-Laws; the Act has 6 key Schedules: I-A (HP Functions), I-B (HP Staff), I-C (HP Fund), II-A (BDC Functions), II-B (BDC Staff), and II-C (BDC Fund).\nIII. A Halqa Panchayat in J&K consists of 15 to 25 Panches excluding the Sarpanch.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 4(2), a Halqa Panchayat consists of not less than 7 and not more than 11 Panches besides the Sarpanch."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Chapter VI (Sections 27 to 35) — Block Development Council (BDC)', 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)', and 'Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings'), consider the following three statements:\nI. Under Section 27, a Block Development Council (BDC) is constituted for every Block and consists of a Chairperson and all Sarpanches of Halqa Panchayats falling within the Block; reservations apply for SCs, STs, OBCs (added in 2024), and 1/3rd for women.\nII. Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters.\nIII. Under Section 24, the Halqa Panchayat is required to meet only twice in a financial year.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: The Halqa Majlis meets at least twice in a financial year (Section 3C), whereas the Halqa Panchayat (and BDC) must meet at least once every month (Sections 24 and 35)."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates', 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)', and 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules'), consider the following three statements:\nI. Under Section 36, the superintendence, direction, and control of the preparation of electoral rolls and conduct of all elections under the Act vests in the State Election Commission (SEC) appointed by the Lieutenant Governor.\nII. Seats in every Halqa Panchayat are reserved for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs — added by the 2024 Amendment Act), and not less than one-third (1/3rd) of the total seats (including SC/ST/OBC women) are reserved for women.\nIII. Under Section 80, the Halqa Panchayat makes Rules for the UT, and under Section 67 the civil suit limit of a Panchayati Adalat is Rs 50,000.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 80 the Government makes Rules (while Panchayats make Bye-Laws under Section 81), and the main civil suit limit under Section 67 is Rs 3,000."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Chapter VIII (Sections 45 to 47B) — District Development Council (DDC) & 5 Standing Committees', 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat', and 'Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches'), consider the following three statements:\nI. Under Section 45 and 45A, every district has a District Development Council (DDC) consisting of 14 directly elected members from territorial constituencies in rural areas, plus all MLAs of the district and all BDC Chairpersons of the district; the Additional District Development Commissioner (ADDC) is the ex-officio Chief Executive Officer (CEO) of the DDC.\nII. Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests.\nIII. A Halqa Panchayat in J&K consists of 15 to 25 Panches excluding the Sarpanch.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: Under Section 4(2), a Halqa Panchayat consists of not less than 7 and not more than 11 Panches besides the Sarpanch."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Chapter IX (Sections 48 to 60) — Panchayati Adalat (Composition, Age 30 & Criminal Fines)', 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates', and 'Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings'), consider the following three statements:\nI. Under Section 48, a Panchayati Adalat consists of 5 members nominated by the prescribed authority out of a panel recommended by the Halqa Panchayat; a member must be literate, at least 30 years of age, not a Sarpanch/Naib-Sarpanch/Panch, and not a Government employee; its term is 5 years, its quorum is 3 members, its members elect a Chairperson from among themselves (Section 50), and the Halqa Panchayat Secretary acts as its judicial clerk (Section 51).\nII. Under the 2025 Amendment Act (Act No. V of 2025, amending Section 36A), the State Election Commissioner holds office for a term of 5 years (including any reappointment) or until attaining the age of 70 years (increased from 65 to 70 years), whichever is earlier; under the 2024 Amendment to Section 36B, the SEC can be removed only in like manner and on like grounds as a Judge of a High Court; and the June 2026 Rules update set four qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) for electoral rolls.\nIII. Under Section 24, the Halqa Panchayat is required to meet only twice in a financial year.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: The Halqa Majlis meets at least twice in a financial year (Section 3C), whereas the Halqa Panchayat (and BDC) must meet at least once every month (Sections 24 and 35)."
        },
        {
          "q": "With reference to J&K Panchayati Raj Act, 1989 ('Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules', 'Enactment, Commencement & Repeal (Sections 1 to 3 and Section 83)', and 'Three-Tier Panchayati Raj System in Jammu & Kashmir'), consider the following three statements:\nI. Under Section 67, the civil jurisdiction of a Panchayati Adalat extends to suits for money, damages, or movable property up to a maximum value of Rs 3,000 (with interest up to 10% per annum under Section 70 and no arrest/imprisonment in execution of a civil decree under Section 78); under Section 74, a revision application lies within 60 days before the District Judge (for civil suits) or Sessions Judge (for criminal cases); and under Section 77, contempt of the Adalat attracts a fine up to Rs 200.\nII. Under Section 3, the provisions of this Act override any inconsistent provisions in other laws, and under Section 83 it repealed the Jammu and Kashmir Village Panchayat Act, 1958.\nIII. The third tier in J&K is still called the District Planning and Development Board (DPDB) headed by a nominated Cabinet Minister.\nWhich of the statements given above are correct?",
          "o": [
            "I and II only",
            "II and III only",
            "I and III only",
            "I, II and III"
          ],
          "a": 0,
          "e": "Statements I and II are correct. Statement III is incorrect because: The 2020 amendment replaced the old DPDB with the elected District Development Council (DDC) under Sections 45–47."
        }
      ],
      [
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Enactment, Commencement & Repeal (Sections 1 to 3 and Section 83)' and 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)'):\nI. Under Section 3, the provisions of this Act override any inconsistent provisions in other laws, and under Section 83 it repealed the Jammu and Kashmir Village Panchayat Act, 1958.\nII. Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.\nIII. The J&K Panchayati Raj Act, 1989 came into force immediately on 11 July 1989.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: While enacted on 11 July 1989, the Act came into force on 1 July 1997 via SRO-220 dated 30 June 1997."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Three-Tier Panchayati Raj System in Jammu & Kashmir' and 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)'):\nI. In addition to the three elected tiers, the Act provides for direct participatory bodies—the Ward Majlis (Section 3A) and the Halqa Majlis (Section 3C)—and a grass-roots judicial body called the Panchayati Adalat (Section 48).\nII. Under the current Act (Section 4 and Section 40), both the Sarpanch and the Panches of a Halqa Panchayat are elected directly by the electorate of the Halqa, whereas the Naib-Sarpanch is elected indirectly by the Panches from among themselves at the first notified meeting.\nIII. The third tier in J&K is still called the District Planning and Development Board (DPDB) headed by a nominated Cabinet Minister.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: The 2020 amendment replaced the old DPDB with the elected District Development Council (DDC) under Sections 45–47."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)' and 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat'):\nI. Under Section 3A and 3B, the Ward Majlis must meet at least once in every three months (quarterly), the quorum for its meeting is not less than one-tenth (1/10th) of total members, and a special meeting can be requisitioned in writing by at least 10% of the voters.\nII. Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.\nIII. The Sarpanch presides over every Ward Majlis meeting, which is held only once a year.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: The Panch of the concerned ward presides over the Ward Majlis, and it must meet at least once every 3 months."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Sections 3C & 3D — Halqa Majlis (Composition, Meetings, Quorum & Social Audit)' and 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates'):\nI. Under Section 3C and 3D, the Halqa Majlis must hold at least two meetings in every financial year, its quorum is one-tenth (1/10th) of the total number of members, and it approves village development plans and conducts social audit.\nII. Under Section 36, the superintendence, direction, and control of the preparation of electoral rolls and conduct of all elections under the Act vests in the State Election Commission (SEC) appointed by the Lieutenant Governor.\nIII. Only elected Panches are members of the Halqa Majlis under Section 3C.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: All registered voters of the Halqa Panchayat area are members of the Halqa Majlis (analogous to the Gram Sabha)."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Section 4 — Constitution of Halqa Panchayat, Population Norms & Panches' and 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules'):\nI. Every Halqa Panchayat consists of a Sarpanch and not less than 7 and not more than 11 Panches (excluding the Sarpanch) as the prescribed authority may fix.\nII. Under Section 67, the civil jurisdiction of a Panchayati Adalat extends to suits for money, damages, or movable property up to a maximum value of Rs 3,000 (with interest up to 10% per annum under Section 70 and no arrest/imprisonment in execution of a civil decree under Section 78); under Section 74, a revision application lies within 60 days before the District Judge (for civil suits) or Sessions Judge (for criminal cases); and under Section 77, contempt of the Adalat attracts a fine up to Rs 200.\nIII. A Halqa Panchayat in J&K consists of 15 to 25 Panches excluding the Sarpanch.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Under Section 4(2), a Halqa Panchayat consists of not less than 7 and not more than 11 Panches besides the Sarpanch."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)' and 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)'):\nI. Seats in every Halqa Panchayat are reserved for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs — added by the 2024 Amendment Act), and not less than one-third (1/3rd) of the total seats (including SC/ST/OBC women) are reserved for women.\nII. Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.\nIII. Both the Sarpanch and the Naib-Sarpanch are elected directly by the voters of the Halqa.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: While the Sarpanch is directly elected by the voters of the Halqa, the Naib-Sarpanch is elected indirectly by the Panches from among themselves."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Sections 5, 6 & 7 — Term, Disqualifications (Age 21) & Removal of Sarpanch/Naib-Sarpanch' and 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)'):\nI. Under Section 7, a Sarpanch or Naib-Sarpanch may be removed on grounds of gross misconduct, neglect of duty, disqualification, or failure to attend 3 consecutive meetings of the Halqa Panchayat by a resolution passed by not less than two-thirds (2/3rd) of the total number of Panches at a special meeting.\nII. Under the current Act (Section 4 and Section 40), both the Sarpanch and the Panches of a Halqa Panchayat are elected directly by the electorate of the Halqa, whereas the Naib-Sarpanch is elected indirectly by the Panches from among themselves at the first notified meeting.\nIII. Under Section 6, the minimum age to contest an election for Sarpanch or Panch is 25 years.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: The minimum age to contest any Panchayat election (Panch or Sarpanch) under Section 6 is 21 years (whereas 25 years is for MLA and 30 years is for Panchayati Adalat)."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Sections 8, 9 & 11 — Casual Vacancies, Appointment of Administrator & Resignation' and 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat'):\nI. Sections 8A and 10 have been omitted from the Act, while Section 8 deals with filling casual vacancies and Section 11 deals with resignation of the Sarpanch, Naib-Sarpanch, or Panches.\nII. Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.\nIII. Under Section 9, an Administrator can be appointed to run a Halqa Panchayat for 3 years at a stretch.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Under Section 9, the appointment of an Administrator for a Halqa Panchayat is subject to a maximum period of 6 months."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat' and 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates'):\nI. Specific Schedule I-A functions include minor and micro-irrigation projects in the 0 to 5 hectare range, rainwater harvesting, water-quality sample collection, monitoring Mid-Day Meals and school enrolment, and social forestry on wasteland outside reserved/protected forests.\nII. Under Section 36, the superintendence, direction, and control of the preparation of electoral rolls and conduct of all elections under the Act vests in the State Election Commission (SEC) appointed by the Lieutenant Governor.\nIII. Schedule II-A specifies the functions of the Halqa Panchayat.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Schedule I-A deals with the functions of the Halqa Panchayat (Section 12), whereas Schedule II-A deals with the functions of the Block Development Council (Section 31)."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Sections 13 to 26 — Property, Halqa Panchayat Fund, Budget & Monthly Meetings' and 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules'):\nI. Under Section 21, the Halqa Panchayat prepares an Annual Budget and forwards it to the prescribed authority within 3 days after sanction; under Section 24, every Halqa Panchayat must hold its meeting at least once a month (convened by the Sarpanch); and under Section 26, the VLW/Multipurpose Worker acts as the Secretary of the Halqa Panchayat (Schedule I-B).\nII. Under Section 67, the civil jurisdiction of a Panchayati Adalat extends to suits for money, damages, or movable property up to a maximum value of Rs 3,000 (with interest up to 10% per annum under Section 70 and no arrest/imprisonment in execution of a civil decree under Section 78); under Section 74, a revision application lies within 60 days before the District Judge (for civil suits) or Sessions Judge (for criminal cases); and under Section 77, contempt of the Adalat attracts a fine up to Rs 200.\nIII. Under Section 24, the Halqa Panchayat is required to meet only twice in a financial year.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: The Halqa Majlis meets at least twice in a financial year (Section 3C), whereas the Halqa Panchayat (and BDC) must meet at least once every month (Sections 24 and 35)."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Chapter VI (Sections 27 to 35) — Block Development Council (BDC)' and 'Sections 3A & 3B — Ward Majlis (Composition, Meetings & Quorum)'):\nI. Under Sections 28 and 41, the BDC Chairperson is elected by the electoral college comprising all Panches and Sarpanches of Halqa Panchayats in the Block from among themselves; the Block Development Officer (BDO) is the ex-officio Secretary of the BDC; the BDC term is 5 years (Section 29); it meets at least once a month (Section 35); and its Chairperson can be removed by a 2/3rd majority of total Sarpanches of the Block (Section 30).\nII. Under Section 3A, a Ward Majlis consists of all adult persons registered as voters in the electoral roll of that Panch constituency (Ward), and its meetings are presided over by the Panch of that ward.\nIII. The Additional District Development Commissioner (ADDC) serves as the Secretary of the Block Development Council.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: The Block Development Officer (BDO) is the Secretary of the BDC (Section 28), whereas the Additional District Development Commissioner (ADDC) is the Chief Executive Officer (CEO) of the DDC (Section 45A)."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates' and 'Section 4 — Mode of Election of Sarpanch, Panches & Naib-Sarpanch + Reservations (2024 Update)'):\nI. Under the 2025 Amendment Act (Act No. V of 2025, amending Section 36A), the State Election Commissioner holds office for a term of 5 years (including any reappointment) or until attaining the age of 70 years (increased from 65 to 70 years), whichever is earlier; under the 2024 Amendment to Section 36B, the SEC can be removed only in like manner and on like grounds as a Judge of a High Court; and the June 2026 Rules update set four qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) for electoral rolls.\nII. Under the current Act (Section 4 and Section 40), both the Sarpanch and the Panches of a Halqa Panchayat are elected directly by the electorate of the Halqa, whereas the Naib-Sarpanch is elected indirectly by the Panches from among themselves at the first notified meeting.\nIII. The maximum age limit for the State Election Commissioner under Section 36A is still 62 years.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: The J&K Panchayati Raj (Amendment) Act, 2025 raised the upper age limit of the State Election Commissioner from 65 years to 70 years."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Chapter VIII (Sections 45 to 47B) — District Development Council (DDC) & 5 Standing Committees' and 'Section 12 & Schedule I-A — Powers and Functions of Halqa Panchayat'):\nI. The DDC has a 5-year term, meets at least 4 times in a financial year (quorum = 1/2), elects a Chairperson and Vice-Chairperson from among the 14 directly elected members (removable by 2/3rd of directly elected members), and constitutes 5 Standing Committees under Section 45D: (1) Finance, (2) Development, (3) Public Works, (4) Health and Education, and (5) Welfare (Mnemonic: F-D-P-H-W).\nII. Section 12 (read with Schedule I-A) vests the Halqa Panchayat with administrative, developmental, and regulatory functions across 10 core sectors, including Agriculture, Animal Husbandry, Rural Development, Primary Education, Health, Roads, Water, Sanitation, Social Welfare, and Environment/Social Forestry.\nIII. Every District Development Council (DDC) in J&K has 20 directly elected members and 7 Standing Committees.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Every DDC has exactly 14 directly elected members per district (Section 45A) and 5 Standing Committees (Section 45D)."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Chapter IX (Sections 48 to 60) — Panchayati Adalat (Composition, Age 30 & Criminal Fines)' and 'Chapter VII (Sections 36 to 44) — State Election Commission (SEC) & 2024–2026 Updates'):\nI. Under Section 55, Adalat members are deemed Public Servants; under Section 58, a Panchayati Adalat cannot award imprisonment and can only impose a fine up to a maximum of Rs 1,000 in criminal cases; and under Section 60, it can award compensation up to Rs 200 to an accused against a false or frivolous complaint.\nII. Under Section 36, the superintendence, direction, and control of the preparation of electoral rolls and conduct of all elections under the Act vests in the State Election Commission (SEC) appointed by the Lieutenant Governor.\nIII. A Panchayati Adalat consists of 7 members with a minimum age of 21 years and can sentence an offender to 6 months' imprisonment.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: A Panchayati Adalat has 5 members (quorum 3, minimum age 30 years) and has NO power to award imprisonment—its maximum criminal penalty is a fine of Rs 1,000 (Section 58)."
        },
        {
          "q": "Consider the following three statements under J&K Panchayati Raj Act, 1989 (focusing on 'Sections 61 to 83 — Civil Jurisdiction (Rs 3,000), Revision (60 Days), Rules & Schedules' and 'Enactment, Commencement & Repeal (Sections 1 to 3 and Section 83)'):\nI. Under Section 80, the Government has the power to make Rules (e.g., J&K Panchayati Raj Rules, 1996), whereas under Section 81 Panchayati Raj institutions have the power to make Bye-Laws; the Act has 6 key Schedules: I-A (HP Functions), I-B (HP Staff), I-C (HP Fund), II-A (BDC Functions), II-B (BDC Staff), and II-C (BDC Fund).\nII. The Jammu and Kashmir Panchayati Raj Act, 1989 is Act No. IX of 1989; it received assent on 11 July 1989 and came into force on 1 July 1997 (under SRO-220 dated 30 June 1997).\nIII. Under Section 80, the Halqa Panchayat makes Rules for the UT, and under Section 67 the civil suit limit of a Panchayati Adalat is Rs 50,000.\nWhich of the statements given above is/are INCORRECT?",
          "o": [
            "I and II only",
            "III only",
            "II and III only",
            "I, II and III"
          ],
          "a": 1,
          "e": "Statements I and II are true. Only Statement III is INCORRECT: Under Section 80 the Government makes Rules (while Panchayats make Bye-Laws under Section 81), and the main civil suit limit under Section 67 is Rs 3,000."
        }
      ],
      [
        {
          "q": "What is the Act Number and enactment date (assent date) of the Jammu and Kashmir Panchayati Raj Act, 1989?",
          "o": [
            "Act No. IX of 1989, enacted on 11 July 1989",
            "Act No. X of 1989, enacted on 15 August 1989",
            "Act No. V of 1989, enacted on 26 January 1989",
            "Act No. XII of 1989, enacted on 31 October 1989"
          ],
          "a": 0,
          "e": "The J&K Panchayati Raj Act, 1989 is Act No. IX of 1989 and received assent on 11 July 1989."
        },
        {
          "q": "On which date did the Jammu and Kashmir Panchayati Raj Act, 1989 come into force (under SRO-220 dated 30 June 1997)?",
          "o": [
            "5 August 1996",
            "11 July 1989",
            "24 April 1993",
            "1 July 1997"
          ],
          "a": 3,
          "e": "The Act came into force on 1 July 1997 under Notification SRO-220 dated 30 June 1997."
        },
        {
          "q": "Which earlier Act was repealed by Section 83 of the Jammu and Kashmir Panchayati Raj Act, 1989?",
          "o": [
            "Jammu and Kashmir Town Area Act, 1940",
            "Jammu and Kashmir Chowkidari Act, 1956",
            "Jammu and Kashmir Village Panchayat Act, 1958",
            "Jammu and Kashmir Land Revenue Act, 1996"
          ],
          "a": 2,
          "e": "Section 83 repealed the Jammu and Kashmir Village Panchayat Act, 1958."
        },
        {
          "q": "Under Section 3A of the Act, who presides over the meetings of the 'Ward Majlis' and what is the minimum frequency of its meetings?",
          "o": [
            "The Sarpanch presides; meets once a year",
            "The Panch of the ward presides; meets at least once every 3 months",
            "The BDO presides; meets every month",
            "The VLW presides; meets twice a year"
          ],
          "a": 1,
          "e": "Under Section 3A, the Panch of the concerned ward presides over the Ward Majlis, which must meet at least once every 3 months."
        },
        {
          "q": "What is the quorum required for a meeting of the Ward Majlis (Section 3B) and the Halqa Majlis (Section 3D)?",
          "o": [
            "One-tenth (1/10th) of the total number of members",
            "One-third (1/3rd) of the members",
            "One-half (1/2) of the members",
            "One-fifth (1/5th) of the members"
          ],
          "a": 0,
          "e": "The quorum for both the Ward Majlis and the Halqa Majlis is 1/10th of the total number of members (voters)."
        },
        {
          "q": "Under Section 3C of the Act, who comprises the 'Halqa Majlis' and how many minimum meetings must it hold in a financial year?",
          "o": [
            "All Sarpanchs of the Block; 12 meetings a year",
            "Only elected Panches; 4 meetings a year",
            "All heads of families; 1 meeting a year",
            "All registered voters of the Halqa Panchayat; at least 2 meetings in a financial year"
          ],
          "a": 3,
          "e": "The Halqa Majlis consists of all voters of the Halqa Panchayat and must meet at least twice in a financial year."
        },
        {
          "q": "Under Section 4(1) of the Act, what is the normal maximum population norm for constituting a Halqa in hilly areas and plain areas respectively?",
          "o": [
            "5,000 in hilly areas and 7,500 in plain areas",
            "2,000 in hilly areas and 3,000 in plain areas",
            "3,000 in hilly areas and 4,500 in plain areas",
            "1,500 in hilly areas and 2,500 in plain areas"
          ],
          "a": 2,
          "e": "The population norm for a Halqa is not exceeding 3,000 in hilly areas and 4,500 in plain areas."
        },
        {
          "q": "According to Section 4(2) of the Act, a Halqa Panchayat consists of a Sarpanch and how many Panches (excluding the Sarpanch)?",
          "o": [
            "Not less than 5 and not more than 9 Panches",
            "Not less than 7 and not more than 11 Panches",
            "Not less than 9 and not more than 15 Panches",
            "Exactly 14 Panches"
          ],
          "a": 1,
          "e": "Every Halqa Panchayat has a Sarpanch and between 7 and 11 Panches (i.e., 8 to 12 members including the Sarpanch)."
        },
        {
          "q": "How are the Sarpanch and the Naib-Sarpanch of a Halqa Panchayat elected under the current provisions of the Act?",
          "o": [
            "Sarpanch is elected directly by the voters of the Halqa; Naib-Sarpanch is elected by the Panches from among themselves",
            "Both are elected directly by the voters",
            "Both are elected indirectly by the Panches",
            "Sarpanch is elected by Panches and Naib-Sarpanch is nominated by the BDO"
          ],
          "a": 0,
          "e": "The Sarpanch is directly elected by the electorate of the Halqa, while the Naib-Sarpanch is elected by the Panches from among themselves."
        },
        {
          "q": "Which new category was added to the reservation framework in Halqa Panchayats (Sec 4), BDCs (Sec 27), and DDCs (Sec 45A) by the 2024 Amendment Act (alongside SCs, STs, and Women)?",
          "o": [
            "Linguistic Minorities",
            "Ex-Servicemen",
            "Sports Quota",
            "Other Backward Classes (OBCs)"
          ],
          "a": 3,
          "e": "The J&K Panchayati Raj (Amendment) Act, 2024 added Other Backward Classes (OBCs) to the reservation provisions in Sections 4, 27, and 45A."
        },
        {
          "q": "What is the minimum fraction of directly elected seats reserved for women (including SC/ST/OBC women) across all three tiers under the J&K Panchayati Raj Act, 1989?",
          "o": [
            "One-half (1/2)",
            "One-fourth (1/4th)",
            "Not less than one-third (1/3rd)",
            "One-fifth (1/5th)"
          ],
          "a": 2,
          "e": "Not less than 1/3rd (33.33%) of directly elected seats are reserved for women."
        },
        {
          "q": "Under Section 6 of the Act, what is the minimum age required to contest an election as a Panch or Sarpanch of a Halqa Panchayat?",
          "o": [
            "25 years",
            "21 years",
            "18 years",
            "30 years"
          ],
          "a": 1,
          "e": "The minimum age to be elected to a Halqa Panchayat (Panch/Sarpanch) is 21 years."
        },
        {
          "q": "Under Section 7 of the Act, a Sarpanch or Naib-Sarpanch can be removed by a resolution supported by what majority of the total number of Panches (or for missing how many consecutive meetings)?",
          "o": [
            "Not less than 2/3rd of total Panches (and for missing 3 consecutive meetings without reasonable cause)",
            "Simple majority of Panches present (5 consecutive meetings)",
            "3/4th majority (6 consecutive meetings)",
            "1/2 majority (2 consecutive meetings)"
          ],
          "a": 0,
          "e": "Removal under Section 7 requires a resolution passed by not less than 2/3rd of total Panches; missing 3 consecutive meetings without reasonable cause is also a ground."
        },
        {
          "q": "Under Section 9 of the Act, if a Halqa Panchayat cannot be constituted, the Government may appoint an Administrator for a maximum period not exceeding:",
          "o": [
            "2 years",
            "1 year",
            "3 months",
            "6 months"
          ],
          "a": 3,
          "e": "An Administrator (not below the rank of ADM) can be appointed under Section 9 for a maximum period of 6 months."
        },
        {
          "q": "Which Section and Schedule of the Act specify the Powers and Functions of the Halqa Panchayat (including minor irrigation up to 0–5 hectares)?",
          "o": [
            "Section 26 and Schedule I-B",
            "Section 14 and Schedule I-C",
            "Section 12 and Schedule I-A",
            "Section 31 and Schedule II-A"
          ],
          "a": 2,
          "e": "Section 12 read with Schedule I-A enumerates the powers and functions of the Halqa Panchayat."
        },
        {
          "q": "Which Section of the Act establishes the 'Halqa Panchayat Fund' (linked to Schedule I-C)?",
          "o": [
            "Section 13",
            "Section 14",
            "Section 21",
            "Section 34"
          ],
          "a": 1,
          "e": "Section 14 deals with the Halqa Panchayat Fund."
        },
        {
          "q": "Under Section 21 of the Act, within how many days after sanction must the Annual Budget estimates of the Halqa Panchayat be forwarded to the prescribed authority?",
          "o": [
            "Within 3 days",
            "Within 15 days",
            "Within 30 days",
            "Within 60 days"
          ],
          "a": 0,
          "e": "After sanction, the budget estimates are forwarded to the prescribed authority within 3 days and placed before the Halqa Majlis."
        },
        {
          "q": "Under Section 24 and Section 35 of the Act, what is the minimum meeting frequency for both the Halqa Panchayat and the Block Development Council (BDC)?",
          "o": [
            "At least 4 times a year",
            "At least once every 3 months",
            "At least twice a year",
            "At least once every month"
          ],
          "a": 3,
          "e": "Both the Halqa Panchayat (Section 24) and the BDC (Section 35) must hold a meeting at least once every month."
        },
        {
          "q": "Who acts as the ex-officio Secretary of the Block Development Council (BDC) under Section 28 of the Act?",
          "o": [
            "Village Level Worker (VLW)",
            "Additional District Development Commissioner (ADDC)",
            "Block Development Officer (BDO)",
            "Tehsildar"
          ],
          "a": 2,
          "e": "Under Section 28(3), the Block Development Officer (BDO) is the Secretary of the Block Development Council."
        },
        {
          "q": "Who constitutes the electoral college for electing the Chairperson of a Block Development Council (BDC) under Section 41?",
          "o": [
            "All adult voters of the Block directly",
            "All Panches and Sarpanches of Halqa Panchayats falling within the Block",
            "Only the MLAs of the district",
            "Only the 14 DDC members"
          ],
          "a": 1,
          "e": "The Chairperson of a BDC is elected by the electoral college comprising the Panches and Sarpanches of all Halqa Panchayats within the Block."
        }
      ],
      [
        {
          "q": "Which Section of the J&K Panchayati Raj Act, 1989 provides for the constitution of the State Election Commission (SEC)?",
          "o": [
            "Section 36",
            "Section 30",
            "Section 40",
            "Section 45"
          ],
          "a": 0,
          "e": "Section 36 provides for the State Election Commission for superintendence, direction, and control of Panchayat elections."
        },
        {
          "q": "Following the J&K Panchayati Raj (Amendment) Act, 2025 (amending Section 36A), what is the tenure and maximum retirement age of the State Election Commissioner?",
          "o": [
            "3 years or 68 years of age",
            "5 years or 65 years of age",
            "6 years or 62 years of age",
            "5 years (including reappointment) or 70 years of age, whichever is earlier"
          ],
          "a": 3,
          "e": "The 2025 Amendment Act (Act No. V of 2025) increased the SEC's maximum age ceiling from 65 years to 70 years (with a 5-year tenure)."
        },
        {
          "q": "According to Section 36B (as amended in 2024), the State Election Commissioner can be removed from office only in the manner and on the grounds applicable to:",
          "o": [
            "A District Magistrate",
            "A Member of the Public Service Commission",
            "A Judge of a High Court",
            "An Advocate General"
          ],
          "a": 2,
          "e": "Under Section 36B, the State Election Commissioner shall not be removed except in like manner and on like grounds as a Judge of a High Court."
        },
        {
          "q": "Under the 30 June 2026 amendment to Rule 4(4C) of the J&K Panchayati Raj Rules, 1996, what are the four qualifying dates every year for electoral roll revision?",
          "o": [
            "1 January and 1 July only",
            "1 January, 1 April, 1 July, and 1 October",
            "1 April and 1 October only",
            "1 January only"
          ],
          "a": 1,
          "e": "The 30 June 2026 Rules update set four qualifying dates every year: 1 January, 1 April, 1 July, and 1 October."
        },
        {
          "q": "Under Section 45A of the Act, how many directly elected members are there in every District Development Council (DDC)?",
          "o": [
            "14 directly elected members per district",
            "20 directly elected members",
            "11 directly elected members",
            "10 directly elected members"
          ],
          "a": 0,
          "e": "Every District Development Council (DDC) has 14 directly elected territorial constituencies/members per district."
        },
        {
          "q": "Who serves as the ex-officio Chief Executive Officer (CEO) of the District Development Council (DDC) under Section 45A?",
          "o": [
            "Director Rural Development",
            "Deputy Commissioner (DC)",
            "Block Development Officer (BDO)",
            "Additional District Development Commissioner (ADDC)"
          ],
          "a": 3,
          "e": "The Additional District Development Commissioner (ADDC) is the ex-officio Chief Executive Officer (CEO) of the DDC."
        },
        {
          "q": "What is the minimum number of meetings a District Development Council (DDC) must hold in a financial year, and what is its quorum under Section 45C?",
          "o": [
            "2 meetings a year; quorum is 1/3rd",
            "12 meetings a year; quorum is 1/10th",
            "At least 4 meetings in a financial year; quorum is 1/2 (half) of the members",
            "6 meetings a year; quorum is 2/3rd"
          ],
          "a": 2,
          "e": "A DDC meets at least 4 times in a financial year (once every quarter), and its quorum is 1/2 of the members."
        },
        {
          "q": "Under Section 45D of the Act, how many Standing Committees are constituted in every District Development Council (DDC), and what are their names?",
          "o": [
            "3 Standing Committees: Finance, Works, and Justice",
            "5 Standing Committees: Finance, Development, Public Works, Health & Education, and Welfare (F-D-P-H-W)",
            "7 Standing Committees",
            "4 Standing Committees"
          ],
          "a": 1,
          "e": "Section 45D provides for 5 Standing Committees in every DDC: Finance, Development, Public Works, Health and Education, and Welfare."
        },
        {
          "q": "Which Standing Committee of the District Development Council (DDC) is headed ex-officio by the Chairperson of the DDC?",
          "o": [
            "Standing Committee on Finance",
            "Standing Committee on Welfare",
            "Standing Committee on Public Works",
            "Standing Committee on Health and Education"
          ],
          "a": 0,
          "e": "The Chairperson of the DDC is the ex-officio Chairperson of the Standing Committee on Finance."
        },
        {
          "q": "Under Section 48 of the Act, how many members constitute a 'Panchayati Adalat', what is its quorum, and what is the minimum age required for a member?",
          "o": [
            "11 members, quorum of 5, and minimum age of 35 years",
            "7 members, quorum of 4, and minimum age of 21 years",
            "3 members, quorum of 2, and minimum age of 25 years",
            "5 members, quorum of 3 members, and minimum age of 30 years"
          ],
          "a": 3,
          "e": "A Panchayati Adalat consists of 5 literate members (minimum age 30 years), with a quorum of 3 members and a 5-year term."
        },
        {
          "q": "Who acts as the Judicial Clerk / Secretary to the Panchayati Adalat for keeping records under Section 51?",
          "o": [
            "The Naib-Sarpanch",
            "The Sarpanch",
            "The Secretary of the Halqa Panchayat",
            "The Patwari"
          ],
          "a": 2,
          "e": "Under Section 51, the Secretary of the Halqa Panchayat acts as the judicial clerk/secretary to the Panchayati Adalat."
        },
        {
          "q": "Under Section 58 of the Act, what is the maximum penalty a Panchayati Adalat can impose in a criminal case?",
          "o": [
            "A fine up to Rs 5,000 or 1 month imprisonment",
            "A fine not exceeding Rs 1,000 (and no power to award imprisonment)",
            "A fine up to Rs 3,000",
            "A fine up to Rs 500"
          ],
          "a": 1,
          "e": "Under Section 58, a Panchayati Adalat cannot sentence any person to imprisonment and can impose a maximum criminal fine of Rs 1,000."
        },
        {
          "q": "Under Section 60 (and Section 77), what is the maximum compensation a Panchayati Adalat can award to an accused for a false/frivolous complaint (or fine for contempt of Adalat)?",
          "o": [
            "Up to Rs 200",
            "Up to Rs 1,000",
            "Up to Rs 500",
            "Up to Rs 3,000"
          ],
          "a": 0,
          "e": "Both compensation to an accused for a false complaint (Section 60) and the fine for contempt of Adalat (Section 77) have a ceiling of Rs 200."
        },
        {
          "q": "Under Section 62 of the Act, if a fine or compensation imposed by a Panchayati Adalat remains unpaid for how many days is it certified to the District Panchayat Officer for recovery?",
          "o": [
            "90 days",
            "60 days",
            "15 days",
            "30 days"
          ],
          "a": 3,
          "e": "If a fine or compensation remains unpaid for 30 days, the Adalat certifies the same to the District Panchayat Officer for recovery."
        },
        {
          "q": "Under Section 67 of the Act, what is the main pecuniary (monetary) limit of civil suits cognizable by a Panchayati Adalat?",
          "o": [
            "Up to Rs 10,000",
            "Up to Rs 1,000",
            "Up to Rs 3,000",
            "Up to Rs 5,000"
          ],
          "a": 2,
          "e": "Section 67 fixes the main civil jurisdiction limit of a Panchayati Adalat at Rs 3,000."
        },
        {
          "q": "Under Section 70 of the Act, what is the maximum rate of interest per annum that a Panchayati Adalat may decree in a money suit?",
          "o": [
            "Not exceeding 6% per annum",
            "Not exceeding 10% per annum",
            "Not exceeding 12% per annum",
            "Not exceeding 18% per annum"
          ],
          "a": 1,
          "e": "Under Section 70, a Panchayati Adalat may allow interest not exceeding 10 percent per annum."
        },
        {
          "q": "Under Section 74 of the Act, within what time period can an aggrieved party file a revision application before the District Judge (civil) or Sessions Judge (criminal) against an order of a Panchayati Adalat?",
          "o": [
            "Within 60 days",
            "Within 30 days",
            "Within 90 days",
            "Within 14 days"
          ],
          "a": 0,
          "e": "Under Section 74, a revision application may be made within 60 days to the District Judge (for suits) or Sessions Judge (for criminal cases)."
        },
        {
          "q": "Under Section 78 of the Act, can a judgment-debtor be arrested or imprisoned in execution of a civil decree passed by a Panchayati Adalat?",
          "o": [
            "Yes, if the decree exceeds Rs 1,000",
            "Yes, up to 15 days imprisonment",
            "Yes, with permission of the District Judge",
            "No, arrest or imprisonment in execution of a civil decree is strictly barred"
          ],
          "a": 3,
          "e": "Section 78 explicitly bars any arrest or imprisonment of a debtor in execution of a civil decree of a Panchayati Adalat."
        },
        {
          "q": "Which Sections of the J&K Panchayati Raj Act, 1989 empower the Government to make 'Rules' and the Panchayati Raj institutions to frame 'Bye-Laws' respectively?",
          "o": [
            "Section 82 and Section 83",
            "Section 75 and Section 76",
            "Section 80 (Rules by Government) and Section 81 (Bye-Laws by Panchayats)",
            "Section 43 and Section 44"
          ],
          "a": 2,
          "e": "Section 80 empowers the Government to make Rules, while Section 81 empowers Panchayati institutions to make Bye-Laws."
        },
        {
          "q": "Which Schedule of the J&K Panchayati Raj Act, 1989 enumerates the Powers and Functions of the Block Development Council (BDC, linked to Section 31)?",
          "o": [
            "Schedule I-A",
            "Schedule II-A",
            "Schedule I-C",
            "Schedule II-C"
          ],
          "a": 1,
          "e": "Schedule II-A lists the functions of the BDC (while Schedule I-A lists the functions of the Halqa Panchayat)."
        }
      ]
    ]
  }
};

  const ACTS_TOPIC_ORDER = [
    "acts_reorg",
    "acts_personalities",
    "acts_languages",
    "acts_panchayat"
  ];

  // Expose globally and allow future files (like acts_more.js) to add new topics inside ACTS folder!
  window.JKSSB_ACTS_TOPICS = ACTS_TOPICS_MAP;
  window.JKSSB_ACTS_ORDER = ACTS_TOPIC_ORDER;

  window.JKSSB_REGISTER_ACTS_TOPIC = function (topicConfig) {
    if (!topicConfig || !topicConfig.key || !Array.isArray(topicConfig.sets)) return;
    ACTS_TOPICS_MAP[topicConfig.key] = topicConfig;
    if (ACTS_TOPIC_ORDER.indexOf(topicConfig.key) === -1) {
      ACTS_TOPIC_ORDER.push(topicConfig.key);
    }
    if (window.JKSSB_PORTAL) {
      window.JKSSB_PORTAL[topicConfig.key] = {
        SET_TITLES: topicConfig.SET_TITLES || [],
        sets: topicConfig.sets
      };
    }
    syncActsIntoPortal();
  };

  let inActsFolderMode = false;
  let activeActsTopicKey = null;

  function getActiveUserSlug() {
    try {
      const raw =
        window.localStorage.getItem("jkssb_portal_active_user_v3") ||
        window.localStorage.getItem("jkssb_portal_active_user_v2") ||
        "";
      return raw.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "guest_default";
    } catch (e) {
      return "guest_default";
    }
  }

  function getTopicAttemptedSetsCount(topicKey, totalSets) {
    let count = 0;
    const slug = getActiveUserSlug();
    for (let s = 0; s < totalSets; s++) {
      try {
        const key = `jkssb_user_${slug}__hist25_${topicKey}_${topicKey}_main_set${s + 1}`;
        const raw = window.localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) count++;
        }
      } catch (e) {}
    }
    return count;
  }

  function getActsTotals() {
    let totalTopics = ACTS_TOPIC_ORDER.length;
    let totalSets = 0;
    let totalQs = 0;
    ACTS_TOPIC_ORDER.forEach(k => {
      const t = ACTS_TOPICS_MAP[k];
      if (t && Array.isArray(t.sets)) {
        totalSets += t.sets.length;
        t.sets.forEach(s => { totalQs += s.length; });
      }
    });
    return { totalTopics, totalSets, totalQs };
  }

  function syncActsIntoPortal() {
    if (!window.JKSSB_PORTAL) return;
    ACTS_TOPIC_ORDER.forEach(k => {
      const t = ACTS_TOPICS_MAP[k];
      if (t) {
        window.JKSSB_PORTAL[k] = {
          SET_TITLES: t.SET_TITLES,
          sets: t.sets
        };
      }
    });
    updateTotalQuestionCounter();
    injectActsCardIntoHomeGrid();
  }

  function updateTotalQuestionCounter() {
    const statEl = document.getElementById("statTotalQuestions");
    if (!statEl || !window.JKSSB_PORTAL) return;
    let baseCount = 5250;
    const { totalQs } = getActsTotals();
    statEl.textContent = (baseCount + totalQs).toLocaleString();
  }

  function injectActsCardIntoHomeGrid() {
    const grid = document.getElementById("subjectsGrid");
    if (!grid) return;
    if (document.getElementById("actsFolderCard")) return;

    const { totalTopics, totalSets, totalQs } = getActsTotals();

    const cardDiv = document.createElement("div");
    cardDiv.id = "actsFolderCard";
    cardDiv.className =
      "group bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-500/40 dark:border-indigo-500/40 p-6 shadow-sm hover:shadow-md hover:border-indigo-500 transition flex flex-col justify-between gap-5";
    cardDiv.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-start justify-between gap-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 flex items-center justify-center text-2xl">
            📂
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
            ${totalTopics} Topics • ${totalSets} Sets • ${totalQs} Qs
          </span>
        </div>
        <h3 class="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
          ACTS (Acts, Personalities &amp; Languages)
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          1. J&amp;K Reorganisation Act 2019 (100 Qs) • 2. Popular Personalities (240 Qs) • 3. Languages of India (100 Qs) • 4. J&amp;K Panchayati Raj Act 1989 (100 Qs) + Future Topic Slots.
        </p>
      </div>
      <div>
        <button type="button" id="openActsFolderBtn" class="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition">
          Open ACTS Folder (${totalTopics} Topics) →
        </button>
      </div>
    `;

    // Insert right after the 2nd card (Modern History) so it sits at the top alongside English & History
    if (grid.children.length >= 2) {
      grid.insertBefore(cardDiv, grid.children[2]);
    } else {
      grid.appendChild(cardDiv);
    }

    document.getElementById("openActsFolderBtn").addEventListener("click", () => {
      openActsFolderView();
    });

    updateTotalQuestionCounter();
  }

  function openActsFolderView() {
    inActsFolderMode = true;
    activeActsTopicKey = null;

    ["viewHome", "viewTopics", "viewSets", "viewQuiz", "viewResult"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hidden");
    });
    const viewTopics = document.getElementById("viewTopics");
    if (viewTopics) viewTopics.classList.remove("hidden");

    const titleEl = document.getElementById("topicViewTitle");
    const subEl = document.getElementById("topicViewSubtitle");
    const { totalTopics, totalSets, totalQs } = getActsTotals();
    if (titleEl) {
      titleEl.textContent = `📂 ACTS Folder — ${totalTopics} Topics (${totalSets} Sets • ${totalQs} Questions)`;
    }
    if (subEl) {
      subEl.textContent =
        "J&K Reorganisation Act 2019, Popular Personalities, Languages of India & J&K Panchayati Raj Act 1989 (Statement-Based + One-Liner Sets) + Future Topic Slots.";
    }

    const backBtn = document.getElementById("topStickyBackBtn");
    const backLabel = document.getElementById("topStickyBackLabel");
    if (backBtn && backLabel) {
      backBtn.classList.remove("hidden");
      backLabel.textContent = "Back";
      backBtn.className =
        "px-3 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition flex items-center gap-1.5 shrink-0";
    }

    const bar = document.getElementById("breadcrumbBar");
    if (bar) {
      bar.innerHTML = `
        <button type="button" id="actsBcHomeBtn" class="hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold">🏠 Home</button>
        <span>/</span>
        <span class="font-semibold text-slate-900 dark:text-white">📂 ACTS Folder</span>
      `;
      const hBtn = document.getElementById("actsBcHomeBtn");
      if (hBtn) {
        hBtn.addEventListener("click", () => {
          inActsFolderMode = false;
          activeActsTopicKey = null;
          document.getElementById("backToHomeFromTopicsBtn").click();
        });
      }
    }

    const topicsGrid = document.getElementById("topicsGrid");
    if (!topicsGrid) return;

    const cardsHtml = ACTS_TOPIC_ORDER.map((k, idx) => {
      const t = ACTS_TOPICS_MAP[k];
      const totalS = t.sets.length;
      const doneS = getTopicAttemptedSetsCount(k, totalS);
      return `
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md hover:border-indigo-500/60 transition flex flex-col justify-between gap-4">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-2xl">${t.icon || "📘"}</span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                ${t.shortBadge}
              </span>
            </div>
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">
              ${idx + 1}. ${t.name}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              ${t.desc}
            </p>
          </div>
          <div class="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Completed: <strong class="text-indigo-600 dark:text-indigo-400">${doneS}/${totalS} Sets</strong>
            </span>
            <button type="button" data-acts-topic="${k}" class="acts-topic-open-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition">
              Open ${totalS} Sets →
            </button>
          </div>
        </div>
      `;
    });

    // Add Future Expansion Slot Card inside ACTS Folder
    cardsHtml.push(`
      <div class="bg-slate-50/80 dark:bg-slate-900/60 rounded-2xl border-2 border-dashed border-indigo-300 dark:border-indigo-800 p-5 flex flex-col justify-between gap-4">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between">
            <span class="text-2xl">➕</span>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              Future ACTS Slot Ready
            </span>
          </div>
          <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            More ACTS &amp; Topics Slot (acts_more.js)
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Whenever you want to add more Acts or topics inside this ACTS folder in the future, just create <code>acts_more.js</code> (or <code>acts_topic5.js</code>) in GitHub — no need to edit <code>index.html</code> or <code>extra_questions.js</code>!
          </p>
        </div>
        <div class="pt-2 border-t border-slate-200/70 dark:border-slate-800 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
          ✓ Auto-Loader Active for Future ACTS Topics
        </div>
      </div>
    `);

    topicsGrid.innerHTML = cardsHtml.join("");

    topicsGrid.querySelectorAll(".acts-topic-open-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tKey = btn.getAttribute("data-acts-topic");
        openActsTopicSets(tKey);
      });
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openActsTopicSets(topicKey) {
    const tObj = ACTS_TOPICS_MAP[topicKey];
    if (!tObj) return;
    inActsFolderMode = true;
    activeActsTopicKey = topicKey;

    // Trigger index.html's native openSubject(topicKey) via an existing .subject-open-btn bridge
    const bridgeBtn = document.querySelector("#subjectsGrid .subject-open-btn[data-subject]");
    if (bridgeBtn) {
      const origSubj = bridgeBtn.getAttribute("data-subject");
      bridgeBtn.setAttribute("data-subject", topicKey);
      bridgeBtn.click();
      bridgeBtn.setAttribute("data-subject", origSubj);
    }

    customizeActsSetsScreen(topicKey);
  }

  function customizeActsSetsScreen(topicKey) {
    const tObj = ACTS_TOPICS_MAP[topicKey];
    if (!tObj) return;

    const badgeEl = document.getElementById("setsViewBadge");
    const titleEl = document.getElementById("setsViewTitle");
    const subEl = document.getElementById("setsViewSubtitle");

    if (badgeEl) badgeEl.textContent = `ACTS • ${tObj.name}`;
    if (titleEl) titleEl.textContent = `${tObj.name} (${tObj.shortBadge})`;
    if (subEl) subEl.textContent = tObj.subtitle;

    // Update Set Cards badges to clearly distinguish Statement-Based sets (Sets 1–4) vs One-Liner sets (Sets 5+)
    const setCards = document.querySelectorAll("#setsGrid > div");
    setCards.forEach((card, idx) => {
      const badgeSpan = card.querySelector("span.rounded-full");
      if (!badgeSpan) return;
      if (idx < 4) {
        badgeSpan.className =
          "px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300";
        badgeSpan.textContent =
          topicKey === "acts_personalities"
            ? "Statement-Based & Match (20 Qs)"
            : "Statement-Based Set (15 Qs)";
      } else {
        badgeSpan.className =
          "px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
        badgeSpan.textContent = "High-Yield One-Liner MCQs (20 Qs)";
      }
    });

    // Update Breadcrumb Bar so user can click "📂 ACTS Folder" or "🏠 Home"
    const bar = document.getElementById("breadcrumbBar");
    if (bar) {
      bar.innerHTML = `
        <button type="button" id="actsSetBcHome" class="hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold">🏠 Home</button>
        <span>/</span>
        <button type="button" id="actsSetBcFolder" class="hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold">📂 ACTS Folder</button>
        <span>/</span>
        <span class="font-semibold text-slate-900 dark:text-white">${tObj.name}</span>
      `;
      const hBtn = document.getElementById("actsSetBcHome");
      const fBtn = document.getElementById("actsSetBcFolder");
      if (hBtn) {
        hBtn.addEventListener("click", () => {
          inActsFolderMode = false;
          activeActsTopicKey = null;
          document.getElementById("backToHomeFromTopicsBtn").click();
        });
      }
      if (fBtn) {
        fBtn.addEventListener("click", () => {
          openActsFolderView();
        });
      }
    }
  }

  // Restore English Topics header when user opens General English from Home
  document.addEventListener(
    "click",
    function (e) {
      const engBtn = e.target.closest('.subject-open-btn[data-subject="english"]');
      if (engBtn) {
        inActsFolderMode = false;
        activeActsTopicKey = null;
        const titleEl = document.getElementById("topicViewTitle");
        const subEl = document.getElementById("topicViewSubtitle");
        if (titleEl) titleEl.textContent = "General English — 9 Strictly Isolated Topics";
        if (subEl) {
          subEl.textContent =
            "Each topic contains 20 progressive sets (25 questions per set = 500 unique questions per topic). Sets 1–4 cover Basic Concepts; Sets 5–20 cover All JKSSB Exams & SSC CGL patterns.";
        }
      }

      // Intercept "← Back" from Sets View when viewing an ACTS topic so it steps back to ACTS Folder View!
      const backFromSets = e.target.closest("#backFromSetsBtn");
      if (backFromSets && inActsFolderMode && activeActsTopicKey) {
        e.stopImmediatePropagation();
        e.preventDefault();
        openActsFolderView();
        return;
      }

      // Intercept Sticky Top Back Button when on Sets View for an ACTS topic
      const topBack = e.target.closest("#topStickyBackBtn");
      const viewSets = document.getElementById("viewSets");
      if (
        topBack &&
        inActsFolderMode &&
        activeActsTopicKey &&
        viewSets &&
        !viewSets.classList.contains("hidden")
      ) {
        e.stopImmediatePropagation();
        e.preventDefault();
        openActsFolderView();
        return;
      }

      // When returning from Result screen to Sets screen for an ACTS topic, re-apply custom titles/badges
      const backToSetsFromRes = e.target.closest("#backToSetsFromResultBtn");
      if (backToSetsFromRes && inActsFolderMode && activeActsTopicKey) {
        setTimeout(() => {
          customizeActsSetsScreen(activeActsTopicKey);
        }, 20);
      }
    },
    true
  );

  // Also intercept phone hardware Back button (popstate) when on Sets View of an ACTS topic
  window.addEventListener(
    "popstate",
    function (e) {
      const viewSets = document.getElementById("viewSets");
      const confirmModal = document.getElementById("confirmModal");
      const settingsModal = document.getElementById("settingsModal");
      const anyModalOpen =
        (confirmModal && !confirmModal.classList.contains("hidden")) ||
        (settingsModal && !settingsModal.classList.contains("hidden"));

      if (
        !anyModalOpen &&
        inActsFolderMode &&
        activeActsTopicKey &&
        viewSets &&
        !viewSets.classList.contains("hidden")
      ) {
        e.stopImmediatePropagation();
        openActsFolderView();
        try {
          window.history.pushState({ jkPortalGuard: true }, "", window.location.href);
        } catch (err) {}
      }
    },
    true
  );

  // Observe #subjectsGrid and #setsGrid so whenever Home or Sets re-renders, ACTS stays synced
  function setupObservers() {
    const subjGrid = document.getElementById("subjectsGrid");
    if (subjGrid) {
      const obs = new MutationObserver(() => {
        injectActsCardIntoHomeGrid();
      });
      obs.observe(subjGrid, { childList: true });
    }

    const setsGrid = document.getElementById("setsGrid");
    if (setsGrid) {
      const obsSets = new MutationObserver(() => {
        if (inActsFolderMode && activeActsTopicKey) {
          customizeActsSetsScreen(activeActsTopicKey);
        }
      });
      obsSets.observe(setsGrid, { childList: true });
    }
  }

  // Auto-loader for future topics inside the ACTS folder (so user never has to edit extra_questions.js either!)
  function loadFutureActsTopicFiles() {
    const futureFiles = [
      "acts_more.js",
      "acts_topic5.js",
      "acts_topic6.js",
      "acts_topic7.js",
      "acts_topic8.js",
      "acts_topic9.js",
      "acts_topic10.js"
    ];
    futureFiles.forEach(file => {
      try {
        const s = document.createElement("script");
        s.src = file;
        s.async = true;
        s.onerror = function () {};
        document.head.appendChild(s);
      } catch (e) {}
    });
  }

  function initActsModule() {
    syncActsIntoPortal();
    setupObservers();
    loadFutureActsTopicFiles();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initActsModule);
  } else {
    initActsModule();
  }
})();
