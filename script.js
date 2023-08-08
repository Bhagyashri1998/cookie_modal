let cookieConsent = document.querySelector(".cookieData")
let clear = document.querySelector("#btn_closeme")
let btn = document.querySelector("#btn_clickme")
function setCookie() {
  document.cookie = "dismissed=true;"
}
function checkCookies() {
  var cookies = document.cookie.split(";")
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]
    if (cookie.indexOf("dismissed=") === 0) {
      return true
    }
  }
}
const clickMe = () => {
  if (!checkCookies()) {
    cookieConsent.style.display = "block"
  }
}
const closeMe = () => {
  cookieConsent.style.display = "none"
  setCookie()
}
