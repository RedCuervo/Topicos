<template>        
    
<div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form>
      <div class="form-group">
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    <div class="register-link">
      <p>¿Nuevo usuario? <a href="#/edit">Editar</a></p>
      <p><a href="#">Regresar al inicio</a></p>
    </div>
    
  </div>

</template>

<style>

.login-container,
.register-container {
  background-color: #fff;
  padding: 6%;
  border-radius: 5%;

  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
#preview {
  display: none;
  max-width: 200px;
  margin-top: 10px;
  border-radius: 100%; /* Aquí aplicamos el redondeo de la imagen */
}

</style>