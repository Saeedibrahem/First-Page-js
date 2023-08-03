const toggleBtn = document.querySelector(".toggleBtn");
const menuShow = document.querySelector(".menuShow");
toggleBtn.addEventListener("click", () => {
  menuShow.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (e.target.closest(".menuShow") || e.target.closest(".toggleBtn")) {
    console.log("ok");
  } else {
    menuShow.classList.remove("active");
  }
});
document.addEventListener("scroll",()=>{
    menuShow.classList.remove("active");

})
