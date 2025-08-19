## 1) Product Summary & Goals

**Audience:** Students of Grades **1–9**  
**Scope:** Two topics — **CTAK** (Critical Thinking & Applied Knowledge) and **EDMI** (Ethical Decision-Making & Integrity).  
**Quizzing Model:** Each topic has **2 levels**, each level has **10 MCQs**. Passing Level 1 (≥ **7/10**) unlocks Level 2 for that topic & grade.

**Primary goals**
- Lightweight, focused flow: **Home → Quiz → Result**.
- Simple progression logic: **unlock Level 2** on pass.
- Reliable local persistence (per topic & grade) for unlocks & last score.
- Accessible, responsive UI with keyboard/screen-reader support.

---

## 2) Information Architecture & Routing

- **/** → `Home` (grade/topic/level selection, last scores)
- **/quiz?grade=G&topic=T&level=L** → `Quiz`
- **/result?grade=G&topic=T&level=L&score=S** → `Result` (optional dedicated route; inline result is also supported)

**Route Guards**
- If `/quiz` is opened with `level=2` but **Level 2 is not unlocked**, redirect to `Home` with a toast explaining the rule.

---

## 3) User Journeys (UX Flows)

### A. Start a Level 1 Quiz
1. Select **Grade** (1–9)
2. Select **Topic** (CTAK / EDMI)
3. **Level 1** is enabled → click **Start Quiz**
4. Answer 10 MCQs → Submit → See score
5. If score ≥ 7 → Level 2 for that **(grade, topic)** is unlocked

### B. Start a Level 2 Quiz (after unlock)
1. Select **Grade** + **Topic**
2. **Level 2** shows enabled (visual tick / unlocked tag)
3. Start Quiz → Answer 10 MCQs → Submit → See score

### C. Edge Flow: Attempt Level 2 before unlock
- Level 2 disabled + tooltip **"Pass Level 1 (≥7/10) to unlock"**
- If forced via URL → route-guard → notice → back to Home

---

## 4) UI Design Details

### 4.1 Home Page
- **Header**: App name + brief subtitle
- **Card**: Grade selector (1–9) → dropdown or segmented control
- **Card**: Topic selector (CTAK / EDMI) → buttons with short description
- **Card**: Level selector  
  - Level 1: always enabled  
  - Level 2: disabled until unlocked (shows lock icon + helper text)
- **Start Quiz** button (primary)
- **Last Score / Progress**: optional compact table showing recent attempts per (grade, topic, level)

**Empty States**
- No scores yet → “No attempts yet. Start your first quiz!”

**Accessibility**
- All controls keyboard-focusable, ARIA labels for selectors and locked state
- Clear contrast and large tap targets

### 4.2 Quiz Page
- **Header strip**: Topic • Level • Grade | **Progress** `Q x/10` | (Optional) Timer
- **Question Card**
  - Question stem
  - 4 options (radio group), entire row clickable
  - Next / Previous buttons (Prev disabled on Q1)
- **Submit** button (only on last question or always visible if desired)
- **Inline Result** after submission: score, pass/fail, actions → Retry / Home

**Error/Edge States**
- If questions fail to load → retry UI with friendly message
- Prevent submission until all questions have an answer (optional)

### 4.3 Result (Inline or Page)
- **Score badge**: e.g., “8/10 🎉”
- **Outcome**: Pass / Fail + rule explanation
- **Actions**: Retry same level, Go Home
- **Unlock Feedback**: If pass at Level 1 → toast “Level 2 unlocked for Topic X, Grade Y”

---
