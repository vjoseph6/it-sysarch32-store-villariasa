import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Header from "../components/Header";
import db from "../configs/firebase";

function DetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = doc(db, "products", id);
        const productSnapshot = await getDoc(productDoc);
        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const cartRef = collection(db, "cart");
      await addDoc(cartRef, {
        productId: id,
        productName: product.name,
        imageUrl: product.imageUrl,
        value: product.value,
      });
      console.log("Product added to cart successfully!");

      // Trigger toast message
      toast.success("This product has been successfully added to the cart");

      // Set state to trigger animation
      setIsAddingToCart(true);

      // Reset state after animation completes
      setTimeout(() => {
        setIsAddingToCart(false);
      }, 500); // Adjust this delay to match the duration of your animation
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Check if product is not null before accessing its properties */}
      {product && (
        <>
          <Header />
          <section
            className={`trending-product2 ${isAddingToCart ? "shake" : ""}`}
            id="trending"
          >
            <div className="center-text2">
              <h2></h2>
            </div>
            <div className="products2">
              <div className="row2" key={product.id}>
                <img src={product.imageUrl} alt={product.name} />

                <div className="product-text2">
                  <h5>Sale</h5>
                </div>
                <div className="heart-icon2">
                  <i className="bx bx-heart2"></i>
                </div>
                <div className="ratting2">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <div className="price2">
                  <h4>{product.name}</h4>
                  <p>{`₱${product.value}`}</p>
                </div>
              </div>
            </div>
            <div className="price3">
              <h4>{product.name}</h4>
              <p>{`₱${product.value}.00`}</p>
            </div>
            <div className="ratting3">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="add-to-cart">
              <button onClick={handleAddToCart}>
                <i className="bx bx-cart-add"></i>
                Add to Cart
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default DetailsPage;
