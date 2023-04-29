import { Button } from './components/ui/Button/Button';
import Layout from './components/Layout';
import DarkModeSwitch from './components/DarkModeSwitch';
import { FlexBoxRow } from './components/ui/FlexBoxRow/FlexBoxRow';

function App() {
  return (
    <Layout>
      {/* <FlexBoxRow className='items-center gap-3 tablet:gap-5'>
        <DarkModeSwitch isDarkMode={true} toggleTheme={() => console.log('hi')} />
        <MoonIcon className={'stroke-orange-800'} />
      </FlexBoxRow> */}
      <Button buttonTitle='newDocument' />
    </Layout>
  );
}

export default App;

