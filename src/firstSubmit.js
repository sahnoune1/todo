import { createMain } from "./createMain";
import { storedList } from "./storedList";
import { deleteList } from "./deleteList";
function firstSubmit(form, store, test, titleInput, array, change1, main) {
  // Get the list element
  const list = document.querySelector(".list");

  const storedItems = localStorage.getItem("listItems");
  if (storedItems) {
    array = JSON.parse(storedItems);
    for (const item of array) {
      const contour = document.createElement("div");
      contour.setAttribute("class", "contour");

      const div = document.createElement("div");
      div.setAttribute("class", "last");
      div.innerHTML = item;

      const divx = document.createElement("button");
      divx.setAttribute("class", "x");
      divx.innerHTML = "delete";
      contour.appendChild(div);
      contour.appendChild(divx);

      list.appendChild(contour);
      const elements = document.querySelectorAll(".last");

      //giving actions to elements list
      storedList(list, titleInput, change1, main, elements);
      //deleting elemets list
      deleteList(divx, list, contour, array, titleInput, change1, main);
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

    const contour = document.createElement("div");
    contour.setAttribute("class", "contour");

    const div = document.createElement("div");
    div.setAttribute("class", "last");
    div.innerHTML = store;

    const divx = document.createElement("button");
    divx.setAttribute("class", "x");
    divx.innerHTML = "delete";
    contour.appendChild(div);
    contour.appendChild(divx);

    list.appendChild(contour);
    array.push(store);

    //creating list elements
    localStorage.setItem("listItems", JSON.stringify(array));

    const elements = document.querySelectorAll(".last");
    console.log(elements.length);
    storedList(list, titleInput, change1, main, elements);

    //deleting elemets list
    deleteList(divx, list, contour, array, titleInput, change1, main);
  });
}

export { firstSubmit };
