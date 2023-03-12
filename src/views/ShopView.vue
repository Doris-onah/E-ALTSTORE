<template>
  <div class="shoppage">
    <div class="sales">
      <div class="sales-con">
        <div class="sales-item">
          <div class="sales-content">
            <p>display here</p>
            <!-- <div v-for="prod in product" :key="prod.id">
              {{ prod.title }}
              <img :src="prod.images[0]" alt="product image" /> -->
              {{ product }}
            <!-- </div> -->
          </div>
        </div>

        <div class="ads">
          <div class="ads-1"></div>
          <div class="ads-2"></div>
        </div>
      </div>
    </div>

    <div class="category">
      <div class="nested-routes">
        <span
          >category <RouterLink to="/Shop/IphoneCart">iphone</RouterLink></span
        >
      </div>
      <div class="category-products">
        <RouterView />
      </div>
    </div>

    <div class="trending">
      <h2>Trending</h2>
      <div class="trending-products"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopView",

  computed: {
    product() {
      return this.$store.getters.product;
    },
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
  background-color: #f9f9f9;
  gap: 20px;
}
.sales {
  width: 80%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #9eb0d5; */
  border-radius: 25px;
}
.sales-con {
  width: 100%;
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
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f4;
  border-radius: 25px;
  gap: 20px;
}
.ads {
  width: 400px;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: #d0cbcb; */
  border-radius: 25px;
  gap: 20px;
}
.ads-1,
.ads-2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f5f9;
  border-radius: 25px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4a0808;
  border-radius: 25px;
}

.products,
.trending-products {
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c95252;
  border-radius: 25px;
}
</style>

<!-- // @media (min-width: 1024px) {
 
// } -->
