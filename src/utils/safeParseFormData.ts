import type { DomainLetterFormData } from "../types";

const VALID_REG_TYPES = ["personal", "company"];
const MAX_STRING_LENGTH = 500;

export function safeParseFormData(
  raw: unknown,
  defaults: DomainLetterFormData
): DomainLetterFormData {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return defaults;
  }

  const data = raw as Record<string, unknown>;

  const safeString = (val: unknown, maxLen = MAX_STRING_LENGTH): string => {
    if (typeof val !== "string") return "";
    return val.slice(0, maxLen);
  };

  return {
    registrationType: VALID_REG_TYPES.includes(data.registrationType as string)
      ? (data.registrationType as "personal" | "company")
      : defaults.registrationType,
    companyName: safeString(data.companyName, 200),
    companyAddress: safeString(data.companyAddress, 300),
    companyTagline: safeString(data.companyTagline, 100),
    domainName: safeString(data.domainName, 63),
    domainExtension: safeString(data.domainExtension, 20) || defaults.domainExtension,
    applicantName: safeString(data.applicantName, 100),
    designation: safeString(data.designation, 100),
    email: safeString(data.email, 254),
    phone: safeString(data.phone, 20),
    purpose: safeString(data.purpose, 50) || defaults.purpose,
    customPurpose: safeString(data.customPurpose, 300),
    // Deliberately exclude logo and stamp from localStorage
    logo: undefined,
    stamp: undefined,
  };
}
