import { useCallback, useEffect, RefObject } from "react";
import { EditorState } from "@codemirror/state";
import useCodeMirror from "./useCodeMirror";

interface Props {
    initialDoc: string;
    onChange: (doc: string) => void;
}

export default function MarkdownEditor({ initialDoc, onChange }: Props) {
    const handleDocChange = useCallback(
        (state: EditorState) => onChange(state.doc.toString()),
        [onChange]
    );

    const [refContainer, editorView] = useCodeMirror({
        initialDoc: initialDoc,
        onChange: handleDocChange,
    });

    useEffect(() => {
        if(editorView) {
            // do nothing for now...
        }
    }, [editorView]);

    return <div className="ml-4 w-5/12" ref={refContainer as RefObject<HTMLDivElement>}></div>;
}
