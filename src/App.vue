<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">Caffe bar Palmero</router-link>  
        <span></span>
        <span></span>
        <span></span>
    </div>
    
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Početna</router-link>
        <router-link to="/about" class="navbar-item">O nama</router-link>
        <router-link to="/pricelist" class="navbar-item">Cjenik</router-link>
        <router-link to="/gallery" class="navbar-item">Galerija</router-link>
        <router-link to="/login" class="navbar-item">Prijava</router-link>
      </div>
    
  </nav>
      <div id="content-wrap">
      <router-view />
    </div>

</template>



<style>
.navbar { /* cijeli navbar */
  background-color: white;
  padding: 20px;
}

.navbar-brand .navbar-item { /* navbar text - caffe bar palmero */
  font-weight: bold;
  font-size: 50px;
  color: black;
}


.navbar-end .navbar-item { /* navbar text - pocetna, o nama, cjenik, galerija, prijava*/
  padding: 20px;
  color: black;
  font-size: 30px;
  font-weight: bolder;
}

@media screen and (max-width: 1023px) { /* sužavanje stranice */ 
  .navbar-end {
    background-color: white;
    padding: 30px;
  }
}
</style>



