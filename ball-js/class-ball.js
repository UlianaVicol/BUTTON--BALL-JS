class addBall {
	constructor(size,color) {
		this.size = size
        this.color = color;
        this.x = 50
        this.y = 100
        this.speedX = 40
        this.speedY = 40	
	}

    render() {
        return `
            <div style="
                width:${this.size}px;
                height:${this.size}px;
                border-radius: ${this.size}px;
                background-color: ${this.color};
                position: absolute;
                left: ${this.x}px;
                top: ${this.y}px;
            ">
            </div> `
    }

    renderInside(container) {
        container.innerHTML = this.render()
    }

    move() {
        if (this.x + this.size >= innerWidth || this.x <= 0) {
            this.speedX *= -1
        }
        this.x += this.speedX

        if (this.y + this.size >= innerHeight || this.y <= 0) {
            this.speedY *= -1
        }
        this.y += this.speedY
    }

    animate() {
        let thisObject = this
        setInterval(function () {
            thisObject.move()
            thisObject.renderInside(container)
        }, 100)
    }
    }

    let ball =  new addBall(90, "#417475")
    ball.animate()