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
              <span>/</span>
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
                  <p class="price">21 500<span class="ru" /></p>
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
                  <p class="price">24 750<span class="ru" /></p>
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
                  <p class="price">от 40 000<span class="ru" /></p>
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
            <span>/</span>
            <a href="https://www.instagram.com/forrestinforest/" target="_blank"
              >Instagram</a
            >
          </div>
        </div>
      </footer>
    </div>

    <transition name="fade">
      <div
        v-if="isBottom && isDesktop"
        class="bottom"
        :style="`width: calc(100% - ${scrollbarWidth}px)`"
      >
        <a href="mailto:foresthut@obp.ru" class="bottom__email"
          >foresthut@obp.ru</a
        >
        <div class="bottom__copy">© ООО «Дом в лесу» 2020</div>
        <a href="tel:+72282652328" class="bottom__phone">+7 (228) 265-23-28</a>
      </div>

      <div v-else-if="!isDesktop" class="bottom">
        <a href="mailto:foresthut@obp.ru" class="bottom__email"
          >foresthut@obp.ru</a
        >
        <div class="bottom__copy">© ООО «Дом в лесу» 2020</div>
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
      if (this.isDesktop && scroll.scrollTop > 900) {
        if (!this.isBottom) {
          this.scrollbarWidth = ScreenHelper.getScrollbarWidth();
          this.isBottom = true;
        }
      } else if (this.isBottom) this.isBottom = false;
    },

    onWindowResize() {
      this.setView();
    },
  },
};
</script>

<style lang="stylus">
// Import fonts
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

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
  transform translateZ(-1px) translateY(4950 * $pixel) scale(2.1)

.wrapper
  padding 0 17vw

.button
  padding 0.25vw 3vw
  display inline-block
  color $colors.dark
  background $colors.yellow
  transition all $effects.duration
  $header("crow")

  &:hover
    color $colors.light
    background $colors.brown3

.decor
  display flex
  flex-direction row
  justify-content center
  align-items center
  margin 0.75vw 0 0.5vw

  > *
    background $colors.light

  > :nth-child(1)
  > :nth-child(3)
    width 7vw
    height 0.1vw

  > :nth-child(2)
    margin 0 0.5vw
    width 0.5vw
    height 0.5vw
    border-radius 50%

.decor2
  display flex
  justify-content center
  margin 0.75vw 0 0.5vw

  > *
    background $colors.light
    width 20vw
    height 0.1vw

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

.phone
  right 60 * $pixel

main
  background $colors.light
  position relative

.swiper-button-prev
  background url("./assets/images/left.svg") center center no-repeat

.swiper-button-next
  background url("./assets/images/right.svg") center center no-repeat

$top-height = 900

#image
  position absolute
  top -100 * $pixel
  left 0
  right 0
  width 100%
  height $top-height * $pixel + 12vw
  background url("./assets/images/forest.jpg") center bottom no-repeat

  +$gadgets()
    height 900 * $pixel
    background url("./assets/images/forest.jpg") center bottom no-repeat
    background-size cover

#section1
  position relative
  height $top-height * $pixel
  color $colors.light
  background-size cover

#section1 h1
  text-shadow 0 (3 * $pixel) (3 * $pixel) rgba($colors.dark, 0.5)
  $header("navajo")

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

#section2
  position relative
  color $colors.dark
  background $colors.light
  height 650 * $pixel

#section3
  position relative
  background $colors.light
  height 800 * $pixel

#section4
  position relative
  background $colors.light
  height 700 * $pixel
  padding 100 * $pixel 0

#section5
  position relative
  z-index 20
  height 800 * $pixel
  padding 150 * $pixel 0

#back
  position absolute
  width 100%
  height 100%
  left 0
  right 0
  top 0
  background url("./assets/images/back.svg") center center no-repeat
  background-size contain

#section6
  position relative
  z-index 10
  background $colors.yellow
  height 900 * $pixel

  +$gadgets()
    height 400 * $pixel
    margin-top -200 * $pixel

.swiper-container,
.swiper-wrapper,
.swiper-slide
  height 100%

.swiper-slide > div
  height: 100%

  &.slide--1
    background url("./assets/images/slide1.jpg") center center no-repeat
    background-size cover

  &.slide--2
    background url("./assets/images/slide2.jpg") center bottom no-repeat
    background-size cover

  &.slide--3
    background url("./assets/images/slide3.jpg") center bottom no-repeat
    background-size cover

  &.slide--4
    background url("./assets/images/slide4.jpg") center center no-repeat
    background-size cover

  &.slide--5
    background url("./assets/images/slide5.jpg") center center no-repeat
    background-size cover

  &.slide--6
    background url("./assets/images/slide6.jpg") center center no-repeat
    background-size cover

.pattern
  position absolute
  z-index 2000
  width 100%
  height 30 * $pixel
  left 0
  right 0

  &--top
    top -5 * $pixel
    background url("./assets/images/pattern--top.svg") center center repeat-x
    background-size contain

  &--bottom
    bottom -5 * $pixel
    background url("./assets/images/pattern--bottom.svg") center center repeat-x
    background-size contain

.grid1
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-gap 0 80 * $pixel

.grid2
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-gap 0 80 * $pixel

.card
  display flex
  flex-direction column
  justify-content space-between
  background $colors.light
  height 550 * $pixel
  border-radius 20 * $pixel
  padding 20 * $pixel 30 * $pixel 30 * $pixel
  box-shadow 0 4 * $pixel 30 * $pixel rgba($colors.dark, 0.5)

  h3
    text-align center
    color $colors.green

  .button-wrapper
    width 100%
    text-align center

  ul
    height 280 * $pixel

    > li
      position relative
      padding-left 30 * $pixel
      margin-bottom 10 * $pixel
      $text("apaches")

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

.price
  text-align center
  color $colors.green
  $text("papago")

.ru
  display inline-block
  margin-left 10 * $pixel
  background url("./assets/images/ru.svg") center center no-repeat
  background-size contain
  width 28 * $pixel
  height 30 * $pixel
  transform translateY(2 * $pixel)

#section2 h2
  margin-bottom 10 * $pixel
  color $colors.green
  $header("aleuts")
  font-weight $font-weight.bold

#section2 h3
  $text("comanche")

#section2 ul
  margin-top 20 * $pixel

#section2 ul > li
  margin-bottom 20 * $pixel
  $text("hopi")

#section2 ul > li::before
  content ""
  display inline-block
  margin-right 20 * $pixel
  width 52 * $pixel * 0.75
  height 36 * $pixel * 0.75
  background url("./assets/images/check.svg") center center no-repeat
  background-size cover

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

.logo
  width 280 * $pixel
  height 280 * $pixel
  margin 0 auto 30 * $pixel
  border-radius 50%
  background url("./assets/images/logo.svg") center center no-repeat
  background-size cover
  box-shadow 0 (3 * $pixel) (3 * $pixel) rgba($colors.dark, 0.3)

$wave-height = 5.4vw

.wave
  width 100vw
  height $wave-height
  margin-top -1 * $wave-height
  transform translateY(3 * $pixel)
  background url("./assets/images/wave.svg") center bottom no-repeat
  background-size cover

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
    height 700 * $pixel

$forest-height = 10vw

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

.footer
  height "calc(100% - %s)" % $forest-height
  background $colors.green

.footer__logo
  width 180 * $pixel
  height 180 * $pixel
  margin 0 auto 40 * $pixel
  transform translateY(4 * $pixel)
  border-radius 50%
  background url("./assets/images/logo--mono.svg") center center no-repeat
  background-size cover

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

  +$gadgets()
    position relative
    z-index 100

  &__email,
  &__phone
    color $colors.light
    $header("crow")

  &__copy
    color $colors.light
    text-align center
    $header("crow")
</style>
