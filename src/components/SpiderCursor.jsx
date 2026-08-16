import { useEffect, useRef } from 'react'

const REVEAL_RADIUS = 64

function drawOrb(ctx, cx, cy, radius, spokes, rings, seed) {
  const angles = []
  for (let i = 0; i < spokes; i += 1) {
    angles.push(
      (i / spokes) * Math.PI * 2 +
        Math.sin(seed + i * 1.7) * 0.05 +
        Math.cos(seed * 0.6 + i) * 0.03,
    )
  }

  ctx.save()
  ctx.translate(cx, cy)
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.strokeStyle = '#ffffff'

  angles.forEach((angle, i) => {
    const stretch = 1 + Math.sin(seed + i * 2.3) * 0.08
    ctx.lineWidth = 0.7
    ctx.beginPath()
    ctx.moveTo(Math.cos(angle) * 10, Math.sin(angle) * 10)
    ctx.lineTo(Math.cos(angle) * radius * stretch, Math.sin(angle) * radius * stretch)
    ctx.stroke()
  })

  for (let r = 1; r <= rings; r += 1) {
    const t = r / rings
    ctx.lineWidth = r < 3 ? 0.95 : 0.65
    ctx.beginPath()
    angles.forEach((angle, i) => {
      const jitter = 1 + Math.sin(seed * 1.4 + i * 2.1 + r) * 0.05
      const dist = (0.12 + t * 0.88) * radius * jitter
      const x = Math.cos(angle) * dist
      const y = Math.sin(angle) * dist
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.closePath()
    ctx.stroke()
  }

  ctx.restore()
}

function paintFullWeb(offscreen, width, height) {
  const ctx = offscreen.getContext('2d')
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, offscreen.width, offscreen.height)
  ctx.globalAlpha = 1

  const span = Math.hypot(width, height)
  const hubs = [
    { x: width * 0.5, y: height * 0.45, r: span * 0.62, spokes: 22, rings: 14, seed: 1.1 },
    { x: width * 0.12, y: height * 0.18, r: span * 0.38, spokes: 16, rings: 9, seed: 2.4 },
    { x: width * 0.88, y: height * 0.22, r: span * 0.4, spokes: 16, rings: 9, seed: 3.7 },
    { x: width * 0.18, y: height * 0.82, r: span * 0.42, spokes: 18, rings: 10, seed: 4.2 },
    { x: width * 0.82, y: height * 0.78, r: span * 0.4, spokes: 16, rings: 9, seed: 5.5 },
    { x: width * 0.5, y: height * 0.08, r: span * 0.32, spokes: 14, rings: 8, seed: 6.1 },
  ]

  hubs.forEach((hub) => {
    drawOrb(ctx, hub.x, hub.y, hub.r, hub.spokes, hub.rings, hub.seed)
  })
}

export default function SpiderCursor() {
  const canvasRef = useRef(null)
  const spiderRef = useRef(null)
  const pos = useRef({ x: -999, y: -999, tx: -999, ty: -999, visible: false })
  const raf = useRef(0)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine) return undefined

    const canvas = canvasRef.current
    const spider = spiderRef.current
    const ctx = canvas.getContext('2d')
    const web = document.createElement('canvas')
    document.body.classList.add('spider-cursor-on')

    let viewW = 0
    let viewH = 0
    let dpr = 1

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      viewW = window.innerWidth
      viewH = window.innerHeight
      canvas.width = viewW * dpr
      canvas.height = viewH * dpr
      canvas.style.width = `${viewW}px`
      canvas.style.height = `${viewH}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      web.width = viewW * dpr
      web.height = viewH * dpr
      const webCtx = web.getContext('2d')
      webCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
      paintFullWeb(web, viewW, viewH)
    }

    const onMove = (event) => {
      pos.current.tx = event.clientX
      pos.current.ty = event.clientY
      pos.current.visible = true
    }

    const onLeave = () => {
      pos.current.visible = false
    }

    const tick = () => {
      const p = pos.current
      p.x += (p.tx - p.x) * (reduce ? 1 : 0.22)
      p.y += (p.ty - p.y) * (reduce ? 1 : 0.22)

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, viewW, viewH)

      if (p.visible) {
        ctx.drawImage(web, 0, 0, viewW, viewH)
        ctx.globalCompositeOperation = 'destination-in'
        const fade = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, REVEAL_RADIUS)
        fade.addColorStop(0, 'rgba(255,255,255,1)')
        fade.addColorStop(0.35, 'rgba(255,255,255,0.65)')
        fade.addColorStop(0.7, 'rgba(255,255,255,0.22)')
        fade.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = fade
        ctx.fillRect(p.x - REVEAL_RADIUS, p.y - REVEAL_RADIUS, REVEAL_RADIUS * 2, REVEAL_RADIUS * 2)
        ctx.globalCompositeOperation = 'source-over'

        spider.style.opacity = '1'
        spider.style.transform = `translate3d(${p.tx}px, ${p.ty}px, 0) translate(-50%, -50%)`
      } else {
        spider.style.opacity = '0'
      }

      raf.current = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    raf.current = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('spider-cursor-on')
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="web-layer" aria-hidden="true" />
      <div ref={spiderRef} className="spider-cursor" aria-hidden="true" />
    </>
  )
}
