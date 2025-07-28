import { IntegrationTest } from "../components/integration-test"

export default function TestIntegrationPage() {
  return (
    <div className="min-h-screen bg-[#FFF5EB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1D1D1D] font-['Poppins'] mb-4">🔧 Google Sheets Integration Test</h1>
          <p className="text-lg text-[#1D1D1D] font-['Open_Sans']">
            Verify that your Google Apps Script is properly configured and working
          </p>
        </div>

        <IntegrationTest />
      </div>
    </div>
  )
}
