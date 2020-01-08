<template>
    <div>
        <Header />
        <Wizard />
    </div>
</template>

<script>
    import Wizard from '@/components/Wizard'
    import Header from '@/components/Header'
    export default {
        components: {
            Wizard,
            Header
        },
        data () {
            return {
                components: {}
            }
        }
    }
</script>

<style>

</style>
