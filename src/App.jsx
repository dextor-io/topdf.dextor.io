import { useState } from "react";
import MarkdownEditor from "./components/CodeEditor";
import MarkdownPreview from "./components/CodePreview";
import packageJson from "../package.json";

function App() {
  const [htmlContent, setHtmlContent] = useState(``);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 font-helveticaBold text-black">
          TO-PDF ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 md:order-1 order-2">
            <MarkdownEditor htmlContent={htmlContent} setHtmlContent={setHtmlContent} />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 md:order-2 order-1">
            <MarkdownPreview htmlContent={htmlContent} />
          </div>
        </div>

        <footer className="border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-2">
                <p className="text-gray-600 text-lg">
                  Made with{" "}
                  <span className="text-red-500 animate-pulse">❤️</span> by{" "}
                  <a
                    href="https://labs.dextor.io/"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Dextor Labs
                  </a>
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/dextor-io/engrave.dextor.io"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">
                  v{packageJson.version}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
