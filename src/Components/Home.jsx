import React, { useContext } from 'react'
import Header from './Header'
import TodayRecipe from './TodayRecipe'
import TopChefs from './TopChefs'
import RecipeProgram from './RecipeProgram'
import SpecialOffer from './SpecialOffer'
import { useNavigation } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'
import MostPopularItems from './MostPopularItems'
import FooterTop from './FooterTop'

const Home = () => {
  const navigate = useNavigation()
  if (navigate.state === 'loading') {
    return <LoadingSpinner />
  }
  return (
    <>
      <Header />
      <div className='relative top-[22rem] flex flex-col items-center p-2'>
        <TodayRecipe />
        <TopChefs />
        <section className="bg-slate-200 container p-10 px-5 mx-auto md:mt-10  my-4 rounded-md blog">
          <MostPopularItems></MostPopularItems>
        </section>
        <RecipeProgram />
        <FooterTop />
        <SpecialOffer />
      </div>
    </>
  )
}

export default Home

