<template>
  <div class="flex vertical">
    <div className="gutter16" />
    <div>
      <xBtn :configs="{ text: 'xBtn' }" />
    </div>
    <div className="gutter16" />
    <div>
      <button type="button" className="btn btn-primary">native btn</button>
      <div className="gutter16" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
