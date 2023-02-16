const add = document.querySelector(".add");
const inside = document.querySelector(".inside");
const form1 = document.querySelector(".form1");
const main = document.querySelector(".main");
let formId = 1;
let array = [];
let currentProject = null;
let pages = {};
/*create the add event*/
add.addEventListener("click", () => {
  const form = document.createElement("form");
  form.setAttribute("class", `form${formId}`);
  inside.appendChild(form);
  console.log(formId);
  const fo = document.querySelector(`.form${formId}`);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  fo.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "title");
  fo.appendChild(titleInput);

  const submitLabel = document.createElement("label");
  submitLabel.setAttribute("for", "submit");
  fo.appendChild(submitLabel);
  const submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("id", "submit");
  submitInput.setAttribute("value", "submit");
  fo.appendChild(submitInput);

  /*create the event for the first submit*/
  fo.addEventListener("submit", (event) => {
    event.preventDefault();
    const store = titleInput.value;
    console.log(store);
    const list = document.querySelector(".list");
    const div = document.createElement("div");
    div.setAttribute("class", "last");

    div.innerHTML = store;
    list.appendChild(div);
    array.push(div);
    console.log(array);
    const elements = document.querySelectorAll(".last");
    console.log(elements);
    for (let i = 0; i < array.length; i++) {
      elements[i].addEventListener("click", () => {
        const page = document.createElement("div");
        page.innerHTML = array[i].innerHTML;
        main.appendChild(page);
        if (currentProject !== null) {
          currentProject.style.display = "none";
        }
        page.style.display = "block";
        currentProject = page;
      });
    }
    // for (let i = 0; i < array.length; i++) {
    //   array[i].addEventListener("click", () => {
    //     currentProject = null;
    //     const page = document.createElement("div");
    //     page.setAttribute("class", `page${i}`);
    //     console.log(`page${i}`);
    //     page.innerHTML = i;
    //     main.appendChild(page);
    //     if (currentProject !== null) {
    //       currentProject.style.display = "none";
    //     }
    //     const newPage = document.querySelector(`.page${i}`);
    //     newPage.style.display = "block";
    //     currentProject = newPage;
    //   });
    // }
  });
  formId++;
});
