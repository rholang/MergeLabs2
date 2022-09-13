<template>
  <main>
    <div class="section-hero section-first">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text">
          <div
            class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-muted"
          >
            Starport
          </div>
          <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title">
            The fastest way to a production blockchain.
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Starport offers everything you need to build, test, and launch your
            blockchain with a decentralized worldwide community.
          </p>
          <div class="btn-group">
            <tm-button
              to-link="external"
              href="https://gitpod.io/#https://github.com/tendermint/starport/tree/master"
              size="l"
              class="btn"
              >Open in browser
              <span class="icon__right">&#8599;</span></tm-button
            >
            <tm-button
              to-link="external"
              href="https://github.com/tendermint/starport/blob/develop/docs/1%20Introduction/2%20Install.md"
              size="l"
              variant="text"
              class="btn"
              >Install
              <span class="icon__right icon__down">&#8595;</span></tm-button
            >
          </div>
        </div>
        <div class="demo tm-section">
          <youtube-lite
            video="NmytpuD33lY"
            title="Starport v0.15: IBC Hello, world!"
            params="controls=0&modestbranding=2&rel=0&enablejsapi=1"
            style="
              background-image: url('https://i.ytimg.com/vi/NmytpuD33lY/maxresdefault.jpg');
            "
          />
        </div>
      </div>
      <div class="hero-graphics">
        <graphics-starport-hero class="graphics" />
      </div>
    </div>

    <div class="section-intro tm-section tm-container tm-wrapper tm-grid-base">
      <div class="top">
        <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
          What is it?
        </div>
        <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
          The toolkit of leading blockchains.
        </h1>
      </div>
      <div class="mid logos-list">
        <img src="~static/logos/binance.svg" alt="Binance Logo" />
        <img src="~static/logos/terra-money.svg" alt="Terra Money Logo" />
        <img src="~static/logos/crypto-com.svg" alt="Crypto.com Logo" />
        <img src="~static/logos/cosmos-hub.svg" alt="Cosmos Hub Logo" />
        <img src="~static/logos/thorchain.svg" alt="Thorchain Logo" />
        <img src="~static/logos/okex.svg" alt="OKEx Logo" />
      </div>
      <div class="bottom grid-col-2">
        <div class="col">
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Starport is built on top of
            <tm-link
              href="https://github.com/cosmos/cosmos-sdk"
              class="tm-medium"
              >Cosmos SDK</tm-link
            >, the world’s most popular blockchain framework. Starport
            accelerates chain development by scaffolding everything you need so
            you can focus on business logic.
          </p>
        </div>
        <div class="col">
          <div class="stat">
            <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
              95
              <div class="col">
                <span class="tm-rf4 tm-lh-title tm-bold super">%</span
                ><span class="tm-rf4 tm-lh-title tm-bold super">faster</span>
              </div>
            </div>
            <p class="stat-subtitle tm-rf0 tm-lh-title">
              From idea to production code.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="stat tm-title">
            <div class="stat-value tm-rf7 tm-lh-title tm-bold">
              4
              <div class="col">
                <span class="tm-rf4 tm-lh-title tm-bold"
                  >of top 20 blockchains</span
                >
              </div>
            </div>
            <p class="stat-subtitle tm-rf0 tm-lh-title">
              Built with Cosmos SDK –
              <tm-link
                href="https://coingecko.com"
                class="tm-link-external tm-medium"
                >coingecko.com</tm-link
              >
            </p>
          </div>
        </div>
        <div class="col">
          <div class="stat">
            <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
              7 sec
            </div>
            <p class="stat-subtitle tm-rf0 tm-lh-title">
              Transactions confirmed in seconds.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-cli tm-section tm-container tm-wrapper">
      <div class="top tm-grid-base">
        <div class="graphics">
          <div class="graphics__inner">
            <graphics-starport-cli class="graphics__item" />
          </div>
        </div>
        <div class="text">
          <div class="step tm-rf0 tm-medium tm-lh-title tm-overline">01</div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Build your blockchain in minutes.
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Use Starport CLI to scaffold and assemble a production-ready
            blockchain in minutes.
          </p>
          <tm-button
            to-link="external"
            href="https://gitpod.io/#https://github.com/tendermint/starport/tree/master"
            size="l"
            variant="text"
            class="btn"
            >Launch CLI <span class="icon__right">&#8599;</span></tm-button
          >
        </div>
      </div>
      <div class="tm-grid-base">
        <div class="bottom grid-col-2">
          <div class="col">
            <tm-crosshair />
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-title">
              Create a blockchain in a single command.
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Skip past weeks of writing boilerplate. Create data types that are
              unique to your chain with powerful scaffolding features.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-title">
              Start a dev server with hot reload and state persistence.
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Experiment with your chain in dev mode through token creation,
              token allocation, module configuration, and more.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-title">
              Mint a brand new token and send it to the Cosmos Hub.
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Interchain token transfers are native to Starport. Use the
              built-in IBC relayer to send assets and data to other chains.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4 class="title tm-rf1 tm-bold tm-lh-title tm-title">
              Design state-of-the-art interfaces with UI generation.
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Develop your frontend quicker with automatically generated APIs in
              JavaScript, TypeScript, and Vue.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-cloud tm-section tm-container tm-wrapper">
      <div class="top tm-grid-base">
        <div class="text">
          <div class="step tm-rf0 tm-medium tm-lh-title tm-overline">02</div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Preview your blockchain online.
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Use Starport Cloud to continuously deploy your blockchain
            application in a preview environment.
          </p>
          <tm-button size="l" variant="text" disabled class="btn"
            >Coming soon</tm-button
          >
        </div>
        <div class="graphics">
          <div class="graphics__inner">
            <graphics-starport-cloud class="graphics__item" />
          </div>
        </div>
      </div>
      <div class="tm-grid-base">
        <div class="bottom grid-col-2">
          <div class="col">
            <tm-crosshair />
            <h4
              class="title tm-rf1 tm-bold tm-lh-title tm-title measure-narrower"
            >
              Instant blockchain deployment
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Run a single command to deploy a preview of your blockchain live.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4
              class="title tm-rf1 tm-bold tm-lh-title tm-title measure-narrower"
            >
              Front-end deployment
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Easily preview and develop your client-side app, powered by a
              deployed blockchain.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4
              class="title tm-rf1 tm-bold tm-lh-title tm-title measure-narrower"
            >
              Interchain infrastructure
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Send and receive transactions between blockchains with IBC
              protocol using your own relayer.
            </p>
          </div>
          <div class="col">
            <tm-crosshair />
            <h4
              class="title tm-rf1 tm-bold tm-lh-title tm-title measure-narrower"
            >
              Developer tools
            </h4>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Test and diagnose problems with your chain in a production
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-production">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text center">
          <div class="step tm-rf0 tm-medium tm-lh-title tm-overline">03</div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Take your blockchain to production.
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
            Use Starport Network to coordinate the launch of your blockchain
            with anyone in the world.
          </p>
          <tm-button size="l" variant="text" disabled class="btn"
            >Coming soon</tm-button
          >
        </div>
      </div>
      <div class="graphics">
        <div class="graphics__inner">
          <graphics-starport-starport-network class="graphics__item" />
        </div>
      </div>
    </div>

    <div class="section-sdk tm-section tm-container tm-wrapper">
      <div class="tm-grid-base">
        <div class="text">
          <div class="step tm-rf0 tm-medium tm-lh-title tm-overline">
            Cosmos SDK
          </div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title">
            Build a part of the new economy.
          </h1>
          <tm-button
            to-link="external"
            href="https://cosmos.network/sdk"
            size="l"
            variant="text"
            class="btn"
            >Learn more <span class="icon__right">&#8594;</span></tm-button
          >
        </div>
        <div class="bottom grid-col-2">
          <div class="col">
            <figure class="service__icon">
              <img class="atom" src="~/assets/images/coin-atom.svg" />
              <img class="atom-2" src="~/assets/images/coin-atom.svg" />
              <img class="atom-3" src="~/assets/images/coin-atom.svg" />
            </figure>
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Money as a primitive
            </h2>
          </div>
          <div class="col">
            <figure class="service__icon">
              <svg
                width="86"
                height="30"
                viewBox="0 0 86 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="shooting-star"
              >
                <path
                  d="M1.78051 2.12436L84.2217 27.882"
                  stroke="url(#paint0_linear-631797)"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear-631797"
                    x1="1.81539"
                    y1="2.14075"
                    x2="9.1407"
                    y2="-11.7435"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.190577" stop-color="#BAFBFF" />
                    <stop
                      offset="0.427388"
                      stop-color="#AFD4F9"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="small-ellipse"
              >
                <path
                  d="M15.364 15.364C11.8492 18.8787 6.15076 18.8787 2.63604 15.364C-0.87868 11.8492 -0.87868 6.15076 2.63604 2.63604C6.15076 -0.87868 11.8492 -0.87868 15.364 2.63604C18.8787 6.15076 18.8787 11.8492 15.364 15.364Z"
                  fill="url(#paint0_radial-255276)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial-255276"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(2.36995 7.40093) rotate(13.2846) scale(16.293 17.601)"
                  >
                    <stop offset="0.421875" stop-color="#100A13" />
                    <stop offset="0.625" stop-color="#100429" />
                    <stop offset="0.814509" stop-color="#411974" />
                    <stop offset="0.814609" stop-color="#55227C" />
                    <stop offset="1" stop-color="#6268E6" />
                  </radialGradient>
                </defs>
              </svg>
              <img class="community" src="~/assets/images/ellipse.svg" />
              <svg
                width="66"
                height="24"
                viewBox="0 0 66 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="loop-1"
              >
                <path
                  d="M65.0306 17.1232C64.8415 18.3635 63.8779 19.5101 62.1038 20.4919C60.3374 21.4694 57.8486 22.2346 54.7952 22.7395C48.6941 23.7483 40.4537 23.6995 31.528 22.3383C22.6024 20.9771 14.722 18.5675 9.19894 15.7859C6.43483 14.3938 4.28729 12.9216 2.89253 11.462C1.49172 9.99612 0.913737 8.61434 1.10287 7.37412C1.29201 6.1339 2.25559 4.98721 4.02967 4.00548C5.79609 3.02799 8.28484 2.26279 11.3382 1.7579C17.4394 0.749059 25.6798 0.797891 34.6054 2.15907C43.531 3.52025 51.4115 5.92988 56.9345 8.71143C59.6986 10.1035 61.8462 11.5758 63.2409 13.0353C64.6417 14.5012 65.2197 15.883 65.0306 17.1232Z"
                  stroke="url(#paint0_linear-165956)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear-165956"
                    x1="31.5"
                    y1="21.5"
                    x2="34.435"
                    y2="5.12977"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F3FCFF" />
                    <stop offset="0.47974" stop-color="#654BAE" />
                    <stop offset="1" stop-color="#303261" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="116"
                height="41"
                viewBox="0 0 116 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="loop-2"
              >
                <path
                  d="M81.205 7.19905C93.448 10.6661 103.332 15.1347 109.163 19.7976C112.081 22.1307 113.842 24.3995 114.508 26.4916C115.162 28.5467 114.775 30.4763 113.28 32.2382C111.762 34.0278 109.137 35.5974 105.501 36.8535C101.875 38.1064 97.2892 39.0317 91.9036 39.5645C81.1325 40.6299 67.9022 40.0521 54.5267 37.9252C41.1509 35.7981 28.5053 32.2611 18.7988 27.94C13.9453 25.7793 9.99494 23.4975 7.07158 21.2053C4.14008 18.9067 2.28363 16.6307 1.54641 14.4948C0.822245 12.3967 1.18661 10.4641 2.59823 8.72118C4.03237 6.95045 6.56574 5.35801 10.2021 4.06509C17.4693 1.48119 28.4653 0.332536 41.2889 0.851648"
                  stroke="url(#paint0_linear-224964)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear-224964"
                    x1="58.0028"
                    y1="39.8554"
                    x2="64"
                    y2="1.99609"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#413056" />
                    <stop offset="0.52014" stop-color="#202020" />
                    <stop offset="1" stop-color="#1D1D1D" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="152"
                height="55"
                viewBox="0 0 152 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="loop-3"
              >
                <path
                  d="M95.9398 7.26567C113.888 11.3617 129.327 17.2021 139.286 23.6379C144.269 26.8577 147.663 30.0862 149.435 33.1495C151.195 36.1908 151.347 39.0414 149.908 41.6175C148.446 44.2338 145.35 46.5593 140.734 48.4487C136.129 50.3332 130.077 51.7574 122.8 52.6144C108.248 54.3281 89.9075 53.6427 71.328 50.6819C52.7481 47.721 35.2792 42.6998 22.2972 36.5992C15.8055 33.5485 10.6854 30.3451 7.10344 27.1595C3.51202 23.9655 1.52225 20.8394 1.17009 17.9495C0.822761 15.0992 2.06941 12.4615 4.92004 10.1375C7.78363 7.80295 12.2319 5.81998 18.1602 4.33792C30.0107 1.37531 46.7662 0.665141 65.1947 2.36619"
                  stroke="url(#paint0_linear-190842)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear-190842"
                    x1="76.0029"
                    y1="53.0775"
                    x2="88"
                    y2="9.99609"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.218464" stop-color="#27202F" />
                    <stop offset="0.620629" stop-color="#1E1E1E" />
                    <stop offset="1" stop-color="#141414" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </figure>
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Empowered communities
            </h2>
          </div>
          <div class="col">
            <figure class="service__icon">
              <graphics-navigator-gem class="gem" />
            </figure>
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Digital assets that truly belong to users
            </h2>
          </div>
          <div class="col">
            <figure class="service__icon">
              <img class="ellipse-east" src="~/assets/images/ellipse.svg" />
              <svg
                width="65"
                height="20"
                viewBox="0 0 65 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="vector"
              >
                <path
                  d="M64 1.0017C56.581 5.28505 48.9396 8.97632 41.5975 11.8246C34.2538 14.6735 27.3927 16.608 21.481 17.5038C15.5577 18.4013 10.7791 18.2268 7.43118 17.0535C4.11793 15.8924 2.32065 13.8025 1.99866 10.94M64 18.6172C56.581 14.3338 48.9396 10.6426 41.5975 7.7943C34.2538 4.94537 27.3927 3.01089 21.481 2.1151C15.5577 1.21756 10.7791 1.39206 7.43118 2.56534C4.11793 3.72648 2.32065 5.81634 1.99866 8.67889"
                  stroke="url(#paint0_linear-443438)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear-443438"
                    x1="9.5"
                    y1="10"
                    x2="64.0753"
                    y2="9.76514"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.901042" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </figure>
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Permissionless APIs
            </h2>
          </div>
          <div class="col">
            <figure class="service__icon">
              <graphics-coin-blank class="coin" />
              <svg
                class="transfer"
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9414 15.352C17.6424 14.8576 13.7385 14.0776 10.4996 13.066C7.26067 12.0543 4.76392 10.8351 3.18193 9.49269C1.59995 8.15025 0.970446 6.71655 1.33694 5.29071C1.70344 3.86486 3.05719 2.48086 5.30463 1.23438"
                  stroke="url(#paint0_linear-501743)"
                  stroke-width="1.42771"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear-501743"
                    x1="10.5143"
                    y1="-1.26015"
                    x2="11.2278"
                    y2="10.9486"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.254598"
                      stop-color="white"
                      stop-opacity="0"
                    />
                    <stop offset="0.901042" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
              <img class="atom" src="~/assets/images/coin-atom.svg" />
            </figure>
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Interchain token transfers
            </h2>
          </div>
          <div class="col">
            <figure class="service__icon">
              <img class="ellipse-south" src="~/assets/images/ellipse.svg" />
              <svg
                width="42"
                height="35"
                viewBox="0 0 42 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="validator"
              >
                <path
                  d="M21.4428 25.8138L21.4428 34.2604L36.0801 17.3672L21.4428 25.8138Z"
                  fill="url(#paint0_linear-091901)"
                />
                <path
                  d="M21.4439 25.8138L21.4439 34.2604L6.80664 17.3672L21.4439 25.8138Z"
                  fill="url(#paint1_linear-767689)"
                />
                <rect
                  width="16.8996"
                  height="16.8996"
                  transform="matrix(0.866134 -0.499812 0.866134 0.499812 6.80664 17.3672)"
                  fill="url(#paint2_radial-908470)"
                />
                <path
                  d="M27.5186 20.8653C24.1643 22.8002 18.7262 22.8005 15.3713 20.8663C15.3708 20.866 15.3703 20.8657 15.3699 20.8655C15.3698 20.8654 15.3697 20.8654 15.3696 20.8653C15.3691 20.865 15.3686 20.8647 15.3681 20.8645C15.3679 20.8643 15.3677 20.8642 15.3675 20.8641C12.0148 18.9289 12.0155 15.7923 15.3696 13.8576C18.7245 11.9225 24.1637 11.9225 27.5186 13.8576C30.8734 15.7927 30.8734 18.9302 27.5186 20.8653Z"
                  fill="url(#paint3_linear-168397)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.5186 20.8653C30.8734 18.9302 30.8734 15.7927 27.5186 13.8576C24.1637 11.9225 18.7245 11.9225 15.3696 13.8576C12.0155 15.7923 12.0148 18.9289 15.3675 20.8641L15.3681 20.8645L15.3699 20.8655L15.3713 20.8663C18.7262 22.8005 24.1643 22.8002 27.5186 20.8653Z"
                  fill="url(#paint4_linear-438635)"
                />
                <g opacity="0.96" filter="url(#filter0_i-298230)">
                  <ellipse
                    cx="21.4444"
                    cy="10.1664"
                    rx="7.35849"
                    ry="7.35781"
                    fill="url(#paint5_radial-330280)"
                  />
                </g>
                <g opacity="0.6" filter="url(#filter1_f-976946)">
                  <path
                    d="M13.5086 19.2617L13.516 19.2723H13.5162C13.9349 19.8506 14.552 20.3924 15.3675 20.8631L15.3697 20.8644L15.3699 20.8645L15.3713 20.8653C18.7262 22.7995 24.1643 22.7992 27.5186 20.8644C28.3949 20.3589 29.0422 19.7715 29.4608 19.1448L40.6828 3.04297L2.20508 3.04297L13.4382 19.1607C13.461 19.1945 13.4845 19.2282 13.5086 19.2617Z"
                    fill="url(#paint6_radial-906456)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i-298230"
                    x="14.0859"
                    y="2.80859"
                    width="14.717"
                    height="14.7156"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.95932" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.987333 0 0 0 0 0.841667 0 0 0 0 1 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow"
                    />
                  </filter>
                  <filter
                    id="filter1_f-976946"
                    x="0.981881"
                    y="1.81977"
                    width="40.9242"
                    height="21.7191"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="0.611598"
                      result="effect1_foregroundBlur"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear-091901"
                    x1="27.5031"
                    y1="22.0345"
                    x2="30.3248"
                    y2="28.0279"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#71A1FF" />
                    <stop offset="1" stop-color="#DA17C6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear-767689"
                    x1="15.3836"
                    y1="22.0345"
                    x2="12.5619"
                    y2="28.0279"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#93B7FF" />
                    <stop offset="1" stop-color="#DA17C6" />
                  </linearGradient>
                  <radialGradient
                    id="paint2_radial-908470"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.46449 8.35519) rotate(-45) scale(6.97583 11.4466)"
                  >
                    <stop offset="0.0525602" stop-color="white" />
                    <stop offset="1" stop-color="#8DA6FF" />
                  </radialGradient>
                  <linearGradient
                    id="paint3_linear-168397"
                    x1="20.8815"
                    y1="22.3863"
                    x2="21.0224"
                    y2="15.5501"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.4" />
                    <stop offset="1" stop-color="white" stop-opacity="0.05" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear-438635"
                    x1="20.8815"
                    y1="22.3863"
                    x2="21.0224"
                    y2="15.5501"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.4" />
                    <stop offset="1" stop-color="white" stop-opacity="0.05" />
                  </linearGradient>
                  <radialGradient
                    id="paint5_radial-330280"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(21.4522 2.92421) rotate(90) scale(13.9914 14.2954)"
                  >
                    <stop stop-color="#4E0936" />
                    <stop offset="0.53125" stop-color="#520085" />
                    <stop offset="0.84375" stop-color="#5A72C9" />
                    <stop offset="1" stop-color="#9CB2FF" />
                  </radialGradient>
                  <radialGradient
                    id="paint6_radial-906456"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(21.4439 22.3019) rotate(-90) scale(19.3104 39.1459)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#4100AC" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </figure>
            <h2 class="title tm-rf2 tm-bold tm-lh-title">
              Resilience and decentralization
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="section-cta tm-section tm-container tm-wrapper">
      <div class="top cta">
        <div class="text">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Starport
          </div>
          <div class="title tm-rf5 tm-bold tm-lh-title">
            Build your own blockchain.
          </div>
          <div class="btn-group">
            <tm-button
              to-link="external"
              href="https://gitpod.io/#https://github.com/tendermint/starport/tree/master"
              size="l"
              class="btn"
              >Open in browser
              <span class="icon__right">&#8599;</span></tm-button
            >
            <tm-button
              to-link="external"
              href="https://github.com/tendermint/starport/blob/develop/docs/1%20Introduction/2%20Install.md"
              size="l"
              variant="text"
              class="btn"
              >Install
              <span class="icon__right icon__down">&#8595;</span></tm-button
            >
          </div>
        </div>
      </div>
      <div class="bottom">
        <tm-cta-cards :data="cards" />
      </div>
    </div>
  </main>
</template>

<script>
import YoutubeLite from '~/components/global/YoutubeLite.vue'

export default {
  components: {
    YoutubeLite,
  },
  data() {
    return {
      cards: [
        {
          href: 'https://discord.gg/dkubTXerEW',
          graphics: 'graphics-cta-developer-chat',
          overline: 'Discord',
          title: 'Developer chat ->',
        },
        {
          href: 'https://v1.cosmos.network/contributors',
          graphics: 'graphics-cta-funding',
          overline: 'Funding',
          title: 'Get funding for your app ->',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Starport',
    }
  },
}
</script>

<style lang="stylus" scoped>
// Global
.btn-group
  display flex
  flex-direction column
  margin-top var(--spacing-8)
  gap 0 var(--spacing-7)

.grid-col-2
  display grid
  grid-template-columns repeat(1, 1fr)

.step
  writing-mode vertical-rl
  transform rotate(-180deg)

svg.graphics__item
  height auto

.center
  display grid
  place-items center
  center()

.service__icon
  position relative
  background var(--white-100)
  border-radius $border-radius-5
  width 4rem
  height 4rem

  svg,
  img
    position absolute
    height auto

  .coin
    width 80%
    top 18%
    left -7%

  .transfer
    width 32%
    top 49%
    left -14%

  .atom
    width 100%
    top 32%
    left 20%

  .atom-2
    width 100%
    top 20%
    left 14%

  .atom-3
    width 100%
    top 6%
    left 26%

  .gem
    width 194%
    top -63%
    left -33%

  .ellipse-east
    width 70%
    top 18%
    left -28%
    transform rotate(240deg)

  .ellipse-south
    width 100%
    top -22%
    left -28%

  .validator
    width 70%
    top 30%
    left 17%

  .vector
    width 100%
    top 36%
    left 28%

  .community
    width 80%
    top 39%
    left -20%
    transform rotate(250deg)

  .shooting-star
    width 150%
    top 4%
    left -22%

  .small-ellipse
    width 35%
    top 22%
    left 58%
    transform rotate(5deg)

  .loop-1
    width 100%
    top 67%
    left -35%

  .loop-2
    width 150%
    top 61%
    left -62%

  .loop-3
    width 190%
    top 58%
    left -82%

// Hero
.section-hero
  text-align center

.section-hero
  .text
  .demo
    grid-column 1/-1
    position relative
    z-index 1

.section-hero .overline
  color var(--white-500)

.section-hero .title
  margin-top var(--spacing-5)

.section-hero .subtitle
  margin-top var(--spacing-7)
  center()

.hero-graphics
  position relative
  padding-top var(--spacing-12)
  overflow visible
  z-index 0

.section-cli,
.section-cloud,
.section-production
  .graphics
    display flex
    flex-direction column
    align-items center

// Intro
.section-intro
  .top
  .mid
  .bottom
    grid-column 1/-1

.section-intro .top .overline
  writing-mode vertical-rl
  transform rotate(-180deg)

.section-intro .mid
  margin-top var(--spacing-9)

.section-intro .logos-list
  display grid
  grid-template-columns repeat(2, 1fr)
  gap 4rem
  align-items center

.section-intro .logos-list > img
  opacity 0.5

.section-intro .bottom
  margin-top var(--spacing-10)
  gap var(--spacing-10)

.section-intro .bottom .subtitle
  color var(--white-800)

.section-intro .stat-value
  display flex

.section-intro .stat .col
  display flex
  flex-direction column
  margin-left 1rem
  align-self center

.stat-subtitle
  margin-top var(--spacing-5)
  color var(--white-800)

// CLI
.section-cli .top
  .graphics
  .text
    grid-column 1/-1

.section-cli .top .graphics__inner
  width 220%
  max-width 64rem
  margin-left 64%

.section-cli .graphics__item
  width 100%
  margin-top -20%
  margin-bottom -15%

.section-cli .top .text
  .title
    margin-top var(--spacing-7)
  .subtitle
    margin-top var(--spacing-7)
  .btn
    margin-top var(--spacing-5)

.section-cli
.section-cloud
  .bottom
    margin-top var(--spacing-10)
    grid-column 1/-1
    gap var(--spacing-9)

    .title
      margin-top var(--spacing-6)

    .subtitle
      margin-top var(--spacing-5)
      color var(--white-800)

// Cloud
.section-cloud .top
  .graphics
  .text
    grid-column 1/-1

.section-cloud .graphics__inner
  width 250%
  max-width 72rem
  margin-left -110%

.section-cloud .top .graphics__item
  overflow visible
  width 100%
  margin-top -42%
  margin-bottom -24%

// Production
.section-production
  text-align center

.section-production .text
  grid-column 1/-1
  center()

.section-production .graphics
  position relative
  overflow visible

.section-production .graphics__inner
  width 132%
  max-width 92rem

.section-production .title
  max-width 10em

// SDK
.section-sdk
  .text
  .bottom
    grid-column 1/-1

.section-sdk .bottom
  margin-top var(--spacing-6)
  column-gap var(--spacing-7)
  row-gap var(--spacing-10)

.section-sdk .bottom .title
  margin-top var(--spacing-6)

// Cta
.cta
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)
  color var(--white)
  background var(--gray-100)

  .light-mode &
    color var(--black)
    background var(--white)

.section-cta .top .text
  padding var(--spacing-7)

.section-cta .top .text .overline
  color var(--white-500)

.section-cta .top .text .title
  margin-top var(--spacing-5)

.section-cta .bottom
  margin-top var(--spacing-7)

@media $breakpoint-small
  // Global
  .btn-group
    display block

  .grid-col-2
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-medium
  .section-cta .top .text
    padding var(--spacing-10)

@media $breakpoint-large
  .section-intro .logos-list
    grid-template-columns repeat(4, 1fr)

  // Cloud
  .section-cloud .graphics__inner
    margin-left -10%

  .section-cloud .top .graphics__item
    margin-top -53%
    margin-bottom -34%

@media $breakpoint-xl
  // Hero
  .section-hero
    .text,
    .demo
      grid-column 2/span 10

  // Intro
  .section-intro
    .top
      grid-column 2/span 6
    .mid
    .bottom
      grid-column 2/span 10

  .section-intro .logos-list
    grid-template-columns repeat(6, 1fr)

  .section-intro .col
    align-self flex-end

  // CLI
  .section-cli .top
    .graphics
      grid-column 1/span 7
    .graphics__inner
      max-width 67rem
      margin-left 24%
      margin-top -20%
      margin-bottom -5%
    .text
      grid-column 8/span 5

  .section-cli
  .section-cloud
    .bottom
      grid-column 3/span 10

  // Cloud
  .section-cloud .top
    .text
      grid-column 2/span 6
    .graphics
      grid-column 8/span 5

  .section-cloud .graphics__inner
    margin-left -104%

  .section-cloud .top .graphics__item
    margin-top -38%

  // Production

  // SDK
  .section-sdk .text
    grid-column 2/span 6

  .section-sdk .bottom
    grid-column 5/span 8
</style>
