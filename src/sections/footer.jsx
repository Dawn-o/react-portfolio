import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="my-16" data-aos="fade-up" data-aos-delay="200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/dawn-o"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-rushelasli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@rushel.my.id"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-gray-600 text-center sm:text-left">
            <div className="flex items-center gap-1.5">
              <span>Built with</span>
              <Heart size={16} className="text-red-500" />
              <span>by</span>
            </div>
            <span>Muhammad Rushelasli</span>
          </div>

          <p className="text-sm text-gray-500">
            &copy; 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
