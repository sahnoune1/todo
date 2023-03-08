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
    storedList(titleInput, change1, currentProject, main, elements);

    //deleting elemets list
    divx.addEventListener("click", (event) => {
      const elementValue = event.target.parentNode.firstChild.innerHTML;
      list.removeChild(contour);
      const index = array.findIndex((item) => item === elementValue);
      let page = document.querySelector(`.project-${index}`);

      if (index !== -1) {
        array.splice(index, 1);
        if (page) {
          page.remove();
        }
        localStorage.removeItem(`listFoot${index}`);

        // Update the list foot keys in localStorage
        for (let i = index; i < array.length; i++) {
          const key = `listFoot${i}`;
          const value = localStorage.getItem(`listFoot${i + 1}`);
          if (value) {
            localStorage.setItem(key, value);
            localStorage.removeItem(`listFoot${i + 1}`);
          }
          // Update the corresponding page index
          const page = document.querySelector(`.project-${i + 1}`);
          if (page) {
            page.classList.remove(`project-${i + 1}`);
            page.classList.add(`project-${i}`);
          }
        }

        localStorage.setItem("listItems", JSON.stringify(array));
      }
    });
  });
}

export { firstSubmit };
