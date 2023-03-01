import { createEdit } from "./editForm";

function createEditFunction(foot5, middle, i, foot1, change1) {
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

      createEdit(editForm, titleInput2, submitInput1, cancel, change1);

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
}

export { createEditFunction };
