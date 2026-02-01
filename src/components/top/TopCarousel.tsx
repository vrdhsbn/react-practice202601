import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi'
import Carousel from '@/components/Carousel'

export const TopCarousel = () => (
  <div style={{ height: '330px', position: 'relative' }}>
    <Carousel
      items={carouselItems}
      baseWidth={330}
      autoplay={true}
      autoplayDelay={3000}
      pauseOnHover={false}
      loop
      round
    />
  </div>
)

const carouselItems = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className='h-8 w-8 text-white' />,
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className='h-8 w-8 text-white' />,
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className='h-8 w-8 text-white' />,
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className='h-8 w-8 text-white' />,
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className='h-8 w-8 text-white' />,
  },
]
