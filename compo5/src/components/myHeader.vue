<template>
  <header>
    <button class="menu" @click="toggleMenu">
      <img src="../assets/menu.png" alt="">
    </button>
    <nav class="opciones" v-if="showMenu">
      <ul>
        <button class="menu" @click="toggleMenu">
          <img src="../assets/menu.png" alt="">
        </button>
        <h3>Categorias</h3>
        <li><a href="#">Personajes de películas clásicas</a></li>
        <li><a href="#">Superhéroes de Marvel</a></li>
        <li><a href="#">Personajes de Disney</a></li>
        <li><a href="#">Figuras de Star Wars</a></li>
        <li><a href="#">Personajes de Harry Potter</a></li>
        <li><a href="#">Villanos de cómics</a></li>
        <li><a href="#">Personajes de videojuegos</a></li>
        <li><a href="#">Animales fantásticos</a></li>
        <li><a href="#">Héroes de acción</a></li>
        <li><a href="#">Personajes de películas de terror</a></li>
        <li><a href="#">Figuras de anime populares</a></li>
        <li><a href="#">Personajes de series de televisión</a></li>
        <li><a href="#">Iconos de la cultura pop</a></li>
        <li><a href="#">Personajes de películas de ciencia ficción</a></li>
        <li><a href="#">Princesas de Disney</a></li>
        <li><a href="#">Personajes de la saga de El Señor de los Anillos</a></li>
        <li><a href="#">Criaturas míticas</a></li>
        <li><a href="#">Personajes de dibujos animados clásicos</a></li>
        <li><a href="#">Superhéroes de DC Comics</a></li>
        <li><a href="#">Personajes de películas de Pixar</a></li>

      </ul>
    </nav>
    <img src="../assets/WebAppLogo.png" alt="" class="logo">
    <div class="searchbar">
      <input type="text" name="" id="Search" placeholder=" Buscar...">
      <button type="submit" class="search"><img src="../assets/search.png" alt=""></button>
    </div>
    <a href="" class="like"><img src="../assets/favorite.png" alt=""></a>
    <a href="" class="cart"><img src="../assets/cart.png" alt=""></a>
    <div class="usuario">
      <a href="" class="avatar"><img src="../assets/avatar.jpg" alt=""></a>
      <a href="#/inicio" class="user">Sign In</a>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      showMenu: false,
      showMenu2: true
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      console.log("Boton presionado");
      console.log(this.showMenu);
    }
  }
}
</script>

<style scoped>
h1 {
  color: rgb(254, 255, 254);
}

header {
  top: 0;
  margin: 0;
  position: fixed;
  width: 100%;
  padding: 0 20px;
  padding-block: 1em;
  border-bottom: 2px ridge rgb(0, 136, 255);
  border-right: 2px solid rgb(0, 136, 255);
  border-left: 2px solid rgb(0, 136, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  z-index: 0;
}

.logo {
  max-width: 200px;
  margin: 0 auto;
}

.menu {
  background-color: transparent;
  border: none;
  margin-inline-start: 1em;
  border-radius: 10px;
  padding-block: 1ex;
}

.menu img {
  max-width: 30px;
  filter: invert(1);
}

.opciones{
  position: absolute;
  z-index: 100;
  left: -2px;
  top: 30px;
  width: auto;
  background-color: rgb(0, 0, 0);
  border-right: 2px groove rgb(0, 136, 255);
  border-top: 2px groove rgb(0, 136, 255);
  border-bottom: 2px groove rgb(0, 136, 255);
  max-height: 400px;  
  overflow-y: auto;
  scrollbar-width:  thin; 
  scrollbar-color:rgb(0, 136, 255) black;
}

.opciones ul, .opciones .menu{
  margin: 1rem auto;
  list-style-type: none;
}
li::before{
  content: '[^-^] ';
}
.opciones ul li a{
  padding-right: 2rem;
  color: white;
  font-size: medium;
  line-height: 1.7;
  transition: all .2s ease-in-out;
  transform: translate(0, 0) scale(1);
}


.opciones ul li a:hover,
.opciones ul li a:focus {
  transform: scale(1.05);
  outline: none;
  background-color: rgba(0, 136, 255, 0.211);
}


.logo:hover,
.menu:hover,
.search:hover {
  cursor: pointer;
  background-color: rgb(28, 30, 32);
}

.avatar:hover,
.user:hover {
  text-decoration: none;
  background-color: rgb(28, 30, 32);
}

.like {
  position: relative;
  flex-direction: row;
  justify-content: right;
  background-color: transparent;
  border: none;
}

.like img {
  max-width: 30px;
}

.cart {
  background-color: transparent;
  border: none;
}

.cart img {
  max-width: 50px;
  filter: invert();
}

.usuario {
  display: flex;
  flex-direction: column;
}

.user {
  color: white;
  margin: 0 auto;
}

.avatar {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border-top: 2px ridge rgb(0, 136, 255);
  border-left: 2px groove rgb(0, 195, 255);
  border-bottom: 2px ridge paleturquoise;
  border-right: 2px groove azure;
}

.avatar img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
}

.like,
.cart {
  margin-inline-end: 3em;
}

.searchbar {
  width: 10cm;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  flex-wrap: nowrap;
}

.search {
  background-color: transparent;
  width: auto;
  text-decoration: none;
  border: none;
}

.search img {
  max-width: 20px;
  min-width: none;
  filter: invert();
  margin: 1cqb;
}

.searchbar input[type="text"] {
  padding-left: 1em;
  border: 1px solid black;
  border-radius: 15px;
  height: 2rem;
  width: 10cm;
}
</style>
