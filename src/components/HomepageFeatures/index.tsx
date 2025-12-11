import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Start Reading',
    description: 'Jump straight into your AI-powered book chapters.',
    link: '/docs/chapter-1-introduction',
  },
  {
    title: 'Learn How it Works',
    description: 'Explore the setup, customization, and interactive features.',
    link: '/docs/chapter-2-setup',
  },
  {
    title: 'Get Inspired',
    description: 'See how AI transforms content creation and book publishing.',
    link: '/docs/chapter-3-theme-customization',
  },
];

function Feature({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary" to={link}>
          Go
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
