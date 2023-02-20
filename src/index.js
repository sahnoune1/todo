const add = document.querySelector(".add");
const inside = document.querySelector(".inside");
const form1 = document.querySelector(".form1");
const main = document.querySelector(".main");
const middle = document.querySelector(".middle");
let formId = 1;
let array = [];
let currentProject = null;
let pages = {};
let test = [];
let store;
let change;
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
    titleInput.value = "";
    let projectInputs = [];
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", () => {
        let page = document.querySelector(`.page.project-${i}`);

        if (!page) {
          // Create a new page element
          page = document.createElement("div");
          page.setAttribute("class", `page project-${i}`);

          const head = document.createElement("div");
          head.setAttribute("class", "head");
          head.innerHTML = `project${i}`;

          const middle = document.createElement("div");
          middle.setAttribute("class", "middle");

          const foot = document.createElement("div");
          foot.setAttribute("class", "foot");

          page.appendChild(head);
          page.appendChild(middle);
          page.appendChild(foot);
          main.appendChild(page);

          // Add event listeners
          head.addEventListener("click", () => {
            if (!projectInputs[i]) {
              const formm = document.createElement("form");
              formm.setAttribute("class", `form${i}`);
              middle.appendChild(formm);

              const titleLabel = document.createElement("label");
              titleLabel.setAttribute("for", "title");
              formm.appendChild(titleLabel);

              const titleInput1 = document.createElement("input");
              titleInput1.setAttribute("type", "text");
              titleInput1.setAttribute("id", "title");
              titleInput1.setAttribute("name", "title");
              formm.appendChild(titleInput1);

              const submitLabel = document.createElement("label");
              submitLabel.setAttribute("for", "submit");
              formm.appendChild(submitLabel);
              const submitInput = document.createElement("input");
              submitInput.setAttribute("type", "submit");
              submitInput.setAttribute("id", "submit");
              submitInput.setAttribute("value", "submit");
              formm.appendChild(submitInput);

              projectInputs[i] = formm;
              formm.addEventListener("submit", (event) => {
                event.preventDefault();
                change = titleInput1.value;
                foot.innerHTML = change;
                titleInput1.value = "";
                middle.removeChild(formm);
                projectInputs = [];
              });
            }
          });
        }

        // Hide current project and show current one
        if (currentProject !== null) {
          currentProject.style.display = "none";
        }
        page.style.display = "block";
        currentProject = page;
      });
    }
  });
  formId++;
});
