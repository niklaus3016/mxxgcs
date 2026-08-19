import { MBTIResult, SBTIResult } from '../types';

export function generatePersonalityCardCanvas(
  resultMBTI?: MBTIResult,
  resultSBTI?: SBTIResult
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context not supported');

  // HD Resolution (1080 x 1920 phone screen format)
  canvas.width = 1080;
  canvas.height = 1920;

  // Background Gradient - Deep Slate Blue / Morandi Quiet Blue
  const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
  bgGrad.addColorStop(0, '#0F172A'); // Slate 900
  bgGrad.addColorStop(0.4, '#1E293B'); // Slate 800
  bgGrad.addColorStop(1, '#0284C7'); // Sky Blue accent base

  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 1920);

  // Decorative soft glow circles
  ctx.save();
  ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
  ctx.beginPath();
  ctx.arc(900, 250, 350, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(129, 140, 248, 0.06)';
  ctx.beginPath();
  ctx.arc(150, 1500, 400, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Header Brand
  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 36px sans-serif';
  ctx.fillText('明序性格测试 · MINGXU ASSESSMENT', 90, 120);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(90, 160);
  ctx.lineTo(990, 160);
  ctx.stroke();

  // Card Content Box
  ctx.fillStyle = 'rgba(30, 41, 59, 0.75)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 3;

  // Round rect helper
  const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  };

  roundRect(90, 210, 900, 1480, 36);
  ctx.fill();
  ctx.stroke();

  let title = '';
  let code = '';
  let motto = '';
  let tags: string[] = [];
  let traits: string[] = [];
  let advice: string = '';

  if (resultMBTI) {
    code = resultMBTI.type;
    title = resultMBTI.title;
    motto = resultMBTI.motto;
    tags = [resultMBTI.profile.subtitle, ...resultMBTI.profile.coreTraits];
    traits = resultMBTI.profile.advantages.slice(0, 3);
    advice = resultMBTI.profile.growthAdvice[0] || '';
  } else if (resultSBTI) {
    code = resultSBTI.code;
    title = resultSBTI.title;
    motto = `「${resultSBTI.orderCategory}」`;
    tags = resultSBTI.profile.keywords;
    traits = resultSBTI.profile.behaviorPattern.slice(0, 3);
    advice = resultSBTI.profile.selfOptimization[0] || '';
  }

  // Type Code Badge
  ctx.fillStyle = '#38BDF8';
  ctx.font = '900 120px sans-serif';
  ctx.fillText(code, 150, 370);

  // Type Title
  ctx.fillStyle = '#F8FAFC';
  ctx.font = 'bold 58px sans-serif';
  ctx.fillText(title, 150, 460);

  // Motto
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'italic 34px sans-serif';
  
  // Wrap motto text if long
  const mottoWords = motto;
  ctx.fillText(mottoWords.length > 28 ? mottoWords.substring(0, 28) + '...' : mottoWords, 150, 525);

  // Divider inside card
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.moveTo(150, 570);
  ctx.lineTo(930, 570);
  ctx.stroke();

  // Tags Pills
  let startX = 150;
  let startY = 620;

  tags.forEach((tag) => {
    ctx.font = '28px sans-serif';
    const textWidth = ctx.measureText(tag).width;
    const pillWidth = textWidth + 40;

    if (startX + pillWidth > 930) {
      startX = 150;
      startY += 70;
    }

    ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 2;
    roundRect(startX, startY, pillWidth, 50, 25);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#E2E8F0';
    ctx.fillText(tag, startX + 20, startY + 34);

    startX += pillWidth + 20;
  });

  // Core Strengths Section
  let sectionY = startY + 110;
  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 36px sans-serif';
  ctx.fillText('核心特质与表现', 150, sectionY);

  sectionY += 20;
  traits.forEach((trait) => {
    sectionY += 55;
    ctx.fillStyle = '#CBD5E1';
    ctx.font = '30px sans-serif';

    // Bullet
    ctx.fillStyle = '#38BDF8';
    ctx.beginPath();
    ctx.arc(165, sectionY - 8, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#E2E8F0';
    const text = trait.length > 25 ? trait.substring(0, 25) + '...' : trait;
    ctx.fillText(text, 190, sectionY);
  });

  // Growth Advice Section
  sectionY += 80;
  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 36px sans-serif';
  ctx.fillText('专属成长指南', 150, sectionY);

  sectionY += 50;
  ctx.fillStyle = '#F1F5F9';
  ctx.font = '28px sans-serif';
  
  // Wrap advice
  const maxWidth = 760;
  const words = advice.split('');
  let line = '';
  let lineY = sectionY;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, 150, lineY);
      line = words[i];
      lineY += 42;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, 150, lineY);

  // Footer Branding Inside Box
  ctx.fillStyle = '#64748B';
  ctx.font = '26px sans-serif';
  ctx.fillText('明心见序 · 读懂自己 | 纯本地离线计算', 150, 1620);

  // Bottom Watermark
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 30px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('——《明序性格测试》全效性格自测APP ——', 540, 1780);

  return canvas;
}
