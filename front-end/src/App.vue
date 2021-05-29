<template>
  <div id="app">
    <HeaderBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
    export default {
        components: {
            HeaderBar,
        },
    }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}

.main-btn {
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
