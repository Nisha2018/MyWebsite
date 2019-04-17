//Image Gallery
var img = ["1.png", "2.jpg", "3.jpg", "4.jpg"];
var i = 0;

function next() {
  document.getElementById("pic").src = "gallery/" + img[i];
  i++;
  if (i >= img.length) {
    i = 0;
  }
}
setInterval("next()", 5000);

var j = 3;
function previous() {
  document.getElementById("pic").src = "gallery/" + img[j];
  j--;
  if (j < 0) {
    j = 3;
  }
}

function newDoc() {
  window.location.assign("login_form.html");
}

function contact() {
  window.location.assign("contact.html");
}

//Login Form
function formvalid() {
  var u, p;
  u = document.getElementById("user");
  p = document.getElementById("pass");

  var a, b;
  a = u.value;
  b = p.value;

  if (a == "" || b == "") {
    alert("Please enter username and password");
    u.value = "";
    p.value = "";
    u.focus();
  } else {
    if (a == "nisha" && b == "26") {
      alert("Welcome");
      document.location = "index.html";
    } else {
      alert("Invalid username or password");
      u.value = "";
      p.value = "";
      u.focus();
    }
  }
}

//Back to top button
function topFunction() {
  document.documentElement.scrollTop = 0;
}
