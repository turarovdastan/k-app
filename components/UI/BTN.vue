<template>
    <button @click="$emit('onclick')">
        <span :style="styleText" v-show="!isLoading">{{text}}</span>
        <div v-show="isLoading" class="loaders">
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        styleText:{
          type: String,
          default: ''
        },
        text: {
            type: String,
            required: true,
        },
        loader: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isLoading() {
            return this.loader;
        }
    }
}
</script>


<style lang="scss" scoped>
.loaders{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    .loader{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #fff;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .loader:nth-child(1) {
        animation-name: loading;
        animation-delay: 0s;
        animation-duration: 1s;
    }
    .loader:nth-child(2) {
        animation-name: loading;
        animation-delay: .1s;
        animation-duration: .9s;
    }
    .loader:nth-child(3) {
        animation-name: loading;
        animation-delay: .2s;
        animation-duration: .8s;
    }
}

@keyframes loading{
  from {
    opacity: 1;
  }
  to {
    opacity: .1;
  }
}
button{
    background: #556BF4;
    box-shadow: 0px 0px 16px rgba(20, 20, 20, 0.16);
    border-radius: 12px;
    outline: none;
    height: 56px;
    width: 100%;
    max-width: 492px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    span {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
}
</style>