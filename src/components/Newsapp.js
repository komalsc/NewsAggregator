import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Newsapp.css';
import { BbcNews } from '../API_DATAS/BbcNews';
import { IndiaNews } from '../API_DATAS/IndiaNews';
import { OpenNews } from '../API_DATAS/OpenNews';

const Newsapp = () => {
  const [search, setSearch] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [newsSource, setNewsSource] = useState('Open News'); // Set default to 'Open News'
  const [newsData, setNewsData] = useState([]);
  const [noDataMessage, setNoDataMessage] = useState(''); // For custom "no data" messages

  useEffect(() => {
    const getData = () => {
      let selectedData = [];

      if (newsSource === 'Open News') {
        selectedData = OpenNews[0]?.results || [];
      } else if (newsSource === 'BBC News') {
        selectedData = BbcNews[0]?.results || [];
      } else if (newsSource === 'India News') {
        selectedData = IndiaNews[0]?.results || [];
      }

      // Filter the data by title, author, and date
      const filteredData = selectedData.filter(article => {
        const matchesTitle = article.title?.toLowerCase().includes(search.toLowerCase()) ?? false;
        const matchesAuthor = author ? article.author?.toLowerCase().includes(author.toLowerCase()) : true;

        // Safely check if the publishedAt field exists and is valid
        const matchesDate = date && article.publishedAt
          ? new Date(article.publishedAt).toISOString().slice(0, 10) === date
          : true;

        return matchesTitle && matchesAuthor && matchesDate;
      });

      // Determine which filter didn't match and set a corresponding no-data message
      if (filteredData.length > 0) {
        setNewsData(filteredData);
        setNoDataMessage('');
      } else {
        let noDataMessage = 'No news articles found';

        if (search) {
          noDataMessage += ` with the title: "${search}"`;
        }

        if (author) {
          noDataMessage += search ? ` and author: "${author}"` : ` for the author: "${author}"`;
        }

        if (date) {
          noDataMessage += search || author ? ` and on the date: ${date}` : ` for the selected date: ${date}`;
        }

        setNoDataMessage(noDataMessage + '. Please try different filters.');
        setNewsData([]); // Clear the news data
      }
    };

    if (newsSource) {
      getData();
    }
  }, [newsSource, search, author, date]);

  const handleInput = (e) => setSearch(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);

  const handleSource = (e) => {
    setNewsSource(e.target.value);

    // Reset other filter fields when the news source changes
    setSearch('');
    setAuthor('');
    setDate('');
  };

  return (
    <div>
      {/* Search and filter section */}
      <nav>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News By Title"
            value={search}
            onChange={handleInput}
          />
        </div>

        <div className="filterBar">
          <input
            type="date"
            value={date}
            onChange={handleDate}
          />
          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={handleAuthor}
          />
          <select onChange={handleSource} value={newsSource}>
            <option value="Open News">Open News</option>
            <option value="BBC News">BBC News</option>
            <option value="India News">India News</option>
          </select>
        </div>
      </nav>

      <div className="header-spacer"></div>

      <div>
        <p className="head">Stay Updated with Trendy News</p>
      </div>

      {/* News Container */}
      <div className="newsContainer">
        {newsData.length > 0 ? (
          newsData.map((article, index) => <Card key={index} data={article} />)
        ) : (
          <p className="loading">{noDataMessage || 'No News Available'}</p>
        )}
      </div>
    </div>
  );
};

export default Newsapp;
