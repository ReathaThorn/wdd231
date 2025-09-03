const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 2, subject: "WDD", completed: true },
  { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, subject: "WDD", completed: true },
  { code: "CSE111", name: "Programming with Functions", credits: 2, subject: "CSE", completed: true },
  { code: "CSE210", name: "Programming with Classes", credits: 2, subject: "CSE", completed: false },
  { code: "WDD231", name: "Web Frontend Development I", credits: 2, subject: "WDD", completed: false }
];

const courseCards = document.querySelector("#course-cards");
const totalCreditsEl = document.querySelector("#total-credits");

function displayCourses(courseArray) {
  courseCards.innerHTML = "";
  courseArray.forEach(course => {
    const card = document.createElement("div");
    card.className = `course-card ${course.completed ? "completed" : ""}`;
    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
    courseCards.appendChild(card);
  });

  const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsEl.textContent = totalCredits;
}

// Event listeners
document.querySelector("#all").addEventListener("click", () => displayCourses(courses));
document.querySelector("#wdd").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));
document.querySelector("#cse").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));

// Default display
displayCourses(courses);
