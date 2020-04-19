Vue.component('counter', {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter += 1
    }
  },
  template: `
  <div>
    <button v-on:click="increment()">Counter</button>
    <span>{{ counter }}</span>
  </div>
  `
  
})

new Vue({
  el: '#app',
  data () {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      changePercent: -1,
      pricesByDay: [
        {day: 'Monday', value: 8000},
        {day: 'Tuesday', value: 8200},
        {day: 'Wednesday', value: 8400},
        {day: 'Thursday', value: 8600},
        {day: 'Friday', value: 8800},
        {day: 'Saturday', value: 9000},
        {day: 'Sunday', value: 10000},
      ],
      showPrices: false,
      currentPrice: 8600,
      color: 'a4a4a4',
      value: 0,
      courses: [
        {
          title: 'Inglés',
          time: 22,
        },
        {
          title: 'Japones',
          time: 40,
        },
        {
          title: 'Inglés',
          time: 22,
        },        
        {
          title: 'Inglés',
          time: 22,
        },        
        {
          title: 'Inglés',
          time: 22,
        },
      ]
    }
  },
  computed: { //variables editadas, que siempre devuelven un valor
    title () {
      return `${this.name} ${this.symbol}`
    },
    convertedValue() {
      if(!this.value) {
        return 0
      } else {
        return this.value /this.currentPrice
      }
    },
    totalTime(){
      var sum = 0
      this.courses.forEach(course => {
        sum += course.time
      })
      return sum
    }
  },
  watch: { //funciones que verifican el cambio de datos
    showPrices(newVal, oldVal) { //debe tener el mismo nombre que un dato
      console.log(newVal,oldVal)
    }
  },
  methods:{ //eventos de la vista
    toggleShowPrices() {
      this.showPrices = !this.showPrices
      
      //metodo para cambiar los colores
      this.color = this.color
        .split('') //crea un array con los char del string
        .reverse() //reversa el array
        .join('') //vuelve a concatenar el string
    },
    addCourse(newCourse){
      this.courses.push(
        { 
          title: newCourse.title, 
          time: parseInt(newCourse.time)
        }
      )
      newCourse.title = ''
      newCourse.time = 0
    }
  },
})