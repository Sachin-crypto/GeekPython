import { useEffect, useState } from 'react'
import { ArticleSummary } from '../models/hashnode'
import '../components/BlogGrid/BlogGrid.css';
import Articles from '../components/Articles/Articles';
import '../components/Articles/Articles.css';
import Header from '../components/Header/Header';
import '../components/Header/Header.css';
import BlogGrid from '../components/BlogGrid/BlogGrid';
import { HashnodeClient } from '../services/hashnode_client';
import '../components/MainPage/MainPage.css'


function AllArticles() {
    const [articles, setArticles] = useState<ArticleSummary[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function func(): Promise<void> {
            const client = new HashnodeClient();
            const result = await client.fetchBlogPosts(); 
            const articles = result;

            setArticles(articles);
            setLoading(false);
        }
        func();
    }, []); // [] means only load once on initial page render

    return (
        <>
        <Header shadow={false}/>
        <Articles />
        <div className='main-page'>
            <h2 className='heading'>Latest articles</h2> 
        </div>
        { loading 
            ? <div className='centered-div loading'>Loading articles for you...</div> 
            : <BlogGrid articles={articles} /> }
        </>
    )
}

export default AllArticles
