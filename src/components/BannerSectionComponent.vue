<template>
  <!-- banner section start -->
  <section class="banner">
    <div class="wrapper">
      <figure class="main-image">
        <img :src="mainImage.src" alt="Banner" />
      </figure>
      <div class="banner-content">
        <h1>
          <a
            href="./index.html"
            title="Gadget Site"
            target="_self"
            class="first-letter-caps"
          >
            gggdget sites
          </a>
        </h1>
        <p class="first-letter-caps">website design template</p>
        <div class="banner-buttons">
          <a
            href="#FIXME"
            class="button orange-button"
            target="_self"
            title="About Us"
          >
            about us
          </a>
          <a
            href="#FIXME"
            class="button blue-button"
            target="_self"
            title="More Info"
          >
            more info
          </a>
        </div>
        <figure class="banner-content-image">
          <img :src="bannerContentImage.src" alt="Banner Content Image" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import mainImage from '@/assets/images/mbr.jpg';
import bannerContentImage from '@/assets/images/mbr-7.jpg';

export default {
  data() {
    return {
      mainImage,
      bannerContentImage,
    };
  },
};
</script>
