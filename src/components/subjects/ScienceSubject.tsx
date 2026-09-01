'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import {
  GraduationCap,
  Award,
  ArrowRight,
  Clock,
  Wallet,
  Star,
  Play,
  Quote,
  BookOpen,
  Route,
  Users,
  Target,
} from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ScienceSubject({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-background text-on-background font-body-md">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-container/10 px-4 py-2 rounded-full text-primary font-label-md text-label-md font-semibold">
              <GraduationCap size={16} />
              National Curriculum Year 1-10
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              Online Science Tutor <br />
              <span className="text-royal-purple">in the UK</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl font-sans">
              Get the Science help you need right now from highly qualified experts. We help you truly understand everything from basic biology to complex physics equations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md shadow-lg hover:shadow-primary/20 transition-all font-bold cursor-pointer"
              >
                Book Free Trial Lesson
              </button>
              <button
                onClick={() => onNavigate('a-levels')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-royal-purple/5 transition-all font-bold cursor-pointer"
              >
                View Pricing
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <img
                className="w-full h-full object-cover"
                alt="Tutoring session"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnHcE7PMc5_kJ_9ba0LvdjEp4CJE_264TMgW552Jchq5GcLPUZhFwcensCBa6K0BjI8nv1Kjasho7f8r3Pij2NBl0tGTty7Ks4kzxLEVR6BAR2l8C8MSyyGhZBXa_t_uSo-QtXGnNrqc_5MqvJUGMtH2J8Lw14YEa0z1e-qQM1xXa_J6FVDfzr5iGAly9zcHtXjCgcazs2cqbHS1VlXmnycEo8KiF7K8QkujBAcm-Wu6aCHZ4qdWuSFRphC692qqoVPVyFMi73CWiOuio"
              />
            </div>
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl max-w-xs bg-white/80 backdrop-blur-md border border-white/40">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-lime-green p-2 rounded-lg">
                  <Award size={20} className="text-charcoal" />
                </div>
                <span className="font-label-md text-label-md text-charcoal font-bold">98% Grade Improvement</span>
              </div>
              <p className="text-sm text-on-surface-variant">Proven results across GCSE &amp; A-Level Science subjects.</p>
            </div>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-royal-purple/5 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">What We Offer</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Superior quality tutoring designed for the modern UK student. We combine expertise with flexible technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-8">
                <Clock size={28} className="text-primary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">Flexible Timings</h3>
              <p className="text-on-surface-variant mb-6">Customize your schedule to fit your busy life. Easy rescheduling and 24/7 availability for urgent exam prep.</p>
              <button
                onClick={() => onNavigate('curriculum')}
                className="text-primary font-label-md text-label-md flex items-center gap-2 group font-bold cursor-pointer"
              >
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Card 2 */}
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-secondary-container/20 rounded-2xl flex items-center justify-center mb-8">
                <Wallet size={28} className="text-secondary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">Affordable Rates</h3>
              <p className="text-on-surface-variant mb-6">Premium tutoring shouldn't break the bank. Transparent pricing, discount packages, and a standard refund policy.</p>
              <button
                onClick={() => onNavigate('a-levels')}
                className="text-primary font-label-md text-label-md flex items-center gap-2 group font-bold cursor-pointer"
              >
                Fee Structure <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Card 3 */}
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-tertiary-fixed/30 rounded-2xl flex items-center justify-center mb-8">
                <Star size={28} className="text-tertiary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">Superior Quality</h3>
              <p className="text-on-surface-variant mb-6">Expert subject specialists who focus on basic study skills, comprehension, and homework efficiency.</p>
              <button
                onClick={() => onNavigate('about')}
                className="text-primary font-label-md text-label-md flex items-center gap-2 group font-bold cursor-pointer"
              >
                Meet Tutors <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Lesson Plans For Each Year</h2>
              <p className="text-on-surface-variant max-w-xl">Comprehensive coverage of the UK National Curriculum from Primary through to GCSE and A-Levels.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { year: 'Year 1', stage: 'Key Stage 1' },
              { year: 'Year 2', stage: 'Key Stage 1' },
              { year: 'Year 3', stage: 'Key Stage 2' },
              { year: 'Year 4', stage: 'Key Stage 2' },
              { year: 'Year 5', stage: 'Key Stage 2' },
              { year: 'Year 6', stage: 'SATs Prep' },
              { year: 'Year 7', stage: 'Key Stage 3' },
              { year: 'Year 8', stage: 'Key Stage 3' },
              { year: 'Year 9', stage: 'Pre-GCSE' },
              { year: 'Year 10', stage: 'GCSE Core' },
            ].map((item) => (
              <div
                key={item.year}
                onClick={() => onNavigate('trial')}
                className="group cursor-pointer"
              >
                <div className="bg-soft-gray p-8 rounded-3xl border border-transparent group-hover:border-royal-purple group-hover:bg-white transition-all duration-300 text-center">
                  <BookOpen size={22} className="text-royal-purple mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="block font-headline-md text-headline-md text-royal-purple mb-2 font-bold">{item.year}</span>
                  <span className="text-body-md text-on-surface-variant">{item.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-24 bg-surface relative overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              className="rounded-[48px] shadow-2xl w-full object-cover"
              alt="Classroom"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu5HfPlKVTgcPbXwLes0aId_UIpXWEah71gxFvE9iOzsIvn5c438ai9c1QYpBwMKSOlb1K9paVVHq25AZNT-gVR4o3U5xGKj4XGIxbEBM0nZ30tZLG9bRMPqBR1JyDUN8xw48EVWNHCxl6F5W_7caxKQXsNcZJtNoOJyibZY64_ZNKubr5LIwylWWYjhPPAWyHjIWfayClr2XxgO3oUDSko-50wEMhR0VwgVLmxHgt9Dmo5ydgoTcWWw"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play size={40} className="text-white" fill="currentColor" />
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">The Math Make Smart Method</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold flex items-center gap-2"><Route size={20} className="text-royal-purple" /> Personalised Paths</h4>
                  <p className="text-on-surface-variant">We devise a learning plan best suited to every individual's needs, recognizing that every student has a different capacity.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold flex items-center gap-2"><Users size={20} className="text-royal-purple" /> Expert UK Tutors</h4>
                  <p className="text-on-surface-variant">Our instructors are well-equipped to boost grades, covering all curriculums including Key Stages, GCSE, and A-Levels.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold flex items-center gap-2"><Target size={20} className="text-royal-purple" /> Exam-Focused Strategies</h4>
                  <p className="text-on-surface-variant">We use theory, demonstrations, and concise notes to ensure students don't just retain info but master the subject.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Trusted by Parents Across the UK</h2>
          <div className="flex justify-center gap-1 text-lime-green">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={20} fill="currentColor" stroke="none" />
            ))}
          </div>
          <p className="text-on-surface-variant mt-4 font-medium">Based on 500+ student success stories</p>
        </div>
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-surface p-10 rounded-3xl shadow-sm italic text-on-surface-variant relative">
            <Quote size={56} className="text-primary/10 absolute top-4 left-4" fill="currentColor" stroke="none" />
            <p className="relative z-10 mb-8 font-sans">"Finding the right science tutor was a tedious task until we found MMS. My son's interest in Biology has skyrocketed, and his predicted grades moved from a 5 to an 8!"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-variant"></div>
              <div>
                <p className="font-label-md text-label-md text-charcoal font-bold not-italic">Sarah Jenkins</p>
                <p className="text-sm opacity-70 not-italic">Parent from Manchester</p>
              </div>
            </div>
          </div>
          <div className="bg-surface p-10 rounded-3xl shadow-sm italic text-on-surface-variant relative">
            <Quote size={56} className="text-primary/10 absolute top-4 left-4" fill="currentColor" stroke="none" />
            <p className="relative z-10 mb-8 font-sans">"The one-on-one sessions are exactly what was missing. My daughter feels comfortable asking questions and the interactive mechanics keep her engaged."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-variant"></div>
              <div>
                <p className="font-label-md text-label-md text-charcoal font-bold not-italic">Mark Thompson</p>
                <p className="text-sm opacity-70 not-italic">Parent from London</p>
              </div>
            </div>
          </div>
          <div className="bg-surface p-10 rounded-3xl shadow-sm italic text-on-surface-variant relative">
            <Quote size={56} className="text-primary/10 absolute top-4 left-4" fill="currentColor" stroke="none" />
            <p className="relative z-10 mb-8 font-sans">"A real revolution in learning. The tutors break down every complex problem into understandable components. Truly unparalleled service."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-variant"></div>
              <div>
                <p className="font-label-md text-label-md text-charcoal font-bold not-italic">Eleanor Wright</p>
                <p className="text-sm opacity-70 not-italic">Parent from Birmingham</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-[60px] p-10 lg:p-20 text-center text-on-primary relative overflow-hidden">
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold">Let's Learn Together!</h2>
              <p className="text-body-lg opacity-90 font-sans">Book a free trial lesson or get details about our Science lesson plans, prices, and timings according to the UK curriculum.</p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-white text-royal-purple px-10 py-5 rounded-2xl font-headline-md text-headline-md font-bold hover:scale-105 transition-all shadow-xl cursor-pointer"
                >
                  Book Free Trial Now
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-headline-md text-headline-md font-bold hover:bg-white/10 transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
            {/* Background blobs */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}