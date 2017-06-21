function displayTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
     
    var timeString = formatHour(h) + ":" + padZero(m) + ":" + padZero(s) + " " + getTimePeriod(h);
    document.querySelector("#current-time").innerHTML = timeString;
     
    // --- Analog clock ---//
    var canvas = document.querySelector("#clock");
    var context = canvas.getContext("2d");
     
    // You can change this to make the clock as big or small as you want.
    // Just remember to adjust the canvas size if necessary.
    var clockRadius = 100;
     
    // Make sure the clock is centered in the canvas
    var clockX = canvas.width / 2;
    var clockY = canvas.height / 2;
     
    // Make sure TAU is defined (it's not by default)
    Math.TAU = 2 * Math.PI;
     
    function drawArm(progress) {
        var armRadians = (Math.TAU * progress) - (Math.TAU/4);
        var armLength = clockRadius;
     
        var targetX = clockX + Math.cos(armRadians) * armLength;
        var targetY = clockY + Math.sin(armRadians) * armLength;
     
        context.lineWidth = 10;
        context.strokeStyle = '#DD0000'; // RED
     
        context.beginPath();
        context.moveTo(clockX, clockY); // Start at the center
        context.lineTo(targetX, targetY); // Draw a line outwards
        context.stroke();
    }
     
    drawArm(h / 12); // Hour
    drawArm(m / 60); // Minute
    drawArm(s / 60); // Second
}