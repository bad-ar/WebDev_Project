const endDate = "06 July 2025 10:00:00 PM";
document.getElementById('end-date').innerHTML = endDate;

const inputs = document.querySelectorAll(".col input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff <= 0) {
    inputs.forEach(input => input.value = "00");
    document.querySelector(".title").innerText = "Launched!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / 3600 / 24);
  const hours = Math.floor(diff / 3600) % 24;
  const minutes = Math.floor(diff / 60) % 60;
  const seconds = Math.floor(diff) % 60;

  inputs[0].value = format(days);
  inputs[1].value = format(hours);
  inputs[2].value = format(minutes);
  inputs[3].value = format(seconds);
}

function format(n) {
  return n < 10 ? "0" + n : n;
}

clock(); // initial call
const timer = setInterval(clock, 1000);
