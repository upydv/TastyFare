const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
        <div expand="lg"  className=" bg-success text-white d-flex" >
            <footer>{`Copyright © TastyFare ${year}`}</footer>
        </div>
    )
  };
  
  export default Footer;