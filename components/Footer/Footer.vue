<script setup lang="ts">
const fooInfo = [
  { id: 1, label: "Il Gruppo" },
  { id: 2, label: "Note Legali" },
  { id: 3, label: "Chi Siamo" },
  { id: 4, label: "Condizioni d'Uso" },
  { id: 5, label: "Privacy" },
  { id: 6, label: "Scrivici" },
  { id: 7, label: "Pubblicità" },
];
</script>

<template>
  <div class="footer">
    <ul class="footer--list">
      <li v-for="{ id, label } in fooInfo" :key="id" class="footer--list--item">
        <h5>{{ label }}</h5>
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
  padding: 2rem 1rem;
}

.footer--list {
  color: black;
  font-weight: 700;
  font-size: 1rem;

  .footer--list--item {
    margin-bottom: 1rem;
  }
}

.footer-info {
  font-weight: 400;
  font-size: 0.9rem;
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
    padding: 3rem 2.5rem;
  }

  .footer--list {
    gap: 2rem;
  }

  .footer--list--item {
    font-weight: 400;
    font-size: 0.9rem;
  }
}
</style>
