import { Button } from './styles';

import Profile from '../../assets/profile.jpeg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

function ServerButton({ selected, isHome, hasNotifications, mentions }: Props) {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Profile} />}
    </Button>
  );
}

export default ServerButton;
