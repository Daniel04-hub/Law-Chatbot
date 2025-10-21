const legalData = {
  divorce: {
    lawyer: "Family Law Lawyer",
    section: "Section 13, Hindu Marriage Act, 1955",
    document: "divorce_notice.pdf",
    keywords: ["divorce", "separation", "matrimonial", "marriage dissolution"]
  },
  theft: {
    lawyer: "Criminal Defence Lawyer",
    section: "Section 378, Indian Penal Code",
    document: "theft_complaint.pdf",
    keywords: ["theft", "stolen", "robbery", "burglary", "larceny"]
  },
  contract: {
    lawyer: "Corporate Lawyer",
    section: "Indian Contract Act, 1872",
    document: "contract_template.pdf",
    keywords: ["contract", "agreement", "breach", "business deal", "commercial"]
  },
  property: {
    lawyer: "Property & Real Estate Lawyer",
    section: "Transfer of Property Act, 1882",
    document: "property_dispute.pdf",
    keywords: ["property", "land", "real estate", "sale deed", "property dispute", "land dispute"]
  },
  rent: {
    lawyer: "Civil Lawyer (Tenancy)",
    section: "Rent Control Act",
    document: "rent_agreement.pdf",
    keywords: ["rent", "tenant", "landlord", "eviction", "lease", "tenancy"]
  },
  dowry: {
    lawyer: "Family & Criminal Lawyer",
    section: "Section 498A, Indian Penal Code",
    document: "dowry_complaint.pdf",
    keywords: ["dowry", "498a", "harassment", "domestic violence", "cruelty"]
  },
  assault: {
    lawyer: "Criminal Defence Lawyer",
    section: "Section 351, Indian Penal Code",
    document: "assault_complaint.pdf",
    keywords: ["assault", "attack", "physical violence", "beating", "harm"]
  },
  cheating: {
    lawyer: "Criminal Lawyer",
    section: "Section 420, Indian Penal Code",
    document: "cheating_complaint.pdf",
    keywords: ["cheating", "fraud", "scam", "deceive", "420"]
  },
  gst: {
    lawyer: "Tax & Corporate Lawyer",
    section: "Goods and Services Tax Act, 2017",
    document: "gst_query.pdf",
    keywords: ["gst", "tax", "goods and services", "taxation", "return"]
  },
  labour: {
    lawyer: "Labour & Employment Lawyer",
    section: "Industrial Disputes Act, 1947",
    document: "labour_dispute.pdf",
    keywords: ["labour", "employee", "employment", "termination", "wrongful dismissal", "workplace"]
  },
  trademark: {
    lawyer: "Intellectual Property Lawyer",
    section: "Trade Marks Act, 1999",
    document: "trademark_application.pdf",
    keywords: ["trademark", "brand", "logo", "copyright", "patent", "intellectual property"]
  },
  defamation: {
    lawyer: "Civil & Criminal Lawyer",
    section: "Section 499, Indian Penal Code",
    document: "defamation_notice.pdf",
    keywords: ["defamation", "slander", "libel", "reputation", "false statement"]
  }
};

let userName = "";
let lawyerName = "";
let chatHistory = [];

function openChatModal() {
  document.getElementById("welcomeModal").style.display = "block";
}

function closeChatWidget() {
  document.getElementById("chatWidget").style.display = "none";
  document.getElementById("chatToggle").style.display = "flex";
}

document.getElementById("welcomeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  userName = document.getElementById("userName").value.trim();
  lawyerName = document.getElementById("lawyerName").value.trim() || "a qualified lawyer";

  document.getElementById("welcomeModal").style.display = "none";
  document.getElementById("chatWidget").style.display = "flex";
  document.getElementById("chatToggle").style.display = "none";

  const welcomeMessage = `Hello ${userName}! I'm LegalGuru AI, your personal legal assistant. I can help you with legal guidance, recommend specialized lawyers, and provide relevant documents. How can I assist you today?`;
  addBotMessage(welcomeMessage);
});

function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message === "") return;

  addUserMessage(message);
  input.value = "";

  chatHistory.push({ role: "user", message });

  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    processUserMessage(message);
  }, 1500);
}

document.getElementById("chatInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function addUserMessage(message) {
  const messagesContainer = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user";
  messageDiv.innerHTML = `<div class="message-content">${escapeHtml(message)}</div>`;
  messagesContainer.appendChild(messageDiv);
  scrollToBottom();
}

function addBotMessage(message, documentLink = null) {
  const messagesContainer = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot";

  let content = `<div class="message-content">${message}`;

  if (documentLink) {
    content += `<br><a href="/docs/${documentLink}" class="document-btn" download>📄 Download Document</a>`;
  }

  content += `</div>`;
  messageDiv.innerHTML = content;
  messagesContainer.appendChild(messageDiv);

  chatHistory.push({ role: "bot", message, documentLink });

  scrollToBottom();
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById("chatMessages");
  const typingDiv = document.createElement("div");
  typingDiv.className = "message bot typing-indicator-container";
  typingDiv.innerHTML = `
    <div class="message-content typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  typingDiv.id = "typingIndicator";
  messagesContainer.appendChild(typingDiv);
  scrollToBottom();
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator");
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

function processUserMessage(message) {
  const lowerMessage = message.toLowerCase();
  let matchFound = false;

  for (const key in legalData) {
    const data = legalData[key];
    const hasKeyword = data.keywords.some(keyword => lowerMessage.includes(keyword));

    if (hasKeyword) {
      matchFound = true;
      const response = `Based on your query, ${userName}, I recommend consulting with a <strong>${data.lawyer}</strong>. ` +
        `This matter typically falls under <strong>${data.section}</strong>.<br><br>` +
        `${lawyerName !== "a qualified lawyer" ? `I suggest you reach out to ${lawyerName}, who specializes in this area. ` : ""}` +
        `I've prepared a relevant document for you to download.`;

      addBotMessage(response, data.document);

      setTimeout(() => {
        const followUp = `Is there anything else you'd like to know about this matter, ${userName}? I'm here to help with any additional questions.`;
        addBotMessage(followUp);
      }, 2000);

      break;
    }
  }

  if (!matchFound) {
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      addBotMessage(`Hello ${userName}! How can I assist you with your legal matter today?`);
    } else if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      addBotMessage(`You're welcome, ${userName}! Feel free to ask if you have any other questions.`);
    } else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye")) {
      addBotMessage(`Goodbye, ${userName}! Remember, this is general legal information. Please consult ${lawyerName} for personalized advice.`);
    } else {
      const generalResponse = `I understand you're seeking help with: "${message}". ` +
        `While I don't have specific information about this particular issue, I recommend consulting with a general legal advisor who can guide you properly. ` +
        `${lawyerName !== "a qualified lawyer" ? `You may want to reach out to ${lawyerName}. ` : ""}` +
        `Could you provide more details or try rephrasing your query with keywords like: divorce, theft, property, contract, rent, assault, or GST?`;

      addBotMessage(generalResponse);
    }
  }
}

function scrollToBottom() {
  const messagesContainer = document.getElementById("chatMessages");
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function downloadChat() {
  if (chatHistory.length === 0) {
    alert("No chat history to download.");
    return;
  }

  let chatText = `LegalGuru AI - Chat Summary\n`;
  chatText += `User: ${userName}\n`;
  chatText += `Date: ${new Date().toLocaleString()}\n`;
  chatText += `${"=".repeat(50)}\n\n`;

  chatHistory.forEach((entry, index) => {
    if (entry.role === "user") {
      chatText += `${userName}: ${entry.message}\n\n`;
    } else {
      const cleanMessage = entry.message.replace(/<br>/g, "\n").replace(/<\/?strong>/g, "").replace(/<[^>]*>/g, "");
      chatText += `LegalGuru AI: ${cleanMessage}\n`;
      if (entry.documentLink) {
        chatText += `Document: ${entry.documentLink}\n`;
      }
      chatText += `\n`;
    }
  });

  chatText += `\n${"=".repeat(50)}\n`;
  chatText += `Disclaimer: This chatbot provides general legal information and is not a substitute for professional advice.\n`;

  const blob = new Blob([chatText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `LegalGuru_Chat_${userName}_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  addBotMessage("Your chat history has been downloaded successfully!");
}
