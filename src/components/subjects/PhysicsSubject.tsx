'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import {
  GraduationCap,
  ArrowRight,
  Clock,
  ArrowUpRight,
  Wallet,
  ShieldCheck,
  FlaskConical,
  CheckCircle2,
  BarChart3,
  Brain,
  Rocket,
  Sun,
  Atom,
  Star,
  CalendarClock,
  Users,
  Route,
  Target,
} from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function PhysicsSubject({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-label-sm font-semibold">
            <GraduationCap size={16} />
            UK PHYSICS CURRICULUM SPECIALISTS
          </div>
          <h1 className="font-headline-lg text-[40px] md:text-[56px] leading-[1.1] text-charcoal font-bold">
            Online Physics Tutor <br />
            <span className="text-royal-purple">in the UK</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-lg font-sans">
            Foundational mastery for Year 9 to 13 with bespoke 1-on-1 expert tutoring. Master complex physics concepts with patience and personal guidance tailored to your learning pace.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => onNavigate('trial')}
              className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-label-md hover:shadow-lg transition-all flex items-center gap-2 group font-bold cursor-pointer"
            >
              Book Free Trial Lesson
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('a-levels')}
              className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-label-md hover:bg-primary-fixed transition-all font-bold cursor-pointer"
            >
              View Pricing
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-royal-purple/10 rounded-full blur-3xl -z-10"></div>
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
            <img
              className="w-full h-[400px] md:h-[500px] object-cover"
              alt="A focused high school student studying physics"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5NmJhPcbJ0sJ8woPXgWNIeoBpV1Q98W72ZpjSys5mMVXWRkPsnPpuuDK9U9kuVpp_vOUMVv0TAz08XlxnhTfYdWNQbSHKXVqDM4RJlGT3IujqUM8w3r0BBRwbzQy1cgtXSk_3H8OThqac14yyDVqY0pOuMPf8yb0RoIoyv86FHKtsAdyvPQDUZCpNq1nuhGm6rgQ07iy55CZadr9lXt-9S4lq-pPUTXLcBxT_ORuZZFFQSAIyxLRJoQ"
            />
          </div>
        </div>
      </section>

      {/* What We Offer - Features Grid */}
      <section className="bg-soft-gray py-20 md:py-24">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-charcoal font-bold">What We Offer</h2>
            <div className="h-1 w-20 bg-royal-purple mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Feature 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl card-elevation group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-royal-purple group-hover:text-white transition-colors">
                <Clock size={28} />
              </div>
              <h3 className="font-headline-md mb-4 text-charcoal font-bold">Flexible Timings</h3>
              <p className="text-on-surface-variant mb-6">Customize timings to fit your schedule. Easy rescheduling for busy UK students and families.</p>
              <button
                onClick={() => onNavigate('curriculum')}
                className="text-royal-purple font-label-md flex items-center gap-1 hover:underline font-bold cursor-pointer"
              >
                All Subjects <ArrowUpRight size={16} />
              </button>
            </div>
            {/* Feature 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl card-elevation group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-lime-green group-hover:text-charcoal transition-colors">
                <Wallet size={28} />
              </div>
              <h3 className="font-headline-md mb-4 text-charcoal font-bold">Affordable Rates</h3>
              <p className="text-on-surface-variant mb-6">Get premium quality tutoring with transparent pricing. Discount packages and free trials available.</p>
              <button
                onClick={() => onNavigate('a-levels')}
                className="text-royal-purple font-label-md flex items-center gap-1 hover:underline font-bold cursor-pointer"
              >
                Fee Structure <ArrowUpRight size={16} />
              </button>
            </div>
            {/* Feature 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl card-elevation group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-tertiary-fixed rounded-2xl flex items-center justify-center mb-6 text-tertiary group-hover:bg-tertiary-container group-hover:text-white transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-headline-md mb-4 text-charcoal font-bold">Superior Quality Tutoring</h3>
              <p className="text-on-surface-variant mb-6">Focused homework efficiency, comprehension enhancement, and specialized study skill sets.</p>
              <button
                onClick={() => onNavigate('trial')}
                className="text-royal-purple font-label-md flex items-center gap-1 hover:underline font-bold cursor-pointer"
              >
                Sign up now <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Curriculum Section */}
      <section className="py-20 md:py-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4 text-left">
          <div className="space-y-1 text-left">
            <span className="text-royal-purple font-label-md tracking-widest uppercase font-bold block text-left">Curriculum Stages</span>
            <h2 className="font-headline-lg text-charcoal font-bold text-left">Year Groups &amp; Lesson Plans</h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-left">Comprehensive coverage of the UK Physics curriculum from Key Stage 3 through to A-Levels (Years 9-13).</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* KS3 Card */}
          <div className="md:col-span-4 bg-primary-container text-on-primary-container p-8 rounded-[32px] flex flex-col h-full relative overflow-hidden group">
            <FlaskConical size={120} className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform" />
            <div className="mb-auto">
              <div className="bg-white/20 backdrop-blur-sm w-fit px-4 py-1 rounded-full text-label-sm mb-6 font-semibold">Ages 11-14</div>
              <h3 className="text-3xl font-bold mb-6">Key Stage 3</h3>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Forces &amp; Motion</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Energy Transfer</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Waves (Light/Sound)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Electricity &amp; Magnetism</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Space &amp; Astronomy</li>
              </ul>
            </div>
          </div>
          {/* GCSE Card */}
          <div className="md:col-span-8 bg-surface-container-low border border-outline-variant p-8 rounded-[32px] flex flex-col md:flex-row gap-8 group">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center text-white">
                  <BarChart3 size={22} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal">Key Stage 4 (GCSE)</h3>
              </div>
              <p className="text-on-surface-variant">Preparation for General Certificate of Secondary Education exams, covering both Foundation and Higher tiers.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Newton's Laws</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">EM Spectrum</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Circuit Analysis</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Magnetism</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Particle Model</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Atomic Structure</span>
              </div>
            </div>
            <div className="md:w-1/3 rounded-2xl overflow-hidden relative min-h-[200px]">
              <img
                className="h-full w-full object-cover"
                alt="Physics classroom"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUIy_fklQ3Uw0zUWMlgXgQpUU0sULtnhi65NTVg81X8FY4A5S0um4KLhAAjynwqN83ZNp9g99JyDH3-JZ4Ln_jRtfHiYr1uB32H62IWqaKA62q7q94B6SI3P420eQUYMyyCR9offVL8926MEhLFX2tq7yKxWpCxhYBnu92-lA0Z4rKIW622Y3RFYw5IJ5U9Szib3fUOM9xmf2bmqBKreSDaqegdDDWhwrtYzFVc4fQF6SZ_SwpeWdmiA"
              />
            </div>
          </div>
          {/* A-Level Card */}
          <div className="md:col-span-12 bg-white border border-outline-variant p-8 md:p-10 rounded-[40px] shadow-sm relative overflow-hidden group">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary-fixed text-primary px-4 py-1.5 rounded-full text-label-sm font-bold mb-6">A-Level (KS5) Specialists</div>
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Academic Excellence for Years 12-13</h3>
                <p className="text-on-surface-variant text-lg mb-8">Rigorous academic preparation for engineering, medicine, and scientific careers. We focus on in-depth understanding and complex problem-solving.</p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-soft-gray px-4 py-2 rounded-full border border-outline-variant">
                    <Brain size={20} className="text-primary" />
                    <span className="font-label-md font-medium">Quantum Physics</span>
                  </div>
                  <div className="flex items-center gap-2 bg-soft-gray px-4 py-2 rounded-full border border-outline-variant">
                    <Rocket size={20} className="text-primary" />
                    <span className="font-label-md font-medium">Mechanics</span>
                  </div>
                  <div className="flex items-center gap-2 bg-soft-gray px-4 py-2 rounded-full border border-outline-variant">
                    <Sun size={20} className="text-primary" />
                    <span className="font-label-md font-medium">Thermodynamics</span>
                  </div>
                  <div className="flex items-center gap-2 bg-soft-gray px-4 py-2 rounded-full border border-outline-variant">
                    <Atom size={20} className="text-primary" />
                    <span className="font-label-md font-medium">Nuclear Physics</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Digital simulation"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAipm5UOx-oaCNUFc6ooptfhXzCbT0Xv0AFjrZnu4ep-yYbq_plDaw1o5f8xOu4a1hmDkYir-Hs3Pe61coVhPmNHkFUPTG8Ch5AQHXPBudoDl7d4c5JCrQGH6_CGpNoOv5xj0jRrvVfXAChsradIdfe-3zYJnFObON6-4hqNll4X75lQfJBwUKh45srkgNVRAoJLAlzxX0PlyB7hvGgsJu5BTWum_SQ3cXojVB-NbP4wKdppLj8py6kFg"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden mt-8">
                  <img
                    className="w-full h-full object-cover"
                    alt="Online physics session"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0cZhGEjW-YBzK2Pb-hppV9lNlOonvD-7vF5MWSlMZ8wL_OLJdoZUUwkS5IHhDl4__dLYxhv3uxc-6oXr41Ji2syfIp5BwC3k8ZBHcvle7jmW6_sOJ1MhmHXMb3pCuq6d5v7zg7XqDfNrh2n9IHaGO3Ar7_6yuSU-VzdYsbkjtpybtKAibx6PYcmbovaypnxB8Ov3fyNhrhcqvVQxcPsoIX3IaCrlGEOFJhN8sh3kZLZZw6mQf7-13mg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-charcoal text-white py-20 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-purple/5 -skew-x-12"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="font-headline-lg mb-6 font-bold">Why Online Physics Tutoring with Math Make Smart Stands Unique</h2>
            <p className="text-surface-dim text-lg">We bridge the gap between abstract concepts and real-world understanding through our unique methodological approach.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-lime-green">
                <CalendarClock size={24} />
              </div>
              <h4 className="text-xl font-bold">Your Schedule</h4>
              <p className="text-outline-variant text-sm">Attend sessions from home on your own timeline. Perfect for balancing family and school life.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-lime-green">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-bold">Skilled Educators</h4>
              <p className="text-outline-variant text-sm">In-depth guidance from specialists who adapt their complex explanations to your level.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-lime-green">
                <Route size={24} />
              </div>
              <h4 className="text-xl font-bold">Personal Roadmap</h4>
              <p className="text-outline-variant text-sm">Custom success plans based on your specific learning profiles and academic goals.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-lime-green">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-bold">Exam Strategy</h4>
              <p className="text-outline-variant text-sm">Focused past-paper practice and specific exam skills for confident test-taking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Tutors */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-charcoal font-bold">Meet Our Expert Tutors</h2>
            <p className="text-on-surface-variant font-medium">Qualified professionals with deep knowledge of the UK curriculum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Tutor 1 */}
            <div className="bg-soft-gray p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center text-center md:text-left card-elevation">
              <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Marcus Reed"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYsGLhnR_3u4lnaWBfbq2bmi4qbIsVTHR8lyJVBGh-7_9BcBx8fRA4BjdAuJ7RKNzkiAEAfjg3nQUT5XTyR-dbIAjgL9E05eljlBau10pkWVvhqp0NRm_6wkOCPP36qj_Cw5SKt6SH63Ju7VLRpdSgKidVOzgKuzmrpGyOxBzFJLm2bhr7Kc90Zx0VunIjJUnoZLa8Bl_AazG3s8wTzO2Pb40UFzLDT9hGInoWYoBzgV39jWCTf3frMg"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-charcoal mb-1">Marcus Reed</h4>
                <span className="text-royal-purple font-label-md mb-4 block font-semibold">A-Level Specialist</span>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">"I focus on bridging the gap between mathematical theory and practical physical application for KS5 students."</p>
                <div className="flex gap-1 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-lime-green" fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
            {/* Tutor 2 */}
            <div className="bg-soft-gray p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center text-center md:text-left card-elevation">
              <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Emily Chen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-UloXLALJmPe_wdHYN7RBX_o8xlxp2vFpWeT96Txf6-ETmD8-C9D4w0X-op9WNRdexF3Y2m6PpWM7o2duQxVBXLEOKyAVsnDxMmBdBrntAimHSFq8suqCbbm6ygEz4GeroqmNLt51moAVpkjxSsNlsYJWl1tAONxkMd0TAvV2y_FUeqfNfkAp676ny9dSxGK3fY6Gkmr7HMiW2QxsMAHJ8N9FQCHov0wIcPDLlaTI_SiNYWoUAFnHCQ"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-charcoal mb-1">Emily Chen</h4>
                <span className="text-royal-purple font-label-md mb-4 block font-semibold">GCSE Specialist</span>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">"Helping GCSE students master foundational concepts with engaging visuals and step-by-step guidance."</p>
                <div className="flex gap-1 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-lime-green" fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-24">
        <div className="bg-royal-purple rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 border-4 border-white rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 border-4 border-white rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="font-display-lg text-white font-bold text-display-lg-mobile md:text-display-lg">Let's Learn Together!</h2>
            <p className="text-primary-fixed text-lg">Book a free trial lesson today and see how our personalized tutoring makes physics easy and engaging. No payment required for your first demo.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-white text-royal-purple px-10 py-5 rounded-2xl font-bold hover:bg-soft-gray transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
              >
                Book Free Trial
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}