import { createMain } from "./createMain";

function storedList(titleInput, change1, currentProject, main, elements) {
  titleInput.value = "";
  let projectInputs = [];

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
      let page = document.querySelector(`.page.project-${i}`);

      if (!page) {
        // Create a new page element
        page = document.createElement("div");
        page.setAttribute("class", `page project-${i}`);

        const head = document.createElement("div");
        head.setAttribute("class", "head");
        head.innerHTML = `project${i}`;

        const middle = document.createElement("div");
        middle.setAttribute("class", "middle");

        const foot = document.createElement("div");
        foot.setAttribute("class", "foot");

        page.appendChild(head);
        page.appendChild(middle);
        page.appendChild(foot);
        main.appendChild(page);

        // Add event listeners
        createMain(page, head, projectInputs, i, middle, foot, change1);
      }

      // Hide current project and show current one
      if (currentProject !== null) {
        currentProject.style.display = "none";
      }
      page.style.display = "block";
      currentProject = page;
    });
  }
}

export { storedList };
