import { nextDay } from "date-fns";
import { createDelete } from "./createDelete";
// import { createEditFunction } from "./createEdit";
import { createEdit } from "./editForm";

function createForm(
  page,
  formm,
  foot,
  change1,
  middle,
  projectInputs,
  i,
  titleInput1
) {
  const uniqueKey = `listFoot${i}`;
  let nextArray = JSON.parse(localStorage.getItem(uniqueKey)) || [];

  // if (storedFoot) {
  //   nextArray = storedFoot;
  // }

  formm.addEventListener("submit", (event) => {
    event.preventDefault();

    const foot1 = document.createElement("div");
    foot1.setAttribute("class", "foot1");

    const foot4 = document.createElement("button");
    foot4.setAttribute("class", "foot4");
    foot4.innerHTML = "delete";

    const foot5 = document.createElement("button");
    foot5.setAttribute("class", "foot5");
    foot5.innerHTML = "EDIT";

    const foott = document.createElement("div");
    foott.classList.add("fat", `fat${i}`);

    foott.appendChild(foot1);
    foott.appendChild(foot4);
    foott.appendChild(foot5);
    foot.appendChild(foott);

    change1 = titleInput1.value;
    foot1.innerHTML = change1;

    if (!nextArray) {
      nextArray = [];
    }

    nextArray.push(foot1.innerHTML);

    titleInput1.value = "";
    middle.removeChild(formm);
    projectInputs[i] = null;

    const all = page.querySelectorAll(".foot4");
    console.log(all);

    // console.log(allInput);

    for (let j = 0; j < all.length; j++) {
      const index = j;
      const specificClass = `foot4-${index}`;
      all[j].classList.add(specificClass);

      all[j].addEventListener("click", () => {
        const parentElement = all[j].parentNode;
        parentElement.remove();
        middle.innerHTML = "";

        const allInput = page.querySelectorAll(".foot1");
        console.log(allInput);

        nextArray = []; // reset the array for this index

        for (let x = 0; x < allInput.length; x++) {
          nextArray.push(allInput[x].innerHTML);
        }

        // Save data to local storage
        localStorage.setItem(uniqueKey, JSON.stringify(nextArray));
        console.log(nextArray);
      });
    }

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
          // Add a variable to store the index of the item being edited
          const index = nextArray.indexOf(change1);
          console.log(index);
          console.log(nextArray[index]);
          event.preventDefault();
          foot1.innerHTML = titleInput2.value;
          change1 = titleInput2.value;
          titleInput2.innerHTML = "";
          middle.removeChild(editForm);

          // Update the array with the edited item
          // nextArray[index] = change1;
          // Save data to local storage
          const allInput = page.querySelectorAll(".foot1");
          nextArray = []; // reset the array for this index

          for (let x = 0; x < allInput.length; x++) {
            nextArray.push(allInput[x].innerHTML);
          }
          localStorage.setItem(uniqueKey, JSON.stringify(nextArray));
        });
      }
    });

    // Save data to local storage
    localStorage.setItem(uniqueKey, JSON.stringify(nextArray));

    console.log("really?");
  });
}

export { createForm };
