import type { Metadata } from "next";
import { UroSitePage } from "@/components/uro-site";

export const metadata: Metadata = {
  title: "Faculty and Invited Guests",
  description:
    "UROPLENUM 2026 faculty, invited officials, Kazakhstan speakers, moderators and international experts."
};

export default function FacultyPage() {
  return <UroSitePage page="faculty" />;
}
