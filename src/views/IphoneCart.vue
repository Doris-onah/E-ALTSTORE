<template>
    <div>
        <h1>cart page</h1>
        <div  class="product"
        v-for="product in products" :key="product.id">
            <div class="dsplay">
            <img :src="product.images[0]" alt="product" width="200px"  height="200px"/>
            </div>
    </div>
    </div>
</template>

<script>

export default {
   
    name: "IphoneCart",
    data() {
        return {
          
        };
    },
    computed: {
        products() {
      return this.$store.getters.products;
    },
    },
}
</script>

<style>
.product{
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: row; */
    width: 100%;
    height: 100%;
    gap: 20px;
    background-color: brown;
}
.dsplay{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: aqua;
}
</style>