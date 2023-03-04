<template>
    <div class="main_wrapper">
        <div class="result_wrapper">
            <h1 :style="{'color': colorofH }">{{ valueStore.testFinish }}</h1>
            <h2 class="hhh">Вы набрали: {{ valueStore.ANSWERS }} </h2>
            <div class="btn_wrapp">
                <router-link to="/">
                    <v-btn 
                    variant="flat"
                    color="#408448"
                    class="bttbtn"
                    >Выйти на главную</v-btn>
                </router-link>
                    <v-btn 
                    class="bttbtn"
                    @click="BeginTest"
                    variant="flat"
                    color="#408448"
                    >Начать с начала</v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useValueStore } from '../store/getValue';
export default {
    data() {
        return {
            colorofH:''
        }
    },
    methods: {
        BeginTest(){
            this.$router.push('/testing/1')
            this.valueStore.ANSWERS = 0
            this.valueStore.NOANSWERS = 0
        }  
    },
    updated() {
        // this.returnnn()
    },
    mounted() {
        if (this.valueStore.testFinish === "Тест не пройден") {
            this.colorofH = 'red'
        }else{
            this.colorofH = 'rgba(48, 99, 88, 1)'
        }
    },
    computed:{
        ...mapStores(useValueStore)
    }
}
</script>
<style lang="scss">
@media screen and (max-width: 350px) {
    .result_wrapper{
        background: white;
        width: 200px;
        padding: 50px 30px;
        border-radius: 10px;      
    }
    .naaaaa{
    font-weight: 500;
    }
}
// @media screen and (max-width: 350px) {
//     .result_wrapper{
//         background: white;
//         width: 300px;
//         padding: 50px 30px;
//         border-radius: 10px;      
//     }
//     .naaaaa{
//     font-weight: 500;
//     }
// }
.result_wrapper{
  background: white;
  width: 500px;
  padding: 50px 30px;
  border-radius: 10px;
  h1{
    text-align: center;
    // color: rgba(48, 99, 88, 1);
  }
}
.main_wrapper{
    height: 100vh ;
    background: rgba(48, 99, 88, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}
a{
    text-decoration: none;
}
.bttbtn{
    color: white;
}
.btn_wrapp{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.hhh{
    text-align: center;
}
</style>