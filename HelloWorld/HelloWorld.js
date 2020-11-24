var HelloWorld;
(function (HelloWorld_1) {
    class HelloWorld {
        constructor() {
            this.displayHelloWorld = new HelloWorld_1.DisplayHelloWorld();
        }
        run() {
            this.displayHelloWorld.display();
        }
    }
    HelloWorld_1.HelloWorld = HelloWorld;
})(HelloWorld || (HelloWorld = {}));
