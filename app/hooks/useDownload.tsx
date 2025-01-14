import { useCallback } from "react";
import { toPng, toJpeg } from "html-to-image";

interface DownloadOptions {
  fileName?: string;
  format?: "png" | "jpeg";
  quality?: number;
}

export const useDownload = () => {
  const downloadElementAsImage = useCallback(
    async (elementId: string, options: DownloadOptions = {}) => {
      const element = document.getElementById(elementId);

      if (!element) {
        throw new Error(`Element with id ${elementId} not found`);
      }

      const { fileName = "download", format = "png", quality = 0.95 } = options;

      try {
        const dataUrl =
          format === "png"
            ? await toPng(element, { quality })
            : await toJpeg(element, { quality });

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${fileName}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        return dataUrl;
      } catch (error) {
        console.error("Failed to download image:", error);
        throw error;
      }
    },
    []
  );

  return { downloadElementAsImage };
};
