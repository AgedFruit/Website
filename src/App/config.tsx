import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'James Elrick',
    aria: 'My name is James Elrick',
  },
  title: {
    display: 'Junior Digital Developer',
    aria: 'I am a Junior Digital Developer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/AgedFruit',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/james-elrick-5207a219b/',
    },
    {
      display: 'CV',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/drive/folders/1EYlmJtHXvgFu3X1b_5PRS-bsWcBfdj3J',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:james@agedfruit.com',
    },
  ],
};

export default config;
