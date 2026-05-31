const Tags = () => {
  return (
    <div className='flex gap-x-2 mt-4 items-center text-secondary'>
      <div className='bg-primary text-xs py-1 px-2 rounded-2xl'>
        <span>
          Same-day-service
        </span>
      </div>
      <div className='bg-primary text-xs py-1 px-2 rounded-2xl'>
        <span>Certified technicians</span>
      </div>
      <div className='bg-primary text-xs py-1 px-2 rounded-2xl'>
        <span>Warranty on repair</span>
      </div>
    </div>
  );
};

export default Tags;
