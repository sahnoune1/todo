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
      addProject(elements[i], i, projectInputs, main, change1, currentProject);
    }

    // Save the updated list content to local storage
    localStorage.setItem("listContent", list.innerHTML);
  });
}

export { firstSubmit };
