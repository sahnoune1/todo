import { createMain } from "./createMain";

function storedList(list, titleInput, change1, main, elements) {
  titleInput.value = "";
  let projectInputs = [];

  for (let i = 0; i < list.children.length; i++) {
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

      // Check if a page is already displayed and hide it
      const displayedPage = document.querySelector(
        ".page:not([style*='none'])"
      );
      if (displayedPage && displayedPage !== page) {
        displayedPage.style.display = "none";
      }

      // Show the current page
      page.style.display = "block";
    });
  }
}

export { storedList };
