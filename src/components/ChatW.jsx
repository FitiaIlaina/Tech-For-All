import { BsSend } from "react-icons/bs";
 export default function ChatW() {
  return (
    <>
    <header>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                    <div className="container"><a className="navbar-brand" href="#">Tech For All</a>
                        
                    </div>
                </nav>
            </header>
            <div className="chat-border-wrapper">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Discussion</h1>
        </div>

        <div className="chat-messages">
          {/* Chat messages here */}
        </div>

        <div className="chat-question">
          <h2>Comment puis-je vous aider ?</h2>
        </div>

        <div className="chat-input-area">
          <input type="text" placeholder="Envoyer un message..." />
          <button><BsSend color="white" /></button>
        </div>
      </div>
    </div>
    </>
  );
}

