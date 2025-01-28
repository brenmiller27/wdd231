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
       
        {
            courseName: "CSE 110",
            completion: "completed"
        },
        {
            courseName: "WDD 130",
            completion: "completed"
        },
        {
            courseName: "CSE 111",
            completion: "completed"
        },
        {
            courseName: "CSE 210",
            completion: "Not completed"
        },
        {
            courseName: "WDD 131",
            completion: "completed"
        },
        {
            courseName: "WDD 231",
            completion: " not completed"
        },
       
    ];

    const templeContainer = document.getElementById("courses");

    const displayTemples = (templesArray) => {
      templeContainer.innerHTML = "";
  
      templesArray.forEach((temple) => {
        const card = document.createElement("div");
        card.className = "temple-card";
  
        const name = document.createElement("h1");
        name.textContent = temple.templeName;
        card.appendChild(name);
  
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);
  
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);
  
        const area = document.createElement("p");
        area.textContent = `Total Area: ${temple.area} sq ft`;
        card.appendChild(area);
  
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        card.appendChild(image);
  
        templeContainer.appendChild(card);
      });
    };
  
    const filterByOldTemples = () => {
      const filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
      );
      displayTemples(filteredTemples);
    };
  
    const filterByNewTemples = () => {
      const filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
      );
      displayTemples(filteredTemples);
    };
  
    const filterByLargeTemples = () => {
      const filteredTemples = temples.filter((temple) => temple.area > 90000);
      displayTemples(filteredTemples);
    };
  
    const filterBySmallTemples = () => {
      const filteredTemples = temples.filter((temple) => temple.area < 10000);
      displayTemples(filteredTemples);
    };
  
    document.querySelector("nav").addEventListener("click", (event) => {
      event.preventDefault();
  
      const filter = event.target.textContent.toLowerCase().trim();
  
      switch (filter) {
        case "old":
          filterByOldTemples();
          break;
        case "new":
          filterByNewTemples();
          break;
        case "large":
          filterByLargeTemples();
          break;
        case "small":
          filterBySmallTemples();
          break;
        case "home":
          displayTemples(temples);
          break;
        default:
          break;
      }
    });
    displayTemples(temples);
   });

   