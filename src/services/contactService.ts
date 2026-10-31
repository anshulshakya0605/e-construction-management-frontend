
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  enquiryType: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  // Mock API request until the backend is available
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Contact form submission:", data);

  return {
    success: true,
    message: "Thank you! Your message has been submitted successfully.",
  };
}
