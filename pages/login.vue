<template>
    <div class="Login header-offset">
        <div class="container">
            <form v-async-submit="[login]" >
                <DevwarsCard title="Login">
                    <div class="form-group">
                        <Input v-model="username" required />
                        <label>Email or Username</label>
                    </div>
                    <div class="form-group">
                        <Input v-model="password" name="password" type="password" required />
                        <label>Password</label>
                    </div>
                    <div slot="actions">
                        <button type="submit" href="#" class="btn btn-outline-white btn-block">LOGIN</button>
                        <a href="/register" class="btn btn-outline-gray btn-block">REGISTER</a>
                        <a href="/forgot-password" class="forgot">Forgot your password?</a>
                    </div>
                </DevwarsCard>
            </form>
        </div>
    </div>
</template>

<script>
    import Component from 'nuxt-class-component';
    import Vue from 'vue';
    import DevwarsCard from '~/components/DevwarsCard';
    import Input from '~/components/form/Input';

    @Component({
        components: { DevwarsCard, Input },
        layout: 'header',
        middleware: 'guest'
    })

    export default class Login extends Vue {
        username = '';
        password = '';

        async login() {
            await this.$store.dispatch('user/login', {username: this.username, password: this.password});
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/utils';

.Login {
    padding-top: $l-space;

    .forgot {
        display: block;
        margin-top: $s-space;
        color: $text-color-muted;

        &:hover {
            color: $text-color-secondary;
        }
    }
}
</style>
