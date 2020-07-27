import React from "react";
import { IconButton, Link } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import BookIcon from "@material-ui/icons/Book";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Socialbutton({ socialMedia, url }) {
  return (
    <Link href={url} target="_blank" rel="noopener">
      <IconButton>{MediaIcon(socialMedia)}</IconButton>
    </Link>
  );
}

function MediaIcon(socialMedia) {
  switch (socialMedia) {
    case "twitter":
      return <TwitterIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "linkedIn":
      return <LinkedInIcon />;
    case "blog":
      return <BookIcon />;
    case "portfolio":
      return <LanguageIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "github":
      return <GitHubIcon />;
    default:
      return null;
  }
}
