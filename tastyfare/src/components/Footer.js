const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
      <div className="bg-success text-white d-flex justify-content-center align-items-center" style={{ height: '60px' }}>
        <footer>{`Copyright © TastyFare ${year}`}</footer>
      </div>
    );
  };
  
  export default Footer;
  