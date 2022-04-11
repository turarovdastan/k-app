<template>
    <div class="auth-container">
        <div class="auth" :class="{'center' : stage === 3}">
            <img v-if="stage === 3" style="margin-bottom: 24px;" src="@/assets/icons/success.svg" >
            <img v-if="stage !== 3" @click="$emit('close')" class="auth-close" src="@/assets/icons/close.svg" alt="">
            <h3 class="auth-title">{{title}}</h3>
            <div class="auth-desc" v-html="desc"></div>

            <firstStage v-if="stage === 1" @chaneStage="change" />
            <secondStage v-if="stage === 2" @change="hideAll" @limited="limited" />
            <button v-if="stage === 4" class="btn">Запросить код повторно можно через 0:{{seconds}}</button>
            <UI-BTN v-if="stage === 3" text="Перейти к заполнению профиля" />
            <div @click="goBack" class="auth-to-back">Вернуться</div>
        </div>
    </div>
</template>

<script>
import firstStage from './first-stage.vue';
import secondStage from './second-stage.vue'
export default {
    data: ()=>({
        title: "Авторизация",
        desc:'Войдите или зарегистрируйтесь, чтобы продолжить',
        stage: 1,
        number: '',
        seconds: 30,
    }),
    methods: {
        setTimer() {
            const timer = setInterval(()=>{
                this.seconds -= 1;
                if(this.seconds === 0) {
                    this.stage = 2
                    this.title = 'Введите код';
                    this.desc = `Мы отправили проверочный код на номер <br/> ${this.number}`
                    clearInterval(timer)
                }
            }, 1000)
        },
        change(number) {
            this.stage += 1;
            this.title='Введите код';
            this.desc = `Мы отправили проверочный код на номер <br/> ${number}`
            this.number = number
        },
        hideAll() {
            this.title = 'Регистрация завершена';
            this.desc = 'Теперь вам нужно заполнить профиль';
            this.stage += 1;
        },
        limited() {
            this.title = 'Упс! Превышено количество попыток';
            this.desc = '';
            this.stage = 4;
            this.setTimer()
        },
        goBack() {
            if(this.stage === 4){
                this.stage = 3;
            }
            this.stage -= 1;
            if(this.stage === 0){
                this.$emit('close')
            }
            if(this.stage === 3){
                this.title = 'Регистрация завершена';
                this.desc = 'Теперь вам нужно заполнить профиль';
            }
            if(this.stage === 2){
                this.title = 'Введите код';
                this.desc = `Мы отправили проверочный код на номер <br/> ${this.number}`
            }
            if(this.stage === 1){
                this.title = 'Авторизация';
                this.desc = 'Войдите или зарегистрируйтесь, чтобы продолжить';
            }
        }
    },
    components: {
        firstStage,
        secondStage,
    }
}
</script>

<style lang="scss" scoped>
$blue: #556BF4;
$grey: #868686;
$lightdark: #141414;
$light: #FFFFFF;
$ligthgrey:rgba(20, 20, 20, 0.4);;
.auth-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: $ligthgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    .auth{
        width: 548px;
        height: 498px;
        height: auto;
        background: $light;
        border-radius: 28px;
        padding: 28px;
        position: relative;
        &-title{
            font-weight: 500;
            font-size: 40px;
            line-height: 48px;
            color: $lightdark;
        }
        &-desc{
            font-weight: 400;
            font-size: 17px;
            line-height: 21px;
            color: $grey;
            margin-bottom: 24px;
        }
        &-close{
            position: absolute;
            top: 40px;
            right: 28px;
        }
        &-to-back{
            margin-top: 32px;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            color: $blue;
            cursor: pointer;
        }
    }
    .btn{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #AEAEAE;
        height: 56px;
        width: 100%;
        background: #E5E5E5;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
    }
    .center{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
}
</style>