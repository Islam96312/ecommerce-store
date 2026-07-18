const categories = ['الكل', 'إلكترونيات', 'ملابس', 'أجهزة منزلية', 'كتب', 'رياضة']

export default function CategoryBar() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex gap-3 overflow-x-auto pb-2 flex-row-reverse">
        {categories.map(cat => (
          <button key={cat} className="whitespace-nowrap px-4 py-2 rounded-full border hover:bg-primary hover:text-white transition">
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
