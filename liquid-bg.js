import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js'

(function () {
  // HTML'de aktif mi?
  if (!document.body.hasAttribute('data-liquid-bg')) return
  if (document.getElementById('liquid-canvas')) return

  const canvas = document.createElement('canvas')
  canvas.id = 'liquid-canvas'
  document.documentElement.appendChild(canvas)

  const app = LiquidBackground(canvas)

  // ❌ GÖRSEL YOK
  // app.loadImage(...)

  // Liquid ayarları
  app.liquidPlane.material.color.set('#1a0f2e') // koyu mor (isteğe bağlı)
  app.liquidPlane.material.metalness = 0.8
  app.liquidPlane.material.roughness = 0.3
  app.liquidPlane.uniforms.displacementScale.value = 4
  app.setRain(false)
})()
