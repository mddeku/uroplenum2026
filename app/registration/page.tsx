import type { Metadata } from "next";
import { UroSitePage } from "@/components/uro-site";

export const metadata: Metadata = {
  title: "Participant Registration",
  description:
    "Register for UROPLENUM 2026, the Plenum of Urologists of Kazakhstan in Astana. Registration is open until July 2, 2026.",
  alternates: {
    canonical: "/registration"
  }
};

export default function Registration() {
  return <UroSitePage page="registration" />;
}
