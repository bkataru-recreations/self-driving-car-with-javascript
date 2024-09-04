class Controls {
    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    }

    #handleKeyEvent(event, pressdown) {
        switch (event.key) {
            case "ArrowLeft":
                this.left = pressdown;
                break;
            case "ArrowRight":
                this.right = pressdown;
                break;
            case "ArrowUp":
                this.forward = pressdown;
                break;
            case "ArrowDown":
                this.reverse = pressdown;
                break;
        }
    }

    #addKeyboardListeners() {
        // currying
        document.onkeydown = (event) => this.#handleKeyEvent(event, true);
        document.onkeyup = (event) => this.#handleKeyEvent(event, false);
    }

}