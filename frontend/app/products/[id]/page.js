'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import useCartStore from '@/store/cartStore'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const addToCart = useCartStore((s) => s.addToCart)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
      .then(res => setProduct(res.data))
  }, [id])

  if (!product) return <div className="text-center py-20">جاري التحميل...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="rounded-xl w-full" />
        <div className="text-right">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-primary mb-6">{product.price} ريال</p>
          <button
            onClick={() => { addToCart(product); toast.success('تمت الإضافة للسلة') }}
            className="btn-primary w-full text-lg py-3"
          >
            أضف إلى السلة 🛒
          </button>
        </div>
      </div>
    </div>
  )
}
