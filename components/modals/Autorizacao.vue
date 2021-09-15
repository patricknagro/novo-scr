<template>
  <div class="h-100">
    <v-overlay :value="isLoading" opacity="0" color="white">
      <v-progress-circular color="primary darken-1" indeterminate size="120" />
    </v-overlay>
    <div v-if="!isLoading" class="d-flex flex-column justify-space-between h-100">
      <div>
        <h1 class="line-height pb-2">
          Autorização de <br />
          consulta ao SCR
        </h1>
        <p class="body-3 pb-4">Para análise de crédito na:</p>
        <p class="fs-4 font-weight-bold">Empresa</p>
        <p class="fs-4 uppercase">{{ companyName }}</p>
        <p class="fs-4 font-weight-bold">CNPJ</p>
        <p class="fs-4 pb-4">{{ maskCpfCnpj(clientTaxId) }}</p>
        <p class="fs-4 font-weight-bold">Cliente</p>
        <p class="fs-4 uppercase">{{ clientName }}</p>
        <p class="fs-4 font-weight-bold">CPF</p>
        <p class="fs-4 pb-4">{{ maskCpfCnpj(taxId) }}</p>
        <p class="fs-4 text-justify mb-2">{{ term }}</p>
      </div>
      <div>
        <v-btn
          color="primary"
          block
          class="text-capitalize font-weight-bold"
          x-large
          @click="CHANGE_COMPONENT('Importante')"
          >Autorizar</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import { maskCpfCnpj } from '@/mixins/utils';

export default {
  computed: {
    ...mapState('client', [
      'companyName',
      'taxId',
      'clientName',
      'clientTaxId',
      'term',
      'alreadySigned',
    ]),
    ...mapState('modal', ['isLoading']),
  },
  created() {
    this.GET_DATA(this.$route.params.id);
  },
  methods: {
    ...mapMutations('modal', ['CHANGE_COMPONENT']),
    ...mapActions('client', ['GET_DATA']),
    maskCpfCnpj,
  },
};
</script>
