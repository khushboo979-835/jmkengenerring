'use client';

import React, { useEffect } from 'react';
import { X, Play, ArrowRight } from 'lucide-react';

interface ProductVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  videoEmbedUrl?: string;
  videoUrl?: string;
  videoTitle?: string;
  onOpenRFQ?: (productName: string) => void;
}

export default function ProductVideoModal({
  isOpen,
  onClose,
  productName,
  videoEmbedUrl,
  videoUrl,
  videoTitle,
  onOpenRFQ
}: ProductVideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const embedUrl = videoEmbedUrl || (videoUrl ? videoUrl.replace(/\/view$/, '/preview') : '');

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 border-2 border-neutral-700 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl text-white my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 truncate">
            <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center shrink-0 shadow-md">
              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black text-red-400 uppercase tracking-wider bg-red-950 px-2 py-0.5 rounded border border-red-800">
                  Patna Central Works
                </span>
                <span className="text-[11px] text-neutral-400 font-medium hidden sm:inline">
                  Verified Manufacturing Footage
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white truncate mt-0.5">
                {productName}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition shrink-0"
            aria-label="Close video player"
            title="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={`${productName} Video`}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 space-y-3">
              <Play className="w-12 h-12 text-red-500 mx-auto" />
              <p className="text-sm font-bold text-neutral-300">
                Loading official product demonstration...
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions & Metadata */}
        <div className="p-4 sm:p-5 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-neutral-400">
            <p className="font-semibold text-white line-clamp-1">
              {videoTitle || `${productName} Demonstration & Testing Footage`}
            </p>
            <p className="text-[11px] text-neutral-400">
              Direct factory proof & site execution recorded at JMK Engineering Works.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0">
            {onOpenRFQ && (
              <button
                onClick={() => {
                  onClose();
                  onOpenRFQ(productName);
                }}
                className="py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition flex items-center gap-1.5 shadow-lg shadow-red-600/30"
              >
                <span>Instant RFQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
