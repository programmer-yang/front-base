class Demo {
  constructor() {
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
    console.log(this.container)
    this.render()
  }
  render() {
    this.container.innerHTML = `
      <h2>Hello Webpck</h2>
      <img src="hashiqi.jpeg" />
    `
  }
}

;(function() {
  new Demo()
})()
