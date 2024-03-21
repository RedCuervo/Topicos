<script setup>
import myHeader from './components/myHeader.vue'
import myFooter from './components/myFooter.vue'
import Productos from './components/Productos.vue'

</script>

<template>

  <div id="hola2">
    <header>
      <myHeader />
    </header>
  </div>

  <div id="hola3">
    <main>
      <Productos />
    </main>
  </div>

  <div id="hola4 ">
    <router-view></router-view>
  </div>

  <div id="hola">
    <footer>
      <myFooter />
    </footer>
  </div>

</template>

<style scoped>
#hola {}

#hola3 {
  margin-bottom: 10%;
 
  
}

#hola2 {}

#hola4{
  
}

</style>
