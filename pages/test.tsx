import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

import LayoutComponent from '@app/components/Layout'
import TimeComponent from '@app/components/Time'

const TestPage: NextPage = () => {
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
        <button onClick={() => router.push('/')}>Ir para page Home</button>

        <div style={{ display: 'flex' }}>
          <TimeComponent />
          <TimeComponent />
        </div>
      </div>
    </LayoutComponent>
  )
}

export default TestPage
