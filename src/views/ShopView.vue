<template>
  <div v-if="!isLogged">
    <SignUp/>
  </div>
  <div v-else="isLogged">
  <div class="shoppage" >

      <div class="sales">
        <div class="sales-item">
          <div class="sales-content">
            <button @click="prevPage" :disabled="currentPage === 1">
              <i class="fa-light fa-chevrons-left"></i>
             
            </button>
            <div v-for="product in products" :key="product.id" class="sales-content-item">
             <img :src="product.images[0]" alt="product" />
            </div>
            <button @click="nextPage" :disabled="currentPage * perPage === increment">
             Next</button>
          </div>
        </div>

        <div class="ads">
          <div class="ads-1">
          <div v-for="product in products" :key="product.id" class="sales-content-item">
              <img :src="product.images[2]" alt="product" />
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>

    <div class="category">
      <div class="nested-routes">
        <span
          >category <RouterLink to="/Shop/IphoneCart">iphone</RouterLink></span
        >
      </div>
      <div class="category-products">
        <div class="cate"> <RouterView /> </div>
      </div>
    </div>

    <div class="trending">
      <h2>Trending</h2>
      <TrendItem/>
    </div>
  </div>
  </div>
  
</template>

<script>
import TrendItem from './TrendItem.vue';
import SignUp from './SignUp.vue';

export default {
    name: "ShopView",
    components: { TrendItem ,
    SignUp},
    data() {
        return {
            increment: 30,
            perPage: 1,
            currentPage: 1,
        };
    },
    computed: {
        products() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.$store.getters.products.slice(startIndex, endIndex);
            // return this.$store.getters.products;
        },
       
    isLogged() {
      return this.$store.getters.isLogged
  },
    },
    methods: {
        getProducts() {
            this.$store.dispatch("setProducts");
        },
        nextPage() {
            console.log("Next button clicked");
            this.currentPage++;
            console.log("Current page:", this.currentPage);
        },
        prevPage() {
            console.log("Previous button clicked");
            this.currentPage--;
            console.log("Current page:", this.currentPage);
        },
    },
    mounted() {
        this.getProducts();
    },
};
</script>

<style>
.shoppage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
}

.sales {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #bad0d6;
  border-radius: 25px;
}
.sales-content {
  width: 900px;
  height: 400px;
  display: flex;
  align-items: center;
  background-color: #dede61;
  border-radius: 25px;
  gap: 20px;

}
.sales-content-item {
  width: 400px;
  height: 400px;
  /* background-color: #738ab8; */
  border-radius: 25px;
}
.sales-content-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ads {
  width: 400px;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  gap: 20px;
}
.category {
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c95252;
  border-radius: 25px;
}
.category-products {
  width: 100%;
  height: 100%;
  display: grid-row;
  flex-direction: column;
  background-color: #6b5b5b;
  border-radius: 25px;
}

.trending {
  width: 80%;
  height: 100%;
  display:grid;
  align-items: center;
  background-color: #cef00b;
  border-radius: 25px;
}
</style>


