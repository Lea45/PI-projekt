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

  </div>

  <!------------------------------ WORKING TIME ----------------------------------------->
  <div id="second">



</div>
</div>
</template>



<style scoped>
#parent {
  display: flex;
}

#first {
  flex: 1;
}

#second {
  width: 1000px;
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


/*--------------------------------- ANIMATED MUG ---------------------------------- */
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

/*--------------------------------- WORKING TIME  ---------------------------------- */
</style>