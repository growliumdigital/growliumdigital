import { SERVICE_ABOUT_DETAILS } from "@/app/constant";
import AccountBased from "@/components/Services/AccountBased";
import AppointmentSetting from "@/components/Services/Appointment";
import HeroSection from "@/components/Services/HeroSection";
import InsideSales from "@/components/Services/InsideSales";
import LeadGeneration from "@/components/Services/LeadGeneration";
import SalesDevelopment from "@/components/Services/SalesDevelopment";
import SalesMeetingSetup from "@/components/Services/SalesMeeting";


interface ServicePageProps {
  params: { id: string };
}

export default function ServicePage({params}:ServicePageProps) {
    const { id } = params;
  return (
    <>
    <HeroSection id={params.id}/>
    {id === "sales-meeting-setup" && <SalesMeetingSetup />}
    {id === "account-based" && <AccountBased />}
    {id==="b2b-setting" && <AppointmentSetting/>}
    {id==="b2b-lead" && <LeadGeneration/>}
    {id==="inside-sales" && <InsideSales/>}
    {id === "sales-development"&& <SalesDevelopment/>}
    </>
  )
}
