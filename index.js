document.querySelector(".mobile-btn").addEventListener('click', function(){
    let menuBtn =document.querySelector(".menu-btn")
    if(menuBtn.style.display === "flex"){
        menuBtn.style.display = "none"
    } else {
        menuBtn.style.display = 'flex'
    }
})
