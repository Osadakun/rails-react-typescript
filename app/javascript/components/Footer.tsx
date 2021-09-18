import React from "react";
import "../../assets/stylesheets/footer.scss";
import InstagramIcon from "@material-ui/icons/Instagram"
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";

function Footer() {
  return (
    <div className="footer">
        © 2021 Toshiki Ono
      <GitHubIcon
        className="icon footItem"
        onClick={() => window.open("https://github.com/Osadakun", "_blank")}
      />
      <InstagramIcon
        className="icon footItem"
        onClick={() => window.open("https://www.instagram.com/pstone_79/","_blank")}
      />
      <TwitterIcon
        className="icon footItem"
        onClick={() => window.open("https://twitter.com/pstone_000", "_blank")}
      />
      <LibraryBooksOutlinedIcon
        className="icon footItem"
        onClick={() => window.open("https://hackmd.io/@Teon", "_blank")}
      />
    </div>
  );
}

export default Footer;