import { createMain } from "./createMain";
import { storedList } from "./storedList";
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

  const storedItems = localStorage.getItem("listItems");
  if (storedItems) {
    array = JSON.parse(storedItems);
    for (const item of array) {
      const div = document.createElement("div");
      div.setAttribute("class", "last");
      div.innerHTML = item;
      list.appendChild(div);
      const elements = document.querySelectorAll(".last");

      //storing list elements
      storedList(titleInput, change1, currentProject, main, elements);
    }
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

    //creating list elements
    localStorage.setItem("listItems", JSON.stringify(array));

    const elements = document.querySelectorAll(".last");

    storedList(titleInput, change1, currentProject, main, elements);
  });
}

export { firstSubmit };
