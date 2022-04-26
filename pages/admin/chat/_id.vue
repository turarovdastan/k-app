<template>
    <div class="chat-id">
      <div class="chat-id-header">
        <div class="chat-id-profile">
          <img :src="user.img" alt="">
          <div  @click="openInfo" class="chat-id-full-name">{{user.name.split('.')[0]}}</div>
        </div>
        <img src="@/assets/icons/admin/documents.svg" alt="">
      </div>
      <div @click="$store.commit('setType', 4)" class="chat-id-sub-header">
        <div class="chat-id-sub-header-info">
          <div class="chat-id-sub-header-info-ticket">Тикет:</div>
          <div class="chat-id-sub-header-info-id">#1721</div>
        </div>
        <div class="chat-id-sub-header-desc">Не работает кнопка добавить запись </div>
      </div>
      <div ref="messages" class="chat-id-chat">
        <div class="chat-id-chat-date">СЕГОДНЯ</div>
        <div v-for="(i,k) in messages" :key="k" :class="`message-${i.type}`"  class="message">
          <img v-if="i.file" :src="i.file" alt="">
          <div class="chat-id-chat-message"> {{i.message}} </div>
          <span class="chat-id-chat-message-date">{{i.time | messageTime}}</span>
        </div>
      </div>
      <div class="chat-id-form">
        <div class="chat-id-form-input">
          <input @keydown.enter="onMessage" v-model="message" placeholder="Введите сообщение" type="text">
          <svg @click="tooltip = !tooltip" class="shower" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.2171 12.4543C16.6634 12.0079 17.387 12.0079 17.8333 12.4543C18.2797 12.9006 18.2797 13.6242 17.8333 14.0705L13.0654 18.8384C12.4174 19.4864 12.3798 20.5772 13.0654 21.2628C13.751 21.9484 14.8418 21.9108 15.4898 21.2628L24.3791 12.3734C26.2096 10.543 26.1094 7.63875 24.3791 5.90847C22.6488 4.17818 19.7446 4.07804 17.9142 5.90847L9.02481 14.7978C6.10969 17.7129 6.16405 22.4426 9.02481 25.3034C11.8856 28.1641 16.6153 28.2185 19.5304 25.3034L24.2983 20.5355C24.7446 20.0892 25.4682 20.0892 25.9146 20.5355C26.3609 20.9818 26.3609 21.7054 25.9146 22.1517L21.1466 26.9196C17.3305 30.7358 11.1537 30.6648 7.40856 26.9196C3.66339 23.1745 3.59239 16.9977 7.40856 13.1816L16.2979 4.29222C19.0468 1.54329 23.3964 1.69328 25.9954 4.29222C28.5943 6.89116 28.7443 11.2408 25.9954 13.9897L17.106 22.879C15.5894 24.3957 13.0533 24.4831 11.4492 22.879C9.84509 21.2749 9.93254 18.7388 11.4492 17.2222L16.2171 12.4543Z" fill="#868686"/>
          </svg>
          <div class="tooltip" v-if="tooltip">
              <label class="tooltip-item" for="img">
                <img src="@/assets/icons/admin/pikcher.svg" alt="">
                <div class="h4-regular">Фото или видео</div>
                <input @change="onFile" type="file" id="img" accept="image/png, image/gif, image/jpeg">
              </label>
              <label class="tooltip-item" for="doc">
                <img src="@/assets/icons/admin/doc.svg" alt="">
                <div class="h4-regular">Документ</div>
                <input @change="onFile" type="file" id="doc" accept=".doc,.docx">
              </label>
          </div>
        </div>
        <div @click="onMessage" class="chat-id-form-send">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.62538 12.9854C5.87541 11.0669 5.34973 9.58332 5.11662 8.63506C4.82912 7.4655 4.34597 6.17054 4.82854 4.99132C5.12179 4.27474 5.73898 3.69702 6.56737 3.49923C7.65312 3.24 8.67842 3.75319 9.61023 4.25243C11.6423 5.34116 22.2686 10.8992 24.8339 12.2488C26.3319 13.037 28.4877 13.8809 28.567 15.8622C28.6436 17.7794 26.7886 18.6413 25.3488 19.3987C20.0881 22.166 14.8599 24.9963 9.58323 27.7333C8.62399 28.2309 7.5676 28.7726 6.4568 28.4918C5.54765 28.2619 4.93939 27.5869 4.69834 26.8356C4.4848 26.1701 4.57596 25.4851 4.73521 24.8211C5.20856 22.8474 5.8695 20.918 6.60296 19.0275C7.09386 17.7622 7.96544 16.7166 9.06103 15.9935C7.97764 15.2737 7.11491 14.2377 6.62538 12.9854ZM13.9592 15.145C15.1301 15.3809 15.7212 15.5081 15.8453 15.7119C15.957 15.8954 15.9562 16.1268 15.8433 16.3095C15.7117 16.5223 15.0672 16.6475 13.7783 16.8977C12.8895 17.0703 12.16 17.2112 11.9356 17.2525C10.4697 17.5222 9.25606 18.5084 8.73392 19.8542C8.10946 21.4638 7.55556 23.0726 7.11539 24.741C6.67086 26.426 6.59655 26.7076 8.53077 25.7043C13.8722 22.9337 19.1675 20.0738 24.4902 17.2674C25.6744 16.6428 26.2802 16.308 26.2833 15.9677C26.2864 15.6305 25.698 15.288 24.4954 14.6532C19.1796 11.8474 13.8291 9.10592 8.53077 6.26719C6.62737 5.24739 6.7157 5.6012 7.22041 7.62286C7.60755 9.17357 8.17273 10.6657 8.75422 12.1532C9.27818 13.4936 10.4885 14.4753 11.9497 14.745C12.6213 14.869 13.2897 15.0101 13.9592 15.145Z" fill="#556BF4"/>
          </svg>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  data(){
  const time = Date.now()
  return {
    message: '',
    tooltip: false,
    file: '',
    messages: [
                {
                    type: 'from',
                    message: 'Здравствуйте, у вас возникли какие-то проблемы?',
                    time,
                    file: null
                },
            ]
    }
  },
  computed:{
    user() {
      return this.$store.state.users.slice(this.$route.params.id, this.$route.params.id + 1)[0]
    },
  },
  mounted() {
    window.addEventListener('click',(event) => {
      const target = event.target;
      const tooltip = target.closest('.tooltip');
      const shower = target.closest('.shower')
      if(!tooltip && !shower){
        this.tooltip = false
      }
    })
  },
  methods: {
    openInfo() {
      const info = {
        user: this.user,
        last: '03 декабря 2021 в 15:30',
        theme: 'Не работает кнопка добавить запись',
        desc: 'Когда пытаюсь добавить новую запись, все кнопки работают, но кнопка «Добавить запись» не доступна. Работает через раз. Утром было все нормально, сейчас снова.'
      }
      this.$store.commit('setType', 1)
      this.$store.commit('setUserInfo', info)
    },
    getBase64 (file) {
      return new Promise((res,rej)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => res(reader.result));
        reader.readAsDataURL(file);
      })
    },
    async onFile(e) {
      this.file = await this.getBase64(e.target.files[0]);
    },
    onMessage() {
      const time = Date.now();
      const message = this.message;
      const type = 'to'
      const file = this.file
      if(!message.trim()) return
      this.messages.push({
        type,
        message,
        time,
        file
      })
      this.message = ''
      this.file = ''
      const doc = this.$refs.messages;
      doc.scrollTo(0,doc.scrollHeight + 100);
    }
  },
  filters: {
        messageTime(val) {
            const date = new Date(val);
            return `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`
        }
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/css/vars.scss';

.chat-id{
  margin-left: 1px;
  position: relative;
  height: 100%;
  contain: content;
  &-header{
    width: 100%;
    height: 96px;
    background: #E5E8FF;
    box-shadow: 0px 1px 0px #EAEAEB;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 17px 44px 17px 30px;
  }
  &-profile{
    display: flex;
    align-items: center;
    gap: 12px;
    & > img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &-full-name{
    font-family: 'Inter';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: $f-black;
  }
  &-sub-header{
    width: 100%;
    height: 94px;
    background: $bg-white;
    box-shadow: 0px 1px 0px #EAEAEB;
    border-left: 7px solid $f-blue;
    padding: 0 30px;
    display: flex;
    align-items: center;
    gap: 6px;
    @media (max-width: 1460px) {
      &{
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
    }
    &-desc{
      font-family: 'Inter';
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
    &-info{
      display: flex;
      gap: 6px;
      align-items: center;
      &-ticket{
        font-family: 'Inter Medium';
        font-size: 18px;
        line-height: 20px;
        color: $f-blue;
      }
      &-id{
        font-family: 'Inter Medium';
        font-size: 18px;
        line-height: 20px;
      }
    }
  }
  &-chat{
    position: relative;
    width: 100%;
    height: calc(100vh - 94px - 94px - 118px - 128px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 30px 30px 30px;
    .message{
      position: relative;
      padding-top: 18px;
      img{
        max-height: 350px;
        width: 100%;
        object-fit: contain;
      }
    }
    &-message-date{
      position: absolute;
      right: 18px;
      bottom: 9px;
      font-size: 14px;
    }
    .message-from{
      background: $f-blue;
      width: 60%;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: $bg-white;
      border-radius: 12px;
      .chat-id-chat-message-date{
        color: $s-light-grey;
      }
    @media (max-width: 1460px) {
      &{
        width: 85%;
     }
    }
    }
    .message-to{
      background: #F4F5FD;
      width: 60%;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: $bg-white;
      border-radius: 12px;
      align-self: flex-end;
      color: $f-black;
      .chat-id-chat-message-date{
        color: $s-dark-grey;
      }
    @media (max-width: 1460px) {
      &{
        width: 85%;
     }
    }
    }
    &-message{
      padding: 0px 18px 22px  18px;
      word-break: break-all;
    }
    &-date{
      font-family: 'Inter Medium';
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: $s-dark-grey;
      text-align: center;
      margin: 34px 0;
    }
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
  &-form{
    height: 118px;
    background: $bg-purple;
    box-shadow: 0px 1px 0px #EAEAEB;
    position: absolute;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 24px 24px 24px 31px;
    gap: 18px;
    &-input{
      display: flex;
      width: 100%;
      background: $s-purple;
      padding: 10px 21px 10px 16px;
      height: 70px;
      border-radius: 12px;
      align-items: center;
      gap: 20px;
      position: relative;
      input{
        width: 100%;
        height: 70%;
        border: none;
        outline: none;
        background: transparent;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: $s-dark-grey;
      }
      .tooltip{
        display: flex;
        position: absolute;
        padding: 20px 12px;
        right: 18px;
        top: -98px;
        z-index: 2;
        min-width: 202px;
        min-height: 96px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 2px 4px 15px rgba(62, 67, 104, 0.15);
        backdrop-filter: blur(15.1376px);
        border-radius: 12px;
        flex-direction: column;
        justify-content: space-between;
        input[type="file"]{
          display: none;
        }
        .tooltip-item{
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
      }
    }
    }
    &-send{
      width: 70px;
      height: 70px;
      background: $s-purple;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>