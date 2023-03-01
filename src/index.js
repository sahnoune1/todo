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
let nextArray = [];

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
      main,
      nextArray
    );
  }
});
