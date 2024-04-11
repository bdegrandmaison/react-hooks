import { useState, useCallback } from 'react';

export default function useCopyToClipboard(text = ''): [string, (textToCopy: string) => void] {
  const [copiedText, setCopiedText] = useState(text);

  const copyToClipboard = useCallback((textToCopy: string) => {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopiedText(textToCopy);
      } catch (error) {
        console.log(error);
      }
    };

    handleCopy();
  }, []);

  return [copiedText, copyToClipboard];
}
