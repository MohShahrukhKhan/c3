// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount= localStorage.getItem("amount")|| 0

document.getElementById("wallet").innerText=amount

let Box=document.getElementById("movie")

let moviesData=JSON.parse(localStorage.getItem("movies"))

function confirmfun(){
  let  numberSeats=document.getElementById("number_of_seats").value
let total=Number(numberSeats)*100

if(amount<total){
    alert("Insufficient Balance!")
}else{
    alert("Booking successfull")

    let updat=amount - total
    localStorage.setItem("amount",updat)
    window.location.reload()
}
}
let div =document.createElement("div")

let img=document.createElement("img")

img.src=moviesData.Poster
  title=document.createElement("p")
  title.innerText=moviesData.
  
  div.append(title,img)

  Box.append(div)