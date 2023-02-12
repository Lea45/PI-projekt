<template>
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

-


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
          { id: 'p9', name: ' Hell', size: '0.25l', price: '1,59€' },
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
