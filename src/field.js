function create(fo, title, submit) {
  title.setAttribute("type", "text");
  title.setAttribute("id", "title");
  title.setAttribute("name", "title");
  title.setAttribute("maxlength", "10"); // set maximum length to 20
  title.setAttribute("minlength", "3"); // set minimum length to 3
  fo.appendChild(title);

  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.setAttribute("value", "submit");
  fo.appendChild(submit);
}

export { create };
