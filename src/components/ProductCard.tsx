import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    company: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">by {product.company}</p>
        <Link href={`/products/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
