// learning tool
document.addEventListener("DOMContentLoaded", function () {
  const answers = {
    "1a": "level-2",
    "1b": "level-3",
    "2a": "level-2a",
    "2b": "level-2b",
    "2c": "level-2c",
    "2d": "level-2d",
    "2e": "level-2e",
    "3a": "level-4",
    "3b": "level-5",
    "4a": "level-4a",
    "4b": "level-4b",
    "4c": "level-4c",
    "4d": "level-4d",
    "5a": "level-5a",
    "5b": "level-5b",

    // Add more mappings as needed
  };

  document.querySelectorAll(".level").forEach((level) => {
    if (level.id === "level-1") {
      level.classList.add("active");
    }
  });

  document.querySelectorAll(".answer").forEach((answer) => {
    answer.addEventListener("click", () => {
      const currentLevel = document.querySelector(".level.active");
      const nextLevelId = answers[answer.id];

      if (nextLevelId) {
        const nextLevel = document.getElementById(nextLevelId);

        currentLevel.classList.remove("active");
        nextLevel.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".back-to-first").forEach((button) => {
    button.addEventListener("click", () => {
      const currentLevel = document.querySelector(".level.active");
      const firstLevel = document.getElementById("level-1");

      currentLevel.classList.remove("active");
      firstLevel.classList.add("active");
    });
  });

  document.querySelectorAll(".back-to-previous").forEach((button) => {
    button.addEventListener("click", () => {
      const currentLevel = document.querySelector(".level.active");
      const prevLevelId = button.getAttribute("data-prev");
      const prevLevel = document.getElementById(prevLevelId);

      currentLevel.classList.remove("active");
      prevLevel.classList.add("active");
    });
  });
});

// show more show less
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".answer h4");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const answerMore = this.nextElementSibling;
      const arrowDown = this.querySelector(".toggle-arrow");
      const arrowUp = this.querySelector(".toggle-arrow-up");

      if (answerMore.style.display === "none" || !answerMore.style.display) {
        answerMore.style.display = "block";
        arrowDown.style.display = "none";
        arrowUp.style.display = "inline";
      } else {
        answerMore.style.display = "none";
        arrowDown.style.display = "inline";
        arrowUp.style.display = "none";
      }
    });
  });

  const arrowsUp = document.querySelectorAll(".toggle-arrow-up");
  arrowsUp.forEach((arrow) => {
    arrow.addEventListener("click", function () {
      const answerMore = this.parentElement;
      const h4 = answerMore.previousElementSibling;
      const arrowDown = h4.querySelector(".toggle-arrow");

      answerMore.style.display = "none";
      arrowDown.style.display = "inline";
      this.style.display = "none";
    });
  });
});

//menu
// show more show less
document.addEventListener("DOMContentLoaded", function () {
  const toggleArrowM = document.querySelector(".toggle-arrow-m");
  const toggleArrowUpM = document.querySelector(".toggle-arrow-up-m");
  const dropdownMenu = document.querySelector(".menu-dropdown-consumer");

  toggleArrowM.addEventListener("click", function () {
    dropdownMenu.style.display = "block";
    toggleArrowM.style.display = "none";
    toggleArrowUpM.style.display = "inline";
  });

  toggleArrowUpM.addEventListener("click", function () {
    dropdownMenu.style.display = "none";
    toggleArrowM.style.display = "inline";
    toggleArrowUpM.style.display = "none";
  });
});
