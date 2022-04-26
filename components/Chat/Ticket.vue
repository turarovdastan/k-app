<template>
  <div class="chat-profile">
    <div class="chat-profile-header">
    <svg @click="$store.commit('setType', 0)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6L9 12L15 18" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      <div class="chat-profile-title">{{ title }}</div>
    </div>
    <div class="scroller">
    <div class="chat-profile-desc">
      <div class="chat-profile-desc-container">
      <div class="chat-profile-desc-title">{{title}}</div>
      <div class="more-items">
        <h4 class="">Тема обращения</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/calendar.svg" alt="">
          <h5 class="">03 декабря 2021 в 15:30</h5>
        </div>
      </div>
      <div class="more-items">
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
      <div class="more-items">
        <h4 class="">Прикрепленные материалы</h4>
        <div class="more-items-documents">
          <img src="@/assets/icons/test1.svg" alt="">
        </div>
      </div>
      <div class="more-items">
        <h4 class="">Пользователь</h4>
        <div class="contacts">
          <h5 class="name">Вероника Киреева</h5>
          <h5 class="id">ID 2162716271627162</h5>
        </div>
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
  &-title{
      font-family: 'Inter Medium';
      font-weight: 500;
      font-size: 18px;
      line-height: 120%;
      color: $f-black;
  }
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
    &-title{
    font-family: 'Inter Medium';
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    color: $f-black;
  }
  }
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
  .more-items{
    display: flex;
    flex-direction: column;
    gap: 14px;
    .contacts{
      .name{
        font-size: 15px;
        color: $f-black;
      }
      .id{
        font-size: 15px;
        color: $s-dark-grey;
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