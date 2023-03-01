import { nextDay } from "date-fns";
import { createDelete } from "./createDelete";
import { createEditFunction } from "./createEdit";

function createForm(
  page,
  formm,
  foot,
  change1,
  middle,
  projectInputs,
  i,
  titleInput1,
  nextArray
) {
  const storedFoot = JSON.parse(localStorage.getItem("listFoot"));

  if (storedFoot) {
    nextArray = storedFoot;
  }

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

    if (!nextArray[i]) {
      nextArray[i] = [];
    }

    nextArray[i].push(foot1.innerHTML);

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

        nextArray[i] = []; // reset the array for this index

        for (let x = 0; x < allInput.length; x++) {
          nextArray[i].push(allInput[x].innerHTML);
        }

        // Save data to local storage
        localStorage.setItem("listFoot", JSON.stringify(nextArray));
        console.log(nextArray);
      });
    }

    // foot4.addEventListener("click", () => {
    //   const index = j;
    //   nextArray[i].splice(index, 1);
    //   foott.remove();
    //   middle.innerHTML = "";

    //   // Save data to local storage
    //   localStorage.setItem("listFoot", JSON.stringify(nextArray));
    //   console.log(nextArray);
    // });

    createEditFunction(foot5, middle, i, foot1, change1);
    // Save data to local storage
    localStorage.setItem("listFoot", JSON.stringify(nextArray));

    console.log(nextArray);
  });
}

export { createForm };
