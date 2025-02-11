const { createApp } = Vue;
import {DEFAULT_MONEY_JARS} from "./constants.js";

createApp({
    data() {
        return {
            totalMoney: "10,000,000",
            currencyUnit: "Đ",
            moneyJars: DEFAULT_MONEY_JARS,
        };
    },
    methods: {
        changeMessage() {
            this.message = "You clicked the button!";
        }
    }
}).mount('#app');