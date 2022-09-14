<style lang="scss">

</style>

<template>
    <section class="question-area flex mt-40 max-w-3xl mx-auto flex-wrap">
      <section class="flex justify-center align-center">
        <i @click="previousQuestion()"
            :class="{'disabled': curQuestion === 1}"
            class="text-4xl text-primary fa-solid fa-circle-chevron-left cursor-pointer"></i>

        <h3 class="text-3xl text-primary text-center max-w-lg">{{questions[curQuestion -1].name}}</h3>

        <i @click="nextQuestion()"
            :class="{'disabled': curQuestion === maxQuestions}"
            class="text-4xl text-primary fa-solid fa-circle-chevron-right cursor-pointer"></i>
      </section>

      <input class="rounded-lg box-shadow-std px-4 max-h-16 w-32 ml-auto" type="number" min="0"
             v-model="questions[curQuestion -1].value"
             :placeholder="questions[curQuestion -1].placeholder"/>

      <section class="w-full text-center text-grey mt-4">
        {{curQuestion}} of {{maxQuestions}}
      </section>
    </section>
</template>

<script>
import Questions from '@/json/questions.json';

  export default {
    props: [''],
    components: {},
    data() {
      return {
        questions: Questions,
        curQuestion: 1,
        maxQuestions: 3
      };
    },
    mounted() {

    },
    methods: {
      nextQuestion() {
        if (this.curQuestion < this.maxQuestions) {
          this.curQuestion += 1;
        }
      },
      previousQuestion() {
        if(this.curQuestion > 1) {
          this.curQuestion -= 1;
        }
      },
    },
  };
</script>
