import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";

export default function App() {
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
            <MarkdownEditor theme={theme} />
        </div>
    );
}
