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
        const sx = this.enemies[i].x;
        const sy = this.enemies[i].y;
        const tx = this.character.x;
        const ty = this.character.y;

        const r = Math.random()

        if ( sx < tx  && r < 0.5 ){
          this.enemies[i].x++
        }
        if (sy< ty && r > 0.5){
          this.enemies[i].y++
        }
        if (sy > ty && r > 0.5){
          this.enemies[i].y--
        }
        if (sx > tx && r < 0.5){
          this.enemies[i].x--
        }
        i++;
      }
    },
    keyEvents(e){
      console.log(e.keyCode)
      if (e.keyCode == 65){
        this.character.y++
      }
      if (e.keyCode == 83){
        this.character.x--
      }
      if (e.keyCode == 68){
        this.character.y--
      }
      if (e.keyCode == 87){
        this.character.x++
      }

    }
  },
  mounted() {
    window.onkeydown = this.keyEvents
  }
}

Vue.createApp(app).mount('.app')