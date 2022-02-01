import { GitHubUrl, HashnodeBaseUrl, InstagramUrl, TwitterUrl } from '../../external-links'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <span><a href={GitHubUrl()}>GitHub</a></span>
            <span><a href={HashnodeBaseUrl()}>Hashnode</a></span>
            <span><a href={InstagramUrl()}>Instagram</a></span>
            <span><a href={TwitterUrl()}>Twitter</a></span>
            <span>© geekpython 2022-23</span>
        </footer>
    )
}

export default Footer