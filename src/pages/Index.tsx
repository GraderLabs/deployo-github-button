
import URLInput from "../components/URLInput";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Deploy to Vercel
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deploy your GitHub repository to Vercel with custom environment variables.
          </p>
        </div>
        
        <URLInput />
        
        <footer className="text-sm text-gray-500 pt-8">
          Paste your GitHub repository URL, add any required environment variables, and click deploy.
        </footer>
      </div>
    </div>
  );
};

export default Index;
