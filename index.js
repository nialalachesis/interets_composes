let butt = document.querySelector("#butt");
let box1 = document.querySelector("#boxtext1");
let box2 = document.querySelector("#boxtext2");
let box3 = document.querySelector("#boxtext3");
let box4 = document.querySelector("#boxtext4");
let dur1 = document.querySelector("#dur1");
let dur2 = document.querySelector("#dur2");
let dur3 = document.querySelector("#dur3");
const result = document.querySelector(".result");
let taux2 = 0;
let pla = 0;
let taux = 0;
let dure = 0;
let app = 0;
let dur_taux = 0;
let dur_app = 0;
let dur_calc = 0;
let inv = 0;

butt.addEventListener("click", (e) => {
  e.prentdefault;
  calc((pla, taux, dure, dur_taux, dur_app, dur_calc));

  pla = document.getElementById("boxtext1").value;
  taux = document.getElementById("boxtext2").value;
  dure = document.getElementById("boxtext3").value;
  app = document.getElementById("boxtext4").value;
});

/*butt.addEventListener("mousehover", (e) => {
  e.prentdefault;
  document.querySelector("#butt").innerHTML = `<h3>calculer >></h3>`;
});*/

box1.addEventListener("input", (e) => {
  pla = e.target.value;
  //console.log(pla);
});
box2.addEventListener("input", (e) => {
  taux = e.target.value;

  //console.log(taux);
});
box3.addEventListener("input", (e) => {
  dure = e.target.value;
  //console.log(dure);
});
box4.addEventListener("input", (e) => {
  app = e.target.value;
  //console.log(dure);
});
dur1.addEventListener("input", (e) => {
  dur_taux = e.target.value;
});
dur2.addEventListener("input", (e) => {
  dur_app = e.target.value;
  //console.log(dur_app);
});
dur3.addEventListener("input", (e) => {
  dur_calc = e.target.value;
  //console.log(dur_calc);
});

let calc = function () {
  let int = 0;
  taux = taux / 100;
  if (dur_taux == "année") {
    taux = taux / 12;
    console.log(taux + " par mois");
  } else {
    console.log(taux + " par mois");
  }
  if (dur_app == "année") {
    app = app / 12;
    console.log("apports de " + app + " $ par mois");
  } else {
    console.log("apports de " + app + " $ par mois");
  }
  if (dur_calc == "année") {
    dure = dure * 12;
    console.log(dure + " mois");
  } else {
    console.log(dure + " mois");
  }

  int = pla;
  console.log(int);
  for (let i = 1; i <= dure; i++) {
    int = (1 + taux) * (int - -app);
    console.log(1 + taux);
    console.log(int);
  }

  int += app;
  inv = app * dure - -pla;
  gain = int - inv;
  //document.location.reload(true);
  console.log("total des investissements: " + inv);
  console.log("capital total: " + int);
  console.log("plus-value: " + gain);

  document.querySelector("#inv").innerHTML = `
  ${inv} $`;
  document.querySelector("#int").innerHTML = `
  ${int} $`;
  document.querySelector("#gain").innerHTML = `
  ${gain} $`;
};
