import documents from '../../../config/data.json';
import { MarkdownData } from '../../../store/jotai';
export const fetchDocuments = async (): Promise<MarkdownData[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(documents), 1000));
};

