<template>
    <main class="section project-state">
        <div class="content">
            <div class="container">
                <h2 class="text-center title">
                    {{ $t('links.project_state.title') }}
                </h2>
                <p class="description text-center">
                    {{ $t('scan_code') }}
                    <br />
                </p>
                <button
                    type="submit"
                    class="my-btn d-flex align-items-center justify-content-center"
                >
                    <img
                        src="/img/svg/qr-code.svg"
                        alt="qr-code"
                        class="img-fluid"
                        :class="$store.state.lang == 'ar' ? 'ml-2' : 'mr-2'"
                    />
                    <span>{{ $t('scan') }}</span>
                </button>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: 'ProjectState',
    head() {
        return {
            title:
                this.$store.state.lang === 'ar'
                    ? `حالة المشروع`
                    : 'EightyyThree - Project State',
            meta: [
                {
                    name: 'keywords',
                    hid: 'keywords',
                    content:
                        this.$store.state.lang === 'ar'
                            ? ',إنشاء علامة تجارية,التسويق الإبداعي,الخدمات الرقمية,الانتاج,تصميم مواقع الويب,تصميم داخلي,تنظيم الموتمرات والمعارض'
                            : 'branding,creative marketing,digital services,production,websites design,interior design,events'
                },
                { property: 'og:type', hid: 'og:type', content: 'other' },
                { property: 'og:locale', hid: 'og:locale', content: 'ar-sa' },
                {
                    property: 'og:locale:alternate',
                    hid: 'og:locale:alternate',
                    content: 'en-us'
                },
                {
                    property: 'og:locale:alternate',
                    hid: 'og:locale:alternate',
                    content: 'ar-sa'
                },
                {
                    property: 'og:url',
                    hid: 'og:url',
                    content: 'https://eightyythree.com/project-state'
                },
                {
                    name: 'twitter:title',
                    hid: 'twitter:title',
                    content:
                        this.$store.state.lang === 'ar'
                            ? `حالة المشروع`
                            : 'EightyyThree - Project State'
                },
                {
                    name: 'twitter:site',
                    hid: 'twitter:site',
                    content: '@eightyy_three'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.project-state {
    height: 100vh;
    @media (max-width: 768px) {
        height: 100%;
        padding: 100px 0;
    }
    background-color: #cd3369;
    .content {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .title {
            font-size: 62px;
            margin-bottom: 180px;
            @media (max-width: 768px) {
                margin-bottom: 40px;
            }
        }
    }
}
</style>
