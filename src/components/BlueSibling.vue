<template>
    <footer>
        <h3>This component's message changes (subTitle property mutates) via the event bus from his sibling component</h3>
        <h1>Hire Dan: {{ subTitle }}</h1>
    </footer>
</template>
<script>
    // imports
    import { bus } from '../main';
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
        created() {
            bus.$on('changeSubTitle', (data) => {
                this.subTitle = data;
            });
        }
    }
</script>
<style scoped>
    footer {
        background: lightskyblue;
        padding: 6px;
    }

    p {
        color: #222;
        text-align: center;
    }
</style>