<script>
import {readFileContent, saveFileContent, saveFileAs, file, currentFile, newFile, filename} from '../plugins/fileSystem'
export default {
  name: 'Toolbar',
  setup() {
    return {
      readFileContent,
      saveFileContent,
      saveFileAs,
      file,
      currentFile,
      filename,
      newFile
    }
  }
}
</script>

<template>

  <div class="navbar bg-neutral text-neutral-content p-0 min-h-0">
    <div class="dropdown h-full">
      <label tabindex="0" class="btn px-4 text-lg rounded-none normal-case hover:bg-transparent hover:text-cyan-500 border-none">File</label>
        <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-lg w-52 m-2">
          <li class="hover:text-cyan-500"><a @click="newFile">New file</a></li>
          <li class="hover:text-cyan-500" v-if="filename"><a @click="saveFileContent">Save</a></li>
          <li class="hover:text-cyan-500" v-if="filename"><a @click="saveFileAs">Save as</a></li>
          <li class="hover:text-cyan-500"><a @click="readFileContent">Open file</a></li>
        </ul>
    </div>
  </div>
</template>
