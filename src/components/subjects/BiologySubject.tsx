'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';
import {CheckCircle2, Clock, DollarSign, Star, Zap, BookOpen, Users, Check, Timer, GraduationCap} from 'lucide-react';
interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function BiologySubject({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md font-semibold">
                <Check size={18} />
                Top-Rated UK Biology Experts
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Online Biology Tutor <br />
                <span className="text-royal-purple">in the UK</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-sans">
                Empowering students from Year 1 to 13 with bespoke 1-on-1 expert tutoring. Master complex biological concepts with patience and personal guidance tailored to your learning pace.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="px-8 py-4 bg-royal-purple text-white rounded-xl font-headline-md text-body-md hover:shadow-lg transition-all active:scale-95 font-bold cursor-pointer"
                >
                  Book Free Trial Lesson
                </button>
                <button
                  onClick={() => onNavigate('a-levels')}
                  className="px-8 py-4 border-2 border-royal-purple text-royal-purple rounded-xl font-headline-md text-body-md hover:bg-soft-gray transition-all active:scale-95 font-bold cursor-pointer"
                >
                  View Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-green opacity-10 rounded-full blur-3xl"></div>
              <div className="rounded-[32px] overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-auto object-cover aspect-[4/3]"
                  alt="Biology tutoring session"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAExIKcbqU4rooTh5sz6XWvaTAjQBlVwfsTIDRIO1qR8TdezksXSDUmiyGk2GAGs-6POud-_sXN8xWvEBs6PVjLPW_n_B6a6L7-YpTG0Z7WL5LVHMIYNOXlVhoYTB6cAv_KZi1SECk_HqllGSZpgGcVTl3Cvl7lI-IuKerlmEsD3NNncyUrzCTSd-FgU_X2hYvK9V5-0SEwjtXXGGOlv7xP92lmRIN31N77vTDe3MT2Rfvqq1H2gf9fTsW-JNJte36Nad-ha0p3SRuyTO0"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 border border-white/40 shadow-lg">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                  </div>
                  <p className="text-label-md font-label-md text-charcoal font-semibold">Joined by 500+ UK students this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Why Choose TutorPro Biology?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">We provide more than just lessons; we provide a clear pathway to academic excellence through a personal and patient approach.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Flexible Timings */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-8px] transition-transform duration-300 border border-outline-variant/30">
              <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8">
                <Clock size={32} className="text-primary" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Flexible Timings</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Book sessions that fit your busy schedule, whether it's after school, weekends, or during holidays.</p>
            </div>
            {/* Affordable Rates */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-8px] transition-transform duration-300 border border-outline-variant/30">
              <div className="w-14 h-14 bg-secondary-fixed-dim/20 flex items-center justify-center rounded-2xl mb-8">
                <DollarSign size={32} className="text-secondary" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Affordable Rates</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Premium 1-on-1 expert tutoring at competitive rates, ensuring quality education is accessible to everyone.</p>
            </div>
            {/* Superior Tutoring */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-8px] transition-transform duration-300 border border-outline-variant/30">
              <div className="w-14 h-14 bg-tertiary-fixed flex items-center justify-center rounded-2xl mb-8">
                <Star size={32} className="text-tertiary" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Superior Tutoring</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Our tutors are vetted specialists who simplify complex biological molecules and systems with clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus Section */}
      <section className="py-24 bg-white">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal leading-tight font-bold">
                Tailored Learning Paths <br />
                <span className="text-royal-purple">for Every Level</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">From the basics of life to advanced genetic engineering, we cover the full spectrum of the UK Biology curriculum.</p>
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-royal-purple">
                  <span className="font-bold text-royal-purple">01</span>
                  <span className="font-label-md text-charcoal font-semibold">Elementary School (KS1-2)</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                  <span className="font-bold text-outline-variant group-hover:text-royal-purple">02</span>
                  <span className="font-label-md text-on-surface-variant group-hover:text-charcoal font-medium">Middle School / Lower Secondary (KS3)</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                  <span className="font-bold text-outline-variant group-hover:text-royal-purple">03</span>
                  <span className="font-label-md text-on-surface-variant group-hover:text-charcoal font-medium">GCSE / A-Level (KS4-5)</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-surface-container-low rounded-[24px] border border-outline-variant/20 hover:border-royal-purple/30 transition-all">
                  <div className="font-label-sm text-royal-purple uppercase tracking-widest mb-4 font-semibold">Core Module</div>
                  <h4 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">Biological Molecules</h4>
                  <p className="font-body-md text-on-surface-variant">Carbohydrates, lipids, proteins, and the foundation of biochemistry.</p>
                </div>
                <div className="p-8 bg-surface-container-low rounded-[24px] border border-outline-variant/20 hover:border-royal-purple/30 transition-all">
                  <div className="font-label-sm text-royal-purple uppercase tracking-widest mb-4 font-semibold">Core Module</div>
                  <h4 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">Cell Biology</h4>
                  <p className="font-body-md text-on-surface-variant">Structure, transport, and the mechanics of eukaryotic and prokaryotic cells.</p>
                </div>
                <div className="p-8 bg-surface-container-low rounded-[24px] border border-outline-variant/20 hover:border-royal-purple/30 transition-all">
                  <div className="font-label-sm text-royal-purple uppercase tracking-widest mb-4 font-semibold">Core Module</div>
                  <h4 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">Energy Transfers</h4>
                  <p className="font-body-md text-on-surface-variant">Photosynthesis and respiration: how life powers itself at every scale.</p>
                </div>
                <div className="p-8 bg-royal-purple text-white rounded-[24px] shadow-lg flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-4 font-bold">Ready to Master Biology?</h4>
                    <p className="opacity-90">Our A-Level specialists are ready to guide you through Mass Transport and Biodiversity.</p>
                  </div>
                  <button
                    onClick={() => onNavigate('trial')}
                    className="inline-flex items-center gap-2 mt-6 font-label-md group font-bold text-white cursor-pointer"
                  >
                    Learn More 
                    <LigatureIcon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="p-8 bg-surface-container-low rounded-[24px] border border-outline-variant/20 sm:col-span-2 flex flex-wrap gap-4">
                  {['Genetic Information', 'Organisms & Environment', 'Mass Transport', 'Biodiversity', 'Homeostasis'].map((mod) => (
                    <span key={mod} className="px-4 py-2 bg-white rounded-full text-label-md font-label-md text-royal-purple border border-royal-purple/10 font-medium">
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-20 md:py-24 bg-surface-container-low relative overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <img
                  className="rounded-[32px] shadow-xl w-full h-auto object-cover"
                  alt="Tutor with student"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRC__PBhMWhhQVNmhZE09HgqI91B2ppQ2McuATOec9l40EqCIOjZl3H5qREvc-jObtSebLve3KyCaFwCqvCc3ckb-vvNCboGMnscNEpewNLBswyYXPsAVw8RzLZZaIf5XuNw2GCkh5RA9V4pTE7RgCwN2bma-vJ62jH5RjCo3s3UPo0lCeSRlHQklchR2oyCZ8p_uFlkQWa05pV2cJdU70uuLMLk0VYjQTFNsRtnyDrsC2l_-zrDn8hg"
                />
                <div className="absolute -bottom-8 -right-8 p-6 bg-white rounded-2xl shadow-lg border border-outline-variant flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md font-bold text-charcoal">98%</div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-tighter font-semibold">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">
                Qualified Biology Tutors <br />
                <span className="text-royal-purple">Trusted by Parents</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-sans">
                Our tutors aren't just subject experts—they're mentors. Each tutor undergoes a rigorous vetting process to ensure they possess the patience and communication skills needed to transform a student's confidence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-lime-green mt-1" />
                  <span className="font-body-md text-charcoal font-medium">Enhanced DBS Checked &amp; Fully Vetted</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-lime-green mt-1" />
                  <span className="font-body-md text-charcoal font-medium">Oxford, Cambridge &amp; Russell Group Graduates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-lime-green mt-1" />
                  <span className="font-body-md text-charcoal font-medium">Specialists in UK Exam Boards (AQA, OCR, Edexcel)</span>
                </li>
              </ul>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-10 py-5 bg-royal-purple text-white rounded-2xl shadow-lg hover:shadow-xl transition-all font-headline-md font-bold cursor-pointer"
                >
                  Learn More About Our Vetting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Teachers */}
      <section className="py-20 md:py-24 bg-white">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Meet Our Biology Specialists</h2>
              <p className="font-body-md text-on-surface-variant font-medium">Experienced educators dedicated to your child's biological breakthroughs.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Teacher Card 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Dr. Sarah Thompson"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2IEutmlohfAKkA7GszvgP6HixwayaGzDyny_YeKdx6GPEFOTM-4opKDZCYyZuCvdRt-pzLWznoRd46ogrUPMZarvm83H5VomQsJPBDxM5UuRMKcETniIiDTFadcAfbdH1UvA7FN4eYyaBvS4p3xZEGYQDTqawMbX3mRVK7aXKhzDA1iiRCtzRjuKQiiI0yDfwMk6ZFTa5hJ_IeufqobEBK91sxQZ6yDZvpf9cc9nfPlcqprdHSZ3_KQ"
                />
              </div>
              <h4 className="font-headline-md text-headline-md mb-1 font-bold text-charcoal">Dr. Sarah Thompson</h4>
              <p className="font-label-md text-royal-purple uppercase tracking-wider mb-2 font-bold">Genetics Specialist</p>
              <p className="text-on-surface-variant font-body-md">10+ years experience, PhD in Biological Sciences.</p>
            </div>
            {/* Teacher Card 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Marcus Reed"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBccsan1ry7Qzyx6DS1glbyYEV43CHeyzarsGE8K2nw8eLJLuVjSLLkal05Ff382SO2OgKAEQK8sHcMlzDjpTcIB-o167I0wKVy-agzQtAMSD2LdREPNzfRmGCt3KFMrXtvJT7mSbWnelLwSJbi3d6BPjSueMaosNj25cQIPXC2-zP7HoDpj4MZFG12-1LlN3D24MlXLM5hnNRtBUJjlBg6pcEwOyqYlL3W1R7DYxh3KPpi0psn8vdt2Q"
                />
              </div>
              <h4 className="font-headline-md text-headline-md mb-1 font-bold text-charcoal">Marcus Reed</h4>
              <p className="font-label-md text-royal-purple uppercase tracking-wider mb-2 font-bold">A-Level Expert</p>
              <p className="text-on-surface-variant font-body-md">GCSE/A-Level examiner with a focus on OCR/AQA.</p>
            </div>
            {/* Teacher Card 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Emily Chen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMMNO-CtrwPtiUNfT-cMcJ2BfiKnOxPyGCzXpCBg0U4FMwtwghBc-xiSNxYEVwYRlIZ71HtPwSDaJeFQwvNpOSxdnVnHTXbRUxYaPynqxlcEPpSSzbneaxSHtmxqxRvwYvXxYT46rUrNTRhKHbdt0gQUMcekJ_uyFNQrwqaXVgPdRsCXOmjXNrECR9EQc59cgEQMPTYuygppMC3q7zrEgrTfiBmPe3x7LkXKvAD0XVxViT1ytLJ__X4w"
                />
              </div>
              <h4 className="font-headline-md text-headline-md mb-1 font-bold text-charcoal">Emily Chen</h4>
              <p className="font-label-md text-royal-purple uppercase tracking-wider mb-2 font-bold">GCSE Specialist</p>
              <p className="text-on-surface-variant font-body-md">Master's from Cambridge, specialized in interactive learning.</p>
            </div>
            {/* Teacher Card 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Prof. James Miller"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-VGbdHltobCxXwMacfg86qKjnIFvggCZ-AqyWOPrl8OdpuzlmxP54aSeyEJF_mLmP5I-6_E_-tuhey6RXxdeM-EoC5gMeVkoGBb8oY3YRyrmHkafc-JEImJZdtM3WdNxZEP87yelpvHmqM9OEPZ89D2CahcYp2qpfZwaFtDK2jkcgdwlf7MusRBjTWRWqeP2n4o_irs-v0jzhWqMlk1hrzuvq6ltoj4tBeAHEMKHa9tjAucFsdfz94A"
                />
              </div>
              <h4 className="font-headline-md text-headline-md mb-1 font-bold text-charcoal">Prof. James Miller</h4>
              <p className="font-label-md text-royal-purple uppercase tracking-wider mb-2 font-bold">Biochemistry Expert</p>
              <p className="text-on-surface-variant font-body-md">Retired Head of Science at a top UK Independent School.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white font-bold">Let's Learn Together!</h2>
              <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto font-sans">
                Your journey to Biology mastery starts with a single step. Join the hundreds of students in the UK achieving their target grades today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <button
                  onClick={() => onNavigate('trial')}
                  className="px-12 py-5 bg-lime-green text-charcoal rounded-2xl font-headline-md hover:shadow-xl hover:scale-105 transition-all font-bold cursor-pointer"
                >
                  Book Free Trial
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-12 py-5 border-2 border-white text-white rounded-2xl font-headline-md hover:bg-white/10 hover:scale-105 transition-all font-bold cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
