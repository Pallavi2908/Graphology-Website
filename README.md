
# Psyfer- Analyze your personality through your writing

Psyfer is built on Mistral 7B model, aimed at extracting valuable insights of handwriting to generate a rough report on the user's personality. Its fundamentals works on the 9 aspects of handwriting: Loops, garland, baseline angle, top margin, letter size, line spacing, word spacing, pen pressure and slant angle.
-Backend repo link: https://github.com/Pallavi2908/Graphology-AI-Model

### Features
- Upload handwriting in .jpg/.jpeg/.png format
- Extract handwriting features
- Generate a detailed personality, with instant download

### Technologies Used
- Backend: Flask, Werkzeug, Flask CORS, Axios
- LLM: Mistral 7B
- Frontend: React, TailwindCSS, Framer-motion


### Setup and Installation
- Python 3.7 or higher
- Flask
- werkzeug
- fpdf
- MistralAI
- for complete set of requirements, see requirements.txt

### Installation Steps
1. Clone the repositories
```bash
git clone https://github.com/Pallavi2908/Graphology-AI-Model
```

```bash
git clone https://github.com/Pallavi2908/Graphology-Website
```

2. Create and activate virtual environment
```bash
python -m venv venv
.\venv\Scripts\activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Set up environment variables
Create a `.env` file in the root directory and add:
```
MISTRAL_API_KEY=your_api_key_here
FLASK_SECRET_KEY=your_secret_key
```

### Running the Application
1. Start the Flask backend
```bash
cd backend
python app.py
```

2. Start the React frontend
```bash
cd frontend
npm install
npm run dev
```
