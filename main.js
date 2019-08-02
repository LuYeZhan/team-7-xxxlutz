function main() {
  const a = document.getElementById('user-nav');
a.addEventListener('click', ()=>{
  let first = document.getElementById("first-info");
  first.classList.add("hide");
  let second = document.getElementById("second-info");
  second.classList.add("show");
})
const b = document.getElementById('user-nav2');
b.addEventListener('click', ()=>{
  let second = document.getElementById("second-info");
  second.classList.add("hide");
  let third = document.getElementById("third-info");
  third.classList.add("show");
})
}

window.addEventListener('load', main);