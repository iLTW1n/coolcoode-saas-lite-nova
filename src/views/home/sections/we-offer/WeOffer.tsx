const items = [
  {
    title: 'Convert more visitors',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmid.',
  },
  {
    title: 'Mobile responsive design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmid.',
  },
  {
    title: 'Build faster than ever before',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmid.',
  },
  {
    title: 'Flexible styles & colours',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmid.',
  }
]

export const WeOffer = () => {
  return (
    <div className='container py-10 grid gap-4 md:py-20 md:grid-cols-2 md:gap-6'>
      {items.map((item, index) => (
        <div key={index} className='border border-gray-300 rounded-xs p-3 flex items-center gap-4 md:p-6'>
          <div className='bg-gray-200 w-12 h-12 min-w-12 md:w-20 md:h-20 md:min-w-20' />
          <div>
            <h3 className='text-lg font-semibold mb-1 md:text-xl'>{item.title}</h3>
            <p className='text-gray-600 text-xs md:text-sm'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
