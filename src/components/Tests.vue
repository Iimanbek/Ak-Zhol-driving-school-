<template>
    <div>
        <div class="main_wrapper">
            <div class="test_card">
                <div class="inner_test_card">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nulla!</h2>
                    <div class="response_wrapper">
                        <!-- <div>
                            <input id="radio_1" type="radio">
                        <input id="radio_2" type="radio">
                        <input id="radio_3" type="radio">
                        </div>
                        <label for="radio_1">Lorem ipsum dolor sit amet.</label>
                        <label for="radio_1">Lorem ipsum dolor sit amet.</label>
                        <label for="radio_1">Lorem ipsum dolor sit amet.</label> -->
                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
                        >
                            <v-radio-group
                            v-model="ex8"
                            column>
                                <v-radio
                                label="primary"
                                color="pink"
                                value="primary"
                                ></v-radio>
                                <v-radio
                                label="secondary"
                                color="secondary"
                                value="secondary"
                                ></v-radio>
                                <v-radio
                                label="success"
                                color="green"
                                value="success"
                                ></v-radio>
                                <v-radio
                                label="info"
                                color="blue"
                                value="info"
                                ></v-radio>
                                <v-radio
                                label="warning"
                                color="orange"
                                value="warning"
                                ></v-radio>
                                <v-radio
                                label="error"
                                color="red"
                                value="error"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    data() {
        return {
            ex7: 'red',
            ex8: 'primary',
        }
    },
}
</script>
<style lang="scss">
.main_wrapper{
    .test_card{
        .inner_test_card{
            .response_wrapper{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }
}

</style>