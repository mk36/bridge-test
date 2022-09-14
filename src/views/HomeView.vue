<style lang="scss">

</style>

<template>
  <section class="pt-20">
    <h1 class="text-primary uppercase font-bold text-center text-2xl mb-8">Calculating your total costs</h1>

    <section>
      <quote-options @next-stage="setStage(2)" v-if="stage === 1"></quote-options>
      <question-section v-if="stage === 2"></question-section>
    </section>
  </section>
</template>

<script>
import QuoteOptions from '@/components/quoteProcess/QuoteOptions';
import QuestionSection from '@/components/quoteProcess/QuestionSection';

export default {
  name: 'HomeView',
  props: [''],
  components: {
    QuoteOptions,
    QuestionSection,
  },
  data() {
    return {
      stage: 1,
    };
  },
  mounted() {

  },
  methods: {
    setStage(number) {
      this.stage = number;
    }
  },
};
</script>
