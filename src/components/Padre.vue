<template>
  <div>
    <h1>Soy el elemento Padre</h1>
    <Hijo :mensajeProps="msg" @obtenerMensaje="verMensaje($event)" />
    <br />
    <p>TEXTO PASADO POR EMTI EN NUESTRO INPUT HIJO: {{ valorEmit }}</p>
  </div>
</template>

<script>
import Hijo from "@/components/Hijo.vue";
export default {
  name: "Padre",
  components: {
    Hijo,
  },

  data() {
    return {
      msg: "Soy un mensaje pasado por Props",
      valorEmit: "",
    };
  },

  methods: {
    verMensaje(eventoEmit) {
      this.valorEmit = eventoEmit;
      console.log(eventoEmit);
    },
  },
};
</script>

<style></style>
