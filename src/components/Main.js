
import email from '../images/email.png';
import linkedin from '../images/link.png';

export default function Main(props) {
    const { view } = props;
    const mode = view ? 'main-dark' : 'main-white';
    return (
        <div className={"main " + mode}  >
            <h3>Soumyadip Ghosh</h3>
            <h4 className='prof'>Backend Developer</h4>
            <h4 className="web">soumya.website</h4>
            <div className="links">
                <a href="mailto:soumyadipg04@gmail.com">
                    <h4 className='email'>
                        <img src={email} className='proso1' />
                        Email
                    </h4>
                </a>
                <a href="https://www.linkedin.com/in/soumyadip-ghosh-6050921aa/">
                    <h4 className='linked'><img src={linkedin} className='proso' /> LinkedIn</h4>
                </a>
            </div>
            <div className="writ">
                <h4>About</h4>
                <p>I am a backend developer with a particular interest
                    in making things simple and automating daily tasks.
                    I try to keep up with security and best practices,
                    and am always looking for new things to learn.</p>
                <h4>Interests</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )

}