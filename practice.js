fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_API_KEY` // Replace with your API key
    },
    body: JSON.stringify({
        prompt: userMessage,
        max_tokens: 150
    })
})

