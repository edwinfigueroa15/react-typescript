import { ChartPie, ChartBar, Loading } from '@/components/atoms';
import { getTypePokemones } from '@/services/pokeapi';
import React, { useEffect, useState } from 'react';



export const DashboardPage: React.FC<{}> = () => {
  const [types, setTypes] = useState<{ name: string; value: number }[]>()
  const [loading, setLoading] = useState<boolean>(true);

  // METHODS -------------------------------------------

  // API -----------------------------------------------
  const getTypeData = async (): Promise<void> => {
    try {
      const response = await getTypePokemones()
      setTypes(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // LIFECYCLE -----------------------------------------
  useEffect(() => {
    setLoading(true);
    getTypeData();
  }, []);

  // RETURN VIEW ---------------------------------------
  return (
    <>
      <h1 className='w-full  text-center'>DashboardPage</h1>
      {
        loading ? <Loading /> :
          <div className='flex justify-center items-center sm:gap-10 gap-0 flex-wrap flex-col overflow-y-scroll'>
            <ChartPie data={types} />
            <ChartBar data={types} />
          </div>
      }
    </>
  );
};
