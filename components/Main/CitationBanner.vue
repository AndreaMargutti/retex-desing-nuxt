<template>
  <div class="container flex gap-12">
    <span class="container-icon">
      <svg
        width="34"
        height="27"
        viewBox="0 0 34 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3158 0L10 12.8171H14.2105V27H0V12.607L3.78947 0H12.3158ZM32.1053 0L29.7895 12.8171H34V27H19.7895V12.607L23.5789 0H32.1053Z"
          fill="#010101"
          fill-opacity="0.05"
        />
      </svg>
    </span>
    <div>
      <h1>Essere troppo seri non è cosa molto seria</h1>
      <h5>[Detto Africano]</h5>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 32px 16px;
  background-color: #f4f4f4;
  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
  }

  .container-icon {
    top: 30px;
    left: 30px;
  }
}

@media screen and (min-width: 769px) {
  .container {
    padding: 84px 40px;
    background-image: url("https://s3-alpha-sig.figma.com/img/93be/d634/e8c8234062df3f792a0d9928926e5f47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KOzRsTCWt4so2lUjrPgNPgRBaH7qupJ0vCzjFDN3hmUgiF9DQRQD2eSyvJnMhL5eM2eDYk97ztdY~cEnyj6w5vS32-O9ehkekALra7jrm254iTiRywRegJrQg~7zsD2ZnDU5yNpkbpNKJbXdCv4lIgrFLEbbBS7c1T3smeCTc57ElBne5~ruXdqDQEgorn7sB6UcqPaJaT2aoBFmLva8AjPiCm5V31FENFVLeM1uzey70t3xvWHkGsi~6RUh2Z~C-8nj9leaau3640eXpLbPwSi0oV-5xCKdNqY-kfQiYA5tPhFBDZ1At9s3t-PgqD2o3UgBwVo~vONtsz9vEnVxyA__");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    h1 {
      color: white;
      font-weight: 700;
      font-size: 40px;
    }

    h5 {
      color: white;
      font-weight: 600;
      font-size: 16px;
    }

    .container-icon {
      color: #ffffff1a;
      width: 54px;
      height: 43px;
    }
  }
}
</style>
