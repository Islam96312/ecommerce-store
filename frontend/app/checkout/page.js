'use client'
import { useState } from 'react'
import axios from 'axios'
import useCartStore from '@/store/cartStore'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore()
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, { ...form, items, total: total() })
      clearCart()
      toast.success('تم تقديم طلبك بنجاح!')
      router.push('/order-success')
    } catch {
      toast.error('حدث خطأ، يرجى المحاولة مجدداً')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-right">إتمام الطلب</h1>
      <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
        {['name','email','phone','address'].map(field => (
          <input key={field} required
            placeholder={{ name:'الاسم', email:'البريد الإلكتروني', phone:'رقم الجوال', address:'العنوان' }[field]}
            className="w-full border rounded-lg p-3"
            value={form[field]}
            onChange={e => setForm({...form, [field]: e.target.value})}
          />
        ))}
        <p className="text-xl font-bold">الإجمالي: {total()} ريال</p>
        <button type="submit" className="btn-primary w-full text-lg py-3">تأكيد الطلب ✅</button>
      </form>
    </div>
  )
}
