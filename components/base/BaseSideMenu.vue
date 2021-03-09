<template>
  <transition name="fade" mode="out-in">
    <div
      v-show="this.$store.state.menuToggle"
      class="side-menu"
      @click="sideToggle(false)"
    >
      <div class="content">
        <button class="close" @click.prevent="sideToggle(false)">
          <span class="d-none">{{ $t("close") }}</span>
        </button>
        <div class="routers">
          <ul class="list-unstyled">
            <li>
              <router-link :to="$t('links.home.url')">{{
                $t("links.home.title")
              }}</router-link>
            </li>
            <li>
              <router-link :to="$t('links.services.url')">{{
                $t("links.services.title")
              }}</router-link>
            </li>
            <li>
              <router-link :to="$t('links.contact.url')">{{
                $t("links.contact.title")
              }}</router-link>
            </li>
            <li>
              <router-link :to="$t('links.lets_talk.url')">{{
                $t("links.lets_talk.title")
              }}</router-link>
            </li>
            <li>
              <router-link :to="$t('links.project_state.url')">{{
                $t("links.project_state.title")
              }}</router-link>
            </li>
            <li class="mt-5">
              <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                exact
                >{{ locale.name }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "SideMenu",
  computed: {
    availableLocales() {
      const local = this.$i18n.locales.filter(
        i => i.code !== this.$i18n.locale
      );
      const notInc = this.$i18n.locales.filter(
        i => i.code === this.$i18n.locale
      );
      this.$store.commit("SET_LANG", notInc[0].code);
      return local;
    }
  },
  methods: {
    sideToggle(val) {
      this.$store.commit("sideMenuToggle", val);
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.lang
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.side-menu {
  z-index: 999999;
  background: rgb(0, 0, 0, 85%);
  position: fixed;
  width: 100%;
  height: 100%;
  transition: 0.3s ease;
  .content {
    height: 100%;
    .routers {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        text-align: center;
        a {
          font-size: 48px;
          color: #fff;
        }
      }
    }
  }
  .close {
    background-image: url("/img/svg/header.svg");
    width: 53px;
    height: 53px;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 30px;
    right: 120px;
  }
}
</style>
