function createEdit(edit, title, submit, can, x) {
  title.setAttribute("type", "text");
  title.setAttribute("id", "titles");
  title.setAttribute("name", "title");
  title.setAttribute("value", x);
  title.setAttribute("required", true);
  edit.appendChild(title);

  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submits");
  submit.setAttribute("value", "submit");

  edit.appendChild(submit);

  can.setAttribute("type", "button");
  can.setAttribute("id", "submit");
  can.setAttribute("value", "cancel");
  edit.appendChild(can);
}

export { createEdit };
