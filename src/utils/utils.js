// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b

const calcWinsize = () => {
  if (window) {
    return { width: window.innerWidth, height: window.innerHeight }
  }else {
      return { width: 1920, height: 970 }
  }
}

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const move = (mousePos, el) => {
  const rtansform = el.style.transform
  const match = rtansform.match(/(\d+\.\d+)/g)
  const winsize = calcWinsize()
  let translationVals = { tx: 0, ty: 0, r: 0 }

  if (match && match[0] && match[1] && match[2]) {
    translationVals = { tx: match[0], ty: match[1], r: match[2] }
  }

  const xstart = getRandomNumber(15, 60)
  const ystart = getRandomNumber(30, 90)
  const randR = getRandomNumber(-15, 15)

  const tx = lerp(
    translationVals.tx,
    map(mousePos.x, 0, winsize.width, -xstart, xstart),
    0.3
  )
  const ty = lerp(
    translationVals.ty,
    map(mousePos.y, 0, winsize.height, -ystart, ystart),
    0.3
  )
  const r = lerp(
    translationVals.r,
    map(mousePos.x, 0, winsize.width, -randR, randR),
    1
  )

  return { tx: tx, ty: ty, r: r }
}

export { move }
