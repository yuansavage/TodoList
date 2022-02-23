<template>
 <div class="index">
   <div class="header-bar">
    <svg class="hamburger-icon" width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.14286 5.25H30.8571C31.4884 5.25 32 4.80231 32 4.25V1.75C32 1.19769 31.4884 0.75 30.8571 0.75H1.14286C0.511643 0.75 0 1.19769 0 1.75V4.25C0 4.80231 0.511643 5.25 1.14286 5.25ZM1.14286 15.25H30.8571C31.4884 15.25 32 14.8023 32 14.25V11.75C32 11.1977 31.4884 10.75 30.8571 10.75H1.14286C0.511643 10.75 0 11.1977 0 11.75V14.25C0 14.8023 0.511643 15.25 1.14286 15.25ZM1.14286 25.25H30.8571C31.4884 25.25 32 24.8023 32 24.25V21.75C32 21.1977 31.4884 20.75 30.8571 20.75H1.14286C0.511643 20.75 0 21.1977 0 21.75V24.25C0 24.8023 0.511643 25.25 1.14286 25.25Z" fill="white"/>
    </svg>
    <a class="title" href="https://tw.handsup.shop/landing/">Memo</a>
    <svg class="logout-icon" width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.0625 14.0625L20.5625 24.5625C19.625 25.5 18 24.8437 18 23.5V17.5H9.5C8.66875 17.5 8 16.8312 8 16V9.99998C8 9.16873 8.66875 8.49998 9.5 8.49998H18V2.49999C18 1.16249 19.6188 0.499987 20.5625 1.43749L31.0625 11.9375C31.6438 12.525 31.6438 13.475 31.0625 14.0625ZM12 24.25V21.75C12 21.3375 11.6625 21 11.25 21H6C4.89375 21 4 20.1062 4 19V6.99998C4 5.89373 4.89375 4.99999 6 4.99999H11.25C11.6625 4.99999 12 4.66249 12 4.24999V1.74999C12 1.33749 11.6625 0.999987 11.25 0.999987H6C2.6875 0.999987 0 3.68749 0 6.99998V19C0 22.3125 2.6875 25 6 25H11.25C11.6625 25 12 24.6625 12 24.25Z" fill="white"/>
    </svg>
   </div>
    <todoList class="todos" />
 </div>
</template>

<script>
import todoList from "../components/todoList"
export default {
  async fetch({ store }) {
    await store.dispatch('todos/setTodos');
  },
  name: 'IndexPage',
  components: {todoList},
  data (){
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.index{
  //background-color: #F8F8F8;
  .header-bar{
    z-index: 100;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #8DC8FF;
    width: 100%;
    height: 55px;
    display: flex;
    
    align-items: center;
    a{
      text-decoration:none;
    }
    .hamburger-icon{
      flex-grow: 0.5;
      cursor: pointer;
    }
    .title{
      flex-grow: 5;
      font-size: 36px;
      font-weight: 400;
      color:#FFFFFF;
    }
    .logout-icon{
      position: absolute;
      right: 10px;
      cursor: pointer;
    }
  }
  .todos{
    margin:0 auto;
    margin-top: 71px;
    
  }
}
</style>
