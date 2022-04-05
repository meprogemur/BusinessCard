
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/insta.png';
import github from '../images/github.png';

export default function Footer(props) {
    const { view } = props;
    const mode = view ? 'footer-dark' : 'footer-white';
    return (
        <div className={"footer " + mode} >
            <a href="https://twitter.com/soumyaghosh2001">
                <img src={twitter} className="social" />
            </a>
            <a href="https://www.facebook.com/soumyadip.ghosh.1000">
                <img src={facebook} className="social" />
            </a>
            <a href="https://www.instagram.com/ghosh.js/">
                <img src={instagram} className="social" />
            </a>
            <a href="https://github.com/meprogemur">
                <img src={github} className="social" />
            </a>
        </div>
    )
}