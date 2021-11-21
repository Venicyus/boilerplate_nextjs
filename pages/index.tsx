import { NextPage } from 'next'
import ViewComponent from '@app/components/View'

const HomePage: NextPage = () => {
  return (
    <ViewComponent title="Home - Nextjs12">
      <div>Hello nextjs 12</div>
    </ViewComponent>
  )
}

export default HomePage
