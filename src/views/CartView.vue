<template>
  <div class="cart-view">
    <h2>Cart View</h2>
    <div v-if="product">
      <img
        :src="product.images[0]"
        alt="product"
        width="200px"
        height="200px"
      />
      <p>title: {{ product.title }}</p>
      <p>price: {{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
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

  // methods: {
  //   addToCart(product) {
  //     this.$store.dispatch("addToCart", product);
  //   },
  
};
</script>



<!-- <template>
  <div class="cart-view">
    <h2>Cart View</h2>
    <div v-if="product">
      <img :src="product.images[0]" alt="product" width="200px" height="200px" />
      <p>title: {{ product.title }}</p>
      <p>price: {{ product.price }}</p>
    </div>
    <div v-else>
      No product selected.
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  props: {
    product: {
      type: Object,
    },
  },
  mounted() {
    console.log("Selected product:", this.product);
  },
};
</script> -->

<!-- <template>
  <div class="product-details">
    <img :src="product.images[0]" alt="product" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
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
  methods: {
    addToCart() {
      // add the product to the cart
      this.$store.dispatch("addToCart", this.product);
    },
  },
};
</script> -->
<!-- <template>
  <div class="product-details">
    <img :src="selectedProduct.images[0]" alt="product" />
    <h3>{{ selectedProduct.title }}</h3>
    <p>{{ selectedProduct.description }}</p>
    <p>Price: {{ selectedProduct.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "CartView",
  props: {
    selectedProduct: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      // add the product to the cart
      this.$store.dispatch("addToCart", this.selectedProduct);
    },
  },
};
</script> -->

<!-- <template>
  <div class="cart-view">
    <h2>Cart View</h2>
    <div>
      <img :src="product.images[0]" alt="product" width="200px" height="200px" />
      <p>title: {{ product.title[0] }}</p>
      <p>price: {{ product.price }}</p>
    </div>
  </div>
</template> -->

<!-- <template>
  <div class="cart-view">
    <h2>Cart View</h2>
    <div v-if="product">
      <img :src="product.images[0]" alt="product" width="200px" height="200px" />
      <p>title: {{ product.title }}</p>
      <p>price: {{ product.price }}</p>
    </div>
    <div v-else>
      No product selected.
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  name: "CartView",
  props: {
    product: {
      type: Object,
      required: false,
      default: null,
    },
  },
  setup(props) {
    const reactiveProps = reactive(props);

    onMounted(() => {
      console.log("Selected product:", reactiveProps.product);
    });

    return {
      product: reactiveProps.product,
    };
  },
};
</script>
 -->

<!-- <script>
export default {
  name: "CartView",
  props: {
    product: {
      type: Object,
      required: false,
      default: null,
    },
  },
  mounted() {
    console.log("Selected product:", this.product);
  },
};
</script>
 -->

<!-- <template>
  <div class="product-item">
    <img :src="product.images[0]" alt="product" width="200px" height="200px" />
    <p>title: {{ product.title }}</p>
    <p>price: {{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
    <button @click="viewDetail(product)">View Detail</button>
  </div>
</template>

<script>
export default {
  name: "CArtView",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      // emit an event to the parent component to add the product to the cart
      this.$emit("add-to-cart", product);
    },
    viewDetail(product) {
      // emit an event to the parent component to display the product details in the cart view
      this.$emit("view-detail", product);
    },
  },
};
</script>
 -->
