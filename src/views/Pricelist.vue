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





