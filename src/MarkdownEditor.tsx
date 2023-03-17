import { useCallback, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { Extension } from "@codemirror/state";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import {
    tokyoNight,
    dracula,
    gruvboxDark,
    vscodeDark,
    nord,
    xcodeLight,
    tokyoNightDay,
} from "@uiw/codemirror-themes-all";

const themeMap = new Map<string, Extension>();
themeMap.set("Tokyo Night Day", tokyoNightDay);
themeMap.set("Xcode Light", xcodeLight);
themeMap.set("Dracula", dracula);
themeMap.set("Gruvbox", gruvboxDark);
themeMap.set("Nord", nord);
themeMap.set("Tokyo Night", tokyoNight);
themeMap.set("VSCode Dark", vscodeDark);

interface Props {
    theme: string;
    setContent: Dispatch<SetStateAction<string>>
}

export default function MarkdownEditor({ theme, setContent }: Props) {
    const onChange = useCallback((value: any, _: any) => {
        setContent(value);
    }, []);
    const editorTheme = themeMap.get(theme) || tokyoNight;

    const editorRef = useRef<CodeMirror.EditorFromTextArea | null>(null);
    useEffect(() => {
        const editor = editorRef.current.editor;
        const scrollWrapper = editor.getWrapperElement();
        const scrollElement = scrollWrapper.querySelector('.CodeMirror-scroll');
        editor.setSize(null, scrollElement.scrollHeight + 'px');
    }, []);

    return (
        <CodeMirror
            className="markdown-editor"
            value="console.log('hello world!');"
            theme={editorTheme}
            height="100%"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
        />
    );
}
