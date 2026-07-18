'use client'
import Link from 'next/link'
import useCartStore from '@/store/cartStore'

export default function Navbar() {
  const count = useCartStore(s => s.items.reduce((a, i) => a + i.qty, 0))
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/cart" className="relative">
          🛒
          {count > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{count}</span>}
        </Link>
        <div className="flex gap-6">
          <Link href="/products" className="hover:text-primary">المنتجات</Link>
          <Link href="/" className="hover:text-primary">الرئيسية</Link>
        </div>
        <Link href="/" className="text-2xl font-bold text-primary">🛍️ متجرنا</Link>
      </div>
    </nav>
  )
}
