const toggle = document.getElementById("change-theme");
const icon = document.getElementById("theme-icon");

let darkMode = localStorage.getItem("darkMode");

console.log(darkMode);

const toggleLight = () => {
  document.body.classList.add("light");
  localStorage.setItem("darkMode", null);
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
};

const toggleDark = () => {
  document.body.classList.remove("light");
  localStorage.setItem("darkMode", "enabled");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
};

if (darkMode === "enabled") {
  toggleDark();
} else {
  toggleLight();
}

toggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  document.body.classList.toggle("light");
  toggle.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(20%)" },
      { transform: "translateY(15%)" },
      { transform: "translateY(5%)" },
      { transform: "translateY(0)" },
    ],
    {
      duration: 200,
    }
  );

  if (darkMode !== "enabled") {
    toggleDark();
    console.log(darkMode);
  } else {
    toggleLight();
    console.log(darkMode);
  }
});
