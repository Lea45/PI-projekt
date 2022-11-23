<template>
    
<input class="variation" id="solid" type="radio" value="1" name="border" checked="checked"/>
<input class="variation" id="shadow" type="radio" value="2" name="border"/>

<div class="folder">
  <div class="tabs">
    <button class="tab active" onclick="openTab(event, 'tab-1')">
      <div><span>Pivo</span></div>
    </button>
    <button class="tab" onclick="openTab(event, 'tab-2')">
      <div><span>Vino</span></div>
    </button>
    <button class="tab" onclick="openTab(event, 'tab-3')">
      <div><span>Žestoka pića</span></div>
    </button>
    <button class="tab" onclick="openTab(event, 'tab-4')">
      <div><span>Topli napitci</span></div>
    </button>
        <button class="tab" onclick="openTab(event, 'tab-5')">
      <div><span>Bezalkoholna pića</span></div>
    </button>
  </div>

  <div class="content">
    <div class="content__inner" id="tab-1">
      <div class="page">
        <p class="pp"><span>Osječko, 0.5l</span><span>1,59€</span> </p>
        <p class="pp"><span>Osječko, 0.33l</span><span>1,59€</span> </p>
        <p class="pp"><span>Ožujsko, 0.5l</span><span>1,59€</span> </p>
        <p class="pp"><span>Ožujsko, 0.33l</span><span>1,59€</span> </p>
        <p class="pp"><span>Karlovačko, 0.5l</span><span>1,59€</span> </p>
        <p class="pp"><span>Karlovačko, 0.33l</span><span>1,59€</span> </p>
        <p class="pp"><span>Jelen, 0.5l</span><span>1,59€</span> </p>
        <p class="pp"><span>Jelen, 0.33l</span><span>1,59€</span> </p>
        <p class="pp"><span>Stella, 0.33l</span><span>1,99€</span> </p>
        <p class="pp"><span>Heineken, 0.25l</span><span>1,99€</span> </p>
        <p class="pp"><span>Bezalkoholni heineken, 0.33l</span><span>1,99€</span> </p>
        <p class="pp"><span>Radler - Osječko/Ožujsko/Karlovačko, 0.33l</span><span>1,59€</span> </p>
      </div>
    </div>

    <div class="content__inner" id="tab-2">
      <div class="page">
        <p class="pp"><span>Vino Graševina Kutjevo, 1l</span><span>10,62€</span> </p>
        <p class="pp"><span>Vino Belje,1l</span><span>10,62€</span> </p>
        <p class="pp"><span>Crno vino, 1l</span><span>10,62€</span> </p>
        <p class="pp"><span>Pol pol, 0.2l</span><span>1,19€</span> </p>
        <p class="pp"><span>Bijelo s kolom, 0.2l</span><span>1,46€</span> </p>
        <p class="pp"><span>Bambus, 0.2l</span><span>1,46€</span> </p>
        <p class="pp"><span>Deci vina, 0.1l</span><span>1,06€</span> </p>
        <p class="pp"><span>Somersby, 0.33l</span><span>1.99€</span> </p>
      </div>
    </div>

    <div class="content__inner" id="tab-3">
      <div class="page">
        <p class="pp"><span>Amaro, 0.05l</span><span>1,06€</span> </p>
        <p class="pp"><span>Pelin, 0.05l</span><span>1,33€</span> </p>
        <p class="pp"><span>Konjak, 0.05l</span><span>1,33€</span> </p>
        <p class="pp"><span>Stock, 0.05l</span><span>1,59€</span> </p>
        <p class="pp"><span>Gin, 0.05l</span><span>1,33€</span> </p>
        <p class="pp"><span>Vodka, 0.05l</span><span>1,33€</span> </p>
        <p class="pp"><span>Travarica, 0.05l</span><span>1,06€</span> </p>
        <p class="pp"><span>Šljivovica, 0.05l</span><span>1,33€</span> </p>
        <p class="pp"><span>Medica, 0.05l</span><span>1,33€</span> </p>
        <p class="pp"><span>Blacky, 0.05l</span><span>1,19€</span> </p>
        <p class="pp"><span>Jack Daniels, 0.05l</span><span>2,65€</span> </p>
        <p class="pp"><span>Lavov, 0.05l</span><span>1,33€</span> </p>
      </div>
    </div>

    <div class="content__inner" id="tab-4">
      <div class="page">
        <p class="pp"><span>Kava</span><span>0,93€</span> </p>
        <p class="pp"><span>Topla čokolada</span><span>1,46€</span> </p>
        <p class="pp"><span>Cappuccino</span><span>1,06€</span> </p>
        <p class="pp"><span>Čaj</span><span>0,93€</span> </p>
        <p class="pp"><span>Bijela kava</span><span>1,19€</span> </p>
        <p class="pp"><span>Kuhano vino, 0.1l</span><span>1,06€</span> </p>
        <p class="pp"><span>Ledena kava</span><span>1,33€</span> </p>
        <p class="pp"><span>3u1</span><span>1,06€</span> </p>
        <p class="pp"><span>Nesquik</span><span>1,46€</span> </p>
      </div>
    </div>

    <div class="content__inner" id="tab-5">
      <div class="page">
        <p class="pp"><span>Pepsi, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>7 up, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Inka bitter lemon, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Inka bitter water, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Studena ledeni čaj breskva, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Studena ledeni čaj brusnica, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Romerquelle limunska trava, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Romerquelle limunska trava, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Jana vitamin, 0.5l</span><span>1,99€</span> </p>
        <p class="pp"><span>Hell, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Fanta, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Coca Cola, 0.25l</span><span>1,59€</span> </p>
        <p class="pp"><span>Prirodan sok, 0.2l</span><span>1,73€</span> </p>
        <p class="pp"><span>Hidra, 0.5l</span><span>1,99€</span> </p>
        <p class="pp"><span>Juicy vita, 0.33l</span><span>1,06€</span> </p>
        <p class="pp"><span>Coca cola, 1l</span><span>3,98€</span> </p>
        <p class="pp"><span>Točena coca cola, 0.1l</span><span>0,40€</span> </p>
        <p class="pp"><span>Radenska kraljevi vrelac classic, 1l</span><span>1,33€</span> </p>
        <p class="pp"><span>Radenska kraljevi vrelac classic, 0.1l</span><span>0,13€</span> </p>
      </div>
    </div>

  </div>
</div>
</template>

<style>

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

.content {
  border-radius: 10px;
  position: relative;
  width: 100%;
}

.content #tab-1 {
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
  z-index: 5;
}

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

