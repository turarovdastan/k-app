<template>
  <div id="app">
    <div class="main-page">
        <h1 >Лендинг</h1>
        <UI-BTN @onclick="showModal" style="max-width:343px;" text="Личный кабинет" />
    </div>

    <AuthModal v-if="authModal" @close="authModal = false" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    authModal: false,
  }),
  mounted() {
      document.body.classList.remove('modal-open')
  },
  methods: {
    showModal() {
        this.authModal = true;
    }
  }
}
</script>

<style lang="scss">
.main-page{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    h1{
        margin-bottom: 50px;
        font-weight: 700;
        font-size: 63px;
    }
}
</style>
