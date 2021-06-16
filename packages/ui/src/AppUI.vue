<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <div class="test">
    <xBtn>ui-xBtn</xBtn>
    <div class="test">
      <xBtn>ui-xBtn</xBtn>
      <div class="test">
        <aButton>antdv</aButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test {
  margin: 120px;
  outline: 1px solid green;
}
</style>
