<template>
  <div class="container flex-md align-items-center justify-between">
    <div>
      <h1>Il tuo supporto è fondamentale</h1>
    </div>
    <div class="flex gap-4">
      <h5>Dai il tuo contributo</h5>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_122_541)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.36764 12.1072C2.36735 11.6123 2.7645 11.2109 3.25468 11.2106L18.306 11.2017L12.6536 5.50201C12.3068 5.15229 12.3065 4.58494 12.6529 4.23481C12.9993 3.88467 13.5613 3.88434 13.9081 4.23406L21.0765 11.4625C21.1616 11.5483 21.2259 11.6473 21.2693 11.753C21.3117 11.8562 21.3357 11.9692 21.3368 12.0876C21.3368 12.0932 21.3368 12.0987 21.3368 12.1042C21.3358 12.2227 21.312 12.3357 21.2697 12.4389C21.2264 12.5447 21.1623 12.6437 21.0772 12.7297L13.9173 19.9666C13.5708 20.3167 13.0089 20.3171 12.6621 19.9673C12.3152 19.6176 12.3149 19.0503 12.6613 18.7001L18.307 12.9938L3.25573 13.0027C2.76554 13.003 2.36793 12.6021 2.36764 12.1072Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_122_541">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(2 2)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 32px 16px;
  background-color: #f4f1de;

  h1 {
    font-weight: 700;
    font-size: 24px;
    color: black;
    margin-bottom: 14px;
  }

  h5 {
    font-weight: 700;
    font-size: 14px;
    color: black;
  }
}

.gap-4 {
  gap: 4px;
}

@media screen and (min-width: 769px) {
  .container {
    padding: 84px 40px;

    h1 {
      font-size: 40px;
      margin-bottom: 0;
    }
  }

  .flex-md {
    display: flex;
  }
}
</style>
