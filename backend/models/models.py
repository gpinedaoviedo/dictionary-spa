from pydantic import BaseModel
from typing import List, Optional

class Phonetic(BaseModel):
    text: Optional[str] = None
    audio: Optional[str]
    
class Definition(BaseModel):
    definition: str
    example: Optional[str] = None
    
class Meaning(BaseModel):
    part_of_speech: str
    definitions: List[Definition]
    synonyms: List[str] = []
    antonyms: List[str] = []
    
class DictionaryResponse(BaseModel):
    word: str
    phonetics: List[Phonetic]
    meanings: List[Meaning]