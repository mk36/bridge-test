<style lang="scss">
.office-bg {
  background-image: url("./assets/backgrounds/office-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 100%;
    backdrop-filter: blur(9px);
  }

  .app-content {
    z-index: 2;
    max-width: 1000px;
    margin: auto;
  }
}
</style>

<template>
  <div class="office-bg min-h-[100vh] app">
    <section class="app-content relative">
      <router-view/>
    </section>
  </div>
</template>


