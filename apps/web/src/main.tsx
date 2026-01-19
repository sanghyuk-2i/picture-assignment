import '@repo/ui/styles.css';

import { Button } from '@repo/ui';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div>
    <Button>Click me</Button>
  </div>
);

createRoot(document.getElementById('app')!).render(<App />);
