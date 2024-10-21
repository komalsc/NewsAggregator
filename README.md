# News Aggregator App

This is a React-based news aggregator app that allows users to search and filter news articles by title, author, date, and news source. It integrates data from multiple news APIs and provides users with the latest news in a streamlined interface.

## Features

- **Search News by Title**: Users can input a search term to filter news articles by their titles.
- **Filter by Author**: Users can filter articles based on the author's name.
- **Filter by Date**: Users can pick a specific date to view news articles published on that date.
- **Choose News Source**: Users can select a news source (e.g., Open News, BBC News, India News) to fetch relevant articles.
- **Custom No Data Messages**: If no articles match the filters, the app will display custom messages like:
  - `No news articles found with the title: "search-term"`
  - `No news articles found for the author: "author-name"`
  - `No news articles found for the selected date: "date"`

## Technology Stack

- **React.js**: Frontend library used for building the user interface.
- **CSS**: For styling the app.
- **React Hooks**: Utilized for managing state (`useState`) and side effects (`useEffect`).
- **APIs**: Mock data from `OpenNews`, `BBCNews`, and `IndiaNews`.

## How to Use

### Prerequisites

- Node.js and npm should be installed on your machine.

### Setup and Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/news-aggregator-app.git
    cd news-aggregator-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the App**:
    ```bash
    npm start
    ```
   The app will be available at `http://localhost:3000` in your browser.

### Folder Structure

├── public │ └── index.html ├── src │ ├── API_DATAS │ │ ├── BbcNews.js │ │ ├── IndiaNews.js │ │ └── OpenNews.js │ ├── components │ │ ├── Card.js │ │ ├── Newsapp.js │ ├── App.js │ ├── index.js │ └── Newsapp.css ├── package.json └── README.md


### Components

- **Newsapp.js**: The main component that manages the news data, filters, and user inputs.
- **Card.js**: A reusable card component that renders individual news articles.
- **API_DATAS Folder**: Contains mock data for Open News, BBC News, and India News.

### How to Add New News Sources

To add a new news source:
1. Create a new JavaScript file inside the `API_DATAS` folder (e.g., `NewSource.js`).
2. Export an array of news articles similar to the existing mock data.
3. Update the `getData` function in `Newsapp.js` to include this new source.

### Custom No-Data Messages

If no articles match the applied filters, custom messages will appear:
- When no articles match the search term, the message will indicate that no articles with the given title were found.
- If the author filter fails to match, it will show a message like `No articles found for author: "author-name"`.
- When no articles match the selected date, a message saying `No articles found for the selected date: "date"` will be shown.

## Issues & Contributing

Feel free to submit issues or contribute to this project by submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open-source and available under the [MIT License](LICENSE).
