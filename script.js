const left = document.getElementById('left');
const right = document.getElementById('right');
const btOpen = document.getElementById('open')
const imgs = document.getElementById('imgs')
const btClose = document.getElementById('close')

let count = 1
left.addEventListener('click', () => {
    count-=1;
    if(count === 0){
        document.getElementById('info3').style.display = "block"
        document.getElementById('info1').style.display = "none"
        document.getElementById('info2').style.display = "none"
        window.innerWidth > 700 ?
            imgs.style.backgroundImage = "url('../images/desktop-image-hero-3.jpg')" :
            imgs.style.backgroundImage = "url('../images/mobile-image-hero-3.jpg')"
    } else if(count === -1){
        document.getElementById('info3').style.display = "none"
        document.getElementById('info1').style.display = "none"
        document.getElementById('info2').style.display = "block"
        window.innerWidth > 700 ?
            imgs.style.backgroundImage = "url('../images/desktop-image-hero-2.jpg')" :
            imgs.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')"
    } else {
        count = 1;
        document.getElementById('info3').style.display = "none"
        document.getElementById('info1').style.display = "block"
        document.getElementById('info2').style.display = "none"
        window.innerWidth > 700 ?
            imgs.style.backgroundImage = "url('../images/desktop-image-hero-1.jpg')" :
            imgs.style.backgroundImage = "url('../images/mobile-image-hero-1.jpg')"
    }
    console.log(count)
})

right.addEventListener('click', () => { 
    count <= 0 ? count+=2 : count+=1
   
    if(count === 2){
        document.getElementById('info3').style.display = "none"
        document.getElementById('info1').style.display = "none"
        document.getElementById('info2').style.display = "block"
        window.innerWidth > 700 ?
            imgs.style.backgroundImage = "url('../images/desktop-image-hero-2.jpg')" :
            imgs.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')"
        
    } else if(count === 3){
        document.getElementById('info3').style.display = "block"
        document.getElementById('info1').style.display = "none"
        document.getElementById('info2').style.display = "none"
        window.innerWidth > 700 ?
            imgs.style.backgroundImage = "url('../images/desktop-image-hero-3.jpg')" :
            imgs.style.backgroundImage = "url('../images/mobile-image-hero-3.jpg')"
    } else {
        count = 1;
        document.getElementById('info3').style.display = "none"
        document.getElementById('info1').style.display = "block"
        document.getElementById('info2').style.display = "none"
        window.innerWidth > 700 ?
            imgs.style.backgroundImage = "url('../images/desktop-image-hero-1.jpg')" :
            imgs.style.backgroundImage = "url('../images/mobile-image-hero-1.jpg')"
    }
    console.log(window.innerWidth)
})


btOpen.addEventListener('click', ()=>{
    document.getElementById('navModal').style.display = 'block'
    btOpen.style.display='none'
    document.getElementById('logo').style.display='none'
    console.log('abriu')
})

btClose.addEventListener('click', ()=>{
    document.getElementById('navModal').style.display = 'none'

    btOpen.style.display='block'
    document.getElementById('logo').style.display='block'
})