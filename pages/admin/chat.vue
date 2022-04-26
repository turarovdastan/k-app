<template>
<div class="chat-container">
      <Admin-Header title="Чаты"/>
    <div class="chat" :class="type !== 0 && 'chat-active'">
      <div class="chats">
        <div class="chats-form">
          <div class="chats-form-input">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92893 7.92893C9.73721 6.12066 12.2389 5 15 5C17.7611 5 20.2628 6.12066 22.0711 7.92893C23.8793 9.73721 25 12.2389 25 15C25 17.7611 23.8793 20.2628 22.0711 22.0711C20.2628 23.8793 17.7611 25 15 25C12.2389 25 9.73721 23.8793 7.92893 22.0711C6.12066 20.2628 5 17.7611 5 15C5 12.2389 6.12066 9.73721 7.92893 7.92893ZM15 7.5C12.9286 7.5 11.0553 8.3381 9.6967 9.6967C8.3381 11.0553 7.5 12.9286 7.5 15C7.5 17.0714 8.3381 18.9447 9.6967 20.3033C11.0553 21.6619 12.9286 22.5 15 22.5C17.0714 22.5 18.9447 21.6619 20.3033 20.3033C21.6619 18.9447 22.5 17.0714 22.5 15C22.5 12.9286 21.6619 11.0553 20.3033 9.6967C18.9447 8.3381 17.0714 7.5 15 7.5Z" fill="#AEAEAE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6243 21.3565C22.1124 20.8684 22.9039 20.8684 23.392 21.3565L28.1435 26.108C28.6316 26.5961 28.6316 27.3876 28.1435 27.8757C27.6553 28.3639 26.8639 28.3639 26.3757 27.8757L21.6243 23.1243C21.1361 22.6361 21.1361 21.8447 21.6243 21.3565Z" fill="#AEAEAE"/>
            </svg>
            <input placeholder="Поиск" type="text">
          </div>
        </div>
        <div class="chats-list">
          <nuxt-link v-for="(i,k) in users" @click="changeUser(k)" :to="`/admin/chat/${k}`" :key="k" :active-class="'chat-room-active'" class="chat-room">
            <img :src="i.img" alt="">
            <div class="chat-room-description">
              <div class="chat-room-date">04.12.2021</div>
              <div class="chat-room-title">{{ i.name }}</div>
              <div class="chat-room-desc">{{ i.desc | slice}}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="chat-id-hash">
          <nuxt-child keep-alive/>
      </div>
      <Chat-profile v-if="type === 1" />
      <Chat-tickets v-if="type === 2" :title="'Действующие тикеты(2)'" />
      <Chat-tickets-closed-test v-if="type === 3" :title="'Закрытые тикеты (2)'" />
      <Chat-ticket v-if="type === 4" :title="'Тикет #763'" />
    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    computed: {
      type() {
        return this.$store.state.type;
      },
      users() {
        return this.$store.state.users;
      },
      user() {
        return this.$store.state.users.slice(this.$route.params.id, this.$route.params.id + 1)[0]
      },
    },
    methods: {
      changeUser(i){
        const info = {
          user: this.user,
          last: '03 декабря 2021 в 15:30',
          theme: 'Не работает кнопка добавить запись ' + i ,
          desc: 'Когда пытаюсь добавить новую запись, все кнопки работают, но кнопка «Добавить запись» не доступна. Работает через раз. Утром было все нормально, сейчас снова.'
        }
        this.$store.commit('setUserInfo', info)
      }
    },
    watch: {
      '$route': {
        handler(){
          this.changeUser(this.$route.params.id)
        },
        deep: true,
      }
    },
    filters:{
      slice(v){
        if(v.length > 20){
          return `${v.slice(0, 20)}...`
        }
        return v
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';

.chat-container{
  box-shadow: -4px 0px 12px rgba(0, 0, 0, 0.04);
  border-radius: 32px 0px 0px 32px;
  height: 100vh;
  width: 100%;
  background: $bg-white;
}
.chat{
  display: grid;
  grid-template-columns: 1.5fr 3.5fr;
  height: calc(100vh - 128px);
  @media (max-width: 2000px) {
    & {
      grid-template-columns: 2fr 3.5fr;
    }
  }
  @media (max-width: 1630px) {
    & {
      grid-template-columns: 2.5fr 3.5fr;
    }
  }
  @media (max-width: 1460px) {
    & {
      grid-template-columns: .5fr 1fr;
    }
  }
  .chats{
    height: 100%;
    .chats-form{
      box-shadow: 0px 1px 0px $bg-purple;
      background: $bg-purple;
      padding: 21px 31px 21px 44px;
      .chats-form-input{
        display: flex;
        align-items: center;
        width: 100%;
        height: 52px;
        background: $s-purple;
        border-radius: 12px;
        padding: 10px 10px 10px 16px;
        gap:11px;
      }
      input{
        width: 80%;
        height: 32px;
        background: transparent;
        border: none;
        outline: none;
        font-family: 'Inter';
        font-size: 16px;
        line-height: 20px;
        color: $s-dark-grey;
      }
    }
    .chats-list{
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      height: 73vh;
      padding: 22px 30px 0 44px;
      &::-webkit-scrollbar {
        width: 5px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        width: 5px;
        height: 77px;
        background: $s-purple;
        border-radius: 4px;;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: $f-blue;
      }
      .chat-room{
        padding: 13px 12px;
        height: 86px;
        background: #FFFFFF;
        box-shadow: inset 0px -1px 0px #E4E4EF;
        display: flex;
        gap: 15px;
        align-items: center;
        position: relative;
        text-decoration: none;
        cursor: pointer;
        & > img{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }
        &-title{
          font-family: 'Inter';
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: $s-dark-grey;
        }
        &-desc{
          font-family: 'Inter';
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: $f-black;
          margin-top: 6px;
        }
        &-date{
          font-family: 'Inter';
          font-size: 16px;
          line-height: 20px;
          color: $s-dark-grey;
          position: absolute;
          top: 18px;
          right: 10px;
        }
      }
      .chat-room-active{
        background: $bg-light-purple;
        border-radius: 12px;
        box-shadow: none;
      }
    }
  }
}
.chat-active{
  grid-template-columns: 1.5fr 3.5fr 1.5fr;
  @media (max-width: 2000px) {
    & {
      grid-template-columns: 2fr 3.5fr 1.5fr;
    }
  }
  @media (max-width: 1630px) {
    & {
      grid-template-columns: 2.5fr 3.5fr 1.8fr;
    }
  }
  @media (max-width: 1460px) {
    & {
      grid-template-columns: 1fr 1fr .7fr;
    }
  }
}
</style>