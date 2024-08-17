
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom,  notificationsAtom } from './atoms'

function App() {

  return (

    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}


function MainApp() {

  const networkNotificationsCount = useRecoilValue(networkAtom)
  const jobsCount =useRecoilValue(jobsAtom)

  const notifications=useRecoilValue(notificationsAtom)
  const[messages,setMessages]=useRecoilState(messagingAtom)

  return <div>
    <button>Home</button>
    <button>My network({networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount})</button>
    <button>Jobs({jobsCount})</button>
    <button>Messaging({messages})</button>
    <button>Notifications({notifications})</button>
    <button onClick={()=>setMessages(messages+1)}>Me</button>
  </div>
}

export default App
