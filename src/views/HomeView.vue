<style lang="scss">
.quote-stage {
  &:not(.active) {
    display: none;
  }
}
</style>

<template>
  <section class="pt-20">
    <h1 class="animate__animated animate__fadeIn text-primary uppercase font-bold text-center text-2xl mb-8">Calculating your total costs</h1>

    <section>
      <quote-options @next-stage="setStage(2)" class="quote-stage animate__animated animate__fadeIn" :class="{'active' : stage === 1}"></quote-options>
      <question-section class="quote-stage animate__animated animate__fadeIn" :class="{'active' : stage === 2}"></question-section>
    </section>
  </section>
</template>

<script>
import QuoteOptions from '@/components/quoteProcess/QuoteOptions';
import QuestionSection from '@/components/quoteProcess/questionSection/QuestionSection';

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
    },
  },
};
</script>
