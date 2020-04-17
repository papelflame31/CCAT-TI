const app = new Vue({
    el: '#app',
    data: {
        voto: 0,
        candidatos:[
            {nombre: 'Mr. Black', cantidad: 0},
            {nombre: 'Mr. Pink', cantidad: 0},
            {nombre: 'Mr. White', cantidad: 0},
            {nombre: 'Mr. Brown', cantidad: 0},
        ],
        ganador: ''
    },
    methods:{
        calculo(){
            this.candidatos.sort(function(a, b){return b.cantidad - a.cantidad});
            this.ganador = this.candidatos[0].nombre;
        },
        reset(){
            for(x of this.candidatos){
                x.cantidad = 0;
            }
        }
    }
})