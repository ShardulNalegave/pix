import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '../context/theme';
import { Page } from '../components/page';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { theme, setTheme } = useTheme();

  return (
    <Page>
      <div className='p-[30px]'>
        <h1 className='text-2xl'>Hello, World!</h1>
        <h1>{theme}</h1>
        <button onClick={() => {
          if (theme === 'light') setTheme('dark')
          else setTheme('light');
        }}>Change Theme</button>
        <div className='h-[100000000000000px]'></div>
      </div>
    </Page>
  );
}
