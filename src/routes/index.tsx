import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes, TabRoutes } from './app.routes'

export const Routes = () => {
  return (
    <NavigationContainer >
      <TabRoutes />
    </NavigationContainer>
  )
}
