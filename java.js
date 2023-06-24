
//For parallax
document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

// For the navigation bar
function antibac() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10BOQxQoOAyITiFiQtU0g0dtPw6P9nKdi/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function paint() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10B1pRIIX828aC760r-VN_tFUJjs6Ubnd/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function GDP() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10AG0Pspmj2GcyV5q5VgI75LzlBKVC6FR/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Diabetes() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/107klEdxolsmIHYP7Isw1ldRn6pY_IrBv/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Heat() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/103mPieRwMx5u2KzKgthS1AkGwVoc6th-/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function medes() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1011T3rVVayXOjysvukEmvqlvpXKdN9en/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function NaCl() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10OS9cwuKoiini5IdEj3B00psE-TNy4tE/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Ky() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-WgKhdMXbeOnhEvRETRzJ9Bb6Il0__l8/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Time() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-DFWRQ0Y2ZjP4SGn6llcctBXkoIwdZzo/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function TDG() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-yzntjc5F-wsGKkGQc_ECPztloupKokq/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Bottle() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-oEr6sHv3dxhRuA0BVbROU_hVEf85-tA/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Limit() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10F8pqYjDj9NMnCiJN_YcRi-1F-6o2qXo/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Art() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-GK4VLxOhtRXl70rJirMGPcX7vEbSFm1/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function portfolio() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://nileparun.com\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function web() {
    document.getElementById("display").innerHTML = "<iframe src=\"https://nileparun.com\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function cancel() {
    document.getElementById("display").innerHTML = "";
}

