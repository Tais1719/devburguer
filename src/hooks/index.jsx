import { UserProvider } from "./UserContent"

const AppProvider = ({children}) =>{ 

     return <UserProvider>{children}</UserProvider>
 }


 export default AppProvider ;