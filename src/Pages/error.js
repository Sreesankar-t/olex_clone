import React from 'react'
import '../Pages/error.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min' 
export default function Error() {
  return (
   
      
<div id="notfound">
<div class="notfound">
    <div class="notfound-404">
        <h1>Oops!</h1>
        <h2>404 - The Page can't be found</h2>
    </div>
 <Link to="/">Go to Home</Link>
  
</div>

    </div>
  )
}
