import { FlexBoxColumn } from '../../components/ui/FlexBoxColumn/FlexBoxColumn';
import { MarkdownData } from '../../store/jotai';

interface DocumentDetailProps {
  document: MarkdownData;
}
export const DocumentDetail: React.FC<DocumentDetailProps> = ({ document }) => {
  console.log({ doc: document?.content });
  return <FlexBoxColumn>{document?.content}</FlexBoxColumn>;
};

