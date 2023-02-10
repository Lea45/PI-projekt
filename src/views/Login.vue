<template>
  <div class="login-form" :class="{ 'show-form': showForm }">
    <h2>Login Form</h2>
    <form>
      <label>Username</label>
      <input type="text" placeholder="Enter username">
      <label>Password</label>
      <input type="password" placeholder="Enter password">
      <button type="submit">Login</button>
      <p class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<style>
.login-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, opacity 0.3s;
}

.show-form {
  transform: translate(-50%, -50%) scale(1.1);
  opacity: 1;
  visibility: visible;
}

.login-form h2 {
  margin-top: 0;
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  margin-bottom: 10px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 20px;
  font-size: 16px;
}

.login-form button {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #4CAF50;
 
  font-size: 16px;
  cursor: pointer;
}

</style>





