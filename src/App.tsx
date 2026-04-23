import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Specialities from "./pages/Specialities.tsx";
import Contact from "./pages/Contact.tsx";

import NotFound from "./pages/NotFound.tsx";
import MedicalBilling from "./pages/services/MedicalBilling.tsx";
import MedicalCoding from "./pages/services/MedicalCoding.tsx";
import RevenueCycleManagement from "./pages/services/RevenueCycleManagement.tsx";
import MedicalCredentialing from "./pages/services/MedicalCredentialing.tsx";
import DenialManagement from "./pages/services/DenialManagement.tsx";
import MedicalAudit from "./pages/services/MedicalAudit.tsx";
import VirtualAssistant from "./pages/services/VirtualAssistant.tsx";
import AnalyticsReporting from "./pages/services/AnalyticsReporting.tsx";
import DentalServices from "./pages/services/DentalServices.tsx";
import BusinessDevelopment from "./pages/services/BusinessDevelopment.tsx";
import DigitalMarketing from "./pages/services/DigitalMarketing.tsx";
// Specialty Pages
import Cardiology from "./pages/specialities/Cardiology.tsx";
import Neurology from "./pages/specialities/Neurology.tsx";
import InternalMedicine from "./pages/specialities/InternalMedicine.tsx";
import Pediatrics from "./pages/specialities/Pediatrics.tsx";
import Orthopedics from "./pages/specialities/Orthopedics.tsx";
import Dermatology from "./pages/specialities/Dermatology.tsx";
import Laboratory from "./pages/specialities/Laboratory.tsx";
import PhysicalTherapy from "./pages/specialities/PhysicalTherapy.tsx";
import FamilyMedicine from "./pages/specialities/FamilyMedicine.tsx";
import WoundCare from "./pages/specialities/WoundCare.tsx";
import HomeHealth from "./pages/specialities/HomeHealth.tsx";
import GeriatricsMedicine from "./pages/specialities/GeriatricsMedicine.tsx";
import Rheumatology from "./pages/specialities/Rheumatology.tsx";
import MentalHealth from "./pages/specialities/MentalHealth.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import ScrollToTop from "./components/common/ScrollToTop.tsx";
import TrailingSlashRedirect from "./components/common/TrailingSlashRedirect.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <TrailingSlashRedirect />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/" element={<About />} />
            <Route path="/services/" element={<Services />} />
            <Route path="/specialities/" element={<Specialities />} />
            <Route path="/contact/" element={<Contact />} />

            <Route path="/services/medical-billing/" element={<MedicalBilling />} />
            <Route path="/services/medical-coding/" element={<MedicalCoding />} />
            <Route path="/services/revenue-cycle-management/" element={<RevenueCycleManagement />} />
            <Route path="/services/medical-credentialing/" element={<MedicalCredentialing />} />
            <Route path="/services/denial-management/" element={<DenialManagement />} />
            <Route path="/services/medical-audit/" element={<MedicalAudit />} />
            <Route path="/services/virtual-assistant/" element={<VirtualAssistant />} />
            <Route path="/services/analytics-reporting/" element={<AnalyticsReporting />} />
            <Route path="/services/dental-services/" element={<DentalServices />} />
            <Route path="/services/business-development/" element={<BusinessDevelopment />} />
            <Route path="/services/digital-marketing/" element={<DigitalMarketing />} />
            {/* Specialty Routes */}
            <Route path="/specialities/cardiology/" element={<Cardiology />} />
            <Route path="/specialities/neurology/" element={<Neurology />} />
            <Route path="/specialities/internal-medicine/" element={<InternalMedicine />} />
            <Route path="/specialities/pediatrics/" element={<Pediatrics />} />
            <Route path="/specialities/orthopedics/" element={<Orthopedics />} />
            <Route path="/specialities/dermatology/" element={<Dermatology />} />
            <Route path="/specialities/laboratory/" element={<Laboratory />} />
            <Route path="/specialities/physical-therapy/" element={<PhysicalTherapy />} />
            <Route path="/specialities/family-medicine/" element={<FamilyMedicine />} />
            <Route path="/specialities/wound-care/" element={<WoundCare />} />
            <Route path="/specialities/home-health/" element={<HomeHealth />} />
            <Route path="/specialities/geriatrics-medicine/" element={<GeriatricsMedicine />} />
            <Route path="/specialities/rheumatology/" element={<Rheumatology />} />
          <Route path="/specialities/mental-health/" element={<MentalHealth />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:slug/" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
