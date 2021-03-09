<template>
  <main class="contactus">
    <BaseContactUs></BaseContactUs>
    <BaseContactUsInfo></BaseContactUsInfo>
  </main>
</template>

<script>
export default {
  name: "Contact",
  head() {
    return {
      title:
        this.$store.state.lang === "ar"
          ? `اتصل بنا`
          : "EightyyThree - Contact us",
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
          content: "https://eightyythree.com/contact-us"
        },
        {
          name: "twitter:title",
          hid: "twitter:title",
          content:
            this.$store.state.lang === "ar"
              ? `اتصل بنا`
              : "EightyyThree - Contact us"
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
