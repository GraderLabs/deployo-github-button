
import { useState } from "react";
import { Copy, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const URLInput = () => {
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleGenerate = () => {
    if (!url) {
      toast.error("Please enter a GitHub repository URL");
      return;
    }

    try {
      const encodedUrl = encodeURIComponent(url);
      const vercelUrl = `https://vercel.com/new/clone?repository-url=${encodedUrl}`;
      setGeneratedUrl(vercelUrl);
      toast.success("Deployment URL generated successfully!");
    } catch (error) {
      toast.error("Failed to generate deployment URL");
    }
  };

  const handleCopy = async () => {
    if (!generatedUrl) return;
    
    try {
      await navigator.clipboard.writeText(generatedUrl);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2">
        <label htmlFor="github-url" className="block text-sm font-medium text-gray-700">
          GitHub Repository URL
        </label>
        <div className="relative">
          <input
            id="github-url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://github.com/username/repository"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 pr-12"
          />
          <button
            onClick={handleGenerate}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Generate deployment URL"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {generatedUrl && (
        <div className="space-y-2 animate-fade-in">
          <label className="block text-sm font-medium text-gray-700">
            Vercel Deployment URL
          </label>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={generatedUrl}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 pr-12"
            />
            <button
              onClick={handleCopy}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Copy to clipboard"
            >
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {generatedUrl && (
        <div className="pt-4 animate-fade-in">
          <a
            href={generatedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors duration-200"
          >
            <img
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
              className="h-4"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default URLInput;
