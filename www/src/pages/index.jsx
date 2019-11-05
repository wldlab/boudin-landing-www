// vendors
import React from 'react';

// components
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Hero from '../views/Hero';
import Locations from '../views/Locations';
import Menu from '../views/Menu';

const IndexPage = () => (
  <Layout>
    <SEO />

    <Hero />

    <Locations />

    <Menu />
  </Layout>
);

export default IndexPage;
