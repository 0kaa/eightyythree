<template>
  <main v-if="termsPage[0]" class="section terms-and-conditions">
    <div class="content">
      <div class="container">
        <h2 class="text-center title text-capitalize">
          {{
            $store.state.lang == "ar"
              ? termsPage[0].title.ar
              : termsPage[0].title.en
          }}
        </h2>
        <div
          class="description"
          v-html="
            $store.state.lang == 'ar'
              ? termsPage[0].description.ar
              : termsPage[0].description.en
          "
        ></div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "TermsAndConditions",
  computed: {
    termsPage() {
      if (this.$store.state.pages) {
        return this.$store.state.pages.filter(el => {
          return el.slug === "terms-and-conditions";
        });
      } else {
        return "";
      }
    }
  },
  head() {
    return {
      title:
        this.$store.state.lang === "ar"
          ? `الشروط والاحكام`
          : "EightyyThree - Terms And Conditions",
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
          content: "https://eightyythree.com/terms-and-conditions"
        },
        {
          name: "twitter:title",
          hid: "twitter:title",
          content:
            this.$store.state.lang === "ar"
              ? `الشروط والاحكام`
              : "EightyyThree - Terms And Conditions"
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
.terms-and-conditions {
  height: 100%;
  background-color: #6682e9;
  padding: 100px 0;
  .content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 62px;
    }
    .description {
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
