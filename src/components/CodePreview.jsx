
import { Toaster, toast } from "sonner";
import { useRef } from "react";
import jsPDF from "jspdf";

const MarkdownPreview = ({ htmlContent }) => {
  const previewRef = useRef();

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.html(previewRef.current, {
      callback: (pdf) => {
        pdf.save("preview.pdf");
        toast.success("Downloaded PDF 🎉");
      },
      x: 10,
      y: 10
    });
  };

  return (
    <div className="w-full font-helvetica">
      <div className="mb-4 flex justify-between items-center">
        <label className="text-lg font-semibold">Preview</label>
        <Toaster />
        <div className="flex gap-2">
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Download PDF
          </button>
        </div>
      </div>
      <div
        ref={previewRef}
        className="w-full h-[calc(100vh-250px)] p-4 border-2 rounded-lg shadow-sm font-mono text-gray-800 bg-gray-50 overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default MarkdownPreview;
