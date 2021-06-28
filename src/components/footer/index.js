import react from "react"
import "./footer.css";
const Footer = () => {
    return (<footer>
        <ul class="online-store">
          <li><h3>Online Store</h3></li>
          <li>Men Clothing</li>
          <li>Women Clothing</li>
          <li>Men Accessories</li>
          <li>Women Accessories</li>
        </ul>
        <ul class="helpful-links">
          <li><h3>Helpful Links</h3></li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul class="patners">
          <li><h3>Patners</h3></li>
          <li>Zara</li>
          <li>Pantaloons</li>
          <li>Levis</li>
          <li>Ucb</li>
          <li>+ Many More</li>
        </ul>
        <ul class="address">
          <li><h3>Address</h3></li>
          <li>Building 101</li>
          <li>Central Avenue</li>
          <li>LA - 902722</li>
          <li>United States</li>
        </ul>
      </footer>  );
}
 
export default Footer;