export interface DomainLetterFormData {
  // Type
  registrationType: 'personal' | 'company';

  // Company (Optional for personal)
  companyName?: string;
  companyAddress?: string;
  companyTagline?: string;

  // Domain
  domainName: string;
  domainExtension: string; // e.g., ".com.np"

  // Authorized Person
  applicantName: string;
  designation?: string;

  // Optional Contact
  email?: string;
  phone?: string;

  // Purpose
  purpose: string;
  customPurpose?: string;

  // Logo & Stamp
  logo?: string; // base64 data URL
  stamp?: string; // base64 data URL
}

export interface RecipientInfo {
  title: string;
  organization: string;
  address: string;
  country: string;
}

export interface LetterData {
  isPersonal: boolean;
  letterhead: {
    logo?: string;
    companyName?: string;
    tagline?: string;
    address?: string;
  };
  date: string;
  recipient: RecipientInfo;
  subject: string;
  paragraphs: string[];
  closing: {
    applicantName: string;
    designation?: string;
    companyName?: string;
  };
  contact?: {
    email?: string;
    phone?: string;
  };
  stamp?: string;
}
