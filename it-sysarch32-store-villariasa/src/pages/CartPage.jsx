import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify"; // Import toast
import db from "../configs/firebase";
import Header from "../components/Header"; // Import Header component

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartCollection = collection(db, "cart");
        const querySnapshot = await getDocs(cartCollection);
        const items = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          items.push({ id: doc.id, ...data });
        });
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      // Delete product document from Firestore cart collection
      await deleteDoc(doc(db, "cart", productId));
      console.log("Product deleted successfully!");

      // Update UI by removing the deleted product from the cart items
      setCartItems(cartItems.filter((item) => item.id !== productId));

      // Trigger toast message
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      {/* Include the Header component */}
      <Header />
      {/* Section Trending Products Section Code */}
      <section className="trending-product4" id="trending">
        <div className="center-text4">
          <h2>
            Cart <span> $$$$ </span>
          </h2>
        </div>
        {/* Products Starts Here! */}
        <div className="products4">
          {cartItems.map((item) => (
            <div className="row4" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="product-text4"></div>
              <div className="price4">
                <h4>{item.productName}</h4>
                <p>{`₱${item.value}`}</p> {/* Display product value here */}
                <button onClick={() => handleDeleteProduct(item.id)}>
                  <i class="bx bx-x"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* End of the products */}
      </section>
    </div>
  );
}

export default CartPage;
