
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {  notifications, totalNotificationSelector } from './atoms'
import { useEffect, useMemo } from 'react'
import axios from 'axios'

function App() {

  return (

    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}


function MainApp() {

  const[networkCount,setNetworkCount]=useRecoilState(notifications)
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)

useEffect(()=>{

  axios.get("https://sum-server.100xdevs.com/notifications").
  then((res)=>setNetworkCount(res.data))


},[])


  return <div>
    <button>Home</button>
    <button>My network({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
    <button>Jobs({networkCount.jobs})</button>
    <button>Messaging({networkCount.messaging})</button>
    <button>Notifications({networkCount.notifications})</button>
    <button>Me{totalNotificationCount}</button>
  </div>
}

export default App
