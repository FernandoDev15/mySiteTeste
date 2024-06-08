const pc = document.querySelector('#pc');

pc.addEventListener("click", function(){
    if(pc.style.color !== "blue") {
        pc.style.color = "blue"
    } else {
        pc.style.color = "red"
    }
})

