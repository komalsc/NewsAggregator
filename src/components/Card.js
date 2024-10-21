import React from 'react';

const Card = ({ data }) => {
    if (!data) {
        return <p>No data available</p>;
    }

    return (
        <div className="card" style={{ width: '300px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
            {data.urlToImage && (
                <img
                    src={data.urlToImage}
                    alt={data.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
            )}
            <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{data.title}</h2>
            {data.author && <p style={{ fontSize: '14px', color: '#555' }}><strong>Author:</strong> {data.author}</p>}
            {data.publishedAt && <p style={{ fontSize: '12px', color: '#777' }}><strong>Published:</strong> {new Date(data.publishedAt).toDateString()}</p>}
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>{data.description}</p>
            <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', backgroundColor: '#007BFF', padding: '5px 10px', borderRadius: '4px', textDecoration: 'none' }}
            >
                Read More
            </a>
        </div>
    );
};

export default Card;
