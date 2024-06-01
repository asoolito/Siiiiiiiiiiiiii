let userNumber = +prompt("1-sonni kiriting")
let userNumber2 = +prompt("2-sonni kiriting")
let userChange = prompt("1)qo'shish + \n 2)ko'paytirish * \n 3)bo'lish/ \n 4)ayirish -")


if (userChange=="1"){
let userName =(`${userNumber}+${userNumber2} = ${userNumber+userNumber2}`)
let text = document.createElement("h1")
text.textContent =userName
document.body.appendChild(text)
}
if (userChange=="2") {
    let userNew =(`${userNumber}*${userNumber2} = ${userNumber*userNumber2}`)
    let text = document.createElement("h1")
    text.textContent =userNew
    document.body.appendChild(text)
}
if (userChange=="3") {
    let userAge =(`${userNumber}/${userNumber2} = ${userNumber/userNumber2}`)
    let text = document.createElement("h1")
    text.textContent =userAge
    document.body.appendChild(text)
}
if (userChange=="4") {
    let userName =(`${userNumber}-${userNumber2} = ${userNumber-userNumber2}`)
    let text = document.createElement("h1")
    text.textContent =userName
    document.body.appendChild(text)
}