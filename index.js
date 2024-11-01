function showpassword(show) {
    var password = document.getElementById("password")
    password.type = "text"
}
function hidepassword(hide) {
    var password = document.getElementById("password")
    password.type = "password"
}

function correct(huzaifa) {
var para = document.getElementById("text")
var inputpassword = document.getElementById("password")
if (password.value.length < 3) {
    text.style.display = "block"
    text.innerHTML = "more than 8 character!"
    text.style.color = "red"
    text.style.fontSize = "22px"
    text.style.fontWeight = "500px"
    alert("Try again!")
} else {
    text.style.display = "block"
    text.innerHTML = "your password is correct!"
    
    text.style.color = "green"
    text.style.fontSize = "22px"
    text.style.fontWeight = "500px"
    alert("succesfuly login")
}}