import { createEdit } from "./editForm";

function createEditFunction(foot5, middle, i, foot1, change1, page) {
  const uniqueKey = `listFoot${i}`;
  let nextArray = JSON.parse(localStorage.getItem(uniqueKey)) || [];
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
}

function createStoredEdit(foot5, middle, i, foot1, page, foott) {
  const uniqueKey1 = `listFoot${i}`;
  let nextArray1 = JSON.parse(localStorage.getItem(uniqueKey1)) || [];
  foot5.addEventListener("click", () => {
    let check2 = false;
    let editForm = middle.querySelector(`.middleForm.form${i}`);
    const now = foott.querySelector(".foot1");
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

      createEdit(editForm, titleInput2, submitInput1, cancel, now.innerHTML);

      cancel.addEventListener("click", () => {
        middle.innerHTML = "";
      });

      editForm.addEventListener("submit", (event) => {
        // Add a variable to store the index of the item being edited
        const index = nextArray1.indexOf(now.innerHTML);
        console.log(index);
        console.log(nextArray1[index]);
        event.preventDefault();
        foot1.innerHTML = titleInput2.value;

        titleInput2.innerHTML = "";
        middle.removeChild(editForm);

        // // Update the array with the edited item
        // nextArray[index] = change1;
        // Save data to local storage
        const allInput = page.querySelectorAll(".foot1");
        nextArray1 = []; // reset the array for this index

        for (let x = 0; x < allInput.length; x++) {
          nextArray1.push(allInput[x].innerHTML);
        }
        localStorage.setItem(uniqueKey1, JSON.stringify(nextArray1));
      });
    }
  });
}
export { createEditFunction };
export { createStoredEdit };
