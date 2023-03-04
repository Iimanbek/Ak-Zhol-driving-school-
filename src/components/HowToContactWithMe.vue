<template>
    <div class="contactWraper">
        <div class="contactConteiner">
            <div>
                <h4>Как связаться со мной?</h4>
            </div>
            <div class="paragraf">
                <p>Если остались вопросы, можете связаться со мной удобным вам способом</p>
            </div>
            <div>
                <button>Связаться</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useAnchorStore } from '@/store/anchor'
export default {
    computed: {
        ...mapStores(useAnchorStore)
    },
    mounted() {
        let contacts = document.querySelector('.contactConteiner')
        this.anchorStore.contact = contacts.getBoundingClientRect().top
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}

.contactWraper {
    height: 497px;
    background: url('../assets/images/contact.jpg');
    margin-top: 100px;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    border-radius: 12px;
    padding: 70px 60px 100px 60px;

    .contactConteiner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .paragraf {
            width: 50%;
        }

        h4 {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 44px;

            color: #FFFFFF;
        }

        p {
            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 33px;
            color: #FFFFFF;
        }

        button {
            border: 3px solid #5CC068;
            border-radius: 8px;
            padding: 20px;
            width: 190px;
            height: 60px;
            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
        }
    }
}
</style>