import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

import LayoutComponent from '@app/components/Layout'
import TimeComponent from '@app/components/Time'

const HomePage: NextPage = () => {
  const router = useRouter()

  return (
    <LayoutComponent>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>Home Page</div>
        <button onClick={() => router.push('/test')}>Ir para page test</button>

        <div style={{ display: 'flex' }}>
          <TimeComponent />
          <TimeComponent />
        </div>
      </div>
    </LayoutComponent>
  )
}

export default HomePage
