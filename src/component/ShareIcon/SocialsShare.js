import classNames from 'classnames/bind';

import styles from './ShareIcon.module.scss';
import { Wrapper as SocialsWrapper } from '../Popper';
import SocialItem from './SocialItem';
import {
    CopyIcon,
    EmbedIcon,
    FacebookIcon,
    LinkedlnIcon,
    RedditIcon,
    SendIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsApp,
} from '../Icons';

const cx = classNames.bind(styles);

function SocialsShare() {
    return (
        <SocialsWrapper>
            <div className={cx('socials-share')}>
                <SocialItem icon={<EmbedIcon />} label={'Embed'} />
                <SocialItem icon={<SendIcon />} label={'Send to friend'} />
                <SocialItem icon={<FacebookIcon />} label={'Share to Facebook'} />
                <SocialItem icon={<WhatsApp />} label={'Share to WhatsApp'} />
                <SocialItem icon={<CopyIcon />} label={'Copy link'} />
                <SocialItem icon={<TwitterIcon />} label={'Share to Twitter'} />
                <SocialItem icon={<LinkedlnIcon />} label={'Share to Linkedln'} />
                <SocialItem icon={<RedditIcon />} label={'Share to Reddit'} />
                <SocialItem icon={<TelegramIcon />} label={'Share to Telegram'} />
            </div>
        </SocialsWrapper>
    );
}

export default SocialsShare;
