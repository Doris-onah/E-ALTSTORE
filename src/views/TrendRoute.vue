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
    name: "TrendRoute",
    components: {
      CartView,
    },
    data() {
      return {};
    },
    computed: {
      products() {
        console.log("Products:", this.$store.state.products);
        return this.$store.state.products;
      },
    },
    mounted: {
      viewDetails(product) {
        console.log("Selected product:", product);
        this.$router.push({ name: "CartView", props: { product } });
     
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
  }
  
  .trend-items {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    width: calc(33.33% - 10px);
  }
  
  .trend-img {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .trend-img img {
    height: 200px;
    object-fit: cover;
    width: 100%;
  }
  
  .trend-items p {
    font-size: 18px;
    margin: 0;
  }
  
  .trend-items button {
    background-color: #008080;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    padding: 10px;
    transition: background-color 0.3s ease;
    width: 100%;
  }
  
  .trend-items button:hover {
    background-color: #006666;
  }
  
  @media only screen and (max-width: 768px) {
    .trend {
      justify-content: center;
    }
    
    .trend-items {
      margin-right: 0;
      margin-left: 0;
      width: 100%;
    }
  }
  
  
  </style>
  