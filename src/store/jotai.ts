import { fetchDocuments } from '../components/api/documents/fetchDocuments';
import { atom } from 'jotai';

export type MarkdownData = {
  createdAt: string;
  name: string;
  content: string;
};

export const documentsAtom = atom<MarkdownData[]>([]);

export const fetchMarkdownDocumentsAtom = atom(
  (get) => get(documentsAtom),
  async (_get, set) => {
    const documents = await fetchDocuments();
    set(documentsAtom, documents || []);
  }
);

