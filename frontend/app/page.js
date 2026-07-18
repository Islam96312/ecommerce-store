import ProductGrid from '@/components/ProductGrid'
import HeroBanner from '@/components/HeroBanner'
import CategoryBar from '@/components/CategoryBar'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <CategoryBar />
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-right">المنتجات المميزة</h2>
        <ProductGrid />
      </section>
    </div>
  )
}
