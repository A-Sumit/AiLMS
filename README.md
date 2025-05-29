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

| Layer | Tech |
|-------|------|
| Backend | Node.js, Express |
| AI/NLP | Hugging Face Zero-Shot API |
| Database | MongoDB Atlas + Mongoose |
| Auth | Token-based header authentication |
| Tools | Postman, CORS, dotenv, axios, nodemon |

---

## 📂 Folder Structure

