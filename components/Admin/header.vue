<template>
<div class="admin-header-root">
  <header class="admin-header">
    <div @click="sideBarModal = true" class="opener">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="2" rx="1" fill="#141414"/>
      <rect x="3" y="11" width="14" height="2" rx="1" fill="#141414"/>
      <rect x="3" y="18" width="10" height="2" rx="1" fill="#141414"/>
      </svg>
    </div>
    <h2 class="admin-title h1">
      {{ title }}
    </h2>
    <div class="profile-data">
      <div class="icon">
        <img src="@/assets/icons/admin/notification.svg" alt="">
      </div>
      <div class="icon">
        <img src="@/assets/icons/admin/user.svg" alt="">
      </div>
    </div>
    <div v-if="sideBarModal" class="side-bar-menu">
      <div class="side-bar-menu-title h2">Glow</div>
        <div class="side-bar-menu-line"></div>
        <nuxt-link to='/admin/tickets/' class="link" :class="linkIsActive && 'active-link'" active-class="active-link">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.8427 1.12229L16.5132 7.38598C16.9582 7.80385 17.2101 8.38396 17.2101 8.99067V15.3661C17.2101 16.3848 16.3747 17.2106 15.3441 17.2106H10.8656C10.4534 17.2106 10.1192 16.8803 10.1192 16.4728V12.4149C10.1192 11.8037 9.61794 11.3082 8.99959 11.3082C8.38124 11.3082 7.87997 11.8037 7.87997 12.4149V16.4728C7.87997 16.8803 7.54579 17.2106 7.13356 17.2106H2.65509C1.62451 17.2106 0.789062 16.3848 0.789062 15.3661V8.99067C0.789062 8.38396 1.04102 7.80385 1.48603 7.38598L8.15648 1.12229C8.62895 0.678637 9.37023 0.678637 9.8427 1.12229ZM8.99959 2.36587L2.51421 8.45577C2.36587 8.59506 2.28189 8.78843 2.28189 8.99067V15.3661C2.28189 15.5699 2.44898 15.735 2.65509 15.735H6.38715V12.4149C6.38715 10.9888 7.55678 9.83265 8.99959 9.83265C10.4424 9.83265 11.612 10.9888 11.612 12.4149V15.735H15.3441C15.5502 15.735 15.7173 15.5699 15.7173 15.3661V8.99067C15.7173 8.78843 15.6333 8.59506 15.485 8.45577L8.99959 2.36587Z" fill="#868686"/>
          </svg>
          <span class="h2">Тикеты</span>
        </nuxt-link>
        <nuxt-link to='/admin/chat' style="margin-top:19px;" class="link" :class="linkIsActive && 'active-link'" active-class="active-link">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.2674 14.9072C5.49083 14.6466 5.84639 14.5542 6.16289 14.6743C7.04996 15.011 8.00818 15.1867 9 15.1867C13.1152 15.1867 16.3636 12.1564 16.3636 8.43705C16.3636 4.71768 13.1152 1.68741 9 1.68741C4.88483 1.68741 1.63636 4.71768 1.63636 8.43705C1.63636 9.7991 2.07193 11.0997 2.87936 12.2045C2.99507 12.3628 3.05301 12.5581 3.04303 12.7561C3.00016 13.6063 2.60397 14.7641 1.86019 16.2822C3.47823 16.1523 4.60283 15.682 5.2674 14.9072ZM1.35497 17.9994C1.12719 18.0065 0.901533 17.9525 0.700144 17.8425C0.05881 17.4923 -0.185804 16.6723 0.153769 16.011C0.856199 14.6429 1.26217 13.6037 1.37691 12.9407C0.483641 11.608 0 10.0568 0 8.43705C0 3.74592 4.01564 0 9 0C13.9844 0 18 3.74592 18 8.43705C18 13.1282 13.9844 16.8741 9 16.8741C7.99854 16.8741 7.02202 16.7234 6.09849 16.4318C5.01111 17.4235 3.41933 17.9346 1.35497 17.9994Z" fill="#868686"/>
        </svg>
          <span class="h2">Чаты</span>
        </nuxt-link>
      <div class="side-bar-menu-line"></div>
        <nuxt-link to='/logout' style="margin-top:19px;" class="link" :class="linkIsActive && 'active-link'" active-class="active-link">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.10315 0.52832L9.14261 0.528321C9.63966 0.528321 10.0426 0.931264 10.0426 1.42832C10.0426 1.92538 9.63966 2.32832 9.14261 2.32832C7.77227 2.32832 6.79832 2.32901 6.03703 2.39077C5.28566 2.45172 4.82235 2.56763 4.45776 2.7534C3.72393 3.1273 3.1273 3.72393 2.7534 4.45776C2.56723 4.82313 2.45158 5.28423 2.39073 6.02898C2.32902 6.78424 2.32832 7.74935 2.32832 9.10832V10.8912C2.32832 12.2502 2.32902 13.2153 2.39073 13.9705C2.45158 14.7153 2.56723 15.1764 2.7534 15.5417C3.1273 16.2756 3.72393 16.8722 4.45776 17.2461C4.82235 17.4319 5.28566 17.5478 6.03703 17.6087C6.79832 17.6705 7.77227 17.6712 9.14261 17.6712C9.63966 17.6712 10.0426 18.0741 10.0426 18.5712C10.0426 19.0682 9.63966 19.4712 9.14261 19.4712H9.10312C7.78101 19.4712 6.73408 19.4712 5.89149 19.4028C5.03062 19.333 4.30276 19.1873 3.64057 18.8499C2.56805 18.3034 1.69606 17.4314 1.14958 16.3589C0.812579 15.6975 0.666649 14.9732 0.596706 14.1171C0.528308 13.28 0.528314 12.2414 0.52832 10.9308V9.06872C0.528314 7.75815 0.528308 6.71955 0.596706 5.8824C0.666649 5.02634 0.812579 4.30198 1.14958 3.64057C1.69606 2.56805 2.56805 1.69606 3.64057 1.14958C4.30276 0.812183 5.03062 0.666501 5.89149 0.596664C6.73409 0.528308 7.78103 0.528314 9.10315 0.52832ZM14.5062 5.93478C14.8577 5.58331 15.4275 5.58331 15.779 5.93478L19.2076 9.36335C19.559 9.71483 19.559 10.2847 19.2076 10.6361L15.779 14.0647C15.4275 14.4162 14.8577 14.4162 14.5062 14.0647C14.1547 13.7132 14.1547 13.1434 14.5062 12.7919L16.3984 10.8997H8.28546C7.78841 10.8997 7.38546 10.4968 7.38546 9.99975C7.38546 9.50269 7.78841 9.09975 8.28546 9.09975H16.3984L14.5062 7.20757C14.1547 6.8561 14.1547 6.28625 14.5062 5.93478Z" fill="#868686"/>
        </svg>
          <span class="h2">Выход</span>
        </nuxt-link>
    </div>
  </header>
  <div class="nav-links">
    <nuxt-link active-class="active" class="link h2" to="/admin/tickets/missed">Невзятые(34)</nuxt-link>
    <nuxt-link active-class="active" class="link h2" to="/admin/tickets/taken">Взятые(12)</nuxt-link>
    <nuxt-link active-class="active" class="link h2" to="/admin/tickets/closed">Закрытые(28)</nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    sideBarModal: false
  }),
    mounted() {
      window.addEventListener('click',(event) => {
        const target = event.target;
        const sortDate = target.closest('.opener');
        const sortDateBtn = target.closest('.side-bar-menu');
        if(!sortDate && !sortDateBtn) {
          this.sideBarModal = false
        }
      })
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.admin-header{
    height: 128px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0px 1px 0px #EAEAEB;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 44px;
    .side-bar-menu{
      width: 221px;
      height: 216px;
      background: $bg-white;
      box-shadow: 2px 4px 15px rgba(62, 67, 104, 0.15);
      border-radius: 12px;
      position: fixed;
      left: 2px;
      top: 10px;
      z-index: 2;
      .link{
        display: flex;
        align-items: center;
        margin-left: 21px;
        gap: 6px;
        text-decoration: none;
        span{
          color: $s-dark-grey;
        }
      }
      .active-link{
        svg path{
          fill: $f-blue;
        }
        span{
          color: $f-blue;
        }
      }
      .active-link::before{
        content: '';
        display: block;
        width: 4px;
        height: 20px;
        background: $f-blue;
        border-radius: 4px;
        position: absolute;
        margin-right: 21px;
        left: 0;
      }
      &-line{
        background: $bg-purple;
        height: 1px;
        width: 100%;
        margin: 18px 0;
      }
      &-title{
        color:$f-blue;
        text-align: center;
        margin-top: 20px;
        font-weight: 700;
      }
    }
    .opener{
      display: none;
    }
    .profile-data{
      display: flex;
      gap: 19px;
      .icon{
        width: 48px;
        height: 48px;
        background: $bg-white;
        box-shadow: 0px 2px 12px rgba(20, 20, 20, 0.12);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    @media (max-width:800px) {
      gap: 10px;
      .icon{
        width: auto;
        background: transparent;
        box-shadow: none;
      }
    }
    }
    @media (max-width:800px) {
      box-shadow: none;
      height: auto;
      padding: 0;
      background: $s-purple;
    }
    @media (max-width: 986px) {
      .opener{
        display: block;
      }
    }
}
.admin-header-root{
  @media (max-width:800px) {
    display: block;
    padding: 22px 16px;
    background: $s-purple;
    .admin-title{
      margin-left: 55px;
    }
  }
}
.nav-links{
  display: none;
  .link:not(:first-child)::before{
    content: '';
    display: block;
    width: 2px;
    height: 22px;
    background: $s-dark-grey;
  }
  @media (max-width:800px) {
    display: flex;
    margin-top: 28px;
    align-items: center;
    justify-content: center;
  }
}
</style>