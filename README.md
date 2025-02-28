# 🛡️ Role-Based Access Control (RBAC) System

A **MERN Stack** project implementing authentication, authorization, and protected routes based on user roles. This system provides **Users** the ability to register, log in, and log out, while **Admins** can manage users.

## 📌 Project Overview

This project implements **Role-Based Access Control (RBAC)** with two user roles:

- **User**: Can register, log in, and log out.
- **Admin**: Can view all users and delete any user.

The project utilizes **JWT authentication**, **Context API** for state management, and **React Router** for protected routes. **Tailwind CSS** is used for styling.

---

## 🚀 Tech Stack

### **Frontend**
- ⚛️ React.js
- 🌍 React Router (Navigation & Protected Routes)
- 🎯 Context API (State Management)
- 🎨 Tailwind CSS (UI Design)

### **Backend**
- 🟢 Node.js
- 🚀 Express.js
- 🗄️ MongoDB (Mongoose ODM)
- 🔒 bcryptjs (Password Hashing)
- 🔑 JSON Web Token (JWT Authentication)

---

## 🎯 Features

### **User Features**
✅ Register with name, email, and password  
✅ Login and receive a JWT token (stored in cookies)  
✅ Logout functionality  
✅ Access a **protected dashboard** (only for authenticated users)  

### **Admin Features**
✅ View all registered users  
✅ Delete any user  
✅ Access an **admin-only dashboard** (protected route)  

### **Authentication & Security**
✅ JWT-based authentication  
✅ Password hashing with bcryptjs  
✅ Protected routes based on user roles  
✅ Secure cookies for storing authentication tokens  

---

## 🏗️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Yasir-Ali-Swe/Role-Based-Access-Control-RBAC-System.git

