<template>
<div class="missed">
  <div  class="table">
    <div v-if="!mediaWidth.matches" class="table-head">
      <div class="table-head-col h4">№</div>
      <div class="table-head-col h4">Пользователь</div>
      <div class="table-head-col sort-by-date">
       <h4 class="h4">Дата и время</h4> 
       <img @click="sortModal = true" class="sortbydate" src="@/assets/icons/admin/sort.svg" alt="">
       <div v-if="sortModal" class="sort-toolbar">
         <h4 class="h4">Отсортировать</h4>
         <div class="line"></div>
         <div @click="sortModal = false"  class="sort-toolbar-items">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.692852 3.40258L3.97345 0.188216C4.22971 -0.0627789 4.64541 -0.0626986 4.90151 0.188216L8.18198 3.40258C8.59501 3.80718 8.30088 4.50002 7.71793 4.50002H5.75V17.3571C5.75 17.7122 5.4562 18 5.09375 18H3.78125C3.41879 18 3.125 17.7122 3.125 17.3571V4.50002H1.1569C0.572799 4.50002 0.280686 3.80637 0.692852 3.40258ZM10.3437 2.57145H20.8438C21.2062 2.57145 21.5 2.28365 21.5 1.92859V0.642877C21.5 0.287819 21.2062 2.0168e-05 20.8438 2.0168e-05H10.3437C9.98129 2.0168e-05 9.6875 0.287819 9.6875 0.642877V1.92859C9.6875 2.28365 9.98129 2.57145 10.3437 2.57145ZM9.6875 7.07144V5.78573C9.6875 5.43067 9.98129 5.14287 10.3437 5.14287H18.2188C18.5812 5.14287 18.875 5.43067 18.875 5.78573V7.07144C18.875 7.4265 18.5812 7.7143 18.2188 7.7143H10.3437C9.98129 7.7143 9.6875 7.4265 9.6875 7.07144ZM9.6875 17.3571V16.0714C9.6875 15.7164 9.98129 15.4286 10.3437 15.4286H12.9687C13.3312 15.4286 13.625 15.7164 13.625 16.0714V17.3571C13.625 17.7122 13.3312 18 12.9687 18H10.3437C9.98129 18 9.6875 17.7122 9.6875 17.3571ZM9.6875 12.2143V10.9286C9.6875 10.5735 9.98129 10.2857 10.3437 10.2857H15.5937C15.9562 10.2857 16.25 10.5735 16.25 10.9286V12.2143C16.25 12.5693 15.9562 12.8571 15.5937 12.8571H10.3437C9.98129 12.8571 9.6875 12.5693 9.6875 12.2143Z" fill="#556BF4"/>
          </svg>
          <h4 class="h4-regular">Сначала новые</h4>
         </div>
         <div @click="sortModal = false" class="sort-toolbar-items">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.692852 3.40258L3.97345 0.188216C4.22971 -0.0627789 4.64541 -0.0626986 4.90151 0.188216L8.18198 3.40258C8.59501 3.80718 8.30088 4.50002 7.71793 4.50002H5.75V17.3571C5.75 17.7122 5.4562 18 5.09375 18H3.78125C3.41879 18 3.125 17.7122 3.125 17.3571V4.50002H1.1569C0.572799 4.50002 0.280686 3.80637 0.692852 3.40258ZM10.3437 2.57145H20.8438C21.2062 2.57145 21.5 2.28365 21.5 1.92859V0.642877C21.5 0.287819 21.2062 2.0168e-05 20.8438 2.0168e-05H10.3437C9.98129 2.0168e-05 9.6875 0.287819 9.6875 0.642877V1.92859C9.6875 2.28365 9.98129 2.57145 10.3437 2.57145ZM9.6875 7.07144V5.78573C9.6875 5.43067 9.98129 5.14287 10.3437 5.14287H18.2188C18.5812 5.14287 18.875 5.43067 18.875 5.78573V7.07144C18.875 7.4265 18.5812 7.7143 18.2188 7.7143H10.3437C9.98129 7.7143 9.6875 7.4265 9.6875 7.07144ZM9.6875 17.3571V16.0714C9.6875 15.7164 9.98129 15.4286 10.3437 15.4286H12.9687C13.3312 15.4286 13.625 15.7164 13.625 16.0714V17.3571C13.625 17.7122 13.3312 18 12.9687 18H10.3437C9.98129 18 9.6875 17.7122 9.6875 17.3571ZM9.6875 12.2143V10.9286C9.6875 10.5735 9.98129 10.2857 10.3437 10.2857H15.5937C15.9562 10.2857 16.25 10.5735 16.25 10.9286V12.2143C16.25 12.5693 15.9562 12.8571 15.5937 12.8571H10.3437C9.98129 12.8571 9.6875 12.5693 9.6875 12.2143Z" fill="#556BF4"/>
          </svg>
          <h4 class="h4-regular">Сначала старые</h4>
         </div>
       </div>
      </div>
      <div class="table-head-col h4">Тема</div>
      <div class="table-head-col h4">Описание проблемы</div>
      <div class="table-head-col h4"></div>
    </div>
    <div v-if="!mediaWidth.matches" class="table-body">
      <div v-for="user of +count" :key="user" class="row">
        <div class="table-body-col h5">#1721</div>
        <div class="table-body-col h5">
          <div class="user">
            <img src="@/assets/icons/test.svg" alt="">
            <div class="h5">Алина Л.</div>
          </div>
        </div>
        <div class="table-body-col">
          <div class="h5">03.12.2021</div>
          <div class="h5 text-grey">15:30</div>
        </div>
        <div class="table-body-col h5">Не работает кнопка добавить запись</div>
        <div @click="modalData = {}"  class="table-body-col h5" style="cursor:pointer">Когда пытаюсь добавить новую запись, все кнопки работают, но кнопка «Добавить запись» не доступна</div>
        <div class="table-body-col h5 shower">
          <img @click="onTooltip(user)" src="@/assets/icons/admin/settings.svg" alt="">
          <div class="tooltip" :ref="user">
            <div @click="modalData = {}" class="tooltip-item">
              <img src="@/assets/icons/admin/tooltip-more.svg" alt="">
              <div class="h4-regular">Подробнее</div>
            </div>
            <div class="tooltip-item">
              <img src="@/assets/icons/admin/tooltip-chat.svg" alt="">
              <div class="h4-regular">Взять</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="table-body-media">
      <div v-for="user of +count" :key="user" class="media">
        <div class="media-header">
            <div class="user">
              <img src="@/assets/icons/test.svg" alt="">
              <div>
                <div class="h5">Алина Л.</div>
                <div class="h5 medium">#79790{{user}}</div>
              </div>
            </div>
            <img @click="onTooltip(user)" class="shower" src="@/assets/icons/admin/settings.svg" alt="">
            <div class="tooltip" :ref="user">
              <div @click="modalData = {}" class="tooltip-item">
                <img src="@/assets/icons/admin/tooltip-more.svg" alt="">
                <div class="h4-regular">Подробнее</div>
              </div>
              <div class="tooltip-item">
                <img src="@/assets/icons/admin/tooltip-chat.svg" alt="">
                <div class="h4-regular">Взять</div>
              </div>
          </div>
          </div>
          <div class="media-body">
            <div class="media-items">
              <h4 class="h4">Дата</h4>
              <div class="media-items-desc">
                <h5 class="h5">03 декабря 2021 в 15:30</h5>
              </div>
            </div>
            <div class="media-items">
              <h4 class="h4">Тема обращения</h4>
              <div class="media-items-desc">
                <h5 class="h5">Не работает кнопка добавить запись</h5>
              </div>
            </div>
            <div class="media-items">
              <h4 class="h4">Описание проблемы</h4>
              <div class="media-items-desc">
                <h5 class="h5">Клиент записался, оставил номер, но в журнале номер не отображается, что д...</h5>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  <footer class="missed-footer">
    <div class="counter">
      <div class="counter-desc h4-regular">
        Тикетов на странице:
      </div>
      <div class="count" :class="focus && 'active'">
        <input @keyup.enter="($event)=> count = +$event.target.value" @focus="focus = true" @blur="focus = false" type="text" value="10">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.983511 0.5H7.01398C7.43117 0.5 7.63976 1.00391 7.34445 1.29922L4.33039 4.31562C4.14757 4.49844 3.84992 4.49844 3.66711 4.31562L0.653042 1.29922C0.35773 1.00391 0.566324 0.5 0.983511 0.5Z" :fill="focus ? '#556BF4' : '#868686'"/>
        </svg>
      </div>
    </div>
    <UI-pagination/>
  </footer>

  <Modal-more v-if="modalData" type="missed" @close="modalData = null" />
</div>
</template>

<script>
export default {
  data: () => ({
    focus: false,
    count: 10,
    modalData:null,
    sortModal: false,
    mediaWidth: {}
  }),
  mounted() {
    this.mediaWidth = window.matchMedia( "(max-width: 1000px)" );
    window.addEventListener('click',(event) => {
      const target = event.target;
      const tooltip = target.closest('.tooltip');
      const shower = target.closest('.shower');
      const sortDate = target.closest('.sort-toolbar');
      const sortDateBtn = target.closest('.sortbydate');
      if(!tooltip && !shower){
        for(let i = 1; i < this.count; i++){
          this.$refs[i][0]?.classList.remove('active')
        }
      }

      if(!sortDate && !sortDateBtn) {
        this.sortModal = false
      }
    })
  },
  computed:{
  },
  methods:{
    onTooltip(ref) {
      this.$refs[ref][0].classList.toggle('active')
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.missed{
  margin-top: 45px;
  @media (max-width: 800px) {
    margin-top: 19px;
  }
}
.user{
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  img{
    object-fit: cover;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
}
.table{
  width: 100%;
  &-head{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1.5fr 2fr 4fr .5fr;
    .sort-by-date{
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .sort-toolbar{
        position: absolute;
        top: 64px;
        left: -10%;
        z-index: 2;
        width: 271px;
        height: 172px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 2px 4px 15px rgba(62, 67, 104, 0.15);
        backdrop-filter: blur(15.1376px);
        border-radius: 12px;
        padding: 18px 20px;
        h4{
          text-align: center;
        }
        .line{
          width: 100%;
          height: 2px;
          background: $s-purple;
          margin: 9px 0 20px 0;
        }
        &-items{
          display: flex;
          align-items: center;
          gap: 11.5px;
          cursor: pointer;
        }
         &-items:not(:first-child){
          margin-top: 20px;
        }
      }
    }
    &-col{
      background: $bg-purple;
      padding: 19px 16px;
      box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.04);
      &:last-child{
        box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.04);
      }
    }
    &-col:first-child{
      border-radius: 12px 0px 0px 0px;
    }
    &-col:last-child{
      border-radius: 0px 12px 0px 0px;
    }
  }
  &-body{
    display: flex;
    flex-direction: column;
    .row{
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1.5fr 1.5fr 2fr 4fr .5fr;
      box-shadow: -1px 0px 2px rgba(0, 0, 0, 0.04);
      position: relative;
    }
    &-col{
      background: $bg-white;
      padding: 10px 16px;
      max-height: 55px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.04);
      &:last-child{
        box-shadow: 1px -1px 2px rgba(0, 0, 0, 0.04);
        align-items: center;
        }
        img{
          max-width: 24px;
          max-height: 24px;
        }
      }
      .tooltip{
        display: none;
        position: absolute;
        padding: 20px 12px;
        right: 16px;
        bottom: -78px;
        z-index: 2;
        width: 161px;
        min-height: 96px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 2px 4px 15px rgba(62, 67, 104, 0.15);
        backdrop-filter: blur(15.1376px);
        border-radius: 12px;
        flex-direction: column;
        justify-content: space-between;
        .tooltip-item{
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
      }
    }
    .active{
      display: flex;
    }
    .row:last-child{
      box-shadow: -1px 0px 2px rgba(0, 0, 0, 0.04);
      .table-body-col:first-child{
        border-radius: 0px 0px 0px 12px;
      }
      .table-body-col:last-child{
        border-radius: 0px 0px 12px 0px;
        box-shadow: 1px -1px 2px rgba(0, 0, 0, 0.04);
      }
    }
  }
}
.table-body-media{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, calc(100% / 4 - 20px * 4)));
  grid-gap: 20px;
  @media (max-width:812px) {
    grid-template-columns: 1fr;
  }
  .media{
    background: $bg-white;
    border: 2px solid $s-purple;
    box-sizing: border-box;
    border-radius: 12px;
    &-header{
      border-radius: 12px 12px 0 0 ;
      background: $bg-purple;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11px 14px;
      position: relative;
      .tooltip{
        display: none;
        position: absolute;
        padding: 20px 12px;
        right: 11px;
        bottom: -82px;
        z-index: 2;
        min-width: 161px;
        min-height: 96px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 2px 4px 15px rgba(62, 67, 104, 0.15);
        backdrop-filter: blur(15.1376px);
        border-radius: 12px;
        flex-direction: column;
        justify-content: space-between;
        .tooltip-item{
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
      }
      }
    .active{
      display: flex;
    }
    }
    &-body{
      padding: 17px 16px;
    }
    &-items{
      .h4{
        font-size: 16px;
      }
      .h5{
        font-size: 15px;
      }
      &-desc{
        margin-top: 8px;
      }
      &:not(:first-child){
        margin-top: 8px;
      }
    }
  }
}
.missed-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 54px;
  @media (max-width: 800px) {
    display: none;
  }
  .counter{
    display: flex;
    align-items: center;
    gap:10px;
    .counter-desc{
      color: $s-dark-grey;
    }
    .count{
      width: 64px;
      height: 34px;
      border: 2px solid $s-purple;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 15px;
      gap: 2px;
        input{
          outline: none;
          border: none;
          width: 80%;
          font-size: 18px;
          line-height: 22px;
          color: $f-black;
        }
        input:focus{
          width: 100%;
        }
        input:focus + svg{
          display: none;
        }
    }
    .count.active{
        border: 2px solid $f-blue;
    }
  }
}

</style>