// Store the wallet amount to your local storage with key "amount"
{/* <div id="navbar">
<h1>Add Money to wallet</h1>
<!-- Display the wallet amount here inside h1 tag with id as "wallet". Note only amount, no extra text. Like 500 not Rs 500 -->
<h1 id="wallet">0</h1>
</div>
<div id="add-money">
<input type="number" id="amount" placeholder="Enter amount in rupees">
<!-- input box for accepting money with id as "amount" -->
<button id="add_to_wallet">Add to wallet</button>
<!-- button with id as "add_to_wallet" -->
<button id="book_movies">Book Movies</button>
<!-- button with id as "book_movies" to go to movies.html --> */}

let amount= localStorage.getItem("amount")|| 0

document.getElementById("wallet").innerText=amount

function myfunction(){
    let addAmount=document.getElementById("wallet").value
    let nowAmount= Number(amount) + Number(addAmount)
    console.log(nowAmount)
document.getElementById("wallet").innerText= nowAmount
localStorage.setItem("amount",nowAmount)
window.location.reload()

}

