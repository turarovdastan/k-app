<template>
<div class="tickets">
    <Admin-Header title="Тикеты"/>
    <main class="tickets-page">
      <nav>
        <div class="nav-links">
          <nuxt-link active-class="active" class="link h3" to="/admin/tickets/missed">Невзятые(34)</nuxt-link>
          <nuxt-link active-class="active" class="link h3" to="/admin/tickets/taken">Взятые(12)</nuxt-link>
          <nuxt-link active-class="active" class="link h3" to="/admin/tickets/closed">Закрытые(28)</nuxt-link>
        </div>
        <div class="input-search">
          <img v-if="searchModel.length <= 0" src="@/assets/icons/admin/search.svg" alt="">
          <input type="text" v-model="searchModel" placeholder="Найти тикет...">
        </div>
        <div @click="sortModal = !sortModal" class="sort-by-date">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.69285 6.40258L4.97345 3.18822C5.22971 2.93722 5.64541 2.9373 5.90151 3.18822L9.18198 6.40258C9.59501 6.80718 9.30088 7.50002 8.71793 7.50002H6.75V20.3571C6.75 20.7122 6.4562 21 6.09375 21H4.78125C4.41879 21 4.125 20.7122 4.125 20.3571V7.50002H2.1569C1.5728 7.50002 1.28069 6.80637 1.69285 6.40258ZM11.3437 5.57145H21.8438C22.2062 5.57145 22.5 5.28365 22.5 4.92859V3.64288C22.5 3.28782 22.2062 3.00002 21.8438 3.00002H11.3437C10.9813 3.00002 10.6875 3.28782 10.6875 3.64288V4.92859C10.6875 5.28365 10.9813 5.57145 11.3437 5.57145ZM10.6875 10.0714V8.78573C10.6875 8.43067 10.9813 8.14287 11.3437 8.14287H19.2188C19.5812 8.14287 19.875 8.43067 19.875 8.78573V10.0714C19.875 10.4265 19.5812 10.7143 19.2188 10.7143H11.3437C10.9813 10.7143 10.6875 10.4265 10.6875 10.0714ZM10.6875 20.3571V19.0714C10.6875 18.7164 10.9813 18.4286 11.3437 18.4286H13.9687C14.3312 18.4286 14.625 18.7164 14.625 19.0714V20.3571C14.625 20.7122 14.3312 21 13.9687 21H11.3437C10.9813 21 10.6875 20.7122 10.6875 20.3571ZM10.6875 15.2143V13.9286C10.6875 13.5735 10.9813 13.2857 11.3437 13.2857H16.5937C16.9562 13.2857 17.25 13.5735 17.25 13.9286V15.2143C17.25 15.5693 16.9562 15.8571 16.5937 15.8571H11.3437C10.9813 15.8571 10.6875 15.5693 10.6875 15.2143Z" fill="#868686"/>
          </svg>
        <div v-if="sortModal" class="sort-toolbar">
            <h4 class="h4">Отсортировать</h4>
            <div class="line"></div>
            <div @click="sortModal = !sortModal"  class="sort-toolbar-items">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.692852 3.40258L3.97345 0.188216C4.22971 -0.0627789 4.64541 -0.0626986 4.90151 0.188216L8.18198 3.40258C8.59501 3.80718 8.30088 4.50002 7.71793 4.50002H5.75V17.3571C5.75 17.7122 5.4562 18 5.09375 18H3.78125C3.41879 18 3.125 17.7122 3.125 17.3571V4.50002H1.1569C0.572799 4.50002 0.280686 3.80637 0.692852 3.40258ZM10.3437 2.57145H20.8438C21.2062 2.57145 21.5 2.28365 21.5 1.92859V0.642877C21.5 0.287819 21.2062 2.0168e-05 20.8438 2.0168e-05H10.3437C9.98129 2.0168e-05 9.6875 0.287819 9.6875 0.642877V1.92859C9.6875 2.28365 9.98129 2.57145 10.3437 2.57145ZM9.6875 7.07144V5.78573C9.6875 5.43067 9.98129 5.14287 10.3437 5.14287H18.2188C18.5812 5.14287 18.875 5.43067 18.875 5.78573V7.07144C18.875 7.4265 18.5812 7.7143 18.2188 7.7143H10.3437C9.98129 7.7143 9.6875 7.4265 9.6875 7.07144ZM9.6875 17.3571V16.0714C9.6875 15.7164 9.98129 15.4286 10.3437 15.4286H12.9687C13.3312 15.4286 13.625 15.7164 13.625 16.0714V17.3571C13.625 17.7122 13.3312 18 12.9687 18H10.3437C9.98129 18 9.6875 17.7122 9.6875 17.3571ZM9.6875 12.2143V10.9286C9.6875 10.5735 9.98129 10.2857 10.3437 10.2857H15.5937C15.9562 10.2857 16.25 10.5735 16.25 10.9286V12.2143C16.25 12.5693 15.9562 12.8571 15.5937 12.8571H10.3437C9.98129 12.8571 9.6875 12.5693 9.6875 12.2143Z" fill="#556BF4"/>
              </svg>
              <h4 @click="sortModal = !sortModal" class="h4-regular">Сначала новые</h4>
            </div>
            <div @click="sortModal = !sortModal" class="sort-toolbar-items">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.692852 3.40258L3.97345 0.188216C4.22971 -0.0627789 4.64541 -0.0626986 4.90151 0.188216L8.18198 3.40258C8.59501 3.80718 8.30088 4.50002 7.71793 4.50002H5.75V17.3571C5.75 17.7122 5.4562 18 5.09375 18H3.78125C3.41879 18 3.125 17.7122 3.125 17.3571V4.50002H1.1569C0.572799 4.50002 0.280686 3.80637 0.692852 3.40258ZM10.3437 2.57145H20.8438C21.2062 2.57145 21.5 2.28365 21.5 1.92859V0.642877C21.5 0.287819 21.2062 2.0168e-05 20.8438 2.0168e-05H10.3437C9.98129 2.0168e-05 9.6875 0.287819 9.6875 0.642877V1.92859C9.6875 2.28365 9.98129 2.57145 10.3437 2.57145ZM9.6875 7.07144V5.78573C9.6875 5.43067 9.98129 5.14287 10.3437 5.14287H18.2188C18.5812 5.14287 18.875 5.43067 18.875 5.78573V7.07144C18.875 7.4265 18.5812 7.7143 18.2188 7.7143H10.3437C9.98129 7.7143 9.6875 7.4265 9.6875 7.07144ZM9.6875 17.3571V16.0714C9.6875 15.7164 9.98129 15.4286 10.3437 15.4286H12.9687C13.3312 15.4286 13.625 15.7164 13.625 16.0714V17.3571C13.625 17.7122 13.3312 18 12.9687 18H10.3437C9.98129 18 9.6875 17.7122 9.6875 17.3571ZM9.6875 12.2143V10.9286C9.6875 10.5735 9.98129 10.2857 10.3437 10.2857H15.5937C15.9562 10.2857 16.25 10.5735 16.25 10.9286V12.2143C16.25 12.5693 15.9562 12.8571 15.5937 12.8571H10.3437C9.98129 12.8571 9.6875 12.5693 9.6875 12.2143Z" fill="#556BF4"/>
              </svg>
              <h4 @click="sortModal = !sortModal" class="h4-regular">Сначала старые</h4>
            </div>
        </div>
        </div>
      </nav>
      <nuxt-child/>
    </main>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data: () => ({
      sortModal: false,
      searchModel: ''
    }),
    mounted() {
      window.addEventListener('click',(event) => {
        const target = event.target;
        const sortDate = target.closest('.sort-toolbar');
        const sortDateBtn = target.closest('.sort-by-date');
        if(!sortDate && !sortDateBtn) {
          this.sortModal = false
        }
      })
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.tickets{
    background: #FFFFFF;
    box-shadow: -4px 0px 12px rgba(0, 0, 0, 0.04);
    border-radius: 32px 0px 0px 32px;
    @media (max-width:800px) {
      background: $s-purple;
    }
}
.tickets-page{
  padding: 29px 44px;
  border-radius: 32px 0px 0px 32px;
  .sort-by-date{
    display: none;
  }
  & > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-links{
  .link:not(:first-child)::before{
    content: '';
    display: block;
    width: 2px;
    height: 22px;
    background: $s-dark-grey;
    }
    .link{
      font-family: 'Inter';
    }
  }

  @media (max-width:800px) {
    padding: 15px 16px;
    border-radius: 30px 30px 0px 0px;
    background: $bg-white;
    .nav-links{
      display: none;
    }
    .sort-by-date{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border: 2px solid $s-purple;
      border-radius: 8px;
      position: relative;
      .sort-toolbar{
        position: absolute;
        top: 63px;
        right: 0;
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
    & > nav {
      display: grid;
      grid-template-columns: 1fr 0.1fr;
      gap: 12px;
    }
  }
}
</style>