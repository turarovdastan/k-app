<template>
  <div class="pagination">
    <svg @click="decrement" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L1 7L7 13" :stroke="active === 1 ? '#868686' : '#141414'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span v-for="i of size" v-if="(i === active || i - 1 === active) || (size - active - 1 < 0 || size - active - 2 < 0) && i !== size && i + 2 >= size" @click="setActive(i)" :key="i" :class="active === i && 'active'" class="h3">
      {{ i }}
    </span>
    <span v-if="active + 2 < size" class="h3">
      ...
    </span>
    <span @click="setActive(size)" v-if="active + 1 < size" :class="active === size && 'active'" class="h3">
      {{ size }}
    </span>
    <svg @click="increment" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L7 7L1 1" :stroke="active === size ? '#868686' : '#141414'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size:{
      type: Number,
      default: 9,
    }
  },
  data: () => ({
    active: 1
  }),
  methods: {
    increment() {
      if(this.active !== this.size){
        this.active += 1;
      }
    },
    decrement() {
      if(this.active !== 1){
        this.active -= 1;
      }
    },
    setActive(active) {
      this.active = active;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.pagination{
  display: flex;
  align-items: center;
  gap:2px;
  svg{
    cursor: pointer;
  }
  svg:first-child{
    margin-right: 17px;
  }
  svg:last-child{
    margin-left: 17px;
  }
  span{
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      color:$f-blue;
    }
  }
  span.active{
    background: $f-blue;
    color: $f-white;
    border-radius: 6px;
  }
}
</style>