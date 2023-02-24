import { create } from "./field";

import { firstSubmit } from "./firstSubmit";

const add = document.querySelector(".add");
const inside = document.querySelector(".inside");
const main = document.querySelector(".main");

let currentProject = null;
let test = [];
let store;
let change1;
let array = [];

// // Check if there are any projects in local storage
// if (localStorage.getItem("projects")) {
//   // Retrieve the array of projects
//   array = JSON.parse(localStorage.getItem("projects"));

//   // Loop through the array of projects and add them to the page
//   for (let i = 0; i < array.length; i++) {
//     const list = document.querySelector(".list");
//     const div = document.createElement("div");
//     div.setAttribute("class", "last");

//     div.innerHTML = array[i];
//     list.appendChild(div);

//     addProject(div, i, []);
//   }
// }

/*create the add event*/
add.addEventListener("click", () => {
  let form = document.querySelector(".form1");
  if (!form) {
    form = document.createElement("form");
    form.setAttribute("class", "form1");
    inside.appendChild(form);

    const titleInput = document.createElement("input");
    const submitInput = document.createElement("input");
    create(form, titleInput, submitInput);

    /*create the event for the first submit*/
    firstSubmit(
      form,
      store,
      test,
      titleInput,
      array,
      change1,
      currentProject,
      main
    );
  }
});
