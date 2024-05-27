'use client'
import Script from "next/script";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function page() {

  const[count, setCount] = useState(0)
  const handleME = () => {
    alert(" i am ahere")
  }
  return (
    <div>
      <button onClick={() => setCount(count+1)}>{count}</button>
      <FontAwesomeIcon icon={faCab} className="tw-text-white" />
    </div>
  )
}

