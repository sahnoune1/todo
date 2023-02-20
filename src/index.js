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
let change1;
let change2;
let change3;
/*create the add event*/
add.addEventListener("click", () => {
  let form = document.querySelector(".form1");
  if (!form) {
    form = document.createElement("form");
    form.setAttribute("class", "form1");
    inside.appendChild(form);
    console.log(formId);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    form.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    form.appendChild(titleInput);

    const submitLabel = document.createElement("label");
    submitLabel.setAttribute("for", "submit");
    form.appendChild(submitLabel);
    const submitInput = document.createElement("input");
    submitInput.setAttribute("type", "submit");
    submitInput.setAttribute("id", "submit");
    submitInput.setAttribute("value", "submit");
    form.appendChild(submitInput);

    /*create the event for the first submit*/
    form.addEventListener("submit", (event) => {
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

            // foot.appendChild(foot1);
            // foot.appendChild(foot2);
            // foot.appendChild(foot3);
            page.appendChild(head);
            page.appendChild(middle);
            page.appendChild(foot);
            main.appendChild(page);

            // Add event listeners
            head.addEventListener("click", () => {
              if (!projectInputs[i]) {
                const formm = document.createElement("form");
                formm.setAttribute("class", `formMiddle form${i}`);
                middle.appendChild(formm);

                const titleLabel1 = document.createElement("label");
                titleLabel1.setAttribute("for", "title");
                formm.appendChild(titleLabel1);

                const titleInput1 = document.createElement("input");
                titleInput1.setAttribute("type", "text");
                titleInput1.setAttribute("id", "titles");
                titleInput1.setAttribute("name", "title");
                formm.appendChild(titleInput1);

                const titleLabel2 = document.createElement("label");
                titleLabel2.setAttribute("for", "title");
                formm.appendChild(titleLabel2);

                const titleInput2 = document.createElement("input");
                titleInput2.setAttribute("type", "text");
                titleInput2.setAttribute("id", "titles");
                titleInput2.setAttribute("name", "title");
                formm.appendChild(titleInput2);

                const titleLabel3 = document.createElement("label");
                titleLabel3.setAttribute("for", "title");
                formm.appendChild(titleLabel3);

                const titleInput3 = document.createElement("input");
                titleInput3.setAttribute("type", "text");
                titleInput3.setAttribute("id", "titles");
                titleInput3.setAttribute("name", "title");
                formm.appendChild(titleInput3);

                const submitLabel = document.createElement("label");
                submitLabel.setAttribute("for", "submit");
                formm.appendChild(submitLabel);
                const submitInput = document.createElement("input");
                submitInput.setAttribute("type", "submit");
                submitInput.setAttribute("id", "submits");
                submitInput.setAttribute("value", "submit");

                formm.appendChild(submitInput);

                projectInputs[i] = formm;
                formm.addEventListener("submit", (event) => {
                  const foot1 = document.createElement("div");
                  foot1.setAttribute("class", "foot1");
                  const foot2 = document.createElement("div");
                  foot2.setAttribute("class", "foot2");
                  const foot3 = document.createElement("div");
                  foot3.setAttribute("class", "foot3");
                  event.preventDefault();

                  const foott = document.createElement("div");
                  foott.setAttribute("class", `foot${i}`);

                  foott.appendChild(foot1);
                  foott.appendChild(foot2);
                  foott.appendChild(foot3);
                  foot.appendChild(foott);
                  change1 = titleInput1.value;
                  foot1.innerHTML = change1;

                  change2 = titleInput2.value;
                  foot2.innerHTML = change2;

                  change3 = titleInput3.value;
                  foot3.innerHTML = change3;
                  titleInput1.value = "";
                  titleInput2.value = "";
                  titleInput3.value = "";
                  middle.removeChild(formm);
                  projectInputs = [];
                  console.log(i);
                  i++;
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
  }
  formId++;
});
