import type { NextPage } from 'next'
import { ContextState } from '../components/context/ContextMain'
import { useContext, useEffect } from 'react';
import RowComponent from '../components/layout/RowComponent';
import Search from '../components/Search/Search';
import MenuData from '../components/MenuData/MenuData';

const Home: NextPage = () => {
  const Ctx = useContext(ContextState);

  useEffect(()=>{
    Ctx.setHeadTitle('آسان حساب')
  },[])

  return (
    <>
      <Search />
      <RowComponent title="محاسبات بانکی" listData={MenuData} filter='bank' />
      <RowComponent title="محاسبات املاک" listData={MenuData} filter='realstate' />
    </>
  )
}

export default Home
