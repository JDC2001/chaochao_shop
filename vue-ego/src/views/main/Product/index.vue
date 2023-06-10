<template>
  <div class="product">
      <ProductHeader />
      <ProductList />
      <ProductPagination />
      <ProductAdd />
      <ProductEditor />
  </div>
</template>

<script>

import ProductList from "./ProductList"
import ProductPagination from "./ProductPagination"
import ProductHeader from "./ProductHeader"
import ProductAdd from "./ProductAdd"
import ProductEditor from "./ProductEditor"

export default {
  components:{
    ProductList,
    ProductPagination,
    ProductHeader,
    ProductAdd,
    ProductEditor
  }
}
</script>

<style scoped>

.product{
  width: 1200px;
  margin: 0 auto;
}

</style>