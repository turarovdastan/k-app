<template>
    <div class="support">
        <div class="support-header">
            <img src="@/assets/icons/logo.svg" alt="" class="avatar">
            <div class="support-info">
                <strong class="support-full-name">Владислав </strong>
                <span class="support-type">Поддержка</span>
            </div>
            <img src="@/assets/icons/close.svg" @click="$emit('close')" alt="" class="close">
        </div>
        <div class="support-chat">
            <div class="chat-container" :style="{'height' :stage===3 ? '80%' : stage === 4 && '100%'}">
                <div class="message" v-for="(i,k) in messages" :key="k" :class="`message-${i.type}`">
                    <span class="text">{{ i.message }}</span>
                    <span class="time">{{ i.time | messageTime }}</span>
                </div>
            </div>

            <div class="btns">
                <button v-if="stage===1" @click="noComingCode" class="btn-blue">
                    Не приходит код
                </button>
                <button v-if="stage===1" class="btn-blue">
                    Все отлично
                </button>
                <button v-if="stage===2" @click="leavePhone" class="btn-blue">
                    Телефон
                </button>
                <button v-if="stage===2" @click="leaveEmail" class="btn-blue">
                    Почта
                </button>
                <div v-if="stage===3" class="input-message">
                    <textarea @keyup.enter="onMessage" v-model="message" placeholder="Сообщение..." type="text" />
                    <img @click="onMessage" src="@/assets/icons/send.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const time = Date.now()
        return {
            stage: 1,
            message: '',
            messages: [
                {
                    type: 'from',
                    message: 'Здравствуйте, у вас возникли какие-то проблемы?',
                    time
                }
            ]
        }
    },
    methods: {
        noComingCode() {
            this.stage = 0
            const time = Date.now()
            this.messages.push({
                    type: 'to',
                    message: 'Не приходит код',
                    time
            })
            setTimeout(() => {
                const time = Date.now()
                this.messages.push({
                    type: 'from',
                    message: 'Оставьте телефон или почту и мы с вами свяжемся',
                    time
                })
                this.stage = 2
            }, 500)
        },
        leavePhone() {
            this.stage = 0
            const time = Date.now()
            this.messages.push({
                type: 'to',
                message: 'Телефон',
                time
            })
            setTimeout(() => {
                this.stage = 3
                const time = Date.now()
                this.messages.push({
                    type: 'from',
                    message: 'Укажите телефон для обратной связи',
                    time
                })
            }, 500)
        },
        leaveEmail() {
            this.stage = 0
            const time = Date.now()
            this.messages.push({
                type: 'to',
                message: 'Почта',
                time
            })
            setTimeout(() => {
                const time = Date.now()
                this.messages.push({
                    type: 'from',
                    message: 'Укажите почту для обратной связи',
                    time
                })
                this.stage = 3
            }, 500)
        },
        onMessage() {
            this.stage = 4
            const time = Date.now()
            this.messages.push({
                type: 'to',
                message: this.message,
                time
            })
            setTimeout(() => {
                const time = Date.now()
                this.messages.push({
                    type: 'from',
                    message: 'Спасибо, мы с вами свяжемся в течении 2 дней',
                    time
                })
            }, 500)
        }
    },
    filters: {
        messageTime(val) {
            const date = new Date(val);
            return `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`
        }
    }
}
</script>

<style lang="scss" scoped>
.support{
    width: 279px;
    height: 399px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 2.01835px 4.0367px 15.1376px rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(15.1376px);
    border-radius: 16px;
    position: fixed;
    bottom: 44px;
    right: 44px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    .input-message{
        width: 100%;
        height: 40px;
        background: #F9F9F9;
        border-radius: 12px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        textarea{
            height: 40px;
            width: 100%;
            border: none;
            outline: none;
            padding: 10px;
            background: transparent;
            resize: none;
            caret-color: #E5E5E5;
        }
        textarea::-webkit-scrollbar {
           display: none;
        }

        textarea::-webkit-scrollbar-track {
           display: none;
        }

        textarea::-webkit-scrollbar-thumb {
           display: none;
        }
    }
    &-header{
        display: flex;
        padding: 16px 12px;
        gap:8px;
        position: relative;
    }
    &-info{
        display: flex;
        flex-direction: column;
    }
    &-type{
        color: #868686;
        font-size: 13px;
        line-height: 16px;
    }
    &-full-name{
        font-size: 15px;
        line-height: 20px;
        color: #141414;
    }
    &-chat{
        width: 100%;
        height: 332px;
        left: 0px;
        top: 399px;

        background: #FFFFFF;
        box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.06);
        border-radius: 16px;
        align-self: flex-end;
        padding-bottom: 16px;
        // position: relative;
        .message{
            background: #F9F9F9;
            border-radius: 12px;
            padding: 8px;
            font-size: 13px;
            line-height: 16px;
            color: #141414;
            position: relative;
            .time{
                position: absolute;
                right: 8px;
                bottom: 8px;
                color: #868686;
            }
            .text{
                margin-right: 45px;
            }
            &-from{
                .time{
                    color: #868686;
                }
            }
            &-to{
                background: #556BF4;
                border-radius: 8px;
                color: #fff;
                align-self: flex-end;
                height: auto;
                word-break: break-all;
                .time{
                    color: #fff;
                }
            }
        }
        .btns{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            gap: 12px;
            position: absolute;
            bottom: 16px;
            right: 12px;
            .btn-blue{
                border: 1.5px solid #556BF4;
                box-sizing: border-box;
                border-radius: 12px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                font-size: 13px;
                line-height: 16px;
                color: #556BF4;
                background: transparent;
                padding: 10px 20px;
                cursor: pointer;
            }
        }
        .chat-container{
            padding: 16px 8px;
            height: 70%;
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            gap: 10px;
            &::-webkit-scrollbar {
                width: 3px;
            }

            &::-webkit-scrollbar-track {
             background: transparent;
            }

            &::-webkit-scrollbar-thumb {
                width: 3px;
                height: 57px;
                background: #E5E5E5;
                border-radius: 16px;
            }
        }
    }
    .close{
        position: absolute;
        top: 23px;
        right: 16px;
        width: 16px;
        height: 16px;
    }
}
</style>