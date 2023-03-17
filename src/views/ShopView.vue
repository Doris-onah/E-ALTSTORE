<template>
  <div>
  <div class="shoppage" >
    <div class="nested-routes">
  <span>
    <RouterLink to="/Shop"></RouterLink>
   <RouterLink to="/TrendItem">BestSeller</RouterLink>
   <RouterLink to="/IphoneCart">Trending</RouterLink>
   </span>
  <RouterView />
</div>

  </div>
  </div>
</template>

<script>

export default {
    name: "ShopView",
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
    align-items: center;
  background: rgb(223, 225, 235);
    width: 100%;
  }

.nested-routes {
  margin: 0;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 1px,  rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    /* background-color: #f70b69; */
  } 

  .nested-routes span {
   
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset;

  }

  

</style>


