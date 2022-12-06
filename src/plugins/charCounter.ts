import { HtmlHTMLAttributes, ref } from "vue";

export let charCounter = ref("");
const numberFormat = new Intl.NumberFormat('en-us');

export const charCounterUpdate = () => {
    charCounter.value = numberFormat.format(
        (document.getElementById("editable-area")!.innerText)
        .length)
        .toString()
        .toLocaleString();

}
