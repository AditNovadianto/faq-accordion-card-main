const content = document.querySelectorAll(".accordion");

for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", function () {
    content.forEach((content, index) => {
      if (index == i) {
        return;
      }

      const p = content.querySelector("p");

      const svg = content.querySelector(".arrow");

      const section = content.querySelector(".section");

      svg.classList.remove("open");

      p.classList.remove("show");

      section.classList.remove("bold");
    });

    const p = content[i].querySelector("p");

    const svg = content[i].querySelector(".arrow");

    const section = content[i].querySelector(".section");

    svg.classList.toggle("open");

    p.classList.toggle("show");

    section.classList.toggle("bold");
  });
}
