# EduSmart — Smart Study Space

A mobile-first Class 12 Commerce learning showcase with:
- 12 bundled PDF notes across Accountancy, Business Studies, Economics and English
- responsive PDF library with category filters and in-app viewer
- AI Tutor API route
- browser voice input + speech output
- quiz practice
- study planner
- cinematic responsive UI

## Run locally
Open `index.html` with a local server.

## Live AI
Deploy to Vercel and add `OPENAI_API_KEY` in Project Settings → Environment Variables. Optional `OPENAI_MODEL` can be set; otherwise the API route uses `gpt-5.6-luna`.

## Voice
Voice input uses the browser Web Speech API. Chrome/Android is recommended. Speech output uses the browser SpeechSynthesis API.

## Important
The bundled PDFs are the notes supplied for the project and are served as static learning material. The AI endpoint does not automatically read PDF contents yet; the next RAG phase can index them into a vector database.
"# edusmart" 
