import GradientText from '@/components/GradientText'

export const TopMessage = ({ children }: { children: React.ReactNode }) => (
  <GradientText
    colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
    animationSpeed={4}
    showBorder={false}
    className='text-4xl p-4 custom-class backdrop-blur-none'
  >
    {children}
  </GradientText>
)
