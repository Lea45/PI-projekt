<template>
  <div>
    <h2>Price List</h2>
    <ul>
      <li v-for="(price, index) in prices" :key="index">
        {{ price.name }}: ${{ price.price }}
      </li>
    </ul>
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="newItem.name" />
    </div>
    <div>
      <label for="price">Price:</label>
      <input id="price" v-model.number="newItem.price" />
    </div>
    <div class="button-novo" v-if="isUserLoggedIn === true">
    <button class="novo" @click="addItem">Add Item</button>
    </div>
  </div>
</template>


<script>
import firebase from "@/firebase";

export default {
  name: "PriceList",
  data() {
    return {
      prices: [],
      newItem: {
        name: "Coffee",
        price: 1,
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