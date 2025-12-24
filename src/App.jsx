import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="item-center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="item-center" >Error: {error}</h2>;
  }

  return (
    <div className="container">
      <h1 className="text">Products</h1>

      <div className="grid">
        {data.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.images?.[0]||"/noimg.png" }
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
