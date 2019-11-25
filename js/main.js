(function () {
    var canvas = document.createElement("canvas");
    var WEB_W = window.innerWidth, WEB_H = window.innerHeight;
    console.log("WEB_W:" + WEB_W + ",WEB_H:" + WEB_H);
    var C_W = 480, C_H = 320;
    // C_W = Math.round(C_H * WEB_W / WEB_H);
    C_H = Math.round(C_W * WEB_H / WEB_W);
    console.log("C_W:" + C_W + ",C_H:" + C_H);
    canvas.width = C_W;
    canvas.height = C_H;
    canvas.style = "width: 100%; height: 100%;";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var lastTime = 0;
    
    function checkButton(x, y, w, h, tx, ty) {
        if(tx >= x && tx <= x + w && ty >= y && ty <= y + h) {
            return true;
        }
        return false;
    }

    var button1 = {
    };
    button1.id = -1;
    var button2 = {
    };
    button2.id = -1;

    function onTouchEvent(touchEvent) {
        var event = touchEvent || window.event;
        var touches = event.changedTouches;
        for (var i = 0; i < touches.length; i ++) {
            var touche = touches[i];
            switch (event.type) {
                case "touchstart":
                    // console.log(event.type);
                    // console.log(touche);
                    console.log(event.type + " " + touche.identifier);
                    var tx = touche.clientX * C_W / WEB_W;
                    var ty = touche.clientY * C_H / WEB_H;
                    if(checkButton(80, 80, 100, 100, tx, ty)) {
                        button1.id = touche.identifier;
                    }
                    if(checkButton(80, 200, 100, 100, tx, ty)) {
                        button2.id = touche.identifier;
                    }
                    break;
                case "touchend":
                    // console.log(event.type);
                    // console.log(touches);
                    console.log(event.type + " " + touche.identifier);
                    if(touche.identifier === button1.id) {
                        button1.id = -1;
                    }
                    if(touche.identifier === button2.id) {
                        button2.id = -1;
                    }
                    break;
                case "touchmove":
                    // console.log(event.type);
                    // console.log(touches);
                    break;
            }
        }
    }

    canvas.addEventListener("touchstart", onTouchEvent);
    canvas.addEventListener("touchend", onTouchEvent);
    canvas.addEventListener("touchmove", onTouchEvent);

    function render() {
        ctx.fillStyle = "white";
        ctx.font = "48px serif";
        ctx.fillText("曹大人你好！", 0, 48);
        // console.log(button1.id);
        if(button1.id < 0) {
            ctx.fillStyle = "red";
        } else {
            ctx.fillStyle = "green";
        }
        ctx.fillRect(80, 80, 100, 100);
        console.log(button2.id);
        if(button2.id < 0) {
            ctx.fillStyle = "red";
        } else {
            ctx.fillStyle = "green";
        }
        ctx.fillRect(80, 200, 100, 100);
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