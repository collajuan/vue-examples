<script>
export default {
  data() {
    return {
      usuario: {
        name: '',
        email: ''
      },
      nameOk: false,
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  },
  methods: {
    handleSubmit() {
      console.log('Formulario enviado:', this.usuario.name, this.usuario.email)
      if(!this.usuario.name) {
        alert('Debe completar nombre')
        this.nameOk = true
      }
      else if(!this.usuario.email) {
        alert('Debe completar email')
      } else {
        alert(`Formulario enviado: ${this.usuario.name} ${this.usuario.email} Opción: ${this.selected}`, )
        this.nameOk = false
        this.usuario.name = ''
        this.usuario.email = ''
      }
    }
  }
}
</script>

<template>
  <p>This is a sandbox, start creating your exercise!</p>
  <form @submit.prevent="handleSubmit">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" v-model="usuario.name" placeholder="ingrese nombre" :class="{ 'campo-vacio': nameOk }" />

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="usuario.email" placeholder="ingrese direccion"/>

    <div>
        <h1>Select option</h1>
        <select class="border border-black" v-model="selected">
          <option v-for="option in options" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>

    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
input {
  border: 1px solid #ccc; 
  padding: 5px;
  margin: 5px;
  display: block; 
}
.campo-vacio {
  border: 2px solid #f70505; 
}
button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>