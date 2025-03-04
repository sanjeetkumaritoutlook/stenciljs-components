import { Component, h, State,  Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "ai-chatbot",
  styleUrl: "ai-chatbot.css",
  shadow: true,
})
export class AiChatbot {
  private apiKey = 'AIzaSyCY1gGGu-DUsmlGhRbQbjleKqtg_hIPbd4';
  @State() messages: { role: string; text: string }[] = [];
  @State() userInput: string = "";
  @Event() messageSent: EventEmitter<string>;

  private async sendMessage() {
    if (!this.userInput.trim()) return;

    const userMessage = { role: "User", text: this.userInput };
    this.messages = [...(this.messages || []), userMessage];  // ✅ Ensure messages is always an array
    this.userInput = "";
    this.messageSent.emit(userMessage.text);

    // Call Gemini API
    //2️⃣ Check for null or undefined Data from API
    //try-catch block to handle undefined API responses gracefully:
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${this.apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: userMessage.text }] }],
          }),
        }
      );
    
      const data = await response.json();
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";
    
      this.messages = [...this.messages, { role: "AI", text: botReply }];
    } catch (error) {
      console.error("Error fetching AI response:", error);
      this.messages = [...this.messages, { role: "AI", text: "Error retrieving response." }];
    }
    
  }

  render() {
    return (
      <div class="chat-container">
        <h3>AI chatbot</h3>
        <div class="messages">
  {Array.isArray(this.messages) &&
    this.messages.map((msg) => (
      <div class={`message ${msg.role.toLowerCase()}`}>
        <span class="avatar">{msg.role === "User" ? "👤" : "🤖"}</span>
        <p innerHTML={msg.text.replace(/\n/g, "<br>")}></p>
      </div>
    ))}
        </div>


        <div class="input-area">
          <input type="text" value={this.userInput} onInput={(e: any) => (this.userInput = e.target.value)} placeholder="Type a message..." />
          <button onClick={() => this.sendMessage()}>Send</button>
        </div>
      </div>
    );
  }
}
