🎓 EduVerse Backend
This is the backend service for EduVerse, an AI-powered career roadmap generator built for HackOdisha 5.0.

It exposes a REST API that generates structured learning roadmaps for any given career role using the Google Gemini API.

🚀 Features
AI-Powered Roadmaps: Generates dynamic learning paths using the Google Gemini API.

Structured JSON Responses: Provides clean, predictable JSON output for easy frontend integration.

Robust Error Handling: Uses custom ApiError and ApiResponse classes for clear, consistent responses.

Asynchronous Logic: Employs an asyncHandler utility to manage promises and errors gracefully.

Resilient Fallback System: Includes an optional mock data fallback to ensure the API is always functional, even if the AI service is down.

Secure & Configurable: Uses environment variables for API keys and CORS policies.

⚙️ Setup & Installation
1. Clone & Install Dependencies
git clone <your-repository-link>
cd eduverse-backend
npm install

2. Setup Environment Variables
Create a .env file in the project root and add the following:

PORT=8000
GEMINI_API_KEY="your_gemini_api_key_here"
CORS_ALLOWED_ORIGINS="[http://127.0.0.1:5500](http://127.0.0.1:5500)"
USE_MOCK_DATA=true

PORT → The port your backend server will run on.

GEMINI_API_KEY → Your API key from Google AI Studio.

CORS_ALLOWED_ORIGINS → The URL of your frontend application.

USE_MOCK_DATA → Set to true to use fallback data if the Gemini API call fails.

3. Run the Development Server
npm run dev

The server will be live at: http://localhost:8000

📡 API Endpoints
✅ Health Check
URL: /

Method: GET

Success Response: "EduVerse Backend is running! 🚀"

📘 Generate Roadmap
URL: /api/v1/roadmap/generate

Method: GET

Query Parameters:

role (string, required) → The career role you want a roadmap for (e.g., "VLSI Engineer").

Example Request:

GET http://localhost:8000/api/v1/roadmap/generate?role=VLSI%20Engineer

Success Response (200 OK):

{
  "statusCode": 200,
  "data": {
    "roadmap": [
      {
        "stage": "Beginner",
        "skills": ["Digital Logic Design", "Verilog/VHDL"],
        "resources": [{ "name": "Resource A", "url": "..." }],
        "project": "Design and simulate a simple 8-bit ALU..."
      },
      { "stage": "Intermediate", "...": "..." },
      { "stage": "Advanced", "...": "..." }
    ]
  },
  "message": "Roadmap generated successfully",
  "success": true
}

Error Response (400 Bad Request):

{
  "success": false,
  "message": "The 'role' query parameter is required and cannot be empty.",
  "errors": []
}

🛠️ Tech Stack
Backend: Node.js, Express.js

AI Service: Google Gemini API

Module System: ES Modules (import/export)

Development: nodemon for live server reloading

🤝 Contribution
Fork the repository.

Create your feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📜 License
Distributed under the MIT License.

© 2025 HackOdisha 5.0 - EduVerse Team