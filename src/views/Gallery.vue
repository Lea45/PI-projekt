<template>
  <div class="rotate">
    	<div id="carousel">
			<figure><img class="image" src="images/first/1.jpeg" alt=""></figure>
			<figure><img class="image" src="images/first/2.jpeg" alt=""></figure>
			<figure><img class="image" src="images/first/3.jpeg" alt=""></figure>
			<figure><img class="image" src="images/first/4.jpeg" alt=""></figure>
			<figure><img class="image" src="images/first/5.jpeg" alt=""></figure>
			<figure><img class="image" src="images/first/6.jpeg" alt=""></figure>
			<figure><img class="image" src="images/first/7.jpeg" alt=""></figure>
			<figure><img class="image" src="images/first/8.jpeg" alt=""></figure>
			<figure><img class="image" src="images/first/9.jpeg" alt=""></figure>
		</div>
	</div>

	  <div class="rotate2">
    	<div id="carouse2">
			<figure><img class="image" src="images/second/1.jpeg" alt=""></figure>
			<figure><img class="image" src="images/second/2.jpeg" alt=""></figure>
			<figure><img class="image" src="images/second/3.jpeg" alt=""></figure>
			<figure><img class="image" src="images/second/4.jpeg" alt=""></figure>
			<figure><img class="image" src="images/second/5.jpeg" alt=""></figure>
			<figure><img class="image" src="images/second/6.jpeg" alt=""></figure>
			<figure><img class="image" src="images/second/7.jpeg" alt=""></figure>
			<figure><img class="image" src="images/second/8.jpeg" alt=""></figure>
			<figure><img class="image" src="images/second/9.jpeg" alt=""></figure>
		</div>
	</div>
</template>


<style>
@import url(https://fonts.googleapis.com/css?family=Anaheim);


.rotate {
	margin: 4% auto;
	width: 210px;
	height: 140px;
	position: relative;
	perspective: 1000px;
	padding-top: 30px;
}

.rotate2 {
	margin: 4% auto;
	width: 210px;
	height: 140px;
	position: relative;
	perspective: 1000px;
	padding-top: 80px;
}

#carousel, #carouse2  {
	width: 100%;
	height: 100%;
	position: absolute;
	transform-style: preserve-3d;
	animation: rotation 20s infinite linear;
}

#carousel:hover, #carouse2:hover {
	animation-play-state: paused;
}

#carousel figure, #carouse2 figure {
	display: block;
	position: absolute;
	width: 90%;
	height: 100%;
	left: 10px;
	top: 10px;
	background: black;
	overflow: hidden;
	border: solid 5px black;
}

#carousel figure:nth-child(1), #carouse2 figure:nth-child(1) {
	transform: rotateY(0deg) translateZ(288px);
}

#carousel figure:nth-child(2), #carouse2 figure:nth-child(2) { 
	transform: rotateY(40deg) translateZ(288px);
}

#carousel figure:nth-child(3), #carouse2 figure:nth-child(3) { 
	transform: rotateY(80deg) translateZ(288px);
}

#carousel figure:nth-child(4), #carouse2 figure:nth-child(4) { 
	transform: rotateY(120deg) translateZ(288px);
}

#carousel figure:nth-child(5), #carouse2 figure:nth-child(5) { 
	transform: rotateY(160deg) translateZ(288px);
}

#carousel figure:nth-child(6), #carouse2 figure:nth-child(6) { 
	transform: rotateY(200deg) translateZ(288px);
}

#carousel figure:nth-child(7), #carouse2 figure:nth-child(7) { 
	transform: rotateY(240deg) translateZ(288px);
}

#carousel figure:nth-child(8), #carouse2 figure:nth-child(8) { 
	transform: rotateY(280deg) translateZ(288px);
}

#carousel figure:nth-child(9), #carouse2 figure:nth-child(9) { 
	transform: rotateY(320deg) translateZ(288px);
}

.image {
	-webkit-filter: grayscale(1);
	cursor: pointer;
	transition: all .5s ease;
	width: 100%;
	height: 100%;
}

.image:hover {
	-webkit-filter: grayscale(0);
  	transform: scale(1.2,1.2);
	width: 100%;
	height: 100;
}

@keyframes rotation {
	from{
		transform: rotateY(0deg);
	}
	to{
		transform: rotateY(360deg);
	}
}
</style>