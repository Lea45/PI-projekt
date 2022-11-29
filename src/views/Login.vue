<template>
    <div class="login">

            <div class="login-pic-container">
                <img src="https://res.cloudinary.com/drymsmld5/image/upload/v1590935129/Codepen/login%20form/person_srb6xd.jpg" alt="person avtar">
            </div>

            <div class="login-form">
                <div class="login-credentials">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Unesi email">
                    <label for="password">Lozinka</label>
                    <input type="password" name="password" id="password" placeholder="Unesi lozinku">
                    <button type="submit">Prijava</button>
                    <p><a href="#">Zaboravljena lozinka?</a></p>
                </div>
                <hr>
            </div>
    </div>

</template>



<style>
* {
  box-sizing: border-box;
}

:root {
  --primary-color: #808da8;
}

.login {
  background-color: var(--primary-color);
  width: 320px;
  height: 450px;
  padding: 2rem;
  margin: 4.5rem auto;
  color: #fff;
  position: relative
}

.login .login-pic-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  top: calc(-50px - 2rem);
  left: calc(50% - 50px);
}

.login .login-pic-container img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.login .login-form {
  position: relative;
  top: -60px;
}

.login-form .login-credentials label {
  display: block;
  margin: 0px auto;
  font-size: 1.2rem;
}

.login-form .login-credentials input {
  display: block;
  width: 100%;
  margin: 1.2rem auto;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 6px;
}

.login-form .login-credentials input::placeholder {
  padding: 1px;
}

.login-form .login-credentials button {
  margin: 1.8rem auto;
  outline: none;
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.login-form .login-credentials button:hover {
  background-color: rgba(255, 255, 255, 1);
  color: var(--primary-color);
}

.login-form .login-credentials p {
  text-align: center;
}

.login-form .login-credentials p a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-weight: bold;
}

.login-form hr {
  border-color: rgba(0, 0, 0, 0.2);
  margin: 0px;
}

.register-container p {
  text-align: center;
}

.register-container p a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  color: #000;
  font-weight: bold;
}

</style>