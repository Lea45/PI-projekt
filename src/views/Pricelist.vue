<template>
  <div class="cjenik">
    <div>
      <img class="imgtitle" src="images/title/cjenik.png" alt="Image Description" />
    </div>
    
<div class="bill">
	<div class="inner"> €</div>
</div>

<div class="shredder">
	<div class="bar"></div>
</div>
    <ul>
      <li v-for="(price, index) in prices" :key="index">
        {{ price.name }}:  €{{ price.price }}
      </li>
    </ul>

    <div class="labell" v-if="isUserLoggedIn === true">
      <label for="name">Naziv pića:</label>
      <input id="name" v-model="newItem.name" />
    </div>
    <div class="labell" v-if="isUserLoggedIn === true">
      <label for="price">Cijena:</label>
      <input id="price" v-model.number="newItem.price" />
    </div>

    <div class="button-novo" v-if="isUserLoggedIn === true">
      <button class="novo" @click="addItem">Add Item</button>
    </div>
  </div>
</template>

<style>

.bill .inner:before, .bill .inner:after, .bill:before, .bill:after {
  content: "";
  position: absolute;
  width: 1px;
  height: 1px;
  background: #39d57c;
  border: 0.15em solid #39d57c;
  border-radius: 100%;
}

.bill {
  animation: shred 10s infinite;
  position: absolute;
  z-index: 1;
  left: -11.5em;
  top: 50%;
  width: 5.75em;
  height: 2.5em;
  margin-top: 60px;
  background-color: #229F58;
  background-image: linear-gradient(157deg, #229F58 0%, #229F58 50%, #219b56 51%, #219b56 100%);
  box-shadow: 0.25em 0.25em 0 rgba(0, 0, 0, 0.125);
  color: #39d57c;
  font-family: "Arial Black", sans-serif;
  font-size: 3.33em;
  font-weight: bold;
  line-height: 2.25em;
  text-align: center;
}
.bill .inner, .bill:before, .bill:after {
  position: absolute;
  z-index: 1;
}
.bill:before, .bill:after {
  left: 0;
}
.bill:before {
  top: 0;
}
.bill:after {
  bottom: 0;
}
.bill .inner {
  left: 0;
  right: 0;
  top: 0;
  border: 0.1em solid #39d57c;
  bottom: 0;
}
.bill .inner:before, .bill .inner:after {
  right: -0.0875em;
}
.bill .inner:before {
  top: -0.0825em;
}
.bill .inner:after {
  bottom: -0.0825em;
}

.shredder {
  background-image: linear-gradient(#2c2c2c 50%, transparent 50%);
  background-size: 0.33em 0.33em;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  left: 50%;
  right: 0;
  top: 50%;
  height: 3.5em;
  margin-top: 50px;
  color: black;
  font-size: 3.33em;
}
.shredder .bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.33em;
  height: 3.5em;
  background: black;
}

@keyframes shred {
  0% {
    left: -5.75em;
    width: 30%;
  }
  30% {
    left: 33%;
  }
  60% {
    left: 40%;
    transform: scaleX(0.8);
    width: 30%;
  }
  100% {
    left: 57.5em;
    margin-left: 0;
    width: 200%;
  }
}
/* title */
.imgtitle {
  display: block;
  margin: auto;
  padding: 30px;
  background-color: #333333;
  border-radius: 15px;
  height: 150px;
}


ul {
  list-style-type: none;
  margin: 50px;
  margin-top: 470px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;

}

li {
  font-size: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
}

.labell {
  text-align: center;
  font-weight: bolder;
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
    price: "",
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
      this.newItem = { name: "", price: "" };
    },
  },
};

</script>