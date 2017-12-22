var vid = document.getElementById("myVideo");

function getCurTime() { 
    return (vid.currentTime);
} 

function setCurTime() {
    vid.currentTime=getCurTime()-5;
} 