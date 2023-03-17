<template> 
  <div class="trend-container">
   <div class="viewdetails">
      <div class="viewdetails-item">
      <div v-if="selectedProduct" >
          <CartView :product="selectedProduct"/>
        </div>
       <div v-else> <p>No product selected. </p> </div>
      </div>
      </div>
      <div class="trend">
        <div class="trend-item" v-for="product in products" :key="product.id">
          <div class="trend-img">
            <img :src="product.images[3]" alt="product" width="200px" height="200px" />
            <p>title: {{ product.title }}</p>
            <p>price: {{ product.price }}</p>
            <button @click="viewDetails(product)">View Details</button>
          </div>
        </div>
    
       
      </div>
       <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <button @click="nextPage" :disabled="currentPage === increment">
              Next</button>
      </div>
    </template>
    
    <script>
    import CartView from "./CartView.vue";
    export default {
      name: "IphoneCart",
      components: {
        CartView,
      },
      data() {
        return {
          increment: 50,
              perPage: 10,
              currentPage: 1,
          selectedProduct: null,
        };
      },
      methods: {
        viewDetails(product) {
          this.selectedProduct = product;
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
      computed: {
        products() {
          const startIndex = (this.currentPage - 1) * this.perPage;
              const endIndex = startIndex + this.perPage;
              return this.$store.getters.products.slice(startIndex, endIndex);
            
          // return this.$store.getters.products;
        },
      },
    };
   
     
    </script> 
  
  <style>
  .trend-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      /* background-color: #131616; */
      width: 100%;
      gap: 20px;
  }
  .trend{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 ;
      /* max-width: 1200px; */
      /* background-color: #800006; */
      width: 100%;
    }
    
    .trend-item {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      padding: 15px;
      width: 300px;
      /* width: calc(33.33% - 30px); */
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
      background-color: #f8fc04;
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
  
  .viewdetails{
      display: flex;
     /* justify-content: center;
     align-items: center; */
     padding: 0%;
     height: 100%;
     
      /* background-color: #131616; */
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,  rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
    .viewdetails-item {
      /* background-color: #e41818; */
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      padding: 15px;
      width: 100%;
   
    }
   
  </style>








<!-- <template>
    <div class="iphone-cart" >
        <div  class="product" v-for="product in products" :key="product.id">
            <div class="product-img">
            <img :src="product.images[2]" alt="product" width="200px"  height="200px"/>
            <p>{{ title }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
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
    methods: {
        addToCart(product) {
          alert("Added to cart");
        },
    },
    
}
</script>
<style scoped>
.iphone-cart {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    /* background-color: yellow; */
  }
  
  .product {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    width: 300px;
  }
  
  .product-img {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .product-img img {
    height: 200px;
    object-fit: cover;
    width: 100%;
  }
  
  .product-items p {
    font-size: 18px;
    margin: 0;
  }
  
  .product-items button {
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
  
</style>
 -->
