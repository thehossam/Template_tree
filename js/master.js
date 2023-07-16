// scroller progeress height
let scroller = document.querySelector(".scroller")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", ()=>{
  let scrolltop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrolltop / height) * 100}%`

})
// change background landing
let len ;
let land = document.querySelector(".landing");
let arrback = ["../images/slideshow/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering.jpg",
"../images/slideshow/white-wall-living-room-have-sofa-decoration-3d-rendering.jpg", "../images/slideshow/wood-sideboard-living-room-interior-with-copy-space.jpg"];

function change(){
  len = Math.floor(Math.random() * arrback.length)
  land.style.backgroundImage = `url(${arrback[len]})`
}
setInterval(change,2000)




























// btn.addEventListener("click", () => {
//   spans.forEach((span) =>{
//     if (span.style.top != '50%') {
//       s(span)
//     }
//     if(span.style.top == '50%'){
//       re()
//     }
//   })
//   setTimeout(rot, 0.500)
  
// })
// function s(span) {
//   span.style.top = '50%';
// }

// function rot() {
//   spans[0].style.transform = 'rotate(45deg)'
//   spans[1].style.display = 'none'
//   spans[2].style.transform = 'rotate(-45deg)'
// }
// function re() {
//   spans[0].style.transform = '0deg'
//   spans[1].style.display = 'block'
//   spans[2].style.transform = '0deg'
// }