<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password)
        .then(() => {
          // Successful login, do something here
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 2px solid #ccc;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
