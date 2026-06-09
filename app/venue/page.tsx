import type { Metadata } from "next";
import { UroSitePage } from "@/components/uro-site";

export const metadata: Metadata = {
  title: "Venue | Congress-center QazExpoCongress",
  description:
    "Venue information for UROPLENUM 2026 at Congress-center QazExpoCongress, 12 Heydar Aliyev Street, Astana."
};

export default function VenuePage() {
  return <UroSitePage page="venue" />;
}
