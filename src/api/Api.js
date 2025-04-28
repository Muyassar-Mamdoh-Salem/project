// 
export const ProductsData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("فشل الجلب");
    return await response.json();
  };