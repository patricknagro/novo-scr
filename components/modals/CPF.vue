<template>
  <div
    v-if="!error"
    class="
      d-flex
      flex-column
      justify-space-between
      animate__animated animate__slideInRight animate__faster
      h-100
    "
  >
    <div>
      <h1>Insira seu CPF</h1>

      <p class="pt-8 body-1 mb-8">
        Insira o
        <span class="paragraph--text text--darken-4">
          <strong>número do seu CPF:</strong>
        </span>
      </p>

      <v-form ref="form" v-model="valid" @submit.prevent="getValidationCode">
        <v-text-field
          ref="textfield"
          v-model="cpf"
          v-mask="'###.###.###.##'"
          outlined
          :rules="[rules.required, rules.cpfCnpj]"
          placeholder="Número de CPF"
          autofocus
          validate-on-blur
        >
        </v-text-field>
      </v-form>
    </div>
    <v-btn
      depressed
      x-large
      class="text-capitalize font-weight-bold display-btn"
      color="primary darken-1"
      :loading="isLoading"
      @click="getValidationCode"
      >Próxima</v-btn
    >
  </div>
  <div v-else class="d-flex flex-column justify-space-between h-100">
    <div>
      <h1>CPF Inválido</h1>

      <p class="pt-8 body-1 mb-8">
        O número de CPF informado deve estar associado a empresa autorizante.
      </p>
    </div>
    <v-btn
      depressed
      x-large
      class="text-capitalize body-1 font-weight-bold display-btn"
      color="primary darken-1"
      @click.prevent="reset"
      >Tentar novamente</v-btn
    >
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
// import http from '@/service/axios.service';
import rules from '@/mixins/rules';
export default {
  name: 'CPF',
  mixins: [rules],
  data: () => ({
    cpf: '',
    error: false,
    valid: true,
  }),
  computed: {
    ...mapState('client', ['clientTaxId', 'termId']),
    ...mapState('modal', ['isLoading']),
  },
  methods: {
    ...mapGetters('client', ['isLegalPerson']),
    ...mapMutations('modal', ['IS_LOADING', 'CHANGE_COMPONENT']),
    getValidationCode() {
      // if (this.isLegalPerson || !this.$refs.form.validate()) {
      //   this.$refs.textfield.blur();
      //   return null;
      // }

      this.IS_LOADING(true);

      const data = {
        signerTaxId: this.cpf,
        termId: this.termId,
      };
      setTimeout(() => {
        this.IS_LOADING(false);
        this.CHANGE_COMPONENT('Validacao');
      }, 1000);
      console.log(data);

      // http
      //   .post('/validar/signatario', data)
      //   .then(() => {
      //     this.IS_LOADING(false);
      //     this.CHANGE_COMPONENT('Validacao');
      //   })
      //   .catch((err) => {
      //     const statusCode = err.response.status;
      //     if (statusCode === 403) {
      //       this.error = true;
      //     } else {
      //       this.$toast.error({
      //         message: 'Erro no servidor! Tente novamente.',
      //         duration: 5000,
      //       });
      //     }
      //     this.IS_LOADING(false);
      //   });
    },
    reset() {
      this.cpf = '';
      this.valid = true;
      this.error = false;
    },
  },
};
</script>

<style></style>
