<template>
  <div class="chat-profile">
    <div class="chat-profile-header">
    <svg @click="$store.commit('setType', 1)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6L9 12L15 18" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      <div class="chat-profile-title">{{ title }}</div>
    </div>
    <div class="scroller">
    <div class="chat-profile-container">
      <img :src="user.img" alt="">
      <div class="chat-profile-full-name">{{ user.name.split('.')[0] }}</div>
      <div class="chat-profile-id">ID {{ user.name.split('.')[1] }}</div>
    </div>
    <div class="chat-profile-desc">
      <div class="chat-profile-desc-container">
      <div class="more-items">
        <div class="more-items-link">
          #1721 от 13.12.2021
        </div>
        <h4 class="">Тема обращения</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/document.svg" alt="">
          <h5 class="">Не работает кнопка добавить запись</h5>
        </div>
      </div>
      <div class="more-items">
        <h4 class="">Описание проблемы</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/document.svg" alt="">
          <h5 class="">Когда пытаюсь добавить новую запись, все кнопки работают, но кнопка «Добавить запись» не доступна. Работает через раз. Утром было все нормально, сейчас снова.</h5>
        </div>
      </div>
      </div>
    </div>
    <div class="chat-profile-desc">
      <div class="chat-profile-desc-container">
      <div class="more-items">
        <div class="more-items-link">
          #1721 от 13.12.2021
        </div>
        <h4 class="">Тема обращения</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/document.svg" alt="">
          <h5 class="">Не работает кнопка добавить запись</h5>
        </div>
      </div>
      <div class="more-items">
        <h4 class="">Описание проблемы</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/document.svg" alt="">
          <h5 class="">Когда пытаюсь добавить новую запись, все кнопки работают, но кнопка «Добавить запись» не доступна. Работает через раз. Утром было все нормально, сейчас снова.</h5>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  computed: {
      user() {
        return this.$store.state.users.slice(this.$route.params.id, this.$route.params.id + 1)[0]
      },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.chat-profile{
  margin-left: 2px;
  .scroller{
      overflow-y: scroll;
      max-height: calc(100vh - 128px - 94px);
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
      }
      &::-webkit-scrollbar-thumb {
        width: 5px;
        height: 77px;
        background: $s-purple;
        border-radius: 4px;;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: $f-blue;
      }
  }
  &-header{
    width: 100%;
    height: 94px;
    background: #E5E8FF;
    box-shadow: 0px 1px 0px #EAEAEB;
    display: flex;
    align-items: center;
    padding: 17px 44px 17px 30px;
    gap: 17px;
    &-title{
      font-family: 'Inter Medium';
      font-weight: 500;
      font-size: 18px;
      line-height: 120%;
      color: $f-black;
    }
  }
  &-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    padding: 43px 0 34px 0;
    border-bottom: 1px solid #EAEAEB;
    & > img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &-full-name{
      font-family: 'Inter Medium';
      font-weight: 500;
      font-size: 18px;
      line-height: 120%;
      color: $f-black;
  }
  &-id{
    font-family: 'Inter';
    font-size: 16px;
    line-height: 20px;
    color: $s-dark-grey;
  }
  &-desc-container{
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &-desc{
    border-bottom: 1px solid #EAEAEB;
  }
  .more-items{
    display: flex;
    flex-direction: column;
    gap: 14px;
    .taken{
      display: flex;
      align-items: center;
      gap: 6px;
      &-text{
        color: $t-green;
        font-size: 16px;
      }
    }
    .no-taken{
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-btn{
        height: 44px;
        background: $f-blue;
        width: 124px;
        border-radius: 8px;
        border: none;
        outline: none;
        color: $bg-white;
        font-size: 14px;
      }
      &-wrapper{
        display: flex;
        align-items: center;
        gap: 6px;
      }
      &-text{
        color: $t-red;
        font-size: 16px;
      }
    }
    &-link{
      cursor: pointer;
      font-family: 'Inter Medium';
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      color: $f-blue;
      text-decoration: underline;
    }
    h4{
      font-family: 'Inter Medium';
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      color: $f-black;
    }
    h5{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: $f-black;
    }
    &-documents{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      img{
        object-fit: cover;
        width: 100%;
        height: 108px;
      }
    }
    &-desc{
      display: flex;
      align-items: flex-start;
      gap: 7px;
    }
    .id{
      color: $s-dark-grey;
    }
  }
}
</style>