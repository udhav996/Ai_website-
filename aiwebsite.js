


// AI Tool Groups (Organized by Category)
const toolGroups = {
  chatbots: [
      { name: "ChatGPT", desc: "AI chatbot for conversations, writing, and problem-solving.", link: "https://chat.openai.com", image: "chat-gpt.png" },
      { name: "Google Bard", desc: "AI-powered research assistant.", link: "https://bard.google.com", image: "google-bard.png" },
      { name: "Jasper AI", desc: "AI writing assistant for marketing.", link: "https://www.jasper.ai", image: "jasper.png" },
      { name: "Perplexity AI", desc: "AI-powered search engine for smart answers.", link: "https://www.perplexity.ai", image: "Perplexity.webp" }
  ],
  imageAI: [
      { name: "DALL·E", desc: "Generates AI-created images and artwork from text.", link: "https://openai.com/dall-e", image: "dell-e.jpg" },
      { name: "MidJourney", desc: "AI-powered digital art tool.", link: "https://www.midjourney.com", image: "midjourney.jpg" },
      { name: "Stable Diffusion", desc: "AI-generated images and graphics.", link: "https://stablediffusionweb.com", image: "stable-diffusion.png" },
      { name: "Leonardo ai", desc: "AI-powered creative image generator.", link: "https://leonardo.ai/", image: "leonardo-ai.png" }
  ],
  codingAI: [
      { name: "GitHub Copilot", desc: "AI-powered coding assistant.", link: "https://github.com/features/copilot", image: "github-copilot.png" },
      { name: "Tabnine", desc: "AI autocomplete for developers.", link: "https://www.tabnine.com", image: "tabnine.jpg" },
      { name: "Codeium", desc: "AI-powered coding assistance.", link: "https://www.codeium.com", image: "codeium.png" },
      { name: "Amazon CodeWhisperer", desc: "Amazon's AI for coding.", link: "https://aws.amazon.com/codewhisperer/", image: "amazoncodewhisperer.jpg" }
  ],
  voiceAI: [
      { name: "Murf AI", desc: "AI voice generator with natural-sounding voices.", link: "https://murf.ai", image: "murfai.png" },
      { name: "ElevenLabs", desc: "AI-powered text-to-speech voices.", link: "https://elevenlabs.io", image: "elevenlab.jpg" },
      { name: "Play.ht", desc: "AI-generated voiceovers for content creators.", link: "https://play.ht", image: "play.jpg" },
      { name: "Resemble AI", desc: "Create realistic AI-generated voices.", link: "https://www.resemble.ai", image: "resemble.jpg" }
  ],
  businessAI: [
      { name: "Copy.ai", desc: "AI-powered content writing for marketing.", link: "https://www.copy.ai", image: "copy-ai.png" },
      { name: "Canva AI", desc: "AI-powered graphic design and templates.", link: "https://www.canva.com", image: "canva.jpg" },
      { name: "Synthesia", desc: "AI video creation using avatars.", link: "https://www.synthesia.io", image: "synthesia.jpg" },
      { name: "Runway ML", desc: "AI video and content generation.", link: "https://runwayml.com", image: "runway.png" }
  ]
};

// Function to Load AI Tools into the Correct Group
function loadToolGroups() {
  Object.keys(toolGroups).forEach(groupId => {
      const container = document.getElementById(`${groupId}-container`);
      if (container) {
          container.innerHTML = ""; // Clear previous content
          toolGroups[groupId].forEach(tool => {
              const card = document.createElement("div");
              card.classList.add("card");
              card.innerHTML = `
                  <img src="${tool.image}" alt="${tool.name}" class="card-image">
                  <h2>${tool.name}</h2>
                  <p>${tool.desc}</p>
                  <button onclick="openModal('${tool.name}')">Learn More</button>
              `;
              container.appendChild(card);
          });
      }
  });
}

// Function to Toggle Category Sections
function toggleCategory(categoryId) {
  let content = document.getElementById(categoryId);
  content.style.display = (content.style.display === "block") ? "none" : "block";
}

// Load AI Tools on Page Load
document.addEventListener("DOMContentLoaded", loadToolGroups); 


// Modal Elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const modalImage = document.createElement("img");
modalImage.id = "modal-image";
modalImage.style.width = "100px";
modalImage.style.marginBottom = "10px";
modal.insertBefore(modalImage, modalTitle);

// Open Modal with Tool Details
function openModal(toolName) {
  let foundTool;
  Object.keys(toolGroups).forEach(group => {
      const tool = toolGroups[group].find(t => t.name === toolName);
      if (tool) foundTool = tool;
  });

  if (foundTool) {
      modalTitle.innerText = foundTool.name;
      modalDesc.innerText = foundTool.desc;
      modalLink.href = foundTool.link;
      modalImage.src = foundTool.image;
      modal.style.display = "flex";
  }
}

// Close Modal
function closeModal() {
  modal.style.display = "none";
}

// Close Modal When Clicking Outside
window.onclick = function(event) {
  if (event.target === modal) {
      closeModal();
  }
};












