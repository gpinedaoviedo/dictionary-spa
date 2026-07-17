from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.models import DictionaryResponse
from services.services import search_word

app = FastAPI(title="Diccionario SPA API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"] 
)

@app.get("/api/search/en/definition", response_model=DictionaryResponse)
def get_definition(word: str):
    return search_word(word)
        