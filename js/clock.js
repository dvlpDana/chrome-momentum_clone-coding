const clock = document.querySelector("#clock");
const apm = document.querySelector("#apm")

function getClock() {
  const date = new Date();
  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, "0");

  let ampm = "am";
  if(hours > 12) {
    ampm = "pm";
    hours %= 12
  }

  clock.innerText = `${hours}:${minutes}`;
  apm.innerText = ` ${ampm} `
}

getClock();
setInterval(getClock, 1000);