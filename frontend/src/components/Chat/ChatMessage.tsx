export type Message = { id: string; role: "user" | "bot"; text: string; time: string };

export default function ChatMessage({ msg }: { msg: Message }) {
    return (
        <div className={`message ${msg.role === "user" ? "user" : "bot"}`}>
            <div className="avatar">
                <img
                    src={
                        msg.role === "bot"
                            ? "https://modao.cc/ai/uploads/ai_pics/17/177982/aigp_1756221577.jpeg"
                            : "https://modao.cc/ai/uploads/ai_pics/17/177981/aigp_1756221575.jpeg"
                    }
                    width={36}
                    height={36}
                    alt="avatar"
                />
            </div>
            <div className="message-bubble">
                <p style={{ whiteSpace: "pre-wrap" }}>{msg.text}</p>
                <div className="message-time">{msg.time}</div>
            </div>
        </div>
    );
}