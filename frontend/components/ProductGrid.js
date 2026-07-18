'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then(res => setProducts(res.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-center py-10">جاري تحميل المنتجات...</div>

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
