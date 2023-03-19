import { useState, useCallback } from "react";
import MarkdownEditor from "./MarkdownEditor";

export default function App() {
    const [doc, setDoc] = useState("```js\nconsole.log(\"Hello World\");\n```");

    const handleDocChange = useCallback((newDoc: string) => {
        setDoc(newDoc);
    }, []);

    return (
        <div className="App">
            <h1>Markdown editor</h1>
            <MarkdownEditor initialDoc={doc} onChange={handleDocChange} />
        </div>
        
    );
}
