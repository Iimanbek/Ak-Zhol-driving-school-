<template>
    <div class="MainWrapper">
        <div class="svg">
            <svg width="45" height="350" viewBox="0 0 48 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 9)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 35)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 61)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 87)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 113)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 139)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 165)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 191)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 218)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 244)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 270)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 296)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 322)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 348)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 374)"
                    stroke="#032660" stroke-width="10" />
                <line y1="-5" x2="58.2495" y2="-5" transform="matrix(-0.824042 0.566529 0.566529 0.824042 48 400)"
                    stroke="#032660" stroke-width="10" />
            </svg>
        </div>
        <div class="mainConteiner">
            <div class="leftContentWrapper">
                <div class="contentWrapper">
                    <div class="mainheader">
                        <h1>
                            Почувствуй себя на дороге уверенно!
                        </h1>
                    </div>
                    <div class="paragraf">
                        <p> Права категории В и восстановление навыков вождения</p>
                    </div>
                    <div class="mainButton">
                        <NavButton>Записаться</NavButton>
                    </div>
                </div> 
            </div>
            <div class="imgWrapper">
                <img src="@/mainPageImage/mainPageImage.jpg">
            </div>
        </div>
    </div>
</template>
<script>
import NavButton from './navComponents/NavButton.vue';
export default {
    components: {
        NavButton
    }
}
</script>
<style lang="scss" scoped>
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    background-color: #D9D9D9
}
.MainWrapper {
    display: flex;
    justify-content: center;
    padding: 45px 0;

    .svg{
        position: absolute;
        left: 0;
        top: 280px;
    }
    .mainConteiner {
        width: 90%;
        display: flex;
        .leftContentWrapper {
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-left: 20px;

            .contentWrapper {
                height: 80%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                h1 {
                    font-weight: 600;
                    font-size: 64px;
                    line-height: 78.02px;
                    Font-style: SemiBold;
                    color: #032660;
                    font-family: 'Montserrat', sans-serif;
                }

                p {
                    font-family: 'Raleway', sans-serif;
                    font-weight: 500;
                    font-size: 26px;
                    line-height: 33px;
                    Font-style: Medium;
                }

            }

        }

        .imgWrapper {
            text-align: end;
            width: 50%;

            img {
                width: 491px;
                height: 652px;
                border-radius: 12px;
            }
        }
    }
}
</style>