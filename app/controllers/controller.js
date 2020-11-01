module.exports.actionIndex = function (req, res) {
    let obj = {
        build: {
            title: 'Balaban Andrew. CV page.',
            languages: [
                {
                    'title': 'Russian',
                    'href': '/ru',
                    'text': 'Ru',
                    'target': '',
                    'class': ''
                },
                {
                    'title': 'English',
                    'href': '/',
                    'text': 'En',
                    'target': '',
                    'class': 'active'
                },
                {
                    'title': 'Hebrew',
                    'href': '/ru',
                    'text': 'He',
                    'target': '',
                    'class': ''
                }
            ],
            skill_scale: [
                {
                    title: "Beginner",
                    position: "left"
                },
                {
                    title: "Proficient",
                    position: "left"
                },
                {
                    title: "Expert",
                    position: "right"
                },
                {
                    title: "Master",
                    position: "right"
                }
            ]
        },
        profile: {
            photo: {
                src: "/images/bcfda2a6.avatarS.png",
                title: "avatar",
                alt: "avatar"
            },
            text_header: {
                name: "Andrew",
                age: 30
            },
            skills: {
                title: "Skills",
                skills: [
                    {
                        title: "HTML",
                        icon: "html",
                        content: [
                            "HTML", "CSS", "SASS/SCSS/Compass"
                        ]
                    },
                    {
                        title: "JavaScript",
                        icon: "javaScript",
                        content: [
                            "Vanilla JS", "AngularJS 1.x",
                            "jQuery", "NodeJS", "PhantomJS", "Google API",
                            "JSHint", "AJAX", "JSON", "REST", "APIs", "Mustache Template"
                        ]
                    },
                    {
                        title: "PHP/MySQL",
                        icon: "php",
                        content: [
                            "PHP", "YII Framework 1.x", "Twig Template",
                            "Laravel 5", "Blade Template", "Slim 3", "Mustache Template",
                            "OOP", "MVC", "Wordpress", "MySQL", "Redis"
                        ]
                    },
                    {
                        title: "Other",
                        icon: "misc",
                        content: [
                            "Git", "npm", "bower", "Grunt", "Gulp", "Composer", "Scrum/Agile Methodology", "Photoshop"
                        ]
                    },
                ]
            },
            about: {
                title: "About me",
                content: ["High susceptibility to information, self-learning, \n" +
                "                            the ability to articulate ideas;\n" +
                "                            Resistance to stress, high performance in any situation;\n" +
                "                            Organized, responsible, highly reliable, sociable, \n" +
                "                            exercise motivation to achieve new goals."]
            },
            education: {
                title: "Education",
                periods: [
                    {
                        year: "1989",
                        title: "I was born in Ukraine, Gorlovka",
                        content: [
                            "My parents taught me mathematics from an early age. " +
                            "When I went to the first class of school, I already knew " +
                            "how to add and subtract numbers of any length"
                        ]

                    },
                    {
                        year: "2006",
                        title: "I finished school",
                        content: [
                            "I studied in class with an extra " +
                            "load of physics and mathematics. In " +
                            "addition, I took physics lesson for 2 " +
                            "years and 1.5 years hand-to-hand fighting"
                        ]
                    },
                    {
                        year: "2010",
                        title: "First degree in computer science",
                        content: [
                            "Four years have passed like a moment. \n" +
                            " A lot of cources, from basic algorithms, \n" +
                            " popular languages synatx to develope \n" +
                            " web and mobile applications."
                        ]
                    },
                    {
                        year: "2011",
                        title: "Second degree in computer ecological and economic monitoring",
                        content: [
                            "Using the knowledge gained in the development \n" +
                            " of algorithms to collect and analyze \n" +
                            " data from weather stations.",
                            "High score for the defense of the diploma"
                        ]
                    },
                    {
                        year: "2014",
                        title: "I immigrated to Israel",
                        content: [""]
                    }
                ]
            },
            experience: {
                title: "Experience",
                places: [
                    {
                        where: "Private Company",
                        range: "2013-2014",
                        position: "Front-end developer / php programmer",
                        desc: [
                            "Our team has developed gaming resourse. I developed back office " +
                            "to administration of the resource and web application for users.",
                            "I used languages and technoloies like a: HTML5, CSS, SCSS, JavaScript, " +
                            "JQuery, AngularJS, NodeJS, JSON, AJAX, \n" +
                            "PHP, YII framework, Twig, grunt, Composer, git, etc.",
                            "We practiced Scrum methodology and used Atlassian JIRA Agile for " +
                            "the managment of the project."
                        ]
                    },
                    {
                        where: "PJSC “Concern Stirol",
                        range: "2012-2013",
                        position: "Specialist of the tender",
                        desc: [
                            "Search and selection of participants for tender",
                            "Coordination of negotiations between the customer and perfomer",
                            "Organize presentations and meetings",
                            "Analyze of propositions and preparation to completion of the tender procedure.",
                        ]
                    },

                ]
            },
            contacts: {
                title: "Contacts",
                contacts: [
                    {
                        icon: "fa-phone",
                        link: {
                            text: "+972-58-557-11-57",
                            title: "phone",
                            href: "tel:+972-58-557-11-57",
                            class: "",
                            target: ""
                        }
                    },
                    {
                        icon: "fa-envelope",
                        link: {
                            text: "balaban.andrew.work@gmail.com",
                            title: "email",
                            href: "mailto:balaban.andrew.work@gmail.com",
                            class: "",
                            target: ""
                        }

                    },
                    {
                        icon: "fa-linkedin",
                        title: "LinkedIn",
                        link: {
                            text: "https://il.linkedin.com/pub/andrew-balaban/b0/77b/163",
                            title: "LinkedIn",
                            href: "https://il.linkedin.com/pub/andrew-balaban/b0/77b/163",
                            class: "",
                            target: "_blank"
                        }
                    },
                    {
                        icon: "fa-skype",
                        title: "Skype",
                        link: {
                            text: "Hybridplus",
                            title: "Skype",
                            href: "skype:Hybridplus?call",
                            class: "",
                            target: ""
                        }
                    }
                ]

            },
            skills_graph: {
                title: "Skills",
                skills: [
                    {
                        title: "HTML",
                        percent: "0.74"
                    },
                    {
                        title: "CSS",
                        percent: "0.74"
                    },
                    {
                        title: "JavaScript",
                        percent: "0.6"
                    },
                    {
                        title: "PHP",
                        percent: "0.5"
                    },
                    {
                        title: "MySQL",
                        percent: "0.25"
                    }
                ]
            },
            languages: {
                title: "Languages",
                languages: [
                    {
                        title: "English",
                        stars: 3
                    },
                    {
                        title: "Hebrew",
                        stars: 3
                    },
                    {
                        title: "Ukrainian",
                        stars: 5
                    },
                    {
                        title: "Russian",
                        stars: 5
                    }
                ]
            },
            hobbies: {
                title: "Hobbies",
                hobbies: [
                    {
                        title: 'Programming',
                        icon: 'fa-code'
                    },
                    {
                        title: 'Bodybuilding',
                        icon: 'fa-heartbeat'
                    },
                    {
                        title: 'Guitar',
                        icon: 'fa-music'
                    },

                ]
            }
        }
    };

    res.locals = obj;

    res.render('index');
};

