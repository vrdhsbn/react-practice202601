import ScrollVelocity from '@/components/ScrollVelocity'

export const TopScrollText = () => (
  <ScrollVelocity
    texts={['This is React Bits components Demo', "Let's Scroll Down!!"]}
    velocity={100}
    className='custom-scroll-text'
  />
)
