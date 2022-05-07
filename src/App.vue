<template>
  <main role="main">
    <section id="section1">
      <div class="wrapper">
        <div>
          <h1>ТИПИ НА ЗАКАЗ</h1>
          <h3>для комфортного отдыха в лесу</h3>
          <a href="#" class="button">Заказать</a>
        </div>
      </div>
    </section>
    <section id="section2">
      <div class="wrapper">
        <div>
          <h2>Типи —</h2>
          <h3>традиционное переносное жилище<br />индейцев Великих Равнин</h3>
          <h3>Если вы:</h3>
          <ul>
            <li>в душе настоящий индеец;</li>
            <li>
              часто выезжаете на природу с семьей или компанией друзей более,
              чем на два дня;
            </li>
            <li>резидент лесных фестивалей и опен-эйров;</li>
            <li>
              человек, который любит комфорт и не против ради этого по здоровому
              заморочиться,
            </li>
          </ul>
          <h3>значит Типи — ваш выбор!</h3>
        </div>
      </div>
    </section>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

.wrapper
  padding 0 20vw

#section1
  height 900px
  color $colors.katya
  background $colors.dark

#section1 .wrapper
  height 100%
  display flex
  align-items center

#section2
  height 600px
  color $colors.katya
  background $colors.sasha

#section2 .wrapper
  height 100%
  display flex
  align-items center
</style>
