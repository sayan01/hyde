import { ClassicEditor, type EditorConfig } from 'ckeditor5';
declare class Editor extends ClassicEditor {
    static builtinPlugins: any[];
    static defaultConfig: EditorConfig;
}
export default Editor;
