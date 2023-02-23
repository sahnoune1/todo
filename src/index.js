import { create } from "./field";
import { createHead } from "./head";
import { createEdit } from "./editForm";

const add = document.querySelector(".add");
const inside = document.querySelector(".inside");
const main = document.querySelector(".main");
let array = [];
let currentProject = null;
let test = [];
let store;
let change1;

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
      array.push(div);

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

                formm.addEventListener("submit", (event) => {
                  event.preventDefault();

                  const foot1 = document.createElement("div");
                  foot1.setAttribute("class", "foot1");

                  const foot4 = document.createElement("button");
                  foot4.setAttribute("class", "foot4");
                  foot4.innerHTML = "delete";
                  const foot5 = document.createElement("button");
                  foot5.setAttribute("class", "foot4");
                  foot5.innerHTML = "EDIT";

                  const foott = document.createElement("div");
                  foott.classList.add("fat", `fat${i}`);

                  foott.appendChild(foot1);

                  foott.appendChild(foot4);
                  foott.appendChild(foot5);
                  foot.appendChild(foott);

                  change1 = titleInput1.value;
                  foot1.innerHTML = change1;

                  titleInput1.value = "";

                  middle.removeChild(formm);
                  projectInputs = [];

                  foot4.addEventListener("click", () => {
                    foott.remove();
                    middle.innerHTML = "";
                  });

                  foot5.addEventListener("click", () => {
                    let check2 = false;
                    let editForm = middle.querySelector(`.middleForm.form${i}`);
                    if (editForm) {
                      check2 = true;
                      middle.removeChild(editForm);
                    }

                    if (!check2 && !middle.innerHTML) {
                      editForm = document.createElement("form");
                      editForm.setAttribute("class", `middleForm form${i}`);
                      middle.appendChild(editForm);

                      const titleInput2 = document.createElement("input");
                      const submitInput1 = document.createElement("input");
                      const cancel = document.createElement("input");

                      createEdit(
                        editForm,
                        titleInput2,
                        submitInput1,
                        cancel,
                        change1
                      );

                      cancel.addEventListener("click", () => {
                        middle.innerHTML = "";
                      });

                      editForm.addEventListener("submit", (event) => {
                        event.preventDefault();
                        foot1.innerHTML = titleInput2.value;
                        change1 = titleInput2.value;
                        titleInput2.innerHTML = "";
                        middle.removeChild(editForm);
                      });
                    }
                  });
                });
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
    });
  }
});
