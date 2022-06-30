import type { NextPage } from 'next'
import { ContextState } from '../components/context/ContextMain'
import { useContext, useEffect } from 'react';
import RowComponent from '../components/layout/RowComponent';
import Search from '../components/Search/Search';
import MenuData from '../components/MenuData/MenuData';

const Home: NextPage = () => {

  return (
    <>
      {/* <Search /> */}
      <RowComponent title="محاسبات بانکی" listData={MenuData} filter_key='category' filter_value='bank' />
      <RowComponent title="محاسبات املاک" listData={MenuData}  filter_key='category' filter_value='realstate' />
    </>
  )
}

export default Home
