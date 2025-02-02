document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");


    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll('.nav-link').forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }));


    const courses = [
        { name: "CSE 110", type: "CSE", completed: true },
        { name: "WDD 130", type: "WDD", completed: true },
        { name: "CSE 111", type: "CSE", completed: true },
        { name: "CSE 210", type: "CSE", completed: true },
        { name: "WDD 131", type: "WDD", completed: true },
        { name: "WDD 231", type: "WDD", completed: false },
      ];
      
      // Function to display courses
      function displayCourses(courseList) {
        const coursesContainer = document.getElementById("courses");
        coursesContainer.innerHTML = ""; // Clear existing courses
        courseList.forEach((course) => {
          const courseDiv = document.createElement("div");
          courseDiv.textContent = course.name;
          courseDiv.className = course.completed ? "completed" : "not-completed";
          coursesContainer.appendChild(courseDiv);
        });
      }
      
      // Filter courses based on type
      function filterCourses(type) {
        let filteredCourses = courses;
        if (type !== "all") {
          filteredCourses = courses.filter((course) => course.type === type);
        }
        displayCourses(filteredCourses);
      }
      
      // Initial display of all courses
      displayCourses(courses);
      
    }); 
