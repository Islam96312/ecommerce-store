'use client'
import useCartStore from '@/store/cartStore'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeFromCart, updateQty, total } = useCartStore()

  if (items.length === 0) return (
    <div className="text-center py-20">
      <p className="text-xl mb-4">السلة فارغة</p>
      <Link href="/products" className="btn-primary">تسوق الآن</Link>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-right">سلة التسوق</h1>
      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.id} className="card p-4 flex justify-between items-center">
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">حذف</button>
            <div className="flex items-center gap-3">
              <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            </div>
            <div className="text-right">
              <p className="font-bold">{item.name}</p>
              <p className="text-primary">{item.price * item.qty} ريال</p>
            </div>
            <img src={item.image} className="w-16 h-16 object-cover rounded" />
          </div>
        ))}
      </div>
      <div className="text-right">
        <p className="text-xl font-bold mb-4">الإجمالي: {total()} ريال</p>
        <Link href="/checkout" className="btn-primary text-lg px-10 py-3">المتابعة للدفع</Link>
      </div>
    </div>
  )
}
