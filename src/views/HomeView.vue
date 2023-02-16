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
      <a href="https://www.facebook.com/profile.php?id=100087867435765" class="link" target="_blank">
        <i class="fa fa-facebook"></i>
      </a>
    </div>


<!------------------------------ WORKING TIME ----------------------------------------->
    <div class='cards'>
      <div class='card'>
        <div class='card-face'>
          <div class='card-label'>PON</div>
            <p class="hours"> 07h-23h </p>
        </div>
        </div>
        <div class='card'>
          <div class='card-face'>
            <div class='card-label'>UTO</div>
            <p class="hours"> 07h-23h </p>
          </div>
        </div>
        <div class='card'>
          <div class='card-face'>
            <div class='card-label'>SRI</div>
            <p class="hours"> 07h-23h </p>
          </div>
        </div>
        <div class='card'>
          <div class='card-face'>
            <div class='card-label'>ČET</div>
            <p class="hours"> 07h-23h </p>
          </div>
        </div>
        <div class='card'>
          <div class='card-face'>
            <div class='card-label'>PET</div>
            <p class="hours"> 07h-23h </p>
          </div>
        </div>
        <div class='card'>
          <div class='card-face'>
            <div class='card-label'>SUB</div>
            <p class="hours"> 07h-23h </p>
          </div>
        </div>
        <div class='card'>
          <div class='card-face'>
            <div class='card-label'>NED</div>
            <p class="hours"> 07h-23h </p>
          </div>
        </div>
      </div>
      <p class="wtitle"> RADNO VRIJEME </p>
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

@media screen and (max-width: 768px) {
  /* Adjust styles for smaller screens */
  #parent {
    flex-wrap: wrap;
    flex-direction: column;
  }

  #first {
    order: 2;
  }

  #second {
    order: 1;
    width: 100%;
    margin-top: 50px;
  }

  .main {
    padding: 50px 30px 0;
  }

  .cup {
    margin: 10px auto -20px;
  }
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
.cards {
  bottom: 0;
  display: flex;
  height: 150px;
  padding: 0 50px;
  margin-left: 100px;
  margin-top: 180px;
}

.card {
  height: 140px;
  margin: 0 -25px;
  position: relative;
  width: 100px;
  border: none;
  background-color: transparent;
}

.card:after {
  bottom: 0;
  content: "";
  left: -60px;
  position: absolute;
  right: -60px;
  top: 0px;
  z-index: 10;
}

.card-face {
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 2s cubic-bezier(0.19, 1, 0.22, 1) transform;
}

.card-face:after {
  content: "";
  left: 20px;
  opacity: 2;
  position: absolute;
  top: 70px;
}

.hours {
  margin-left: 20px;
  margin-top: 20px;
}

.card-label {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.025em;
  padding: 15px 0 0 15px;
}

.card:nth-child(1) .card-face {
  background: linear-gradient(-135deg, #ff9999, #da0b0b);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(255, 153, 153, 0.75);
  transform: translateY(45px) rotate(-28.125deg);
}

.card:nth-child(1) .card-face .card-label {
  color: #db0000;
  text-shadow: -0.025em 0.025em 0 #ff8080;
}

.card:nth-child(1):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255, 153, 153, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}

.card:nth-child(1):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}

.card:nth-child(1):hover:after {
  top: -175px;
}

.card:nth-child(2) .card-face {
  background: linear-gradient(-135deg, #ff99d6, #da0b87);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(255, 153, 214, 0.75);
  transform: translateY(35px) rotate(-21.875deg);
}

.card:nth-child(2) .card-face .card-label {
  color: #db0084;
  text-shadow: -0.025em 0.025em 0 #ff80cc;
}

.card:nth-child(2):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255, 153, 214, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}

.card:nth-child(2):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}

.card:nth-child(2):hover:after {
  top: -175px;
}

.card:nth-child(3) .card-face {
  background: linear-gradient(-135deg, #eb99ff, #b10bda);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(235, 153, 255, 0.75);
  transform: translateY(25px) rotate(-15.625deg);
}

.card:nth-child(3) .card-face .card-label {
  color: #af00db;
  text-shadow: -0.025em 0.025em 0 #e680ff;
}

.card:nth-child(3):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(235, 153, 255, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}

.card:nth-child(3):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}

.card:nth-child(3):hover:after {
  top: -175px;
}

.card:nth-child(4) .card-face {
  background: linear-gradient(-135deg, #ad99ff, #350bda);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(173, 153, 255, 0.75);
  transform: translateY(15px) rotate(-9.375deg);
}

.card:nth-child(4) .card-face .card-label {
  color: #2c00db;
  text-shadow: -0.025em 0.025em 0 #9980ff;
}

.card:nth-child(4):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(173, 153, 255, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}

.card:nth-child(4):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}

.card:nth-child(4):hover:after {
  top: -175px;
}

.card:nth-child(5) .card-face {
  background: linear-gradient(-135deg, #99c2ff, #0b5eda);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(153, 194, 255, 0.75);
  transform: translateY(5px) rotate(-3.125deg);
}

.card:nth-child(5) .card-face .card-label {
  color: #0058db;
  text-shadow: -0.025em 0.025em 0 #80b3ff;
}

.card:nth-child(5):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(153, 194, 255, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}

.card:nth-child(5):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}

.card:nth-child(5):hover:after {
  top: -175px;
}

.card:nth-child(6) .card-face {
  background: linear-gradient(-135deg, #99ffff, #0bdada);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(153, 255, 255, 0.75);
  transform: translateY(5px) rotate(3.125deg);
}

.card:nth-child(6) .card-face .card-label {
  color: #00dbdb;
  text-shadow: -0.025em 0.025em 0 #80ffff;
}

.card:nth-child(6):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(153, 255, 255, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}

.card:nth-child(6):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}

.card:nth-child(6):hover:after {
  top: -175px;
}

.card:nth-child(7) .card-face {
  background: linear-gradient(-135deg, #99ffc2, #0bda5e);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(153, 255, 194, 0.75);
  transform: translateY(15px) rotate(9.375deg);
}

.card:nth-child(7) .card-face .card-label {
  color: #00db58;
  text-shadow: -0.025em 0.025em 0 #80ffb3;
}

.card:nth-child(7):hover .card-face {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(153, 255, 194, 0.75);
  transform: translateY(-100px) rotate(0deg) scale(2);
  transition-duration: 0ms;
  z-index: 5;
}

.card:nth-child(7):hover .card-face:after {
  -webkit-animation: fade 250ms ease-out forwards;
          animation: fade 250ms ease-out forwards;
}

.card:nth-child(7):hover:after {
  top: -175px;
}

@-webkit-keyframes fade {
  0% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}

@keyframes fade {
  0% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}

.wtitle {
  margin-top: 50px;
  margin-left: 280px;
  font-weight: bolder;
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