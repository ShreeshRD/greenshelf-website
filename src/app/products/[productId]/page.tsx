"use client";

import { useParams } from 'next/navigation';
import ProductDetails from '@/components/ProductDetails';
import AssociatedPaperDetails from '@/components/AssociatedPaperDetails';

const ProductPage = () => {
  const { productId } = useParams();

  // Mock data for now
  const mockProduct = {
    id: productId as string,
    name: 'Bio-plastic Pellets',
    commonName: 'Polylactic Acid (PLA)',
    company: 'EcoInnovate',
    parentCompany: 'GreenTech Holdings',
    technique: 'Fermentation of corn starch',
    category: 'Biomaterials',
    companyLocation: 'San Francisco, CA',
    companyType: 'Startup',
    citationExcerpt: 'A novel method for producing high-strength PLA from agricultural waste...',
  };

  const mockPaper = {
    title: 'A novel method for producing high-strength PLA from agricultural waste',
    authors: ['Jane Doe', 'John Smith'],
    publicationDate: '2023-01-15',
    journalName: 'Journal of Sustainable Materials',
    citations: 120,
    impactFactor: 4.5,
  };

  return (
    <div>
      <ProductDetails product={mockProduct} />
      <AssociatedPaperDetails paper={mockPaper} />
    </div>
  );
};

export default ProductPage;