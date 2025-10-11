"use client";

import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import styles from './SearchPage.module.css';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  // Mock data for now
  const mockProducts = [
    {
      id: '1',
      name: 'M199 media',
      company: 'Gibco',
      commonName: 'M199 media',
      parentCompany: 'Gibco',
      technique: 'parasite culture',
      category: 'reagent',
      companyLocation: 'Varanasi, India',
      companyType: 'Biotechnology',
      citationExcerpt: 'Leishmania antigens activated CD4+ T cells expressing CD200R receptors are the prime IL-10 producing phenotype and an important determinant of visceral leishmaniasis pathogenesis',
    },
    {
      id: '2',
      name: 'fetal bovine serum',
      company: 'Gibco',
      commonName: 'fetal bovine serum',
      parentCompany: 'Gibco',
      technique: 'parasite culture',
      category: 'reagent',
      companyLocation: 'Varanasi, India',
      companyType: 'Biotechnology',
      citationExcerpt: 'Leishmania antigens activated CD4+ T cells expressing CD200R receptors are the prime IL-10 producing phenotype and an important determinant of visceral leishmaniasis pathogenesis',
    },
    {
      id: '3',
      name: 'penicillin',
      company: 'Sigma',
      commonName: 'penicillin',
      parentCompany: 'Sigma',
      technique: 'parasite culture',
      category: 'chemical',
      companyLocation: 'Varanasi, India',
      companyType: 'Biotechnology',
      citationExcerpt: 'Leishmania antigens activated CD4+ T cells expressing CD200R receptors are the prime IL-10 producing phenotype and an important determinant of visceral leishmaniasis pathogenesis',
    },
  ];

  return (
    <div>
      <h1 className={`mb-4 ${styles.title}`}>Search Results for &quot;{query}&quot;</h1>
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
