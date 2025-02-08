
import { useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";
import { toast } from "sonner";

interface EnvVariable {
  key: string;
  value: string;
}

const URLInput = () => {
  const [url, setUrl] = useState("");
  const [envVariables, setEnvVariables] = useState<EnvVariable[]>([]);

  const handleAddEnvVariable = () => {
    setEnvVariables([...envVariables, { key: "", value: "" }]);
  };

  const handleRemoveEnvVariable = (index: number) => {
    const newVariables = envVariables.filter((_, i) => i !== index);
    setEnvVariables(newVariables);
  };

  const handleEnvVariableChange = (
    index: number,
    field: "key" | "value",
    value: string
  ) => {
    const newVariables = [...envVariables];
    newVariables[index][field] = value;
    setEnvVariables(newVariables);
  };

  const handleDeploy = () => {
    if (!url) {
      toast.error("Please enter a GitHub repository URL");
      return;
    }

    try {
      const encodedUrl = encodeURIComponent(url);
      let deployUrl = `https://vercel.com/new/clone?repository-url=${encodedUrl}`;

      // Add environment variables to the URL if they exist
      const validEnvVars = envVariables.filter(
        (env) => env.key.trim() && env.value.trim()
      );
      if (validEnvVars.length > 0) {
        validEnvVars.forEach((env, index) => {
          deployUrl += `&env=${encodeURIComponent(env.key)}=${encodeURIComponent(
            env.value
          )}`;
        });
      }

      // Open Vercel deployment in a new tab
      window.open(deployUrl, "_blank");
      toast.success("Redirecting to Vercel deployment...");
    } catch (error) {
      toast.error("Failed to initiate deployment");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2">
        <label
          htmlFor="github-url"
          className="block text-sm font-medium text-gray-700"
        >
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
            onClick={handleDeploy}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Deploy to Vercel"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Environment Variables
          </label>
          <button
            onClick={handleAddEnvVariable}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Variable
          </button>
        </div>

        {envVariables.map((env, index) => (
          <div key={index} className="flex gap-4 items-start animate-fade-in">
            <input
              type="text"
              value={env.key}
              onChange={(e) =>
                handleEnvVariableChange(index, "key", e.target.value)
              }
              placeholder="KEY"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
            />
            <input
              type="text"
              value={env.value}
              onChange={(e) =>
                handleEnvVariableChange(index, "value", e.target.value)
              }
              placeholder="VALUE"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
            />
            <button
              onClick={() => handleRemoveEnvVariable(index)}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              aria-label="Remove environment variable"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default URLInput;
