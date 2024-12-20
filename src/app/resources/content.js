import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Eric',
    lastName:  'Lovell',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Actor',
    avatar:    '/images/avatar.jpg',
    location:  'America/Chicago',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about film and technology.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'IMDB',
        icon: 'imdb',
        link: 'https://www.imdb.com/name/nm10369017/',
    },
    {
        name: 'Facebook',
        icon: 'facebook',
        link: 'https://www.facebook.com/eleeluv61/',
    },
    // {
    //     name: 'X',
    //     icon: 'x',
    //     link: '',
    // },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:eleeluv@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Eric Lovell</>,
    subline: <>Actor. Check out my projects.</>,
    subheader: <>Feature Films, Short Films, and Voiceovers</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Eric is a Dallas-based actor with a passion for collectibles.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Credits',
        experiences: [
            {
                company: 'MVP',
                timeframe: '2019',
                role: 'Jason Webster',
                type: 'Short',
                achievements: [
                    <>Drama Short</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: 'https://youtu.be/mFzST6RIrBI?si=o_dra5MWq4hEDEtt',
                        alt: 'Making The Cut, a film starring Eric Lovell',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'On the Run',
                timeframe: '2021',
                role: 'Marshall',
                achievements: [
                    <>Crime Short</>,
                ],
                images: [
                    {
                        src: '/images/projects/project-01/ontherun.jpg',
                        alt: 'On the Run film starring Eric Lovell',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/vfwposter.png',
                        alt: 'On the Run film starring Eric Lovell',
                        width: 16,
                        height: 9
                    }
                 ]
            },
            {
                company: 'Mothersh1p',
                timeframe: '2020',
                role: 'Black',
                achievements: [
                    <>Sci-Fi Web Series Short</>,
                ],
                images: [ 
                    {
                        src: 'https://youtu.be/6U09ALLbuqo?si=MFKFQryXNaIen5sm',
                        alt: 'Mothersh1p film starring Eric Lovell',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/eric_black_mothersh1p.jpeg',
                        alt: 'Eric Lovell as Black in Mothersh1p',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Making The Cut',
                timeframe: '2019',
                role: 'Drooling Bobby',
                type: 'Short',
                achievements: [
                    <>Horror Thriller Short</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/makingthecut.jpg',
                        alt: 'Making The Cut still shot, a film starring Eric Lovell',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'VFW',
                timeframe: '2019',
                role: 'Hyper',
                type: 'Feature',
                achievements: [
                    <>Action Crime Horror Thriller Feature Film</>,
                    <a href="https://www.amazon.com/gp/video/detail/amzn1.dv.gti.a18af0ed-458b-43f7-bdb7-bfde6c6a5a44?ref_=imdbref_tt_wbr_shv__pvt_aiv" target="_blank" rel="noopener noreferrer">View on Amazon Prime</a> 
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/vfw.png',
                        alt: 'VFW film poster',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/ericvfw.png',
                        alt: 'VFW, a film with Eric Lovell',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Butterfly',
                timeframe: '2019',
                role: 'Ivan-Russian Security Guard #1',
                achievements: [
                    <>Action Short</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: 'https://youtu.be/50RMWI-5lwQ?si=NGQ8JA_ECGuBO5mK',
                        alt: 'Butterfly, a film starring Eric Lovell',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/ivan.png',
                        alt: 'Eric Lovell as Ivan in Butterfly',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'First Draft',
                timeframe: '2018',
                role: 'Club Patron',
                achievements: [
                    <>Comedy Short</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/firstdraft.png',
                        alt: 'First Draft movie poster',
                        width: 16,
                        height: 9
                    }
                ]
            },
        ]
    },
    stats: {
        display: true, // set to false to hide this section
        title: 'Stats',
        stat: [
            { name: 'Height', value: '6 feet 1 inch' },
            { name: 'Weight', value: '230 lbs' },
            { name: 'Eye Color', value: 'Blue' },
            { name: 'Hair Color', value: 'Brown' },
            { name: 'Waist', value: '32' },
            { name: 'Inseam', value: '32' },
            { name: 'Shoe Size', value: '11 US' },
            // { name: 'Age', value: 28 },
            { name: 'Hat Size', value: 'Large' },
            { name: 'Shirt Size', value: '16 1/4 33 large' },
            { name: 'Glove Size', value: '10 large' },
             { name: 'Coat/Dress', value: '42 reg' },
   
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: <>TBell Acting Studio</>,
                description: <>I have years of advanced acting training including method acting. </>
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Guitar',
                description: <>I play a black Gibson Les Paul that I affectionately call Kersantan.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/guitar.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Aviation',
                description: <>I logged aviation experience in a Piper Cherokee Warrior II.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/erichangar.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/flying.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/projects/project-01/mothersh1p.jpg', 
            alt: 'Mothersh1p',
            orientation: 'vertical'
        },
        { 
            src: '/images/projects/project-01/erichangar.jpg', 
            alt: 'Eric in the hangar',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/project-01/ericvfw.png', 
            alt: 'VFW',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/project-01/flying.jpg', 
            alt: 'Eric piloting a Piper Cherokee II',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/project-01/guitar.png', 
            alt: "Eric's Les Paul guitar",
            orientation: 'vertical'
        },
        { 
            src: '/images/projects/project-01/ivan.png', 
            alt: 'Eric as Ivan in Butterfly',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/project-01/makingthecut.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/project-01/vfw.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        // { 
        //     src: '/images/gallery/img-09.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // { 
        //     src: '/images/gallery/img-10.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // { 
        //     src: '/images/gallery/img-11.jpg', 
        //     alt: 'image',
        //     orientation: 'vertical'
        // },
        // { 
        //     src: '/images/gallery/img-12.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // { 
        //     src: '/images/gallery/img-13.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // { 
        //     src: '/images/gallery/img-14.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };