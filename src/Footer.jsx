import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const LINKS = [
  {
    title: "Fitness",
    items: ["Classes", "Personal Training", "Memberships", "Workout Plans"],
  },
  {
    title: "Our Gym",
    items: ["About Us", "Facilities", "Trainers", "Testimonials"],
  },
  {
    title: "Community",
    items: ["Blog", "Events", "Member Stories", "Support"],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-100 text-light-grey border border-gray-200 rounded-xl p-3 mt-4">
      <div className="container mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex font-bold text-primary text-2xl mb-6 lg:mb-0 lg:text-left">
            Gymini
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <li className="mb-3 font-bold text-primary hidden lg:block">{title}</li>
                {items.map((link, index) => (
                  <li key={index} className="py-1.5 hidden lg:block">
                    <Link className="text-gray-700">{link}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center border-t border-blue-gray-50 py-4">
          <div className="mb-4 text-center font-normal text-blue-gray-900">
            &copy; {currentYear} Gymini. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaFacebook className="text-xl mx-2 text-primary" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaTwitter className="text-xl mx-2 text-primary" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaInstagram className="text-xl mx-2 text-primary" />
            </a>
            <a
              href="https://github.com/Rizwanishere/bitMages-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaGithub className="text-xl mx-2 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
