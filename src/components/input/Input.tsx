type Props = {
  placeholder?: string;
};

export const Input = (props: Props) => {
  const { placeholder } = props;

  return (
    <input
      type='text'
      className='w-full border border-gray-300 rounded-xs px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent'
      placeholder={placeholder}
    />
  );
};
