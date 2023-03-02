import { createForm } from "./createForm";
import { createCancel } from "./createCancel";
import { createHead } from "./head";
import { createDelete } from "./createDelete";
import { createStoredEdit } from "./createEdit";
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

      // delete function
      createDelete(middle, i, all, page);

      //edit function
      createStoredEdit(foot5, middle, i, foot1, page, foott);
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
