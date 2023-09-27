<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';


export default {

  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppMain,
    AppHeader,
  }

}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>