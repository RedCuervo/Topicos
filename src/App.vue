<script setup>
import myHeader from './components/myHeader.vue'
import myFooter from './components/myFooter.vue'
import Productos from './components/Productos.vue'

</script>

<template>
<header>
  <myHeader />
</header>
  <main>
    <router-view/>
  </main>
<footer>
<myFooter/>
</footer>

</template>

<style scoped>


main{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

footer{
  height: auto;
  margin-top: 40px;
  position: relative;
  
}

header{
  margin-bottom: 200px;
}

</style>
