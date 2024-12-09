<template>
  <!--proven-product section starts-->
  <section class="proven-product">
    <div class="wrapper">
      <figure class="proven-product-left">
        <img :src="ProvenProductImage.src" alt="Mobile" />
      </figure>
      <div class="proven-product-right">
        <h2 class="first-letter-caps">proven product range</h2>
        <p class="para-for-h2 single-letter-caps">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          eaque voluptates aliquam sint doloribus voluptatibus.
        </p>
        <div class="button-div">
          <a
            href="#FIXME"
            class="button orange-button"
            target="_self"
            title="Read More"
            >read more</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<!--proven-product section end-->
<script>
import ProvenProductImage from '@/assets/images/05.jpg';

export default {
  data() {
    return {
      ProvenProductImage,
    };
  },
};
</script>
