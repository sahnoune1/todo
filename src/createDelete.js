function createDelete(foot4, foott, middle) {
  foot4.addEventListener("click", () => {
    foott.remove();
    middle.innerHTML = "";
  });
}

export { createDelete };
