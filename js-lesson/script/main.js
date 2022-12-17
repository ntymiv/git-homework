// const div = document.querySelector("div");
// console.log(div);

// const titles = document.querySelectorAll("h1");

// console.log(titles[0]);

// console.dir(div);

// Element.innerHTML = "";

// const content1 = document.getElementsByClassName("content1");
// const content = document.getElementsByTagName("div");
// console.log(content);

// const byId = document.getElementById("content1");
// console.log(byId);

// const byID1 = document.querySelector("#content1");

// console.log(byID1);

// const content = document.querySelector("#content1");

// content.style.backgroundColor = 'salmon';
// content.style.color = 'green';
// content.style.fontSize = "40px";

// fontSize

// const a = document.getElementById("content1");

// a.style.cssText = "color: green; font-size: 40px";

// document.getElementById("content1").style.cssText =
//   "color: green; font-size: 40px";

// a.setAttribute(
//   "style",
//   "background-color: salmon; color: white; width: 150px; height: 150px;"
// );

// console.dir(div);

// const a = document.getElementById("");
// const b = document.getElementsByClassName("");
// const c = document.getElementsByTagName("")

// css
// background-color  => elem.style.backgroundColor
// z-index           => elem.style.zIndex
// border-left-width => elem.style.borderLeftWidth

// const titles =  document.querySelectorAll('h1');

// console.log(titles);
// document.write("hello");

// div.style.color = 'red';
//few style
// document.getElementById("myElement").style.cssText = "display: block; position: absolute";

// ✅ Create element
const el = document.createElement("div");

// ✅ Set Style Attributes on Element
el.setAttribute(
  "style",
  "background-color: salmon; color: white; width: 150px; height: 150px;"
);

// ✅ Alternatively, Set styles on Element
// el.style.backgroundColor = 'salmon';
// el.style.color = 'white';
// el.style.width = '150px';
// el.style.height = '150px';

// ✅ Add text content to element
// el.textContent = 'Hello world';

// ✅ Or set the innerHTML of the element
// el.innerHTML = `<span>Hello world</span>`;

// ✅ add element to DOM
// const box = document.getElementById('box');
// box.appendChild(el);

// document.body.appendChild(el);

// callback
// const test = document.querySelector(".content");

// test.addEventListener("mouseup", function () {
//     test.style.backgroundColor = "white";
// });

// test.addEventListener("mousemove", function () {
//     test.style.backgroundColor = "red";
// });

// Події миші:

// click – відбувається, коли клацнули на елемент лівою кнопкою миші (на пристроях із сенсорними екранами воно відбувається при торканні).
// contextmenu – відбувається, коли клацнули на елемент правою кнопкою миші.
// mouseover / mouseout – коли миша наводиться на / залишає елемент.
// mousedown/mouseup – коли натиснули/віджали кнопку миші на елементі.
// mousemove – під час руху миші.

// div.addEventListener("mouseover", (e) => {
//     div.style.color = 'black';
// })

// div.addEventListener("mouseout", (e) => {
//     div.style.color = 'red';
// })


const header = document.querySelector('.title');
const content = document.querySelector('.content');
const block = document.querySelector('.block');
block.style.backgroundColor = 'salmon';
// el.style.color = 'white';
block.style.width = '150px';
block.style.height = '150px';


header.addEventListener("click", function(){
    content.style.display = "none";
});

const body = document.body;


block.addEventListener("click", function() {
    content.style.display = "block";
})