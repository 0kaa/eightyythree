<template>
  <div id="app">
    <BaseNavbar></BaseNavbar>
    <!-- <no-ssr> -->
    <BaseSideMenu></BaseSideMenu>
    <!-- </no-ssr> -->
    <nuxt keep-alive />
    <BaseFooter></BaseFooter>
  </div>
</template>
<script>
import BaseNavbar from "~/components/base/BaseNavbar.vue";
import BaseSideMenu from "~/components/base/BaseSideMenu.vue";
import BaseFooter from "~/components/base/BaseFooter.vue";
export default {
  name: "App",
  components: {
    BaseNavbar,
    BaseSideMenu,
    BaseFooter
  },

  async fetch() {
    await this.$axios
      .get("api/v1/pages")
      .then(res => {
        this.$store.commit("pages", res.data.data);
      })
      .catch(err => console.log(err));
    await this.$axios
      .get("/api/v1/settings")
      .then(res => {
        this.$store.commit("settings", res.data.data);
      })
      .catch(err => console.log(err));
  },
  head() {
    return {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/fav.ico" },
        {
          rel: "stylesheet",
          hid: "font",
          href: `${
            this.$store.state.lang === "ar"
              ? "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
              : ""
          }`
        }
      ]
    };
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
