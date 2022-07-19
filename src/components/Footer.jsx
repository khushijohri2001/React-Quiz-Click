import {
  Instagram,
  Facebook,
  LinkedIn,
  Twitter,
  GitHub
} from "@material-ui/icons";
const Footer = () => {
  return (
    <>
      <footer>
        <a href="mailto: khushi.johri01@gmail.com">Email</a>

        <div className="footer-links">
          <a href="https://www.instagram.com/girlifycoder">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/khushi.johri01">
            <Facebook />
          </a>
          <a href="https://twitter.com/khushijohri01?s=08">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/khushi-johri-b74970202">
            <LinkedIn />
          </a>
          <a href="https://github.com/khushijohri2001">
            <GitHub />
          </a>
        </div>

        <div className="footer-copyright">
          Copyright &copy; 2022
          <p>Designed by Khushi Johri</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
