<template>
  <div>
    <h2>Price List</h2>
    <ul>
      <li v-for="(price, index) in prices" :key="index">
        {{ price.name }}:  €{{ price.price }}
      </li>
    </ul>

    <div v-if="isUserLoggedIn === true">
      <label for="name">Name:</label>
      <input id="name" v-model="newItem.name" />
    </div>
    <div v-if="isUserLoggedIn === true">
      <label for="price">Price:</label>
      <input id="price" v-model.number="newItem.price" />
    </div>

    <div class="button-novo" v-if="isUserLoggedIn === true">
      <button class="novo" @click="addItem">Add Item</button>
    </div>
  </div>
</template>

<style>
h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
}

li {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

label {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}

.button-novo {
  text-align: center;
}

.novo {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  cursor: pointer;
}

</style>
<script>
import firebase from "@/firebase";

export default {
  name: "PriceList",
  data() {
return {
  prices: [
    /* PIVO */
    { name: "Osječko 0.5l", price: 1.90 },
    { name: "Osječko 0.33l", price: 1.60 },
    { name: "Ožujsko 0.5l", price: 1.90 },
    { name: "Ožujsko 0.33l", price: 1.60 },
    { name: "Karlovačko 0.5l", price: 1.90 },
    { name: "Karlovačko 0.33l", price: 1.90 },
    { name: "Jelen 0.5l", price: 1.90 },
    { name: "Jelen 0.33l", price: 1.60 },
    { name: "Stella 0.33l", price: 2 },
    { name: "Heiniken 0.25l", price: 2 },
    { name: "Bezalkoholni heiniken 0.33", price: 2 },
    { name: "Radler Osječko/Ožujsko/Karlovačko 0.5l", price: 1.90 },

    /* VINO */
    { name: "Vino Belje 1l", price: 10 },
    { name: "Crno vino 1l", price: 10 },
    { name: "Pol pol 0.2l", price: 1.20 },
    { name: "Bijelo s kolom 0.2l", price: 1.50 },
    { name: "Bambus 0.2l", price: 1.50 },
    { name: "Devi vina 0.1l", price: 1.20 },
    { name: "Somersby 0.33", price: 2 },
    
    /* ŽESTOKA PIĆA */
    { name: "Amaro 0.05l", price: 1.40 },
    { name: "Pelin 0.05l", price: 1.40 },
    { name: "Konjak 0.05l", price: 1.40 },
    { name: "Stock 0.05l", price: 1.60 },
    { name: "Gin 0.05l", price: 1.40 },
    { name: "Vodka 0.05l", price: 1.40 },
    { name: "Travarica 0.05l", price: 1.40 },
    { name: "Šljivovica 0.05l", price: 1.40 },
    { name: "Medica 0.05l", price: 1.40 },
    { name: "Blacky 0.05l", price: 1.40 },
    { name: "Jack Daniels 0.05l", price: 2.70 },
    { name: "Lavov 0.05l", price: 1.40 },

    /* TOPLI NAPITCI */
    { name: "Kava", price: 1 },
    { name: "Topla čokolada", price: 2 },
    { name: "Cappuccino", price: 1.50 },
    { name: "Čaj", price: 1.40 },
    { name: "Bijela kava", price: 1.50 },
    { name: "Kuhano vino 0.1l", price: 1.10 },
    { name: "Ledena kava", price: 1.70 },
    { name: "3u1", price: 1.50 },
    { name: "Nesquik", price: 1.70 },
  ],
  newItem: {
    name: "",
    price: 0,
  },
  isUserLoggedIn: false,
};
},
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
      console.log(this.isUserLoggedIn);
    });
  },
  methods: {
    addItem() {
      this.prices.push(this.newItem);
      this.newItem = { name: "", price: 0 };
    },
  },
};

</script>