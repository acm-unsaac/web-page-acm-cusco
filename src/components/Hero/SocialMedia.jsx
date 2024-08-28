import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubAlt,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-y-7 mr-10">
      <FaFacebookSquare className="text-white-azul" size="24px" />
      <FaInstagram className="text-white-azul" size="24px" />
      <FaGithubAlt className="text-white-azul" size="24px" />
      <FaDiscord className="text-white-azul" size="24px" />
      <MdEmail className="text-white-azul" size="24px" />
    </div>
  );
};

export default SocialMedia;
