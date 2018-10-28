import { useEffect } from 'react';

export function useDocumentTitle(title: string) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = title;
  });
}
