import { useState, useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, highlightActiveLine, KeyBinding } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { history, historyKeymap } from "@codemirror/history";
import { indentOnInput } from "@codemirror/language";
import { bracketMatching } from "@codemirror/matchbrackets";
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter";
import { defaultHighlightStyle, HighlightStyle, tags } from "@codemirror/highlight";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from "@codemirror/theme-one-dark";
import type { MutableRefObject } from "react";

interface Props {
    initialDocs: string;
    onChange?: (state: EditorState) => void;
}

const syntaxHighlighting = HighlightStyle.define([
    {
        tag: tags.heading1,
        fontSize: "1.6em",
        fontWeight: "bold",
    },
    {
        tag: tags.heading2,
        fontSize: "1.4em",
        fontWeight: "bold",
    },
    {
        tag: tags.heading3,
        fontSize: "1.2em",
        fontWeight: "bold",
    },
]);

export default function useCodeEditor<T extends Element>(props: Props): [MutableRefObject<T | null>, EditorView?] {
    const refContainer = useRef<T>(null);
    const [editorView, setEditorView] = useState<EditorView>();
    const { onChange } = props;
    const fullKeymap: KeyBinding[] = [...defaultKeymap, ...historyKeymap] as KeyBinding[];

    useEffect(() => {
        if (!refContainer.current) return;
        const editorState = EditorState.create({
            doc: props.initialDocs,
            extensions: [
                keymap.of(fullKeymap),
                lineNumbers(),
                highlightActiveLineGutter(),
                history(),
                indentOnInput(),
                bracketMatching(),
                defaultHighlightStyle.fallback,
                highlightActiveLine(),
                markdown({
                    base: markdownLanguage,
                    codeLanguages: languages,
                    addKeymap: true,
                }),
                oneDark,
                syntaxHighlighting,
                EditorView.lineWrapping,
                EditorView.updateListener.of((update) => {
                    if (update.changes) {
                        onChange && onChange(update.state);
                    }
                }),
            ],
        });

        const view = new EditorView({
            state: editorState,
            parent: refContainer.current,
        });
        setEditorView(view);
    }, [refContainer]);
    return [refContainer, editorView];
}
