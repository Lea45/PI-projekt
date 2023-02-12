<template>
<!------------------------------ TITLE ----------------------------------------->
  <div>
    <img class="imgtitle" src="images/title/prijava.png" alt="Image Description">
  </div>

<!------------------------------ NOTE ----------------------------------------->
  <div class="important-note">
    <p class="note-text">{{ note }}</p>
  </div>

 <!------------------------------ FORM -----------------------------------------> 
  <div class="login">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Lozinka:</label>
        <input type="password" v-model="password" required/>
      </div>
      <button type="button" @click="handleLogin">Prijavi se</button>
    </form>
  </div>
</template>

<style>
/* title */
.imgtitle {
  display: block;
  margin: auto;
  margin-bottom: 30px;
  padding: 30px;
  background-color: #333333;
  border-radius: 15px;
  height: 150px;
}

/* note */
.important-note {
  background-color: #ffeaa7;
  border: 1px solid #fdcb6e;
  border-radius: 10px;
  padding: 20px;
}

.note-text {
  font-weight: bolder;
  font-size: 25px;
  text-align: center;
}

/* form */
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  padding-top: 60px;
  padding-bottom: 80px;
  margin: 40px auto;
  margin-bottom: 4.3%;
  margin-top: 4.3%;
}

.title {
  margin-bottom: 45px;
  margin-top: 30px;
  font-size: 40px;
  font-weight: bolder;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

label {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
}

input {
  padding: 15px;
  font-size: 20px;
  border-radius: 15px;
  border: 1px solid #682727;
}

button[type="button"] {
  background-color: rgb(100, 139, 41);
  color: white;
  padding: 20px 40px;
  font-size: 20px;
  font-weight: bolder;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  margin-left: 18%;
}

button[type="button"]:hover {
  background-color: green;
}

@media (max-width: 600px) {
  .login {
    max-width: 90%;
    padding: 30px;
  }
  .title {
    font-size: 26px;
  }
  label {
    font-size: 16px;
  }
  input {
    font-size: 14px;
  }
  button[type="button"] {
    font-size: 18px;
    padding: 10px 15px;
  }
}
</style>

<script>
import firebase from '@/firebase';
import 'firebase/auth'

export default {
  name: "Login",
  data() {
    return {
      note: "Ova prijava služi isključivo za potrebe vlasnika objekta. Ako nisi vlasnik, molimo NE pokušavati prijavljivati se! ",
      email: "",
      password: "",    
    };
  },
  methods: {
    async handleLogin() {
      let that=this;
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log("Uspješna prijava :)",response);
        window.alert("Uspješna prijava :)");
        that.$router.replace({ name: 'home'});
      } catch (error) {
        console.error("ERROR", error)
        alert("Unijeli ste pogrešnu E-mail adresu ili lozinku, molimo pokušajte ponovno!");
      }
    }
  }
};
</script>
