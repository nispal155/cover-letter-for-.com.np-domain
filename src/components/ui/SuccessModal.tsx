import { Icon } from "@iconify/react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  onCreateAnother: () => void;
}

export function SuccessModal({ isOpen, onClose, onDownload, onCreateAnother }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Icon icon="solar:close-circle-linear" className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Icon icon="solar:check-circle-bold-duotone" className="w-8 h-8 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-navy-900 mb-2">Your letter is ready!</h2>
          <p className="text-navy-600 mb-8">
            Your .NP domain registration request letter has been generated successfully.
          </p>
          
          <div className="flex flex-col w-full gap-3">
            <button
              onClick={() => {
                onDownload();
                onClose();
              }}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Download Image Again
            </button>
            <button
              onClick={() => {
                onCreateAnother();
                onClose();
              }}
              className="w-full bg-gray-100 hover:bg-gray-200 text-navy-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Create Another Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
