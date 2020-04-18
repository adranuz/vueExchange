new Vue({
  el: '#app',
  data () {
    return {
      title: 'Bitcoin',
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
    }
  } 
  
})