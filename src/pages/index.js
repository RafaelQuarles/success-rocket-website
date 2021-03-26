import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import HeroWaves from '../svg/HeroWaves';
import ContactForm from '../components/contactForm';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import act from '../assets/features/actions.png';
import chec from '../assets/features/check-in.png';
import coll from '../assets/features/collaboration.png';
import dash from '../assets/features/dashboard.png';
import prof from '../assets/features/profile.png';

import laps from '../assets/hero/laptop_screen.png';
import mobs from '../assets/hero/front_mobile.png';

import styled from 'styled-components';

const Parent = styled.div`
  position: relative;
`;

const StyledHeroLaptop = styled.img`
  position: relative;
  z-index: -1;
`;

const StyledHeroMobile = styled.img`
  position: absolute;
  top: 2rem;
  left: 20rem;
  @media (max-width: 768px) {
    width: 40%;
    left: 14rem;
  }
`;

const StyledFeatureImg = styled.img`
  margin: auto;
  margin-bottom: 20px;
  height: 5rem;
`;

export default () => (
  <Layout>
    <HeroWaves />
    <section className="pt-20 lg:px-12 md:pt-32">
      <div className="container mx-auto lg:flex">
        <div className="lg:pr-20 text-left lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold leading-none">
            Employee Engagement + Employee Empowerment = Employee Success
          </h1>
          <p className="lg:text-2xl mt-6 font-light">
            Empower employees with collaborative interactions so they can accurately capture where
            the bullseye of success is, and define the roadmap to get there. And further, engage
            employees to connect-the-dots on how their success impacts the success of their
            department, as well as their organization.
          </p>
          <div className="mt-8 md:mt-12 focus:outline-none">
            <AnchorLink href="#contact">
              <Button color="blue">View Demo</Button>
            </AnchorLink>
          </div>
          <p className="mt-4 text-gray-600"></p>
        </div>
        <Parent className="lg:w-1/2">
          <StyledHeroLaptop src={laps} alt="" />
          <StyledHeroMobile src={mobs} alt="" />
        </Parent>
      </div>
    </section>
    <section id="features" className="py-20 lg:px-12 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col md:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="p-4 min-h-400">
              <StyledFeatureImg src={dash} alt="" />
              <p className="font-semibold text-xl">Dashboard</p>
              <p className="mt-4">
                Clean and super-neat visual manager and employee dashboards providing up-to-date
                action and result activity for each team member, as well as the department as a
                whole.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="p-4 min-h-400">
              <StyledFeatureImg src={act} alt="" />
              <p className="font-semibold text-xl">Actions</p>
              <p className="mt-4">
                Capturing of ongoing performance actions that can be adjusted throughout the year to
                stay current with the key business imperatives. Plus easy toggling to reflect when
                actions are completed.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="p-4 min-h-400">
              <StyledFeatureImg src={chec} alt="" />
              <p className="font-semibold text-xl">Check In</p>
              <p className="mt-4">
                Employee health “check-in” points to convey how things are going, and what comes
                next in the employees development.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="p-4 min-h-400">
              <StyledFeatureImg src={coll} alt="" />
              <p className="font-semibold text-xl">Collaboration</p>
              <p className="mt-4">
                Imbedded counters to reflect and track how many engagement discussions take place
                during the year.
              </p>
              <p> </p>
              <p> Possibly 360° Feedback</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="p-4 min-h-400">
              <StyledFeatureImg src={prof} alt="" />
              <p className="font-semibold text-xl">Profile</p>
              <p className="mt-4">
                If we have a profile feature we can highlight that here. The advantages to having
                users update their own profile is to take the load off of the administrator,
                especially when it comes to uploading user photos.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <div id="contact"></div>
    <section className="container mx-auto  my-20 py-24 bg-gray-200 md:rounded-lg text-center">
      <h3 className="px-8 text-5xl font-semibold">Ready to measure success?</h3>
      <p className="px-8 mt-8 text-xl font-light">
        Contact us here to start your Success Rocket experience.
      </p>

      <div className="px-8 max-w-2xl text-left mx-auto">
        <ContactForm />
      </div>
    </section>
  </Layout>
);
