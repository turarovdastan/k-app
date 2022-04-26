<template>
  <div class="chat-profile">
    <div class="chat-profile-header">
      <svg @click="$store.commit('setType', 0)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.39412 5.39412C5.72885 5.05938 6.27157 5.05938 6.6063 5.39412L12.0002 10.7874L17.3941 5.39412C17.7031 5.08513 18.1893 5.06136 18.5256 5.32281L18.6063 5.39412C18.941 5.72885 18.941 6.27157 18.6063 6.6063L13.2131 12.0002L18.6063 17.3941C18.9153 17.7031 18.9391 18.1893 18.6776 18.5256L18.6063 18.6063C18.2716 18.941 17.7289 18.941 17.3941 18.6063L12.0002 13.2131L6.6063 18.6063C6.29731 18.9153 5.81112 18.9391 5.47487 18.6776L5.39412 18.6063C5.05938 18.2716 5.05938 17.7289 5.39412 17.3941L10.7874 12.0002L5.39412 6.6063C5.08513 6.29731 5.06136 5.81112 5.32281 5.47487L5.39412 5.39412Z" fill="#141414"/>
      </svg>
      <div class="chat-profile-title">Данные пользователя</div>
    </div>
    <div class="scroller">
    <div class="chat-profile-container">
      <img :src="user.user.img" alt="">
      <div class="chat-profile-full-name">{{user.user.name.split('.')[0]}}</div>
      <div class="chat-profile-id">ID {{user.user.name.split('.')[1]}}</div>
    </div>
    <div class="chat-profile-desc">
      <div class="chat-profile-desc-container">
      <div class="more-items">
        <h4 class="">Последнее обращение</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/calendar.svg" alt="">
          <h5 class="">{{user.last}}</h5>
        </div>
      </div>
      <div class="more-items">
        <h4 class="">Тема обращения</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/document.svg" alt="">
          <h5 class="">{{user.theme}}</h5>
        </div>
      </div>
      <div class="more-items">
        <h4 class="">Описание проблемы</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/document.svg" alt="">
          <h5 class="">{{user.desc}}</h5>
        </div>
      </div>
      </div>
    </div>
    <div class="chat-profile-tickets">
      <div @click="$store.commit('setType', 2)" class="chat-profile-tickets-item">
        <div class="text">Действующие тикеты(2)</div>
        <img src="@/assets/icons/admin/ticket-arrow.svg" alt="">
      </div>
      <div @click="$store.commit('setType', 3)" class="chat-profile-tickets-item">
        <div class="text">Закрытые тикеты(2)</div>
        <img src="@/assets/icons/admin/ticket-arrow.svg" alt="">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.userInfo;
    }
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
  &-tickets{
    display: flex;
    flex-direction: column;
    gap : 28px;
    padding: 21px 16px;
    &-item{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text{
        font-family: 'Inter Medium';
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        color: $f-black;
      }
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