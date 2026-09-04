import useFetch from "../hooks/useFetch";

function Products() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data?.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;