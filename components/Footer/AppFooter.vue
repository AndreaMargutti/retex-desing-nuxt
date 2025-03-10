<template>
  <div class="footer">
    <ul class="footer--list">
      <li class="footer--list--item">
        <h5>Il gruppo</h5>
      </li>
      <li class="footer--list--item">
        <h5>Note Legali</h5>
      </li>
      <li class="footer--list--item">
        <h5>Chi Siamo</h5>
      </li>
      <li class="footer--list--item">
        <h5>Condizioni d'Uso</h5>
      </li>
      <li class="footer--list--item">
        <h5>Privacy</h5>
      </li>
      <li class="footer--list--item">
        <h5>Scrivici</h5>
      </li>
      <li class="footer--list--item">
        <h5>Pubblicità</h5>
      </li>
    </ul>

    <div>
      <h5 class="footer--info">@ 1994-2022 Vita Società Editoriale S.p.A.</h5>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #f4f4f4;
  padding: 24px 16px;
}

.footer--list {
  color: black;
  font-weight: 700;
  font-size: 16px;

  .footer--list--item {
    margin-bottom: 16px;
  }
}

.footer-info {
  font-weight: 400;
  font-size: 14px;
}

// responsive desktop

@media screen and (min-width: 769px) {
  .footer,
  .footer--list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .footer {
    padding: 48px 40px;
  }

  .footer--list {
    gap: 24px;
  }

  .footer--list--item {
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
