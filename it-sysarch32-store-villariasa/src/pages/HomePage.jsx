import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../configs/firebase";
import { Link } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import ClientReviews from "../components/ClientReviews";
import UpdateNews from "../components/UpdateNews";
import ContactSection from "../components/ContactSection";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";
import "boxicons/css/boxicons.min.css";

function HomePage() {
  const fontLink = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  `;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: fontLink }} />
      {/*Header Code*/}
      <Header />
      {/*Header End Code*/}

      {/*Section Main Code*/}
      <MainSection />
      {/*Section Main Last Code*/}

      {/*Section Trending Products Section Code*/}
      <section className="trending-product" id="trending">
        <div className="center-text">
          <h2>
            Our Trending <span>products</span>
          </h2>
        </div>
        {/*Products Starts Here!*/}
        <div className="products">
          {products.map((product) => (
            <div className="row" key={product.id}>
              <Link to={`/details/${product.id}`}>
                <img src={product.imageUrl} alt={product.name} />
              </Link>
              <div className="product-text">
                <h5>Sale</h5>
              </div>
              <div className="heart-icon">
                <i className="bx bx-heart"></i>
              </div>
              <div className="ratting">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bxs-star-half"></i>
              </div>
              <div className="price">
                <h4>{product.name}</h4>
                <p>{`₱${product.value}`}</p>
              </div>
            </div>
          ))}
        </div>
        {/*End of the products*/}
      </section>

      {/*Client Review Section Code*/}
      <ClientReviews />
      {/*Client Review Section End Code*/}

      {/*Update News Section Code*/}
      <UpdateNews />
      {/*Update Section End Code*/}

      {/*Contact Section Code*/}
      <ContactSection />
      {/*Contact Section End Code*/}

      {/*Footer Code*/}
      <Footer />
      {/*Footer End Code*/}
    </div>
  );
}

export default HomePage;
