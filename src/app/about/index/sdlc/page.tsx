'use client'

import { openSans } from '@/app/ui/fonts';
import { useEffect, useState } from 'react';
import { useTitle } from '@/app/TitleContext';
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
                </main>
            </div>
        </div>
    );
}