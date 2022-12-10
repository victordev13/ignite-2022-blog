import { Outlet } from 'react-router-dom'
import { Content, HeaderBackground, MainContainer } from './styles'

export default function Layout() {
  return (
    <MainContainer>
      <HeaderBackground>
        <div>
          <h1>@victorcsdev</h1>
        </div>
      </HeaderBackground>
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  )
}
