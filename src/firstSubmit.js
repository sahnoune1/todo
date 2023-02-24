import { addProject } from "./addProject";

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

    // localStorage.setItem("projects", JSON.stringify(array));

    const elements = document.querySelectorAll(".last");

    titleInput.value = "";
    let projectInputs = [];

    for (let i = 0; i < elements.length; i++) {
      addProject(elements[i], i, projectInputs, main, change1, currentProject);
    }
  });
}

export { firstSubmit };
