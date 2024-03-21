
<template>
        <div class="Sopita">
            <h1 class="Titulo">Editar usuario</h1>
            <div class="Alin">
                <img src="https://i.pinimg.com/236x/6c/53/57/6c53573520cb36e883c00350bdb31dec.jpg" class="Img">
                <button>Subir imagen</button>
            </div>
            <div class="Datos">
                <div class="Alin">
                    <h2>Nombre</h2>
                    <input type="text">
                </div>
                <div class="Alin">
                    <h2>Edad</h2>
                    <input type="number">
                </div>
                <div class="Alin">
                    <h2>Dirección</h2>
                    <input type="text">
                </div>
                <div class="Alin">
                    <h2>Contraseña</h2>
                    <input type="password">
                </div>
            </div>
            <div class="Alin">
                <br><br>
                <button>Actualizar</button>
                <button>Cancelar</button>
                <a href="#"><button>Regresa al incio</button></a>
            </div>
        </div>
</template>

<script>
    export default{
        data(){
            return{mensaje:'Hola mundo'}
        }
    }
</script>


<style scoped>
.Sopita{
    border: 3px solid rgb(0, 136, 255);
    height: 600px;
    width: 500px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.Titulo{
    color: white;
    background-color: black;
    height: 55px;
    width: 500px;
    border: 3px solid rgb(0, 136, 255);
}
.Linea{
    height: 3px; 
    border-width: 0; 
    background-color: black;
}
.Alin{
    display: flex; 
    align-items: center; 
    justify-content: center; 
}
.Img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 20px;
}
.Datos{
    border: 3px solid black;
    width: 400px;
    height: auto;
    padding: 20px;
}
h2{
    margin-right: 10px;
}
</style>