import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton mentions={1} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={16} />
      <ServerButton />
      <ServerButton mentions={8} />
      <ServerButton />
    </Container>
  );
}

export default ServerList;
