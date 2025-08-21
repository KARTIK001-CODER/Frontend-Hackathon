# 🎓 Quizly – Interactive Quiz App

## 📖 Overview
**Quizly** is a React + Vite application designed for interactive quizzes with a clean and modern UI.

Key Features:
- 📌 Dashboard with challenges, Courses 
- 👤 Profile integration (Name, Class, Email)  
- 📝 Quiz system with multiple levels  
- 🏆 Result page with score and feedback  

---

## 🗂️ Pages & Layout

### 🔑 1. Sign Up Page
- Collects:
  - **Name**
  - **Class**
  - **Email**
- Stores user details in local state/context
- Redirects to **Dashboard**

---

### 🏠 2. Dashboard
**Layout** → 3 Column Structure  

| Section          | Details                                                                 |
|------------------|-------------------------------------------------------------------------|
| **Navbar (Top)** |  Left: Logo ("QUIZLY") <br> - Right: 🔔 Notifications + Profile Image   |
| **Main Section** | `ChallengeCard` → Challenges with Level 1 (Available), Level 2 (Locked) |
| **Main Section** | `CoursesCard`   → Courses                                               |

**ChallengeCard Details:**
- Title + description  
- **Level 1:** (Available)  
- **Level 2:** (Locked)  

---

### 📝 3. Quizzes Page
- Shows selected quiz questions
- The Question are been stored in the frontend
- Multiple-choice format  
- Progress indicator (e.g., `Question 2/5`)  
- **Submit** button
- **Hint** button 

---

### 📊 4. Result Page
- Display after completing a quiz  
- Shows:  
  - ✅ **Score** (Correct / Total)  
  - 🎉 **Message** (e.g., *"Well done! You unlocked Level 2"*)  
  - Buttons:  
    - 🔄 Retry Quiz  
    - 🏠 Back to Dashboard  

---

## 🧩 Components
- **Navbar.jsx** → Top navigation bar  
- **ChallengeCard.jsx** → Challenge card with levels  
- **CoursesCard.jsx** → Courses
- **Quiz.jsx** → Quiz page with questions  
- **Result.jsx** → Result summary after quiz  

---

## 🔄 User Flow
1. User **signs up** → enters Name, Class, Email  
2. Redirects to **Dashboard** → Profile displays user info  
3. User selects **Level 1 quiz**  
4. Completes quiz → Redirect to **Result page**  
5. If passed → Unlocks **Level 2**  

---
