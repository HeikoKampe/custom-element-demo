<template>
    <div @click="onIconClick" class="whishlist-switcher">
        <svg
            :class="{'active': isActive}"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.317,3.761a5.581,5.581,0,0,0-8.14,0L12,4.994l-1.177-1.23a5.581,5.581,0,0,0-8.14,0,6.211,6.211,0,0,0,0,8.5L3.862,13.5v0L12,22h0l8.138-8.5v0l1.177-1.23A6.211,6.211,0,0,0,21.317,3.761Z"></path>
        </svg>

    </div>
</template>

<script>

    export default {
        props: ['active'],
        data() {
            return {
                isActive: this.active
            }
        },
        methods: {
            onIconClick() {
                this.isActive = !this.isActive;
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    svg {
        fill: transparent;
        stroke: #0771d0;
        stroke-width: 1.5px;
        transform: scale(1.2);
    }

    svg.active {
        fill: #0771d0;
    }


</style>
