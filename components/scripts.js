document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    document.getElementById("preloader").style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.position = "";
  } else {
    document.body.style.overflowY = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  }
};

// transisi section



