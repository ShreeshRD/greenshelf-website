interface Product {
  id: string;
  name: string;
  commonName: string;
  company: string;
  parentCompany: string;
  technique: string;
  category: string;
  companyLocation: string;
  companyType: string;
  citationExcerpt: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="row">
      <div className="col-md-6">
        {/* Placeholder for image gallery */}
        <div className="bg-light h-100 d-flex align-items-center justify-content-center">
          <p>Product Image Gallery</p>
        </div>
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="text-muted">{product.commonName}</p>
        <p><strong>Company:</strong> {product.company} ({product.parentCompany})</p>
        <p><strong>Location:</strong> {product.companyLocation}</p>
        <p><strong>Company Type:</strong> {product.companyType}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Technique:</strong> {product.technique}</p>
        <hr />
        <h5>Citation</h5>
        <blockquote className="blockquote">
          <p>{product.citationExcerpt}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default ProductDetails;
