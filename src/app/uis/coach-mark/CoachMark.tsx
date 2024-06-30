'use client'

import React, { useRef, useEffect } from 'react';

const CoachMark = ({ targetId }: { targetId: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const frameRef = useRef<number | null>(null);
  const target = document.querySelector(targetId);
  const body = document.querySelector('body');

  const generateHighlightPath = (rect: DOMRect, screenWidth: number, screenHeight: number, padding = 5, borderRadius = 5) => {
    const overlay = `M${screenWidth},0L0,0L0,${screenHeight}L${screenWidth},${screenHeight}L${screenWidth},0Z`;
    
    const x = rect.left - padding;
    const y = rect.top - padding;
    const width = rect.width + padding * 2;
    const height = rect.height + padding * 2;

    const highlight = [
        `M${x},${y + borderRadius}`,
        `a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},-${borderRadius}`,
        `h${width - borderRadius * 2}`,
        `a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${borderRadius}`,
        `v${height - borderRadius * 2}`,
        `a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},${borderRadius}`,
        `h-${width - borderRadius * 2}`,
        `a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},-${borderRadius}`,
        `v-${height - borderRadius * 2}`,
        `z`
    ].join(' ');

    return `${overlay} ${highlight}`;
  }

  const updateCoachMark = () => {
    if (target === null) return 
    if (svgRef.current === null) return
    if (pathRef.current === null) return

    const rect = target.getBoundingClientRect();
    const path = generateHighlightPath(rect, window.innerWidth, window.innerHeight);
    svgRef.current.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    pathRef.current.setAttribute('d', path);
  }
  
  const update = () => {
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(updateCoachMark) 
  }

  useEffect(() => {
    if (target === null) return
    if (body === null) return 

    update()
    body.classList.add('coach-mark-active');
    target.classList.add('coach-mark-target');
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);

    return () => {
      body.classList.remove('coach-mark-active');
      target.classList.remove('coach-mark-target');
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    }
  }, [])
  
  return <>
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      className='fixed top-0 left-0 z-50 w-full h-full pointer-events-none'
    >
      <path ref={pathRef} fill="rgba(0,0,0,0.5)"/>
    </svg>
  </>
}

export default CoachMark;
