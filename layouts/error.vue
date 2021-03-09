<template>
    <main class="page-notfound">
        <div class="container">
            <div class="text-center">
                <nuxt-link to="/" class="btn btn-asol d-inline-block"
                    >Home Page</nuxt-link
                >
            </div>
        </div>
    </main>
</template>

<script>
export default {
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred'
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        return {
            title
        }
    }
}
</script>

<style lang="scss" scoped>
.page-notfound {
    padding: 80px 0;
    img {
        width: 450px;
    }
}
</style>
