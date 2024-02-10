const chatBtn = document.getElementById(`chat-btn`);
const chat    = document.getElementById(`chat-form`);

let chatOpen = false;

chatBtn.addEventListener(`click`, function(){
    
    if(chatOpen) {
        chat.style.visibility = `hidden`
        chatOpen = false;
    } else {
        chat.style.visibility = `visible`
        chatOpen = true;
    }
});