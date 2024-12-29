import { AuthMode } from '@/entites/session';
import { AuthenticationPage } from '@/pages/authentication-page';

export default function Home() {
  return <AuthenticationPage mode={AuthMode.SignUp} />;
}
