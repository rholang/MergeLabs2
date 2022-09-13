<template>
  <div class="tm-section tm-container tm-wrapper tm-grid-base">
    <div class="graphics-top">
      <graphics-home-dev-top class="graphics" />
    </div>
    <div class="content-top">
      <header class="header">
        <h2
          class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
        >
          Developers
        </h2>
        <div class="title tm-rf5 tm-bold tm-lh-title tm-title">
          What will you build?
        </div>
        <p
          class="subtitle offset tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
        >
          Developers in Cosmos are the pioneers of the new era of blockchain
          technology. Join a fast-growing token economy and build upon a secure
          and stable foundation.
        </p>
      </header>
      <div class="use-case tm-measure-narrower">
        <tm-crosshair />
        <h3 class="title tm-rf1 tm-lh-title tm-bold tm-title">
          Decentralized Finance Applications
        </h3>
        <p class="desc tm-rf-1 tm-rf0-m-up tm-lh-copy tm-measure-narrower">
          Create exchanges and marketplaces that allow anyone around the world
          to buy, trade, invest, and lend – even without a bank account.
        </p>
      </div>
      <div class="use-case tm-measure-narrower">
        <tm-crosshair />
        <h3 class="title tm-rf1 tm-lh-title tm-bold tm-title">
          Resilient, autonomous organizations
        </h3>
        <p class="desc tm-rf-1 tm-rf0-m-up tm-lh-copy tm-measure-narrower">
          Empower your community to organize and allocate resources to its
          members. Vote on impactful governance decisions.
        </p>
      </div>
      <div class="use-case tm-measure-narrower">
        <tm-crosshair />
        <h3 class="title tm-rf1 tm-lh-title tm-bold tm-title">
          Game economies, owned by players
        </h3>
        <p class="desc tm-rf-1 tm-rf0-m-up tm-lh-copy tm-measure-narrower">
          Create in-game assets that are available forever. Bring lasting value
          to gamers by letting them take their loot to another game or into the
          real world.
        </p>
      </div>
      <div class="card card-fundraising">
        <tm-link href="https://v1.cosmos.network/contributors">
          <div :strength="-5" class="card-inner" type="depth">
            <div
              :strength="-20"
              tag="h3"
              class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
            >
              Fundraising
            </div>
            <div :strength="-10" tag="figure" class="card__graphics">
              <div class="coins">
                <img class="coin" src="~/assets/images/coin-atom.svg" />
                <img class="coin" src="~/assets/images/coin-atom.svg" />
              </div>
            </div>
            <div :strength="-20">
              <p class="card__tagline tm-rf3 tm-lh-title tm-bold tm-title">
                Get a grant to build.
              </p>
              <p
                class="card__cta tm-rf-1 tm-rf0-m-up tm-lh-title tm-medium tm-muted tm-link"
              >
                Apply &rarr;
              </p>
            </div>
          </div>
        </tm-link>
      </div>
      <div class="card card-starport">
        <nuxt-link to="/starport" rel="noopener noreferrer">
          <div :strength="-5" class="card-inner" type="depth">
            <div
              :strength="-20"
              tag="h3"
              class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
            >
              Starport
            </div>
            <div :strength="-10" tag="figure" class="card__graphics">
              <div class="graphics">
                <graphics-dyson-sphere cssid="home_dev_sp">
                  <radialGradient
                    id="paint0_radial-home_dev_sp"
                    cx="0"
                    cy="0"
                    r="1"
                    gradient-units="userSpaceOnUse"
                    gradient-transform="translate(162.696 101.65) rotate(54.082) scale(516.589)"
                  >
                    <stop offset="0.260417" stop-color="#171717" />
                    <stop offset="0.727754" stop-color="#0F0F0F" />
                    <stop offset="1" stop-color="#04875E" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial-home_dev_sp"
                    cx="0"
                    cy="0"
                    r="1"
                    gradient-units="userSpaceOnUse"
                    gradient-transform="translate(469.001 526) rotate(-124.518) scale(307.059 514.113)"
                  >
                    <stop stop-color="#03D19F" />
                    <stop offset="0.520536" stop-color="#696969" />
                    <stop offset="1" stop-color="#171717" stop-opacity="0" />
                  </radialGradient>
                </graphics-dyson-sphere>
              </div>
            </div>
            <div :strength="-20">
              <p class="card__tagline tm-rf3 tm-lh-title tm-bold tm-title">
                Build a chain in minutes.
              </p>
              <p
                class="card__cta tm-rf-1 tm-rf0-m-up tm-lh-title tm-medium tm-muted tm-link"
              >
                Get started &rarr;
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="graphics-bottom">
      <graphics-home-dev-bottom class="graphics" />
    </div>
    <div class="title-bottom tm-rf5 tm-bold tm-lh-title tm-title">
      Join the network.
    </div>
    <div class="cards">
      <div class="card card-connect">
        <tm-link href="https://tutorials.cosmos.network/hello-world/tutorial/">
          <div :strength="-5" class="card-inner" type="depth">
            <div
              :strength="-10"
              tag="h3"
              class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
            >
              Connect
            </div>
            <div :strength="-20">
              <p
                class="card__tagline tm-rf2 tm-lh-title tm-bold tm-title tm-link-external"
              >
                Connect chains
              </p>
              <p class="card__desc tm-rf-1 tm-rf0-m-up tm-lh-copy">
                Grow the economy of your chain by connecting to Cosmos Hub
                services using IBC protocol.
              </p>
            </div>
            <div :strength="-10" class="card__icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="4.08823"
                  cy="27.0335"
                  r="3.08824"
                  stroke="white"
                  stroke-width="1.5"
                />
                <circle
                  cx="27.9115"
                  cy="27.0335"
                  r="3.08824"
                  stroke="white"
                  stroke-width="1.5"
                />
                <circle
                  cx="16.0003"
                  cy="4.97105"
                  r="3.08824"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M14.0242 8.49609L5.62305 23.4981"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M17.9756 8.49609L26.3767 23.4981"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M8.05859 27.0273H23.9409"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
        </tm-link>
      </div>
      <div class="card card-integrate">
        <tm-link href="https://discord.gg/vcExX9T">
          <div :strength="-5" class="card-inner" type="depth">
            <div
              :strength="-10"
              tag="h3"
              class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
            >
              Integrate
            </div>
            <div :strength="-20">
              <p
                class="card__tagline tm-rf2 tm-lh-title tm-bold tm-title tm-link-external"
              >
                Provide services
              </p>
              <p class="card__desc tm-rf-1 tm-rf0-m-up tm-lh-copy">
                Get support to bring users to Cosmos by providing services such
                as exchanges, wallets, and more.
              </p>
            </div>
            <div :strength="-10" class="card__icon">
              <svg
                width="34"
                height="32"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 30.6604L32 16.3083L17.0002 1.95703M17 30.6604L2 16.3083L17.0002 1.95703M17 30.6604L9.06396 16.3083L17.0002 1.95703M17 30.6604L24.9363 16.3083L17.0002 1.95703"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
        </tm-link>
      </div>
      <div class="card card-validate">
        <tm-link href="https://discord.gg/g8vYRa9zQJ">
          <div :strength="-5" class="card-inner" type="depth">
            <div
              :strength="-10"
              tag="h3"
              class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
            >
              Validate
            </div>
            <div :strength="-20">
              <p
                class="card__tagline tm-rf2 tm-lh-title tm-bold tm-title tm-link-external"
              >
                Become a validator
              </p>
              <p class="card__desc tm-rf-1 tm-rf0-m-up tm-lh-copy">
                Join the ranks of trusted and decentralized validator operators
                in the network and help secure the Interchain.
              </p>
            </div>
            <div :strength="-10" class="card__icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9346 14.7323C11.367 14.1059 10.0672 12.9521 9.25925 11.4698C8.45133 9.98762 8.18596 8.26992 8.50891 6.61299C8.83187 4.95605 9.72291 3.46376 11.0284 2.39346C12.3338 1.32316 13.9718 0.741955 15.6599 0.750084C17.348 0.758213 18.9804 1.35516 20.2754 2.43799C21.5705 3.52081 22.4471 5.02162 22.7541 6.68158C23.0611 8.34155 22.7792 10.0566 21.957 11.531C21.1349 13.0054 19.824 14.1466 18.2504 14.7579"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M12.9257 14.75H4.93394L16 30.6851L27.0661 14.75H18.0743L17.6082 14.8432C16.2165 15.1215 14.7835 15.1215 13.3918 14.8432L12.9257 14.75Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
        </tm-link>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.graphics-top,
.graphics-bottom,
.content-top,
.title-bottom,
.cards
  grid-column 1/-1

.graphics-top .graphics
  width 180%
  margin-left -76%
  margin-bottom -50%
  margin-top -26%
  z-index 1

.graphics-bottom .graphics
  z-index 0

.content-top
  position relative
  z-index 2
  display grid
  grid-template-columns repeat(auto-fit, minmax(16rem, 1fr))
  grid-gap 0 var(--grid-gap-x)

.header
  grid-column 1/-1
  margin-bottom var(--spacing-8)

  .overline,
  .subtitle
    position relative

  .overline
    writing-mode vertical-rl

  .title,
  .subtitle
    margin-top var(--spacing-6)

.use-case
  position relative
  margin-top var(--spacing-7)
  margin-bottom var(--spacing-7)

  .title
    margin-top var(--spacing-6)

  .desc
    margin-top var(--spacing-5)

.title-bottom
  position relative
  z-index 2
  text-align center

.cards
  display grid
  grid-template-columns repeat(auto-fit, minmax(16rem, 1fr))
  grid-gap 0 var(--grid-gap-x)
  margin-top var(--spacing-9)
  justify-items center

.card
  position relative
  max-width 28rem
  margin-top var(--grid-gap-x)
  display flex
  flex-direction column
  z-index 2

  a,
  &-inner
    flex 1 0 auto
    display flex
    flex-direction column

  &-inner
    justify-content space-between
    padding var(--spacing-7)
    background var(--fg)
    border-radius $border-radius-6

.content-top .card
  grid-row span 2

.card__title,
.card__cta,
.card__desc,
.cart__tagline
  position relative

.card__title
  z-index 1

.content-top .card__title
  max-width 6em

.cards .card__tagline,
.cards .card__icon
  margin-top var(--spacing-9)

.card__icon
  opacity 0.33
  transition opacity .2s $ease-out

  .card a:hover &,
  .card a:focus &
    opacity 1

.card__cta
  margin-top var(--spacing-7)

  .card a:hover &,
  .card a:focus &
    color var(--title)

.card__graphics
  width 100%
  max-width 22rem
  margin auto

.card-fundraising
  .card-inner
    background linear-gradient(180deg, var(--fg) 8%, #131D2B 100%)

  .coins
    position relative
    width 100%
    padding-bottom 82%

  .coin
    position absolute
    width 80%
    height auto

  .coin:first-child
    top 22%

  .coin:last-child
    top 16%
    left 28%
    transform rotate(19deg)

.card-starport
  .card-inner
    background linear-gradient(180deg, var(--fg) 45.31%, #002F32 100%)

  .graphics
    position relative
    width 100%
    padding-bottom 82%

  svg
    position absolute
    width 100%
    height auto
    transform rotate(24deg)
    margin-bottom var(--spacing-5)
    margin-top -23%

@media $breakpoint-medium
  .graphics-top
    grid-row 1
    grid-column 1/span 3
    .graphics
      width 530%
      margin-top 0
      margin-left -241%

  .content-top
    grid-row 1
    grid-template-columns repeat(8, 1fr)

  .header
    grid-column 2 / -1

  .use-case,
  .content-top .card
    grid-column span 4

@media $breakpoint-xl
  .graphics-top
    grid-column span 4
    .graphics
      margin-left -200%

  .content-top
    grid-column span 8
    grid-template-columns repeat(8, 1fr)

  .header
    grid-column 1 / -1

  .use-case,
  .content-top .card
    grid-column span 4
</style>
