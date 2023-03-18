import { useCallback } from "react";
import useCodeMirror from "./useCodeMirror";

interface Props {
    initialDoc: string;
    onChange: (doc: string) => void;
}

export default function Editor({ initialDoc, onChange }: Props) {
    const handleDocChange = useCallback(
        state => onChange(state.doc.toString()), [onChange]
    );

    const [refContainer, editorView] = useCodeMirror({
        initialDoc: initialDoc,
        onChange: onChange
    });

    return <div></div>;
}
