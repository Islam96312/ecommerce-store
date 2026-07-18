# 🚀 دليل الإعداد

## المتطلبات
- Node.js 18+
- Python 3.11+
- Docker (اختياري)

## إعداد Frontend
```bash
cd frontend
npm install
cp .env.local.example .env.local
# عدّل القيم في .env.local
npm run dev
```

## إعداد Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# عدّل القيم في .env
uvicorn main:app --reload
```

## تشغيل بـ Docker
```bash
docker-compose up --build
```

## الروابط بعد التشغيل
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs
- Admin Panel: افتح admin/index.html

## ربط n8n للإشعارات
1. أضف `N8N_WEBHOOK_URL` في ملف `.env`
2. في backend/main.py → route `/orders` أرسل POST request لـ n8n
3. n8n يرسل إشعار واتساب/إيميل عند كل طلب جديد
