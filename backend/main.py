from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uuid
from datetime import datetime

app = FastAPI(title="E-Commerce API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Models ---
class Product(BaseModel):
    id: Optional[str] = None
    name: str
    description: str
    price: float
    image: str
    category: str
    stock: int = 0

class OrderItem(BaseModel):
    id: str
    name: str
    price: float
    qty: int

class Order(BaseModel):
    name: str
    email: str
    phone: str
    address: str
    items: List[OrderItem]
    total: float

# --- Mock Data ---
products_db = [
    {"id": "1", "name": "هاتف ذكي", "description": "هاتف ذكي بمواصفات عالية", "price": 999, "image": "https://via.placeholder.com/300", "category": "إلكترونيات", "stock": 50},
    {"id": "2", "name": "لابتوب احترافي", "description": "لابتوب للمحترفين والمطورين", "price": 3499, "image": "https://via.placeholder.com/300", "category": "إلكترونيات", "stock": 20},
    {"id": "3", "name": "سماعات لاسلكية", "description": "جودة صوت استثنائية", "price": 299, "image": "https://via.placeholder.com/300", "category": "إلكترونيات", "stock": 100},
    {"id": "4", "name": "كتاب البرمجة", "description": "تعلم البرمجة من الصفر", "price": 79, "image": "https://via.placeholder.com/300", "category": "كتب", "stock": 200},
]
orders_db = []

# --- Routes ---
@app.get("/")
def root():
    return {"message": "E-Commerce API is running 🚀", "version": "1.0.0"}

@app.get("/products")
def get_products(category: Optional[str] = None):
    if category and category != 'الكل':
        return [p for p in products_db if p['category'] == category]
    return products_db

@app.get("/products/{product_id}")
def get_product(product_id: str):
    product = next((p for p in products_db if p['id'] == product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="المنتج غير موجود")
    return product

@app.post("/products")
def create_product(product: Product):
    product.id = str(uuid.uuid4())
    products_db.append(product.dict())
    return product

@app.post("/orders")
def create_order(order: Order):
    order_data = order.dict()
    order_data['id'] = str(uuid.uuid4())
    order_data['status'] = 'pending'
    order_data['created_at'] = datetime.now().isoformat()
    orders_db.append(order_data)
    # TODO: Send webhook to n8n for notifications
    return {"success": True, "order_id": order_data['id'], "message": "تم استلام طلبك بنجاح"}

@app.get("/orders")
def get_orders():
    return orders_db

@app.get("/orders/{order_id}")
def get_order(order_id: str):
    order = next((o for o in orders_db if o['id'] == order_id), None)
    if not order:
        raise HTTPException(status_code=404, detail="الطلب غير موجود")
    return order
