# 📘 Low-Level Design (LMS Frontend)

## 1. Overview
- Web-based LMS for Grades 1–9.  
- Two contest topics:  
  1. Critical Thinking & Applied Knowledge (CTAK)  
  2. Ethical Decision-Making & Integrity (EDMI)  
- Each topic → **2 levels** → **10 multiple-choice questions (MCQs)** each.  
- Progression rule: Pass Level 1 (≥7/10) to unlock Level 2.  

---

## 2. Pages

### 2.1 Home Page
**Purpose:** Entry point for quiz setup.  
**UI Elements:**
- Grade selector (1–9)  
- Topic selector (CTAK / EDMI)  
- Level selector (Level 1 / Level 2 → disabled until unlocked)  
- Start Quiz button  
- (Optional) last score summary or leaderboard  

---

### 2.2 Quiz Page
**Purpose:** Conduct and complete the MCQ quiz.  
**UI Elements:**
- Header: Topic, Level, Grade  
- Progress: Question count + (optional) Timer  
- Question card: stem + options (radio buttons)  
- Navigation: Next / Previous  
- Submit button  
- Result block (score, retry, back to home)

### 3. Core Flow

## Home Page
1. User picks **Grade → Topic → Level**.  
2. App checks unlock rules (**Level 2 requires passing Level 1**).  
3. User clicks **Start Quiz**.  

## Quiz Page
1. Load **10 questions** based on selection.  
2. Allow **navigation** (Next/Prev) and **answer selection**.  
3. On **Submit** → calculate score.  
4. Show **result inline** (e.g., "You scored 8/10").  
5. If passed → **unlock next level**.  
6. Options: **Retry** or **Return Home**.

