function addBall(size, color) {
    return {
        size: size,
        color: color,
        x: 50,
        y: 100,
        speedX: 50,
        speedY: 50,

        render: function () {
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
                </div>`
        },
        renderInside: function (container) {
            container.innerHTML = this.render()
        },

        move: function () {
            if (this.x + this.size >= innerWidth || this.x <= 0) {
                this.speedX *= -1 }
            this.x += this.speedX

            if (this.y + this.size >= innerHeight || this.y <= 0) {
                this.speedY *= -1 }
            this.y += this.speedY
        },

        animate: function () {
            let thisObject = this
            setInterval(function () {
                thisObject.move()
                thisObject.renderInside(container)
            }, 100)
        
        }
        }
        }


    let ball = addBall(100, "#417475")
    ball.animate()