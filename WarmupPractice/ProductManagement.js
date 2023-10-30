function ProductManagement() {
  //add products variable here
  let products = []

  // Returns the entire products. Returns an array of all products.
  function getAllProducts() {
    return products
  }

  // Adds a new product to the products array.
  function addProduct(product) {
    products.push(product)
  }

  // Searches for products with names containing the specified search term (case-insensitive). 
  // Returns an array of matching products.
  function searchByName(name) {
    return products.filter(pr => pr.name === name)
  }

  // Searches for products within the specified price range. 
  // Returns an array of products with prices falling within the given range.
  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter(pr => pr.price < maxPrice && pr.price > minPrice)
  }

  // remove all products in products array.
  function removeAll() {
    products.splice(0, products.length)
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct
  }
}

module.exports = ProductManagement
const productCatalog = ProductManagement()
