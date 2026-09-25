import { useState, useCallback } from "react";
import { Shield } from "lucide-react";

import { DomainForm } from "../components/form/DomainForm";
import { LetterPreview } from "../components/preview/LetterPreview";
import { PreviewControls } from "../components/preview/PreviewControls";
import { SuccessModal } from "../components/ui/SuccessModal";

import type { DomainLetterFormData } from "../types";

export default function Generator() {
  const [formData, setFormData] = useState<DomainLetterFormData | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [externalResetFlag, setExternalResetFlag] = useState(0);

  const handleFormChange = useCallback((data: DomainLetterFormData) => {
    setFormData(data);
  }, []);

  const handleValidationChange = useCallback((valid: boolean) => {
    setIsValid(valid);
  }, []);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the form? All data will be lost.")) {
      setExternalResetFlag((prev) => prev + 1);
    }
  };

  const handleEdit = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const generateAndDownloadImage = async () => {
    if (!formData || !isValid) return;

    setIsGenerating(true);
    try {
      const { toJpeg } = await import('html-to-image');
      const node = document.getElementById('letter-preview');
      if (!node) throw new Error("Preview element not found");

      let quality = 0.9;
      let dataUrl = '';
      
      // Iteratively reduce quality to stay under 200KB (approx 204,800 bytes)
      while (quality > 0.1) {
        dataUrl = await toJpeg(node, {
          quality,
          backgroundColor: '#ffffff',
          style: {
            margin: '0',
            transform: 'none'
          }
        });

        // Base64 string length to bytes approximation
        const byteSize = (dataUrl.length * 3) / 4;
        if (byteSize <= 195000) { // Safety margin < 200KB
          break;
        }
        quality -= 0.15; // Reduce more aggressively if needed
      }
      
      const fullDomain = `${formData.domainName.toLowerCase()}${formData.domainExtension}`;
      const filename = `NP-Domain-Registration-Letter-${fullDomain}.jpg`;
      
      // Create a link and trigger download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Failed to generate Image:", error);
      alert("Failed to generate Image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex items-center gap-3 border border-blue-100">
              <Shield className="w-5 h-5 flex-shrink-0 text-blue-600" />
              <p className="text-sm font-medium">
                Your information stays in your browser. We don't save your data to any server.
              </p>
            </div>
            
            <DomainForm 
              onFormChange={handleFormChange}
              onValidationChange={handleValidationChange}
              externalResetFlag={externalResetFlag}
            />
          </div>

          {/* Right Column: Preview */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-24">
              <PreviewControls 
                onReset={handleReset}
                onEdit={handleEdit}
                onDownload={generateAndDownloadImage}
                isValid={isValid}
                isGenerating={isGenerating}
              />
              
              {formData && (
                <div className="pb-4">
                  <LetterPreview formData={formData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onDownload={generateAndDownloadImage}
        onCreateAnother={handleReset}
      />
    </div>
  );
}
