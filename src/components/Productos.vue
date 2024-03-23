<template>
    <section class="caja">
        
        <article class="cont">
            
            <div class="img">
            </div> 
            <div  class="inf" style="border: 2px solid red">
                <label>Producto</label><br>
                <label>Precio</label><br>
                <a href=""><button class="btn">Comprar</button></a>
                <a href=""><img src="../assets/cart.png"alt=""></a>
                <a href=""><img src="../assets/favorite.png"alt=""></a>
            </div>     
        </article>
        <article class="cont">
            <div class="img">
            </div> 
            <div  class="inf">
                <label>Producto</label><br>
                <label>Precio</label><br>
                <a href=""><button class="btn">Comprar</button></a>
                <a href=""><img src="../assets/cart.png"alt=""></a>
                <a href=""><img src="../assets/favorite.png"alt=""></a>
            </div>     
        </article>
        <article class="cont">
            <div class="img">
            </div> 
            <div  class="inf">
                <label>Producto</label><br>
                <label>Precio</label><br>
                <a href=""><button class="btn">Comprar</button></a>
                <a href=""><img src="../assets/cart.png"alt=""></a>
                <a href=""><img src="../assets/favorite.png"alt=""></a>
            </div>     
        </article>
        <article class="cont">
            <div class="img">
            </div> 
            <div  class="inf">
                <label>Producto</label><br>
                <label>Precio</label><br>
                <a href=""><button class="btn">Comprar</button></a>
                <a href=""><img src="../assets/cart.png"alt=""></a>
                <a href=""><img src="../assets/favorite.png"alt=""></a>
            </div>     
        </article>
        <article class="cont">
            <div class="img">
            </div> 
            <div  class="inf">
                <label>Producto</label><br>
                <label>Precio</label><br>
                <a href=""><button class="btn">Comprar</button></a>
                <a href=""><img src="../assets/cart.png"alt=""></a>
                <a href=""><img src="../assets/favorite.png"alt=""></a>
                
            </div>     
        </article>
        <article class="cont">
            <div class="img">
            </div> 
            <div  class="inf">
                <label>Producto</label><br>
                <label>Precio</label><br>
                <a href=""><button class="btn">Comprar</button></a>
                <a href=""><img src="../assets/cart.png"alt=""></a>
                <a href=""><img src="../assets/favorite.png"alt=""></a>
            </div>     
        </article>
        <article class="cont">
            <div class="img">
            </div> 
            <div  class="inf">
                <label>Producto</label><br>
                <label>Precio</label><br>
                <a href=""><button class="btn">Comprar</button></a>
                <a href=""><img src="../assets/cart.png"alt=""></a>
                <a href=""><img src="../assets/favorite.png"alt=""></a>
            </div>     
        </article>
        <article class="cont">
            <div class="img">
            </div> 
            <div  class="inf">
                <label>Producto</label><br>
                <label>Precio</label><br>
                <a href=""><button class="btn">Comprar</button></a>
                <a href=""><img src="../assets/cart.png"alt=""></a>
                <a href=""><img src="../assets/favorite.png"alt=""></a>
            </div>     
        </article>
  </section>    
</template>
<script>
    let Productos = [
        {Producto: 'Producto 1', Precio: 44},
        {Producto: 'Producto 2', Precio: 44},
        {Producto: 'Producto 3', Precio: 44},
        {Producto: 'Producto 4', Precio: 44},
        {Producto: 'Producto 5', Precio: 44},
        {Producto: 'Producto 6', Precio: 44},
        {Producto: 'Producto 7', Precio: 44},
        {Producto: 'Producto 8', Precio: 44},
        {Producto: 'Producto 9', Precio: 44},
        {Producto: 'Producto 10', Precio: 44},
    ];
    
    function llenar(){
        document.write("<section class='caja'>");
        document.write("<article class='cont'>");
        document.write("<div class='img'>");
        document.write("</div> ");
        document.write("<div  class='inf'>");
        document.write("<label>Producto</label><br>");
        document.write("<label>Precio</label><br>");
        document.write("<a href=''><button class='btn'>Comprar</button></a>");
        document.write("<a href=''><img src='../assets/img/cart.png'alt=''></a>");
        document.write("<a href=''><img src='../assets/img/favorite.png'alt=''></a>");
        document.write("</div>");
        document.write("</article>");
        document.write("</section>");
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .caja{
        width: 100%;
        height: auto;
        padding:2%;
        display: block;
        float: left;
    }
    .cont{
        background-color: white;
        margin: 2.5%;
        width: 20%;
        height: 26rem;
        border: 6px solid black;
        float: left;
    }
    .img{
        width: 70%;
        border: 4px solid black;
        margin-top: 6%;
        margin-left: 14%;
        height: 70%;
    }
    .inf{
        margin-top: 4%;
        width: 90%;

    }
    .btn{
        margin-left: 2%;
        width: 60%;
        padding: 1%;
        margin-top: 4%;
        border-radius: 10px;
        float: left;
    }
    .inf label{
        margin-left: 6%;
    }
    .inf img{
        margin-left: 1%;
        width:  18%;
    }
    
</style>
