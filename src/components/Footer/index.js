import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="footer-top">
        <div className="footer-item-wrapper">
          <h3 className="footer-titles">İLETİŞİM</h3>
          <ul className="footer-list">
            <li>
                E-posta: info@calandha.com
            </li>
          </ul>
        </div>
        <div className="footer-item-wrapper">
          <h3 className="footer-titles">HAKKIMIZDA</h3>
          <ul className="footer-list">
            <li>
              <a href={"/about"}>Mesafeli Satış Sözleşmesi</a>
            </li>
            <li>
              <a href={"/about"}>Gizlilik ve Çerez Politikası</a>
            </li>
          </ul>
        </div>
        <div className="footer-item-wrapper">
          <h3 className="footer-titles">BÜLTEN</h3>
          <ul className="footer-list">
            <li>
                Kampanya ve indirimlerden haberdar olmak için bizi sosyal medyada takip edin.
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
          © {new Date().getFullYear()} Calandha. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
