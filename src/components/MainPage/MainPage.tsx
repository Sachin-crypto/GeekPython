import { useEffect, useState } from 'react'
import { ArticleSummary } from '../../models/hashnode';
import { HashnodeClient } from '../../services/hashnode_client';
import BlogGrid from '../BlogGrid/BlogGrid';
import './MainPage.css'

function MainPage() {
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
        <div className='section-border'>
            <div className='main-page'>
            <h2 className='heading'>About the author</h2>
            <p className='text'>Hi, I am Sachin Pal and I am a Python developer.<br />
                 My areas of interests are writing Python code, Machine Learning and Deep Learning.<br />
                 As a developer, my focus is always on writing readable and reliable code.<br />
                 It is an initiative from me to provide useful and helpful resources to my fellow wanna be developers.
            </p>
            <p className='text'>You can find me on GitHub, Hashnode, Instagram and Twitter.</p>
            </div>
        </div>
        <div className='main-page'>
            <h2 className='heading'>Latest articles</h2> 
        </div>
        { loading 
            ? <div className='centered-div loading'>Loading blog posts...</div> 
            : <BlogGrid articles={articles} /> }
        </>
    )
}

export default MainPage