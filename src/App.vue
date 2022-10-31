<template>

<!---------------------------------------------- NAVBAR LINKS ------------------------------------------------->
    <nav class="navbar navbar-light bg-light justify-content-between">
      <router-link to="/">Početna</router-link> |
      <router-link to="">O nama</router-link> |
      <router-link to="">Lokacija</router-link> |
      <router-link to="">Galerija</router-link> |
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
</template>


