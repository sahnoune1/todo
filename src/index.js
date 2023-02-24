import { create } from "./field";
import { createHead } from "./head";

import { createForm } from "./createForm";

const add = document.querySelector(".add");
const inside = document.querySelector(".inside");
const main = document.querySelector(".main");

let currentProject = null;
let test = [];
let store;
let change1;
let array = [];

// Check if there are any projects in local storage
if (localStorage.getItem("projects")) {
  // Retrieve the array of projects
  array = JSON.parse(localStorage.getItem("projects"));

  // Loop through the array of projects and add them to the page
  for (let i = 0; i < array.length; i++) {
    const list = document.querySelector(".list");
    const div = document.createElement("div");
    div.setAttribute("class", "last");

    div.innerHTML = array[i];
    list.appendChild(div);

    addProject(div, i, []);
  }
}

/*create the add event*/
add.addEventListener("click", () => {
  let form = document.querySelector(".form1");
  if (!form) {
    form = document.createElement("form");
    form.setAttribute("class", "form1");
    inside.appendChild(form);

    const titleInput = document.createElement("input");
    const submitInput = document.createElement("input");
    create(form, titleInput, submitInput);

    /*create the event for the first submit*/
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      store = titleInput.value;
      if (test.includes(store)) {
        alert("type again");
        return;
      }

      test.push(store);

      const list = document.querySelector(".list");
      const div = document.createElement("div");
      div.setAttribute("class", "last");

      div.innerHTML = store;
      list.appendChild(div);
      array.push(store);

      localStorage.setItem("projects", JSON.stringify(array));

      const elements = document.querySelectorAll(".last");

      titleInput.value = "";
      let projectInputs = [];

      for (let i = 0; i < elements.length; i++) {
        addProject(elements[i], i, projectInputs);
      }
    });
  }
});

function addProject(element, i, projectInputs) {
  element.addEventListener("click", () => {
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
      head.addEventListener("click", () => {
        if (!projectInputs[i] && !middle.innerHTML) {
          const formm = document.createElement("form");
          formm.setAttribute("class", `formMiddle form${i}`);
          middle.appendChild(formm);

          const titleInput1 = document.createElement("input");
          const submitInput = document.createElement("input");
          const cancel = document.createElement("input");
          createHead(formm, titleInput1, submitInput, cancel);

          cancel.addEventListener("click", () => {
            middle.innerHTML = "";
            projectInputs[i] = null;
          });

          projectInputs[i] = formm;
          console.log(projectInputs[i]);

          createForm(
            formm,
            foot,
            change1,
            middle,
            projectInputs,
            i,
            titleInput1
          );
        }
      });
    }

    // Hide current project and show current one
    if (currentProject !== null) {
      currentProject.style.display = "none";
    }
    page.style.display = "block";
    currentProject = page;
  });
}
