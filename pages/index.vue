<template>
  <main v-show="filterSections && filterSections.length" class="home">
    <div
      v-for="(section, index) in filterSections"
      :key="section.id"
      class="section"
      :class="section.animation_image"
      :style="`background-color:${section.background_color};`"
    >
      <div class="container">
        <div class="row">
          <div
            class="align-self-center"
            :class="index == 0 ? 'col-md-12 order-2' : 'col-md-7'"
          >
            <h3 class="title" :class="mobile ? 'mobile' : ''">
              {{
                $store.state.lang == "ar" ? section.title.ar : section.title.en
              }}
            </h3>
            <div
              class="description"
              v-html="
                $store.state.lang == 'ar'
                  ? section.description.ar
                  : section.description.en
              "
            ></div>
          </div>
          <div
            class="align-self-center"
            :class="index == 0 ? 'col-md-12 order-1' : 'col-md-5'"
          >
            <img
              :src="section.main_image"
              alt="aboutusimg"
              class="img-fluid"
              :class="index == 0 ? 'first-img' : 'right-img'"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.mobile = true;
    } else {
      // false for not mobile device
      this.mobile = false;
    }
  },
  data() {
    return {
      mobile: null
    };
  },
  computed: {
    sections() {
      return this.$store.getters.sections;
    },
    filterSections() {
      if (this.sections) {
        return this.sections.filter(el => {
          return el.in_home === 1;
        });
      } else {
        return [];
      }
    }
  },
  methods: {
    strip(html) {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
    }
  },
  head() {
    return {
      title:
        this.$store.state.lang === "ar"
          ? `الصفحة الرئيسية`
          : "EightyyThree - Home",
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
          content: "https://eightyythree.com"
        },
        {
          name: "twitter:title",
          hid: "twitter:title",
          content:
            this.$store.state.lang === "ar"
              ? `الصفحة الرئيسية`
              : "EightyyThree - Home"
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
.section:first-child {
  text-align: center;
  img {
    width: 180px;
  }
}
.section:last-child {
  .title.mobile {
    font-size: 48px;
  }
}
</style>
