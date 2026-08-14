import { AboutPageContent } from "@/components/AboutPageContent";
import { defaultAboutContent } from "@/data/aboutContent";

export const metadata = {
  title: "关于 Residency Lab | 艺术驻留申请助手",
  description: "了解 Residency Lab 的项目理念、订阅服务和正在开发中的驻留申请工具。",
};

export default function AboutPage() {
  return (
    <AboutPageContent
      initialContent={defaultAboutContent}
      contentEndpoint={process.env.NEXT_PUBLIC_ABOUT_CONTENT_API_URL}
    />
  );
}
