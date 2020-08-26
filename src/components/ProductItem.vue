<template>
    <div class="product-item">
        <whishlist-switcher class="whishlist"
            v-if="product || $slots.default"
            :active="onWhishlist"/>

        <template v-if="product">
            <img :src="product.image.httpSrc" alt="">
            <h3>{{product.title}}</h3>
            <p class="description">{{product.productDetails.commaSeparatedWordsPartOne}}</p>
            <p class="price">{{product.priceElement.priceWithCurrency}}</p>
        </template>

        <slot />
    </div>
</template>

<script>
    import WhishlistSwitcher from './WhishlistSwitcher';
    export default {
        components: {
            WhishlistSwitcher
        },
        name: 'ProductItem',
        props: ['product', 'onWhishlist'],
        data() {
            return {}
        },
        methods: {}

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    }

    h3 {
        font-size: 15px;
        margin: 10px 0 0;
    }

    img {
        max-width: 200px;
        max-height: 200px;
        display: block;
        margin: auto;
    }

    .product-item {
        width: 50%;
        position: relative;
        box-sizing: border-box;
        border: 1px solid gray;
        padding: 10px;
    }

    .price {
        color: #f60;
        display: block;
        font-size: 20px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
        white-space: nowrap;
    }

    .description {
        font-size: 13px;
    }

    .whishlist {
        position: absolute;
        top: 10px;
        right: 10px;
    }


</style>
