// Example course array
const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 2, subject: "WDD", completed: true },
  { code: "CSE111", name: "Programming with Functions", credits: 3, subject: "CSE", completed: true },
  { code: "WDD231", name: "Frontend Development I", credits: 3, subject: "WDD", completed: false },
  { code: "CSE210", name: "Programming with Classes", credits: 3, subject: "CSE", completed: false }
];

// DOM elements
const courseCards = document.getElementById("course-cards");
const totalCreditsElement = document.getElementById("total-credits");

// Filter buttons
const allBtn = document.getElementById("all");
const wddBtn = document.getElementById("wdd");
const cseBtn = document.getElementById("cse");

// Render courses
function displayCourses(courseList) {
  courseCards.innerHTML = ""; // clear before rendering

  let totalCredits = 0;

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    // Add completed class if finished
    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
      ${course.completed ? `<span class="badge">✓ Completed</span>` : ""}
    `;

    courseCards.appendChild(card);

    totalCredits += course.credits;
  });

  // Update total credits
  totalCreditsElement.textContent = totalCredits;
}

// Filters
allBtn.addEventListener("click", () => displayCourses(courses));
wddBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));
cseBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));

// Initial load
displayCourses(courses);
