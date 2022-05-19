<template>
<div>
  <h1>{{saludo}}</h1>
  <button class="btn btn-primary mr-2" @click="saludo ='Hola Mundo'">Cambiar</button>
  <button class="btn btn-primary" @click="destruir()">Destruir</button>
</div>

</template>

<script>
// https://codingpotions.com/vue-ciclo-vida
export default {
  name:'ComponenteHome',
  data(){
    return{
      saludo :'Soy un saludo en los ciclos de vida'
    }
  },

  // INSTANCIAS DE VUE - HOOKS

/*  BEFORECREATE

    En ese punto Vue todavía no ha cargado el componente, esto quiere decir que no puedes acceder a ninguna opción, ni método ni data del componente. Este lifecycle se suele usar para hacer comprobaciones antes de entrar en las rutas, por ejemplo, puedes comprobar que el usuario esté logueado antes de entrar en una ruta para que en caso de no estarlo se redirija a la del login. 
*/
    beforeCreate(){
    console.log('beforeCreate')
  },

/*  
    CREATED 
    Uno de los que más se usan. Se ejecuta después de beforeCreated. En ese punto Vue ya ha cargado todas las opciones del componente y por tanto ya existe la sección data y los métodos.

    La única pega es que en este punto Vue todavía no ha cargado la vista, no la ha renderizado y no puedes leer o modificar nada que afecte a ls vista porque todavía no existe. No puedes acceder al DOM de ese componente.

    Este método se suele usar para realizar las llamadas API REST, por ejemplo si queremos pintar un array con información que provenga del backend lo que se suele hacer es dentro del created hacer la llamada y almacenar el valor de retorno de una de las variables del data. Como Vue es reactivo, cuando la vista esté cargada se pintará el array.
 */

    created(){
    console.log('created')
  },

/*       
      BEFOREMOUNT
      Se ejecuta antes de insertar el DOM y antes del ciclo de vida MOUNTED
*/
    beforeMount(){
    console.log('beforeMount')
  },

/* 
    MOUNTED
    A diferencia del created, en el mounted si que tenemos acceso al DOM, es decir, el computed se ejecuta exactamente cuando se termina de pintar la vista en la página web y por tanto desde aquí podemos hacer cambios en la vista.
*/

  mounted(){
    //this.saludo = 'Hola desde Mounted'
    console.log('mounted')
  },



    // Al detectar cambios
  beforeUpdate(){
      alert('beforeUpdate')
      console.log('beforeUpdate')
  },

/*  
    UPDATED

    Con este método hay que tener mucho cuidado. Se ejecuta cada vez que se produce un cambio en el componente y cambia algo de la vista.

    Se recomienda aquí no hacer muchos cambios en el data o en la vista y utilizar propiedades Computadas de Vue 
    */
    // Al realizar los cambios
  updated(){
      alert('update')
      console.log('update')
  },
  
/*  Destroyed
    El destroyed se ejecuta cuando eliminamos un componente, cuando ya no esta cargado. Esto puede pasar cuando cambias de vista o cuando o cuando se borra un componente del DOM porque ha sido ocultado con v-if.
 */
      // Antes de destruir la instancia
  beforeDestroy(){
      console.log('beforeDestroy')
  },

    // Se destruye toda la instancia
  destroyed(){
      console.log('destroyed')
  },
  
/*   En Vue 3, la fase beforeDestroy se pasa a llamar beforeUnmount, mientras que la fase destroyed pasa a llamarse unmounted. Se modifican los nombres por algo más acorde. */

  methods:{
      destruir(){
          this.$destroy()
      }
  }


}
</script>

<style>

</style>