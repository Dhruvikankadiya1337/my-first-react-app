import Navbar from "./Navbar"
import Footer from "./Footer"

function APP(){
    return (
        <div>
         <div style={{ width: "50%", margin: "50px auto", fontFamily: "Arial, sans-serif", background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          padding: "20px",
          height: "610px",
    }}>

            <Navbar />
            
    {/* BACK TO ALL PLANTS */}
    <h5 style={{ fontSize: "14px", color: "gray", marginBottom: "10px" }}>
      &lt; &nbsp; BACK TO ALL PLANTS
    </h5>

    {/* Horizontal Line */}
    <hr style={{ borderTop: "1px solid #ccc", marginBottom: "20px" }} />

    {/* Image */}
    <img src="\public\pic3.jpg" alt="Plant"
      style={{
        width: "40%",
        float: "left",
        marginRight: "20px",
        padding: "8px",
        height: "300px",
      }}/>

    {/* Title */}
    <h2 style={{ marginTop: "50px" }}>CLASSIC PEACE LILY</h2>
    <p style={{ fontSize: "12px", color: "gray", marginTop: "-15px" }}>
      POPULAR HOUSE PLANT
    </p>

    {/* Price */}
    <p style={{ color: "#2b7a0b", margin: "10px 0", fontSize: "30px" }}>$18</p>

    {/* Description */}
    <p style={{ fontSize: "14px", lineHeight: "1.4", color: "#333" }}>
      Classic Peace Lily is a spathiphyllum floor plant <br /> arranged in a
      bamboo planter with a blue & red <br /> ribbon and butterfly pick.
    </p>

    {/* Buttons */}
    <button
      style={{
        padding: "10px 15px",
        marginRight: "10px",
        border: "1px solid #000",
        background: "#fff",
        cursor: "pointer",
      }}>
      ADD TO CART
    </button>

    <button
      style={{
        padding: "10px 15px",
        border: "1px solid #000",
        background: "#fff",
        cursor: "pointer",
      }}>
      WISHLIST
    </button>
      <Footer />   
  </div>
</div>
    )
}

export default APP