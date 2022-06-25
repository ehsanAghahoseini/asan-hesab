import type { NextPage } from 'next'
import { ContextState } from '../components/context/ContextMain'
import { useContext, useEffect } from 'react';
import BankRow from '../components/BankComponent/BankRow';

const Home: NextPage = () => {
  const Ctx = useContext(ContextState);

  useEffect(()=>{
    Ctx.setHeadTitle('آسان حساب')
  },[])

  return (
    <>
      <BankRow />
    </>
  )
}

export default Home
