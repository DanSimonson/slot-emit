<template>
    <header @click="changeSubTitle">
        <h3>Click here to change message (mutate subTitle property) via the event bus from child to parent</h3>
        <h1>Hire Dan: {{ subTitle }}</h1>
    </header>

</template>
<script>
    import { bus } from '../main'
    export default {
        props: {
            subTitle: {
                type: String,
                required: true
            }
        },
        data() {
            return {

            }
        },
        methods: {
            changeSubTitle: function () {
                //this.title = 'Hire Dan to make your next web app'
                this.$emit('changeSubTitle', 'He makes great Vue Apps at mariposaweb.net');
            }
        },
    }
</script>
<style scoped>
    header {
        background: lightcoral;
        padding: 10px;
    }

    header {
        cursor: pointer;
    }

    h1 {
        color: #222;
        text-align: center;
    }
</style>