<script setup lang="ts">
  import {currentFile, filename} from './plugins/fileSystem'
  import {loadPreview, markdownPreview} from './plugins/markdownRenderer'
  import Toolbar from './components/Toolbar.vue'
  import {resize, stopResize} from './plugins/visualisation'
  import Buttons from './components/Buttons.vue'
</script>

<template>
  <div style="height: 90%">
    <Toolbar />

    <div class="flex items-center pt-3 justify-between px-4">
      <Buttons />
      <p v-if="filename" class="text-gray-400 text-end"><u>{{ filename }}</u></p>
      <p v-else class="text-gray-400 italic text-end">No file selected</p>
    </div>
    
    <div class="flex h-full">
      <div contenteditable placeholder="Type something..." @input="loadPreview()" id="editable-area" class="w-1/2 p-4 overflow-x-auto bg-[#192c3d] h-full whitespace-pre outline-none">
        {{ currentFile }}
      </div>
      <div class="handle cursor-ew-resize w-10 h-full bg-[#213a50]" id="handle" @mousedown="resize" @mouseup="stopResize">
        <div class="w-1/2 bg-[#192c3d] h-full"></div>
      </div>
      <div id="preview-area" v-html="markdownPreview" class="w-1/2 overflow-x-auto p-4 h-full bg-[#213a50]"></div>
    </div>
    
  </div>
</template>
