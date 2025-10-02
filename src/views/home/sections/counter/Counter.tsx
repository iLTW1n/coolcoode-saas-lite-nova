const items = [
  { count: '15+', label: 'UNIQUE SECTIONS' },
  { count: '20K', label: 'HAPPY CUSTOMERS' },
  { count: '90%', label: 'CUSTOMER SATISFACTION' },
];

export const Counter = () => {
  return (
    <div className='container grid gap-6 py-10 md:py-20 md:grid-cols-3'>
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            text-center relative
            ${
              index === 0
                ? ''
                : `
                before:content-['']
                before:block
                before:rounded-lg
                before:bg-gray-300
                before:w-1/2
                before:h-px
                before:mx-auto
                before:mb-4
                md:before:absolute
                md:before:top-1/4
                md:before:left-0
                md:before:w-px
                md:before:h-3/4
                md:before:mb-0
                md:before:mx-0
              `
            }
          `}
        >
          <h3 className='text-4xl font-bold text-gray-900 dark:text-white'>{item.count}</h3>
          <p className='text-gray-900 dark:text-gray-300 text-sm font-semibold mt-2'>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};
