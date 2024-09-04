import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const paragraphs = [
    "Coopbank possesses a diverse range of products. These products are dispersed among different banking organs, which makes it challenging for employees of the bank to find them in one place for clear understanding to serve clients effectively. Therefore, this product catalog is destined to streamline sales efforts while simultaneously serving as an informative resource for employees.",
    "Our catalog provides detailed insights into each product, simplifying the search for relevant information. By centralizing the product details, we aim to enhance productivity and offer better services to our clients. Explore the catalog to find comprehensive information on all our offerings.",
    "In addition to streamlining internal processes, our product catalog also aims to improve client interactions. With clear and concise product descriptions, clients can easily understand the benefits and features of our products, leading to more informed decisions and improved satisfaction."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setParagraphIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        setFade(true);
      }, 500); // Halfway through the transition time
    }, 5000); // Change paragraph every 8 seconds

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "50vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #00ADEE, #fff)", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        padding: "20px",
      }}
    >
      {/* Background animation circles */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.2)", animation: "pulse 4s infinite ease-in-out" }}></div>
      <div style={{ position: "absolute", top: "60%", left: "80%", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)", animation: "pulse 5s infinite ease-in-out" }}></div>

      {/* Banner Content */}
      <h1
        style={{
          fontWeight: "bold",
          color: "#FFFFFF",
          marginTop: "120px",
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "2.5rem",
          animation: "slideInFromLeft 1.5s ease-out",
        }}
      >
        Product Catalog
      </h1>
      <p
        style={{
          color: "#FFFFFF",
          marginBottom: "30px",
          maxWidth: "800px",
          textAlign: "center",
          fontSize: "1rem",
          opacity: fade ? 1 : 0,
          transform: fade ? "rotateY(0deg)" : "rotateY(90deg)",
          transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
        }}
      >
        {paragraphs[paragraphIndex]}
      </p>

      {/* Buttons with hover animation */}
      <Container>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginBottom: "2px" }}>
          <Button
            variant="primary"
            href="https://coopbankoromia.com.et/deposit-products/ordinary-demand-deposit-account/"
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "25px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s, background-color 0.3s",
              background: "linear-gradient(90deg, #00ADEE 0%, #007BB5 100%)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            BankingSolutions
          </Button>
      
        </div>
      </Container>

      {/* Responsive Design Enhancements */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
