<template>
  <main class="section lets-talk" :style="mobile ? 'height:100vh;' : ''">
    <div class="content">
      <div class="container">
        <h2 class="text-center title">
          {{ $t("links.lets_talk.title") }}
        </h2>
        <form>
          <div class="form-group">
            <input
              v-model="form.name"
              type="text"
              class="form-control"
              :placeholder="$t('name')"
            />
            <div v-if="errors.name" class="error-feedback">
              {{ errors.name[0] }}
            </div>
          </div>
          <div class="form-group">
            <input
              v-model="form.company"
              type="text"
              class="form-control"
              :placeholder="$t('my_company')"
            />
            <div v-if="errors.company" class="error-feedback">
              {{ errors.company[0] }}
            </div>
          </div>
          <div class="form-group">
            <input
              v-model="form.country"
              type="text"
              class="form-control"
              :placeholder="$t('country')"
            />
            <div v-if="errors.country" class="error-feedback">
              {{ errors.country[0] }}
            </div>
          </div>
          <div class="form-group">
            <input
              v-model="form.city"
              type="text"
              class="form-control"
              :placeholder="$t('city')"
            />
            <div v-if="errors.city" class="error-feedback">
              {{ errors.city[0] }}
            </div>
          </div>
          <div class="form-group">
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              :placeholder="$t('email')"
            />
            <div v-if="errors.email" class="error-feedback">
              {{ errors.email[0] }}
            </div>
          </div>
          <div class="form-group">
            <input
              v-model="form.phone"
              type="number"
              class="form-control"
              :placeholder="$t('phone')"
            />
            <div v-if="errors.phone" class="error-feedback">
              {{ errors.phone[0] }}
            </div>
          </div>
          <div class="form-group">
            <textarea
              v-model="form.message"
              class="form-control"
              rows="6"
              :placeholder="$t('leave_message')"
            ></textarea>
            <div v-if="errors.message" class="error-feedback">
              {{ errors.message[0] }}
            </div>
          </div>
          <div
            v-if="Object.keys(errors).length >= 1"
            class="alert alert-danger text-center"
            role="alert"
          >
            {{ errorMessage }}
          </div>
          <div
            v-if="sucss"
            class="alert alert-success text-center"
            role="alert"
          >
            {{ sucssMessage }}
          </div>
          <button type="submit" class="my-btn" @click.prevent="formRequest">
            {{ $t("send") }}
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "LetsTalk",
  data() {
    return {
      mobile: null,
      form: {
        name: "",
        email: "",
        company: "",
        country: "",
        city: "",
        phone: "",
        message: ""
      },
      sucssMessage: "",
      errorMessage: "",
      errors: {},
      sucss: false
    };
  },

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
  methods: {
    formRequest() {
      this.$axios
        .post("/api/v1/contacts", this.form, {
          headers: {
            lang: this.$store.state.lang
          }
        })
        .then(response => {
          this.errors = {};
          this.errorMessage = "";
          this.sucssMessage = response.data.message;
          this.sucss = true;
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.errorMessage = error.response.data.message;
          this.sucssMessage = "";
          this.sucss = false;
        });
    }
  },
  head() {
    return {
      title:
        this.$store.state.lang === "ar" ? `لنتحدث` : "EightyyThree - Lets Talk",
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
          content: "https://eightyythree.com/lets-talk"
        },
        {
          name: "twitter:title",
          hid: "twitter:title",
          content:
            this.$store.state.lang === "ar"
              ? `لنتحدث`
              : "EightyyThree - Lets Talk"
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
.lets-talk {
  height: 100%;
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
    input,
    textarea {
      font-size: 28px;
    }
    input {
      border-radius: 50px;
      padding: 10px 30px;
    }
    .error-feedback {
      padding: 10px 30px 0;
      font-size: 22px;
    }
    textarea {
      border-radius: 20px;
      padding: 20px 30px;
    }
  }
}
</style>
