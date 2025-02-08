
import URLInput from "../components/URLInput";
import { Github, Linkedin, ExternalLink, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8 animate-fade-in pt-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Deploy to Vercel
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deploy your GitHub repository to Vercel with custom environment variables.
          </p>
        </div>
        
        <URLInput />
        
        <footer className="text-sm text-gray-500">
          Paste your GitHub repository URL, add any required environment variables, and click deploy.
        </footer>
      </div>

      <footer className="w-full py-8 mt-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
          <p className="text-sm font-medium text-gray-600">Created by Gaurav Mandal</p>
          <div className="flex items-center space-x-6">
            <a
              href="https://x.com/gauravmandall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/gauravmandall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/gauravmandall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://grvx.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Portfolio"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
