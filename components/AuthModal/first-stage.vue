<template>
    <div class="first-stage">
        <UI-field-phone :isError="error" @value="setPhone" />
        <UI-BTN @onclick="fetchPhone" :loader="loader" text="Получить код по смс" style="margin-top:24px;"/>
        <div class="or" style="margin-top:32px;">Или</div>
        <div class="socials">
            <div class="block">
                <img src="@/assets/icons/google.svg" alt="">
            </div>
            <div class="block">
                <img src="@/assets/icons/apple.svg" alt="">
            </div>
            <div class="block">
                <img src="@/assets/icons/facebook.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        error: false,
        phone: '',
        loader: false,
    }),
    methods:{
        setPhone(val) {
            this.phone = val;
            if(this.error === true) this.error = false
        },
        fetchPhone() {
            if(this.phone.length <= 15) {
               return this.error = true;
            }
            this.loader = true;
            setTimeout(()=> {
                this.$emit('chaneStage', this.phone)
                this.loader = false;
            }, 3000)
        }
    }
}
</script>

<style lang="scss" scoped>
.first-stage{
    .socials{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        margin-top: 32px;
        .block{
            background: #F5F5F5;
            border-radius: 32px;
            width: 52px;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
}
</style>