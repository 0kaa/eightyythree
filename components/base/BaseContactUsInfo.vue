<template>
    <div class="section contact-us-info">
        <div class="container">
            <div class="row">
                <div
                    v-if="this.$store.state.settings"
                    class="col-md-7 align-self-center"
                >
                    <iframe
                        :src="this.$store.state.settings.google_embed"
                        width="100%"
                        :height="mobile ? '350px' : '450px'"
                        class="framete"
                        frameborder="0"
                        style="border: 0"
                        allowfullscreen
                        aria-hidden="false"
                        tabindex="0"
                    ></iframe>
                </div>
                <div class="col-md-5 align-self-center">
                    <ul v-if="this.$store.state.settings" class="list-unstyled">
                        <li>
                            <div>{{ $t('email') }}</div>
                            <div>
                                <a
                                    :href="
                                        `mailto:${this.$store.state.settings.website_email}`
                                    "
                                    v-text="
                                        this.$store.state.settings
                                            .website_email || ''
                                    "
                                ></a>
                            </div>
                        </li>
                        <li>
                            <div>{{ $t('phone') }}</div>
                            <div>
                                <a
                                    :href="
                                        `tel:${this.$store.state.settings.sar_phone}`
                                    "
                                    v-text="
                                        this.$store.state.settings.sar_phone ||
                                            ''
                                    "
                                    >⁦⁩</a
                                >
                            </div>
                        </li>
                        <li>
                            <div>{{ $t('address') }}</div>
                            <div
                                v-text="
                                    this.$store.state.settings.address_sar || ''
                                "
                            ></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUsInfo',
    data() {
        return {
            mobile: null
        }
    },
    mounted() {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            this.mobile = true
        } else {
            // false for not mobile device
            this.mobile = false
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-us-info {
    background-color: #3e4a74;
    ul {
        font-size: 32px;
        a {
            color: #fff;
        }
    }
    .framete {
        @media (max-width: 768px) {
            width: 100%;
            margin-bottom: 50px;
        }
    }
}
</style>
