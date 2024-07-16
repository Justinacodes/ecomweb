import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const SearchResults: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const { searchResults, setSearchResults }: any = useContext(ShopContext);

  useEffect(() => {
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data.products))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [query, setSearchResults]);

  return (
    <div id="allProducts">
      {searchResults ? (
        searchResults.map((product: any) => (
          <Link to={`/products/${product.id}`}>
            <div key={product.id} className="searchedProduct">
              <img src={product.thumbnail} alt={product.title} />
              <div id="productLinks">
                <div className="productTitle">{product.title}</div>
                <div className="productPrice">Rs. {product.price}</div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchResults;
