<template>
    <div>
        <div class="blog-banner" ng-style="{'background-image': 'url(' + post.image_url + ')'}"></div>
        <div class="container">
            <div class="blog-read">
                <div class="blog-read__header">
                    <h1 class="blog-read__title">{{ post.title }}</h1>
                    <div class="blog-read__meta">
                        <div class="user-group">
                            <Avatar :user="post.user"/>

                            <div class="blog-read__author">{{ post.user.username }}</div>
                        </div>
                        <div class="blog-read__published">{{ post.timestamp | moment('longDate') }}</div>
                    </div>
                </div>

                <div class="blog-read__main" v-html="post.text"></div>
            </div>
        </div>
    </div>

</template>

<script>
    import Component from 'nuxt-class-component';
    import Vue from 'vue';
    import Http from "../../services/Http";

    import Avatar from '~/components/user/Avatar';

    @Component({
        components: {Avatar}
    })
    export default class Slug extends Vue {
        async asyncData({params}) {
            let split = params.slug.split("-");

            let id = split[split.length - 1];

            return {post: await Http.for('blog').byID(id)};
        }
    }
</script>
