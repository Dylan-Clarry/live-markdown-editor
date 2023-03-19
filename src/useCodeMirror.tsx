import { useState, useRef, useEffect, MutableRefObject } from "react";
import { basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { defaultKeymap } from "@codemirror/commands";

interface Props {
    initialDoc: string;
    onChange: (state: EditorState) => void;
}

export default function useCodeMirror<T extends Element>({
    initialDoc,
    onChange,
}: Props): [MutableRefObject<T | null>, EditorView?] {
    const refContainer = useRef<T>(null);
    const [editorView, setEditorView] = useState<EditorView>();

    useEffect(() => {
        if (!refContainer) return;
        const startState = EditorState.create({
            doc: initialDoc,
            extensions: [
                EditorView.lineWrapping,
                EditorView.updateListener.of((update) => {
                    if (update.changes) {
                        onChange && onChange(update.state);
                    }
                }),
            ],
        });

        const startView = new EditorView({
            state: startState,
            extensions: [basicSetup, javascript(), keymap.of(defaultKeymap)],
            parent: refContainer.current ?? undefined,
        });
        setEditorView(startView);

        return () => {
            startView.destroy();
        };
    }, [refContainer]);
    return [refContainer, editorView];
}
