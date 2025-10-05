"use client";

import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  // Mock data for now
  const mockProducts = [
    { id: '1', name: 'Bio-plastic Pellets', company: 'EcoInnovate' },
    { id: '2', name: 'Lab-grown Leather', company: 'GenLeath' },
    { id: '3', name: 'Algae-based Nutrients', company: 'NutriBloom' },
  ];

  return (
    <div>
      <h1 className="mb-4">Search Results for &quot;{query}&quot;</h1>
      <div className="row">
        {mockProducts.length > 0 ? (
          mockProducts.map(product => (
            <div className="col-md-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
