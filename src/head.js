function createHead(fo, title, submit, can) {
  title.setAttribute("type", "text");
  title.setAttribute("id", "titles");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "title");
  title.setAttribute("required", true);
  title.setAttribute("maxlength", "10"); // set maximum length to 20
  title.setAttribute("minlength", "3"); // set minimum length to 3
  fo.appendChild(title);

  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submits");
  submit.setAttribute("value", "submit");

  fo.appendChild(submit);

  can.setAttribute("type", "button");
  can.setAttribute("id", "submit");
  can.setAttribute("value", "cancel");
  fo.appendChild(can);
}

export { createHead };
