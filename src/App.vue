<template>
  <div id="app" :class="bgEmit">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/props-emit">Props Emit</router-link> |
      <router-link to="/bind">Bind</router-link>
    </nav>
    <router-view @recibirFondo="verFondo($event)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgEmit: "",
    };
  },

  methods: {
    verFondo(evento) {
      this.bgEmit = evento;
      console.log(evento);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
