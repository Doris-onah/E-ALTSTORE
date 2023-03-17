<template>
  <div class="cart-view">
    <div v-if="product" class="displayed-cart">
      <img
        :src="product.images[0]"
        alt="product"
        width="200px"
        height="200px"
      />
      <div>
      <p>title: {{ product.title }}</p>
      <p>price: ${{ product.price }}</p>
      <p>rating: {{ product.rating }}</p>
      <p>description: {{ product.description }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <div v-else>No product selected.</div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  created() {
  console.log("Selected product:", this.product);
},

  methods: {
    addToCart(product) {
      alert("Added to cart", product);
      // this.$store.dispatch("addToCart", product);
    },
  
  },
};
</script>

<style scoped>

.displayed-cart {
  display: flex;
gap: 20px;
  align-items: center;
}
.displayed-cart img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}
</style>




  