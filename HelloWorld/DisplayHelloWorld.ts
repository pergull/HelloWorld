export class DisplayHelloWorld {

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
        ctx.fillText("Hello World", 20, 20);
    }
}
