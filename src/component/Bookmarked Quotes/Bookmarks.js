import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function Bookmarks({ bookmarks }) {
      
  return (
    <div className='mainClass'>

    <nav className='navbarTypes'>
    <div>
    <Link to="/"><h1>Home</h1></Link>
    </div>
    <div>
        <Link to="bookmark"><h1>Bookmarks</h1></Link>
    </div>
    </nav>

    <div className='outerBookmark'>
    
         {bookmarks.map((bookmark,index) => 
            <div key={index} className='generateQuote' >
               <h1> {bookmark} </h1>
            </div>
         )}
       
      </div>
    
    </div>
  )
}

const mapStateToProps = (state) => ({
    bookmarks: state.quote.bookmarks, // Assuming 'bookmarks' is stored under 'quote' in your state
  });
  
  export default connect(mapStateToProps)(Bookmarks);
