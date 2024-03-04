import React, { useEffect, useState } from 'react';

const News = () => {
    const [mynews, setMynews] = useState([]);

    const fetchData = async () => {
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=68230a40d83f4f86ab9dbc1a3e7beb5c");
        let data = await response.json();
        setMynews(data.articles);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {mynews.map((ele, index) => (
                <div key={index} class="card" style={{ width: '18rem' }}>
                    <img src={ele.urlToImage==null?"https://dims.apnews.com/dims4/default/b306dd0/2147483647/strip/true/crop/2463x1385+0+128/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0c%2Fe6%2F48a3d10bdb945fa8f61e7176d80f%2F1f59a117e2d14ec6a7b585b91d147b51":ele.urlToImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{ele.author==null?"balu":ele.author}</h5>
                        <p class="card-text">{ele.title}</p>
                        <a href={ele.url} target="_blank" class="btn btn-primary">
                            Read More
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;

