<template>

<div id="app">
  <div class="title"> CAFFE BAR PALMERO
    <span class="title-text"> Venoseva 46a, Rakitovica </span>
  </div>
<!---------------------------------------------- NAVBAR LINKS ------------------------------------------------->
    <nav class="navbar navbar-light bg-light justify-content-between">
      <router-link to="/">Početna</router-link> |
      <router-link to="/about">O nama</router-link> |
      <router-link to="/pricelist">Cjenik</router-link> |
      <router-link to="/gallery">Galerija</router-link> |
      <router-link to="">Događaji</router-link> |
      <router-link to="/login">Prijava</router-link> 

<!---------------------------------------------- NAVBAR SEARCH ------------------------------------------------->
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>


    <div id="content-wrap">
      <router-view />
    </div>

</div>
</template>

<style>
.title {
  margin: auto;
  width: 25%;
  text-align: center;
  padding: 10px;
  font-size: 35px;
  font-weight: bolder;
  font-family: 'Times New Roman', Times, serif;
}

.title .title-text {
  visibility: hidden;
  background-color: black;
  color: white;
  border-radius: 7px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
}

.title:hover .title-text {
  visibility: visible;
  padding: 20px;
  font-weight: bolder;
  font-size: 20px;
}

</style>