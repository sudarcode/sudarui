'use client';
import { useState } from 'react';
import { IconCopy, IconCheck } from '@tabler/icons-react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="absolute top-2.5 right-3 px-2 py-1 rounded-md bg-transparent hover:bg-muted/80 text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors z-10"
      aria-label="Copy code"
    >
      {copied ? (
        <>
          <IconCheck className="w-3.5 h-3.5 text-green-500" />
          <span className="text-xs font-medium text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <IconCopy className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">Copy</span>
        </>
      )}
    </button>
  );
}
