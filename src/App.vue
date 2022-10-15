<template>
  <div>
    <h1>App Component</h1>
    <timer-game></timer-game>
  </div>
</template>

<script>
import TimerGame from "./components/timerGame";
export default {
  name:'App',
  components: {TimerGame}
}
</script>

<style>
  h1{
    color: red;
  }
</style>
