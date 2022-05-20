<template>
  <div>
    <!-- https://lenguajejs.com/vuejs/introduccion/que-es-vue/ -->
    <div :class="fondo">
      <h1 class="text-white pt-2">Bind page</h1>
      <p :class="['text-white', 'p-3']">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam
        provident reprehenderit nobis pariatur unde asperiores facere eum, non
        tempore, beatae similique labore ipsam quos fugit nulla nemo sapiente
        esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
        reiciendis amet saepe voluptatem explicabo temporibus hic soluta fuga
        modi quos accusamus! Atque magnam nobis unde corporis labore, quasi
        ipsum rerum.
      </p>
    </div>
    <br />
    <select
      class="custom-select container"
      id="inputGroupSelect01"
      v-model="fondo"
    >
      <option selected value="" disabled>Escoger...</option>
      <option value="">Blanco</option>
      <option value="bg-success">Verde</option>
      <option value="bg-danger">Rojo</option>
      <option value="bg-dark">Negro</option>
    </select>
    <button class="btn btn-danger" @click="enviarFondo">ENVIAR FONDO</button>
    <br><br>
    <p>
      La directiva v-bind (dos puntos) es una de las directivas más utilizadas y
      populares de Vue. Esta directiva permite enlazar (bindear) una variable de
      Vue con un atributo específico de una etiqueta HTML. De esta forma,
      podemos colocar como valor de un atributo HTML el contenido que tengamos
      almacenado en una variable de la lógica de Javascript.
    </p>
    <p>
      Esta forma de trabajar hace que todo sea mucho más dinámico, a la vez que
      sincroniza datos de Javascript con estructura y marcado de HTML, lo que
      junto al sistema de reactividad de Vue, es toda una ventaja que nos hará
      trabajar más rápido.
    </p>
    <p>
      La directiva v-bind se puede abreviar simplemente omitiendo v-bind y
      manteniendo solamente los dos puntos (:). Esta es la sintaxis más
      frecuente y la que comenzaremos a usar.
    </p>
    <hr />

    <h2>Bindeo Dinamico</h2>
    <p>
      En algunos casos que nos interesen, podríamos utilizar los corchetes para
      indicar que recoja el atributo de una variable, pudiendo hacer este
      proceso aún más dinámico:
    </p>
    <img :src="image" :[key]="text" />
    <p>
      En este caso, estamos obteniendo un atributo alt="Logo de Javascript",
      pero si cambiamos la variable key por title (por ejemplo), obtendremos el
      atributo title="Logo de Javascript".
    </p>
    <hr />

    <h2>Bindeo de Objetos</h2>
    <img v-bind="imagenes" />
    <hr />

    <h2>Bindeo de Clases</h2>
    <div :class="className"></div>
    <br /><br />
    <div :class="className2"></div>
    <br /><br />
    <div :class="className3"></div>
    <hr />

    <h2>Bindeo de Estilos</h2>
    <div :style="styles">ESTILOS 1</div>
    <div :style="styles2">ESTILOS 2</div>
    <div style="background:red; ">sdasdsad</div>
    <hr />

  </div>
</template>

<script>
export default {
  name: "BindView",
  data() {
    return {
      fondo: "",




      key: "title",
      image: "https://lenguajejs.com/javascript/logo.svg",
      text: "Logo de Javascript",

      
      imagenes: {
        src: "https://lenguajejs.com/javascript/logo.svg",
        alt: "Logo de Javascript",
      },

      className: "red",
      className2: ["red", "blue", "m-5"],
      className3: {
        blue: true,
        red: false,
        green: true,
      },

      styles: "background: red",

      styles2: {
        background: "blue",
        color: "white",
        padding: "18px",
        margin: "20px",
      },

    };
  },
    methods: {
    enviarFondo() {
      this.$emit("recibirFondo", this.fondo);
    },
  },
};
</script>

<style>
.red {
  height: 100px;
  width: 100px;
  background-color: red;
}
.blue {
  border: 2px solid blue;
}
.green {
  height: 100px;
  width: 100px;
  background-color: green;
}
</style>


