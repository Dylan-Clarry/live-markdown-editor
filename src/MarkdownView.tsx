import ReactMarkdown from "react-markdown";
import MarkdownPreview from '@uiw/react-markdown-preview';
import remarkParse from "remark-parse/lib";
import gfm from "remark-gfm";

interface Props {
    doc: string
}

export default function MarkdownView({ doc }: Props) {
    const plugins = [
        remarkParse,
        gfm
    ];

    return <MarkdownPreview className="p-2 ml-4 w-6/12" source={doc} />
}
