interface CoachStep {
  id: string
}

export class CoachMark {
  private body = document.querySelector('body')
  private currentTarget: HTMLElement | null = null
  private steps: CoachStep[]
  private svg: SVGElement | null = null
  private path: SVGPathElement | null = null
  private frame: number | null = null

  constructor({ steps }: { steps: CoachStep[] }) {
    this.steps = steps
  }
  
  private generateHighlightPath(rect: DOMRect, screenWidth: number, screenHeight: number, padding = 5, borderRadius = 5) {
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

  go(stepNumber: number) {
    window.removeEventListener('scroll', this.update);
    window.removeEventListener('resize', this.update);

    if (this.svg === null || this.path === null ) {
      const [svg, path] = this.createSvgElements()
      this.svg = svg
      this.path = path
      this.body?.appendChild(svg)
      this.body?.classList.add('coach-mark-active');
    }

    this.currentTarget?.classList.remove('coach-mark-target');
    this.currentTarget = document.querySelector(this.steps[stepNumber - 1].id)
    this.currentTarget?.classList.add('coach-mark-target');
    
    this.update()
    window.addEventListener('scroll', this.update);
    window.addEventListener('resize', this.update);
  }

  dispose() {
    this.svg?.remove()
    this.body?.classList.remove('coach-mark-active');
    window.removeEventListener('scroll', this.update);
    window.removeEventListener('resize', this.update);
  }
  
  private updateCoachMark = () => {
    if (this.currentTarget === null) return 
    if (this.svg === null) return
    if (this.path === null) return

    const rect = this.currentTarget.getBoundingClientRect();
    const path = this.generateHighlightPath(rect, window.innerWidth, window.innerHeight);
    this.svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    this.path.setAttribute('d', path);
  }
  
  private update = () => {
    if (this.frame !== null) window.cancelAnimationFrame(this.frame);
    this.frame = window.requestAnimationFrame(() => this.updateCoachMark())
  }

  private createSvgElements(): [SVGElement, SVGPathElement] {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    svg.setAttribute('class', 'fixed top-0 left-0 z-50 w-full h-full pointer-events-none');
    path.setAttribute('class', 'fill-current text-black dark:text-white');
    path.setAttribute('fill', 'rgba(0,0,0,0.5)');
    svg.appendChild(path);
    return [svg, path]
  }
}