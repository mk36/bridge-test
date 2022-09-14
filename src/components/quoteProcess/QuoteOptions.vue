<style lang="scss">

</style>

<template>
  <section>
    <section class="flex flex-wrap justify-center quote-item">
      <section class="px-2 py-4 w-80 sm:basis-1/2  md:basis-1/3"
               v-for="(option, index) in quoteOptions" :key=index
               @click="chooseOption(option)">
        <div class="cost-btn flex justify-around items-center cursor-pointer"
             :class="{'selected': isSelected(option)}">
          <i class="fa-regular fa-circle-check text-3xl"></i>
          <h2 class="text-base">{{$filters.capitalizeFirstLetter(option.name)}}</h2>

          <section class="text-center">
            <p class="uppercase text-primaryLight text-xs">Estimate</p>
            <p class="text-accent text-xs quote-item__base">{{$filters.currency(option.base)}}</p>
          </section>
        </div>
      </section>
    </section>

    <section class="flex items-center m-2">
      <div class="md:basis-1/3"></div>
      <section class="cost-btn non-hover flex justify-between items-center px-4 w-80 sm:basis-1/2 md:basis-1/3">
        <p class="uppercase text-base text-accent font-bold flex">Total</p>
        <p class="text-primary text-lg font-bold">{{$filters.currency(total)}}</p>
      </section>

      <section class="md:basis-1/3 flex justify-center">
        <button @click="nextStage()" class="rounded-3xl bg-primary text-secondary px-2 py-1 flex items-center">Continue
          <i class="fa-sharp fa-solid fa-circle-play text-2xl ml-3"></i>
        </button>
      </section>

    </section>

  </section>
</template>

<script>
import { useToast } from "vue-toastification";
import quoteService from '@/services/quoteService';
import { mapState } from 'vuex';

// Get toast interface
const toast = useToast();

export default {
  name: 'QuoteOptions',
  props: [''],
  components: {},
  computed: {
    ...mapState({
      selectedOptions: state => state.quote.selectedQuoteOptions,
    })
  },
  data() {
    return {
      total: 0,
      quoteOptions: null,
    };
  },
  mounted() {
    this.getQuoteOptions();
  },
  methods: {
    getQuoteOptions() {
      this.quoteOptions = quoteService.getQuoteOptions();
    },
    chooseOption(option) {
      let index = this.selectedOptions.findIndex(item => item.name === option.name);
      let newOptions = [...this.selectedOptions];

      // if option exists, remove it, else select it
      if (index === -1) {
        newOptions.push(option);
      } else {
        newOptions.splice(index, 1)
      }

      this.$store.commit('quote/SET_SELECTED_QUOTE_OPTIONS', newOptions); // update the store

      this.updateTotal(); // update the total from selected options
    },
    updateTotal() {
      let total = 0;
      this.selectedOptions.forEach(item => total += item.base);
      this.total = total;
    },
    isSelected(option) {
      return this.selectedOptions.find(item => item.name === option.name);
    },
    nextStage() {
      if (this.selectedOptions.length > 0) {
        this.$emit('next-stage', true);
      } else {
        toast.error('Please select at least one option to continue');
      }
    }
  },
};
</script>
