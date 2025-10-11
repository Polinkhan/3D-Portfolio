"use client";

import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/get-ip");
      const { ip } = await res.json();
      console.log("visitor ip:", ip);
    })();
  }, []);

  return (
    <footer className="bg-secondary text-gray-400 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4 gap-1">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Polin Khan | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
