import { useEffect, useState, useRef } from "react";
import type { LetterData } from "../../types";
import { generateLetterData } from "../../utils/letterGenerator";
import type { DomainLetterFormData } from "../../types";

interface LetterPreviewProps {
  formData: DomainLetterFormData;
}

export function LetterPreview({ formData }: LetterPreviewProps) {
  const data: LetterData = generateLetterData(formData);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Responsive scaling to fit the 794px fixed width inside smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // 794 is the A4 width in pixels at 96 DPI
        if (containerWidth < 794) {
          setScale(containerWidth / 794);
        } else {
          setScale(1);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden flex justify-center bg-gray-100 rounded-sm shadow-inner" style={{ minHeight: `${1123 * scale}px` }}>
      <div 
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: '794px',
          height: '1123px',
          marginBottom: `-${1123 * (1 - scale)}px` 
        }}
      >
        <div 
          id="letter-preview" 
          className="w-[794px] h-[1123px] bg-white shadow-lg flex flex-col mx-auto"
        >
          <div className="flex-1 p-[60px] text-[15px] text-black font-sans leading-[1.5] flex flex-col text-left">
            
            {/* Letterhead */}
            {data.isPersonal ? (
              <div className="mb-8 mt-4">
                <p className="font-bold uppercase text-lg">{data.closing.applicantName || "[APPLICANT NAME]"}</p>
                {data.contact?.email && <p>{data.contact.email}</p>}
                {data.contact?.phone && <p>{data.contact.phone}</p>}
              </div>
            ) : (
              <div className="text-center mb-8">
                {data.letterhead.logo && (
                  <img 
                    src={data.letterhead.logo} 
                    alt="Company Logo" 
                    className="h-16 object-contain mx-auto mb-4"
                  />
                )}
                <h1 className="font-bold text-2xl leading-tight uppercase">
                  {data.letterhead.companyName || "[COMPANY NAME]"}
                </h1>
                {data.letterhead.tagline && (
                  <p className="text-gray-600 italic mt-1">{data.letterhead.tagline}</p>
                )}
                <p className="mt-1">{data.letterhead.address || "[COMPANY ADDRESS]"}</p>
              </div>
            )}

            {!data.isPersonal && <div className="border-t-2 border-black mb-10 w-full"></div>}

            {/* Date */}
            <div className="text-right mb-8">
              <p>Date: {data.date}</p>
            </div>

            {/* Recipient */}
            <div className="mb-8">
              <p>To,</p>
              <p className="font-bold">{data.recipient.title}</p>
              <p>{data.recipient.organization}</p>
              <p>{data.recipient.address}</p>
              <p>{data.recipient.country}</p>
            </div>

            {/* Subject */}
            <div className="mb-10 font-bold">
              <p>SUBJECT: {data.subject}</p>
            </div>

            {/* Salutation */}
            <div className="mb-6">
              <p>Dear Sir/Madam,</p>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-5 mb-10 flex-1">
              {data.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-justify text-[15px]">{paragraph}</p>
              ))}
            </div>

            {/* Closing */}
            <div className="mt-auto pt-10 relative">
              {data.stamp && !data.isPersonal && (
                <div className="absolute top-10 left-32 opacity-80 pointer-events-none">
                  <img src={data.stamp} alt="Company Stamp" className="w-32 h-32 object-contain mix-blend-multiply" />
                </div>
              )}
              <p className="mb-20">Sincerely yours,</p>
              <p className="font-bold relative z-10">{data.closing.applicantName || "[Applicant Name]"}</p>
              {!data.isPersonal && (
                <div className="relative z-10">
                  <p>{data.closing.designation || "[Designation]"}</p>
                  <p className="font-bold">{data.closing.companyName || "[Company Name]"}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
