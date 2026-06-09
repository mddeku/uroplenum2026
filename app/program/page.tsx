import type { Metadata } from "next";
import { UroSitePage } from "@/components/uro-site";

export const metadata: Metadata = {
  title: "Scientific Program",
  description:
    "Detailed UROPLENUM 2026 scientific program with sessions, speakers, topics, timings and halls."
};

export default function ProgramPage() {
  return <UroSitePage page="program" />;
}
