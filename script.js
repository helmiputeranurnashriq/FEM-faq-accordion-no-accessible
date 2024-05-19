const accordions = document.querySelectorAll(
    ".accordion__content-question"
);

accordions.forEach((currentItem, currentIndex) => {
  currentItem.addEventListener("click", (e) => {

      currentItem.classList.toggle("active");

      const icon = currentItem.querySelector("img");

      if (currentItem.classList.contains("active")) {
        icon.src = "assets/images/icon-minus.svg";
      } else {
        icon.src = "assets/images/icon-plus.svg";
      }

      accordions.forEach((otherItem, otherIndex) => {

        const icon = otherItem.querySelector("img");

        if(currentItem !== otherItem) {
          otherItem.classList.remove("active");
          otherItem.querySelector("img").src = "assets/images/icon-plus.svg";
        }
      })
    
  })
});
