<template>
  <main class="services">
    <header>
      <h2 class="title text-center">{{ $t("links.services.title") }}</h2>
    </header>
    <div class="sections">
      <BaseServiceSection
        v-for="(service, i) in services"
        :id="`${service.slug}`"
        :key="i"
        :service="service"
        >{{ service }}</BaseServiceSection
      >
    </div>
  </main>
</template>

<script>
import BaseServiceSection from "~/components/base/BaseServiceSection";
export default {
  name: "Services",
  components: {
    BaseServiceSection
  },
  computed: {
    services() {
      return this.$store.getters.services;
    }
  },
  mounted() {
    this.scrollIntoElement();
  },
  methods: {
    scrollIntoElement() {
      if (this.$route.hash) {
        const el = document.querySelector(this.$route.hash);
        if (el) {
          window.scroll({
            top:
              el.getBoundingClientRect().top -
              document.querySelector(".navbar").offsetHeight,
            behavior: "smooth"
          });
        }
      }
    }
  },
  head() {
    return {
      title:
        this.$store.state.lang === "ar" ? `الخدمات` : "EightyyThree - Services",
      meta: [
        {
          name: "keywords",
          hid: "keywords",
          content:
            this.$store.state.lang === "ar"
              ? ",إنشاء علامة تجارية,التسويق الإبداعي,الخدمات الرقمية,الانتاج,تصميم مواقع الويب,تصميم داخلي,تنظيم الموتمرات والمعارض"
              : "branding,creative marketing,digital services,production,websites design,interior design,events"
        },
        { property: "og:type", hid: "og:type", content: "other" },
        { property: "og:locale", hid: "og:locale", content: "ar-sa" },
        {
          property: "og:locale:alternate",
          hid: "og:locale:alternate",
          content: "en-us"
        },
        {
          property: "og:locale:alternate",
          hid: "og:locale:alternate",
          content: "ar-sa"
        },
        {
          property: "og:url",
          hid: "og:url",
          content: "https://eightyythree.com/services"
        },
        {
          name: "twitter:title",
          hid: "twitter:title",
          content:
            this.$store.state.lang === "ar"
              ? `الخدمات`
              : "EightyyThree - Services"
        },
        {
          name: "twitter:site",
          hid: "twitter:site",
          content: "@eightyy_three"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.services {
  background-color: #ebd13f;
  height: 100%;
  .title {
    padding: 100px 0 50px;
  }
}
</style>
