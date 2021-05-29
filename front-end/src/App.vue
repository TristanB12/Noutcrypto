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

html {
  scroll-behavior: smooth;
}

#app {
  overflow: hidden;
}

a {
  text-decoration: none;
  color: white;
}

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
