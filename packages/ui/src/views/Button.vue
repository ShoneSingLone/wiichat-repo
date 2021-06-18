<template></template>

<script lang="jsx">
export default {
  render(h) {
    return (
      <div class="test">
        <xBtn>ui-xBtn</xBtn>
        <div class="test">
          <xBtn>ui-xBtn</xBtn>
          <div class="test">
            <aButton>antdv</aButton>
          </div>
        </div>
      </div>
    );
  },
};
</script>

<style scoped>
.test {
  margin: 120px;
  outline: 1px solid green;
}
</style>
