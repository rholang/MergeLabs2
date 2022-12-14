<template>
  <div class="tm-section section-form">
    <div class="tm-wrapper tm-container bottom">
      <div class="container">
        <transition name="fade" mode="out-in">
          <div
            v-if="state === 'success'"
            key="success"
            class="bottom__state tm-rf0 tm-lh-copy"
          >
            <div class="bottom__get-notified">Almost there&hellip;</div>
            <div class="bottom__state__success">
              Check your inbox and confirm your email address
            </div>
          </div>
          <div
            v-else-if="state === 'error'"
            key="error"
            class="bottom__state tm-rf0 tm-lh-copy"
          >
            <div class="bottom__get-notified">Something went wrong</div>
            <div class="bottom__state__error">
              Uh oh! Refresh the page and try again.
            </div>
          </div>
          <div v-else key="default" class="bottom__form">
            <label
              class="bottom__get-notified tm-rf1 tm-bold tm-lh-copy"
              for="field-email"
            >
              Get Cosmos updates
            </label>
            <form
              :action="url"
              method="POST"
              target="_blank"
              rel="noreferrer noopener"
              @submit.prevent="actionSubmitEmail"
            >
              <div class="bottom__form__input">
                <input
                  id="field-email"
                  v-model="email"
                  name="fields[email]"
                  class="bottom__form__input__input tm-rf1 tm-lh-copy"
                  type="email"
                  placeholder="Your email"
                  required="required"
                />
                <button type="submit" class="bottom__form__input__button">
                  <icon-arrow-right
                    class="bottom__form__input__icon"
                    @click="actionSubmitEmail"
                  />
                  <span class="sr-only">Submit</span>
                </button>
              </div>
            </form>
            <p class="bottom__footnote tm-measure tm-rf-1 tm-lh-copy">
              Unsubscribe at any time.
              <tm-link href="https://v1.cosmos.network/privacy"
                >Privacy policy</tm-link
              >
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

export default {
  components: {
    IconArrowRight,
  },
  data() {
    return {
      email: null,
      state: 'default',
      url: 'https://app.mailerlite.com/webforms/submit/l6o8i3',
      formData: {
        callback: 'jQuery1830831967939860198_1594856018285',
        'ml-submit': '1',
        ajax: '1',
        guid: '6ca22b31-4124-e926-cf4f-272ff9f44ec3',
        _: '1594856022563',
      },
    }
  },
  methods: {
    actionSubmitEmail() {
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
          'fields[email]': this.email,
          ...this.formData,
        }),
      }
      fetch(this.url, options)
        .then(() => {
          this.state = 'success'
        })
        .catch(() => {
          this.state = 'error'
        })
    },
  },
}
</script>

<style lang="stylus" scoped>
.fade-enter-active
  transition all .4s ease-out

.fade-leave-active
  transition all .2s ease-out

.fade-enter
  opacity 0
  transform translateY(1rem)

.fade-enter-to
  opacity 1
  transform translateY(0)

.fade-leave
  opacity 1
  transform scale(1)

.fade-leave-to
  opacity 0
  transform scale(.96)

.bottom
  .container
    display flex
    justify-content center
  &__get-notified
    display block
    margin-bottom var(--spacing-5)
    text-align center
  &__state
    margin var(--spacing-7) auto
    &__success
      color var(--gray-600)
    &__error
      color #FF4C52
  &__form
    margin var(--spacing-7) auto
    max-width: $max-width['7']
    width 100%
    &__input
      display flex
      position relative
      align-items center
      justify-content center
      &__button
        position absolute
        right 0
        width 4rem
        appearance none
        background none
        border none
        padding var(--spacing-5)
        border-radius $border-radius-3
        cursor pointer
        outline none
        &:hover,
        &:focus
          .bottom__form__input__icon
            fill var(--white)
            transform scale(1.05)
      &__icon
        display block
        height 2rem
        fill var(--gray-600)
        transition fill .15s ease-out, transform .15s ease-out
      &__input
        outline none
        width 100%
        border none
        border-radius $border-radius-3
        padding var(--spacing-5) 4rem var(--spacing-5) var(--spacing-6)
        transition color 0.15s ease-out, background 0.15s ease-out
        background var(--white-100)
        color var(--white)
        .light-mode &
          background var(--trans-gray-50)
          color var(--black)
        &::placeholder
          color var(--gray-600)
          transition color 0.15s ease-out
        &:hover
          background var(--trans-gray-50)
          &:not(:focus)::placeholder
            color var(--gray-800)
        &:focus
          background var(--trans-gray-50)
  &__footnote
    text-align center
    margin-top var(--spacing-5)
    center()
    color var(--white-500)

    .light-mode &
      color var(--gray-400)

@media screen and (max-width: 576px)
  .bottom
    &__form
      &__input
        &__icon
          height 1.5rem
</style>
