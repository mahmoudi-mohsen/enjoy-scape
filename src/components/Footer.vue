<template>
  <div class="footer">
    <img class="footer-banner" :src="require(`@/assets/images/mahale/footer.gif`)" alt=""/>
    <div class="footer-wrapper">
      <div class="logo-section">
        <kinesis-container>
          <kinesis-element
              :strength="20"
              type="depth">
            <img :src="require(`@/assets/images/enjoy-logo.png`)" alt=""/>
          </kinesis-element>
        </kinesis-container>
      </div>
      <div class="site-info">
        <ul>
          <li>
            <span>
              <i class="far fa-map-marker-alt"></i>
              آدرس:
            </span>
            <span>
              <a style="position: relative;z-index: 55"
                 href="https://www.google.com/maps/dir//35.7110634,51.4930954/@35.7106572,51.4927798,19.67z"
                 target="_blank">
              تهران، خیابان دماوند، تهران نو، ميدان امامت، خ قاسم زاده، تقاطع ابوريحان.
              </a>
            </span>
          </li>
          <li>
            <span>
              <i class="far fa-phone"></i>
              تلفن:
            </span>
            <span>
              <a href="tel:+982177414394">
              ٠٢١٧٧٤١٤٣٩٤
              </a>
            </span>
          </li>
          <li>
            <span>
              <i class="far fa-mobile"></i>
              موبایل:
            </span>
            <span>
              <a href="https://wa.me/989107707929">
              ٠٩١٠٧٧٠٧٩٢٩ - 09368749174
              </a>
            </span>
          </li>
          <li>
            <span>
              <i class="fab fa-instagram"></i>
              اینستاگرام:
            </span>
            <span>
              <a href="https://www.instagram.com/enjoy_escape" target="_blank">Enjoy_Scape</a>
            </span>
          </li>
          <li>
            <span>
              <i class="far fa-info-circle"></i>
              از فرار لذت ببرید 😈
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
  components: {
    KinesisContainer,
    KinesisElement
  }
}
</script>
