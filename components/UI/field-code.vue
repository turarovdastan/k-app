<template>
    <div>
        <div class="field" :class="{'error': error}"  :style="{'border': focus && '1px solid #556BF4;'}">
            <input v-model="number" placeholder="Проверочный код" type="text" id="code-mask">
            <div class="field-icons">
                <img src="@/assets/icons/info.svg" @mousemove="tooltip = true"  @mouseleave="tooltip = false" alt="">
                <img v-if="number" src="@/assets/icons/close.svg" @click="number = ''" alt="">
                <div v-show="tooltip" class="tooltip">
                    На этот номер вы получите смс с кодом подтверждения и информацию о записи
                </div>
            </div>
        </div>
        <span v-show="error" class="error-text">Указан неверный код, попробуйте еще раз</span>
        <span v-if="seconds" class="timer">Запросить код повторно можно через 00:{{seconds | addNull}}</span>
        <span v-if="!seconds" @click="setTimer();seconds = 35;" class="get-new-code">Получить новый код</span>
    </div>
</template>

<script>
export default {
    props: ['isError'],
    data: () => ({
        number: '',
        tooltip: false,
        focus: false,
        seconds: 35,
        mask: null,
    }),
    mounted() {
        this.focus = true;
        this.setTimer()
    },
    methods: {
        setTimer() {
            const timer = setInterval(()=>{
                this.seconds -= 1;
                if(this.seconds === 0) {
                    clearInterval(timer)
                }
            }, 1000)
        }
    },
    watch:{
        number(){
            this.number = this.number.length > 6 ? this.number.slice(0,6) : this.number;
            this.$emit('value', this.number);
        }
    },
    computed: {
        error(){
            return this.isError;
        },
    },
    filters: {
        addNull(val) {
            if(val < 10) return `0${val}`;
            return val;
        }
    },
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
    display: block;
}
.timer{
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #141414;
    display: block;
    margin: 10px;
}
.get-new-code{
    color: #556BF4;
    margin: 10px;
    cursor: pointer;
    display: block;
}
</style>