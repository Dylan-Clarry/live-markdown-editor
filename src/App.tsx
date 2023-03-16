import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function App() {
    const [content, setContent] = useState("console.log('Hello World!);");
    const [theme, setTheme] = useState("");

    const themeArr = [
        "Dracula",
        "Gruvbox",
        "Nord",
        "Tokyo Night",
        "VSCode Dark",
        "Tokyo Night Day",
        "Xcode Light",
    ];
    return (
        <div className="App">
            <h1>Markdown editor</h1>
            <select
                className="text-neutral-900"
                name="theme"
                id="theme"
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
            >
                {themeArr.map((theme) => (
                    <option value={theme}>{theme}</option>
                ))}
            </select>
            <MarkdownEditor setContent={setContent} theme={theme} />
            <MarkdownPreview className="markdown-preview" source={content} />
        </div>
    );
}
