const add = document.querySelector(".add");
const form = document.querySelector(".form");
const form1 = document.querySelector(".form1");
/*create the add event*/
add.addEventListener("click", () => {
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
    const store = titleInput.value;
    console.log(store);
    const list = document.querySelector(".list");
    const div = document.createElement("div");
    div.setAttribute("class", "details");
    div.innerHTML = store;
    list.appendChild(div);
    /*create the form inside the main page*/
    div.addEventListener("click", () => {
      const projectLabel = document.createElement("label");
      projectLabel.setAttribute("for", "title");
      form1.appendChild(projectLabel);

      const projectInput = document.createElement("input");
      projectInput.setAttribute("type", "text");
      projectInput.setAttribute("id", "title");
      projectInput.setAttribute("name", "title");
      form1.appendChild(projectInput);

      // const submitLabel = document.createElement("label");
      // submitLabel.setAttribute("for", "submit");
      // form.appendChild(submitLabel);
      // const submitInput = document.createElement("input");
      // submitInput.setAttribute("type", "submit");
      // submitInput.setAttribute("id", "submit");
      // submitInput.setAttribute("value", "submit");
      // form.appendChild(submitInput);
    });
  });
});
