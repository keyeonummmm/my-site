'use client'

import { openSans } from '@/app/ui/fonts';
import { useEffect, useState } from 'react';
import { useTitle } from '@/app/TitleContext';
import Image from 'next/image';
import './sdlc.css';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import LoginSignupForm from "@/components/LoginSignupForm";

export default function SDLCPage() {
    const { setTitle } = useTitle();
    const [activeSection, setActiveSection] = useState('introduction');

    useEffect(() => {
        setTitle('SDLC Documentation');
        return () => setTitle('');
    }, [setTitle]);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // This is just for demonstration purposes in the documentation

    return (
        <div className={`${openSans.variable} sdlc-documentation`}>
            {/* Documentation Header */}
            <header className="doc-header">
                <h1 className="doc-title">What does an ambitious software project look like?</h1>
                <div className="doc-version">v1.0.0</div>
            </header>

            <div className="doc-container">
                {/* Sidebar Navigation */}
                <aside className="doc-sidebar">
                    <nav className="doc-nav">
                        <ul className="doc-nav-list">
                            <li>
                                <button
                                    onClick={() => scrollToSection('introduction')}
                                    className={activeSection === 'introduction' ? 'active' : ''}
                                >
                                    Introduction
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('sdlc')}
                                    className={activeSection === 'sdlc' ? 'active' : ''}
                                >
                                    SDLC
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('methodologies')}
                                    className={activeSection === 'methodologies' ? 'active' : ''}
                                >
                                    Methodologies
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('example')}
                                    className={activeSection === 'example' ? 'active' : ''}
                                >
                                    Example
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('user-stories')}
                                    className={activeSection === 'user-stories' ? 'active' : ''}
                                >
                                    User Stories
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="doc-content">
                    <section id="introduction" className="doc-section">
                        <h2>Introduction</h2>
                        <p>
                        It may be better for one person to complete an ambitious software development project, though realistic, production-standard, secure projects are usually done by teams. The reason for this can be as simple as the fact that software development is labor-intensive and involves different phases of the product cycle with different objectives (getting the software online is just the beginning), and one person&apos;s energy is really limited.
                        </p>
                        <br />
                        <p>
                        A team can be defined as a collaboration between a group of people with different specialties and roles. Take a <a href="https://www.scrum.org/resources/what-scrum-team" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">scrum</a> team for example, there are three major roles: Product Owner, Scrum Master, and Developers, which can be subdivided into different roles: front-end, back-end, design, testing, maintenance, and so on. At different stages in a software development life cycle, they are responsible for different aspects
                        </p>

                        <Table className="my-6">
                            <TableCaption>Role Responsibilities Across SDLC Phases</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[150px]">Role</TableHead>
                                    <TableHead className="text-center">Planning</TableHead>
                                    <TableHead className="text-center">Analysis</TableHead>
                                    <TableHead className="text-center">Design</TableHead>
                                    <TableHead className="text-center">Implementation</TableHead>
                                    <TableHead className="text-center">Testing</TableHead>
                                    <TableHead className="text-center">Deployment</TableHead>
                                    <TableHead className="text-center">Maintenance</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Product Owner</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Scrum Master</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Front-end Developer</TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Back-end Developer</TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">UX/UI Designer</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">QA Engineer</TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">DevOps Engineer</TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center"></TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Project Manager</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                    <TableCell className="text-center">✓</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <div className="doc-note">
                            <div className="doc-note-title">Note</div>
                            <div className="doc-note-content">
                                This documentation provides an overview of the SDLC process and its various phases. Each organization may implement SDLC differently based on their specific needs and constraints.
                            </div>
                        </div>
                    </section>

                    <section id="sdlc" className="doc-section">
                        <h2>SDLC</h2>
                        <p>
                        The <a href="https://www.atlassian.com/agile/software-development/sdlc" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Software Development Life Cycle (SDLC)</a> is a widely used procedural framework for developing high-quality software that meets user requirements.
                        </p>
                        <div className="doc-code-block">
                            <pre>
                                <code>
{`
The seven phases of software development life cycle:

    1. Planning:    Project goals, objectives, and requirements

    2. Feasibility Analysis:    Technical and financial evaluation

    3. Design:    System architecture, user interface, database schema, and security measures...

    4. Implementation:    Coding...

    5. Testing:   ensuring the software operates as intended before being deployed to users

    6. Deployment:    On-premise or in the cloud, deployment determines the accsessibility and performance of the software

    7. Maintenance:   Ongoing support, address issues, apply updates, add new features, ensure software remain functional over time
`}
                                </code>
                            </pre>
                        </div>
                    </section>

                    <section id="methodologies" className="doc-section">
                        <h2>SDLC Methodologies</h2>
                        <p>
                            Various methodologies can be used to implement SDLC, each with its own approach to the development process.
                        </p>
                        <div className="doc-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Methodology</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Waterfall</td>
                                        <td>Sequential approach where each phase must be completed before the next begins</td>
                                    </tr>
                                    <tr>
                                        <td>Agile</td>
                                        <td>Iterative approach with frequent reassessment and adaptation</td>
                                    </tr>
                                    <tr>
                                        <td>Scrum</td>
                                        <td>Agile framework with fixed-length iterations (sprints)</td>
                                    </tr>
                                    <tr>
                                        <td>DevOps</td>
                                        <td>Combines development and operations with continuous integration and delivery</td>
                                    </tr>
                                    <tr>
                                        <td>Spiral</td>
                                        <td>Combines iterative development with systematic aspects of waterfall</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="example" className="doc-section">
                        <h2>Example</h2>
                        <p>
                        Suppose we want to make a  sign-up/log-in page like this. The example below demonstrates a form with validation using Zod and React Hook Form, styled with shadcn/ui components.
                        </p>

                        <div className="my-8">
                            <LoginSignupForm />
                        </div>

                        <div className="doc-note mt-8">
                            <div className="doc-note-title">Notes</div>
                            <div className="doc-note-content">
                                <p>TIn order to make this application fully functional, we also need a backend, a database, an API for front-end and back-end communication, and tests to make sure it works correctly.</p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Frontend: Inputs, receives and displays data, adapts the display of web pages according to status</li>
                                    <li>Backend: Receives and processes data, stores data in database, sends data to frontend</li>
                                    <li>Database: Stores, updates, retrieves, or deletes data</li>
                                    <li>API: A protocol communication layer defined between the frontend and backend</li>
                                    <li>Test: Whether it can operate properly and safely (data security) under various simulated destructive, and normal environments </li>
                                    <br/>
                                    <li>A broader pattern also includes deployment, maintenance, user feedback, and other aspects, which also vary depending on the process of each project.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Image
                                src="/assets/other/Frame_7.svg"
                                alt="Software Development Architecture Diagram"
                                width={837}
                                height={531}
                                priority
                            />
                        </div>
                            <p className="mt-4 flex justify-center text-sm">A simple software architecture diagram</p>

                        <div className="doc-code-block bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-sm">
                            <p className="mb-4 text-base">
                                In a development process using Scrum as an example, the team develops in iterative cycles called <a href="https://www.atlassian.com/agile/scrum/sprints" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-medium">Sprints</a>. A Scrum team completes a certain amount of work within a short time-box period called sprint. The team sets the length of the sprint cycle, the amount of work, and ensures that each member has a good understanding of the task through clear communication.
                            </p>

                            <h4 className="text-lg font-semibold mt-6 mb-4 text-slate-800 dark:text-slate-200">A Sprint Cycle Has 4 Key Components:</h4>

                            <div className="space-y-4">
                                <div className="flex items-start p-3 bg-white dark:bg-slate-800 rounded-md border-l-4 border-blue-500">
                                    <div className="mr-3 mt-1 text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-slate-800 dark:text-slate-200">Sprint Planning</h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Create clear user stories and sub-tasks according to the current epic.</p>
                                    </div>
                                </div>

                                <div className="flex items-start p-3 bg-white dark:bg-slate-800 rounded-md border-l-4 border-green-500">
                                    <div className="mr-3 mt-1 text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-slate-800 dark:text-slate-200">Daily Scrum</h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">A daily short meeting between team members to exchange information and progress, keeping things on track.</p>
                                    </div>
                                </div>

                                <div className="flex items-start p-3 bg-white dark:bg-slate-800 rounded-md border-l-4 border-purple-500">
                                    <div className="mr-3 mt-1 text-purple-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-slate-800 dark:text-slate-200">Sprint Review</h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Reviewing and demonstrating the work done during the sprint and discussing the future scope of work for the product <span className="italic">(work-oriented)</span>.</p>
                                    </div>
                                </div>

                                <div className="flex items-start p-3 bg-white dark:bg-slate-800 rounded-md border-l-4 border-amber-500">
                                    <div className="mr-3 mt-1 text-amber-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-slate-800 dark:text-slate-200">Retrospective</h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Focusing on how the team worked collaboratively during the sprint, thinking about how to make the team more efficient <span className="italic">(collaboration-oriented)</span>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-center">
                        <Image
                                src="/assets/other/image.png"
                                alt="Sprint cycle"
                                width={418.5}
                                height={265.5}
                                priority
                            />
                        </div>
                            <p className="mt-4 flex justify-center text-sm">Sprint cycle</p>
                        <div>
                            <div className="mt-8 space-y-4">
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Applying Scrum to Our Example</h4>

                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <h5 className="font-medium mb-2 flex items-center text-slate-800 dark:text-slate-200">
                                        <svg className="mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                        Step 1: Planning with User Stories
                                    </h5>
                                    <p className="text-slate-600 dark:text-slate-400 pl-6">
                                        For our registration/login interface, we begin by using the <a href="https://www.atlassian.com/agile/project-management/user-stories" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-medium">User Story</a> method to determine user needs and implementation requirements. Since this is a relatively simple project, the team sets a time limit of 2 days for the sprint.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <h5 className="font-medium mb-2 flex items-center text-slate-800 dark:text-slate-200">
                                        <svg className="mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        Step 2: Daily Collaboration
                                    </h5>
                                    <p className="text-slate-600 dark:text-slate-400 pl-6">
                                        During this cycle, the team holds a short daily meeting to exchange information, track progress, and ensure everything stays on track.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <h5 className="font-medium mb-2 flex items-center text-slate-800 dark:text-slate-200">
                                        <svg className="mr-2 text-purple-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                        </svg>
                                        Step 3: Sprint Review
                                    </h5>
                                    <p className="text-slate-600 dark:text-slate-400 pl-6">
                                        After the project is completed, the team reviews and demonstrates the work through a Sprint Review and discusses the future scope of work for the product <span className="italic">(work-oriented)</span>.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <h5 className="font-medium mb-2 flex items-center text-slate-800 dark:text-slate-200">
                                        <svg className="mr-2 text-amber-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                        Step 4: Retrospective
                                    </h5>
                                    <p className="text-slate-600 dark:text-slate-400 pl-6">
                                        Finally, the team conducts a sprint retrospective, focusing on how they collaborated during the sprint and considering ways to improve team efficiency <span className="italic">(collaboration-oriented)</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="user-stories" className="doc-section">
                        <h2>User Stories</h2>
                        <p className="mb-6">
                            A user story in Scrum is a short, simple description from the perspective of the end user. It follows the format:
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg border border-blue-100 dark:border-blue-900 mb-8 text-center">
                            <p className="text-lg font-medium text-blue-800 dark:text-blue-300">
                                "As a <span className="text-indigo-600 dark:text-indigo-400 font-semibold">[user]</span>, I want <span className="text-purple-600 dark:text-purple-400 font-semibold">[goal]</span> so that <span className="text-pink-600 dark:text-pink-400 font-semibold">[benefit]</span>."
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                                <h4 className="text-lg font-semibold mb-3 flex items-center text-slate-800 dark:text-slate-200">
                                    <svg className="mr-2 text-emerald-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Example: Registration Form
                                </h4>
                                <div className="pl-7">
                                    <p className="mb-2 text-slate-700 dark:text-slate-300">
                                        <span className="font-medium">As a</span> new website visitor,
                                    </p>
                                    <p className="mb-2 text-slate-700 dark:text-slate-300">
                                        <span className="font-medium">I want</span> to create an account with my email and password,
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300">
                                        <span className="font-medium">So that</span> I can access personalized features and save my preferences.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                                <h4 className="text-lg font-semibold mb-3 flex items-center text-slate-800 dark:text-slate-200">
                                    <svg className="mr-2 text-emerald-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Example: Login Form
                                </h4>
                                <div className="pl-7">
                                    <p className="mb-2 text-slate-700 dark:text-slate-300">
                                        <span className="font-medium">As a</span> registered user,
                                    </p>
                                    <p className="mb-2 text-slate-700 dark:text-slate-300">
                                        <span className="font-medium">I want</span> to log in with my credentials,
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300">
                                        <span className="font-medium">So that</span> I can access my account and use the application's features.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Writing Effective User Stories</h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                                    <span className="text-blue-600 dark:text-blue-300 font-semibold">1</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">Be Clear and Concise</h4>
                                    <p className="text-slate-600 dark:text-slate-400">Keep your user stories simple and to the point. Avoid technical jargon and focus on the user's perspective.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                                    <span className="text-green-600 dark:text-green-300 font-semibold">2</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">Focus on User Needs</h4>
                                    <p className="text-slate-600 dark:text-slate-400">Emphasize what the user wants to accomplish, not how the system should implement it. The "so that" part helps clarify the value to the user.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                                    <span className="text-purple-600 dark:text-purple-300 font-semibold">3</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">Include Acceptance Criteria</h4>
                                    <p className="text-slate-600 dark:text-slate-400">Define clear conditions that must be met for the story to be considered complete. This helps developers understand when they've successfully implemented the feature.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-4">
                                    <span className="text-amber-600 dark:text-amber-300 font-semibold">4</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">Make it Small and Testable</h4>
                                    <p className="text-slate-600 dark:text-slate-400">Each user story should be small enough to complete within a single sprint and should be testable to verify that it works as expected.</p>
                                </div>
                            </div>
                        </div>

                        <div className="doc-note">
                            <div className="doc-note-title">Pro Tip</div>
                            <div className="doc-note-content">
                                <p>User stories are not meant to be comprehensive requirements documents. They serve as conversation starters between the product owner, developers, and stakeholders. The details emerge through discussions and are captured in acceptance criteria and task breakdowns.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}