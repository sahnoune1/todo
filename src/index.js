const add = document.querySelector(".add");
const form = document.querySelector("form");
add.addEventListener("click", () => {
  const label = document.createElement("label");
  label.setAttribute("for", "title");
  form.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "title");
  input.setAttribute("name", "title");
  form.appendChild(input);
});
