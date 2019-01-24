import { rtsGetVersion, rtsGetPullData, rtsGetTopTen ,rtsGetTopThree, rtsGetWarningList} from '@/services';
import { Toast } from 'mint-ui';

const ERR_OK = 200;

// initial state
const state = {
  all: [],
  loading: false,
  pullLoading: false,
  pullData: '',
  warningActiveItemName:'' //智能预警当前滚动到那条数据的机构name
};

// getters
const getters = {};

// actions
const actions = {
  async getVersion({ commit }, payload) {
    commit('updateLoading', 'loading', true);
    const response = await rtsGetVersion(payload)
    .catch(error => {
      commit('updateLoading', 'loading', true);
      Toast(error);
    });
    commit('updateLoading', 'loading', false);
    const { code, msg, data } = response.data;
    if (code !== ERR_OK) {
      Toast(msg);
    } else {
      commit('setProducts', data);
    }
  },
  async getPullData({ commit }, payload) {
    commit('updateLoading', 'pullLoading', true);
    const response = await rtsGetPullData(payload)
    .catch(error => {
      commit('updateLoading', 'pullLoading', false);
      Toast(error);
    });
    commit('updateLoading', 'pullLoading', false);
    const { code, msg, data } = response.data;
    if (code !== ERR_OK) {
      Toast(msg);
    } else {
      commit('setPullData', data);
    }
    console.log(response.data)
  },
  async getTopTenData({ commit }, payload) {
    const response = await rtsGetTopTen(payload)
    .catch(error => {
      Toast(error);
    });
    return response.data
  },
  async getTopThreeData({ commit }, payload) {
    const response = await rtsGetTopThree(payload)
    .catch(error => {
      Toast(error);
    });
    return response.data
  },
  async getWarningList({ commit }, payload) {
    const response = await rtsGetWarningList(payload)
    .catch(error => {
      Toast(error);
    });
    return response.data
  },
  async changeWarningActiveItemName({commit},payload){
    commit('setWarningActiveItemName',payload)
  }
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
  deProduct(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory --;
  },
  updateLoading(state, type, flg) {
    state[type] = flg;
  },
  setPullData(state, data) {
    state.pullData = data;
  },
  setWarningActiveItemName(state, data){
    state.warningActiveItemName = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
