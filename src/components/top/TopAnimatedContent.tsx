import AnimatedContent from '@/components/AnimatedContent'

export const TopAnimatedContent = ({
  delay,
  threshold,
  children,
}: {
  delay: number
  threshold: number
  children: React.ReactNode
}) => (
  <AnimatedContent
    distance={60}
    direction='vertical'
    reverse={false}
    duration={1.5}
    ease='power3.out'
    initialOpacity={0}
    animateOpacity
    scale={1}
    threshold={threshold}
    delay={delay}
  >
    {children}
  </AnimatedContent>
)
