# 🛒 متجر إلكتروني متكامل | Full-Stack E-Commerce Store

> مشروع متجر إلكتروني متكامل باستخدام Next.js (Frontend) + FastAPI (Backend) + Firebase (Database)

## 🏗️ هيكل المشروع

```
ecommerce-store/
├── frontend/          # Next.js React App
├── backend/           # FastAPI Python Server
├── admin/             # لوحة تحكم الإدارة
├── docs/              # التوثيق
└── docker-compose.yml
```

## ⚡ التقنيات المستخدمة

| الطبقة | التقنية |
|--------|--------|
| Frontend | Next.js 14 + Tailwind CSS |
| Backend | FastAPI (Python) |
| Database | Firebase Firestore |
| Auth | Firebase Auth |
| Payments | Stripe / PayTabs |
| Automation | n8n Webhooks |

## 🚀 تشغيل المشروع

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## 📄 الترخيص
MIT License
