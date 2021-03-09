<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="footer-widget">
              <h2 class="footer-title">
                {{ $t("our_services") }}
              </h2>
              <ul
                v-if="
                  this.$route.path != '/services' ||
                    this.$route.path != '/ar/services'
                "
                class="list-unstyled footer-list count-2"
              >
                <li
                  v-for="service in this.$store.getters.services"
                  :key="service.id"
                >
                  <router-link
                    :to="`${$t('links.services.url')}#${service.slug}`"
                    >{{
                      $store.state.lang == "ar"
                        ? service.title.ar
                        : service.title.en
                    }}</router-link
                  >
                </li>
              </ul>
              <ul v-else class="list-unstyled footer-list count-2">
                <li
                  v-for="service in this.$store.getters.services"
                  :key="service.id"
                >
                  <a
                    :href="`#${service.slug}`"
                    @click.prevent="scrollTo($event)"
                    >{{ service.title }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer-widget">
              <h2 class="footer-title">{{ $t("menu") }}</h2>
              <ul class="list-unstyled footer-list">
                <li>
                  <router-link :to="$t('links.home.url')">
                    {{ $t("links.home.title") }}</router-link
                  >
                </li>
                <li>
                  <router-link :to="$t('links.lets_talk.url')">
                    {{ $t("links.lets_talk.title") }}</router-link
                  >
                </li>
                <li>
                  <router-link :to="$t('links.project_state.url')">{{
                    $t("links.project_state.title")
                  }}</router-link>
                </li>
                <li>
                  <router-link :to="$t('links.terms_and_conditions.url')">{{
                    $t("links.terms_and_conditions.title")
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer-widget">
              <h2 class="footer-title">
                {{ $t("links.contact.title") }}
              </h2>
              <ul
                v-if="this.$store.state.settings"
                class="list-unstyled footer-list"
              >
                <li>
                  <a
                    :href="`mailto:${this.$store.state.settings.website_email}`"
                    v-text="this.$store.state.settings.website_email || ''"
                  ></a>
                </li>
                <li>
                  <a
                    :href="`tel:${this.$store.state.settings.sar_phone}`"
                    v-text="this.$store.state.settings.sar_phone || ''"
                    >⁦⁩</a
                  >
                </li>
              </ul>
              <ul
                v-if="this.$store.state.settings"
                class="list-unstyled social-icons d-flex align-items-center mt-5"
              >
                <li class="instagram">
                  <a
                    target="_blank"
                    :href="this.$store.state.settings.instgram_url || '#'"
                  >
                    <img
                      src="/img/svg/instagram.svg"
                      alt="instagram"
                      class="img-fluid"
                    />
                  </a>
                </li>
                <li class="facebook">
                  <a
                    target="_blank"
                    :href="this.$store.state.settings.facebook_url || '#'"
                  >
                    <img
                      src="/img/svg/facebook.svg"
                      alt="facebook"
                      class="img-fluid"
                    />
                  </a>
                </li>
                <li class="twitter">
                  <a
                    target="_blank"
                    :href="this.$store.state.settings.twitter_url || '#'"
                  >
                    <img
                      src="/img/svg/twitter.svg"
                      alt="twitter"
                      class="img-fluid"
                    />
                  </a>
                </li>
                <li class="youtube">
                  <a
                    target="_blank"
                    :href="this.$store.state.settings.youtube_url || '#'"
                  >
                    <img
                      src="/img/svg/youtube.svg"
                      alt="youtube"
                      class="img-fluid"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.$store.state.settings" class="copyright text-center">
      {{ this.$store.state.settings.copyright }}
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  methods: {
    scrollTo(e) {
      const id = e.target.getAttribute("href");
      const el = document.querySelector(id);
      if (el) {
        window.scroll({
          top: el.offsetTop - document.querySelector(".navbar").offsetHeight,
          behavior: "smooth"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
footer {
  position: relative;
  z-index: 9;
}
.footer {
  z-index: 999;
  background-color: #384a89;
  background-image: url("/img/Particles.png");
  background-attachment: fixed;
  padding: 50px 0;
  .footer-widget {
    .footer-title {
      font-size: 22px;
      @media (max-width: 768px) {
        font-size: 38px;
      }
    }
    li {
      font-size: 26px;
      a {
        color: #fff;
        &:hover {
          color: #ffff00;
        }
      }
    }
    .footer-list {
      &.count-2 {
        column-count: 2;
      }
    }
    .social-icons {
      li {
        a {
          padding: 0 30px 0 0;
        }
      }
    }
  }
}
.copyright {
  background-color: #46568d;
  background-image: url("/img/Particles.png");
  background-attachment: fixed;
  padding: 15px;
  font-size: 28px;
}
</style>
