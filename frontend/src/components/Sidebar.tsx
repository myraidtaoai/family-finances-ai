

type Page = "chat" | "table";
interface SidebarProps {
    page: Page;
    setPage: (p: Page) => void;
}

function Sidebar({ page, setPage }: SidebarProps) {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
                        <path
                            d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"
                            stroke="white"
                            strokeWidth="1.2"
                            fill="none"
                        />
                    </svg>
                    <span>AI</span>
                </div>
            </div>

            {/* Chat Navigation Item */}
            <div
                className={`nav-item ${page === "chat" ? "active" : ""}`}
                onClick={() => setPage("chat")}
            >
                <span className="nav-icon">💬</span>
                <span>AI Chat</span>
            </div>

            {/* Table Navigation Item */}
            <div
                className={`nav-item ${page === "table" ? "active" : ""}`}
                onClick={() => setPage("table")}
            >
                <span className="nav-icon">📊</span>
                <span>Tables</span>
            </div>

            <div style={{ flex: 1 }} />

            <div style={{ paddingBottom: 16 }}>
                <div className="nav-item">
                    <span className="nav-icon">⚙️</span>
                    <span>系统设置</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;