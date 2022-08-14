import { ICurriculumVitae } from './models';

export const DATA_EN: ICurriculumVitae = {
    name: 'Igor Schneider',
    currentPosition: 'Head of Software Development',
    languages: ['Croatian (native)', 'German (C2 level)', 'English (C2 level)'],
    contact: {
        city: 'Berlin',
        country: 'Germany',
        email: 'igor.schneider@outlook.com',
        houseNumber: '88',
        linkedinUrl: 'https://www.linkedin.com/in/igor-schneider-ab063b28/',
        phone: '+49 178 132 1337',
        street: 'Paulsborner Street',
        xingUrl: 'https://www.xing.com/profile/Igor_Schneider3/cv',
        zip: '10709',
    },
    skills: [
        {
            name: 'Angular',
            expertise: 10,
        },
        {
            name: 'Typescript/ES6',
            expertise: 10,
        },
        {
            name: 'LESS/SASS/CSS',
            expertise: 9,
        },
        {
            name: 'NodeJS (Express, Nest)',
            expertise: 8,
        },
        {
            name: 'Document databases (MongoDB, RavenDB)',
            expertise: 8,
        },
        {
            name: 'Relational databases',
            expertise: 5,
        },
        {
            name: 'asp.net core/.net core',
            expertise: 8,
        },
        {
            name: 'Scrum and agile software development',
            expertise: 10,
        },
        {
            name: 'UX/UI design',
            expertise: 8,
        },
    ],
    education: [
        {
            faculty: 'Technical school of Ruđer Bošković',
            description: 'IT technician diploma (2004, Zagreb, Croatia).',
        },
        {
            faculty: 'Faculty of Science, University of Zagreb',
            description: '2 semesters of theoretical physics study (2005, Zagreb, Croatia).',
        },
        {
            faculty: 'University of Zagreb, Faculty of Electrical Engineering and Computing',
            description:
                'Univ.Bacc.Comp. (Bachelor of science) diploma, module "Information Processing and Multimedia Systems" (2010, Zagreb, Croatia).',
        },
    ],
    jobs: [
        {
            company: 'klarsolar GmbH',
            end: 'today',
            start: 'May 2022',
            title: 'Head of Software Development',
            projects: [
                {
                    name: 'Team Klara',
                    description:
                        'Head of Software Development - Leadership of a 12-person team, consisting of developers, product owners and scrum masters.',
                },
                {
                    name: 'Project Hub',
                    description:
                        'Lead Fullstack Engineer - Design (UX) and development of a company internal project management tool, similar to Jira (Angular, Angular Material, NestJS).',
                },
            ],
        },
        {
            company: 'Rhenus SN digital GmbH & Co.KG',
            end: 'May 2022',
            start: 'March 2021',
            title: 'Senior Software Engineer',
            projects: [
                {
                    name: 'Rhenus Material',
                    description:
                        'Design and development of a company-wide style guide based on Google Material (Angular, Angular Material).',
                },
                {
                    name: 'Rhenus Fleetmanager',
                    description:
                        'Design and development of a Web application for fleet management in a logistics context (Angular, Angular Material, asp.net core, MSSQL Azure). ',
                },
                {
                    name: 'Yellow Line',
                    description:
                        'Design and development of a Web application for managing large storage units (Angular, Angular Material, asp.net core, MSSQL Azure).',
                },
                {
                    name: 'Gate Management',
                    description:
                        'Design and development of a Web application for organizing arrivals and deployment of delivery trucks (Angular, Angular Material, asp.net core, MSSQL Azure, SignalR).',
                },
            ],
        },
        {
            company: 'Akelius GmbH',
            end: 'March 2021',
            start: 'September 2018',
            title: 'Senior Software Engineer',
            projects: [
                {
                    name: 'Lettings Application',
                    description:
                        'Design and development of an international Web application for rentals of apartments, business objects and private parking spaces (Angular, Angular Material, Azure Functions, Azure Cosmos DB).',
                },
                {
                    name: 'Shared Component Library',
                    description:
                        'Design and development of a Frontend Library for shared Web components (Angular, Angular Material).',
                },
                {
                    name: 'Akelius Material',
                    description:
                        'Entwicklung eines Company Style Guides basierend auf Google Material (Angular, Angular Material).',
                },
                {
                    name: 'Virtual Viewing',
                    description:
                        'Design und Entwicklung einer Web Anwendung für virtuelle Wohnungsbesichtigungen (Angular, Angular Material, three.js).',
                },
            ],
        },
        {
            company: 'Cornelsen Verlag GmbH',
            end: 'September 2018',
            start: 'September 2014',
            title: 'Software Developer',
            projects: [
                {
                    name: 'Interaktive Übungen for Scook',
                    description:
                        'Design und Entwicklung einer Web Anwendung als digitale Ergänzung von Arbeitsheften für verschiedene Schulfächer (AngularJS und später Angular 2+).',
                },
                {
                    name: 'Produkt-o-Mat',
                    description:
                        'Design und Entwicklung eines hauseigenen Content Management Systems zum Erstellen von Interaktiven Übungen (Angular, asp.net core, MongoDB).',
                },
                {
                    name: 'Lunchtime',
                    description:
                        'Design und Entwicklung einer firmeninternen Web Anwendung, mit der sich Kollegen zum Mittagessen verabreden können (Angular, asp.net core, MongoDB, Google Maps API). ',
                },
                {
                    name: 'e-Cademy',
                    description:
                        'Design und Entwicklung einer Web Anwendung, die Auszubildenden in der Prüfungsvorbereitung hilft (Angular, node.js, express.js, PostgreSQL).',
                },
            ],
        },
        {
            company: 'protected-networks.com GmbH',
            end: 'September 2014',
            start: 'März 2012',
            title: 'Software Developer',
            projects: [
                {
                    name: '8MAN',
                    description:
                        'Featureentwicklung einer Windows Client Anwendung für Berechtigungsmanagement in Windows Servern und Systemen mit Active Directory (Windows Presentation Foundation).',
                },
                {
                    name: '8MAN GrantMa',
                    description:
                        'Design und Entwicklung einer Web Anwendung, mit der Nutzer Berechtigungen für eine Netzwerk Ressource bestellen können (sammy.js, jQuery, asp.net MVC). ',
                },
            ],
        },
        {
            company: 'Smarthouse Media GmbH',
            end: 'Februar 2012',
            start: 'August 2011',
            title: 'Software Developer',
            projects: [
                {
                    name: 'Relaunch der Welt.de Börsenseite',
                    description: 'Entwicklung von Web Controls (asp.net Webforms).',
                },
            ],
        },
    ],
    bio: {
        paragraphs: [
            'Meine Reise in die Softwareentwicklung hat 2009 angefangen, kurz vor dem Abschluss an der Universität in Zagreb. Ich habe 2 Jahre als Student Partner bei Microsoft in Kroatien gearbeitet und die Zeit überwiegend damit verbracht, meinen Kommilitonen das Programmieren in C#/.net nahezubringen. Dazu kamen diverse interessante Projekte zu Stande wie das Microsoft Community Portal; das erste Azure/Cloud Projekt in unserer Region, an dem ich im Frontend und Backend tätig war. Nach meinem Abschluss war es für mich nicht schwer einen Job als .net Entwickler zu finden. 2011 habe ich mich entschieden eine Stelle in Berlin als asp.net Entwickler zu besetzen. Das war mein erster Job in Deutschland. Die folgenden 3 Jahre habe ich weitestgehend in Microsoft-Technologien gearbeitet, in der Client Side Entwicklung, aber auch im Web. ',

            'Im Jahr 2014 habe ich mich entschieden, den Fokus mehr in Richtung Web Technologien/Javascript zu legen. Nach einer langen Experimentierphase hat sich AngularJS (und später Angular 2) als das Framework meiner Wahl herausgestellt. Nach über 7 Jahren und zahlreichen Projekten habe ich beachtliche Erfahrung in Angular gesammelt.',

            'In den letzten Jahren habe ich häufig die Mentorenrolle für Studenten und Junior Entwickler übernommen. Durch meinen eigenen Werdegang als Front- und Backend Entwickler hatte ich eine sehr gute Vorstellung davon, wo der Fokus für einen Einsteiger in die Softwareentwicklung liegen sollte. Ich konnte mein Wissen über Software Architektur und Frameworks durch kleine, thematisch angepasste Übungen weitergeben. Die Rolle des Mentors ist etwas, was mir noch immer viel Spaß macht und was ich gerne in der Zukunft machen möchte.',

            'Ich hatte neben der Softwareentwicklung das Glück, an der Entstehung von mehreren Digitalen Produkten mitzuwirken. Das hat mir einen guten Einblick in Themen wie SCRUM, Agile Entwicklung, UX, Projekt/Produktmanagement und Marktforschung gegeben. Es macht mir Spaß in cross-funktionalen Teams zu arbeiten und mein idealer Arbeitgeber hätte eine offene Plattform für Diskussionen und Ideen im Kontrast zu harten Hierarchien und Positionen.',

            '2022 hatte ich zum ersten Mal die Gelegenheit, eine Führungsposition in einem Startup zu besetzen. Ich hatte das Gefühl bekommen, dass ich eine neue Herausforderung brauchte und an anderen Skills arbeiten möchte. Sich in einer komplett neuen Position zu finden ist zu Anfang immer schwer, aber die Möglichkeit meine Erfahrung weiterzugeben und zu sehen, wie sich mein Team entwickelt, hat mich mit Freude erfüllt. Ich bin der Meinung, dass die uneingeschränkte Produktivität und das Vetrauen die Basis für ein glückliches und motiviertes Team sind.',
        ],
    },
};
