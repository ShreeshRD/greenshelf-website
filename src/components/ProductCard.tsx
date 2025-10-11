import { useRouter } from 'next/navigation';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    company: string;
    companyLocation: string;
    citationExcerpt: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className={`card mb-3 ${styles.glassCard}`} onClick={handleCardClick}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <span className={styles.score}>8.5</span>
            <h5 className="card-title mb-0 ms-2">{product.name}</h5>
          </div>
          <div>
            <a href="#" className={`btn btn-sm ${styles.visitBtn}`} onClick={(e) => e.stopPropagation()}>Visit Supplier</a>
            <a href="#" className={`btn btn-sm ${styles.visitBtn} ms-2`} onClick={(e) => e.stopPropagation()}>Visit Distributor</a>
          </div>
        </div>
        <p className="card-text mb-1">{product.company}, {product.companyLocation}</p>
        <p className="card-text fst-italic">{product.citationExcerpt}</p>
      </div>
    </div>
  );
};

export default ProductCard;