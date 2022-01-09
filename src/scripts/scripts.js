const likes = document.querySelectorAll(".like")
const cards = document.querySelector(".cards")


for(let like of likes){
    like.addEventListener('click', ()=>{
        like.classList.toggle('active')
        console.log('xxxxxxx')
    })

}