<template>
  <div class="trend">
    <div class="trend-items" v-for="product in products" :key="product.id">
      <div class="trend-img">
        <img
          :src="product.images[0]"
          alt="product"
          width="200px"
          height="200px"
        />
        <p>title: {{ product.title[0] }}</p>
        <p>price: {{ product.price }}</p>
        <button @click="viewDetails(product)">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartView from "./CartView.vue";

export default {
  name: "TrendItem",
  components: {
    CartView,
  },
  data() {
    return {};
  },
  methods: {
    viewDetails(product) {
      console.log("Selected product:", product);
      this.$router.push({ name: "CartView", props: { product } });
   
    },
  },
  computed: {
    products() {
      console.log("Products:", this.$store.state.products);
      return this.$store.state.products;
    },
  },
};
</script>

<!-- <template>
    <div class="trend">
        <div class="trend-itesm" v-for="product in products" :key="product.id">
        <div class="trend-img">
            <img :src="product.images[0]" alt="product" width="200px" height="200px" />
            <p>title: {{ product.title[0] }}</p>
            <p>price: {{ product.price }}</p>
            <button @click="viewDetails(product)">View Details</button>
        </div>
        </div>
    </div>
</template>


<script>
import CartView from "./CartView.vue";
export default {
  name: "TrendItem",
  components: {
    CartView,
  },
  data() {
    return {};
  },
  methods: {
    viewDetails(product) {
      console.log("Selected product:", product);
      this.$router.push({ name: "CartView", props: { product } });
    },
  },
  computed: {
    products() {
      const products = this.$store.getters.products;
      console.log("Products:", products);
      return products;
    },
  },
};
</script> -->

<!-- <script>
import CartView from "./CartView.vue";
export default {
    name: "TrendItem",
    components: {
        CartView,
    },
    data() {
        return {
            
        };
    },
    methods: {
        viewDetails(product) {
            this.$router.push({ name: "CartView", props: { product } });
        },
    },
    computed: {
        products() {
            return this.$store.getters.products;
            
        },
    },
};
</script>  -->

<!-- <template>
    <div class="trend">
      <div class="trend-item" v-for="product in products" :key="product.id">
        <div class="trend-img">
          <img :src="product.images[0]" alt="product" width="200px" height="200px" />
          <p>title: {{ product.title }}</p>
          <p>price: {{ product.price }}</p>
          <button @click="viewDetails(product)">View Details</button>
        </div>
      </div>
      <cart-view v-if="selectedProduct" :selected-product="selectedProduct" />
    </div>
  </template> -->

<!-- <template>
    <div class="trend">
      <div class="trend-item" v-for="product in products" :key="product.id">
        <div class="trend-img">
          <img :src="product.images[0]" alt="product" width="200px" height="200px" />
          <p>title: {{ product.title }}</p>
          <p>price: {{ product.price }}</p>
          <button @click="viewDetails(product)">View Details</button>
        </div>
      </div>
      <selected-product v-if="selectedProduct" :selected-product="selectedProduct" />
    </div>
  </template>
  
  <script>
  import CartView from "./CartView.vue";
  export default {
    name: "TrendItem",
    components: {
      CartView,
    },
    data() {
      return {
        selectedProduct: null,
      };
    },
    methods: {
      viewDetails(product) {
        this.selectedProduct = product;
      },
    },
    computed: {
      products() {
        return this.$store.getters.products;
      },
    },
  };
  </script> -->

<style>
.trend {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: brown;
}
.trend-itesm {
  width: 200px;
  height: 200px;
  background-color: brown;
}
</style>
