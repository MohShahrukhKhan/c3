// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html 
let amount= localStorage.getItem("amount")|| 0

document.getElementById("wallet").innerText=amount
async function myfun(){
  const api="e18b3001"
     
        try{
        let    q=document.getElementById("search").value
        
            const res=await fetch(`https://wwww.omdbapi.com/?s=${q}&apikey=${api}`)

            const {Search}=await res.json()
            
            appendData(Search)

        }catch(err){
            console.log(err)
        }

}


function appendData(data){
    document.getElementById("movies").innerHTML=null

    document.createElement(tag)



data.forEach( (el)=>{
    console.log(el)

  let  div=document.createElement("div")
   let img=document.createElement("img")

  img.src=el.Poster
    title=document.createElement("p")
    title.innerText=el.Title
    btn=document.createElement("button")
    btn.setAttribute("class","book_now")
    btn.addEventListener("click",(el)=>{
      CheckoutPage(el)
    })
  div.append(img,title,btn)


    document.getElementById("movies").append(div)


})
    }

    function CheckoutPage(el){
        localStorage.setItem("movie",JSON.stringify(el))
        window.location.href="checkout.html"
    }



let id;
function debounce(func,delay){
    if(id){
    clearTimeout(id)
    }
    id=setTimeout(function(){
        myfun()
    },delay);
}