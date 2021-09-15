<template>
  <div
    class="
      d-flex
      flex-column
      justify-space-between
      animate__animated animate__slideInRight animate__faster
      h-100
    "
  >
    <div>
      <div class="d-flex flex-column justify-space-between h-100">
        <div>
          <h1 class="pb-9">Importante!</h1>
          <p class="pb-9 fs-4">Para realizar a autorização, você deverá seguir alguns passos:</p>
          <div v-if="!isLegalPerson" class="d-flex align-center mb-7">
            <div
              class="primary darken-1 rounded-circle d-flex justify-center align-center mr-3"
              style="height: 34px; min-width: 34px"
            >
              <span class="white--text body-2">1</span>
            </div>
            <p class="body-2">
              Responder algumas
              <span class="font-weight-bold">perguntas sobre você</span>
            </p>
          </div>
          <div class="d-flex align-center mb-7">
            <div
              class="primary darken-1 rounded-circle d-flex justify-center align-center mr-3"
              style="height: 34px; min-width: 34px"
            >
              <span class="white--text body-2">{{ !isLegalPerson ? 2 : 1 }}</span>
            </div>
            <p class="body-2">
              Inserir um
              <span class="font-weight-bold">código de 4 dígitos</span>
              recebido por SMS
            </p>
          </div>
          <p class="body-2">
            Lembre-se de
            <span class="font-weight-bold" :class="!locationEnable ? 'red--text' : ''">
              permitir o acesso à sua localização,
            </span>
            pois este passo é necessário para realizar a autorização.
          </p>

          <p v-if="!locationEnable" class="mt-2 body-2 font-weight-bold red--text">
            Caso não consiga liberar sua localização favor utilizar outro dispositivo.
          </p>

          <p v-if="safari" class="mt-4 body-2">
            Se estiver com problemas no Safari,
            <a href="https://support.apple.com/pt-br/HT207092" target="_blank">clique aqui</a>
          </p>
        </div>
      </div>
    </div>
    <div>
      <v-btn
        type="submit"
        depressed
        block
        x-large
        class="text-capitalize font-weight-bold"
        color="primary darken-1"
        :loading="loading"
        @click="getAuthentication"
        >Ok, entendi!</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      locationEnable: true,
      loading: false,
      safari: navigator.vendor.includes('Apple'),
    };
  },
  computed: {
    ...mapState('client', ['clientTaxId']),
    ...mapGetters('client', ['isLegalPerson']),
  },
  methods: {
    ...mapMutations('modal', ['CHANGE_COMPONENT']),
    getAuthentication() {
      this.loading = true;
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          () => {
            this.loading = false;
            if (this.isLegalPerson) this.CHANGE_COMPONENT('CPF');
            else this.CHANGE_COMPONENT('QUIZ');
          },
          async () => {
            this.locationEnable = false;
            if (navigator.vendor.includes('Apple') === -1) {
              await navigator.permissions.query({ name: 'geolocation' });
            }
            this.loading = false;
          },
        );
      }
    },
  },
};
</script>

<style></style>
