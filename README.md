# 🕓 TimetraX

**TimetraX** is a full-stack appointment booking platform built for service-based professionals such as dentists, doctors, barbers, and more. It provides a modern, scalable, and user-friendly interface for managing bookings, availability, and clients – all in one place.

> ⚙️ Built with **Node.js**, **TypeScript**, **PostgreSQL**, **Prisma**, **React**, **Tailwind CSS**, and **Docker**.

---

## 📌 Features

### 🔐 Authentication & Onboarding
- Email-based step-by-step registration flow (like Fresha)
- Country-specific mobile number input
- JWT-based authentication with secure password hashing
- Form validation with server-side error handling

### 📅 Appointment Scheduling
- Professionals can manage availability, time slots, and working hours
- Clients can browse and book available appointments in real-time
- Custom calendar interface with user-friendly date selection *(planned)*

### 👤 User Management
- Role-based access for clients and service providers
- Profile editing with image upload (via Cloudinary)
- Secure password change with validation

### 🌍 Business Dashboard *(coming soon)*
- Analytics on bookings, clients, and performance
- Options to manage services, durations, and prices
- Integration with email and/or SMS reminders

---

## 🧱 Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| **Frontend** | React, TypeScript, Tailwind CSS     |
| **Backend**  | Node.js, Express, TypeScript        |
| **Database** | PostgreSQL + Prisma ORM             |
| **Auth**     | JWT, bcrypt                         |
| **CI/CD**    | Docker, Google Cloud Run *(planned)* |
| **Assets**   | Cloudinary                          |

---

## 🗂 Project Structure