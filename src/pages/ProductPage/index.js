function ProductPage({ product }) {
    return (
        <div className="product-container">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Preço: ${product.price}</p>
            <button>Comprar</button>
        </div>
    );
}

export default ProductPage;
