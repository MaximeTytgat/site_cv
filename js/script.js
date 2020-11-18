let subs_buttons = document.querySelectorAll('.sub_button')
let buttons = document.querySelectorAll('.central_button .button')
let main_button = document.querySelector('.menu > .central_button')
let burger_img = document.querySelector('.central_button .img_container .burger')
let cross_img = document.querySelector('.central_button .img_container .cross')

let active = false

main_button.addEventListener('click', event => {
    if (event.toElement == document.querySelector('img.cross') || event.toElement == document.querySelector('img.burger')) {
        if (!active) {

            burger_img.style.transform =  "rotate(180deg)";
            burger_img.style.opacity =  "0";
    
            cross_img.style.transform =  "rotate(360deg)";
            cross_img.style.opacity =  "1";
    
    
            subs_buttons[0].style.bottom = "30px";
            subs_buttons[0].style.right = "75px";
            subs_buttons[1].style.bottom = "80px";
            subs_buttons[2].style.bottom = "30px";
            subs_buttons[2].style.left = "75px";
            subs_buttons[3].style.top = "60px";
            subs_buttons[3].style.left = "50px";
            subs_buttons[4].style.top = "60px";
            subs_buttons[4].style.right = "50px";
            buttons.forEach(element => {
                element.style.transform = "scale(1)";
                element.style.opacity = "1";
            });
            active = true
        } else {
            
            burger_img.style.transform =  "rotate(0deg)";
            burger_img.style.opacity =  "1";
    
            cross_img.style.transform =  "rotate(180deg)";
            cross_img.style.opacity =  "0";
    
            subs_buttons[0].style.bottom = "10px";
            subs_buttons[0].style.right = "30px";
            subs_buttons[1].style.bottom = "35px";
            subs_buttons[2].style.bottom = "10px";
            subs_buttons[2].style.left = "30px";
            subs_buttons[3].style.top = "20px";
            subs_buttons[3].style.left = "15px";
            subs_buttons[4].style.top = "20px";
            subs_buttons[4].style.right = "15px";
            buttons.forEach(element => {
                element.style.transform = "scale(0)";
                element.style.opacity = "0";
            });
            active = false
        }    
    }

    
})