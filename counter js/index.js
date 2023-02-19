let con = 0;

const target = document.querySelector("label");
const btns = document.querySelectorAll(".btn");
///////////////////////TODO:Solucion Pro//////////////////////////////////////////////////////
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let x = this.getAttribute("value");
    if (x == "des") {
      count--;
    }
    if (x == "inc") {
      count++;
    }
    if (x == "res") {
      count = 0;
    }
    target.innerHTML = count;
  });
});
// function aa() {
//   for (var i = 0; i < btns.length; i++) {
//     document
//       .querySelectorAll(".btn")
//       [i].addEventListener("click", function (e) {
//         let x = this.getAttribute("value");
//         if (x == "des") {
//           count--;
//         }
//         if (x == "inc") {
//           count++;
//         }
//         if (x == "res") {
//           count = 0;
//         }
//         target.innerHTML = count;
//       });
//   }
// }
aa();
///////////////////////FIXME:NO PRO////////////////////////////////////////////////////////////
// function inc() {
//   ++con;
//   target.innerHTML = con;
// }
// function dec() {
//   if (con > 0) {
//     con--;
//     target.textContent = con;
//   } else {
//     alert("El contador no puede ser Negativo");
//   }
// }
// function res() {
//   con = 0;
//   target.innerHTML = con;
// }
