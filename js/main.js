(function () {
    var canvas = document.createElement("canvas");
    var WEB_W = window.innerWidth, WEB_H = window.innerHeight;
    console.log("WEB_W:" + WEB_W + ",WEB_H:" + WEB_H);
    var C_W = 480, C_H = 320;
    C_W = Math.round(C_H * WEB_W / WEB_H);
    // C_H = Math.round(C_W * WEB_H / WEB_W);
    console.log("C_W:" + C_W + ",C_H:" + C_H);
    canvas.width = C_W;
    canvas.height = C_H;
    canvas.style = "width: 100%; height: 100%;";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var lastTime = 0;

    function onTouchEvent(touchEvent) {
        var event = touchEvent || window.event;
        switch (event.type) {
            case "touchstart":
                console.log(event.touches);
                break;
            case "touchend":
                break;
            case "touchmove":
                break;
        }
    }

    canvas.addEventListener("touchstart", onTouchEvent);
    canvas.addEventListener("touchend", onTouchEvent);
    canvas.addEventListener("touchmove", onTouchEvent);

    function render() {
        ctx.fillStyle = "white";
        ctx.font = "48px serif";
        ctx.fillText("曹大人你好！", 0, 48);
    }

    function update() {

    }

    function main(time) {
        window.requestAnimationFrame(main);
        var FPS = 1000 / (time - lastTime);
        lastTime = time;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, C_W, C_H);
        render();
        update();
        ctx.fillStyle = "white";
        ctx.font = "12px serif";
        ctx.fillText("FPS:" + FPS, 0, C_H);
    }

    main(0);
})();