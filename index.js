let items = document.querySelector(".items");
let itemCount = items.children.length;
let wrapper = document.querySelector(".wrapper");
let progressBar = document.querySelector(".progress_bar");
let item = items.querySelector("img");
let progressBarItems = progressBar.querySelectorAll(".progress_bar_item")

let index = 0;

document.querySelector(".left").addEventListener("click", handleLeft);
document.querySelector(".right").addEventListener("click", handleRight);
window.addEventListener("resize", calculateProgressBar);
window.addEventListener('DOMContentLoaded', () => {
  calculateProgressBar()

  setInterval(() => {
    let itemPerScreen = parseInt(
      getComputedStyle(item).getPropertyValue("--item-per-screen")
    );
    let progressBarItemCount = Math.ceil(itemCount / itemPerScreen);
  
    if (index + 1 >= progressBarItemCount) {
      index = 0;
      items.style.transform = `translateX(-${index * 100}%)`;
    } else {
      index++;
      items.style.transform = `translateX(-${index * 100}%)`;
    }
   
    calculateProgressBar()
  },5000)
})


function handleLeft() {
  let itemPerScreen = parseInt(
    getComputedStyle(item).getPropertyValue("--item-per-screen")
  );
  let progressBarItemCount = Math.ceil(itemCount / itemPerScreen);

  if (index != 0) {
    index--
    items.style.transform = `translateX(-${index * 100}%)`;
  } else {
    index = progressBarItemCount - 1;
    items.style.transform = `translateX(-${index * 100}%)`;
  }
  calculateProgressBar();
}

function handleRight() {
  let itemPerScreen = parseInt(
    getComputedStyle(item).getPropertyValue("--item-per-screen")
  );
  let progressBarItemCount = Math.ceil(itemCount / itemPerScreen);

  if (index + 1 >= progressBarItemCount) {
    index = 0;
    items.style.transform = `translateX(-${index * 100}%)`;
  } else {
    index++;
    items.style.transform = `translateX(-${index * 100}%)`;
  }
  calculateProgressBar();
}

function calculateProgressBar() {
  progressBar.innerHTML = "";
  let itemPerScreen = parseInt(
    getComputedStyle(item).getPropertyValue("--item-per-screen")
  );

  let progressBarItemCount = Math.ceil(itemCount / itemPerScreen);

  for (let i = 0; i < progressBarItemCount; i++) {
    let span = document.createElement("span");
    progressBar.appendChild(span);

    span.classList.add("progress_bar_item");
    if (i === index) {
      span.classList.add("active");
    }
  }
  if (index >= progressBarItemCount) {
    index = progressBarItemCount - 1;
    items.style.transform = `translateX(-${index * 100}%)`;
  }

  let progressBarItems = progressBar.querySelectorAll('span')
  progressBarItems.forEach((bar, i) => {
    bar.addEventListener("click", function (e) {
        progressBarItems.forEach((b) => b.classList.remove("active"));
      items.style.transform = `translateX(-${i * 100}%)`;
      this.classList.add("active");
    });
  });
}


