import { createForm } from "./createForm";
import { createCancel } from "./createCancel";
import { createHead } from "./head";

function createMain(head, projectInputs, i, middle, foot, change1) {
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

      createForm(formm, foot, change1, middle, projectInputs, i, titleInput1);
    }
  });
}

export { createMain };
