import { FormTest } from "../components/form-test"
import { ContactSection } from "../components/contact-section"

export default function TestFormPage() {
  return (
    <div className="min-h-screen bg-[#FFF5EB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">Form Testing Page</h1>
          <p className="text-lg text-[#1D1D1D] font-['Open_Sans']">
            Test the contact form functionality and email integration
          </p>
        </div>

        <FormTest />
        <ContactSection />
      </div>
    </div>
  )
}
