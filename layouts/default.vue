<template>
    <div>
        <modals-container></modals-container>

        <Toasts/>

        <DevWarsHeader/>

        <nuxt/>

        <DevWarsFooter/>
    </div>
</template>

<script>
    import Component from 'nuxt-class-component';
    import Vue from 'vue';

    import Header from '~/components/layout/Header';
    import Footer from '~/components/layout/Footer';
    import Toasts from '~/components/toast/Toasts';

    @Component({
        components: {DevWarsHeader: Header, DevWarsFooter: Footer, Toasts}
    })
    export default class Default extends Vue {
    }
</script>
