// var hid = document.getElementById("button-hide");

// hid.addEventListener("click", function(){
//     var pageDiv = document.getElementById("main-page");
//     pageDiv.style.display = "none";
//     console.log("clicked hide")
// })

// var shw = document.getElementById("button-show");

// shw.addEventListener("click", function () {
//     var pageDiv = document.getElementById("main-page");
//     pageDiv.style.display = "flex";
//     console.log("clicked show");

// });

function hideFirst() {
    // var hid = document.getElementById("button-hide");

    var pageDiv = document.getElementById("mainBodyHide");
    pageDiv.style.display = "none";
    console.log("hidden successfully");
}

hideFirst();
let flag = 0;

// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Feb 14, 2024 00:00:01").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick() {
    // Get current time
    let now = new Date().getTime();
    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;

    // Check if time is above 0
    if (t > 0) {
        // Setup Days, hours, seconds and minutes
        // Algorithm to calculate days...
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        // prefix any number below 10 with a "0" E.g. 1 = 01
        if (days < 10) {
            days = "0" + days;
        }

        // Algorithm to calculate hours
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) {
            hours = "0" + hours;
        }

        // Algorithm to calculate minutes
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) {
            mins = "0" + mins;
        }

        // Algorithm to calc seconds
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) {
            secs = "0" + secs;
        }

        // Create Time String
        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        // Set time on document
        document.getElementById("countdown").innerText = time;
    } else {
        if (flag === 0) {
            var cntDiv = document.getElementById("toHideCnt");
            cntDiv.style.display = "none";
            console.log("hide countdown successfully");
            var pageDiv = document.getElementById("mainBodyHide");
            pageDiv.style.display = "flex";
            console.log("shown successfully");
        }
        flag = 1;
    }
}
