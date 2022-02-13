//Start of coutdown js function
function BTRCountDowntimer(){
    //declaration of start of funtion notification
    console.log("BTRcountdown function has started..");
    //start of loop deciding time state
    var currTime = 50;
     for(var i = 0; i < 11; i++){
         setTimeout(function(){
            console.log(currTime);
            // decalration of timer reaching 0
            if (CurrTime == 0){
              document.getElementById("countDownRes").innerHTML = "Blastoff";
            } else if(CurrTime=25){
                // notificaton displaying halfway mark in timer
                document.getElementById("countDownRes").innerHTML = 
                "warning: less than halfway to launch, time left = " + currTime;
            } else {
                document.getElementById("countDownres").innerHTML = currTime;
            }
            //countdown and total timer attributes
            currTime = currTime - 5;
            }, i * 5000);
     }
}

var blink = document.getElementById('blink');
    setInterval(function() {
        blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
    }, 500);