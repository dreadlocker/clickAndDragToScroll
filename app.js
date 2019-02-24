window.onload = function () {
  const slider = document.getElementById("container");
  let isDown = false;
  let startX;
  let scrollLeftVar;

  const mousedown = e => {
    isDown = true;
    startX = e.pageX;
    scrollLeftVar = slider.scrollLeft;
  }

  const clickAndDrag = e => {
    if (!isDown) return; // stop the function from running
    e.preventDefault();
    e.stopPropagation();
    const walk = (e.pageX - startX) * 3;
    slider.scrollLeft = scrollLeftVar - walk;
  }

  slider.addEventListener("mouseleave", () => isDown = false);
  slider.addEventListener("mouseup", () => isDown = false);
  slider.addEventListener("mousedown", mousedown);
  slider.addEventListener("mousemove", clickAndDrag);
}