<template>

<!--link za social media ikone--->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div id="parent">
<!------------------------------ ANIMATED MUG ----------------------------------------->
  <div id="first">
    <div class="main">
      <div class="cup">
        <div class="smoke-holder">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="coffee"></div>
      </div>

      <div class="saucer"></div>
    </div>


<!------------------------------ SOCIAL MEDIA ----------------------------------------->
    <div class="media">
      <a href="https://instagram.com/cb_palmero?igshid=YmMyMTA2M2Y=" class="link" target="_blank">
        <i class="fa fa-instagram instagram"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100083517216096" class="link" target="_blank">
        <i class="fa fa-facebook"></i>
      </a>
    </div>


<!------------------------------ WORKING TIME ----------------------------------------->
    <div class="wtime">
      <p class="wt">Radno vrijeme: <br> Svaki dan 07h-23h</p>
    </div>


  </div>

  <!------------------------------ IMAGES ----------------------------------------->
  <div id="second">

    <div class="container">

	    <div class="gallery">

		    <div class="gallery-item">
			    <img class="gallery-image" src="images/home/cocacola.avif">
		    </div>

		    <div class="gallery-item">
			    <img class="gallery-image" src="images/home/coffee.avif">
		    </div>

		    <div class="gallery-item">
			    <img class="gallery-image" src="images/home/heineken.avif">
		    </div>

		    <div class="gallery-item">
			    <img class="gallery-image" src="images/home/tea.avif">
		    </div>

		    <div class="gallery-item">
			    <img class="gallery-image" src="images/home/wine.avif">
		    </div>

		    <div class="gallery-item">
			    <img class="gallery-image" src="images/home/alchokol.avif">
		    </div>

	    </div>

    </div>

  </div>

</div>
</template>



<style>
#parent {
  display: flex;
}

#first {
  flex: 1;
}

#second {
  width: 1000px;
  font-size: 20px;
}

/*--------------------------------- ANIMATED MUG ---------------------------------- */
@import url("https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i");
*, *:before, *:after {
  word-break: break-all;
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i");
*, *:before, *:after {
  margin: 0;
  padding: 0;
  word-break: break-all;
  box-sizing: border-box;
}

.main {
  margin: auto;
  padding: 170px 250px 0;
  flex-wrap: wrap;
  justify-content: flex-start;
}

/* cijela šalica */
.cup {
  width: 120px;
  height: 170px;
  border-radius: 50%;
  border-bottom: 7px solid black;
  margin: 10px /* pomicanje šalice gore dolje */ 
  30px /* pomicanje šalice lijevo desno */
  -20px; /* pomicanje tanjurića gore dolje */
  position: relative; /* original position */
}
.cup::before, .cup::after {
  content: "";
  position: absolute; 
}
.cup::before {
  width: 120px;
  height: 30px;
  border-right: 7px solid black;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  border-radius: 50%;
  border-left: none;
  top: 70px;
}
.cup::after {
  width: 20px;
  height: 40px;
  border-right: 5px solid black;
  border-radius: 0 80px 80px 0;
  right: -20px;
  top: 98px;
}

/* dim - iznad šalice */
.smoke-holder span {
  animation: smokie 2.2s linear infinite;
  position: absolute;
  border: 2px solid rgba(128, 128, 128, 0.6);
  width: 2px;
  height: 10px;
  top: 110px;
  left: 60px;
  z-index: -1;
  filter: blur(2px);
}
.smoke-holder span:nth-of-type(2) {
  animation-delay: 0.3s;
}
.smoke-holder span:nth-of-type(3) {
  animation-delay: 0.6s;
}
.smoke-holder span:nth-of-type(4) {
  animation-delay: 0.9s;
}
.smoke-holder span:nth-of-type(5) {
  animation-delay: 1.2s;
}
.smoke-holder span:nth-of-type(6) {
  animation-delay: 1.5s;
}

@keyframes smokie {
  25%, 75% {
    left: 50px;
  }
  50% {
    left: 60px;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: -20px;
    left: 60px;
    filter: blur(5px);
    opacity: 0;
    transform: scale(6);
  }
}

/* kava - unutar šalice */
.coffee {
  position: absolute;
  width: 110px;
  height: 50px;
  left: 50%;
  background: rgba(111, 78, 55, 0.7);
  border-radius: 0 0 216px 216px;
  transform: translate(-50%, 0);
  bottom: 1px;
  z-index: -1;
}
.coffee::before {
  animation: shakeCoffee 1.2s alternate linear infinite;
  background: #6f4e37;
  border-radius: 50%;
  content: "";
  top: -5px;
  width: 102%;
  height: 12px;
  left: 50%;
  outline: 1px solid transparent;
  transform: translate(-50%, 0) rotate(0);
  position: absolute;
}

/* tanjurić - ispod šalice */
.saucer {
  margin: auto /* pomicanje tanjurića gore dolje */
  15px; /* pomicanje tanjurića lijevo desno */
  width: 150px;
  height: 40px;
  border-radius: 50%;
  border: 7px solid black;
  border-top: none;
  position: absolute;
  z-index: -2;
}
.saucer::before {
  content: "";
  position: absolute;
  width: 40%;
  border: 4px solid black;
  z-index: -1;
  left: 50%;
  transform: translate(-50%, -38%);
  top: 50%;
  border-radius: 50%;
  height: 42%;
}


/* shake animacija - unutar šalice*/
@keyframes shakeCoffee {
  100% {
    transform: translate(-50%, 0) rotate(2deg);
  }
}


/*--------------------------------- SOCIAL MEDIA ---------------------------------- */
.media {
  display: flex;
  padding-top: 150px;
  padding-left: 260px;
}

.link {
  text-decoration: none;
  color: #b7b7b7;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(28, 28, 28);
  border-radius: 10px;
  position: relative;
  transition: 0.4s;
}

.link:hover {
  transform: rotate(45deg);
}

.link::before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: #373737;
  border-radius: 10px;
  transition: 0.2s;
}

.link:hover::before {
  opacity: 0.4;
}

.link:nth-child(1)::before {
  background: #c32aa3;
}

.link:nth-child(2)::before {
  background: #1da1f2;
}

.link:hover::before {
  transform: translate(-4px, -4px);
  filter: blur(10px);
}

.link i {
  font-size: 1.7em;
  transition: all 0.4s;
}

/*--------------------------------- WORKING TIME ---------------------------------- */
.wtime{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
}

.wt {
  position: relative;
  padding: 10px 30px;
  margin: 45px 0;
  color: #21ebff;
  text-decoration: none;
  font-size: 40px;
  transition: 0.5s;
}

.wt::before {
  content: " ";
  position: absolute;
  top: -1px;
  left: -1px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #21ebff;
  border-left: 2px solid #21ebff;
  transition: 0.5s;
  transition-delay: 0.5s;
}

.wt::after {
  content: " ";
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #21ebff;
  border-right: 2px solid #21ebff;
  transition: 0.5s;
  transition-delay: 0.5s;
}

.wt:hover::before, 
.wt:hover::after {
  width: 100%;
  height: 100%;
  transition-delay: 0s;
}

.wt:hover {
  background: #21ebff;
  color: #000;
  box-shadow: 0 0 50px #21ebff;
  transition-delay: 0.5s;
}
/*--------------------------------- IMAGES -------------------------------------- */
.container {
	max-width: 100rem;
	margin: 30px auto;
	padding: 0 2rem 2rem;
}

.gallery {
	display: flex;
	flex-wrap: wrap;
	margin: -1rem -1rem;
}

.gallery-item {
	flex: 1 0;
	margin: 1rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
}

.gallery-image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 400ms ease-out;
}

.gallery-image:hover {
	transform: scale(1.15);
}

@supports (display: grid) {
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-gap: 2rem;
	}

	.gallery,
	.gallery-item {
		margin: 0;
	}
}

</style>