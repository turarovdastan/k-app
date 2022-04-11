<template>
  <div class="more-container">
    <div class="more">
      <img class="close" @click="$emit('close')" src="@/assets/icons/close.svg" alt="">
      <div  @click="$emit('close')" class="back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5607 18.8536C14.3654 19.0488 14.0488 19.0488 13.8535 18.8536L7.14141 12.1414C7.06331 12.0633 7.06331 11.9367 7.14141 11.8586L13.8535 5.14645C14.0488 4.95118 14.3654 4.95118 14.5607 5.14645C14.7559 5.34171 14.7559 5.65829 14.5607 5.85355L8.41421 12L14.5607 18.1464C14.7559 18.3417 14.7559 18.6583 14.5607 18.8536Z" stroke="#556BF4" stroke-linecap="round"/>
        </svg>
        <span class="h2">Назад</span>
      </div>
      <h1 class="h1">Подробнее</h1>
      <h2 class="h2">Тикет #1254</h2>
      <div class="more-items">
        <h4 class="h4">Дата</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/calendar.svg" alt="">
          <h5 class="h5">03 декабря 2021 в 15:30</h5>
        </div>
      </div>
      <div class="more-items">
        <h4 class="h4">Тема обращения</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/document.svg" alt="">
          <h5 class="h5">Не работает кнопка добавить запись</h5>
        </div>
      </div>
      <div class="more-items">
        <h4 class="h4">Описание проблемы</h4>
        <div class="more-items-desc">
          <img src="@/assets/icons/admin/document.svg" alt="">
          <h5 class="h5">Когда пытаюсь добавить новую запись, все кнопки работают, но кнопка «Добавить запись» не доступна. Работает через раз. Утром было все нормально, сейчас снова.</h5>
        </div>
      </div>
      <div class="more-items">
        <h4 class="h4">Прикрепленные материалы</h4>
        <div class="more-items-documents">
          <img src="@/assets/icons/test1.svg" alt="">
        </div>
      </div>
      <div class="more-items">
        <h4 class="h4">Пользователь</h4>
        <div class="contacts">
          <h5 class="h5">Вероника Киреева</h5>
          <h5 class="h5 id">ID 2162716271627162</h5>
        </div>
      </div>
      <div v-if="type === 'closed'" class="more-items">
        <h4 class="h4">Статус</h4>
        <div class="contacts">
          <h5 class="h5">Закрыт пользователем 03 декабря 2021 в 15:45</h5>
        </div>
      </div>
      <div v-if="type === 'closed'" class="more-items">
        <h4 class="h4">Саппорт</h4>
        <div class="contacts">
          <h5 class="h5">Евгений Смирнов</h5>
          <h5 class="h5 id">ID 31877</h5>
        </div>
      </div>
      <UI-BTN @onclick="$emit('close')" v-if="type === 'missed' || type === 'taken'" :text="type === 'missed' ? 'Взять' : 'Открыть чат'" style="margin-top:38px;" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'missed'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.more-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  overflow-y: scroll;
  padding: 186px 0 50px 0;
  @media (max-width: 500px) {
    padding: 0;
    align-items: flex-start;
  }
}
.more-container::-webkit-scrollbar{
  display: none;
}
.more{
  width: 448px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 8px 16px 60px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(60px);
  border-radius: 20px;
  padding: 28px 24px 38px 24px;
  position: relative;
  .back{
    display: none;
  }
  & > h1{
    display: none;
  }
  & > h2{
    margin-bottom: 24px;
  }
  .close{
    position: absolute;
    right: 29px;
    top: 35px;
  }
  &-items{
    display: flex;
    flex-direction: column;
    gap: 14px;
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
    &:not(:first-child){
      margin-top: 22px;
    }
    .id{
      color: $s-dark-grey;
    }
  }
 @media (max-width: 500px) {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
    .close{
      display: none;
    }
    .back{
      display: flex;
      align-items: center;
      gap: 10px;
      position: absolute;    
      top: 27px;
      left: 20px;
      span.h2{
        color:$f-blue;
      }
    }
    & > h1{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0 31px 0;
    }
    & > h2{
      font-size: 20px;
    }
  }
}
</style>