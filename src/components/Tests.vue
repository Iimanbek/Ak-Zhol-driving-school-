<template>
    <div class="about">
      <div class="header_card_wrapper">
        <div>
          <span>Вопрос {{ this.$route.params.id }} из <span> {{ valueStore?.dataQst?.length }} </span></span>
        </div>
        <div>
          <div>
            <span>Набранно баллов: {{ valueStore.ANSWERS }} из <span>{{ valueStore?.dataQst?.length }}</span></span>
          </div>
        </div>
      </div>
      <div class="cardd-wrapper">
        <div>
          <h3> <span>{{ this.$route.params.id}}.</span> {{ qst?.question }}</h3>
            <v-radio-group class="rssdio-group" v-model="valueStore.valueRadio">
              <v-radio
                  v-for="opt in qst?.variants"
                  :label="opt"
                  :value="opt"
                  :color="wrongANSwer"
                  :readonly="options_dis"
              ></v-radio>
            </v-radio-group>
        </div>
        <div v-if="descriptions">
          <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed inventore cum consequatur ab dignissimos ratione commodi explicabo quasi! Libero voluptatibus cum pariatur illum officia.</p>
          </div>
        </div>
        <div class="nextBtn_wrapper">
          <v-btn 
          v-if="buttonActive"
          class="nextBtn"
          variant="flat"
          color="#408448"
          @click="routerControl">Ответить</v-btn>
          <v-btn 
          v-else
          class="nextBtn"
          variant="flat"
          color="#408448"
          @click="nextPage"
          >Дальше</v-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapStores } from 'pinia';
  import { useValueStore } from '../store/getValue';
  export default {
    data: () => ({
      options_dis: false ,
      wrongANSwer: 'black' ,
      buttonActive: true,
      qst: null,
      qstAnswers:null,
      descriptions: false,
      wrongAns: 0 
    }),
    methods: {
      async getData(){
        const URL = `http://localhost:3000/questions/${this.$route.params.id}`
        const res = await fetch(URL)
        this.qst = await res.json()
  
        const URL_ANS = `http://localhost:3000/answers/${this.$route.params.id}`
        const res_ANS = await fetch(URL_ANS)
        this.qstAnswers = await res_ANS.json()
      },
      async routerControl(){
        if (this.valueStore.valueRadio){
          const idd = this.$route.params.id;
          // this.$router.replace({ path: `/testing/${+idd + 1}`});
          if (this.$route.params.id >= this.valueStore.dataQst.length ){
            this.$router.replace({ path: '/finsh'})
          }
          if (this.qstAnswers.answer === this.valueStore.valueRadio) {
            this.valueStore.ANSWERS += 1
            // this.$router.replace({ path: `/testing/${+idd + 1}`});
            this.wrongANSwer = 'green'
            this.options_dis = true
            this.buttonActive = false
            this.descriptions = true
            
          }else{
            this.valueStore.NOANSWERS += 1
            console.log(this.valueStore.NOANSWERS );
            this.descriptions = true
            this.buttonActive = false
            this.options_dis = true
            this.wrongANSwer = 'red'
            
            if (this.valueStore.NOANSWERS === 3){
              this.$router.replace({ path: '/finsh'})
            }
          }
        }
      },
      async nextPage(){
        const idd = this.$route.params.id;
        this.$router.replace({ path: `/testing/${+idd + 1}`});
        this.buttonActive = true
        this.descriptions = false
        this.wrongANSwer = 'black'
        this.options_dis = false
        this.valueStore.valueRadio = ''
      }
    },
    mounted() {
      // this.getData()
      this.valueStore.getQST()
    },
    updated() {
    },
    watch: { 
    '$route.params.id': {
      handler: function() {
        this.getData()
      },
      deep: true,
      immediate: true
    }
  },
    computed:{
      ...mapStores(useValueStore)
    }
  }
  </script>
  
  <style scoped lang="scss">
  .about{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: rgba(48, 99, 88, 1);
  }
  h3{
    color: black;
    // border-bottom: 1px solid #0066ff;
    padding-bottom: 5px;
  }
  .cardd-wrapper{
    background: white;
    width: 500px;
    padding: 50px 30px 20px 30px;
    border-radius: 10px;
  }
  .nextBtn{
    color: white;
    font-weight: 500;
  }
  .rssdio-group{
    margin-top: 10px ;
    .v-radio{
      color: black;
    }
  }
  .nextBtn_wrapper{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .description{
    padding: 10px;
    background: rgba(164, 194, 180, 1);
    border-radius: 5px ;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 1);
    p{
      font-weight: 300;
    }
  }
  .header_card_wrapper{
    display: flex;
    justify-content: space-between;
    width: 490px;
    padding-bottom: 10px;
    color: white;
  }
  </style>
  