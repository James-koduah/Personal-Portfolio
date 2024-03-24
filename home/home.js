let screen_opacity = 0;
let winY = 1000;
let screen_div = document.getElementById('screen')
document.addEventListener('scroll', (e)=>{
    if (window.scrollY < 800){
        screen_div.style.background = 'transparent'
        document.documentElement.style.setProperty('--ma-bg', '#8402af55')
    }
    else if (window.scrollY > 803 && window.scrollY < 1390){
        document.body.style.background = 'url(/images/body3.jpg) no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundAttachment = 'fixed' 
    }
    else if (window.scrollY > 1400 && window.scrollY < 1700){
        screen_div.style.background = '#000'
    }
    else if (window.scrollY > 1710 && window.scrollY < 2100){
        document.body.style.background = 'url(/images/body.webp) no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundAttachment = 'fixed' 
    }
    if (window.scrollY > 2110){
        screen_div.style.background = 'transparent'
        document.documentElement.style.setProperty('--ma-bg', '#af750255')
        document.documentElement.style.setProperty('--su-bg', '#ffffff')
        
    }
    console.log(window.scrollY)
        // if (screen_opacity >= 0 && screen_opacity <= 1){
        //     if (window.scrollY > winY){
        //         if (screen_opacity <= 0.98) screen_opacity += 0.02
        //     }
        //     else{
        //         if (screen_opacity >= 0.02) screen_opacity -= 0.02
        //     }
        //     winY = window.scrollY
        //     screen_div.style.opacity = screen_opacity
        //     console.log(window.scrollY)
        // }
        // if (window.scrollY > 1900){
        //     console.log('1900')
        // }
        // else if(window.scrollY > 1800){
        //     console.log('1800')
        // }
        // else if(window.scrollY > 1700){
        //     console.log('1700')
        // }
        // else if(window.scrollY > 1600){
        //     console.log('1600')
        // }
        // else if(window.scrollY > 1500){
        //     console.log('1500')
        // }
        // else if(window.scrollY > 1400){
        //     console.log('1400')
        // }
        // else if(window.scrollY > 1300){
        //     console.log('1300')
        // }
        // else if(window.scrollY > 1200){
        //     console.log('1200')
        // }
        // else if(window.scrollY > 1100){
        //     console.log('1100')
        // }
        // else if(window.scrollY > 1000){
        //     screen_div.style.background = '#000000bb'
        // }
})