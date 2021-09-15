// import Vue from 'vue';
// import http from '~/service/axios.service';

export function GET_DATA({ commit }, payload) {
  commit('modal/IS_LOADING', true, { root: true });
  setTimeout(() => {
    const data = {
      companyName: 'NOME DA EMPRESA QUE IRÁ CONSULTAR',
      taxId: '12123123000100',
      clientName: 'NOME DO CLIENTE',
      clientTaxId: '12123123000100',
      term: 'Autorizo a Empresa acima, a consulta dos débitos e responsabilidades decorrentes de operações de crédito que constem ou venham a constar em meu nome e de minhas empresas, no Sistema de Informações de Crédito - SCR do Bacno Central, através da Nagro Crédito Agro Ltda.',
    };
    commit('UPDATE_STATE', data);
    commit('modal/IS_LOADING', false, { root: true });
  }, 1000);

  // http
  //   .get(`/assinar/${payload}`)
  //   .then((resp) => {
  //     const data = {
  //       companyName: resp.data.companyName,
  //       companyTaxId: resp.data.companyTaxId,
  //       clientName: resp.data.clientName,
  //       clientTaxId: resp.data.clientTaxId,
  //       term: resp.data.term,
  //     }
  //     commit('UPDATE_STATE', data);
  //     commit('modal/IS_LOADING', false, { root: true });
  //     console.log(resp);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     if (err.response) {
  //       const { status } = err.response;
  //       switch (status) {
  //         case 403:
  //           commit('modal/CHANGE_COMPONENT', 'TentativasEsgotadas', { root: true });
  //           break;
  //         case 409:
  //           commit('UPDATE_STATE', { alreadySigned: true });
  //           break;
  //         default: {
  //           this.$toast.error('Erro no servidor! Tente novamente.', {
  //             duration: 5000,
  //             position: 'top-center',
  //           });
  //         }
  //       }
  //     }
  //   });
}
