let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

function myFunc() {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hourRotate = (hr - 12) * 30 + min / 2;
  let minuteRotate = 6 * min;
  let secondRotate = 6 * sec;

  hour.style.transform = `rotate(${hourRotate}deg)`;
  minute.style.transform = `rotate(${minuteRotate}deg)`;
  second.style.transform = `rotate(${secondRotate}deg)`;
}
myFunc()
setInterval(myFunc, 1000);
