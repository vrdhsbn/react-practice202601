import BlurText from '@/components/BlurText'

const handleAnimationComplete = () => {
  console.log('Animation completed!')
}

export const TopBlurText = (props: { text: string }) => (
  <BlurText
    text={props.text}
    delay={100}
    animateBy='letters'
    direction='top'
    onAnimationComplete={handleAnimationComplete}
    className='text-2xl mb-8 text-center'
  />
)
