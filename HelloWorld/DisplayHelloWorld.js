var HelloWorld;
(function (HelloWorld) {
    class DisplayHelloWorld {
        constructor() {
        }
        display() {
            const canvas = document.createElement("canvas");
            canvas.width = 500;
            canvas.height = 300;
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            document.body.appendChild(canvas);
            ctx.fillStyle = "#FF0000";
            ctx.fillText("Display Hello World33333333", 20, 20);
        }
    }
    HelloWorld.DisplayHelloWorld = DisplayHelloWorld;
})(HelloWorld || (HelloWorld = {}));
