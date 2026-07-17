from fastapi import HTTPException
from models.models import DictionaryResponse, Phonetic, Meaning, Definition
from dotenv import load_dotenv
import requests
import os

load_dotenv()
api = os.getenv("dictionary_api")

HEADERS = { "User-agent": "DictionarySPA/1.0 (apinedaoviedo@gmail.com)" }

def search_word(word: str) -> DictionaryResponse:
    try:
        response = requests.get(api + word, headers=HEADERS, timeout=10)
        
        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code, 
                detail=response.text
            )
        
        data = response.json()
        entry = data[0]
        
        # Get Phonetics
        phonetics = []

        for item in entry.get("phonetics", []):
            if item.get("text") and item.get("audio"):
                phonetics.append(
                    Phonetic(
                        text=item.get("text"),
                        audio=item.get("audio")
                    )
                )
        
        # Get meanings
        meanings = []
        
        for meaning in entry.get("meanings", []):
            
            definitions = []
            # Get definitions
            for definition in meaning.get("definitions", []):
                definitions.append(
                    Definition(
                        definition=definition.get("definition"),
                        example=definition.get("example"),
                    )
                )
            meanings.append(
                Meaning(
                    part_of_speech=meaning.get("partOfSpeech"),
                    definitions=definitions,
                    synonyms=meaning.get("synonyms", []),
                    antonyms=meaning.get("antonyms", [])
                )
            )
            
        return DictionaryResponse(
            word=entry.get("word"),
            phonetics=phonetics,
            meanings=meanings
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
