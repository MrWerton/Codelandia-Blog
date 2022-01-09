const likes = document.querySelectorAll(".like")


for(let like of likes){
    like.addEventListener('click', ()=>{
        like.classList.toggle('active')
        console.log('xxxxxxx')
    })

}