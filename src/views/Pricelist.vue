<template>
<!------------------------------ TITLE ----------------------------------------->
  <div>
    <img class="imgtitle" src="images/title/cjenik.png" alt="Image Description">
  </div>

  <!------------------------------ CJENIK ----------------------------------------->
  <div>
    <input class="variation" id="solid" type="radio" value="1" name="border" checked="checked"/>
    <input class="variation" id="shadow" type="radio" value="2" name="border"/>
    <div class="folder">
      <div class="tabs">
        <button class="tab" :class="{ active: activeTab === 'tab-1' }" @click="activeTab = 'tab-1'">
          <div><span>Pivo</span></div>
        </button>
        <button class="tab" :class="{ active: activeTab === 'tab-2' }" @click="activeTab = 'tab-2'">
          <div><span>Vino</span></div>
        </button>
        <button class="tab" :class="{ active: activeTab === 'tab-3' }" @click="activeTab = 'tab-3'">
          <div><span>Žestoka pića</span></div>
        </button>
        <button class="tab" :class="{ active: activeTab === 'tab-4' }" @click="activeTab = 'tab-4'">
          <div><span>Topli napitci</span></div>
        </button>
        <button class="tab" :class="{ active: activeTab === 'tab-5' }" @click="activeTab = 'tab-5'">
          <div><span>Bezalkoholna pića</span></div>
        </button>
      </div>

      <div class="content">
        <div class="content__inner" :id="tab.id" v-for="tab in tabs" :key="tab.id" v-show="tab.id === activeTab">
          <div class="page">
            <p class="pp" v-for="item in tab.items" :key="item.id">
              <span>{{ item.name }}, {{ item.size }}</span>
              <span>{{ item.price }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* title */
.imgtitle {
  display: block;
  margin: auto;
  padding: 30px;
  background-color: #333333;
  border-radius: 15px;
}

/* tekst unutar okvira*/
.pp {
  margin-bottom: 1rem;
  font-family: "Patrick Hand";
  font-size: 25px;
}

.pp span:first-child{
  float: left;
  padding: 0 10px 0 0;
}

.pp span:first-child + span {
  float: right;
  padding: 0 0 0 10px;
}

.pp:after{
  content: '';
  display: block;
  overflow: hidden;
  border-bottom: 2px dotted #555; 
  height: 14px;
}


/* navbar */
.tab {
  font-family: "Patrick Hand";
  text-transform: uppercase;
  line-height: 0.9;
  display: inline-block;
  margin-left: -35px;
  border: none;
  border-radius: 6px 6px 0 0;
  position: relative;
  margin-right: 4rem;
  white-space: nowrap;
  cursor: pointer;
}

.tab:focus {
  outline: none;
}

.tab:focus span {
  border-bottom: 2px solid;
  border-radius: 0;
}

.tab:first-of-type {
  margin-left: 30px;
}

.tab div {
  background: var(--background);
  padding: 6px 0;
  position: relative;
  z-index: 10;
}

.tab span {
  display: inline-block;
  border: 2px solid transparent;
  padding: 6px 15px 6px;
  border-radius: 5px;
  z-index: 5;
  position: relative;
  font-size: 140%;
  color: #fff;
  min-width: 6rem;
}

.tab:before, .tab:after {
  content: "";
  height: 100%;
  position: absolute;
  background: var(--background);
  border-radius: 8px 8px 0 0;
  width: 30px;
  top: 0;
}

.tab:before {
  right: -16px;
  transform: skew(25deg);
  border-radius: 0 8px 0 0;
}

.tab:after {
  transform: skew(-25deg);
  left: -16px;
  border-radius: 8px 0 0 0;
}

.tab.active {
  z-index: 50;
  position: relative;
}

.tab.active span {
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: black;
}


/* okvir */
.content #tab-1 { /* ovo prikazuje unutrašnjost okvira */
  display: block;
}

.content #tab-2 {
  display: block;
}

.content #tab-3 {
  display: block;
}

.content #tab-4 {
  display: block;
}

.content #tab-5 {
  display: block;
}

.content:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  border-radius: inherit;
}

.content__inner {
  font-family: "Yomogi", sans-serif;
  display: none;
  background: var(--background);
  border-radius: inherit;
  padding: 1rem;
  filter: drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.1));
  z-index: 1;
}


/* cijelokupan blok*/
.folder {
  margin: 1rem auto;
  max-width: 70%;
  width: 100%;
  -ms-overflow-style: none;
}

.folder ::-webkit-scrollbar {
  background: transparent;
  display: none;
}

.page {
  padding: 1.5rem;
  border-radius: 2px;
  min-height: 20rem;
  line-height: 160%;
  background-color: #f9f9f9;
  background-size: 8% 8%, 2px 2px;
}

.tabs {
  padding: 2rem 0 0 0;
  width: 100%;
  margin: 0 0.5rem;
  overflow-x: auto;
  width: calc(100% - 1rem);
  white-space: nowrap;
}

@media (min-width: 50rem) {
  .tabs {
    margin: 0 2rem;
    width: calc(100% - 4rem);
  }
}

#solid:checked ~ .folder .tab:nth-of-type(1),
#solid:checked ~ .folder .content__inner:nth-of-type(1) {
  --background: #af4d98;
}

#solid:checked ~ .folder .tab:nth-of-type(2),
#solid:checked ~ .folder .content__inner:nth-of-type(2) {
  --background: #d66ba0;
}

#solid:checked ~ .folder .tab:nth-of-type(3),
#solid:checked ~ .folder .content__inner:nth-of-type(3) {
  --background: #e5a9a9;
}

#solid:checked ~ .folder .tab:nth-of-type(4),
#solid:checked ~ .folder .content__inner:nth-of-type(4) {
  --background: #6cb6bb;
}

#solid:checked ~ .folder .tab:nth-of-type(5),
#solid:checked ~ .folder .content__inner:nth-of-type(5) {
  --background: #5e6fa7;
}

#solid:checked ~ .folder .tab {
  border: 2px solid;
  border-width: 2px 0 0;
}

#solid:checked ~ .folder .tab:before, #solid:checked ~ .folder .tab:after {
  top: -2px;
  border-top: 2px solid;
}

#solid:checked ~ .folder .tab:before {
  border-right: 2px solid;
}

#solid:checked ~ .folder .tab:after {
  border-left: 2px solid;
}

#solid:checked ~ .folder .tab.active span {
  border: 2px solid;
}

#solid:checked ~ .folder .tab.active:focus span {
  outline: 1px solid rgba(255, 255, 255, 0.7);
}

#solid:checked ~ .folder .tab:not(.active) {
  border-bottom: 2px solid;
}

#solid:checked ~ .folder .tab:not(.active):before, #solid:checked ~ .folder .tab:not(.active):after {
  box-shadow: 0 1.5px 0 black;
}

#solid:checked ~ .folder .content {
  top: -2px;
  left: -2px;
}

#solid:checked ~ .folder .content__inner {
  box-shadow: 0 0 0 1.5px black;
}

#solid:checked ~ .folder .page {
  border: 2px solid;
}

#shadow:checked ~ .folder .tab {
  --background: linear-gradient(to bottom, #fee9a5, #f9d877);
}

#shadow:checked ~ .folder .tab span {
  color: black;
}

#shadow:checked ~ .folder .tab:focus span {
  border-bottom-color: black;
}

#shadow:checked ~ .folder .tab.active:focus span {
  border-color: black;
}

#shadow:checked ~ .folder .content__inner {
  --background: linear-gradient(to bottom, #f9d877, #fee9a5);
}

input.variation {
  display: none;
}

input.variation + label {
  display: flex;
  column-gap: 10px;
  align-items: center;
  cursor: pointer;
  color: white;
}

input.variation + label .circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid white;
}

input.variation:checked + label .circle {
  background: white;
  box-shadow: inset 0 0 0 3px #3c1053;
}

input.variation:nth-of-type(1) + label {
  justify-self: flex-end;
}

</style>


<script>
export default {

  data() {
 return {
    activeTab: 'tab-1',
    tabs: [
      {
        id: 'tab-1',
        name: 'Pivo',
        items: [
          { id: 'p1', name: 'Osječko', size: '0.5l', price: '1,59€' },
          { id: 'p2', name: 'Osječko', size: '0.33l', price: '1,59€' },
          { id: 'p3', name: 'Ožujsko', size: '0.5l', price: '1,59€' },
          { id: 'p4', name: 'Ožujsko', size: '0.33l', price: '1,59€' },
          { id: 'p5', name: 'Karlovačko', size: '0.5l', price: '1,59€' },
          { id: 'p6', name: 'Karlovačko', size: '0.33l', price: '1,59€' },
          { id: 'p7', name: 'Jelen', size: '0.5l', price: '1,59€' },
          { id: 'p8', name: 'Jelen', size: '0.33l', price: '1,59€' },
          { id: 'p9', name: 'Stella', size: '0.33l', price: '1,99€' },
          { id: 'p10', name: 'Heineken', size: '0.25l', price: '1,99€' },
          { id: 'p11', name: 'Bezalkoholni heineken', size: '0.33l', price: '1,99€' },
          { id: 'p12', name: 'Radler - Osječko/Ožujsko/Karlovačko', size: '0.33l', price: '1,59€' },
        ]
      },
      
      {
        id: 'tab-2',
        name: 'Vino',
        items: [
          { id: 'p1', name: 'Vino Graševina Kutjevo', size: '1l', price: '10,62€' },
          { id: 'p2', name: 'Vino Belje', size: '1l', price: '10,62€' },
          { id: 'p3', name: 'Crno vino', size: '1l', price: '10,62€' },
          { id: 'p4', name: 'Pol pol', size: '0.2l', price: '1,19€' },
          { id: 'p5', name: 'Bijelo s kolom', size: '0.2l', price: '1,46€' },
          { id: 'p6', name: 'Bambus', size: '0,2l', price: '1,46€' },
          { id: 'p7', name: 'Deci vina', size: '0.1l', price: '1,06€' },
          { id: 'p8', name: 'Somersby', size: '0.33l', price: '1,99€' },
        ]
      },

      {
       id: 'tab-3',
        name: 'Žestoka pića',
        items: [
          { id: 'p1', name: 'Amaro', size: '0.05l', price: '1,06€' },
          { id: 'p2', name: 'Pelin', size: '0.05l', price: '1,33€' },
          { id: 'p3', name: 'Konjak', size: '0.05l', price: '1,33€' },
          { id: 'p4', name: 'Stock', size: '0.05l', price: '1,59€' },
          { id: 'p5', name: 'Gin', size: '0.05l', price: '1,33€' },
          { id: 'p6', name: 'Vodka', size: '0.05l', price: '1,33€' },
          { id: 'p7', name: 'Travarica', size: '0.05l', price: '1,06€' },
          { id: 'p8', name: 'Šljivovica', size: '0.05l', price: '1,33€' },
          { id: 'p9', name: 'Medica', size: '0.05l', price: '1,33€' },
          { id: 'p10', name: 'Blacky', size: '0.05l', price: '1,19€' },
          { id: 'p11', name: 'Jack Daniels', size: '0.05l', price: '2,65€' },
          { id: 'p12', name: 'Lavov', size: '0.05l', price: '1,33€' },
        ]
      },

        {
       id: 'tab-4',
        name: 'Topli napitci',
        items: [
          { id: 'p1', name: 'Kava', price: '0,93€' },
          { id: 'p2', name: 'Topla čokolada', price: '1,46€' },
          { id: 'p3', name: 'Cappuccino', price: '1,06€' },
          { id: 'p4', name: 'Čaj', price: '0,93€' },
          { id: 'p5', name: 'Bijela kava', price: '1,19€' },
          { id: 'p6', name: 'Kuhano vino',size: '0.1l', price: '1,06€' },
          { id: 'p7', name: 'Ledena kava', price: '1,33€' },
          { id: 'p8', name: '3u1', price: '1,06€' },
          { id: 'p9', name: 'Nesquik',  price: '1,46€' },
        ]
      },

      {
       id: 'tab-5',
        name: 'Bezalkoholna pića',
        items: [
          { id: 'p1', name: 'Pepsi', size: '0.25l', price: '1,59€' },
          { id: 'p2', name: '7 up', size: '0.25l', price: '1,59€' },
          { id: 'p3', name: 'Inka bitter lemon', size: '0.25l', price: '1,59€' },
          { id: 'p4', name: 'Inka bitter water', size: '0.25l', price: '1,59€' },
          { id: 'p5', name: 'Studena ledeni čaj breskva', size: '0.25l', price: '1,59€' },
          { id: 'p6', name: 'Studena ledeni čaj brusnica', size: '0.25l', price: '1,59€' },
          { id: 'p7', name: 'Romerquelle limunska trava', size: '0.25l', price: '1,59€' },
          { id: 'p8', name: 'Jana vitamin', size: '0.5l', price: '1,99€' },
          { id: 'p9', name: 'Hell', size: '0.25l', price: '1,59€' },
          { id: 'p10', name: 'Fanta', size: '0.25l', price: '1,59€' },
          { id: 'p11', name: 'Coca Cola', size: '0.25l', price: '1,59€' },
          { id: 'p12', name: 'Prirodan sok', size: '0.2l', price: '1,73€' },
          { id: 'p13', name: 'Hidra', size: '0.5l', price: '1,99€' },
          { id: 'p14', name: 'Juicy vita', size: '0.33l', price: '1,06€' },
          { id: 'p15', name: 'Coca cola', size: '1l', price: '3,98€' },
          { id: 'p16', name: 'Točena coca cola', size: '0.1l', price: '0,40€' },
          { id: 'p17', name: 'Radenska kraljevi vrelac classic', size: '1l', price: '1,33€' },
          { id: 'p18', name: 'Radenska kraljevi vrelac classic', size: '0.1l', price: '0,13€' },
        ]
      },
    ]
      }
         
    
  },
methods: {
openTab: function(evt, tabName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("content__inner");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tab");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}
}
};

</script>
