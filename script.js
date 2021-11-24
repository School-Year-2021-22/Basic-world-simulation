const app = {
  data() {
    return {
      cellAmount: 20,
      phase: 0,
      lines: [],
      cells: [],
      character: {
        x: 2,
        y: 2
      },
      enemiesAmount: 10,
      enemies: [],

    }
  },
  methods: {
    startGame() {
      this.phase++
      let i = 0 
      while (i < this.cellAmount){
        this.lines.push(i)
        this.cells.push(i)
        i++;
      }
      let j = 0 
      while (j < this.enemiesAmount){
        const enemy = {
          x: parseInt(Math.random() * this.cellAmount),
          y: parseInt(Math.random() * this.cellAmount),
        }
        j++;
        this.enemies.push(enemy)
      }
      // initialize the time
      this.interval = setInterval(this.time, 1000)
    },
    time() {
      let i = 0
      while(i < this.enemies.length){
        const r = Math.random()
        if (r > .5){
          const d = Math.random()
          if (d > .5){
            this.enemies[i].x++
          }else{
            this.enemies[i].y--
          }
        }else{
          const d = Math.random()
          if (d > .5){
            this.enemies[i].x--
          }else{
            this.enemies[i].x++
          }
        }
        i++;
      }

    }
  }
}

Vue.createApp(app).mount('.app')