import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <Link
            href="https://github.com/BFS-CSHS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-gray-400" />
          </Link>
          <Link
            href="https://www.instagram.com/bfs_shark.dev/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 hover:text-gray-400" />
          </Link>
        </div>
        <p className="text-md text-gray-500">
          © {new Date().getFullYear()} BFS CSHS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}