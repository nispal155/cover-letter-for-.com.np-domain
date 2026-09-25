import { z } from "zod";

export const domainLetterSchema = z.object({
  registrationType: z.enum(["personal", "company"]),

  companyName: z.string().optional(),
  companyAddress: z.string().optional(),
  companyTagline: z.string().optional(),

  domainName: z
    .string()
    .min(1, "Domain name is required")
    .regex(
      /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/i,
      "Please enter a valid domain name (letters, numbers, hyphens only; cannot start/end with hyphen)"
    ),
  domainExtension: z.string().min(1),

  applicantName: z.string().min(1, "Applicant name is required"),
  designation: z.string().optional(),

  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  phone: z.string().optional(),

  purpose: z.string().min(1, "Please select a domain purpose"),
  customPurpose: z.string().optional(),

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
