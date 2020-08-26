import Vue from 'vue'
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {
    ProductList,
    ProductItem
  }
});
