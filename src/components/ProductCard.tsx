import Link from 'next/link';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    company: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={`card mb-3 ${styles.glassCard}`}>
      <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">by {product.company}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;