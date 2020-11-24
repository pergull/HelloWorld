module HelloWorld {

    export class HelloWorld {

        displayHelloWorld = new DisplayHelloWorld();

        constructor() {
        }

        run() {
            this.displayHelloWorld.display();
        }
    }
}