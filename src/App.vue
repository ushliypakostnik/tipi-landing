<template>
  <main role="main">
    <div class="parallax visible--desktop">
      <div id="image" class="parallax__layer parallax__layer--back" />

      <section id="section1" class="parallax__layer parallax__layer--base">
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
            <h3>значит Типи — ваш выбор!</h3>
          </div>
        </div>

        <div class="pre-footer" />
      </section>

      <footer
        role="contentinfo"
        class="parallax__layer parallax__layer--bottom"
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
        <div class="bottom">
          <a href="mailto:foresthut@obp.ru" class="bottom__email"
            >foresthut@obp.ru</a
          >
          <div class="bottom__copy">© ООО «Дом в лесу» 2020</div>
          <a href="tel:+72282652328" class="bottom__phone"
            >+7 (228) 265-23-28</a
          >
        </div>
      </footer>
    </div>

    <div class="visible--gadgets">
      <div id="image" />

      <section id="section1">
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
            <h3>значит Типи — ваш выбор!</h3>
          </div>
        </div>
      </section>

      <footer role="contentinfo">
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
        <div class="bottom">
          <a href="mailto:foresthut@obp.ru" class="bottom__email"
            >foresthut@obp.ru</a
          >
          <div class="bottom__copy">© ООО «Дом в лесу» 2020</div>
          <a href="tel:+72282652328" class="bottom__phone"
            >+7 (228) 265-23-28</a
          >
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="stylus">
// Global styles
@import '~/src/assets/stylus/main.styl';

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

.visible--gadgets
  display  none

  +$gadgets()
    display block

.visible--desktop
  +$gadgets()
    display none

.parallax__layer--base
  transform translateZ(0)

.parallax__layer--back
  transform translateZ(-1px) scale(2.1)

.parallax__layer--bottom
  transform translateZ(-1px) translateY(2300 * $pixel) scale(2.1)

.wrapper
  padding 0 20vw

.button
  padding 0.25vw 3vw
  display inline-block
  color $colors.dark
  background $colors.yellow
  transition all $effects.duration
  $header("aztecs")

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

$top-height = 850

#image
  position absolute
  top 0
  left 0
  right 0
  width 100%
  height $top-height * $pixel + 10vw
  background url("./assets/images/forest.jpg") center bottom no-repeat

#section1
  position relative
  height $top-height * $pixel
  color $colors.light
  background-size cover

#section1 h1
  text-shadow 0 (3 * $pixel) (3 * $pixel) rgba($colors.dark, 0.5)
  $header("navajo")

#section1 h3
  $header("aleuts")

#section2
  position relative

  color $colors.dark
  background $colors.light
  height 700 * $pixel

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
  $text("comanche")
  font-weight 400

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

#section2 .wrapper
  transform translateY(-70 * $pixel)

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
  margin-left -1px
  margin-right -1px
  transform translateY(2 * $pixel)
  background url("./assets/images/wave.svg") center bottom no-repeat
  background-size contain

footer
  position relative
  height 950 * $pixel

  .email,
  .phone
    top auto
    bottom 60 * $pixel
    color $colors.light

$forest-height = 10vw

.pre-footer
  width 100vw
  height $forest-height
  background $colors.light

  +$gadgets()
    display none

.forest
  width 100vw
  height $forest-height
  margin-top -1 * $forest-height
  margin-left -1px
  margin-right -1px
  transform translateY(2 * $pixel)
  background url("./assets/images/footer.svg") center bottom no-repeat
  background-size contain

.footer
  height "calc(100% - %s)" % $forest-height
  background $colors.green

.footer__logo
  width 170 * $pixel
  height 170 * $pixel
  margin 0 auto 40 * $pixel
  border-radius 50%
  background url("./assets/images/logo--mono.svg") center center no-repeat
  background-size cover

.bottom
  background $colors.dark
  width 100%
  position absolute
  left 0
  right 0
  bottom 560 * $pixel
  display flex
  text-align center
  justify-content space-between
  padding (20 * $pixel) (110 * $pixel)

  +$gadgets()
    bottom 0

  &__email,
  &__phone
    color $colors.light
    $header("crow")

  &__copy
    color $colors.light
    text-align center
    $header("crow")
</style>
