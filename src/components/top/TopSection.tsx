export const TopSection = ({ children }: { children: React.ReactNode }) => (
  <div className='flex flex-col items-center justify-center mt-30'>
    <h2 className='text-2xl font-bold'>タイトルタイトルタイトルタイトルタイトル</h2>
    <div className='mt-6'>{children}</div>
  </div>
)
