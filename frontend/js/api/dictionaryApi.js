export async function getWordData(data) {
    const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);

    const API_URL = isLocal 
        ? "http://127.0.0.1:8000"
        : "https://dictionary-online.onrender.com"

    const response = await fetch(`${API_URL}/api/search/en/definition?word=${data}`);
        
    if (!response.ok) throw new Error(response.statusText);
    return await response.json(); 
}
