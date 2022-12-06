<script>
import "bootstrap-icons/font/bootstrap-icons.css";
import {loadPreview} from '../plugins/markdownRenderer'

const bold = () => {
  const editableArea = document.getElementById("editable-area");
  editableArea.focus();
  editableArea.innerHTML += "**";
  editableArea.focus();
  editableArea.innerHTML += "bold**";
  loadPreview();
};

const italic = () => {
  const editableArea = document.getElementById("editable-area");
  editableArea.focus();
  editableArea.innerHTML += "*";
  editableArea.focus();
  editableArea.innerHTML += "italic*";
  loadPreview();
};

const underline = () => {
  const editableArea = document.getElementById("editable-area");
  editableArea.focus();
  editableArea.innerText += "<u>underline</u>";
  loadPreview();
};

const strike = () => {
  const editableArea = document.getElementById("editable-area");
  editableArea.focus();
  editableArea.innerText += "<del>Strikethrough</del>";
  loadPreview();
};

const code = () => {
  const editableArea = document.getElementById("editable-area");
  editableArea.focus();
  editableArea.innerHTML += "```";
  editableArea.focus();
  editableArea.innerHTML += "code```";
  loadPreview();
};

const link = () => {
  const editableArea = document.getElementById("editable-area");
  editableArea.focus();
  editableArea.innerHTML += "[";
  editableArea.focus();
  editableArea.innerHTML += "link";
  editableArea.focus();
  editableArea.innerHTML += "](https://)";
  loadPreview();
};

const emoji = (event) =>{
  console.log(event.target);
  const editableArea = document.getElementById("editable-area");
  editableArea.focus();
  editableArea.innerText += event.target.parentNode.innerHTML;
  editableArea.focus();
  loadPreview();
  
};

export default {
  name: 'Buttons',
    setup() {
        return {
            bold,
            italic,
            underline,
            strike,
            code,
            link,
            emoji,
            loadPreview
        }
    }
}
</script>

<template>
    <div class="pb-2 flex gap-x-2">
        <button @click="bold" class="hover:bg-[#57b1ff62] rounded-lg px-1 duration-300"><i class="bi bi-type-bold text-xl"></i></button>
        <button @click="italic" class="hover:bg-[#57b1ff62] rounded-lg px-1 duration-300"><i class="bi bi-type-italic text-xl"></i></button>
        <button @click="underline" class="hover:bg-[#57b1ff62] rounded-lg px-1 duration-300"><i class="bi bi-type-underline text-xl"></i></button>
        <button @click="strike" class="hover:bg-[#57b1ff62] rounded-lg px-1 duration-300"><i class="bi bi-type-strikethrough text-xl"></i></button>
        <button @click="code" class="hover:bg-[#57b1ff62] rounded-lg px-1 duration-300"><i class="bi bi-code-slash text-xl"></i></button>
        <button @click="link" class="hover:bg-[#57b1ff62] rounded-lg px-1 duration-300"><i class="bi bi-link-45deg"></i></button>
        <div class="dropdown p-0 mt-1 ml-1">
          <label tabindex="0" class="bg-[transparent] cursor-pointer"><i class="bi bi-emoji-laughing h-full"></i></label>
          <div tabindex="0" class="dropdown-content p-2 shadow bg-base-100 rounded-box w-52 flex-row gap-y-1">
            <button class="w-2/12" @click="emoji"><i class="bi bi-github"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-git"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-android"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-google"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-linkedin"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-wordpress"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-apple"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-asterisk"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-at"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-bell"></i></button>
            <button class="w-2/12" @click="emoji"><i class="bi bi-bookmark-fill"></i></button>
          </div>
        </div>
    </div>
</template>
