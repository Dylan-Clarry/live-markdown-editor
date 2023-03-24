import { useState, useCallback } from "react";
import MarkdownEditor from "./MarkdownEditor";
import RemarkView from "./RemarkView";

export default function App() {
    const [doc, setDoc] = useState('```js\nconsole.log("Hello World");\n```' + "\n".repeat(10));

    const handleDocChange = useCallback((newDoc: string) => {
        setDoc(newDoc);
    }, []);

    return (
        <div className="App">
            <h1>Markdown editor</h1>
            <div className="flex mt-4">
                <MarkdownEditor initialDoc={doc} onChange={handleDocChange} />
                <RemarkView doc={doc} />
            </div>
        </div>
    );
}
