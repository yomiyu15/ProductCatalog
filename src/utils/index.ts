// Function to fetch a list of products
export async function fetchProducts() {
  try {
    const response = await fetch("/api/products");

    if (!response.ok) {
      // If the response is not OK, throw an error with status code
      throw new Error("Request failed with status " + response.status);
    }
    // Parse the response as JSON
    const result = await response.json();
    return result;
  } catch (error) {
    // If an error occurs during the process, log it and return an empty array
    console.error("Error fetching products:", error);
    return [];
  }
}

// Function to fetch a single product by its ID
export async function fetchProductById(productId: number) {
  try {
    const response = await fetch(`/api/products/${productId}`);

    if (!response.ok) {
      // If the response is not OK, throw an error with status code
      throw new Error("Request failed with status " + response.status);
    }
    // Parse the response as JSON
    const result = await response.json();

    return result;
  } catch (error) {
    // If an error occurs during the process, log it and return null
    console.error(`Error fetching product with ID ${productId}:`, error);
    return null;
  }
}
