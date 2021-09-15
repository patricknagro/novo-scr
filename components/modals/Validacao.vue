<template>
  <div class="d-flex flex-column justify-space-between h-100">
    <div>
      <h1>Validação</h1>

      <p class="pt-8 body-1 mb-8">
        Insira seu numero de celular, para receber um código de validação via SMS.
      </p>

      <v-form ref="form" v-model="valid" @submit.prevent="getValidationCode">
        <v-text-field
          v-model="phone"
          v-mask="'(##) #####-####'"
          class="input-txt"
          color="primary darken-1"
          outlined
          inputmode="numeric"
          pattern="[0-9]*"
          :rules="[rules.required, rules.celular]"
          placeholder="Celular"
          autofocus
          validate-on-blur
          @keypress.enter="getValidationCode"
        />
      </v-form>
    </div>
    <v-btn
      depressed
      x-large
      class="text-capitalize body-1 font-weight-bold display-btn"
      color="primary darken-1"
      :disabled="phone.length < 15"
      :loading="isLoading"
      @click.prevent="getValidationCode"
      >Validar</v-btn
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import rules from '@/mixins/rules';
export default {
  mixins: [rules],
  data: () => ({
    phone: '',
    isLoading: false,
    valid: true,
  }),
  computed: {
    ...mapState('client', ['termId']),
  },
  methods: {
    ...mapMutations('auth', ['SET_TOKEN']),
    ...mapMutations('client', ['UPDATE_STATE']),
    getValidationCode() {
      if (this.isLegalPerson || !this.$refs.form.validate()) {
        this.$refs.textfield.blur();
        return null;
      }
      this.isLoading = true;

      const data = {
        phone: this.phone,
        termId: this.termId,
      };

      http.post('/assinar/token', data).then(() => {
        this.isLoading = false;
        this.SET_TOKEN(data);
        this.CHANGE_COMPONENT('ValidacaoCodigo');

        this.storeClientInfo();
      });
    },
    storeClientInfo() {
      const data = {
        deviceCode: this.deviceCode,
        geolocation: this.geolocation,
        clientIp: this.clientIp,
      };
      this.UPDATE_STATE(data);
    },
  },
};
</script>

<style></style>
