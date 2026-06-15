import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import React, { Fragment } from "react";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Akshay",
  lastName: "Salvi",
  name: "Akshay S. Salvi",
  role: "Ph.D. Research Scholar | Materials Engineer",
  avatar: "/images/My Picture.jpeg",
  email: "akshaysunil@iisc.ac.in",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Marathi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Research Updates</>,
  description: <>Research publications, patents and materials innovation.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/akshay-salvi",
    essential: true,
  },
  {
    name: "Google Scholar",
    icon: "book",
    link: "https://share.google/7W6KWAz9mQ93fp6xj",
    essential: true,
  },
  {
    name: "ResearchGate",
    icon: "globe",
    link: "https://www.researchgate.net/profile/Akshay_Salvi",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Research Portfolio`,
  description:
    "Materials Engineer, Polymer Technologist and PhD Research Scholar at IISc Bangalore.",
  headline: (
    <>
      Engineering the Future of
      <br />
      Advanced Composite Materials
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>Research Portfolio</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text onBackground="brand-medium">Featured Research</Text>
      </Row>
    ),
    href: "/research",
  },
  subline: (
    <>
      Ph.D. Research Scholar at
      <Text as="span" size="xl" weight="strong"> IISc Bangalore</Text>
      <br />
      Developing sustainable, multifunctional and self-healing composite
      materials for aerospace applications.
    </>
  ),
};
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,

  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: true,
  },

  calendar: {
    display: false,
    link: "",
  },

  intro: {
    display: true,
    title: "Introduction",
   description: (
  <>
    I am a Ph.D. Research Scholar in the Department of Materials Engineering at
    the Indian Institute of Science (IISc), Bangalore, specializing in advanced
    polymer composites and aerospace materials.

    <br />
    <br />

    My research focuses on Carbon Fiber Reinforced Thermoplastic (CFRTP) and
    Carbon Fiber Reinforced Vitrimer Epoxy (CFRvE) composites, with emphasis on
    interface engineering, self-healing systems, nanomaterials, and sustainable
    multifunctional composite technologies.

    <br />
    <br />

    I completed my M.Tech from IIT Kharagpur and B.Tech from ICT Mumbai. Through
    the DAAD-IIT Master's Sandwich Programme, I conducted research at TU Dresden
    and the Leibniz Institute for Polymer Research (IPF Dresden), Germany.

    <br />
    <br />

    My work has resulted in 7 peer-reviewed publications, 2 granted patents,
    and 1 patent application in the fields of advanced composites, vitrimer
    systems, polymer foams, and nanomaterial-enabled engineering materials.
  </>
),
  },

  work: {
    display: true,
    title: "Professional Experience",

    experiences: [
      {
        company: "JSW Paints Pvt. Ltd.",
        timeframe: "Jun 2019 – Sep 2020",
        role: "Graduate Engineer Trainee → Junior Manager (Coil Coatings)",
        achievements: [
          <>Contributed to scaling production from 400 kL/month to 2000 kL/month.</>,
          <>Supervised premixing, milling, thinning, tinting and packing operations.</>,
          <>Coordinated with planning, quality control and dispatch teams.</>,
          <>Operated Distributed Control Systems (DCS).</>,
          <>Used SAP GUI for inventory management and material movement.</>,
        ],
        images: [],
      },

      {
        company: "Leibniz Institute for Polymer Research Dresden (IPF Dresden)",
        timeframe: "Sep 2021 – Mar 2022",
        role: "DAAD-IIT Master's Sandwich Programme Scholar",
        achievements: [
          <>Conducted Master's thesis research on printable supercapacitor electrodes.</>,
          <>Worked in the Functional Nanocomposites and Blends Group.</>,
          <>Developed conductive materials based on PANI and rGO.</>,
          <>Collaborated with researchers at TU Dresden, Germany.</>,
        ],
        images: [],
      },

      {
        company: "Raychem RPG Pvt. Ltd.",
        timeframe: "May 2018 – Aug 2018",
        role: "Summer Intern",
        achievements: [
          <>Studied extrusion and injection molding operations.</>,
          <>Worked on process establishment of extruded tubes.</>,
          <>Characterized heat-shrink products and polymer materials.</>,
          <>Operated Banbury Mixer, Two-Roll Mill and Hot Press equipment.</>,
        ],
        images: [],
      },

      {
        company: "Bharat Petroleum Corporation Limited (BPCL)",
        timeframe: "May 2017 – Jun 2017",
        role: "Trainee",
        achievements: [
          <>Studied operations of the Catalytic Cracking Unit.</>,
          <>Analyzed refinery process utilities and DCS systems.</>,
          <>Performed material and energy balance calculations.</>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",

    institutions: [
      {
        name: "Indian Institute of Science (IISc), Bangalore",
        description: (
          <>
            <strong>Ph.D. in Materials Engineering</strong>
            <br />
            Research Scholar (2022 – Present)
            <br />
            Research Focus: CFRTP, CFRvE, Aerospace Composites and Nanomaterials
          </>
        ),
      },

      {
        name: "Indian Institute of Technology Kharagpur",
        description: (
          <>
            <strong>M.Tech in Materials Science and Engineering</strong>
            <br />
            CGPA: 9.54 / 10
            <br />
            DAAD-IIT Master's Sandwich Programme Scholar
          </>
        ),
      },

      {
        name: "Institute of Chemical Technology (ICT), Mumbai",
        description: (
          <>
            <strong>B.Tech in Polymer Engineering and Technology</strong>
            <br />
            Minor: Chemical Engineering
            <br />
            CGPA: 7.45 / 10
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Research & Technical Expertise",

    skills: [
      {
        title: "Research Interests",
        description: (
          <>
            Carbon Fiber Reinforced Polymers (CFRP), Carbon Fiber Reinforced
            Thermoplastic Polymers (CFRTP), Nanomaterials, EMI Shielding,
            Polymer Foams, Vitrimer Systems, Self-Healing Composites and
            Thermoplastic Laminates.
          </>
        ),
        tags: [],
        images: [],
      },

      {
        title: "Composite Manufacturing",
        description: (
          <>
            Composite Processing, Thermoplastic Laminates, Carbon Fiber
            Reinforced Composites, Vitrimer Composites, Polymer Processing and
            Interface Engineering.
          </>
        ),
        tags: [],
        images: [],
      },

      {
        title: "Materials Characterization",
        description: (
          <>
            SEM, DMA, Rheometry, UTM, DSC, TGA, FTIR, XRD, Mechanical Testing,
            Thermal Analysis and Viscoelastic Characterization.
          </>
        ),
        tags: [],
        images: [],
      },

      {
        title: "Software & Tools",
        description: (
          <>
            OriginPro, SAP GUI, Microsoft Office, Advanced Excel and Scientific
            Data Analysis.
          </>
        ),
        tags: [],
        images: [],
      },

      {
        title: "Research Achievements",
        description: (
          <>
            7 Peer-Reviewed Publications
            <br />
            2 Granted Indian Patents
            <br />
            1 Patent Application
            <br />
            DAAD-IIT Master's Sandwich Programme Scholar
            <br />
            International Research Experience at TU Dresden & IPF Dresden,
            Germany
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/patents",
  label: "Patents",
  title: "Patents & Intellectual Property",
  description: "Granted patents and patent applications.",
};

const work: Work = {
  path: "/research",
  label: "Research",
  title: "Research",
  description:
    "Advanced polymer composites, vitrimer systems, nanomaterials and aerospace structures.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
