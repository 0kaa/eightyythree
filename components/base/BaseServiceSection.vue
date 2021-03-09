<template>
  <div
    class="service"
    :style="`background-color:${service.background_color}`"
    :class="mobile ? 'mobile' : ''"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-7 align-self-center">
          <h3 v-if="service.title" class="title">
            {{
              $store.state.lang == "ar" ? service.title.ar : service.title.en
            }}
          </h3>
          <div
            class="service-list"
            v-html="
              $store.state.lang == 'ar'
                ? service.description.ar
                : service.description.en
            "
          ></div>
        </div>
        <div class="col-md-5 text-right align-self-center">
          <img
            :src="service.main_image"
            :alt="service.image"
            class="img-fluid right-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSection",
  props: {
    service: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      mobile: null
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
  }
};
</script>

<style lang="scss" scoped>
.service {
  height: 100%;
  padding: 70px 0;
  background-image: url("/img/Particles.png");
  background-attachment: fixed;
  overflow: hidden;
  transition: all 500ms ease;
  &.mobile {
    .title {
      font-size: 62px;
    }
  }
  .title {
    font-size: 96px;
    transition: all 500ms ease;
  }
  .service-list {
    height: 0;
    max-height: 0px;
    opacity: 0;
    transition: all 500ms ease;
    overflow: hidden;
    li {
      font-size: 24px;
    }
  }
  img.right-img {
    transition: all 500ms ease;
  }
  &:hover {
    img.right-img {
      transform: scale(1.2) rotate(10deg);
    }
    .title {
      font-size: 48px;
    }
    .service-list {
      max-height: 550px;
      height: 100%;
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
