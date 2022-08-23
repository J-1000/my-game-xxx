class Game {
    constructor() {
        this.olaf = new Olaf(100, 100)
        this.score = 0
        this.olafs = []
        this.olafImages = []
        // for (let i = 0; i < 9; i++) {
        //     this.olafs.push(new Olaf(100 + (i * 10), 100), this.olafImages)
        // }
        // console.log(this.olafs)
    }

    preload() {
        // this.olaf.preload()
        for (let i = 1; i < 4; i++) {
            // später noch assets folder hinzufügen
            let filename = 'assets/' + 'olaf' + i + '.png';
            let frame = loadImage(filename)
            this.olafImages.push(frame)
        }
        // console.log(this.olafImages)
        // for (let i = 0; i < 9; i++) {
        //     this.olafs.push(new Olaf(100 + (i * 10), 100), this.olafImages)
        // }
        // console.log(this.olafs)
        for (let i = 0; i < 3; i++) {
            this.olafs.push(new Olaf(100 + (i * 10), 100, this.olafImages))
        }
        console.log(this.olafs)
    }

    draw() {
        clear()
        this.olafs.forEach(function (o) {
            o.draw()
            o.animate()
        })
        // this.olaf.draw()
        // this.olaf.animate()





        // for (let i = 0; i < this.olafs.length; i++) {
        //     this.olafs[i].draw()

        // }








    }


}
