<script>
export default {
  data() {
    return {
      country: '',
      editable: false,
      texto: 'Texto a modificar'
    }
  },
  methods: {
    changeCountry(e) {
      console.log(e.target.id);    
      this.country = e.target.id
    },
    changeEditable() {
      this.editable = !this.editable
    },
    changeTexto(e) {
      this.texto = e.target.value
    }
  }
}
</script>

<template>
  <p>Seleccione país!</p>
  <button @click="changeCountry" id="uruguay">Uruguay</button>
  <button @click="changeCountry" id="españa">España</button>
  <img v-if="country==='uruguay'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png" width="200px" alt="uru">
  <img v-else-if="country==='españa'" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg" width="200px" alt="esp">
  <hr>
  <hr/>
  <br/>


  <p @click="changeEditable" v-if="!editable">{{texto}}</p>
  <input type="text" v-bind:value="texto" @focusout="changeEditable" @change="changeTexto" v-else>
</template>


<style>
input {
  border: solid black 1px;
}

button {
  background-color: #4b3b91;
  color: white;
  padding: 0.05rem 1rem;
  margin: 2px;
}
</style>