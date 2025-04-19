import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductFilter: React.FC = () => {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Smart TV', price: 1500 },
    { id: 2, name: 'Laptop', price: 1000 },
    { id: 3, name: 'Smart Watch', price: 300 },
    { id: 4, name: 'Gaming Laptop', price: 1800 },
    { id: 5, name: '4K TV', price: 2200 },
  ];

  const handleFilter = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (!isNaN(min) && !isNaN(max)) {
      const results = products.filter(
        (product) => product.price >= min && product.price <= max
      );
      setFilteredProducts(results);
    } else {
      alert('Please enter valid numbers for both min and max price.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Filter Products by Price</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-1/2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-1/2"
        />
      </div>

      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Filter
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Matching Products:</h3>
        {filteredProducts.length > 0 ? (
          <ul className="space-y-2">
            {filteredProducts.map((product) => (
              <li key={product.id} className="border p-3 rounded shadow-sm">
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No products found in this range.</p>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
