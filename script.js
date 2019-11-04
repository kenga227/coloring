"use strict";

const picker = document.querySelector("#colorpicker");
let color = picker.value;

document.querySelectorAll("div.colors").forEach(item => {
  item.classList.remove("active");
  item.addEventListener("click", event => {
    activeCheck(item);
  });
});

function activeCheck(e) {
  document.querySelectorAll("div.colors").forEach(item => {
    item.classList.remove("active");
  });
  e.classList.add("active");
}

document.querySelector('input[type="color"]').value = "#ffffff";

picker.addEventListener("input", function() {
  color = this.value;
  document.querySelectorAll("div.colors").forEach(item => {
    item.classList.remove("active");
  });
});

const palette = document.getElementsByClassName("palette");

for (let item of palette) {
  item.addEventListener("click", e => {
    var styles = getComputedStyle(e.target);
    color = styles.backgroundColor;
  });
}

function loadSVG() {
  fetch("svgRM.svg")
    .then(e => e.text())
    .then(svg => {
      document.querySelector("#mysvg").innerHTML = svg;
      selectIt();
    });
}

function selectIt() {
  document.querySelector("#yesfill").addEventListener("click", e => {
    colorIt(e.target);
  });
}

function colorIt(item) {
  item.style.fill = color;
}

loadSVG();
