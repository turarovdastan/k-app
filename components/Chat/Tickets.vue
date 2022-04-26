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
        <div class="no-taken">
          <div class="no-taken-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0006 1.71484C17.6812 1.71484 22.2863 6.31991 22.2863 12.0006C22.2863 17.6812 17.6812 22.2863 12.0006 22.2863C6.31991 22.2863 1.71484 17.6812 1.71484 12.0006C1.71484 6.31991 6.31991 1.71484 12.0006 1.71484ZM12.0006 3.42913C7.26669 3.42913 3.42913 7.26669 3.42913 12.0006C3.42913 16.7344 7.26669 20.572 12.0006 20.572C16.7344 20.572 20.572 16.7344 20.572 12.0006C20.572 7.26669 16.7344 3.42913 12.0006 3.42913ZM8.39447 8.39447C8.7292 8.05973 9.27191 8.05973 9.60665 8.39447L12.0006 10.7877L14.3945 8.39447C14.7035 8.08548 15.1896 8.06171 15.5259 8.32316L15.6066 8.39447C15.9414 8.7292 15.9414 9.27191 15.6066 9.60665L13.2134 12.0006L15.6066 14.3945C15.9156 14.7035 15.9394 15.1896 15.678 15.5259L15.6066 15.6066C15.2719 15.9414 14.7292 15.9414 14.3945 15.6066L12.0006 13.2134L9.60665 15.6066C9.29766 15.9156 8.81146 15.9394 8.47521 15.678L8.39447 15.6066C8.05973 15.2719 8.05973 14.7292 8.39447 14.3945L10.7877 12.0006L8.39447 9.60665C8.08548 9.29766 8.06171 8.81146 8.32316 8.47521L8.39447 8.39447Z" fill="#FF2D55"/>
            </svg>
            <div class="no-taken-text">Тикет взят в работу</div>
          </div>
          <button class="no-taken-btn">Взять</button>
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
        <div class="taken">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9632 9.26324C15.3147 8.91177 15.8845 8.91177 16.236 9.26324C16.5875 9.61471 16.5875 10.1846 16.236 10.536L11.636 15.136C11.2845 15.4875 10.7147 15.4875 10.3632 15.136L7.76321 12.536C7.41174 12.1846 7.41174 11.6147 7.76321 11.2632C8.11468 10.9118 8.68453 10.9118 9.036 11.2632L10.9996 13.2268L14.9632 9.26324Z" fill="#439F6E"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 2.09961C17.4667 2.09961 21.8996 6.53249 21.8996 11.9996C21.8996 17.4667 17.4667 21.8996 11.9996 21.8996C6.53249 21.8996 2.09961 17.4667 2.09961 11.9996C2.09961 6.53249 6.53249 2.09961 11.9996 2.09961ZM11.9996 3.89961C7.5256 3.89961 3.89961 7.5256 3.89961 11.9996C3.89961 16.4736 7.52561 20.0996 11.9996 20.0996C16.4736 20.0996 20.0996 16.4736 20.0996 11.9996C20.0996 7.52561 16.4736 3.89961 11.9996 3.89961Z" fill="#439F6E"/>
          </svg>
          <div class="taken-text">Тикет взят в работу</div>
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