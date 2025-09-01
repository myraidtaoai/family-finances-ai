import { useEffect, useRef, useState } from "react";
import ChatMessage, { Message } from "./ChatMessage";
import UploadArea from "./UploadArea";


export default function ChatPage({ messages, sendMessage }: { messages: Message[]; sendMessage: (t: string) => void }) {
    const [input, setInput] = useState("");
    const conversationRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (conversationRef.current) {
            conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
    }, [messages]);


    const handleSend = () => {
        if (!input.trim()) return;
        sendMessage(input);
        setInput("");
    };


    return (
        <div id="chat-page">


            <div className="card">
                <div className="conversation-area hide-scrollbar" ref={conversationRef}>
                    {messages.map((m) => (
                    <ChatMessage key={m.id} msg={m} />
                    ))}
                </div>


                <UploadArea />


                <div className="input-area mt-4">
                    <textarea
                        className="text-input"
                        placeholder="输入您的问题..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                            }
                        }}
                    />
                    <button className="btn" onClick={handleSend}>
                    Send
                    </button>
                </div>
            </div>
        </div>
    );
}