const add = document.querySelector(".add");
const inside = document.querySelector(".inside");
const form1 = document.querySelector(".form1");
const main = document.querySelector(".main");
let formId = 1;
let array = [];
let currentProject = null;
let pages = {};
let test = [];
let store;
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
    store = titleInput.value;
    if (test.includes(store)) {
      alert("type again");
      return;
    }

    test.push(store);
    console.log(store);
    console.log(test);

    const list = document.querySelector(".list");
    const div = document.createElement("div");
    div.setAttribute("class", "last");

    div.innerHTML = store;
    list.appendChild(div);
    array.push(div);
    console.log(array);
    const elements = document.querySelectorAll(".last");
    console.log(elements);
    let projectInputs = [];
    for (let i = 0; i < array.length; i++) {
      elements[i].addEventListener("click", () => {
        const page = document.createElement("div");
        page.setAttribute("class", "page");

        const head = document.createElement("div");
        head.setAttribute("class", "head");
        head.innerHTML = `project${i}`;

        const middle = document.createElement("div");
        middle.setAttribute("class", "middle");

        const lol = document.createElement("div");
        lol.setAttribute("class", "lol");

        lol.innerHTML = projectInputs[i] || "";

        const foot = document.createElement("div");
        foot.setAttribute("class", "foot");

        middle.appendChild(lol);
        page.appendChild(head);
        page.appendChild(middle);
        page.appendChild(foot);
        main.appendChild(page);

        if (currentProject !== null) {
          currentProject.style.display = "none";
        }
        page.style.display = "block";
        currentProject = page;

        head.addEventListener("click", () => {
          lol.innerHTML = `seif${i}`;

          projectInputs[i] = lol.innerHTML;
        });
      });
    }
  });
  formId++;
});
