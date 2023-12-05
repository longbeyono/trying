import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Navs.module.scss';
import NavItem from './NavItem';
import {
    BagIcon,
    BasketballIcon,
    CarIcon,
    DramaIcon,
    EarthIcon,
    EntertainmentIcon,
    GlassIcon,
    HouseIcon,
    MicroIcon,
    SocietyIcon,
    TreeIcon,
} from '~/component/Icons';

const cx = classNames.bind(styles);

function Navs() {
    const [showNav, setShowNav] = useState(1);

    return (
        <div className={cx('wrapper')}>
            <NavItem
                className={cx({ active: showNav === 1 })}
                icon={<MicroIcon width="2.4rem" />}
                title={'Dance and Music'}
                onClick={() => setShowNav(1)}
            />
            <NavItem
                className={cx({ active: showNav === 2 })}
                icon={<BasketballIcon width="2.4rem" />}
                title={'Sport'}
                onClick={() => setShowNav(2)}
            />
            <NavItem
                className={cx({ active: showNav === 3 })}
                icon={<EntertainmentIcon width="2.4rem" />}
                title={'Entertainment'}
                onClick={() => setShowNav(3)}
            />
            <NavItem
                className={cx({ active: showNav === 4 })}
                icon={<DramaIcon width="2.4rem" />}
                title={'Comedy and Drama'}
                onClick={() => setShowNav(4)}
            />
            <NavItem
                className={cx({ active: showNav === 5 })}
                icon={<CarIcon width="2.4rem" />}
                title={'Autos'}
                onClick={() => setShowNav(5)}
            />
            <NavItem
                className={cx({ active: showNav === 6 })}
                icon={<BagIcon width="2.4rem" />}
                title={'Fashion'}
                onClick={() => setShowNav(6)}
            />
            <NavItem
                className={cx({ active: showNav === 7 })}
                icon={<GlassIcon width="2.4rem" />}
                title={'Lifestyle'}
                onClick={() => setShowNav(7)}
            />
            <NavItem
                className={cx({ active: showNav === 8 })}
                icon={<TreeIcon width="2.4rem" />}
                title={'Pet and Nature'}
                onClick={() => setShowNav(8)}
            />
            <NavItem
                className={cx({ active: showNav === 9 })}
                icon={<HouseIcon width="2.4rem" />}
                title={'Relationships'}
                onClick={() => setShowNav(9)}
            />
            <NavItem
                className={cx({ active: showNav === 10 })}
                icon={<SocietyIcon width="2.4rem" />}
                title={'Society'}
                onClick={() => setShowNav(10)}
            />
            <NavItem
                className={cx({ active: showNav === 11 })}
                icon={<EarthIcon width="2.4rem" />}
                title={'Information'}
                onClick={() => setShowNav(11)}
            />
        </div>
    );
}

export default Navs;
