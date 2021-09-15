<template>
  <v-card
    class="px-6 py-10 overflow-hidden h-100"
    width="480"
    height="90vh"
    style="border-radius: 15px"
  >
    <component :is="component" />
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Autorizacao from './Autorizacao.vue';
import Importante from './Importante.vue';
import QUIZ from './Quiz.vue';
import CPF from './CPF.vue';
import Validacao from './Validacao.vue';

const { mapState } = createNamespacedHelpers('modal');
export default {
  components: {
    Autorizacao,
    Importante,
    QUIZ,
    CPF,
    Validacao,
  },
  computed: {
    ...mapState(['component']),
  },
};
</script>

<style></style>
