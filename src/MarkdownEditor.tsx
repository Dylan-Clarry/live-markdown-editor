import { useCallback } from 'react';
import CodeMirror from "@uiw/react-codemirror";

export default function MarkdownEditor() {
    const onChange = useCallback((value, viewUpdate) => {

    };

    return (
        <div>
            <h1>Editor</h1>
            <CodeMirror value="console.log('hello world!');" height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />
        </div>
    );
}
