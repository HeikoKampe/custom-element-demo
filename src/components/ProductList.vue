<template>
    <div class="product-list">

        <h2>Product List</h2>
        <p>Async load products by hitting the button.</p>
        <p><button @click="onLoadProductsButtonClick">Load Products</button></p>

        <div class="product-list__list">

            <template  v-if="products.length">
                <product-item
                    :key="product.title" :product="product"
                    v-for="product in products">
                </product-item>
            </template>

            <slot v-if="!products.length" />

        </div>

    </div>
</template>

<script>
    import { getProducts } from '../services/productService';
    import ProductItem from '../components/ProductItem';

    export default {
        components: {
            ProductItem
        },
        name: 'ProductList',
        props: {
            singleOffer: Boolean
        },
        data() {
            return {
                products: []
            }
        },
        methods: {
            onLoadProductsButtonClick() {
                this.products = getProducts();
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h2 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .product-list__list {
        display: flex;
        flex-wrap: wrap;
    }
</style>
