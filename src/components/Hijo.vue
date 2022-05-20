<template>
  <div>
    <p>Texto Personalizado - {{ mensajeProps }}</p>

    <input
      type="text"
      placeholder="Texto personalizado"
      v-model="valorMensaje"/><br />

    <p>Valor Mensaje Componente Hijo: {{ valorMensaje }}</p>

    <button class="btn btn-primary" @click="nombreFuncionEmit">Mostrar Datos en Padre</button>
  </div>
</template>

<script>
export default {
  name: "Hijo",

  props: {
    mensajeProps: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      valorMensaje:'',
    };
  },

  methods: {
    nombreFuncionEmit() {
      this.$emit("obtenerMensaje", this.valorMensaje);
    },
  },
};
</script>

<style></style>
