import { open } from '@tauri-apps/api/dialog';
import { FsTextFileOption, readTextFile } from '@tauri-apps/api/fs';
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { HtmlHTMLAttributes, ref } from "vue";
import { message, save } from '@tauri-apps/api/dialog';
import { markdownPreview, converter, loadPreview } from "./markdownRenderer";

export let selectedPath: string | string[] | null;
export let file = ref("");
export let currentFile = ref("");
export let filename = ref("");

export const readFileContent = async () => {
    try{
        selectedPath = await open({
            multiple: false,
            directory: false,
            filters: [{ name: 'Markdown File', extensions: ['md'] }]
        });
        if (!selectedPath) return;
        file.value = selectedPath as string;
        filename.value = (file.value).split("\\").slice(-1)[0];
        currentFile.value = await readTextFile(selectedPath as string);
        markdownPreview.value = converter.makeHtml(currentFile.value);
    } catch (err) {
        await message('Something went wrong \n :-(', '');
        console.log(err);
    }
};
    
export const saveFileContent = async () => {
    const newFileContent = document.getElementById("editable-area")?.innerText;
    if (!selectedPath) return;
    
    try{
        await writeTextFile(selectedPath as string, newFileContent!, { dir: BaseDirectory.App });
    } catch (err) {
        await message('Something went wrong \n :-( \n\n' + err, '');
        console.log(err);
    }
};
    
export const saveFileAs = async () => {
    if (!selectedPath) return;
    const filePath = await save({
        defaultPath: selectedPath.toString(),
        filters: [{
            name: 'Markdown File',
            extensions: ['md']
        }]
    })
    await writeTextFile(filePath, document.getElementById("editable-area")!.innerText, { dir: BaseDirectory.App });
}

export const newFile = async () => {
    currentFile.value = "";
    markdownPreview.value = "";
    selectedPath = "Untitled.md";
    const filePath = await save({
        defaultPath: selectedPath,
        filters: [{
            name: 'Markdown File',
            extensions: ['md']
        }]
    })
    await writeTextFile(filePath, document.getElementById("editable-area")!.innerText, { dir: BaseDirectory.App });
    selectedPath = filePath;
    file.value = filePath;
    filename.value = (file.value).split("\\").slice(-1)[0];
    currentFile.value = await readTextFile(selectedPath as string);
    markdownPreview.value = converter.makeHtml(currentFile.value);
}


