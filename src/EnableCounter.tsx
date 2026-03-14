import { useState } from "react"

export function EnableCounter() {
   const [enable, setEnable] = useState(false)
   const toggleEnable = () => setEnable((prev) => !prev)
   
   return (
    <div className="enable-counter">
      <label htmlFor="enable-counter">Enable Counter</label>
      <input id="enable-counter" 
        type="checkbox" 
        checked={enable} 
        onChange={toggleEnable} 
      />
    </div>
   )
}