class Olaf {
    constructor(olafPosX, olafPosY, olafImages) {
        // this.frames = []
        // console.log(olafImages)
        this.olafPosX = olafPosX
        this.olafPosY = olafPosY
        this.olafWidth = 103.42
        this.olafHeight = 215
        this.olafImages = olafImages
    }

    preload() {
    }

    draw() {
        // console.log(this.olafImages)
        image(this.olafImages[frameCount % 3], this.olafPosX, this.olafPosY, this.olafWidth, this.olafHeight)
    }
    animate() {
        if (this.olafPosX < width) {
            this.olafPosX = this.olafPosX + 1 * 18
            console.log(this.olafPosX)
        }
    }
    checkIfPressed() {
        if (mouseX > this.olafPosX &&
            mouseX < this.olafPosX + this.olafWidth &&
            mouseY > this.olafPosY &&
            mouseY < this.olafPosY + this.olafHeight) {
            console.log('whoop')

        }
    }

}