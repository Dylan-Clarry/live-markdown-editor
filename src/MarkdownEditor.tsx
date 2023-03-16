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
    theme: string;
    setContent: Dispatch<SetStateAction<string>>
}

export default function MarkdownEditor({ theme, setContent }: Props) {
    const onChange = useCallback((value: any, viewUpdate: any) => {
        setContent(value);
        console.log("value", value);
        console.log("viewUpdate", viewUpdate);
    }, []);
    const editorTheme = themeMap.get(theme) || tokyoNight;

    return (
        <CodeMirror
            value="console.log('hello world!');"
            theme={editorTheme}
            height="200px"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
        />
    );
}
