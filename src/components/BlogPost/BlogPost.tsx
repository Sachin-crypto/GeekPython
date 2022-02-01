import { Article } from '../../models/hashnode'
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import './BlogPost.css'
import { HashnodeArticleUrl } from '../../external-links';

interface Props {
    article: Article
}

function BlogPost(props: Props) {
    const { article } = props;
    let html = article.content;
    if (containsMaliciousCode(html)) {
        html = "Unable to display article";
    }
    
    return (
        <>
        <div className='section-border'>
            <div className='article'>
                <img src={article.coverImage} alt="coverImage" />
                <h1 id='article-title'>{article.title}</h1>
                <BlogPostInfo article={article}/>
                <article dangerouslySetInnerHTML={{ __html: removeClasses(html) }} />
            </div>
        </div>
        <div className='section-border'>
            <div className='article-footer'>
                <CommentOutlinedIcon htmlColor='#8B5CF6' fontSize='large'/> 
                <a href={HashnodeArticleUrl(article.slug)} className='comment'>Share your reaction or Leave a reply.</a>
            </div>
        </div>
        </>
    )
}

function containsMaliciousCode(html: string) {
    if (html.indexOf("<script>") > -1) {
        return true;
    }
    return false;
}

function removeClasses(html: string): string {
    const words = html.split(' ');
    const filteredWords: string[] = [];

    for (let word of words) {
        if (word.startsWith("class=")){
            let brokenDownWord = word.split('"');
            const [, , ...rest] = brokenDownWord;
            let wordWithoutClass = rest.join('"');
            filteredWords.push(wordWithoutClass);
        }
        else {
            filteredWords.push(word);
        }
    }
    return filteredWords.join(' ');
}

export default BlogPost