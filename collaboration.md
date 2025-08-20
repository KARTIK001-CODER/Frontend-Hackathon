# 🤝 Collaboration Log – Quizly

This document tracks individual contributions, challenges faced, and learnings throughout the development of **Quizly**.

---

## 📌 Contribution by {Kartik}

### ✅ Designed & Developed
- 🏠 **Home Page (Dashboard)**  
  - Layout with left (Friends), center (Challenges), and right (Profile + Achievements) sections.  
  - Integrated `ChallengeCard` with **Level 1 (Available)** and **Level 2 (Locked)** functionality.  
  - Styled Dashboard with neat and minimal UI.  

- 📝 **Sign Up Page**  
  - User input fields: **Name, Class, Email**.  
  - Data stored in variables and displayed in the **Dashboard & Profile Card**.  
  - Navigation flow from Sign Up → Dashboard implemented.  

- **Readme Creation** 

- **Design.md Document** 

---

## ⚡ Challenges Faced
1. **Dashboard Styling**  
   - Getting the layout to look balanced without Tailwind CSS.  
   - Solved by using clean **inline CSS** with proper spacing and alignment.  

2. **Navbar Design**  
   - Initially hard to center the logo while keeping notification and profile icons aligned.  
   - Final decision: kept logo left-aligned for better usability.  

3. **Challenge Card Buttons**  
   - Making Level 1 button active and Level 2 appear locked was tricky.  
   - Fixed with conditional styling (green for available, greyed out for locked).  

---