<template>
    <div class="main">
  <div class="cup">
    <div class="smoke-holder">
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="coffee"></div>
  </div>
  <div class="saucer"></div>
</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i");
*, *:before, *:after {
  margin: 0;
  padding: 0;
  word-break: break-all;
  box-sizing: border-box;
}

/*----------------------------cijela šalica (pomicanje)---------------------------- */
.main {
  margin: auto;
  padding: 170px 0 0;
}

/*----------------------------glavni dio šalice---------------------------- */
.cup {
  width: 390px;
  height: 500px;
  border-radius: 50%;
  border-bottom: 7px solid black;
  margin: 0 auto -20px;
  position: relative;
}
.cup::before, .cup::after {
  content: "";
  position: absolute;
}

/*----------------------------gornji dio šalice(krug)---------------------------- */
.cup::before {
  width: 390px;
  height: 70px;
  border-right: 7px solid black;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  border-radius: 75%;
  border-left: none;
  top: 70px;
}
.cup::after {
  width: 120px;
  height: 70px;
  border-right: 10px solid black;
  border-radius: 0 80px 80px 0;
  right: -20px;
  top: 250px;
}

/*----------------------------dim---------------------------- */
.smoke-holder span {
  animation: smokie 2.2s linear infinite;
  position: absolute;
  border: 2px solid rgba(128, 128, 128, 0.6);
  width: 2px;
  height: 50px;
  top: 110px;
  left: 180px;
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
    filter: blur(4px);
    opacity: 0;
    transform: scale(6);
  }
}

/*----------------------------unutar šalice---------------------------- */
.coffee {
  position: absolute;
  width: 380px;
  height: 280px;
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
  width: 380px;
  height: 25px;
  left: 50%;
  outline: 1px solid transparent;
  transform: translate(-50%, 0) rotate(0);
  position: absolute;
}

/*----------------------------tanjurić---------------------------- */
.saucer {
  margin: auto;
  width: 600px;
  height: 70px;
  border-radius: 50%;
  border: 7px solid black;
  border-top: none;
  position: relative;
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

@keyframes shakeCoffee {
  100% {
    transform: translate(-50%, 0) rotate(2deg);
  }
}
</style>