import Layout from './components/Layout';
import { Button } from './components/ui/Button/Button';
import { FlexBoxColumn } from './components/ui/FlexBoxColumn/FlexBoxColumn';
import { FlexBoxRow } from './components/ui/FlexBoxRow/FlexBoxRow';
import { useState } from 'react';

function App() {
  const [isPreview, setIsPreview] = useState<boolean>(false);
  return (
    <Layout>
      <FlexBoxColumn onClick={() => setIsPreview((prev) => !prev)} className='cursor-pointer'>
        <FlexBoxRow intent={'flexBetweenCenter'} className='bg-grey-1 py-3 px-4'>
          <h6 className='uppercase text-grey-4'>{isPreview ? 'preview' : 'markdown'}</h6>
          <Button
            buttonTitle={isPreview ? 'hidePreview' : 'showPreview'}
            intent={isPreview ? 'hidePreview' : 'showPreview'}
          />
        </FlexBoxRow>
      </FlexBoxColumn>
    </Layout>
  );
}

export default App;

