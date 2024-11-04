
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World!</h1>');

  const handleGeneratePDF = async () => {
    const preview = document.getElementById('preview');
    const canvas = await html2canvas(preview);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pageWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight);
    pdf.save("download.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-100 to-gray-300">
      <h1 className="text-4xl font-bold mb-6 font-serif text-gray-800">ToPDFConverter</h1>
      <textarea
        className="w-full max-w-lg p-4 mb-4 border rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        rows="10"
        value={htmlCode}
        onChange={(e) => setHtmlCode(e.target.value)}
        placeholder="Enter HTML code here"
      ></textarea>

      <div
        id="preview"
        className="mt-6 p-4 bg-white shadow-lg border rounded-md w-full max-w-lg text-gray-800"
        dangerouslySetInnerHTML={{ __html: htmlCode }}
      ></div>

      <button
        onClick={handleGeneratePDF}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transform transition-transform duration-200"
      >
        Generate PDF
      </button>
    </div>
  );
}

export default App;
