import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js'

(function () {
  if (document.getElementById('liquid-canvas')) return

  const canvas = document.createElement('canvas')
  canvas.id = 'liquid-canvas'

  document.documentElement.appendChild(canvas)

  const app = LiquidBackground(canvas)
  app.loadImage('https://assets.codepen.io/33787/liquid.webp')

  app.liquidPlane.material.metalness = 0.75
  app.liquidPlane.material.roughness = 0.25
  app.liquidPlane.uniforms.displacementScale.value = 5
  app.setRain(false)
})()
