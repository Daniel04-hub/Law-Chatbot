const legalData = {
  divorce: {
    lawyer: "Family Law Lawyer",
    section: "Section 13, Hindu Marriage Act, 1955",
    document: "divorce_notice.pdf",
    keywords: ["divorce", "separation", "matrimonial", "marriage dissolution"],
    solutions: [
      "Collect marriage certificate and any prior legal notices/orders.",
      "List grounds for divorce (cruelty, desertion, mutual consent, etc.).",
      "Consult a family lawyer and file in the competent family court.",
      "Discuss interim maintenance, custody, and residence orders if needed."
    ],
    documents: ["Marriage certificate", "ID/address proof", "Evidence supporting grounds", "Any prior complaints/orders"]
  },
  theft: {
    lawyer: "Criminal Defence Lawyer",
    section: "Section 378, Indian Penal Code",
    document: "theft_complaint.pdf",
    keywords: ["theft", "stolen", "robbery", "burglary", "larceny"],
    solutions: [
      "Immediately file a police complaint/FIR with details of stolen items.",
      "Preserve and share any CCTV/photos/IMEI/serial numbers as evidence.",
      "Provide witness details if any and keep purchase bills ready.",
      "Inform insurer (if applicable) and follow claim process."
    ],
    documents: ["List of stolen items with approximate value", "Photos/CCTV", "Receipts/IMEI/serial numbers", "ID proof"]
  },
  contract: {
    lawyer: "Corporate Lawyer",
    section: "Indian Contract Act, 1872",
    document: "contract_template.pdf",
    keywords: ["contract", "agreement", "breach", "business deal", "commercial"],
    solutions: [
      "Review contract terms on breach/termination/liquidated damages.",
      "Send a legal notice specifying breach and cure period.",
      "Attempt mediation; failing which, file suit/arbitration as per clause.",
      "Preserve email/communication trail and deliverables."
    ],
    documents: ["Signed contract", "Emails/letters", "Invoices/POs", "Delivery/acceptance records"]
  },
  property: {
    lawyer: "Property & Real Estate Lawyer",
    section: "Transfer of Property Act, 1882",
    document: "property_dispute.pdf",
    keywords: ["property", "land", "real estate", "sale deed", "property dispute", "land dispute"],
    solutions: [
      "Collect title documents, encumbrance certificates, and tax receipts.",
      "Issue notice to opposing party; consider mediation for boundary/possession issues.",
      "File civil suit for injunction/declaration/specific performance as needed.",
      "Update land records and register orders as required."
    ],
    documents: ["Sale deed/Title papers", "Mutation/RTC/Patta", "Tax receipts", "Site plan/photos"]
  },
  rent: {
    lawyer: "Civil Lawyer (Tenancy)",
    section: "Rent Control Act",
    document: "rent_agreement.pdf",
    keywords: ["rent", "tenant", "landlord", "eviction", "lease", "tenancy"],
    solutions: [
      "Check tenancy terms, notice period, and rent arrears.",
      "Serve legal notice for eviction/arrears as per local Rent Act.",
      "File eviction/suit for recovery if default continues.",
      "Document payment history and communications."
    ],
    documents: ["Rent agreement", "Rent payment proof", "Correspondence", "ID/address proof"]
  },
  dowry: {
    lawyer: "Family & Criminal Lawyer",
    section: "Section 498A, Indian Penal Code",
    document: "dowry_complaint.pdf",
    keywords: ["dowry", "498a", "harassment", "domestic violence", "cruelty"],
    solutions: [
      "If in immediate danger, call police and seek protection.",
      "File complaint regarding cruelty/harassment; consider DV Act protection orders.",
      "Preserve evidence: messages, medical reports, witness accounts.",
      "Seek counselling/shelter services and legal aid where applicable."
    ],
    documents: ["Complaint details", "Medical reports (if any)", "Photos/messages/call logs", "Marriage-related documents"]
  },
  assault: {
    lawyer: "Criminal Defence Lawyer",
    section: "Section 351, Indian Penal Code",
    document: "assault_complaint.pdf",
    keywords: ["assault", "attack", "physical violence", "beating", "harm"],
    solutions: [
      "Get medical attention and record injuries immediately.",
      "File FIR/complaint with detailed description, time, place, and assailants.",
      "Provide medical certificate/photos and witness details.",
      "Cooperate with investigation and seek protection if required."
    ],
    documents: ["Medical reports/photos", "Witness details", "CCTV if available", "ID proof"]
  },
  cheating: {
    lawyer: "Criminal Lawyer",
    section: "Section 420, Indian Penal Code",
    document: "cheating_complaint.pdf",
    keywords: ["cheating", "fraud", "scam", "deceive", "420"],
    solutions: [
      "Gather proof of inducement, reliance, and wrongful loss.",
      "File a criminal complaint for cheating and consider a civil recovery suit.",
      "Freeze transactions where possible; inform bank/payment gateway.",
      "Preserve chats/emails/receipts and identify accused details."
    ],
    documents: ["Payment proofs", "Chats/emails", "ID/Address of accused (if known)", "Screenshots of promises/ads"]
  },
  gst: {
    lawyer: "Tax & Corporate Lawyer",
    section: "Goods and Services Tax Act, 2017",
    document: "gst_query.pdf",
    keywords: ["gst", "tax", "goods and services", "taxation", "return"],
    solutions: [
      "Identify compliance lapse (registration/returns/input credit).",
      "Respond to notices within timelines; compute liabilities + interest.",
      "File revised/late returns as permitted; consider appeal for disputes.",
      "Maintain reconciliations (GSTR-1/3B/2B) and ledgers."
    ],
    documents: ["GST returns & ledgers", "Invoices", "Notices/orders", "Bank statements"]
  },
  labour: {
    lawyer: "Labour & Employment Lawyer",
    section: "Industrial Disputes Act, 1947",
    document: "labour_dispute.pdf",
    keywords: ["labour", "employee", "employment", "termination", "wrongful dismissal", "workplace"],
    solutions: [
      "Collect employment contract, payslips, and termination letter (if any).",
      "Send demand/legal notice; approach labour authorities for conciliation.",
      "File claim for back wages/reinstatement/compensation as applicable.",
      "Preserve internal emails and HR communications."
    ],
    documents: ["Appointment letter", "Payslips/Bank statements", "HR emails", "ID/Employee ID"]
  },
  trademark: {
    lawyer: "Intellectual Property Lawyer",
    section: "Trade Marks Act, 1999",
    document: "trademark_application.pdf",
    keywords: ["trademark", "brand", "logo", "copyright", "patent", "intellectual property"],
    solutions: [
      "Conduct a trademark availability search and choose correct class(es).",
      "File application; respond to examination report/opposition if any.",
      "Monitor misuse; issue cease & desist notices to infringers.",
      "Maintain usage evidence for enforcement."
    ],
    documents: ["Logo/word mark samples", "Usage proof", "Class details", "Applicant ID/address"]
  },
  defamation: {
    lawyer: "Civil & Criminal Lawyer",
    section: "Section 499, Indian Penal Code",
    document: "defamation_notice.pdf",
    keywords: ["defamation", "slander", "libel", "reputation", "false statement"],
    solutions: [
      "Collect defamatory content (screenshots/links) and identify publisher.",
      "Send legal notice seeking takedown/apology; consider civil/criminal action.",
      "File suit/complaint where harm occurred; quantify damages if possible.",
      "Avoid republishing defamation in complaint—quote minimally or attach."
    ],
    documents: ["Screenshots/URLs", "Witness statements (if any)", "Proof of harm/loss", "ID/address proof"]
  },
  hit_and_run: {
    lawyer: "Criminal Defence Lawyer",
    section: "Rash/Negligent Driving (IPC) and Motor Vehicles Act provisions",
    document: null,
    keywords: ["hit and run", "ran away", "drove away", "rash driving", "negligent driving"],
    solutions: [
      "Do not leave the scene; call police and medical help if injuries.",
      "Document scene (photos/videos) and exchange details with parties.",
      "Cooperate with investigation; inform insurer promptly.",
      "Seek legal counsel if FIR is registered."
    ],
    documents: ["Photos/videos", "Vehicle/Policy details", "Witness contacts", "Medical reports (if any)"]
  }
};

let userName = "";
let lawyerName = "";
let chatHistory = [];
let lastDetectedCategory = null;
let lastExtractedKeyPoints = null;
let pendingAutoMessage = null;

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

  const welcomeMessage = `Hello ${userName}! I'm Legal Law Chat Bot, your personal legal assistant. I can help you with legal guidance, recommend specialized lawyers, and provide relevant documents. How can I assist you today?`;
  addBotMessage(welcomeMessage);

  // If a topic was chosen from Solutions before chat opened, auto-send it now
  if (pendingAutoMessage) {
    const input = document.getElementById("chatInput");
    input.value = pendingAutoMessage;
    pendingAutoMessage = null;
    sendMessage();
  }
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
  // Extract generic keywords from any natural sentence
  const detectedKeywords = extractKeywords(lowerMessage);

  // If user types search … in chat, perform keyword search
  if (lowerMessage.startsWith("search ") || lowerMessage.startsWith("find ")) {
    const q = message.replace(/^\s*(search|find)\s+/i, "").trim();
    const results = keywordSearchLaws(q);
    if (results.length === 0) {
      addBotMessage(`No direct matches for "${escapeHtml(q)}". Try keywords like: ${Object.keys(legalData).slice(0,6).join(', ')}.`);
    } else {
      const list = results.map(r => `
        <div class="law-result-item">
          <div>
            <div><strong>${titleCaseCategory(r.key)}</strong> — ${r.data.section}</div>
            <div class="meta">Lawyer: ${r.data.lawyer}</div>
          </div>
          <button class="document-btn" onclick="startTopicChat('${r.key}')">Ask about ${titleCaseCategory(r.key)}</button>
        </div>
      `).join('');
      addBotMessage(`<div class="law-search-results">${list}</div>`);
    }
    return;
  }

  // Accident/traffic collision flow (Legal Chatbot)
  const accidentKeywords = [
    "accident", "crash", "collision", "collided", "hit a car", "hit car", "hit someone",
    "ran into", "bike accident", "car accident", "scooter accident", "road accident",
    "knocked", "bumped", "fender bender", "hit and run", "run away", "drove away"
  ];
  if (accidentKeywords.some(k => lowerMessage.includes(k))) {
    matchFound = true;

    const legalChatbotMessage = `
  <strong>As Legal Law Chat Bot, I can help — please answer a few quick questions so I can give precise legal steps:</strong><br><br>
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

  addBotMessage(legalChatbotMessage);

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

  // Generic classification + key point extraction
  const classification = classifyCategory(lowerMessage);
  const keyPoints = analyzeMessage(message);
  lastDetectedCategory = classification?.key || null;
  lastExtractedKeyPoints = keyPoints;

  for (const key in legalData) {
    const data = legalData[key];
    const hasKeyword = data.keywords.some(keyword => lowerMessage.includes(keyword));

    if (hasKeyword) {
      matchFound = true;
      const response = `Based on your statement, ${userName}, this appears to relate to <strong>${key.replace(/\b\w/g, c => c.toUpperCase())}</strong>. I recommend consulting with a <strong>${data.lawyer}</strong>. ` +
        `This matter typically falls under <strong>${data.section}</strong>.<br><br>` +
        `${lawyerName !== "a qualified lawyer" ? `I suggest you reach out to ${lawyerName}, who specializes in this area. ` : ""}` +
        `${formatDetectedKeywords(detectedKeywords)}${formatKeyPointsForReply(keyPoints)}${formatSolutionsForCategory(data)}` +
        `<br>I've prepared a relevant document for you to download.`;

      addBotMessage(response, data.document);

      // Offer tailored draft based on extracted info
      addBotMessage(`Would you like a tailored draft based on your details? <br><button class="document-btn" onclick="generateCategoryDraft()">📄 Generate Draft</button>`);

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
      if (classification && classification.score > 0) {
        const data = legalData[classification.key];
        const response = `Based on your statement, ${userName}, this likely involves <strong>${classification.key.replace(/\b\w/g, c => c.toUpperCase())}</strong>. ` +
          `Recommended expert: <strong>${data.lawyer}</strong>. Applicable law: <strong>${data.section}</strong>.<br>` +
          `${formatDetectedKeywords(detectedKeywords)}${formatKeyPointsForReply(keyPoints)}${formatSolutionsForCategory(data)}` +
          `<br>Do you want me to generate a tailored draft? <button class="document-btn" onclick="generateCategoryDraft()">📄 Generate Draft</button>`;
        addBotMessage(response, data.document);
      } else {
        // Try to use extracted keywords to suggest relevant legal topics
        const suggestions = rankCategoriesByKeywords(detectedKeywords);
        if (suggestions.length > 0) {
          const list = suggestions.slice(0, 5).map(r => `
            <div class="law-result-item">
              <div>
                <div><strong>${titleCaseCategory(r.key)}</strong> — ${r.data.section}</div>
                <div class="meta">Lawyer: ${r.data.lawyer}${r.matched && r.matched.length ? ` • Matched: ${r.matched.join(', ')}` : ''}</div>
              </div>
              <button class="document-btn" onclick="startTopicChat('${r.key}')">Ask about ${titleCaseCategory(r.key)}</button>
            </div>
          `).join('');
          addBotMessage(`I picked up these keywords from your message: <strong>${escapeHtml(detectedKeywords.join(', '))}</strong>.<br>These topics seem relevant — pick one to continue:<div class="law-search-results">${list}</div>`);
        } else {
          const generalResponse = `I understand you're seeking help with: "${escapeHtml(message)}". ` +
            `${formatDetectedKeywords(detectedKeywords)}${formatKeyPointsForReply(keyPoints)}` +
            `If you can add 1-2 more specific legal words (e.g., divorce, theft, property, contract, rent, assault, GST), I can give more precise steps. You can also type <em>search your keywords</em>.`;
          addBotMessage(generalResponse);
        }
      }
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

  let chatText = `Legal Law Chat Bot - Chat Summary\n`;
  chatText += `User: ${userName}\n`;
  chatText += `Date: ${new Date().toLocaleString()}\n`;
  chatText += `${"=".repeat(50)}\n\n`;

  chatHistory.forEach((entry, index) => {
    if (entry.role === "user") {
      chatText += `${userName}: ${entry.message}\n\n`;
    } else {
      const cleanMessage = entry.message.replace(/<br>/g, "\n").replace(/<\/?strong>/g, "").replace(/<[^>]*>/g, "");
  chatText += `Legal Law Chat Bot: ${cleanMessage}\n`;
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

function formatSolutionsForCategory(data) {
  if (!data) return "";
  const steps = Array.isArray(data.solutions) && data.solutions.length
    ? `<br><strong>Recommended steps:</strong><ul>${data.solutions.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
    : "";
  const docs = Array.isArray(data.documents) && data.documents.length
    ? `<strong>Documents to prepare:</strong><ul>${data.documents.map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul>`
    : "";
  return `${steps}${docs}`;
}

function formatDetectedKeywords(keywords) {
  if (!keywords || !keywords.length) return "";
  return `<em>Detected keywords: ${escapeHtml(keywords.slice(0, 6).join(', '))}</em><br>`;
}

// ————— Solutions rendering & click-to-ask ————— //
function titleCaseCategory(key) {
  const map = { gst: "GST", ip: "IP", fir: "FIR" };
  if (map[key]) return map[key];
  return key.replace(/\b\w/g, c => c.toUpperCase());
}

function renderSolutions() {
  const grid = document.getElementById("solutionsGrid");
  if (!grid) return;
  const cards = Object.entries(legalData).map(([key, data]) => {
    const title = titleCaseCategory(key);
    return `
      <div class="solution-card">
        <h3>${title}</h3>
        <div class="solution-meta"><strong>Law/Section:</strong> ${data.section}</div>
        <div class="solution-meta"><strong>Lawyer:</strong> ${data.lawyer}</div>
        <button class="document-btn" onclick="startTopicChat('${key}')">Ask about ${title}</button>
      </div>
    `;
  }).join("");
  grid.innerHTML = cards;
}

window.startTopicChat = function startTopicChat(key) {
  const title = titleCaseCategory(key);
  const message = `I need help with ${title}`;
  const chatWidget = document.getElementById("chatWidget");
  const isOpen = chatWidget && chatWidget.style.display === "flex";
  if (!isOpen) {
    pendingAutoMessage = message;
    openChatModal();
  } else {
    const input = document.getElementById("chatInput");
    input.value = message;
    sendMessage();
  }
}

// Initialize Solutions on load
renderSolutions();

// ————— Keyword search (Solutions UI + chat) ————— //
function keywordSearchLaws(query) {
  const q = query.toLowerCase();
  const scored = Object.entries(legalData).map(([key, data]) => {
    const score = data.keywords.reduce((acc, kw) => acc + (q.includes(kw) ? 2 : 0), 0)
      + (data.section.toLowerCase().includes(q) ? 3 : 0)
      + (data.lawyer.toLowerCase().includes(q) ? 1 : 0)
      + (key.includes(q) ? 2 : 0);
    return { key, data, score };
  }).filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
  return scored;
}

function wireLawSearchInput() {
  const input = document.getElementById('lawSearchInput');
  const results = document.getElementById('lawSearchResults');
  if (!input || !results) return;
  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (!q) { results.innerHTML = ''; return; }
    const matches = keywordSearchLaws(q);
    if (matches.length === 0) { results.innerHTML = '<div class="law-result-item">No results</div>'; return; }
    results.innerHTML = matches.map(r => `
      <div class="law-result-item">
        <div>
          <div><strong>${titleCaseCategory(r.key)}</strong> — ${r.data.section}</div>
          <div class="meta">Lawyer: ${r.data.lawyer}</div>
        </div>
        <button class="document-btn" onclick="startTopicChat('${r.key}')">Ask about ${titleCaseCategory(r.key)}</button>
      </div>
    `).join('');
  });
}

wireLawSearchInput();

// ————— Helpers: classification & key-points ————— //
const STOPWORDS = new Set([
  'i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves',
  'he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves',
  'what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having',
  'do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against',
  'between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again',
  'further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such',
  'no','nor','not','only','own','same','so','than','too','very','can','will','just','don','should','now','help','please','need','issue','problem'
]);

function extractKeywords(text, max = 8) {
  if (!text) return [];
  const tokens = text
    .toLowerCase()
    .replace(/[^a-z0-9+\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w && w.length >= 3 && !STOPWORDS.has(w));
  if (tokens.length === 0) return [];
  const freq = new Map();
  for (const t of tokens) freq.set(t, (freq.get(t) || 0) + 1);
  const ranked = [...freq.entries()].sort((a,b) => b[1]-a[1]).map(([w]) => w);
  return ranked.slice(0, max);
}

function rankCategoriesByKeywords(keywords) {
  if (!keywords || !keywords.length) return [];
  const results = [];
  for (const key in legalData) {
    const data = legalData[key];
    let score = 0;
    const matched = [];
    for (const kw of keywords) {
      // match against defined keywords, category key, lawyer, and section text
      const inDefined = data.keywords.some(k => k.includes(kw) || kw.includes(k));
      const inKey = key.includes(kw);
      const inLawyer = data.lawyer.toLowerCase().includes(kw);
      const inSection = data.section.toLowerCase().includes(kw);
      if (inDefined || inKey || inLawyer || inSection) {
        score += inDefined ? 3 : (inSection ? 2 : 1);
        matched.push(kw);
      }
    }
    if (score > 0) results.push({ key, data, score, matched: Array.from(new Set(matched)) });
  }
  return results.sort((a,b) => b.score - a.score).slice(0, 10);
}
function classifyCategory(lowerMessage) {
  let bestKey = null;
  let bestScore = 0;
  for (const key in legalData) {
    const data = legalData[key];
    const score = data.keywords.reduce((acc, kw) => acc + (lowerMessage.includes(kw) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestKey = key;
    }
  }
  if (bestKey) return { key: bestKey, score: bestScore };
  return null;
}

function analyzeMessage(text) {
  const keyPoints = {
    date: extractDate(text),
    time: extractTime(text),
    amount: extractAmount(text),
    phone: extractPhone(text),
    email: extractEmail(text),
    vehicle: extractVehicle(text),
    place: extractPlace(text),
    parties: extractParties(text)
  };
  return keyPoints;
}

function formatKeyPointsForReply(points) {
  if (!points) return "";
  const items = [];
  if (points.date) items.push(`<li>Date: ${points.date}</li>`);
  if (points.time) items.push(`<li>Time: ${points.time}</li>`);
  if (points.place) items.push(`<li>Place: ${escapeHtml(points.place)}</li>`);
  if (points.amount) items.push(`<li>Amount: ${points.amount}</li>`);
  if (points.phone) items.push(`<li>Phone: ${points.phone}</li>`);
  if (points.email) items.push(`<li>Email: ${points.email}</li>`);
  if (points.vehicle) items.push(`<li>Vehicle No.: ${points.vehicle}</li>`);
  if (points.parties && points.parties.length) items.push(`<li>Parties: ${escapeHtml(points.parties.join(', '))}</li>`);
  if (items.length === 0) return "";
  return `<br><strong>Key points I detected:</strong><ul>${items.join('')}</ul>`;
}

// Simple extraction heuristics
function extractDate(text) {
  const m = text.match(/\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{1,2}\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\s*\d{2,4})\b/i);
  return m ? m[0] : null;
}
function extractTime(text) {
  const m = text.match(/\b(\d{1,2}:\d{2}\s*(AM|PM)?|\d{1,2}\s*(AM|PM))\b/i);
  return m ? m[0] : null;
}
function extractAmount(text) {
  const m = text.match(/\b(Rs\.?|INR\s*)?\s?\d{3,}(,\d{3})*(\.\d{1,2})?\b/i);
  return m ? m[0] : null;
}
function extractPhone(text) {
  const m = text.match(/\b(\+?91[- ]?)?[6-9]\d{9}\b/);
  return m ? m[0] : null;
}
function extractEmail(text) {
  const m = text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  return m ? m[0] : null;
}
function extractVehicle(text) {
  // Simple Indian plate heuristic: e.g., MH12 AB 1234
  const m = text.match(/\b[A-Z]{2}\d{1,2}\s?[A-Z]{1,2}\s?\d{3,4}\b/);
  return m ? m[0] : null;
}
function extractPlace(text) {
  const m = text.match(/\b(at|in|near|outside)\s+([A-Z][\w\-]*(\s+[A-Z][\w\-]*)*)/);
  return m ? m[2] : null;
}
function extractParties(text) {
  // Very rough: capture capitalized word sequences as names (limit 3)
  const matches = text.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2})\b/g);
  if (!matches) return [];
  // Filter out common words
  const blacklist = new Set(["I", "The", "We", "He", "She", "They", "At", "In", "Near", "Outside", "On", "Of"]);
  const names = matches.filter(w => !blacklist.has(w)).slice(0, 5);
  return names;
}

// Draft generator for classified categories
window.generateCategoryDraft = function generateCategoryDraft() {
  const category = lastDetectedCategory;
  const points = lastExtractedKeyPoints || {};
  if (!category || !legalData[category]) {
    addBotMessage("I couldn't determine a specific category to draft. Please add a bit more detail or keywords like 'divorce', 'theft', 'contract', etc.");
    return;
  }
  const data = legalData[category];

  const lines = [
    `${category.toUpperCase()} - Draft Complaint/Notice`,
    "====================================",
    `Complainant: ${userName || "(Your Name)"}`,
    `Category: ${category}`,
    `Applicable Law/Section: ${data.section}`,
    "",
    "Brief Facts (as provided):",
    chatHistory.filter(e => e.role === 'user').slice(-1)[0]?.message || "(Your statement here)",
    "",
    "Key Details:",
    points.date ? `- Date: ${points.date}` : null,
    points.time ? `- Time: ${points.time}` : null,
    points.place ? `- Place: ${points.place}` : null,
    points.amount ? `- Amount: ${points.amount}` : null,
    points.phone ? `- Phone: ${points.phone}` : null,
    points.email ? `- Email: ${points.email}` : null,
    points.vehicle ? `- Vehicle No.: ${points.vehicle}` : null,
    points.parties && points.parties.length ? `- Parties: ${points.parties.join(', ')}` : null,
    "",
    "Relief/Request:",
    "I request that appropriate legal action/remedy be taken as per law, and I am willing to cooperate and provide further evidence as needed.",
    "",
    "Signature: ______________________",
    `Date: ${new Date().toLocaleDateString()}`
  ].filter(Boolean);

  const filename = `${category}_Draft_${(userName||"User").replace(/\s+/g,'_')}_${new Date().toISOString().split('T')[0]}.txt`;
  triggerDownload(lines.join('\n'), filename);
  addBotMessage("Your category-based draft has been generated and downloaded.");
}
