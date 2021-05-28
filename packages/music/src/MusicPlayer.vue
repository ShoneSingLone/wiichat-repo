<template>
  <h1>{{ windowInfo }}</h1>
</template>

<script>
import {defineComponent} from "vue";
import {mapGetters} from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(["windowInfo"]),
  },
});
</script>
