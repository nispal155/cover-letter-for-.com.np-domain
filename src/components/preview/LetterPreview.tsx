import { useEffect, useState, useRef } from "react";
import type { LetterData } from "../../types";
import { generateLetterData } from "../../utils/letterGenerator";
import type { DomainLetterFormData } from "../../types";
import { useActiveField } from "../../context/ActiveFieldContext";

interface LetterPreviewProps {
  formData: DomainLetterFormData;
}

export function LetterPreview({ formData }: LetterPreviewProps) {
  const data: LetterData = generateLetterData(formData);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const { activeField } = useActiveField();

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

  const Highlight = ({ field, children }: { field: string | string[], children: React.ReactNode }) => {
    const fields = Array.isArray(field) ? field : [field];
    const isActive = activeField && fields.includes(activeField);
    return (
      <span className={`transition-all duration-300 ${isActive ? 'bg-teal-200/50 shadow-[0_0_0_4px_rgba(153,246,228,0.5)] rounded-sm relative z-10 text-teal-900' : ''}`}>
        {children}
      </span>
    );
  };

  const renderParagraph = (text: string, index: number) => {
    // Simple highlight for domain name in paragraphs
    if ((activeField === 'domainName' || activeField === 'domainExtension') && formData.domainName) {
      const fullDomain = `${formData.domainName}${formData.domainExtension}`.toLowerCase();
      if (text.includes(fullDomain)) {
        const parts = text.split(fullDomain);
        return (
          <p key={index} className="text-justify text-[15px]">
            {parts.map((part, i) => (
              <span key={i}>
                {part}
                {i !== parts.length - 1 && (
                  <span className="transition-all duration-300 bg-teal-200/50 shadow-[0_0_0_4px_rgba(153,246,228,0.5)] rounded-sm relative z-10 text-teal-900">
                    {fullDomain}
                  </span>
                )}
              </span>
            ))}
          </p>
        );
      }
    }
    return <p key={index} className="text-justify text-[15px]">{text}</p>;
  };

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
                <p className="font-bold uppercase text-lg">
                  <Highlight field="applicantName">{data.closing.applicantName || "[APPLICANT NAME]"}</Highlight>
                </p>
                {data.contact?.email && <p><Highlight field="email">{data.contact.email}</Highlight></p>}
                {data.contact?.phone && <p><Highlight field="phone">{data.contact.phone}</Highlight></p>}
              </div>
            ) : (
              <div className="text-center mb-8">
                {data.letterhead.logo && data.letterhead.logo.startsWith('data:image/') && (
                  <img 
                    src={data.letterhead.logo} 
                    alt="Company Logo" 
                    className={`h-16 object-contain mx-auto mb-4 transition-all duration-300 ${activeField === 'logo' ? 'ring-4 ring-teal-200/50 rounded-sm' : ''}`}
                  />
                )}
                <h1 className="font-bold text-2xl leading-tight uppercase">
                  <Highlight field="companyName">{data.letterhead.companyName || "[COMPANY NAME]"}</Highlight>
                </h1>
                {data.letterhead.tagline && (
                  <p className="text-gray-600 italic mt-1">
                    <Highlight field="companyTagline">{data.letterhead.tagline}</Highlight>
                  </p>
                )}
                <p className="mt-1"><Highlight field="companyAddress">{data.letterhead.address || "[COMPANY ADDRESS]"}</Highlight></p>
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
            <div className="mb-10 font-bold flex gap-1 flex-wrap">
              <p>SUBJECT: {data.subject.split(formData.domainName ? `${formData.domainName.toLowerCase()}${formData.domainExtension}` : '[domain name]').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <Highlight field={["domainName", "domainExtension"]}>
                      {formData.domainName ? `${formData.domainName.toLowerCase()}${formData.domainExtension}` : '[domain name]'}
                    </Highlight>
                  )}
                </span>
              ))}</p>
            </div>

            {/* Salutation */}
            <div className="mb-6">
              <p>Dear Sir/Madam,</p>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-5 mb-10 flex-1">
              {data.paragraphs.map((paragraph, index) => renderParagraph(paragraph, index))}
            </div>

            {/* Closing */}
            <div className="mt-auto pt-10 relative">
              {data.stamp && !data.isPersonal && data.stamp.startsWith('data:image/') && (
                <div className={`absolute top-10 left-32 opacity-80 pointer-events-none transition-all duration-300 ${activeField === 'stamp' ? 'ring-4 ring-teal-200/50 rounded-sm' : ''}`}>
                  <img src={data.stamp} alt="Company Stamp" className="w-32 h-32 object-contain mix-blend-multiply" />
                </div>
              )}
              <p className="mb-20">Sincerely yours,</p>
              <p className="font-bold relative z-10"><Highlight field="applicantName">{data.closing.applicantName || "[Applicant Name]"}</Highlight></p>
              {!data.isPersonal && (
                <div className="relative z-10">
                  <p><Highlight field="designation">{data.closing.designation || "[Designation]"}</Highlight></p>
                  <p className="font-bold"><Highlight field="companyName">{data.closing.companyName || "[Company Name]"}</Highlight></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

