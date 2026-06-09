import type { Metadata } from "next";
import { UroSitePage } from "@/components/uro-site";

export const metadata: Metadata = {
  title: "UROPLENUM 2026 | Plenum of Urologists of Kazakhstan",
  description:
    "Official website of UROPLENUM 2026, the Plenum of Urologists of Kazakhstan at QazExpoCongress in Astana."
};

export default function HomePage() {
  return <UroSitePage page="home" />;
}
