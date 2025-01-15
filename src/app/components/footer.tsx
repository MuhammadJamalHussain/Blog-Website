import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
      <footer>
        <div className="footer" style={{width: "100%", height:"100px", backgroundColor: "#6A9C89"}}>
            <div style={{width: "100%", height: "25px", alignItems: "center"}}>
              <h1 className="text-center font-serif font-bold hover:text-green-200">TECH BLOG</h1>
            </div>
            <div style={{width: "100%", height: "35px", alignItems: "center" }}>
              <h1 className="text-center py-2">Contact Here</h1>
            </div>
            <div style={{width: "100%", height: "40px", display:"flex"}}>
              <div style={{width: "25%", height: "100%"}}>

              </div>
              <div style={{width: "50%", height: "100%", display:"flex", justifyContent:"space-evenly", alignItems:"center", fontSize:"30px"}}>
                <h3 className="hover:text-blue-800"><CiFacebook /></h3>
                <h3 className="hover:text-yellow-800"><FaInstagram /></h3>
                <h3 className="hover:text-white"><FaXTwitter /></h3>
                <h3 className="hover:text-green-800"><FaWhatsapp /></h3>
              </div>
              <div style={{width: "25%", height: "100%"}}>

              </div>
            </div>

        </div>
      </footer>
  );
}
