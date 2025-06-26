function Footer() {
  return (

    <div  style={{
                padding: "20px",
                backgroundColor: "#f2f2f2",
                borderTop: "1px solid #ccc",
                // borderRadius: "0 0 10px 10px",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                color: "#333",
                textAlign: "center",
                marginTop:"80px",
                width :"100%",
                marginLeft: "-20px"
              
      }}>
      <p>
        <strong>🌱 Plant Shop</strong> — Making homes greener, one plant at a
        time.
      </p>
      <p>Contact: support@plantshop.com | 📞 +91-9876543210</p>
      <p>
        Follow us:
        <a
          href="#"
          style={{ margin: "0 10px", color: "#2b7a0b", textDecoration: "none" }}
        >
          Facebook
        </a>{" "}
        |
        <a
          href="#"
          style={{ margin: "0 10px", color: "#2b7a0b", textDecoration: "none" }}
        >
          Instagram
        </a>{" "}
        |
        <a
          href="#"
          style={{ margin: "0 10px", color: "#2b7a0b", textDecoration: "none" }}
        >
          Twitter
        </a>
      </p>
      <p style={{ fontSize: "12px", marginTop: "10px", color: "gray" }}>
        © 2025 Plant Shop — All rights reserved.
      </p>
    </div>
  );
}
export default Footer
