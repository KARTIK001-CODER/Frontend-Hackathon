const questions = {
  critical: {
    beginner: [
      {
        question: "A train leaves at 9:00 AM and travels for 2 hours straight. \nAt what time will the train arrive at its destination?",
        options: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
        answer: "11:00 AM",
        hint: "Add 2 hours to 9 AM."
      },
      {
        question: "You need to quickly solve a small addition problem. \nWhat is the correct sum of 12 + 8?",
        options: ["18", "19", "20", "21"],
        answer: "20",
        hint: "Add 12 and 8 together."
      },
      {
        question: "Look at these numbers: 45, 67, 23, 59. \nWhich one is the largest among them?",
        options: ["45", "67", "23", "59"],
        answer: "67",
        hint: "Find the maximum number listed."
      },
      {
        question: "You have 3 apples and you eat 1 of them. \nHow many apples are now left with you?",
        options: ["1", "2", "3", "4"],
        answer: "2",
        hint: "Subtract 1 from 3 apples."
      },
      {
        question: "Think about the days of the week in order. \nWhich day comes immediately after Tuesday?",
        options: ["Monday", "Wednesday", "Thursday", "Friday"],
        answer: "Wednesday",
        hint: "Monday, Tuesday, then Wednesday next."
      },
      {
        question: "A box already has 6 pens inside it. \nIf you add 4 more pens, how many are there in total?",
        options: ["8", "9", "10", "12"],
        answer: "10",
        hint: "Add 6 pens plus 4 pens."
      },
      {
        question: "Different shapes have different sides. \nWhich shape has exactly 3 sides?",
        options: ["Square", "Circle", "Triangle", "Rectangle"],
        answer: "Triangle",
        hint: "Three sides make a triangle."
      },
      {
        question: "You compare 1kg of cotton with 1kg of iron. \nWhich of them is heavier in weight?",
        options: ["Cotton", "Iron", "Both same", "None"],
        answer: "Both same",
        hint: "Equal kilograms weigh the same."
      },
      {
        question: "If you sleep at 10 PM and wake up at 6 AM, \nfor how many hours did you sleep in total?",
        options: ["6", "7", "8", "9"],
        answer: "8",
        hint: "Count hours between 10 and 6."
      },
      {
        question: "Imagine you divide 100 into two equal parts. \nWhat is the value of half of 100?",
        options: ["20", "25", "40", "50"],
        answer: "50",
        hint: "Divide 100 by number 2."
      }
    ],
    advanced: [
      {
        question: "A puzzle has 5 red, 4 blue, and 3 green balls. \nHow many total balls are present in the puzzle?",
        options: ["10", "11", "12", "13"],
        answer: "12",
        hint: "Add red, blue and green balls."
      },
      {
        question: "Four people finish a task in 2 hours. \nIf 8 people work, how long will it take?",
        options: ["1 hour", "30 mins", "2 hours", "4 hours"],
        answer: "1 hour",
        hint: "Double workers means half time."
      },
      {
        question: "The perimeter of a square is given as 20 cm. \nWhat is the length of one side of this square?",
        options: ["4 cm", "5 cm", "6 cm", "10 cm"],
        answer: "5 cm",
        hint: "Perimeter divided by 4 sides."
      },
      {
        question: "A shopkeeper buys an item for $80 and sells it at $100. \nHow much profit does he make on the sale?",
        options: ["10", "15", "20", "25"],
        answer: "20",
        hint: "Selling minus cost equals profit."
      },
      {
        question: "The time on a clock is 3:15. \nWhat is the angle between the hour and minute hand?",
        options: ["0°", "7.5°", "45°", "90°"],
        answer: "7.5°",
        hint: "Small shift after 3 o’clock."
      },
      {
        question: "You roll a standard dice once. \nWhat is the probability of getting an even number?",
        options: ["1/2", "1/3", "2/3", "1/6"],
        answer: "1/2",
        hint: "Half dice faces are even."
      },
      {
        question: "Fifteen books are shared equally among 5 students. \nHow many books does each student get?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        hint: "Divide 15 books by 5."
      },
      {
        question: "A car travels 60 km in 1 hour of time. \nHow far will it travel in 2.5 hours?",
        options: ["100 km", "120 km", "150 km", "180 km"],
        answer: "150 km",
        hint: "Multiply speed by given time."
      },
      {
        question: "The sum of three consecutive even numbers is 48. \nWhat is the largest among these three numbers?",
        options: ["14", "16", "18", "20"],
        answer: "18",
        hint: "Divide 48 into three evens."
      },
      {
        question: "Water boils at 100°C in Celsius scale. \nWhat is this temperature converted into Fahrenheit?",
        options: ["180°F", "200°F", "212°F", "220°F"],
        answer: "212°F",
        hint: "C × 9/5 then add 32."
      }
    ]
  },
  ethics: {
    beginner: [
      {
        question: "You find a lost wallet lying on the street. \nWhat is the most responsible action to take?",
        options: ["Keep the money", "Return it to the owner", "Ignore it", "Give it to a friend"],
        answer: "Return it to the owner",
        hint: "Best action is returning wallet."
      },
      {
        question: "During an exam, someone suggests cheating. \nWhat is the correct view about cheating?",
        options: ["Acceptable", "Wrong", "Smart", "Helpful"],
        answer: "Wrong",
        hint: "Cheating is never the right."
      },
      {
        question: "You accidentally break your friend’s toy. \nWhat is the best action to take afterward?",
        options: ["Hide it", "Blame someone else", "Apologize and fix/replace it", "Do nothing"],
        answer: "Apologize and fix/replace it",
        hint: "Take responsibility for mistake."
      },
      {
        question: "Imagine borrowing something from a classmate. \nWhat happens if you do not return it?",
        options: ["Responsible", "Unfair", "Honest", "Kind"],
        answer: "Unfair",
        hint: "Not returning borrowed item unfair."
      },
      {
        question: "You spill water in class by mistake. \nWhat is the most responsible step to take?",
        options: ["Ignore it", "Clean it up", "Wait for teacher", "Blame others"],
        answer: "Clean it up",
        hint: "Always clean your own mess."
      },
      {
        question: "A friend asks for your homework answers. \nIs sharing them the right thing to do?",
        options: ["Helping", "Cheating", "Teamwork", "Smart"],
        answer: "Cheating",
        hint: "Sharing answers is cheating."
      },
      {
        question: "You see someone being bullied in school. \nWhat action should you take in this situation?",
        options: ["Join the bully", "Stay silent", "Support the victim", "Laugh"],
        answer: "Support the victim",
        hint: "Stand up for the victim."
      },
      {
        question: "You made a promise to a classmate. \nWhat is the right thing to do with that promise?",
        options: ["Forget it", "Do it later", "Keep your promise", "Ignore it"],
        answer: "Keep your promise",
        hint: "Always keep your promises."
      },
      {
        question: "A shopkeeper gives you extra change by mistake. \nWhat is the ethical thing to do?",
        options: ["Keep it", "Return it to the shopkeeper", "Share with friends", "Ignore"],
        answer: "Return it to the shopkeeper",
        hint: "Honesty means return extra money."
      },
      {
        question: "Your classmate forgets to bring lunch today. \nWhat is the right way to act?",
        options: ["Laugh", "Tease", "Share your food", "Ignore them"],
        answer: "Share your food",
        hint: "Be kind and share food."
      }
    ],
    advanced: [
      {
        question: "A friend asks you to lie on their behalf. \nWhat is the most ethical way to respond?",
        options: ["Agree without question", "Politely refuse", "Lie anyway", "Avoid answering"],
        answer: "Politely refuse",
        hint: "Honesty is always the best."
      },
      {
        question: "Ethical decision-making relies on many values. \nWhich principle is the most important one?",
        options: ["Integrity", "Selfishness", "Popularity", "Convenience"],
        answer: "Integrity",
        hint: "Integrity is the key value."
      },
      {
        question: "Someone shares confidential information with you. \nWhat is the most ethical action to take?",
        options: ["Share with friends", "Keep it private", "Post online", "Ignore"],
        answer: "Keep it private",
        hint: "Respect confidentiality always."
      },
      {
        question: "Imagine taking credit for another person’s work. \nHow should this action be considered?",
        options: ["Fair", "Wrong", "Teamwork", "Acceptable"],
        answer: "Wrong",
        hint: "Stealing credit is wrong."
      },
      {
        question: "At work, you make a small mistake. \nWhat is the most ethical way to deal with it?",
        options: ["Hide it", "Blame others", "Admit and correct it", "Ignore it"],
        answer: "Admit and correct it",
        hint: "Own up and fix mistakes."
      },
      {
        question: "In a competition, you want to win fairly. \nWhat is the ethical way to compete?",
        options: ["Cheat to win", "Play fair", "Lie to succeed", "Ignore rules"],
        answer: "Play fair",
        hint: "Winning fairly shows integrity."
      },
      {
        question: "You feel a certain rule is unfair or wrong. \nWhat is the best action you should take?",
        options: ["Break it quietly", "Discuss and seek change", "Ignore it", "Convince others to break it"],
        answer: "Discuss and seek change",
        hint: "Talk and seek fair change."
      },
      {
        question: "Two people are in conflict with each other. \nWhat is the most ethical way to resolve it?",
        options: ["Fight", "Ignore each other", "Communicate respectfully", "Take revenge"],
        answer: "Communicate respectfully",
        hint: "Resolve conflict by communication."
      },
      {
        question: "Imagine nobody is watching your actions. \nWhat should guide your choices in such moments?",
        options: ["Convenience", "Integrity", "Popularity", "Laziness"],
        answer: "Integrity",
        hint: "Integrity guides unseen actions."
      },
      {
        question: "You are leading a team with many members. \nWhat is the most ethical way to act as a leader?",
        options: ["Favor friends", "Treat everyone fairly", "Hide information", "Avoid responsibility"],
        answer: "Treat everyone fairly",
        hint: "Good leaders treat all fairly."
      }
    ]
  }
};

export default questions;
