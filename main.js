var minutes = 25;
var seconds = "00";

var click = new Audio("click.wav");
var bell = new Audio("bell.wav");

function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
    click.play();

    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);


    function minutesTimer(){
        minutes = minutes-1;
        document.getElementById("minutes").innerHTML = minutes;

    }


    function secondsTimer(){
        seconds = seconds-1;
        if(seconds <=0){
            if(minutes <=0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
                document.getElementById("done").innerHTML = "session completed! take a break";
                document.getElementById("done").classList.add("show_message");
                bell.play();
            }
            seconds = 60;
        }
        document.getElementById("seconds").innerHTML = seconds;
    }

}