function text_animation(){
    let welcome_display_text = document.getElementById('welcome_display_text')
    let running_text = "Welcome[The name is James[A Software Engineer \
        based in Ghana[Here to help you build agile and scalable software \
        solutions[As a Full Stack Developer I give quality service in \
        both the Front and Backend[\
        C____ Python_____ Javascript____ React____ SQL____ Bash____ Puppet____\
        C++____ Java[Whatever you need just contact me"
    let running_text_index = 0;
    let running_text_animation = setInterval(()=>{
        //When inputing the text into HTML some characters like (' ', '\n') behave funny
        //That's why the <running_text> variable has been made into a markup format
        if (running_text[running_text_index] == ' '){
            //If the current character is an empty space, combine it with the next character
            running_text_index += 1  
            welcome_display_text.innerText += ` ${running_text[running_text_index]}`
        }
        else if(running_text[running_text_index] == '['){
            //The character '[' represents the newline character in this markup
            welcome_display_text.innerHTML += '<br>'
        }
        else{
            welcome_display_text.innerText += running_text[running_text_index];
        }
    
        if (running_text_index == running_text.length - 1){
            clearInterval(running_text_animation)
        }
        running_text_index++
    }, 50)
}
text_animation()