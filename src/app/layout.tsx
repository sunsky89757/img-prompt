import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./ui/Navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "蛋壳IMG Prompt - Midjourney 和其他绘图AI的图像提示词生成工具",
  description:
    "蛋壳IMGPrompt 是一个直观的图像提示词生成工具，可以方便地在 Stable Diffusion 和 Midjourney 的流程中使用，使图像提示词的创建变得简单而有效，轻松激发创意并获得更好的图片结果。通过 IMGPrompt，你可以将自己的创意想法转化为视觉现实。",
  keywords: "DANKEIMGPrompt, Stable Diffusion, Midjourney, Image prompt generation, Visual creativity toolprompt, ai, prompt, 提示词",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body>
        <Navigation />
        <script data-ad-client="ca-pub-7585955822109216" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <AntdRegistry>{children}</AntdRegistry>
        <SpeedInsights />
        <Script
          id="piwik"
          dangerouslySetInnerHTML={{
            __html: `
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://piwik.seoipo.com/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '10']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
          }}
        />
        <Script src="https://oss.newzone.top/instantpage.min.js" type="module" strategy="lazyOnload" />
      </body>
    </html>
  );
}
