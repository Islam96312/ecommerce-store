'use client'
import Link from 'next/link'
import useCartStore from '@/store/cartStore'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
  const addToCart = useCartStore(s => s.addToCart)
  return (
    <div className="card" dir="rtl">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="font-bold mb-1 truncate">{product.name}</h3>
        <p className="text-primary font-bold mb-3">{product.price} ريال</p>
        <button
          onClick={() => { addToCart(product); toast.success('أضيف للسلة') }}
          className="btn-primary w-full text-sm"
        >
          أضف للسلة
        </button>
      </div>
    </div>
  )
}
