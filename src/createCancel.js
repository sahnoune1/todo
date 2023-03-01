function createCancel(cancel, middle, i, projectInputs) {
  cancel.addEventListener("click", () => {
    middle.innerHTML = "";
    projectInputs[i] = null;
  });
}

export { createCancel };
