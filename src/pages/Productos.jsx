import { useState } from 'react'

const productData = {
  buzos: [
    { id: 1, title: 'Buzo Nike', price: '$1250', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 2, title: 'Buzo Adidas', price: '2300', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 3, title: 'Buzo Mistral', price: '$3200', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 4, title: 'Buzo Brooksfield', price: '$1900', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' }
  ],
  camisas: [
    { id: 5, title: 'Camisa Blanca', price: '$30', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 6, title: 'Camisa Azul', price: '$35', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 7, title: 'Camisa Celeste', price: '$35', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 8, title: 'Camisa Blanca', price: '$35', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' }
  ],
  trajes: [
    { id: 10, title: 'Traje Formal', price: '$120', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 11, title: 'Traje Casual', price: '$100', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 12, title: 'Traje Casual', price: '$100', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 13, title: 'Traje Casual', price: '$100', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' }
  ],
  calzados: [
    { id: 14, title: 'Zapatillas Nike', price: '$60', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 15, title: 'Zapatos de vestir', price: '$80', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 16, title: 'Zapatos de vestir', price: '$80', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 17, title: 'Zapatos de vestir', price: '$80', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' }
  ],
  camperas: [
    { id: 18, title: 'Campera de Cuero', price: '$90', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 19, title: 'Campera Deportiva', price: '$70', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 20, title: 'Campera Deportiva', price: '$70', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' },
    { id: 21, title: 'Campera Deportiva', price: '$70', image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=' }
  ]
}

const Productos = () => {
  const [activeCategory, setActiveCategory] = useState('buzos')

  const categories = Object.keys(productData)

  return (
    <div className='bg-black mt-16 min-h-screen text-white p-8'>
      <h2 className='text-6xl font-bold mb-6 text-center'>Catálogo</h2>

      {/* Navegación de categorías */}
      <div className='flex justify-center gap-4 mb-10 flex-wrap'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              activeCategory === category ? 'bg-white text-black' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Tarjetas de productos */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {productData[activeCategory].map((product) => (
          <div
            key={product.id}
            className='bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-40 object-cover rounded-md mb-4'
            />
            <h3 className='text-lg font-semibold'>{product.title}</h3>
            <p className='text-gray-700'>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productos
