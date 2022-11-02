<template>

<!------------------------------ ANIMATED MUG ----------------------------------------->
  <div class="main">
    <div class="cup">
      <div class="smoke-holder">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>

      <div class="coffee"></div>
    </div>

    <div class="saucer"></div>
  </div>


<!------------------------------ WORKING TIME ----------------------------------------->
<div class="wt">
  <section id="working-time" class="working-time">
        <div class="container">
            <div class="row">

                <div class="col-md-12 text-center heading">
                    <h2 class="wow fadeInUp animated">RADNO VRIJEME</h2>
                </div>
            </div>

            <div class="row">

              <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                <div class="time-panel">
                  <h3>PONEDJELJAK</h3>
                  <ul class="list-unstyled mb-0">
                    <li>07:00h</li>
                    <li>-</li>
                    <li>23:00h</li>
                  </ul>
                </div>
              </div>

              <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                <div class="time-panel">
                  <h3>UTORAK</h3>
                  <ul class="list-unstyled mb-0">
                    <li>07:00h</li>
                    <li>-</li>
                    <li>23:00h</li>
                  </ul>
                </div>
              </div>

              <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                <div class="time-panel">
                  <h3>SRIJEDA</h3>
                  <ul class="list-unstyled mb-0">
                    <li>07:00h</li>
                    <li>-</li>
                    <li>23:00h</li>
                  </ul>
                </div>
              </div>

              <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                <div class="time-panel">
                  <h3>ČETVRTAK</h3>
                  <ul class="list-unstyled mb-0">
                    <li>07:00h</li>
                    <li>-</li>
                    <li>23:00h</li>
                  </ul>
                </div>
              </div>

              <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                <div class="time-panel">
                  <h3>PETAK</h3>
                  <ul class="list-unstyled mb-0">
                    <li>07:00h</li>
                    <li>-</li>
                    <li>23:00h</li>
                  </ul>
                </div>
              </div>

              <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                <div class="time-panel">
                  <h3>SUBOTA</h3>
                  <ul class="list-unstyled mb-0">
                    <li>07:00h</li>
                    <li>-</li>
                    <li>23:00h</li>
                  </ul>
                </div>
              </div>

              <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                <div class="time-panel">
                  <h3>NEDJELJA</h3>
                  <ul class="list-unstyled mb-0">
                    <li>07:00h</li>
                    <li>-</li>
                    <li>23:00h</li>
                  </ul>
                </div>
              </div>

            </div>
        </div>
  </section>
</div>



</template>



<style scoped>



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
  padding: 80px 0 0;
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


/*--------------------------------- WORKING TIME  ---------------------------------- */
.time-panel {
  -webkit-transition: all 0.35s;
  -moz-transition: all 0.35s;
  -ms-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
  position: relative;
  padding: 26px 0;
  border:  solid black;
}
.time-panel:hover {
  -webkit-transform: translateY(-4px);
  -moz-transform: translateY(-4px);
  -ms-transform: translateY(-4px);
  -o-transform: translateY(-4px);
  transform: translateY(-4px);
}
.time-panel h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 35px;
  color: black;
  text-transform: capitalize;
}
.time-panel ul li {
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: black;
}

.heading {
    margin-bottom: 50px;
}

.working-time {
    text-align: center;
    padding: 70px 0;
    position: relative;
    min-height: 100vh;
     width: 1000px;
     flex-wrap: wrap;
  justify-content: flex-start;
}
.working-time::before {
    content: "";
    background: #00000094;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.working-time h2, .working-time p{
    color: #fff;
}

</style>