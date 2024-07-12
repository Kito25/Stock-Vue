<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      
    </header>
    <LoginComponent></LoginComponent>
  </div>
</template>

<script>
// Importa el componente LoginComponent con la capitalización correcta del nombre de archivo
import LoginComponent from './components/LoginComponent';

export default {
  name: 'App',
  components: {
    LoginComponent // Registra el componente LoginComponent
  }
};
</script>

<style>
/* Tus estilos aquí */
</style>
