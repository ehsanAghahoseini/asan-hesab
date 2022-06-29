import type { NextPage } from 'next'
import { ContextState } from '../../components/context/ContextMain'
import { useContext, useEffect } from 'react';
import RowComponent from '../../components/layout/RowComponent';
import MenuData from '../../components/MenuData/MenuData';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const Ctx = useContext(ContextState);
  const router = useRouter()

  useEffect(()=>{
    Ctx.setHeadTitle('آسان حساب')
    if(router.query.q){

    }
  },[router.query.q])

  return (
    <>
    </>
  )
}

export default Home
