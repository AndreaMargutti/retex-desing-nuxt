<script setup>

const props = defineProps({
    blog: { type: Object, required: true }
})

</script>

<template>
    <div>
        <figure class="text-center">
            <img :src="blog.author.profile_img" alt="author_pic">
            <h3>{{ blog.title }}</h3>
            <h4>{{ blog.author.name }}</h4>
        </figure>
    </div>
</template>

<style scoped lang="scss">
    figure {
        padding: 24px;

        img {
            width: 64px;
            height: 64px;
            margin: 0 auto;
            margin-bottom: 24px;
            border-radius: 30px;
        }

        h3 {
            font-weight: 700;
            font-size: 16px;
        }

        h4 {
            font-weight: 400;
            font-size: 14px;
        }
    }
</style>