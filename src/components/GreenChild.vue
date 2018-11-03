<template>
    <header @click="changeTitle">
        <h3>Click here to change message (mutate title property) via $emit from child to parent component</h3>
        <h1> {{ title }}</h1>
    </header>

</template>
<script>
    import { bus } from '../main'
    export default {
        props: {
            title: {
                type: String,
                required: true
            }

        },
        data() {
            return {

            }
        },
        methods: {
            changeTitle: function () {
                //emit custom event to change title property
                this.$emit('changeTitle', 'Hire Dan to make your next web app');
            }
        }
    }
</script>
<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }

    h1 {
        color: #222;
        text-align: center;
    }

    header:hover {
        cursor: pointer;
    }
</style>