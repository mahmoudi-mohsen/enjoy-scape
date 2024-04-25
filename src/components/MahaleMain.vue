<template>
  <div class="home">
    <div class="bg-opacity">
      <div class="bg-home"></div>
      <div class="bg-home2"></div>
    </div>
    <div class="banner banner-main">
      <video controls autoplay loop>
        <source :src="require(`@/assets/images/mahale/Sequence 01_1.mp4`)" type="video/mp4">
      </video>
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
          <li>
            <span>آدرس:</span>
            <span>
            تهران، خیابان دماوند، تهران نو، ميدان امامت، خ قاسم زاده، تقاطع ابوريحان.
          </span>
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
            <span>لوکیشن:</span>
            <span>
              <a style="position: relative;z-index: 55"
                 href="https://www.google.com/maps/dir//35.7110634,51.4930954/@35.7106572,51.4927798,19.67z"
                 target="_blank">
                <img style="width: 20px" :src="require(`@/assets/images/icons/loc.png`)" alt=""/>
            </a>
            </span>
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
      </div>
    </div>
    <div class="game-details">
      <h2 style="color: var(--color-1)">سناریو بازی</h2>
      <div>
        <p>حسادت با زندگی آدم چه کارایی که نمیکنه....</p>
        <p>باورم نمیشه دخترک پاک و معصوم من، تبدیل به همچین موجود وحشتناکی شده باشه...!</p>
        <p>لعنت به این
          <span style="color: var(--color-1)">محله خبیث</span>
          و آدمای حسودش
        </p>
        <p>تنها امید من به شماست، زودتر خودتون رو به پهلوون محل برسونید.</p>
      </div>
      <h2 style="color: var(--color-1);margin-top: 16px">قوانین بازی</h2>
      <div>
        <p>1.لطفا بموقع در محل لوکیشن حاضر باشید.تاخیر بیش 15 دقیقه به منزله کنسل شدن سانس شما میباشد</p>
        <p>2.لباس راحت بپوشید</p>
        <p>3.به محض رسیدن به محل لوکیشن وسیله نقلیه خود(موتور یا ماشین) را پارک کنید و با مجموعه تماس بگیرید</p>
        <p>4.در صورت در دسترس نبودن شماره هاى تماس لطفا از طريق واتس اپ به شماره (٠٩١٠٧٧٠٧٩٢٩) پيام ارسال كنيد يا با
          شماره ثابت تماس بگيريد (٠٢١٧٧٤١٤٣٩٤)</p>
        <p>5.هنگام ورود و خروج محل بازی سکوت را رعایت کنید و از تجمع و کشیدن سیگار جلوی درب و داخل کوچه کاملا خود داری
          کنید</p>
      </div>
      <img class="image-side-1" :src="require(`@/assets/images/mahale/1768059.jpg`)" alt="">
    </div>
    <div class="reserve-game">
      <h2 style="color: var(--color-1);margin-top: 64px">رزرو سانس</h2>
      <h3 style="color: var(--color-1);margin-top: 64px">برای رزرو با شماره های زیر تماس بگیرید:</h3>
      <h2 style="color: var(--color-1);margin-top: 64px;text-align: center">
        <span> ٠٩١٠٧٧٠٧٩٢٩ </span>
        <span>  09368749174 </span>
        <span>  ٠٢١٧٧٤١٤٣٩٤ </span>
      </h2>

<!--      <div class="timing-table table has-top-margin">-->
<!--        <table>-->
<!--          <tr>-->
<!--            <td>-->
<!--              <div>یکشنبه</div>-->
<!--              <div>1401/06/۱۲</div>-->
<!--            </td>-->
<!--            <td class="not-available">-->
<!--              <input type="radio" name="choose_time" id="t1" value=""/>-->
<!--              <label for="t1">بازه ساعتی ۹ - ۱۲</label>-->
<!--            </td>-->
<!--            <td class="not-available">-->
<!--              <input type="radio" name="choose_time" id="t2" value=""/>-->
<!--              <label for="t2">بازه ساعتی ۱۲ - ۱۵</label>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 1}" @click="chooseTime = 1">-->
<!--              <input type="radio" name="choose_time" id="t3" value=""/>-->
<!--              <label for="t3">بازه ساعتی ۱۵ - ۱۸</label>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 2}" @click="chooseTime = 2">-->
<!--              <input type="radio" name="choose_time" id="t4" value=""/>-->
<!--              <label for="t4">بازه ساعتی ۱۸ - ۲۱</label>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td>-->
<!--              <div>دوشنبه</div>-->
<!--              <div>1401/06/۱۳</div>-->
<!--            </td>-->
<!--            <td class="not-available">-->
<!--              <input type="radio" name="choose_time" id="t5" value=""/>-->
<!--              <label for="t5">بازه ساعتی ۹ - ۱۲</label>-->
<!--            </td>-->
<!--            <td class="not-available">-->
<!--              <input type="radio" name="choose_time" id="t6" value=""/>-->
<!--              <label for="t6">بازه ساعتی ۱۲ - ۱۵</label>-->
<!--            </td>-->
<!--            <td class="not-available">-->
<!--              <input type="radio" name="choose_time" id="t7" value=""/>-->
<!--              <label for="t7">بازه ساعتی ۱۵ - ۱۸</label>-->
<!--            </td>-->
<!--            <td class="not-available">-->
<!--              <input type="radio" name="choose_time" id="t8" value=""/>-->
<!--              <label for="t8">بازه ساعتی ۱۸ - ۲۱</label>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td>-->
<!--              <div>سه شنبه</div>-->
<!--              <div>1401/06/۱۴</div>-->
<!--            </td>-->
<!--            <td class="not-available">-->
<!--              <input type="radio" name="choose_time" id="t9" value=""/>-->
<!--              <label for="t9">بازه ساعتی ۹ - ۱۲</label>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 3}" @click="chooseTime = 3">-->
<!--              <input type="radio" name="choose_time" id="t10" value=""/>-->
<!--              <label for="t10">بازه ساعتی ۱۲ - ۱۵</label>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 4}" @click="chooseTime = 4">-->
<!--              <input type="radio" name="choose_time" id="t11" value=""/>-->
<!--              <label for="t11">بازه ساعتی ۱۵ - ۱۸</label>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 5}" @click="chooseTime = 5">-->
<!--              <input type="radio" name="choose_time" id="t12" value=""/>-->
<!--              <label for="t12">بازه ساعتی ۱۸ - ۲۱</label>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td>-->
<!--              <div>چهارشنبه</div>-->
<!--              <div>1401/06/۱۵</div>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 6}" @click="chooseTime = 6">-->
<!--              <input type="radio" name="choose_time" id="t13" value=""/>-->
<!--              <label for="t13">بازه ساعتی ۹ - ۱۲</label>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 7}" @click="chooseTime = 7">-->
<!--              <input type="radio" name="choose_time" id="t14" value=""/>-->
<!--              <label for="t14">بازه ساعتی ۱۲ - ۱۵</label>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 8}" @click="chooseTime = 8">-->
<!--              <input type="radio" name="choose_time" id="t15" value=""/>-->
<!--              <label for="t15">بازه ساعتی ۱۵ - ۱۸</label>-->
<!--            </td>-->
<!--            <td class="available" :class="{'active':chooseTime === 9}" @click="chooseTime = 9">-->
<!--              <input type="radio" name="choose_time" id="t16" value=""/>-->
<!--              <label for="t16">بازه ساعتی ۱۸ - ۲۱</label>-->
<!--            </td>-->
<!--          </tr>-->
<!--        </table>-->
<!--      </div>-->
<!--      <button class="reserve-button">رزرو کن</button>-->
    </div>
    <div class="game-pic">
      <h2 style="color: var(--color-1);margin-top: 16px">تصاویر بازی</h2>
      <div class="game-pic-wrapper">
        <div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/01.jpg`)" alt=""/>
          </div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/02.jpg`)" alt=""/>
          </div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/10.jpg`)" alt=""/>
          </div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/12.jpg`)" alt=""/>
          </div>
        </div>
        <div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/11.jpg`)" alt=""/>
          </div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/05(1).jpg`)" alt=""/>
          </div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/06(2).jpg`)" alt=""/>
          </div>
        </div>
        <div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/07(1).jpg`)" alt=""/>
          </div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/08.jpg`)" alt=""/>
          </div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/09.jpg`)" alt=""/>
          </div>
          <div class="row-space">
            <img   :src="require(`@/assets/images/mahale/13.jpg`)" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chooseTime: 1,
    }
  }
}
</script>
