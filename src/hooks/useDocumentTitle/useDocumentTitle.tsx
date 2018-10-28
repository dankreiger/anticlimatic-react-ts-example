import { useEffect } from 'react';

/**
 *
 * @param {string} title Document title
 */

export default function useDocumentTitle(title: string) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = title;
  });
}
