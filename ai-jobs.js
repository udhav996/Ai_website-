async function fetchJobs() {
    const apiKey = "289c50d29bmsh31fde1c37acd698p170cb3jsn6f998a0240c7"; // Replace with your actual API key
    const response = await fetch("https://jsearch.p.rapidapi.com/search?query=AI%20Developer&country=IN&num_pages=1", { 
        method: "GET",
        headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        }
    });

    const data = await response.json();
    let jobHTML = '';

    data.data.forEach(job => {
        jobHTML += `
            <div class="job">
                <h3>${job.job_title}</h3>
                <p><strong>Company:</strong> ${job.employer_name}</p>
                <p><strong>Location:</strong> ${job.job_city || "Remote"}</p>
                <p><strong>Salary:</strong> ${job.job_min_salary || "Not Specified"} - ${job.job_max_salary || "Not Specified"}</p>
                <a href="${job.job_apply_link}" target="_blank">Apply Now</a>
            </div>`;
    });

    document.getElementById('job-listings').innerHTML = jobHTML;
}

fetchJobs();



