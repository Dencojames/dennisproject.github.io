const countDownDate = new Date("March 4, 2024 00:00:00").getTime();
const element = document.getElementById("countdown");

function formatNumber(n) {
  if (n < 10) return `0${n}`;

  return n;
}

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = formatNumber(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = formatNumber(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));

  element.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    element.innerText = "EXPIRED";
  }
}, 1000);
