import Link from 'next/link'

export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-l from-primary to-secondary text-white py-20 text-center" dir="rtl">
      <h1 className="text-4xl font-bold mb-4">مرحباً بك في متجرنا 🛍️</h1>
      <p className="text-xl mb-8 opacity-90">اكتشف أفضل المنتجات بأسعار مناسبة</p>
      <Link href="/products" className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
        تسوق الآن
      </Link>
    </div>
  )
}
