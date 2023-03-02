import { createForm } from "./createForm";
import { createCancel } from "./createCancel";
import { createHead } from "./head";
import { createDelete } from "./createDelete";
import { createEditFunction } from "./createEdit";
import { createEdit } from "./editForm";

function createMain(page, head, projectInputs, i, middle, foot, change1) {
  console.log("piss");
  const uniqueKey1 = `listFoot${i}`;
  let nextArray1 = JSON.parse(localStorage.getItem(uniqueKey1)) || [];

  if (nextArray1) {
    // Add items to the foot element
    for (const item of nextArray1) {
      const foot1 = document.createElement("div");
      foot1.setAttribute("class", "foot1");

      const foot4 = document.createElement("button");
      foot4.setAttribute("class", "foot4");
      foot4.innerHTML = "delete";
      const foot5 = document.createElement("button");
      foot5.setAttribute("class", "foot5");
      foot5.innerHTML = "EDIT";

      const foott = document.createElement("div");
      foott.classList.add("fat", `fat${i}`);

      foott.appendChild(foot1);

      foott.appendChild(foot4);
      foott.appendChild(foot5);
      foot.appendChild(foott);

      foot1.innerHTML = item;

      const all = page.querySelectorAll(".foot4");
      console.log(all);

      // console.log(allInput);
      // console.log(allInput);

      for (let j = 0; j < all.length; j++) {
        const index = j;
        const specificClass = `foot4-${index}`;
        all[j].classList.add(specificClass);

        all[j].addEventListener("click", () => {
          const parentElement = all[j].parentNode;
          parentElement.remove();
          middle.innerHTML = "";

          const allInput = page.querySelectorAll(".foot1");
          console.log(allInput);

          nextArray1 = []; // reset the array for this index

          for (let x = 0; x < allInput.length; x++) {
            nextArray1.push(allInput[x].innerHTML);
          }

          // Save data to local storage
          localStorage.setItem(uniqueKey1, JSON.stringify(nextArray1));
          console.log(nextArray1);
        });
      }

      foot5.addEventListener("click", () => {
        let check2 = false;
        let editForm = middle.querySelector(`.middleForm.form${i}`);
        const now = foott.querySelector(".foot1");
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
            now.innerHTML
          );

          cancel.addEventListener("click", () => {
            middle.innerHTML = "";
          });

          editForm.addEventListener("submit", (event) => {
            // Add a variable to store the index of the item being edited
            const index = nextArray1.indexOf(now.innerHTML);
            console.log(index);
            console.log(nextArray1[index]);
            event.preventDefault();
            foot1.innerHTML = titleInput2.value;

            titleInput2.innerHTML = "";
            middle.removeChild(editForm);

            // // Update the array with the edited item
            // nextArray[index] = change1;
            // Save data to local storage
            const allInput = page.querySelectorAll(".foot1");
            nextArray1 = []; // reset the array for this index

            for (let x = 0; x < allInput.length; x++) {
              nextArray1.push(allInput[x].innerHTML);
            }
            localStorage.setItem(uniqueKey1, JSON.stringify(nextArray1));
          });
        }
      });
    }
  }

  head.addEventListener("click", () => {
    if (!projectInputs[i] && !middle.innerHTML) {
      const formm = document.createElement("form");
      formm.setAttribute("class", `formMiddle form${i}`);
      middle.appendChild(formm);

      const titleInput1 = document.createElement("input");
      const submitInput = document.createElement("input");
      const cancel = document.createElement("input");
      createHead(formm, titleInput1, submitInput, cancel);

      createCancel(cancel, middle, i, projectInputs);

      projectInputs[i] = formm;
      console.log(projectInputs[i]);

      createForm(
        page,
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

export { createMain };
