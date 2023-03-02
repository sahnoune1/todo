function createDelete(middle, i, all, page) {
  const uniqueKey = `listFoot${i}`;
  let nextArray = JSON.parse(localStorage.getItem(uniqueKey)) || [];
  for (let j = 0; j < all.length; j++) {
    const index = j;
    const specificClass = `foot4-${index}`;
    all[j].classList.add(specificClass);

    all[j].addEventListener("click", () => {
      const parentElement = all[j].parentNode;
      parentElement.remove();
      middle.innerHTML = "";

      const allInput = page.querySelectorAll(".foot1");
      console.log(allInput);

      nextArray = []; // reset the array for this index

      for (let x = 0; x < allInput.length; x++) {
        nextArray.push(allInput[x].innerHTML);
      }

      // Save data to local storage
      localStorage.setItem(uniqueKey, JSON.stringify(nextArray));
      console.log(nextArray);
    });
  }
}

export { createDelete };
