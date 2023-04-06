// BASE URL
export const BASE_URL = 'https://fakestoreapi.com/';

// API ROUTES
export const SEARCH_MEAL = keyword => {
  return `search.php?s=${keyword}`;
};

export const GET_PRODUCTS = 'products?limit=10';
