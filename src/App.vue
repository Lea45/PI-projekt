<template>

<div id="app">
  <div class="title"> CAFFE BAR PALMERO
    <span class="title-text"> Venoseva 46a, Rakitovica </span>
  </div>
<!---------------------------------------------- NAVBAR LINKS ------------------------------------------------->
  <header class="menu">
    
  <ul class="a-menu">
    <li class="appmenu"><a href="/">Početna</a></li>
    <li class="appmenu"><a href="/about">O nama</a></li>
    <li class="appmenu"><a href="/pricelist">Cjenik</a></li>
    <li class="appmenu"><a href="/gallery">Galerija</a></li>
    <li class="appmenu"><a href="/events">Događaji</a></li>
    <li class="appmenu"><a href="/login">Prijava</a></li>
  </ul>
  </header>
   

<!---------------------------------------------- NAVBAR SEARCH -------------------------------------------
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    ------>


    <div id="content-wrap">
      <router-view />
    </div>

</div>
</template>

<style>
/* ------------------------------- TITLE ----------------------------------- */
.title {
  margin: auto;
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 50px;
  font-weight: bolder;
  font-family: 'Ink';
  color: red;
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



/* ------------------------------- MENU ----------------------------------- */
.menu {
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Ink';
	background-color: white;
  height: fit-content;
}

.a-menu {
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
}

.a-menu .appmenu {
	list-style: none;
}

.a-menu .appmenu a {
	text-decoration: none;
	color: black;
	font-size: 30px;
  font-weight: bolder;
	display: block;
	padding: 10px 15px;
	position: relative;
}

.a-menu .appmenu a:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 2px;
	background-color: #3d3d3d;
	transform: scaleX(0);
	transition: all 0.5s;
	transform-origin: left
}

.a-menu .appmenu a:hover:before, .a-menu .appmenu a:hover:after {
 	transform: scaleX(1);
 }

.a-menu .appmenu a:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 2px;
	background-color: #3d3d3d;
	transform: scaleX(0);
	transition: all 0.5s;
	transform-origin: right
}

</style>
