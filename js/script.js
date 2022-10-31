//make an infinite typing effect on a typewriter style text
//credits: https://codepen.io/bradtraversy/pen/ZEGdQrZ
var i = 0;
var txt = 'Hello, I am a Dvip.';
var speed = 100;
var cursor = document.getElementById('cursor');
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing_effect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        cursor.style.opacity = 0;
    }
    }
typeWriter();
