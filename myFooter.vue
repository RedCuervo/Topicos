<template>
  <footer>
    <h1>SOPORTE</h1>
    <ul>
      <h2>Contactos</h2>
      <li><a href="#">Teléfono: 555-555-5555</a></li>
      <li><a href="#" target="_top">Correo</a></li>
    </ul>
    <div class="redes">
      <h2>Redes Sociales</h2>
      <a href=""><img src="C:\proyectostop\funkos\src\assets\facebook.png" alt="Facebook"></a>
      <a href=""><img src="C:\proyectostop\funkos\src\assets\twitter.png" alt="Twitter"></a>
      <a href=""><img src="C:\proyectostop\funkos\src\assets\instagram.png" alt="Instagram"></a>
    </div>
    <h5> © {{ year }} Todos los derechos reservados | Diseñado por Estudiantes del TECNM</h5>
  </footer>
</template>

<script>export default {
  computed:
  {
    year() {
      return new Date().getFullYear();
    }
  }
} 
</script>

<style scoped>
footer{
  margin: 0 auto;
  margin-top: 30px;
  bottom: 0;
  position: relative;
  width: 100%;
  padding: 0 20px;
  padding-block: 1em;
  border-top: 2px ridge rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: medium;
  background-color: white;
  color: black;
}

img{
  width: 30px;
}



.redes{
  display: flex;
  flex-wrap: wrap;
  width: 4.5cm;
 justify-content: space-between;
}

li{
  list-style: none;
}
</style>
