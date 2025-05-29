# 🧠 AI-Powered Lead Management System

This is a backend system built with **Node.js**, **Express**, **MongoDB**, and **Hugging Face’s Zero-Shot Classification API** to manage and categorize incoming leads intelligently.

It automatically classifies lead messages into business-relevant categories using NLP, stores them in a database, and provides secure admin routes for management and analytics.

---

## 🚀 Features

- 🔍 **Zero-Shot Lead Classification** using Hugging Face (`facebook/bart-large-mnli`)
- 📩 **Lead intake API** for capturing form submissions
- 🧠 **Smart category tagging** without any custom training
- 🛢️ **MongoDB storage** with Mongoose
- 🔐 **Admin-only API routes** using token-based authentication
- 🔁 **Update lead status** (e.g. contacted, converted)
- ❌ **Delete leads** (cleanup or GDPR)
- 📊 **Analytics endpoint** (lead counts by category & status) *(coming soon)*

---

## 🧱 Tech Stack

| Layer     | Tech                         |
|-----------|------------------------------|
| Backend   | Node.js, Express             |
| AI/NLP    | Hugging Face Zero-Shot API  |
| Database  | MongoDB Atlas + Mongoose     |
| Auth      | Token-based header auth      |
| Tools     | Postman, CORS, dotenv, axios |

---

## 📂 Folder Structure

```
ai-lead-manager/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── .env
├── app.js
├── package.json
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-lead-manager.git
cd ai-lead-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up `.env`

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
HUGGINGFACE_API_KEY=your_huggingface_api_key
ADMIN_TOKEN=your_admin_token
```

> Generate your Hugging Face API key from https://huggingface.co/settings/tokens

### 4. Start the dev server

```bash
npm run dev
```

---

## 🧪 API Endpoints

| Method  | Route                        | Description                        |
|---------|-----------------------------|------------------------------------|
| POST    | `/api/leads`                | Create and classify a lead         |
| GET     | `/api/leads`                | Get all leads (admin only)         |
| PATCH   | `/api/leads/:id/status`     | Update lead status (admin only)    |
| DELETE  | `/api/leads/:id`            | Delete a lead (admin only)         |

> Add `Authorization: your_admin_token` in request headers for protected routes.

---

## 📊 Upcoming Features

- 🔢 Lead analytics (group by category/status/date)
- 📬 Email notification on new lead
- 🧩 Optional frontend dashboard (React)

---

