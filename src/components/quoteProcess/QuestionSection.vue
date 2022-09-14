<style lang="scss">

</style>

<template>
    <section class="question-area flex">
      <section class="flex justify-center align-center">
        <i class="text-4xl text-primary fa-solid fa-circle-chevron-left"></i>

        <h3 class="text-3xl text-primary text-center max-w-lg">What is your approximate annual Spend on industrial items?</h3>

        <i class="text-4xl text-primary fa-solid fa-circle-chevron-right"></i>
      </section>

      <input class="rounded-lg box-shadow-std p-4 w-32 ml-auto" type="number" min="0" v-model="spend"/>
    </section>
</template>

<script>
  export default {
    props: [''],
    components: {},
    data() {
      return {
        spend: 50000,
      };
    },
    mounted() {

    },
    methods: {

    },
  };
</script>
