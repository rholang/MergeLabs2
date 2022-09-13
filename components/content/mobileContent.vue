<template>
  <main>
    <div class="nav-mobile-content section-first">
      <ul class="tm-wrapper">
        <li>
          <tm-tabs>
            <tm-tab name="Learn" :selected="true">
              <div class="top tm-wrapper">
                <ul>
                  <li>
                    <tm-link
                      href="https://v1.cosmos.network/intro"
                      class="tm-rf0 tm-lh-title tm-link-external"
                      >Introduction</tm-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/features" class="tm-rf0 tm-lh-title tm-link"
                      >Features</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/learn/staking"
                      class="tm-rf0 tm-lh-title tm-link"
                      >What is staking?</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="/learn/faq"
                      class="tm-rf0 tm-lh-title tm-link"
                      >FAQ</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <nuxt-link to="/learn/get-atom">
                  <div class="nav-mobile-bottom">
                    <div class="wrapper">
                      <div class="text">
                        <div class="title tm-rf0 tm-lh-copy tm-title">
                          Get ATOM &#8594;
                        </div>
                        <div class="subtitle tm-rf-1 tm-lh-copy tm-muted">
                          Four simple steps to get ATOM and start earning
                          rewards.
                        </div>
                      </div>
                      <div class="graphics">
                        <graphics-validator :coins="3" class="graphics__item" />
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </tm-tab>
            <tm-tab name="Build">
              <div class="top tm-wrapper">
                <ul>
                  <li>
                    <tm-link
                      href="https://tutorials.cosmos.network"
                      class="tm-rf0 tm-lh-title tm-link-external"
                    >
                      <span>Tutorials</span></tm-link
                    >
                  </li>
                  <li>
                    <tm-link
                      href="https://docs.cosmos.network"
                      class="tm-rf0 tm-lh-title tm-link-external"
                    >
                      <span>Documentation</span></tm-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/starport" class="tm-rf0 tm-lh-title tm-link"
                      >Starport</nuxt-link
                    >
                  </li>
                  <li>
                    <tm-link
                      href="https://v1.cosmos.network/sdk"
                      class="tm-rf0 tm-lh-title tm-link-external"
                    >
                      <span>Cosmos SDK</span></tm-link
                    >
                  </li>
                  <li>
                    <tm-link
                      href="https://ibcprotocol.org"
                      class="tm-rf0 tm-lh-title tm-link-external"
                    >
                      <span>IBC</span></tm-link
                    >
                  </li>
                </ul>
              </div>
            </tm-tab>
            <tm-tab name="Explore">
              <div class="top tm-wrapper">
                <ul>
                  <li>
                    <nuxt-link
                      to="/ecosystem/tokens"
                      class="tm-rf0 tm-lh-title tm-link"
                    >
                      <span>Tokens</span>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/ecosystem/apps"
                      class="tm-rf0 tm-lh-title tm-link"
                    >
                      <span>Ecosystem</span>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/ecosystem/wallets"
                      class="tm-rf0 tm-lh-title tm-link"
                    >
                      <span>Wallets</span>
                    </nuxt-link>
                  </li>
                  <li>
                    <tm-link
                      href="https://v1.cosmos.network/community"
                      class="tm-rf0 tm-lh-title tm-link-external"
                    >
                      <span>Community</span></tm-link
                    >
                  </li>
                  <li>
                    <tm-link
                      href="https://v1.cosmos.network/events"
                      class="tm-rf0 tm-lh-title tm-link-external"
                    >
                      <span>Events</span></tm-link
                    >
                  </li>
                  <li>
                    <tm-link
                      href="https://v1.cosmos.network/contributors"
                      class="tm-rf0 tm-lh-title tm-link-external"
                    >
                      <span>Contributors</span></tm-link
                    >
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <tm-link href="https://blog.cosmos.network">
                  <div class="nav-mobile-bottom">
                    <div class="wrapper">
                      <div class="text">
                        <div class="title tm-rf0 tm-lh-copy tm-title">
                          Blog &#8594;
                        </div>
                        <div class="subtitle tm-rf-1 tm-lh-copy tm-muted">
                          Stay on top of the latest news straight from cosmonaut
                          teams.
                        </div>
                      </div>
                      <div class="graphics">
                        <svg
                          width="180"
                          height="154"
                          viewBox="0 0 180 154"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="graphics__item"
                        >
                          <path
                            opacity="0.2"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M169.316 144.272C166.668 154.154 141.629 156.031 113.39 148.465C107.779 146.961 102.464 145.198 97.5697 143.26C88.8004 146.379 76.9905 148.29 64 148.29C36.9391 148.29 15.0017 139.997 15 129.767V117.551H27.1607C36.1413 113.683 49.3164 111.241 64 111.241C65.5301 111.241 67.0438 111.268 68.5381 111.32L70.1891 105.158L82.666 108.501C93.0558 107.227 107.539 108.541 122.979 112.678C138.42 116.815 151.619 122.919 159.98 129.218L163.229 130.088L162.839 131.545C167.874 136.007 170.338 140.457 169.316 144.272Z"
                            fill="black"
                          />
                          <path
                            d="M107.147 54.7974L136.382 71.6762L143.162 88.5749L78.5231 104.375L59.8866 40.4958L91.1324 46.732L107.147 54.7974Z"
                            fill="url(#paint0_linear-767121)"
                          />
                          <path
                            d="M78.5237 104.372L71.096 59.9513L120.707 88.5942L78.5237 104.372Z"
                            fill="url(#paint1_linear-386047)"
                          />
                          <path
                            d="M120.707 88.5925L143.162 88.5727L124.525 24.6938L59.8865 40.4936L71.0965 59.9497L120.707 88.5925Z"
                            fill="url(#paint2_linear-532282)"
                          />
                          <path
                            d="M124.524 24.6984L120.707 88.5951L71.0965 59.9522L124.524 24.6984Z"
                            fill="url(#paint3_linear-094986)"
                          />
                          <g opacity="0.2" filter="url(#filter0_f-766671)">
                            <ellipse
                              cx="68.4819"
                              cy="125.096"
                              rx="52.2866"
                              ry="18.9726"
                              fill="url(#paint4_linear-341108)"
                            />
                          </g>
                          <path
                            d="M64 142.277C91.062 142.277 113 133.984 113 123.753V111.537C80.3086 111.537 47.6914 111.537 15 111.537L15 123.753C15 133.984 36.938 142.277 64 142.277Z"
                            fill="url(#paint5_radial-343511)"
                          />
                          <g filter="url(#filter1_ddi-984329)">
                            <ellipse
                              cx="64"
                              cy="111.536"
                              rx="49"
                              ry="18.5244"
                              fill="url(#paint6_linear-688779)"
                            />
                          </g>
                          <g style="mix-blend-mode: hard-light" opacity="0.5">
                            <path
                              d="M104.794 111.537C104.794 113.513 103.733 115.447 101.701 117.257C99.6686 119.068 96.7031 120.718 93.0012 122.113C85.6006 124.902 75.3473 126.636 64.0003 126.636C52.6532 126.636 42.3999 124.902 34.9993 122.113C31.2974 120.718 28.3319 119.068 26.2998 117.257C24.2672 115.447 23.2061 113.513 23.2061 111.537C23.2061 109.561 24.2672 107.626 26.2998 105.816C28.3319 104.005 31.2974 102.355 34.9993 100.96C42.3999 98.1713 52.6532 96.4375 64.0003 96.4375C75.3473 96.4375 85.6006 98.1713 93.0012 100.96C96.7031 102.355 99.6686 104.005 101.701 105.816C103.733 107.626 104.794 109.561 104.794 111.537Z"
                              stroke="url(#paint7_linear-891997)"
                              stroke-width="0.875"
                            />
                          </g>
                          <g style="mix-blend-mode: soft-light">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M70.3756 103.178C70.2151 103.082 70.1062 103.07 70.0878 103.068C70.0693 103.066 69.9584 103.056 69.6929 103.109C69.4204 103.163 69.0661 103.267 68.6411 103.441C67.7927 103.789 66.8219 104.345 65.7997 105.086C63.7636 106.563 61.6325 108.692 59.9101 111.122C58.1876 113.552 57.2169 115.799 57.0276 117.463C56.9326 118.298 57.0375 118.963 57.313 119.424C57.4511 119.655 57.6194 119.813 57.784 119.911C57.9445 120.007 58.0534 120.019 58.0719 120.021C58.0903 120.023 58.2012 120.033 58.4667 119.98C58.7392 119.926 59.0935 119.821 59.5185 119.648C60.3669 119.3 61.3377 118.744 62.36 118.003C64.3961 116.526 66.5271 114.397 68.2496 111.967C69.972 109.537 70.9427 107.29 71.132 105.626C71.2271 104.791 71.1222 104.126 70.8466 103.665C70.7086 103.434 70.5403 103.276 70.3756 103.178ZM69.2988 112.073C72.7721 107.173 73.2512 102.963 70.3689 102.671C67.4866 102.379 62.3342 106.115 58.8609 111.016C55.3875 115.916 54.9084 120.126 57.7907 120.418C60.6731 120.71 65.8254 116.974 69.2988 112.073Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M86.4059 109.423C86.5449 109.323 86.5189 109.281 86.5141 109.275C86.5093 109.268 86.4763 109.227 86.2229 109.166C85.9629 109.104 85.5454 109.04 84.934 108.988C83.7136 108.884 81.9526 108.844 79.7423 108.88C75.3396 108.952 69.393 109.318 62.9611 109.969C56.5293 110.62 50.8938 111.425 46.9863 112.195C45.0246 112.581 43.5521 112.948 42.6332 113.268C42.1728 113.429 41.8956 113.563 41.753 113.666C41.6141 113.766 41.64 113.808 41.6448 113.814C41.6497 113.821 41.6827 113.862 41.936 113.923C42.196 113.985 42.6135 114.049 43.225 114.101C44.4454 114.205 46.2064 114.245 48.4167 114.209C52.8194 114.137 58.766 113.771 65.1978 113.12C71.6297 112.469 77.2651 111.664 81.1726 110.894C83.1344 110.508 84.6069 110.141 85.5258 109.821C85.9862 109.66 86.2633 109.526 86.4059 109.423ZM65.4787 113.516C78.4484 112.204 88.336 110.257 87.5632 109.168C86.7905 108.079 75.65 108.26 62.6803 109.572C49.7106 110.885 39.823 112.832 40.5957 113.921C41.3685 115.01 52.509 114.829 65.4787 113.516Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M80.1017 117.794C80.4008 117.789 80.4835 117.76 80.4966 117.755C80.5098 117.75 80.5875 117.718 80.5998 117.605C80.6124 117.489 80.5494 117.32 80.3632 117.094C79.9915 116.642 79.2019 116.046 78.0144 115.34C75.6492 113.935 71.8358 112.171 67.129 110.391C62.4222 108.61 57.7599 107.168 54.0437 106.273C52.178 105.824 50.6015 105.525 49.4077 105.385C48.8096 105.314 48.3643 105.291 48.0573 105.295C47.7582 105.3 47.6755 105.329 47.6624 105.334C47.6492 105.339 47.5715 105.371 47.5592 105.484C47.5465 105.6 47.6096 105.769 47.7958 105.995C48.1674 106.447 48.9571 107.043 50.1445 107.749C52.5097 109.154 56.3232 110.918 61.03 112.698C65.7368 114.479 70.3991 115.921 74.1152 116.816C75.9809 117.265 77.5575 117.564 78.7513 117.704C79.3494 117.775 79.7946 117.798 80.1017 117.794ZM60.2617 112.989C69.7529 116.579 79.1563 118.842 81.2648 118.045C83.3733 117.247 77.3884 113.69 67.8972 110.1C58.4061 106.51 49.0026 104.246 46.8941 105.044C44.7857 105.842 50.7705 109.398 60.2617 112.989Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M50.8396 107.54C51.7511 107.633 52.292 107.987 52.0476 108.332C51.8033 108.677 50.8662 108.881 49.9547 108.789C49.0431 108.697 48.5022 108.342 48.7466 107.997C48.991 107.653 49.928 107.448 50.8396 107.54Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M78.5862 108.059C79.4982 108.152 80.0394 108.506 79.795 108.851C79.5507 109.196 78.6132 109.4 77.7012 109.308C76.7892 109.215 76.248 108.861 76.4924 108.516C76.7368 108.171 77.6742 107.967 78.5862 108.059Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M57.0856 116.383C57.9976 116.475 58.5389 116.829 58.2946 117.174C58.0504 117.518 57.1131 117.723 56.2011 117.631C55.2891 117.538 54.7478 117.184 54.992 116.839C55.2363 116.495 56.1736 116.29 57.0856 116.383Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M64.74 110.475C66.2841 110.631 67.2004 111.231 66.7866 111.815C66.3729 112.398 64.7858 112.745 63.2418 112.588C61.6977 112.432 60.7814 111.832 61.1952 111.248C61.6089 110.665 63.196 110.318 64.74 110.475Z"
                              fill="white"
                            />
                          </g>
                          <path
                            d="M109.59 141.432C135.73 148.436 159.067 146.103 161.715 136.221L164.877 124.421C133.299 115.96 101.793 107.518 70.2158 99.0566L67.0541 110.856C64.4062 120.738 83.4502 134.427 109.59 141.432Z"
                            fill="url(#paint8_radial-069059)"
                          />
                          <g filter="url(#filter2_ddi-049008)">
                            <ellipse
                              cx="117.547"
                              cy="111.739"
                              rx="49"
                              ry="18.5244"
                              transform="rotate(15 117.547 111.739)"
                              fill="url(#paint9_linear-344640)"
                            />
                          </g>
                          <g style="mix-blend-mode: hard-light" opacity="0.5">
                            <path
                              d="M156.951 122.296C156.44 124.204 154.914 125.798 152.482 127.021C150.051 128.244 146.759 129.07 142.822 129.46C134.952 130.238 124.599 129.259 113.639 126.322C102.678 123.385 93.2233 119.057 86.7966 114.448C83.5819 112.142 81.1446 109.78 79.6503 107.506C78.1556 105.231 77.6312 103.088 78.1426 101.179C78.6541 99.2704 80.1796 97.6768 82.6116 96.4538C85.0431 95.231 88.3347 94.4044 92.2715 94.0151C100.142 93.2369 110.494 94.2159 121.455 97.1527C132.415 100.09 141.87 104.418 148.297 109.027C151.512 111.333 153.949 113.694 155.443 115.969C156.938 118.244 157.462 120.387 156.951 122.296Z"
                              stroke="url(#paint10_linear-758783)"
                              stroke-width="0.875"
                            />
                          </g>
                          <g style="mix-blend-mode: soft-light">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M125.868 105.316C125.738 105.182 125.636 105.141 125.619 105.135C125.601 105.128 125.497 105.09 125.227 105.072C124.949 105.054 124.58 105.063 124.124 105.121C123.215 105.237 122.133 105.523 120.954 105.974C118.605 106.874 115.996 108.379 113.703 110.28C111.41 112.182 109.891 114.101 109.278 115.659C108.97 116.441 108.899 117.111 109.046 117.627C109.119 117.886 109.241 118.082 109.375 118.22C109.505 118.354 109.607 118.394 109.624 118.4C109.642 118.407 109.746 118.445 110.016 118.463C110.293 118.482 110.663 118.472 111.118 118.414C112.028 118.298 113.109 118.012 114.289 117.561C116.637 116.662 119.247 115.156 121.54 113.255C123.833 111.353 125.352 109.434 125.965 107.876C126.273 107.094 126.344 106.424 126.197 105.908C126.123 105.649 126.002 105.453 125.868 105.316ZM122.526 113.629C127.149 109.794 128.701 105.852 125.993 104.824C123.284 103.796 117.34 106.072 112.717 109.906C108.094 113.741 106.541 117.683 109.25 118.711C111.959 119.739 117.902 117.464 122.526 113.629Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M139.736 115.497C139.896 115.436 139.882 115.389 139.879 115.381C139.876 115.374 139.855 115.325 139.626 115.201C139.391 115.074 139.004 114.904 138.427 114.696C137.275 114.279 135.584 113.785 133.44 113.248C129.169 112.177 123.33 110.992 116.949 109.956C110.567 108.92 104.916 108.24 100.942 107.971C98.9472 107.837 97.43 107.81 96.4594 107.882C95.9732 107.918 95.6708 107.975 95.5064 108.038C95.3463 108.099 95.3605 108.146 95.3634 108.153C95.3663 108.161 95.3875 108.21 95.6165 108.334C95.8516 108.461 96.2384 108.631 96.8155 108.839C97.9674 109.256 99.6581 109.75 101.802 110.287C106.074 111.358 111.912 112.543 118.294 113.579C124.675 114.615 130.327 115.295 134.3 115.564C136.295 115.698 137.812 115.725 138.783 115.653C139.269 115.617 139.571 115.56 139.736 115.497ZM118.462 114.034C131.33 116.124 141.384 116.802 140.92 115.55C140.455 114.298 129.647 111.59 116.78 109.501C103.913 107.411 93.858 106.733 94.3225 107.985C94.7871 109.237 105.595 111.945 118.462 114.034Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M131.48 121.951C131.77 122.023 131.858 122.017 131.871 122.015C131.885 122.014 131.969 122.004 132.01 121.897C132.052 121.788 132.035 121.609 131.914 121.342C131.672 120.81 131.063 120.03 130.099 119.041C128.178 117.071 124.951 114.38 120.865 111.442C116.78 108.504 112.65 105.904 109.292 104.078C107.606 103.162 106.16 102.465 105.043 102.02C104.484 101.798 104.06 101.659 103.762 101.584C103.472 101.512 103.385 101.518 103.371 101.52C103.357 101.521 103.273 101.531 103.232 101.638C103.19 101.747 103.207 101.926 103.329 102.193C103.571 102.725 104.179 103.505 105.143 104.494C107.064 106.464 110.291 109.155 114.377 112.093C118.463 115.031 122.593 117.631 125.951 119.457C127.636 120.373 129.082 121.07 130.199 121.515C130.758 121.737 131.182 121.876 131.48 121.951ZM113.56 112.174C121.798 118.099 130.295 122.719 132.538 122.494C134.781 122.27 129.921 117.285 121.683 111.361C113.444 105.436 104.947 100.816 102.704 101.041C100.461 101.265 105.321 106.25 113.56 112.174Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M105.869 104.472C106.726 104.797 107.156 105.279 106.831 105.549C106.506 105.819 105.548 105.774 104.691 105.449C103.835 105.124 103.404 104.641 103.729 104.372C104.054 104.102 105.012 104.147 105.869 104.472Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M132.536 112.155C133.393 112.48 133.824 112.963 133.498 113.232C133.173 113.502 132.215 113.457 131.358 113.132C130.501 112.807 130.07 112.324 130.395 112.055C130.72 111.785 131.679 111.83 132.536 112.155Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M109.613 114.631C110.47 114.956 110.902 115.439 110.577 115.708C110.251 115.978 109.293 115.933 108.436 115.608C107.579 115.282 107.148 114.8 107.473 114.53C107.798 114.261 108.756 114.306 109.613 114.631Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M118.536 110.903C119.987 111.454 120.717 112.27 120.167 112.727C119.616 113.184 117.993 113.108 116.542 112.557C115.091 112.006 114.361 111.19 114.912 110.733C115.463 110.276 117.086 110.352 118.536 110.903Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f-766671"
                              x="14.3005"
                              y="104.228"
                              width="108.363"
                              height="41.7347"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="0.947398"
                                result="effect1_foregroundBlur"
                              />
                            </filter>
                            <filter
                              id="filter1_ddi-984329"
                              x="0.5625"
                              y="72.8867"
                              width="126.875"
                              height="65.9238"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="-5.6875" />
                              <feGaussianBlur stdDeviation="7.21875" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.404167 0 0 0 0 0.741154 0 0 0 0 1 0 0 0 0.4 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="0.81291" />
                              <feGaussianBlur stdDeviation="0.81291" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="effect1_dropShadow"
                                result="effect2_dropShadow"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="-0.81291" />
                              <feGaussianBlur stdDeviation="0.29468" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.925 0 0 0 0 0.936947 0 0 0 0 1 0 0 0 0.12 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect3_innerShadow"
                              />
                            </filter>
                            <filter
                              id="filter2_ddi-049008"
                              x="55.5332"
                              y="69.6816"
                              width="124.027"
                              height="72.7421"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="-5.6875" />
                              <feGaussianBlur stdDeviation="7.21875" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.404167 0 0 0 0 0.741154 0 0 0 0 1 0 0 0 0.4 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="0.81291" />
                              <feGaussianBlur stdDeviation="0.81291" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="effect1_dropShadow"
                                result="effect2_dropShadow"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow"
                                result="shape"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="-0.81291" />
                              <feGaussianBlur stdDeviation="0.29468" />
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.925 0 0 0 0 0.936947 0 0 0 0 1 0 0 0 0.12 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect3_innerShadow"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear-767121"
                              x1="130.181"
                              y1="68.0961"
                              x2="93.8905"
                              y2="130.952"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#78CCFB" />
                              <stop offset="1" stop-color="#00BD90" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear-386047"
                              x1="70.857"
                              y1="117.651"
                              x2="95.9014"
                              y2="74.2727"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#17DAB0" />
                              <stop offset="1" stop-color="#58E1FF" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear-532282"
                              x1="62.8247"
                              y1="77.6008"
                              x2="108.826"
                              y2="-2.07573"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#86F8FF" />
                              <stop offset="1" stop-color="#ECA2FF" />
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear-094986"
                              x1="131.812"
                              y1="11.2007"
                              x2="95.5232"
                              y2="74.055"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#DEB5FF" />
                              <stop offset="1" stop-color="#A7FAFF" />
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear-341108"
                              x1="16.1953"
                              y1="125.992"
                              x2="120.768"
                              y2="125.992"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.783167" stop-color="#1A2F9F" />
                              <stop
                                offset="1"
                                stop-color="#1A2F9F"
                                stop-opacity="0"
                              />
                            </linearGradient>
                            <radialGradient
                              id="paint5_radial-343511"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(66.1232 126.029) rotate(70.2405) scale(33.5528 56.0297)"
                            >
                              <stop stop-color="#68E9F1" />
                              <stop offset="0.604167" stop-color="#86AFFF" />
                              <stop offset="1" stop-color="#9492FF" />
                            </radialGradient>
                            <linearGradient
                              id="paint6_linear-688779"
                              x1="64"
                              y1="93.0117"
                              x2="64"
                              y2="130.06"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FD91FF" />
                              <stop offset="0.34375" stop-color="#A0A8FF" />
                              <stop offset="0.947005" stop-color="#C9F2FF" />
                            </linearGradient>
                            <linearGradient
                              id="paint7_linear-891997"
                              x1="22.7686"
                              y1="96"
                              x2="107.849"
                              y2="115.868"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="white" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0"
                              />
                            </linearGradient>
                            <radialGradient
                              id="paint8_radial-069059"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(115.846 126.286) rotate(85.2405) scale(33.5528 56.0297)"
                            >
                              <stop stop-color="#68E9F1" />
                              <stop offset="0.604167" stop-color="#86AFFF" />
                              <stop offset="1" stop-color="#9492FF" />
                            </radialGradient>
                            <linearGradient
                              id="paint9_linear-344640"
                              x1="117.547"
                              y1="93.215"
                              x2="117.547"
                              y2="130.264"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FD91FF" />
                              <stop offset="0.34375" stop-color="#A0A8FF" />
                              <stop offset="0.947005" stop-color="#C9F2FF" />
                            </linearGradient>
                            <linearGradient
                              id="paint10_linear-758783"
                              x1="81.7412"
                              y1="86.0586"
                              x2="158.78"
                              y2="127.27"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="white" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </tm-link>
              </div>
            </tm-tab>
          </tm-tabs>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
$navbar-height = 5rem
$navbar-mobile-menu = 200

.tabs-details .top
  padding-top var(--spacing-7)
  padding-bottom var(--spacing-8)

.bottom .tm-link
  padding 0 !important

.tm-link
  position relative
  display block
  border-radius $border-radius-2
  // /* exact link will show the primary color for only the exact matching link */

.tm-link.nuxt-link-exact-active
  cursor default
  &:after
    content ""
    position absolute
    display block
    border-right 1px solid
    height var(--spacing-3)
    bottom 0
    left 50%

.nav-mobile-content
  overflow-y auto
  flex-grow 1
  -webkit-box-flex 1
  .tm-link
    padding var(--spacing-4) 0
  ul
    // margin-left calc(-1 * var(--spacing-7))
    // margin-right calc(-1 * var(--spacing-7))
    padding 0
    ul
      margin-left 0
      margin-right 0
      .tm-link-external:after
        bottom auto
  li
    list-style-type none
  &-primary
    position relative
    z-index $navbar-mobile-menu + 1

.nav-mobile-bottom
  padding var(--wrap-gap)
  text-align start
  background var(--trans-gray-900)

.nav-mobile-bottom .wrapper
  display inline-flex
  align-items center
  text-align start

.nav-mobile-bottom .wrapper .text
  text-align start

.wrapper .text
  white-space normal

.wrapper .text .overline + .title,
.wrapper .text .subtitle
  margin-top var(--spacing-3)

.wrapper .graphics
  display flex
  justify-content center
  position relative
  z-index 0

  &__item
    height auto
    width 70%
    margin-top calc(-1 * var(--spacing-8))
    max-width 12rem

@media $breakpoint-large-max
  .nav
    &-primary.is-active
      background var(--bg)
      .light-mode &
        background var(--fg)
    .tm-link
      &.nuxt-link-exact-active:after
        transform rotate(90deg)
        left -15px
        bottom 50%
        transform-origin bottom
</style>
