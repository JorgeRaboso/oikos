<template>
    <div class="container">
        <div>
            <Header />
            <Searcher />
        </div>
    </div>
</template>

<script>
    import Header from '~/components/Header.vue'
    import Searcher from '~/components/Searcher.vue'

    export default {
        components: {
            Searcher,
            Header
        }
    }
</script>
