<template>
  <div class="home">
    <div class="bg-opacity">
      <div class="bg-home"></div>
      <div class="bg-home2"></div>
    </div>
    <div class="banner banner-main">
      <carousel :paginationEnabled="false" :centerMode="true"
                :touchDrag="true" paginationPosition="top-overlay" paginationColor="gray"
                :perPageCustom="[[1600,1],[1000,1],[740,1],[600,1],[400,1],[300,1]]"
                :rtl="true"
                :autoplay="true" :loop="true" :autoplayTimeout="5000">
        <slide>
          <img class="slideImg" :src="require(`@/assets/images/mahale/04.jpg`)"
               alt=""/>
          <img class="slideImg2" :src="require(`@/assets/images/mahale/enjoy-2.jpg`)"
               alt=""/>
        </slide>
        <slide>
          <img class="slideImg" :src="require(`@/assets/images/mahale/03.jpg`)"
               alt=""/>
          <img class="slideImg2" :src="require(`@/assets/images/mahale/11-1.jpg`)"
               alt=""/>
        </slide>
      </carousel>
    </div>
    <div class="info-graph">
      <div class="info-graph-wrapper">
        <div class="info-graph-right">
          <kinesis-container>
            <kinesis-element
                :strength="20"
                type="depth">
              <img :src="require(`@/assets/images/enjoy-logo.png`)" alt=""/>
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="info-graph-left">
          <p>مجموعه
            <span class="enjoy">Enjoy Escape</span>
            فعالیت خود را در سال 1400 با بازی محله خبیث آغاز کرد. هدف ما تولید بازی های
            استاندارد و با سبک جدید می باشد. در نهایت امیدواریم با تجربه بازی های ما از اتاق فرار لذت
            ببرید.</p>
          <ul>
            <li>
              <div class="pie animate" style="--p:100;">1</div>
              <p> بازی های ما</p>
            </li>
            <li>
              <div class="pie animate" style="--p:100;">1500+</div>
              <p>بازیکن های ما</p>
            </li>
            <li>
              <div class="pie animate" style="--p:80;">9 از 10</div>
              <p>درجه سختی</p>
            </li>
          </ul>
          <img class="eye-watching" :src="require(`@/assets/images/mahale/aaa.gif`)" alt=""/>
        </div>
      </div>
    </div>
    <div class="parallax-main" style="position: relative">
      <div class="parallax"></div>
      <img class="scary-girl" v-show="girlPosition === true" :src="require(`@/assets/images/mahale/Untitled-1.png`)"
           alt="" @mouseenter="girlPosition = false;playSound = true"/>
      <img class="scary-girl-2" v-show="girlPosition === false" :src="require(`@/assets/images/mahale/Untitled-1.png`)"
           alt="" @mouseenter="girlPosition = true;playScream = true"/>
      <audio controls :autoplay="playSound" style="display: none">
        <source :src="require(`@/assets/images/mahale/Creepy-girl-laugh.mp3`)" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <audio controls :autoplay="playScream" style="display: none">
        <source :src="require(`@/assets/images/mahale/Woman-scream.mp3`)" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <div class="parallax-text">
        <p>وَ مِنْ شَرِّ حٰاسِدٍ إِذٰا حَسَدَ</p>
      </div>
    </div>
    <div class="mahale-section">
      <div class="mahale-right-side">
        <div class="card card0">
        </div>
      </div>
      <div class="mahale-left-side">
        <p>اتاق فرار (محله خبیث) اولین بازی از مجموعه
          <span style="color: var(--color-1)">Enjoy Escape</span>
          هست که در محله خیابان دماوند تهران واقع شده است.</p>
        <ul>
          <li>
            <span>ژانر:</span>
            <span>وحشت, دلهره آور, تئاتر تعاملی</span>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="dist-01">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="8" result="noise" seed="0"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-02">
                  <feTurbulence id="turbulence" baseFrequency="0.2" numOctaves="8" result="noise" seed="1"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-03">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-04">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"
                                type="FractalNoise"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/>
                </filter>
              </defs>
            </svg>
          </li>
          <li>
            <span>درجه سختی:</span>
            <span>9 از 10</span>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="dist-01">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="8" result="noise" seed="0"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-02">
                  <feTurbulence id="turbulence" baseFrequency="0.2" numOctaves="8" result="noise" seed="1"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-03">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-04">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"
                                type="FractalNoise"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/>
                </filter>
              </defs>
            </svg>
          </li>
          <li>
            <span>تعداد نفرات:</span>
            <span>4 تا 8 نفر</span>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="dist-01">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="8" result="noise" seed="0"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-02">
                  <feTurbulence id="turbulence" baseFrequency="0.2" numOctaves="8" result="noise" seed="1"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-03">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-04">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"
                                type="FractalNoise"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/>
                </filter>
              </defs>
            </svg>
          </li>
          <li>
            <span>مدت زمان بازی:</span>
            <span>100 دقیقه</span>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="dist-01">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="8" result="noise" seed="0"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-02">
                  <feTurbulence id="turbulence" baseFrequency="0.2" numOctaves="8" result="noise" seed="1"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-03">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-04">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"
                                type="FractalNoise"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/>
                </filter>
              </defs>
            </svg>
          </li>
          <li>
            <span>شماره تلفن:</span>
            <span>٠٢١٧٧٤١٤٣٩٤</span>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="dist-01">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="8" result="noise" seed="0"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-02">
                  <feTurbulence id="turbulence" baseFrequency="0.2" numOctaves="8" result="noise" seed="1"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-03">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-04">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"
                                type="FractalNoise"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/>
                </filter>
              </defs>
            </svg>
          </li>
          <li>
            <span>شماره موبایل:</span>
            <span>٠٩١٠٧٧٠٧٩٢٩</span>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="dist-01">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="8" result="noise" seed="0"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-02">
                  <feTurbulence id="turbulence" baseFrequency="0.2" numOctaves="8" result="noise" seed="1"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-03">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"/>
                  <feConvolveMatrix in="noise" order="3" result="snoise"
                                    kernelMatrix="
         0  -1   0
        -1   5  -1
         0  -1   0
      "/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="snoise" scale="6"/>
                </filter>
                <filter id="dist-04">
                  <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="6" result="noise" seed="2"
                                type="FractalNoise"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6"/>
                </filter>
              </defs>
            </svg>
          </li>
        </ul>
        <button class="more-info" @click="changeRoute()">اطلاعات بیشتر...

        </button>

      </div>
    </div>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from "vue-kinesis";

export default {
  components: {
    KinesisContainer,
    KinesisElement
  },
  data() {
    return {
      girlPosition: true,
      playSound: false,
      playScream: false,
    }
  },
  methods: {
    changeRoute() {
      this.$router.push('/mahaleKhabis')
    }
  }
}
</script>
