document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  document.querySelectorAll(".navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Transition effect for skills
  const skillsSection = document.querySelector(".skills");
  const skillBars = document.querySelectorAll(".skill-per");
  const circles = document.querySelectorAll(".circle");

  window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
      skillBars.forEach((skillBar) => {
        const per = skillBar.getAttribute("per");
        skillBar.style.width = per;
      });
    }
  });
});
