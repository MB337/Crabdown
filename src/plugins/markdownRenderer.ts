import { HtmlHTMLAttributes, ref } from "vue";
import showdown from "showdown";

export let converter = new showdown.Converter();
export let markdownPreview = ref("");

export const loadPreview = () => {
    markdownPreview.value = (converter.makeHtml(document.getElementById("editable-area")!.innerText));
}
