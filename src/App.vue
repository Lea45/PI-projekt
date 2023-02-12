<template>
  <nav class="navbar">
    <div class="logo">
      <p class="logo-ttx"> PALMERO </p>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">POČETNA</router-link></li>
      <li><router-link to="/about">O NAMA</router-link></li>
      <li><router-link to="/pricelist">CJENIK</router-link></li>
      <li><router-link to="/gallery">GALERIJA</router-link></li>
      <li><router-link to="/events">DOGAĐAJI</router-link></li>
      <li v-if="!isUserLoggedIn"><router-link to="/login">PRIJAVA</router-link></li>
      <li v-if="isUserLoggedIn">
      <button class="logout" @click="logout">ODJAVA</button>  
      </li>
    </ul>
    
        <ul v-if="navOpen">
          <li @click="toggleNav"><router-link to="/">POČETNA</router-link></li>
          <li @click="toggleNav"><router-link to="/abput">O NAMA</router-link></li>
          <li @click="toggleNav"><router-link to="/pricelist">CJENIK</router-link></li>
          <li @click="toggleNav"><router-link to="/gallery">GALERIJA</router-link></li>
          <li @click="toggleNav"><router-link to="/events">DOGAĐAJI</router-link></li>
          <li v-if="!isUserLoggedIn" @click="toggleNav"><router-link to="/login">PRIJAVA</router-link></li>
          <li v-if="isUserLoggedIn">
            <button class="logout" @click="logout">ODJAVA</button>  
          </li>
        </ul>
  </nav>
  <router-view/>
</template>

<style>
.logo-ttx {
  font-size: 80px;
  font-family: cursive;
  font-weight: bolder;
  color: rgb(227, 203, 171);
  padding-left: 220px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: white;
}

.navbar ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

.logout {
  font-family: 'Open Sans', sans-serif;
  background-color: green;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: bolder;
  padding-left: 20px;
  padding-right: 20px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 30px;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links a {
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
  color: #000000;
}

.social-media a {
  padding-right: 20px;
  
  color: #000000;
  font-size: 30px;
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  nav ul {
    flex-direction: column;
    position: absolute;
    top: 45px;
    left:50%;
    width: 25%;
    
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transform: translateX(50%);
    transition: all 0.3s ease-in-out;
  }

  nav ul a {
    text-decoration: none;
    color:#000000;
    font-weight: bold;
    
  }
}
</style>

<script>
import firebase from '@/firebase';
export default {
  data() {
    return {
      isUserLoggedIn: false,
      navOpen: false
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    },
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  }
};
</script>