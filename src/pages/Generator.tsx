import { useState, useCallback } from "react";
import { Icon } from "@iconify/react";
import { ActiveFieldProvider } from "../context/ActiveFieldContext";
import { SEO } from "../components/SEO";

import { DomainForm } from "../components/form/DomainForm";
import { LetterPreview } from "../components/preview/LetterPreview";
import { PreviewControls } from "../components/preview/PreviewControls";
import { SuccessModal } from "../components/ui/SuccessModal";
import { ConfirmModal } from "../components/ui/ConfirmModal";

import type { DomainLetterFormData } from "../types";

export default function Generator() {
  const [formData, setFormData] = useState<DomainLetterFormData | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [externalResetFlag, setExternalResetFlag] = useState(0);

  const handleFormChange = useCallback((data: DomainLetterFormData) => {
    setFormData(data);
  }, []);

  const handleValidationChange = useCallback((valid: boolean) => {
    setIsValid(valid);
  }, []);

  const handleReset = () => {
    setShowResetConfirm(true);
  };
  
  const confirmReset = () => {
    setExternalResetFlag((prev) => prev + 1);
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
      
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setShowSuccessModal(true);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Failed to generate Image:", error);
      }
      setError("Failed to generate Image. Please try again.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateAndDownloadPDF = async () => {
    if (!formData || !isValid) return;

    setIsGenerating(true);
    try {
      const { toJpeg } = await import('html-to-image');
      const { jsPDF } = await import('jspdf');
      const node = document.getElementById('letter-preview');
      if (!node) throw new Error("Preview element not found");

      const dataUrl = await toJpeg(node, {
        quality: 1,
        backgroundColor: '#ffffff',
        style: {
          margin: '0',
          transform: 'none'
        }
      });
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [794, 1123] // A4 size in pixels at 96 DPI
      });
      
      pdf.addImage(dataUrl, 'JPEG', 0, 0, 794, 1123);
      
      const fullDomain = `${formData.domainName.toLowerCase()}${formData.domainExtension}`;
      pdf.save(`NP-Domain-Registration-Letter-${fullDomain}.pdf`);
      
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0d9488', '#14b8a6', '#2dd4bf']
      });
      setShowSuccessModal(true);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Failed to generate PDF:", error);
      }
      setError("Failed to generate PDF. Please try again.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <SEO 
        title="Cover Letter Generator for .NP Domains"
        description="Fill out a simple form to instantly generate a properly formatted cover letter for your .com.np domain registration. Export to PDF or Image."
        url="/generate"
      />
      <ActiveFieldProvider>
      <div className="bg-gray-50 min-h-screen pb-20 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column: Form */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="bg-teal-50 text-teal-800 p-4 rounded-xl flex items-center gap-3 border border-teal-100 dark:bg-teal-900/20 dark:border-teal-900/50 dark:text-teal-100 transition-colors">
                <Icon icon="solar:shield-check-bold-duotone" className="w-5 h-5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
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
                  onDownloadPdf={generateAndDownloadPDF}
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
        
        <ConfirmModal
          isOpen={showResetConfirm}
          title="Reset Form"
          message="Are you sure you want to reset the form? All your entered data will be lost."
          onConfirm={confirmReset}
          onCancel={() => setShowResetConfirm(false)}
          confirmText="Reset"
        />
        
        {error && (
          <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2 duration-300">
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg border border-red-200 shadow-lg flex items-center gap-3 dark:bg-red-900/20 dark:border-red-900/50 dark:text-red-400 transition-colors">
              <Icon icon="solar:danger-circle-bold-duotone" className="w-5 h-5" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          </div>
        )}
      </div>
      </ActiveFieldProvider>
    </>
  );
}
