import { createDelete } from "./createDelete";
import { createEditFunction } from "./createEdit";

function createForm(
  formm,
  foot,
  change1,
  middle,
  projectInputs,
  i,
  titleInput1
) {
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
    projectInputs[i] = null;

    createDelete(foot4, foott, middle);

    createEditFunction(foot5, middle, i, foot1, change1);
  });
}

export { createForm };
