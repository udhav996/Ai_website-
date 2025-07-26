const apiKey = "3c1d0a65e584a1e95f56f4edfdda4008";  // Replace with your actual API key
const proxyUrl = "https://corsproxy.io/?"; 
const apiUrl = `https://gnews.io/api/v4/search?q=artificial-intelligence&token=${apiKey}`;

async function fetchAINews() {
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);

        if (!data.articles) {
            throw new Error("No news articles found");
        }

        let newsHTML = "";
        data.articles.forEach(article => {
            newsHTML += `
                <div class="news-item">
                    <h3>${article.title}</h3>
                    <p>${article.description || "No description available."}</p>
                    <img src="${article.image || 'default-image.jpg'}" alt="News Image" width="200">
                    <a href="${article.url}" target="_blank">🔗 Read More</a>
                </div>
                <hr>
            `;
        });

        document.getElementById("news-container").innerHTML = newsHTML;
    } catch (error) {
        document.getElementById("news-container").innerHTML = `<p>❌ ${error.message}</p>`;
    }
}

// Call the function
fetchAINews(); 