import { createForm } from "./createForm";
import { createCancel } from "./createCancel";
import { createHead } from "./head";
import { createDelete } from "./createDelete";
import { createEditFunction } from "./createEdit";

function createMain(
  page,
  head,
  projectInputs,
  i,
  middle,
  foot,
  change1,
  nextArray
) {
  const storedFoot1 = JSON.parse(localStorage.getItem("listFoot")) || [];
  // console.log(storedFoot1);
  // console.log(storedFoot1[i]);
  // console.log(storedFoot);
  // console.log(JSON.parse(storedFoot));

  if (storedFoot1[i]) {
    nextArray[i] = storedFoot1[i];
    // Add items to the foot element
    for (const item of nextArray[i]) {
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

          nextArray[i] = []; // reset the array for this index

          for (let x = 0; x < allInput.length; x++) {
            nextArray[i].push(allInput[x].innerHTML);
          }

          // Save data to local storage
          localStorage.setItem("listFoot", JSON.stringify(nextArray));
          console.log(nextArray);
        });
      }

      createEditFunction(foot5, middle, i, foot1, item);
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
        titleInput1,
        nextArray
      );
    }
  });
}

export { createMain };
