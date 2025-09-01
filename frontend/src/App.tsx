import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatPage from "./components/Chat/ChatPage";
import TablePage from "./components/Table/TablePage";
import { Message } from "./components/Chat/ChatMessage";


type Page = "chat" | "table";


export default function App() {
  const [page, setPage] = useState<Page>("chat");
  const [messages, setMessages] = useState<Message[]>([
    { id: "b1", role: "bot", text: "您好！我是您的智能助手。", time: "10:05 AM" },
    { id: "u1", role: "user", text: "请帮我分析Q3季度的销售数据趋势", time: "10:07 AM" },
    ]);


  const sendMessage = (text: string) => {
    const now = new Date();
    const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text, time: timeStr };
    setMessages((m) => [...m, userMsg]);
    setTimeout(() => {
    const aiMsg: Message = {
        id: `b-${Date.now()}`,
        role: "bot",
        text: `收到您的查询: ${text}。相关信息已在表格页面更新。`,
        time: timeStr,
      };
      setMessages((m) => [...m, aiMsg]);
    }, 900);
  };


  return (
    <div className="flex justify-center items-center p-8 min-h-screen bg-gray-100">
        <div className="frame-border">
          <div id="app-container">
            <Sidebar page={page} setPage={setPage} />
            <main className="main-content hide-scrollbar">
            {page === "chat" ? <ChatPage messages={messages} sendMessage={sendMessage} /> : <TablePage />}
            </main>
          </div>
        </div>
    </div>
  );
}