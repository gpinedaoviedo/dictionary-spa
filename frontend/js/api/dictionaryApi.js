export async function getWordData(data) {
    const response = await fetch(`http://127.0.0.1:8000/api/search/en/definition?word=${data}`);
        
    if (!response.ok) throw new Error(response.statusText);
    return await response.json(); 
}