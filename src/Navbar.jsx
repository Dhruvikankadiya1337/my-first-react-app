function Navbar(){

 return(

   <nav style={{
        background: '#2b7a0b',
        width :"93.5%",
        color: 'white',
        padding: '15px 40px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginLeft: "-20px"
    }}>
    <h1 style={{ margin: 0, fontSize: '20px' }}>🌱 Plant Shop</h1>
    <div>
      <a href="#" style={{ color: 'white', textDecoration: 'none', marginLeft: '25px', fontSize: '14px' }}>Home</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', marginLeft: '25px', fontSize: '14px' }}>About</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', marginLeft: '25px', fontSize: '14px' }}>Contact</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', marginLeft: '25px', fontSize: '14px' }}>All Plants</a>
      
    </div>
  </nav>
      )
}

export default Navbar