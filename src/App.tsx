import { useState, useCallback } from "react";

export default function App() {
    const [content, setContent] = useState("console.log('Hello World!);");

    return (
        <div className="App">
            <h1>Markdown editor</h1>
            
        </div>
        
    );
}
