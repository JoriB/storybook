import { configure } from '@storybook/preact';
import { setOptions } from '@storybook/addon-options';

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

const loadStories = () => {
  const requireContext = require.context('../src', true, /\.stories\.js$/);

  requireContext.keys().forEach(filename => requireContext(filename));
};

configure(loadStories, module);
