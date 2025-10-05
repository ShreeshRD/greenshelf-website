"use client";

import { useParams } from 'next/navigation';
import ProductDetails from '@/components/ProductDetails';
import AssociatedPaperDetails from '@/components/AssociatedPaperDetails';

const ProductPage = () => {
  const { productId } = useParams();

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
  const mockProduct = mockProducts.find(p => p.id === productId) || mockProducts[0];

  const mockPaper = {
    title: 'Leishmania antigens activated CD4+ T cells expressing CD200R receptors are the prime IL-10 producing phenotype and an important determinant of visceral leishmaniasis pathogenesis',
    authors: ['Abhishek Singh', 'Baishakhi Mahapatra', 'Arpita Banerjee', 'Samer Singh', 'Sangram Singh', 'Vikash K. Dubey', 'Pradeep Das', 'Rakesh K. Singh'],
    publicationDate: '2024',
    journalName: 'Cytokine',
    citations: 0, // Not provided
    impactFactor: 0, // Not provided
  };

  return (
    <div>
      <ProductDetails product={mockProduct} />
      <AssociatedPaperDetails paper={mockPaper} />
    </div>
  );
};

export default ProductPage;