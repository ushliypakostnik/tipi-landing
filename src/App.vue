<template>
  <main role="main">
    <div id="scroll" :class="{ parallax: isDesktop }" @scroll="onScroll">
      <div
        id="image"
        :class="{
          parallax__layer: isDesktop,
          'parallax__layer--back': isDesktop,
        }"
      />

      <section
        id="section1"
        :class="{
          parallax__layer: isDesktop,
          'parallax__layer--base': isDesktop,
        }"
      >
        <a href="mailto:foresthut@obp.ru" class="email">foresthut@obp.ru</a>
        <a href="tel:+72282652328" class="phone">+7 (228) 265-23-28</a>
        <div class="wrapper">
          <div>
            <div class="logo" />
            <h1>ТИПИ НА ЗАКАЗ</h1>
            <div class="decor">
              <div />
              <div />
              <div />
            </div>
            <h3>для комфортного отдыха в лесу</h3>
            <a
              href="https://t.me/forrestinforest"
              class="button"
              target="_blank"
              >ЗАКАЗАТЬ</a
            >
            <div class="links">
              <a href="https://vk.com/forrestinforest" target="_blank"
                >VKontakte</a
              >
              <span class="circle" />
              <a
                href="https://www.instagram.com/forrestinforest/"
                target="_blank"
                >Instagram</a
              >
            </div>
          </div>
        </div>
        <div class="wave" />
      </section>

      <section id="section2">
        <div class="wrapper">
          <div>
            <h2>Типи —</h2>
            <h3>традиционное переносное жилище индейцев Великих Равнин</h3>
            <br />
            <br />
            <h3>Если вы:</h3>
            <ul>
              <li>в душе настоящий индеец;</li>
              <li>
                часто выезжаете на природу с семьей или компанией друзей более,
                чем на два дня;
              </li>
              <li>резидент лесных фестивалей и опен-эйров;</li>
              <li>
                человек, который любит комфорт и не против ради этого по
                здоровому заморочиться,
              </li>
            </ul>
            <br />
            <h3>значит Типи — ваш выбор!</h3>
          </div>
        </div>
      </section>

      <section id="section3">
        <div class="pattern pattern--top" />
        <div class="pattern pattern--bottom" />
        <swiper class="swiper--auto-width" :options="options">
          <swiper-slide>
            <div class="slide--1" />
          </swiper-slide>
          <swiper-slide>
            <div class="slide--2" />
          </swiper-slide>
          <swiper-slide>
            <div class="slide--3" />
          </swiper-slide>
          <swiper-slide>
            <div class="slide--4" />
          </swiper-slide>
          <swiper-slide>
            <div class="slide--5" />
          </swiper-slide>
          <swiper-slide>
            <div class="slide--6" />
          </swiper-slide>

          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
        </swiper>
      </section>

      <section id="section4">
        <div class="wrapper">
          <div class="grid1">
            <div>
              <h3>Тепло</h3>
              <br />
              <p class="bold">Костер в палатке! О чем еще можно мечтать?</p>
              <br />
              <p>
                Всегда тепло, уютно, не нужно выходить, чтобы приготовить еду
                или сварить кофе. Можете быть уверены, что ночью не замерзнете,
                даже если на улице резко похолодает.
              </p>
            </div>
            <div>
              <h3>Удобно</h3>
              <br />
              <p class="bold">
                В типи с комфортом размещается до шести человек.
              </p>
              <br />
              <p>
                Идеально для отдыха семьей или небольшой компанией. Наконец-то
                хватит пространства для всех вещей и не нужно терпеть неудобства
                от тесноты.
              </p>
            </div>
            <div>
              <h3>Надежно</h3>
              <br />
              <p class="bold">
                Типи сшита из высокопрочной ткани — Оксфорд Рип Стоп.
              </p>
              <br />
              <p>
                Ей не страшна непогода и ее непросто порвать в отличие от
                тонкого материала туристической палатки. Конструкция типи
                такова, что в ней безопасно при порывах ветра, она устойчива в
                любую погоду.
              </p>
            </div>
          </div>
          <div class="center">
            <p>
              Типи — это не просто палатки, это целые дома. Почти такие же, как
              у индейцев, только делают их не из шкур оленей, а из прочных
              тканей с водостойкой пропиткой.
            </p>
            <br />
            <p>
              Внутри можно разводить костёр, готовить еду, сушить одежду и
              наблюдать сквозь окошко вентиляции за падающими звёздами!
            </p>
          </div>
        </div>
      </section>

      <section id="section5">
        <div id="back" />
        <div class="wrapper">
          <div class="grid2">
            <div>
              <div class="card">
                <div>
                  <h3>Легкий</h3>
                  <p class="price">15 000<span class="ru" /></p>
                </div>
                <ul>
                  <li>Материал тента — Оксфорд 240 Рип Стоп</li>
                  <li>Диаметр — 4 м</li>
                  <li>Цвет — оливковый</li>
                  <li>Внутренний полог</li>
                  <li>Набор оттяжек</li>
                  <li>Металлические колышки</li>
                </ul>
                <div class="button-wrapper">
                  <a
                    href="https://t.me/forrestinforest"
                    class="button"
                    target="_blank"
                    >ЗАКАЗАТЬ</a
                  >
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div>
                  <h3>Стандартный</h3>
                  <p class="price">75 000<span class="ru" /></p>
                </div>
                <ul>
                  <li>Материал тента — Оксфорд 600 Рип Стоп</li>
                  <li>Диаметр — 4 м</li>
                  <li>Цвет — серый</li>
                  <li>Внутренний полог</li>
                  <li>Набор оттяжек</li>
                  <li>Металлические колышки</li>
                  <li>Тренога для костра</li>
                </ul>
                <div class="button-wrapper">
                  <a
                    href="https://t.me/forrestinforest"
                    class="button"
                    target="_blank"
                    >ЗАКАЗАТЬ</a
                  >
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div>
                  <h3>Фестивальный</h3>
                  <p class="price">94 000<span class="ru" /></p>
                </div>
                <ul>
                  <li>Материал тента — Оксфорд 600 Рип Стоп</li>
                  <li>Диаметр — 6 м</li>
                  <li>Цвет — на выбор</li>
                  <li>Внутренний полог</li>
                  <li>Двойной набор оттяжек</li>
                  <li>Металлические колышки</li>
                  <li>Тренога для костра</li>
                  <li>Художественная роспись</li>
                </ul>
                <div class="button-wrapper">
                  <a
                    href="https://t.me/forrestinforest"
                    class="button"
                    target="_blank"
                    >ЗАКАЗАТЬ</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section6">
        <div class="pre-footer" />
      </section>

      <transition name="fade">
        <div
          v-if="isSun"
          class="sun"
          :class="{
            parallax__layer: isDesktop,
            'parallax__layer--sun': isDesktop,
          }"
        />
      </transition>

      <footer
        role="contentinfo"
        :class="{
          parallax__layer: isDesktop,
          'parallax__layer--bottom': isDesktop,
        }"
      >
        <div class="forest" />
        <div class="footer">
          <div class="footer__logo" />
          <div class="decor2">
            <div />
          </div>
          <div class="links">
            <a href="https://vk.com/forrestinforest" target="_blank"
              >VKontakte</a
            >
            <span class="circle" />
            <a href="https://www.instagram.com/forrestinforest/" target="_blank"
              >Instagram</a
            >
          </div>
        </div>
      </footer>
    </div>

    <transition name="fade">
      <div
        v-if="isBottom"
        class="bottom bottom--desktop"
        :style="`width: calc(100% - ${scrollbarWidth}px)`"
      >
        <a href="mailto:foresthut@obp.ru" class="bottom__email"
          >foresthut@obp.ru</a
        >
        <div class="bottom__copy">© ООО «Дом в лесу» 2020</div>
        <a href="tel:+72282652328" class="bottom__phone">+7 (228) 265-23-28</a>
      </div>

      <div class="bottom bottom--gadgets">
        <a href="mailto:foresthut@obp.ru" class="bottom__email"
          >foresthut@obp.ru</a
        >
        <a href="tel:+72282652328" class="bottom__phone">+7 (228) 265-23-28</a>
      </div>
    </transition>
  </main>
</template>

<script>
import ScreenHelper from '@/utils/screen-helper.js';

const options = {
  slidesPerView: 'auto',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {},
};

export default {
  name: 'App',

  data() {
    return {
      isBottom: false,
      isSun: false,
      scrollbarWidth: null,
      isDesktop: null,
      isTablet: null,
      isMobile: null,
      options,
    };
  },

  mounted() {
    this.setView();

    window.addEventListener('resize', this.onWindowResize, false);
    window.addEventListener('scroll', this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize, false);
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    setView() {
      this.isDesktop = ScreenHelper.isDesktop();
      this.isTablet = ScreenHelper.isTablet();
      this.isMobile = ScreenHelper.isMobile();
    },

    onScroll() {
      const scroll = document.getElementById('scroll');
      if (scroll) {
        if (this.isDesktop && scroll.scrollTop > 500) {
          if (!this.isBottom) {
            this.scrollbarWidth = ScreenHelper.getScrollbarWidth();
            this.isBottom = true;
          }
        } else if (this.isBottom) this.isBottom = false;

        if (this.isDesktop && scroll.scrollTop > 3300) {
          if (!this.isSun) {
            this.scrollbarWidth = ScreenHelper.getScrollbarWidth();
            this.isSun = true;
          }
        } else if (this.isSun) this.isSun = false;
      }
    },

    onWindowResize() {
      this.setView();
    },
  },
};
</script>

<style lang="stylus">
// Pure CSS parallax
.parallax
  perspective 1px
  perspective-origin-x 100%
  height 100vh
  overflow-x hidden
  overflow-y auto

.parallax__layer
  transform-origin-x 100%
  position absolute
  top 0
  right 0
  bottom 0
  left 0

.parallax__layer--base
  transform translateZ(0)

.parallax__layer--back
  transform translateZ(-1px) scale(2.1)

.parallax__layer--bottom
  z-index 300
  transform translateZ(-1px) translateY(4950 * $pixel) scale(2.1)

.parallax__layer--sun
  z-index 200
  transform translateZ(-3px) translateX(-1000 * $pixel) translateY(3750 * $pixel) scale(3)

section
  +$gadgets()
    overflow hidden

.wrapper
  padding 0 350 * $pixel

  +$gadgets()
    padding 0 20 * $pixel-gadgets

.button
  padding 10 * $pixel 80 * $pixel
  display inline-block
  color $colors.dark
  background $colors.yellow
  transition all $effects.duration
  border-radius 40 * $pixel
  box-shadow 0 4 * $pixel 10 * $pixel rgba($colors.dark, 0.5)
  $header("crow")

  +$gadgets()
    border-radius 40 * $pixel-gadgets
    padding 10 * $pixel-gadgets 80 * $pixel-gadgets
    box-shadow 0 4 * $pixel-gadgets 10 * $pixel-gadgets rgba($colors.dark, 0.5)

  &:hover
    color $colors.light
    background $colors.brown3
    box-shadow none

.decor
  display flex
  flex-direction row
  justify-content center
  align-items center
  margin 10 * $pixel 0

  +$gadgets()
    margin 10 * $pixel-gadgets 0

  > *
    background $colors.light

  > :nth-child(1)
  > :nth-child(3)
    width 100 * $pixel
    height 4 * $pixel

    +$gadgets()
      width 100 * $pixel-gadgets
      height 4 * $pixel-gadgets

  > :nth-child(2)
    margin 0 10 * $pixel
    width 10 * $pixel
    height 10 * $pixel
    border-radius 50%

    +$gadgets()
      margin 0 10 * $pixel-gadgets
      width 10 * $pixel-gadgets
      height 10 * $pixel-gadgets

.circle
  background $colors.light
  margin 0 10 * $pixel
  width 10 * $pixel
  height 10 * $pixel
  border-radius 50%

  +$gadgets()
    margin 0 20 * $pixel-gadgets !important
    width 10 * $pixel-gadgets
    height 10 * $pixel-gadgets

.decor2
  display flex
  justify-content center
  margin 10 * $pixel 0

  +$gadgets()
    margin 10 * $pixel-gadgets 0

  > *
    background $colors.light
    width 200 * $pixel
    height 4 * $pixel

    +$gadgets()
      width 200 * $pixel-gadgets
      height 4 * $pixel-gadgets

.links
  display flex
  align-items center
  justify-content center
  color $colors.light

.links a
  text-decoration underline
  transition color $effects.duration
  $text("apaches")

  &:hover
    color $colors.yellow
    text-decoration none

.links span
  display inline-block
  margin 0 1vw
  $header("crow")

.email,
.phone
  position absolute
  top 40 * $pixel
  color $colors.green
  $header("crow")

.email
  left 60 * $pixel

  +$gadgets()
    left 20 * $pixel-gadgets

.phone
  right 60 * $pixel

  +$gadgets()
    right 20 * $pixel-gadgets

main
  background $colors.light
  position relative

.swiper-button-prev
  background url("./assets/images/left.svg") center center no-repeat

.swiper-button-next
  background url("./assets/images/right.svg") center center no-repeat

$top-height = 900
$top-height--mobile = 650

#image
  position absolute
  top -100 * $pixel
  left 0
  right 0
  width 100%
  height $top-height * $pixel + 12vw
  background url("./assets/images/forest.jpg") center 66% no-repeat

  +$gadgets()
    top 0
    height $top-height--mobile * $pixel-gadgets
    background url("./assets/images/forest.jpg") center center no-repeat

#section1
  position relative
  height $top-height * $pixel
  color $colors.light
  background-size cover

  +$gadgets()
    height $top-height--mobile * $pixel-gadgets

#section1 h1
  text-shadow 0 (3 * $pixel) (3 * $pixel) rgba($colors.dark, 0.5)
  $header("navajo")

  +$gadgets()
    text-shadow 0 (3 * $pixel-gadgets) (3 * $pixel-gadgets) rgba($colors.dark, 0.5)

h3
  $header("aztecs")

#section4 h3
  color $colors.green

#section4 p
  $text("apaches")

.bold
  font-weight $font-weight.bold !important

.center
  margin 50 * $pixel auto 0
  max-width 60%
  padding 30 * $pixel
  border-radius 20 * $pixel
  border 3 * $pixel dashed $colors.green

  +$gadgets()
    margin 50 * $pixel-gadgets auto 0
    max-width 100%
    padding 30 * $pixel-gadgets
    border-radius 20 * $pixel-gadgets
    border 3 * $pixel-gadgets dashed $colors.green

#section2
  position relative
  color $colors.dark
  background $colors.light
  height 650 * $pixel

  +$gadgets()
    height 650 * $pixel-gadgets

#section3
  position relative
  background $colors.light
  height 800 * $pixel


  +$gadgets()
    height 700 * $pixel-gadgets

#section4
  position relative
  background $colors.light
  height 700 * $pixel
  padding 100 * $pixel 0

  +$gadgets()
    height 1100 * $pixel-gadgets
    padding 50 * $pixel-gadgets 0

#section5
  position relative
  z-index 500
  height 800 * $pixel
  padding 150 * $pixel 0

  +$gadgets()
    height 1500 * $pixel-gadgets
    padding 30 * $pixel-gadgets 0 0

#back
  position absolute
  width 100%
  height 100%
  left 0
  right 0
  top 0
  background url("./assets/images/back.svg") center center no-repeat
  background-size contain

  +$gadgets()
    display none

#section6
  position relative
  z-index 10
  background $colors.yellow
  height 900 * $pixel

  +$gadgets()
    display none

.swiper-container,
.swiper-wrapper,
.swiper-slide
  height 100%

.swiper-slide > div
  height: 100%

  &.slide--1
    background url("./assets/images/slide1.jpg") center center no-repeat
    background-size cover

    +$mobile()
      background url("./assets/images/slide1--mobile.jpg") center center no-repeat
      background-size cover

  &.slide--2
    background url("./assets/images/slide2.jpg") center bottom no-repeat
    background-size cover

    +$mobile()
      background url("./assets/images/slide2--mobile.jpg") center center no-repeat
      background-size cover

  &.slide--3
    background url("./assets/images/slide3.jpg") center bottom no-repeat
    background-size cover

    +$mobile()
      background url("./assets/images/slide3--mobile.jpg") center center no-repeat
      background-size cover

  &.slide--4
    background url("./assets/images/slide4.jpg") center center no-repeat
    background-size cover

    +$mobile()
      background url("./assets/images/slide4--mobile.jpg") center center no-repeat
      background-size cover

  &.slide--5
    background url("./assets/images/slide5.jpg") center center no-repeat
    background-size cover

    +$mobile()
      background url("./assets/images/slide5--mobile.jpg") center center no-repeat
      background-size cover

  &.slide--6
    background url("./assets/images/slide6.jpg") center center no-repeat
    background-size cover

    +$mobile()
      background url("./assets/images/slide6--mobile.jpg") center center no-repeat
      background-size cover

.pattern
  position absolute
  z-index 2000
  width 100%
  height 30 * $pixel
  left 0
  right 0

  +$gadgets()
    height 16 * $pixel-gadgets

  &--top
    top -5 * $pixel
    background url("./assets/images/pattern--top.svg") center top repeat-x
    background-size contain

    +$gadgets()
      background url("./assets/images/pattern-mobile--top.svg") top center repeat-x
      background-size contain
      top -3 * $pixel-gadgets

  &--bottom
    bottom -5 * $pixel
    background url("./assets/images/pattern--bottom.svg") center bottom repeat-x
    background-size contain

    +$gadgets()
      background url("./assets/images/pattern-mobile--bottom.svg") bottom center repeat-x
      background-size contain
      bottom -3 * $pixel-gadgets

.grid1
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-gap 0 80 * $pixel

  +$gadgets()
    grid-template-columns repeat(1, 1fr)
    grid-gap 40 * $pixel-gadgets

.grid2
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-gap 0 80 * $pixel

  +$gadgets()
    grid-template-columns repeat(1, 1fr)
    grid-gap 40 * $pixel-gadgets

.card
  display flex
  flex-direction column
  justify-content space-between
  background $colors.light
  height 550 * $pixel
  border-radius 20 * $pixel
  padding 20 * $pixel 30 * $pixel 30 * $pixel
  box-shadow 0 4 * $pixel 30 * $pixel rgba($colors.dark, 0.5)

  +$gadgets()
    background #fff
    display block
    height auto
    border-radius 20 * $pixel-gadgets
    padding 20 * $pixel-gadgets 30 * $pixel-gadgets 30 * $pixel-gadgets
    box-shadow 0 4 * $pixel-gadgets 20 * $pixel-gadgets rgba($colors.dark, 0.5)

  h3
    text-align center
    color $colors.green

  .button-wrapper
    width 100%
    text-align center

  ul
    height 280 * $pixel

    +$gadgets()
      margin-bottom 30 * $pixel-gadgets
      height auto

    > li
      position relative
      padding-left 30 * $pixel
      margin-bottom 10 * $pixel
      $text("apaches")

      +$gadgets()
        padding-left 30 * $pixel-gadgets
        margin-bottom 10 * $pixel-gadgets

    > li::before
      position absolute
      left 0
      top 4 * $pixel
      content ""
      display inline-block
      margin-right 10 * $pixel
      width 52 * $pixel * 0.75 * 0.5
      height 36 * $pixel * 0.75 * 0.5
      background url("./assets/images/check.svg") center center no-repeat
      background-size cover

      +$gadgets()
        top 4 * $pixel-gadgets
        margin-right 10 * $pixel-gadgets
        width 52 * $pixel-gadgets * 0.75 * 0.5
        height 36 * $pixel-gadgets * 0.75 * 0.5

.price
  text-align center
  color $colors.green
  $text("papago")

  +$gadgets()
    margin-bottom 10 * $pixel-gadgets

.ru
  display inline-block
  margin-left 10 * $pixel
  background url("./assets/images/ru.svg") center center no-repeat
  background-size contain
  width 28 * $pixel
  height 30 * $pixel
  transform translateY(2 * $pixel)

  +$gadgets()
    margin-left 10 * $pixel-gadgets
    width 14 * $pixel-gadgets * 1.25
    height 15 * $pixel-gadgets * 1.25
    transform translateY(0)

#section2 h2
  margin-bottom 10 * $pixel
  color $colors.green
  $header("aleuts")
  font-weight $font-weight.bold

  +$gadgets()
    margin-bottom 10 * $pixel-gadgets

#section2 h3
  $text("comanche")

#section2 ul
  margin-top 20 * $pixel

  +$gadgets()
    margin-top 20 * $pixel-gadgets

#section2 ul > li
  position relative
  margin-bottom 20 * $pixel
  padding-left 60 * $pixel
  $text("hopi")

  +$gadgets()
    margin-bottom 20 * $pixel-gadgets
    padding-left 40 * $pixel-gadgets

#section2 ul > li::before
  position absolute
  left 0
  top 0
  content ""
  display inline-block
  margin-right 20 * $pixel
  width 52 * $pixel * 0.75
  height 36 * $pixel * 0.75
  background url("./assets/images/check.svg") center center no-repeat
  background-size cover

  +$gadgets()
    margin-right 20 * $pixel-gadgets
    width 52 * $pixel-gadgets * 0.5
    height 36 * $pixel-gadgets * 0.5

#section1 .wrapper,
#section2 .wrapper
  height 100%
  display flex
  align-items center
  justify-content center

#section1 .wrapper
  text-align center

#section5 .wrapper
  position relative
  z-index 99999

#section1 .button
  margin-top 40 * $pixel
  margin-bottom 20 * $pixel

  +$gadgets()
    margin-top 20 * $pixel-gadgets
    margin-bottom 20 * $pixel-gadgets

.logo
  width 280 * $pixel
  height 280 * $pixel
  margin 0 auto 30 * $pixel
  border-radius 50%
  background url("./assets/images/logo.svg") center center no-repeat
  background-size cover
  box-shadow 0 (3 * $pixel) (3 * $pixel) rgba($colors.dark, 0.3)

  +$gadgets()
    width 180 * $pixel-gadgets
    height 180 * $pixel-gadgets
    margin 0 auto 30 * $pixel-gadgets
    box-shadow 0 (3 * $pixel-gadgets) (3 * $pixel-gadgets) rgba($colors.dark, 0.3)

$wave-height = 105
$wave-height--mobile = 30

.wave
  width 100vw
  height $wave-height * $pixel
  transform translateY(3 * $pixel + -1 * $wave-height * $pixel)
  background url("./assets/images/wave.svg") center bottom no-repeat
  background-size cover

  +$gadgets()
    background url("./assets/images/wave--gadgets.svg") center bottom no-repeat
    background-size cover
    height $wave-height--mobile * $pixel-gadgets
    transform translateY(-1 * $wave-height--mobile * $pixel-gadgets) scale(1.1)

footer
  position relative
  z-index 30
  height 1200 * $pixel

  .email,
  .phone
    top auto
    bottom 60 * $pixel
    color $colors.light

  +$gadgets()
    height 600 * $pixel-gadgets

$forest-height = 10vw
$forest-height--mobile = 30vw

.pre-footer
  width 100vw
  height $forest-height * 2
  background $colors.yellow
  transform translateY(-200 * $pixel)

  +$gadgets()
    display none

.forest
  width 100vw
  height $forest-height
  margin-top -1 * $forest-height
  margin-left -1px
  margin-right -1px
  transform translateY(4 * $pixel)
  background url("./assets/images/footer.svg") center bottom no-repeat
  background-size contain

  +$gadgets()
    height $forest-height--mobile
    margin-left 0
    margin-right 0
    transform translateY(4 * $pixel-gadgets)

.footer
  height "calc(100% - %s)" % $forest-height
  background $colors.green

  +$gadgets()
    padding-top 80 * $pixel-gadgets
    height "calc(100% - %s)" % $forest-height--mobile

.footer__logo
  width 180 * $pixel
  height 180 * $pixel
  margin 0 auto 40 * $pixel
  transform translateY(4 * $pixel)
  border-radius 50%
  background url("./assets/images/logo--mono.svg") center center no-repeat
  background-size cover

  +$gadgets()
    width 180 * $pixel-gadgets
    height 180 * $pixel-gadgets
    margin 0 auto 40 * $pixel-gadgets
    transform translateY(0)

.sun
  width 100%
  height 300 * $pixel
  background url("./assets/images/sun.svg") center center no-repeat
  background-size contain

  +$gadgets()
    display none

.bottom
  background $colors.dark
  width 100%
  position absolute
  left 0
  right 0
  bottom 0
  display flex
  text-align center
  justify-content space-between
  padding (10 * $pixel) (50 * $pixel)

  &--gadgets
    display none

    +$gadgets()
      display block
      text-align left

  &--desktop
    +$gadgets()
      display none

  +$gadgets()
    position relative
    z-index 100
    padding (10 * $pixel-gadgets) (20 * $pixel-gadgets)

  &__email,
  &__phone
    color $colors.light
    $header("crow")

  &__phone
    +$gadgets()
      float right

  &__copy
    color $colors.light
    text-align center
    $header("crow")
</style>
