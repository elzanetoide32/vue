const { createApp } = Vue
createApp({
    data() {
        return {
            mensaje: 'Hola Mundo con Vue!',
            curso: 'Codo a Codo',
            desarrollador: 'Evan You',
            anio: 2014,
            titulo: '<h1>Hola <span class="clase"> mundo</span></h1>',
            claseCSS: 'nuevaClase',
            url: 'https://www.google.com.ar/',
            login: true,
            frutas: ['naranja','banana','durazno'],
            frutas1: [
                {nombre:"naranja", cantidad: 10},
                {nombre:"banana", cantidad: 0},
                {nombre:"durazno", cantidad: 3},
                {nombre:"pera", cantidad: 0}
            ],
            mensaje: 'Hola Codo a Codo!',
            counter: 0,
            kilometros: 0,
            metros: 0
        }
    },
    watch: {
        kilometros(valor) {
        this.kilometros = valor
        this.metros = valor * 1000
        },
        metros(valor) {
        this.kilometros = valor / 1000
        this.metros = valor
        }
    }
}).mount('#app')