import { useCallback, Dispatch, SetStateAction } from "react";
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
    theme: string
}

export default function MarkdownEditor({ theme }: Props) {
    const onChange = useCallback((value: any, viewUpdate: any) => {
        console.log("value", value);
        console.log("viewUpdate", viewUpdate);
    }, []);
    const editorTheme = themeMap.get(theme) || tokyoNight;

    return (
        <div>
            <h1>Editor</h1>
            <CodeMirror
                value="console.log('hello world!');"
                height="200px"
                theme={editorTheme}
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
            />
        </div>
    );
}
