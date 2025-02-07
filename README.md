# InterVize - Real-Time Interview Platform 🎥💻

InterVize is a modern **real-time interview platform** that simplifies the technical hiring process by integrating **video calls, live coding assessments, and structured feedback** into one seamless experience.

![](assests/Screenshot%202025-02-08%20015755.png)


## 🚀 Features

- **Real-time Video Interviews** – High-quality video calls powered by [Stream Video SDK](https://getstream.io/video/).
- **Secure Authentication** – Role-based access for interviewers & candidates using [Clerk](https://clerk.dev/).
- **Live Coding Assessments** – Integrated code editor supporting multiple languages (Python, JavaScript, Java).
- **Feedback & Rating System** – Structured evaluation to improve hiring decisions.
- **Scalable Backend** – Serverless functions with [Convex](https://convex.dev/).
- **Beautiful UI** – Built with [shadcn/ui](https://ui.shadcn.com/) & Tailwind CSS for a sleek, modern design.
- **WebRTC-Powered Streaming** – Low-latency, high-performance video conferencing.

## 📸 Screenshots

### **Dashboard**
![InterVize Dashboard](assests/Screenshot%202025-02-08%20015848.png)

### **Video Interview Interface**
![Video Interview](assests/Screenshot%202025-02-08%20020722.png)


## 🛠 Tech Stack

### **Frontend**
- Next.js (React Framework)
- Tailwind CSS (Styling)
- shadcn/ui (Component Library)

### **Backend**
- Convex (Serverless Data Functions)
- Clerk (Authentication & Role Management)
- WebRTC (Real-Time Communication)
- Stream Video SDK (Video Conferencing)

## 🔧 Installation & Setup

### **Prerequisites**
- Node.js (>= 16.x)
- npm or yarn
- Environment variables for Stream SDK, Clerk, and Convex (See `.env.example`)

### **Steps to Run Locally**
```sh
# Clone the repository
git clone https://github.com/your-username/intervize.git
cd intervize

# Install dependencies
npm install  # or yarn install

# Set up environment variables
cp .env.example .env
# Edit .env file with your API keys

# Run the development server
npm run dev  # or yarn dev
```

## 🚀 Deployment
InterVize is deployed on [Vercel](https://vercel.com/). To deploy:
```sh
git push origin main
```
Or use Vercel CLI:
```sh
vercel deploy
```

## 🌐 Live Demo 
- **Live Website:** https://inter-vize.vercel.app/

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the repo.
2. Create a new branch (`feature-xyz`).
3. Commit changes.
4. Open a pull request.

## 📝 License
This project is licensed under the MIT License.

---
💬 **Have feedback or suggestions?** Feel free to reach out or open an issue!
