import facepaint from 'facepaint';

const breakpoints = [480, 768, 980, 1200];

const mq = facepaint(
  breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
  )
)

export default mq;