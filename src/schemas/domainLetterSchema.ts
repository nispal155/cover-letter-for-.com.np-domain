import { z } from "zod";

export const domainLetterSchema = z.object({
  registrationType: z.enum(["personal", "company"]),

  companyName: z.string().max(200, "Maximum 200 characters").optional(),
  companyAddress: z.string().max(300, "Maximum 300 characters").optional(),
  companyTagline: z.string().max(100, "Maximum 100 characters").optional(),

  domainName: z
    .string()
    .min(1, "Domain name is required")
    .max(63, "Maximum 63 characters")
    .regex(
      /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/i,
      "Please enter a valid domain name (letters, numbers, hyphens only; cannot start/end with hyphen)"
    ),
  domainExtension: z.string().min(1).max(20),

  applicantName: z.string().min(1, "Applicant name is required").max(100, "Maximum 100 characters"),
  designation: z.string().max(100, "Maximum 100 characters").optional(),

  email: z.string().email("Please enter a valid email").max(254, "Maximum 254 characters").optional().or(z.literal("")),
  phone: z.string().max(20, "Maximum 20 characters").optional(),

  purpose: z.string().min(1, "Please select a domain purpose").max(50),
  customPurpose: z.string().max(300, "Maximum 300 characters").optional(),

  logo: z.string().optional(),
  stamp: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.purpose === "other" && (!data.customPurpose || data.customPurpose.trim() === "")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please enter your custom purpose",
      path: ["customPurpose"],
    });
  }

  if (data.registrationType === "company") {
    if (!data.companyName || data.companyName.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Company name is required",
        path: ["companyName"],
      });
    }
    if (!data.companyAddress || data.companyAddress.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Company address is required",
        path: ["companyAddress"],
      });
    }
    if (!data.designation || data.designation.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Designation is required",
        path: ["designation"],
      });
    }
  }
});
