import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style Quote Component/quote.css';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MultipleSelect from '../common component/MultipleSelect';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setQuote, setTags, setBookmarks } from '../../actions'; // Your action creators

const QuoteComponent = ({ quote, tags, setQuote, setTags, bookmarks, setBookmarks }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [author , setAuthor] = useState('');

  const [selectedTag, setSelectedTag] = useState('');

  
useEffect(() => {
  axios.get(`${BASE_URL}/random`).then(function (response) {
    // handle success of random quotes
    setQuote([response.data.content]);
    setAuthor(response.data.author);
  })
  
  axios.get(`${BASE_URL}/tags`).then(function (response) {
    // handle success
    const tagsData = response.data.map((tag) => tag.name);
    setTags(tagsData);
  })

}, []);


const fetchRandomQuote = (tag) => {
  const url = tag ? `${BASE_URL}/random?tag=${tag}` : `${BASE_URL}/quotes/random`;
  axios.get(url).then(function (response) {
    // handle success
    setQuote(response.data.content);
    }).catch(function (error) {
        // handle error
        console.log(error);
      })
  };

const handleTagChange = (e) => {
  const tag = e.target.value;
  setSelectedTag(tag);
  fetchRandomQuote(tag);
};

const handleBookmark = () => {
  localStorage.setItem('Bookmark' , quote);
  setBookmarks(quote);

};

console.log(bookmarks);

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

    <div className='generateQuote'>
      <h1>{quote}</h1>
      
      <div className='styleButton'>
      <div>
      <h4>-{author}</h4>
      </div>

      <div>
      <button onClick={handleBookmark}>
      <BookmarkAddIcon style={{color: 'white'}}/>
      </button>
      </div>
      </div>

    </div>

<div>
<div>
<MultipleSelect tags={tags} selectedTag={selectedTag}  handleTagChange={handleTagChange}  />
</div>
<div className='nextQuoteButton' >
  <button onClick={fetchRandomQuote}>Next Quote</button>
</div>

</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // Map state properties to component props
  quote: state.quote.quote,
  tags: state.quote.tags,
  // Add other state properties as needed
});

const mapDispatchToProps = {
  // Map action creators to component props
  setQuote,
  setTags,
  setBookmarks,
  // Add other action creators as needed
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);