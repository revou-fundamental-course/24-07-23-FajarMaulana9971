// setInterval(autoSlides, 4000)

// function autoSlides()
// {
//    const img_arr = ["gambar1.jpg", "gambar2.jpg", "gambar3.jpg", "beach.jpg"]; 

//    setInterval(function(){
//     var image     = document.getElementById("img-slide")
//     image.setAttribute("src", "img/"+img_arr[Math.floor(Math.random() * (img_arr.length - 1)) + 0])
//    }, 1000)
// }

let slides    = 0;
let image     = document.getElementById("img-slide")
let slash     = document.getElementById("slash")
const img_arr = ["gambar1.jpg", "gambar2.jpg", "gambar3.jpg", "beach.jpg"]
autoSlides()

function autoSlides()
{
    slides++;
    if(slides > img_arr.length)
    {
        slides = 1
    }
    slash.innerHTML = `${(slides)} / ${img_arr.length}` 
    // image.style.opacity = "0.6"
    image.setAttribute("src", "img/"+img_arr[slides - 1])
    // image.style.opacity = "1"
    setTimeout(autoSlides, 2500)
}

document.querySelector("#name").addEventListener("input", function(){
    
    const nama = this.value
    let small = document.querySelector("#alert-name")
    
    if(nama.length == 0){
        small.style.color = "red";
        small.innerHTML = "Nama tidak boleh kosong";
    }else
    {
        if(nama.length >= 50)
        {
            small.style.color = "red";
            small.innerHTML = "Nama tidak boleh lebih dari 50 karakter";
        }else
        {
            
            small.innerHTML = "";
        }
    }

})

document.querySelector("#email").addEventListener("input", function(){
    
    const email = this.value
    let small = document.querySelector("#alert-email");
    let arrCharater = ['@', '.'];
    if(email.length == 0)
    {   
        small.style.color = "red";
        small.innerHTML = "Email tidak boleh kosong";
    }else{
        
        if(!email.includes("@") ){
            small.style.color = "red";
            small.innerHTML = "Email tidak valid";
            
        }else
        {
            small.style.color = "green";
            small.innerHTML = "valid email";
        }
        
    }

})

