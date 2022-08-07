const hour_value = document.querySelector(".hour_value");

const minute_value = document.querySelector(".minute_value");

const second_value = document.querySelector(".second_value");

const ampm_value = document.querySelector(".ampm_value");


function updateClock() {

    let today = new Date();

    let current_hour = today.getHours();
    let current_minute = today.getMinutes();
    let current_second = today.getSeconds();

    if (current_hour === 0){
        hour_value.innerText = '12';
    }
    else if (current_hour < 10){
        hour_value.innerText = '0' + current_hour;
    }
    else if (current_hour > 12 && current_hour < 22){
        hour_value.innerText = '0' + (current_hour -12);
    }
    else if (current_hour > 21){
        hour_value.innerText = current_hour -12;
    }
    else{
        hour_value.innerText = current_hour;
    }

    if (current_minute < 10){
        minute_value.innerText = '0' + current_minute;
    }
    else{
        minute_value.innerText = current_minute;
    }

    if (current_second < 10){
        second_value.innerText = '0' + current_second;
    }
    else{
        second_value.innerText = current_second;
    }

    if (current_hour < 12){
        ampm_value.innerText = 'AM';
    }
    else{
        ampm_value.innerText = 'PM'
    }

    
};

updateClock()

setInterval(updateClock, 1000); // Repeat updateClock Function every 1 second