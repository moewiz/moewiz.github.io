/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'portfolio.components.Footer.license.message',
    defaultMessage: 'MIT license.',
  },
  authorMessage: {
    id: 'portfolio.components.Footer.author.message',
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
