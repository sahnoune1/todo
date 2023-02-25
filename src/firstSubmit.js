import { createMain } from "./createMain";

function firstSubmit(
  form,
  store,
  test,
  titleInput,
  array,
  change1,
  currentProject,
  main
) {
  // Get the list element
  const list = document.querySelector(".list");

  // Check if there is any stored content
  const storedListContent = localStorage.getItem("listContent");
  if (storedListContent) {
    list.innerHTML = storedListContent; // Insert the stored content into the list element
  }

  // Add a submit event listener to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    store = titleInput.value;
    if (test.includes(store)) {
      alert("type again");
      return;
    }

    test.push(store);

    const div = document.createElement("div");
    div.setAttribute("class", "last");

    div.innerHTML = store;
    list.appendChild(div);
    array.push(store);

    const elements = document.querySelectorAll(".last");

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
          createMain(head, projectInputs, i, middle, foot, change1);
        }

        // Hide current project and show current one
        if (currentProject !== null) {
          currentProject.style.display = "none";
        }
        page.style.display = "block";
        currentProject = page;
      });
    }

    // Save the updated list content to local storage
    localStorage.setItem("listContent", list.innerHTML);
  });
}

export { firstSubmit };
