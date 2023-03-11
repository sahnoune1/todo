import { storedList } from "./storedList";

function deleteList(divx, list, contour, array, titleInput, change1, main) {
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
      // call storedList function again with the updated list and elements
      storedList(
        list,
        titleInput,
        change1,
        main,
        document.querySelectorAll(".last")
      );
    }
    console.log(list.children.length);
  });
}

export { deleteList };

// in case i found bugs cuz of changing from this to using a fucntion
// divx.addEventListener("click", (event) => {
//     const elementValue = event.target.parentNode.firstChild.innerHTML;
//     list.removeChild(contour);
//     const index = array.findIndex((item) => item === elementValue);
//     let page = document.querySelector(`.project-${index}`);

//     if (index !== -1) {
//       array.splice(index, 1);
//       if (page) {
//         page.remove();
//       }
//       localStorage.removeItem(`listFoot${index}`);

//       // Update the list foot keys in localStorage
//       for (let i = index; i < array.length; i++) {
//         const key = `listFoot${i}`;
//         const value = localStorage.getItem(`listFoot${i + 1}`);
//         if (value) {
//           localStorage.setItem(key, value);
//           localStorage.removeItem(`listFoot${i + 1}`);
//         }
//         // Update the corresponding page index
//         const page = document.querySelector(`.project-${i + 1}`);
//         if (page) {
//           page.classList.remove(`project-${i + 1}`);
//           page.classList.add(`project-${i}`);
//         }
//       }

//       localStorage.setItem("listItems", JSON.stringify(array));
//       // call storedList function again with the updated list and elements
//       storedList(
//         list,
//         titleInput,
//         change1,
//         main,
//         document.querySelectorAll(".last")
//       );
//     }
//     console.log(list.children.length);
//   });
