let items = document.querySelector(".items");
let itemCount = items.children.length;
let wrapper = document.querySelector(".wrapper");
let progressBar = document.querySelector(".progress_bar");
let item = document.querySelector(".item");
let itemPerScreen = parseInt(
  getComputedStyle(item).getPropertyValue("--item-per-screen")
);
let progressBarItemCount = Math.ceil(itemCount / itemPerScreen);
let index = 0;

document.querySelector(".left").addEventListener("click", handleLeft);
document.querySelector(".right").addEventListener("click", handleRight);
window.addEventListener("resize", calculateProgressBar);

calculateProgressBar();

function handleLeft() {
  if (index != 0) {
    index--;
    items.style.transform = `translateX(-${index * 100}%)`;
  } else {
    index = progressBarItemCount - 1;
    items.style.transform = `translateX(-${index * 100}%)`;
  }
  calculateProgressBar();
}

function handleRight() {
  if (index + 1 >= progressBarItemCount) {
    index = 0;
    items.style.transform = `translateX(-${index * 100}%)`;
  } else {
    index++;
    items.style.transform = `translateX(-${index * 100}%)`;
  }
// console.log(index)
// console.log(progressBarItemCount)
  calculateProgressBar();
}

function calculateProgressBar() {
  progressBar.innerHTML = "";
  let itemPerScreen = parseInt(
    getComputedStyle(item).getPropertyValue("--item-per-screen")
  );

  let progressBarItemCount = Math.ceil(itemCount / itemPerScreen);

if(index >= progressBarItemCount){
	index = progressBarItemCount - 1
    items.style.transform = `translateX(-${index * 100}%)`;

}
  for (let i = 0; i < progressBarItemCount; i++) {
    let span = document.createElement("span");
    progressBar.appendChild(span);

    span.classList.add("progress_bar_item");
    if (i === index) {
      span.classList.add("active");
    }
  }
}

progressBar.querySelectorAll('.progress_bar_item').forEach((bar, i) => {
	bar.addEventListener('click',function (e) {
		progressBar.querySelectorAll('.progress_bar_item').forEach(b => b.classList.remove('active'))
		items.style.transform = `translateX(-${i * 100}%)`;
		this.classList.add('active')
	


	})
})