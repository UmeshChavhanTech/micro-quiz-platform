export const quizData = {
  categories: [
    {
      id: "history",
      title: "History",
      description: "Test your knowledge of historical events and figures"
    },
    {
      id: "science",
      title: "Science",
      description: "Explore the wonders of physics, chemistry, and biology"
    },
    {
      id: "math",
      title: "Mathematics",
      description: "Challenge yourself with mathematical problems"
    },
    {
      id: "programming",
      title: "Programming",
      description: "Test your coding knowledge and skills"
    }
  ],
  quizzes: [
    // History Quizzes
    {
      id: "history-1",
      categoryId: "history",
      title: "World War II",
      description: "Test your knowledge about the Second World War",
      difficulty: "medium",
      estimatedTime: "8-12 min",
      rating: "4.7",
      questions: [
        {
          question: "In which year did World War II begin?",
          options: ["1938", "1939", "1940", "1941"],
          correctAnswer: 1,
          explanation: "World War II began on September 1, 1939, when Germany invaded Poland."
        },
        {
          question: "Which battle is considered the turning point of WWII in the Pacific?",
          options: ["Pearl Harbor", "Battle of Midway", "Battle of Guadalcanal", "Battle of Leyte Gulf"],
          correctAnswer: 1,
          explanation: "The Battle of Midway (June 4-7, 1942) marked the turning point in the Pacific theater."
        },
        {
          question: "Who was the Prime Minister of Britain during most of WWII?",
          options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
          correctAnswer: 1,
          explanation: "Winston Churchill served as Prime Minister from 1940 to 1945 during most of WWII."
        }
      ]
    },
    {
      id: "history-2",
      categoryId: "history",
      title: "Ancient Civilizations",
      description: "Explore the great civilizations of the ancient world",
      difficulty: "easy",
      estimatedTime: "5-8 min",
      rating: "4.5",
      questions: [
        {
          question: "Which ancient wonder of the world was located in Egypt?",
          options: ["Hanging Gardens", "Lighthouse of Alexandria", "Colossus of Rhodes", "Temple of Artemis"],
          correctAnswer: 1,
          explanation: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World, located in Egypt."
        },
        {
          question: "The ancient city of Troy was located in modern-day:",
          options: ["Greece", "Italy", "Turkey", "Egypt"],
          correctAnswer: 2,
          explanation: "The ancient city of Troy was located in what is now northwestern Turkey."
        }
      ]
    },
    // Science Quizzes
    {
      id: "science-1",
      categoryId: "science",
      title: "Basic Physics",
      description: "Fundamental concepts in physics",
      difficulty: "easy",
      estimatedTime: "6-10 min",
      rating: "4.6",
      questions: [
        {
          question: "What is the speed of light in vacuum?",
          options: ["300,000 km/s", "299,792,458 m/s", "186,000 mph", "All of the above"],
          correctAnswer: 1,
          explanation: "The speed of light in vacuum is exactly 299,792,458 meters per second."
        },
        {
          question: "Which law states that for every action, there is an equal and opposite reaction?",
          options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravity"],
          correctAnswer: 2,
          explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction."
        },
        {
          question: "What is the SI unit of force?",
          options: ["Joule", "Newton", "Pascal", "Watt"],
          correctAnswer: 1,
          explanation: "The Newton (N) is the SI unit of force, named after Sir Isaac Newton."
        }
      ]
    },
    {
      id: "science-2",
      categoryId: "science",
      title: "Chemistry Basics",
      description: "Essential chemistry concepts and elements",
      difficulty: "medium",
      estimatedTime: "7-12 min",
      rating: "4.4",
      questions: [
        {
          question: "What is the chemical symbol for gold?",
          options: ["Go", "Au", "Ag", "Gd"],
          correctAnswer: 1,
          explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
        },
        {
          question: "How many electrons does a carbon atom have?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 1,
          explanation: "A carbon atom has 6 electrons, matching its atomic number of 6."
        }
      ]
    },
    // Math Quizzes
    {
      id: "math-1",
      categoryId: "math",
      title: "Algebra Fundamentals",
      description: "Basic algebraic equations and concepts",
      difficulty: "easy",
      estimatedTime: "5-8 min",
      rating: "4.3",
      questions: [
        {
          question: "What is the value of x in the equation: 2x + 5 = 15?",
          options: ["5", "10", "7.5", "20"],
          correctAnswer: 0,
          explanation: "Solving: 2x + 5 = 15, subtract 5 from both sides: 2x = 10, divide by 2: x = 5."
        },
        {
          question: "What is the slope of the line y = 3x + 2?",
          options: ["2", "3", "5", "1"],
          correctAnswer: 1,
          explanation: "In the equation y = mx + b, m represents the slope. Here, m = 3."
        },
        {
          question: "If f(x) = x² + 3x, what is f(2)?",
          options: ["10", "8", "6", "12"],
          correctAnswer: 0,
          explanation: "f(2) = 2² + 3(2) = 4 + 6 = 10."
        }
      ]
    },
    {
      id: "math-2",
      categoryId: "math",
      title: "Geometry Essentials",
      description: "Shapes, angles, and geometric calculations",
      difficulty: "medium",
      estimatedTime: "8-12 min",
      rating: "4.5",
      questions: [
        {
          question: "What is the area of a circle with radius 5?",
          options: ["25π", "10π", "50π", "5π"],
          correctAnswer: 0,
          explanation: "Area of a circle = πr². With r = 5, Area = π(5)² = 25π."
        },
        {
          question: "How many degrees are in a triangle?",
          options: ["90°", "180°", "270°", "360°"],
          correctAnswer: 1,
          explanation: "The sum of angles in any triangle is always 180 degrees."
        }
      ]
    },
    // Programming Quizzes
    {
      id: "programming-1",
      categoryId: "programming",
      title: "JavaScript Basics",
      description: "Fundamental JavaScript concepts and syntax",
      difficulty: "easy",
      estimatedTime: "6-10 min",
      rating: "4.8",
      questions: [
        {
          question: "Which of the following is the correct way to declare a variable in JavaScript?",
          options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
          correctAnswer: 0,
          explanation: "In JavaScript, variables are declared using 'var', 'let', or 'const' keywords."
        },
        {
          question: "What does '===' operator do in JavaScript?",
          options: ["Assignment", "Comparison with type coercion", "Strict equality comparison", "Not equal"],
          correctAnswer: 2,
          explanation: "The '===' operator performs strict equality comparison without type coercion."
        },
        {
          question: "Which method is used to add an element to the end of an array?",
          options: ["append()", "push()", "add()", "insert()"],
          correctAnswer: 1,
          explanation: "The push() method adds one or more elements to the end of an array."
        }
      ]
    },
    {
      id: "programming-2",
      categoryId: "programming",
      title: "Python Fundamentals",
      description: "Basic Python programming concepts",
      difficulty: "medium",
      estimatedTime: "7-11 min",
      rating: "4.6",
      questions: [
        {
          question: "Which of the following is the correct way to create a list in Python?",
          options: ["list = [1, 2, 3]", "list = (1, 2, 3)", "list = {1, 2, 3}", "list = <1, 2, 3>"],
          correctAnswer: 0,
          explanation: "Lists in Python are created using square brackets []."
        },
        {
          question: "What is the output of len('Hello')?",
          options: ["4", "5", "6", "Error"],
          correctAnswer: 1,
          explanation: "The len() function returns the number of characters in a string. 'Hello' has 5 characters."
        }
      ]
    }
  ]
};
