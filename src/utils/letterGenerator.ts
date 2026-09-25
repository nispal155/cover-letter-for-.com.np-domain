import type { DomainLetterFormData, LetterData } from "../types";
import { RECIPIENT, DOMAIN_PURPOSES } from "../constants";
import { formatDate } from "./dateFormatter";

export function generateLetterData(formData: DomainLetterFormData): LetterData {
  const fullDomain = `${formData.domainName.toLowerCase()}${formData.domainExtension}`;
  const isPersonal = formData.registrationType === 'personal';

  let purposeText = "";
  if (formData.purpose === "other" && formData.customPurpose) {
    purposeText = formData.customPurpose;
  } else {
    const selectedPurpose = DOMAIN_PURPOSES.find(p => p.value === formData.purpose);
    switch (formData.purpose) {
      case "official-website":
        purposeText = isPersonal ? "host my personal website and establish my digital identity" : "host our official company website and establish our digital identity";
        break;
      case "business-website":
        purposeText = isPersonal ? "establish my professional presence online" : "establish our business presence online and engage with customers";
        break;
      case "personal-portfolio":
        purposeText = "showcase my personal portfolio, skills, and professional experience";
        break;
      case "digital-services":
        purposeText = isPersonal ? "provide digital services and showcase my portfolio" : "provide digital services and solutions to our clients";
        break;
      case "online-portal":
        purposeText = isPersonal ? "operate a personal portal" : "operate an online services portal for our stakeholders";
        break;
      case "corporate-comm":
        purposeText = isPersonal ? "facilitate communication and information sharing" : "facilitate corporate communication and information sharing";
        break;
      case "product-showcase":
        purposeText = isPersonal ? "showcase my personal projects and skills" : "showcase our products and services to potential clients";
        break;
      default:
        purposeText = selectedPurpose?.label?.toLowerCase() || (isPersonal ? "support my personal endeavors" : "support our business operations");
    }
  }

  let paragraph1, paragraph2, paragraph3, paragraph4;

  if (isPersonal) {
    paragraph1 = `I am writing to formally request the registration of the domain name "${fullDomain}" for personal use under the Nepalese country-code top-level domain (.NP).`;
    paragraph2 = `I require this domain name to ${purposeText}. This domain will serve as my primary online presence, enabling me to establish a digital footprint and showcase my personal portfolio.`;
    paragraph3 = `The requested domain name "${formData.domainName.toLowerCase()}" directly reflects my personal identity (as verified by my citizenship document), ensuring compliance with the .np domain registration guidelines.`;
    paragraph4 = `I kindly request that this application be reviewed and processed at your earliest convenience. I have attached a copy of my citizenship certificate along with other required documents.`;
  } else {
    paragraph1 = `I am writing on behalf of ${formData.companyName || '[Company Name]'}, located at ${formData.companyAddress || '[Address]'}, to formally request the registration of the domain name "${fullDomain}" under the Nepalese country-code top-level domain (.NP).`;
    paragraph2 = `Our organization requires this domain name to ${purposeText}. This domain will serve as the primary online presence for our organization, enabling us to reach stakeholders, clients, and partners both nationally and internationally.`;
    paragraph3 = `The requested domain name "${formData.domainName.toLowerCase()}" directly reflects our company's name and brand identity, ensuring consistency between our registered business entity and our online presence.`;
    paragraph4 = `We kindly request that this application be reviewed and processed at your earliest convenience. All necessary supporting documents (including company registration and PAN certificate) will be provided as required by the registration process.`;
  }

  return {
    isPersonal,
    letterhead: {
      logo: formData.logo,
      companyName: formData.companyName,
      tagline: formData.companyTagline,
      address: formData.companyAddress,
    },
    date: formatDate(),
    recipient: RECIPIENT,
    subject: `APPLICATION FOR REGISTRATION OF DOMAIN NAME "${fullDomain.toUpperCase()}"`,
    paragraphs: [paragraph1, paragraph2, paragraph3, paragraph4],
    closing: {
      applicantName: formData.applicantName,
      designation: formData.designation,
      companyName: formData.companyName,
    },
    contact: {
      email: formData.email,
      phone: formData.phone,
    },
    stamp: formData.stamp,
  };
}
