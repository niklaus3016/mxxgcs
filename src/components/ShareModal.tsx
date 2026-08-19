import React, { useEffect, useState, useRef } from 'react';
import { X, Download, Copy, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { MBTIResult, SBTIResult } from '../types';
import { generatePersonalityCardCanvas } from '../utils/cardGenerator';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  resultMBTI?: MBTIResult;
  resultSBTI?: SBTIResult;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  resultMBTI,
  resultSBTI,
}) => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setGenerating(true);
      setTimeout(() => {
        try {
          const canvas = generatePersonalityCardCanvas(resultMBTI, resultSBTI);
          const dataUrl = canvas.toDataURL('image/png');
          setImgUrl(dataUrl);
        } catch (e) {
          console.error('Error generating card image', e);
        } finally {
          setGenerating(false);
        }
      }, 100);
    }
  }, [isOpen, resultMBTI, resultSBTI]);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (!imgUrl) return;
    const link = document.createElement('a');
    const code = resultMBTI ? resultMBTI.type : resultSBTI ? resultSBTI.code : 'personality';
    link.download = `明序性格卡片_${code}.png`;
    link.href = imgUrl;
    link.click();
  };

  const handleCopy = async () => {
    if (!imgUrl) return;
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Fallback
      handleDownload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-sm w-full p-5 text-slate-100 flex flex-col items-center max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            <h3 className="font-bold text-base text-slate-100">专属性格卡片</h3>
          </div>
          <button
            onClick={onClose}
            id="share-modal-close-button"
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Canvas Preview Container */}
        <div className="my-4 w-full flex flex-col items-center justify-center min-h-[360px]">
          {generating ? (
            <div className="flex flex-col items-center gap-3 text-slate-400 my-12">
              <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-medium">正在生成精美海报...</p>
            </div>
          ) : (
            imgUrl && (
              <div className="relative group rounded-2xl overflow-hidden border border-slate-700 shadow-xl max-w-[260px]">
                <img
                  src={imgUrl}
                  alt="性格卡片"
                  className="w-full h-auto object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <p className="text-xs text-slate-200 bg-slate-900/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    长按也可直接保存
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Action Buttons */}
        <div className="w-full grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleDownload}
            disabled={generating}
            id="download-card-button"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 active:scale-95 transition-all disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            保存海报到相册
          </button>

          <button
            onClick={handleCopy}
            disabled={generating}
            id="copy-card-button"
            className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 active:scale-95 transition-all disabled:opacity-50"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                已复制卡片
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-sky-400" />
                复制图片
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
