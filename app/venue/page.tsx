import type { Metadata } from "next";
import { UroSitePage } from "@/components/uro-site";

export const metadata: Metadata = {
  title: "Venue | QazExpoCongress Congress Center",
  description:
    "Venue information for UROPLENUM 2026 at QazExpoCongress Congress Center, 12 Heydar Aliyev Street, Astana."
};

export default function VenuePage() {
  return <UroSitePage page="venue" />;
}
