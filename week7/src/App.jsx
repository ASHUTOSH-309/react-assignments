import React, { useContext, useState } from 'react'
import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'



function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
        <EvenOdd />
      </RecoilRoot>
    </div>
  )
}

function Count() {

  return <div>
    <CountRenderer />
    <Buttons />
  </div>

}


function CountRenderer() {

  const count = useRecoilValue(countAtom)

  return <div>
    {count}
  </div>
}

function Buttons() {
  const setCount= useSetRecoilState(countAtom)
  console.log("buttons getting re-render")

  return <div>
    <button onClick={() => setCount(count=>count + 1)}>Increase</button>
    <button onClick={() => setCount(count=>count - 1)} >Decrease</button>
  </div>
}



function EvenOdd(){

const count=useRecoilValue(countAtom)

return <div>

{count%2===0 ? ( <p>{count} is even</p>  ):(  <p>{count} is odd</p>  ) }

</div>



}

export default App
