<template>
    <div class="second-stage">
        <Transition name="bounce">
            <Modal-support v-if="checkError && support" @close="support = false"/>
        </Transition>
        <UI-field-code v-if="!loader" :isError="error" @value="setCode" />
        <div v-if="!loader" class="check-boxes">
            <label class="custom-checkbox">
            <input checked type="checkbox" value="value-1">
            <span>
                Я принимаю условия соглашения и соглашаюсь 
                c обработку персональных данных
            </span>
            </label>
            <label class="custom-checkbox">
            <input type="checkbox" value="value-1">
            <span>
                Хочу получать сообщения рекламного
                и информационного характера
            </span>
            </label>
        </div>
        <UI-BTN v-if="loader" :loader="loader" text="  "/>
    </div>
</template>

<script>
export default {
    data: () => ({
        error: false,
        code: '',
        loader: false,
        limit: 0,
        support: true,
        checkError: false,
    }),
    methods:{
        setCode(val) {
            console.log(val);
            this.code = val;
            if(this.code.length === 6 && this.code !== '000000') {
                this.limit += 1;
                return this.error = true;
            } 
            if (this.code.length === 6 && this.code === '000000') {
                this.loader = true;
                setTimeout(()=> {
                    this.$emit('change');
                }, 3000)
            }
            if(this.limit === 2) {
                this.$emit('limited');
            }
            if(this.error === true) this.error = false
        },
    },
    watch: {
        error(val) {
            if(val) this.checkError = true
        }
    },
}
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.second-stage{
    .check-boxes{
        margin-top: 10px;
    }
}
</style>