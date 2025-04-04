import { useProductStore } from '../store/useProductStore';
import { useState, useEffect } from 'react'; // Import useState
import { PackageIcon, RefreshCwIcon, SearchIcon } from "lucide-react"; // Import SearchIcon, remove PlusCircleIcon
import ProductCard from '../components/ProductCard';

function Menu() {
  const { products, loading, error, fetchProducts } = useProductStore();
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); // fetchProducts dependency is correct if it's memoized, otherwise it might cause re-fetches. Consider removing if fetchProducts itself doesn't change.

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("products", products); // Keep for debugging if needed
  console.log("searchTerm", searchTerm);
  console.log("filteredProducts", filteredProducts);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 ">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"> {/* Adjusted layout for responsiveness */}

        {/* Search Bar */}
        <div className="relative w-full sm:w-auto flex-grow max-w-md"> {/* Control width */}
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full pl-10" // Add padding for icon
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <SearchIcon className="size-5 text-gray-400" />
          </div>
        </div>

        {/* Remove AddProductModal component instance */}
        {/* <AddProductModal/> */}

        {/* Refresh Button */}
        <button className="btn btn-ghost btn-circle" onClick={fetchProducts} aria-label="Refresh products">
          <RefreshCwIcon className="size-5" />
        </button>
      </div>

      {error && <div className="alert alert-error shadow-lg mb-8">{error}</div>}

      {/* Display message when loading */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      )}

      {/* Display message if no products found after filtering (and not loading) */}
      {!loading && filteredProducts.length === 0 && (
        <div className="flex flex-col justify-center items-center h-96 space-y-4 text-center">
           <div className="bg-base-100 rounded-full p-6">
             <PackageIcon className="size-12" />
           </div>
           <h3 className="text-2xl font-semibold ">
             {searchTerm ? `No products found for "${searchTerm}"` : "No products available"}
           </h3>
           {!searchTerm && ( // Only show the original 'Get started' message if the list is truly empty, not just filtered out
              <p className="text-gray-500 max-w-sm">
                 It looks like there are no products in the inventory yet.
              </p>
           )}
        </div>
      )}

      {/* Display filtered products (only if not loading and there are results) */}
      {!loading && filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => ( // Use filteredProducts here
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Menu;