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

  // Accident/traffic collision flow (NyayGuru)
  const accidentKeywords = [
    "accident", "crash", "collision", "collided", "hit a car", "hit car", "hit someone",
    "ran into", "bike accident", "car accident", "scooter accident", "road accident",
    "knocked", "bumped", "fender bender", "hit and run", "run away", "drove away"
  ];
  if (accidentKeywords.some(k => lowerMessage.includes(k))) {
    matchFound = true;

    const nyayGuruMessage = `
      <strong>As NyayGuru, I can help — please answer a few quick questions so I can give precise legal steps:</strong><br><br>
      <ul>
        <li>Did you stop after the collision or drove away?</li>
        <li>Anyone injured? If yes, are they being treated/ambulance called?</li>
        <li>Was the other vehicle/person present and do you have their contact/vehicle number?</li>
        <li>Date, time and place of the accident?</li>
        <li>Is your vehicle insured (third‑party/own damage)?</li>
      </ul>
      <br>
      <strong>Immediate steps you should take right now</strong>
      <ul>
        <li>Stop and stay at the scene (if you haven’t). Leaving may attract criminal liability.</li>
        <li>Call police and, if anyone is injured, call ambulance/medical help immediately.</li>
        <li>Ensure safety first: move vehicles to a safe spot if possible but don’t alter evidence.</li>
        <li>Exchange details with the other driver: name, contact, vehicle number, insurer. Note witnesses and their contacts.</li>
        <li>Take clear photos and short videos of: damage to both vehicles, license plates, surrounding scene, road marks, traffic signals, any injuries. Time‑stamp if possible.</li>
        <li>Do NOT admit legal guilt or say “I’m sorry” in an admissional sense on video/text — polite concern is ok, but avoid statements that can be used as confession.</li>
        <li>If police arrive, cooperate and give truthful answers. Ask for a copy of any report/GD/FIR.</li>
        <li>Notify your insurer immediately and share photos and police report. Follow insurer’s instructions before repairs.</li>
        <li>If the other party offers to “settle” privately on the spot, be cautious: small damages can be settled, but if there’s any injury or disagreement, better involve police and insurers and document any settlement in writing.</li>
      </ul>
      <br>
      <strong>Possible legal consequences (short)</strong>
      <ul>
        <li>If you stopped and cooperated, and damage is minor, matter often resolves via insurer or compounding.</li>
        <li>If you fled the scene or there are serious injuries/death, criminal charges can follow (rash/negligent driving, hit‑and‑run consequences) and FIR/investigation is likely.</li>
        <li>Your insurance may cover third‑party damage, but non‑cooperation or misrepresentation can void claims.</li>
      </ul>
      <br>
      If you want, I can:<br>
      - Draft a short written statement you can give to police/insurer.<br>
      - Draft a complaint/FIR wording if the other party refuses to cooperate or has injured someone.<br><br>
      Reply with the answers to the questions (and a photo of the damage if you want help drafting statements).`;

    addBotMessage(nyayGuruMessage);

    // Provide action buttons
    const actionButtons = `
      <div style="margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap;">
        <button class="document-btn" onclick="generateAccidentStatement()">📄 Draft Police/Insurer Statement</button>
        <button class="document-btn" onclick="generateAccidentFIR()">📄 Draft FIR/Complaint</button>
      </div>
    `;
    addBotMessage(actionButtons);
    return;
  }

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

// Dynamic generators for accident-related documents
window.generateAccidentStatement = function generateAccidentStatement() {
  const basics = collectAccidentInputs();
  if (!basics) return; // user cancelled

  const { stopped, injuries, otherDetails, datetime, place, insurance, summary } = basics;

  const content = [
    "Police/Insurer Statement - Road Accident",
    "========================================",
    `Name: ${userName || "(Your Name)"}`,
    `Date/Time of Incident: ${datetime}`,
    `Place of Incident: ${place}`,
    "",
    "Incident Summary:",
    summary,
    "",
    "Key Details:",
    `- Stopped at scene: ${stopped}`,
    `- Any injuries and medical help: ${injuries}`,
    `- Other party/contact/vehicle details: ${otherDetails}`,
    `- Vehicle Insurance: ${insurance}`,
    "",
    "I confirm the above information is true to the best of my knowledge.",
    "",
    "Signature: _______________________",
    `Date: ${new Date().toLocaleDateString()}`
  ].join("\n");

  triggerDownload(content, `Accident_Statement_${(userName||"User").replace(/\s+/g,'_')}_${new Date().toISOString().split('T')[0]}.txt`);
  addBotMessage("Your police/insurer statement draft has been generated and downloaded.");
}

window.generateAccidentFIR = function generateAccidentFIR() {
  const basics = collectAccidentInputs();
  if (!basics) return; // user cancelled

  const { stopped, injuries, otherDetails, datetime, place, insurance, summary } = basics;

  const content = [
    "Draft FIR/Complaint - Road Accident",
    "====================================",
    `Complainant: ${userName || "(Your Name)"}`,
    `Date/Time of Incident: ${datetime}`,
    `Place: ${place}`,
    "",
    "Brief Facts:",
    summary,
    "",
    "Additional Information:",
    `- I ${stopped.toLowerCase()} after the collision.`,
    `- Injuries/medical assistance: ${injuries}`,
    `- Other party & vehicle details: ${otherDetails}`,
    `- Insurance status: ${insurance}`,
    "",
    "Request:",
    "I request that an FIR/complaint be registered and appropriate action be taken for rash/negligent driving and any other applicable offences. I am willing to cooperate in the investigation and provide evidence (photos/videos/witness details).",
    "",
    "Signature: ______________________",
    `Date: ${new Date().toLocaleDateString()}`
  ].join("\n");

  triggerDownload(content, `Accident_FIR_${(userName||"User").replace(/\s+/g,'_')}_${new Date().toISOString().split('T')[0]}.txt`);
  addBotMessage("Your FIR/complaint draft has been generated and downloaded.");
}

function collectAccidentInputs() {
  try {
    const stopped = prompt("Did you stop after the collision or drove away? (e.g., Stopped and cooperated)") || "(Not provided)";
    const injuries = prompt("Anyone injured? If yes, are they being treated/ambulance called?") || "(Not provided)";
    const otherDetails = prompt("Other party present? Their contact/vehicle number? Any witnesses?") || "(Not provided)";
    const datetime = prompt("Date, time of the accident (e.g., 21 Oct 2025, 6:30 PM)") || "(Not provided)";
    const place = prompt("Place of the accident (landmark/road/city)") || "(Not provided)";
    const insurance = prompt("Is your vehicle insured? (third‑party/own damage/not sure)") || "(Not provided)";
    const summary = prompt("Briefly describe what happened (1-4 lines)") || "(Not provided)";

    return { stopped, injuries, otherDetails, datetime, place, insurance, summary };
  } catch (e) {
    return null;
  }
}

function triggerDownload(text, filename) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
