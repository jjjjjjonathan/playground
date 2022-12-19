import { NextPage } from 'next';

const Box: NextPage = () => {
  return (
    <>
      <div className='box-content w-[200px] border-8 border-blue-500 p-[10px]'></div>
      <div className='box-border w-[200px] border-8 border-emerald-500 p-[10px]'></div>
    </>
  );
};

export default Box;
