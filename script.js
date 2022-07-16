setInterval(() => {
  var d = new Date();

  var hours = d.getHours() > 12 ? "pm" : "am";
  document.querySelector(".clock").innerHTML =
    (d.getHours() % 12 || 12) +
    " : " +
    d.getMinutes() +
    " : " +
    d.getSeconds() +
    " " +
    hours;
}, 1000);
