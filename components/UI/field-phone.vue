<template>
    <div>
        <div class="field" :class="{'error': error}">
            <input v-model="number" type="text" id="phone-mask" placeholder="+7">
            <div class="field-icons">
                <img src="@/assets/icons/info.svg" @mousemove="tooltip = true"  @mouseleave="tooltip = false" alt="">
                <img v-if="number" src="@/assets/icons/close.svg" @click="number = ''" alt="">
                <div v-show="tooltip" class="tooltip">
                    На этот номер вы получите смс с кодом подтверждения и информацию о записи
                </div>
            </div>
        </div>
        <span v-show="error" class="error-text">Некорректный формат телефона</span>
    </div>
</template>

<script>
import IMask from 'imask';
export default {
    props: ['isError'],
    data: () => ({
        number: '',
        tooltip: false,
    }),
    mounted() {
        IMask(
        document.getElementById('phone-mask'), {
            mask: '+{7} 000 000 00 00'
        });
    },
    watch:{
        number(){
            this.$emit('value', this.number);
        }
    },
    computed: {
        error(){
            return this.isError;
        },
    }
}
</script>

<style lang="scss" scoped>
.field{
    width: 100%;
    max-width: 492px;
    height: 56px;
    background: #F9F9F9;
    border-radius: 12px;
    padding: 12px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input{
        height: 30px;
        font-weight: 400;
        font-size: 17px;
        line-height: 21px;
        border: none;
        outline: none;
        background: transparent;
    }
    &-icons{
        display: flex;
        align-items: center;
        gap: 16px;
        position: relative;
    }
    .tooltip{
        position: absolute;
        z-index: 11;
        top: -88px;
        right: -60px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 2.01835px 4.0367px 15.1376px rgba(0, 0, 0, 0.24);
        backdrop-filter: blur(15.1376px);
        padding: 10px;
        border-radius: 12px;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #141414;
        width: 167px;
        @media (max-width:616px) {
            right: -5px;
        }
    }
}
.error{
    border: 1px solid #FF3B30;
}
.error-text{
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #FF3B30;
    margin: 10px;
}
</style>