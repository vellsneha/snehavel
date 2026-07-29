
import feedExploreVideo from "../../UIs/FeedForward/FeedForward Explore Page Demo.mp4?url";
import feedExplorePoster from "../../UIs/FeedForward/Explore.jpg?url";
import feedHome from "../../UIs/FeedForward/Home.png?url";
import feedVolunteer from "../../UIs/FeedForward/volunteer.jpg?url";

import communityDashboard from "../../UIs/AdVantage Community/Dashboard final for community.png?url";
import communityDashboardLight from "../../UIs/AdVantage Community/Dashboard final for community (light).png?url";
import communityProfile from "../../UIs/AdVantage Community/Community Profile.png?url";
import communityEventDetail from "../../UIs/AdVantage Community/Individual Events Page final.png?url";
import communityEvents from "../../UIs/AdVantage Community/Events Page final.png?url";
import communityAddEvent from "../../UIs/AdVantage Community/Community Add Event page.png?url";
import communityForum from "../../UIs/AdVantage Community/Discussion forum final.png?url";
import communityBlogs from "../../UIs/AdVantage Community/Blogs Page.png?url";
import communityUser from "../../UIs/AdVantage Community/User Profile.png?url";
import communityLogin from "../../UIs/AdVantage Community/User login.png?url";

import adHome from "../../UIs/AdVantage/2.0/AdVantage Website.png?url";
import adAbout from "../../UIs/AdVantage/2.0/About us page.png?url";
import adTestimonials from "../../UIs/AdVantage/2.0/Testimonials.png?url";
import adContact from "../../UIs/AdVantage/2.0/Contact us.jpg?url";
import adApplications from "../../UIs/AdVantage/2.0/Community applications.png?url";
import adDashboard from "../../UIs/AdVantage/2.0/dashboard.png?url";
import adLofiHome from "../../UIs/AdVantage/lofi/Home page.png?url";
import adLofiWire1 from "../../UIs/AdVantage/lofi/Wireframe - 1.png?url";

import taskLogo from "../../UIs/TASK Mobile App/logo screen.png?url";
import taskLogin from "../../UIs/TASK Mobile App/username input screen.png?url";
import taskDashAssigned from "../../UIs/TASK Mobile App/dashboard - assigned to me.png?url";
import taskDashFollowed from "../../UIs/TASK Mobile App/dashboard - Followed by me.png?url";
import taskDashReported from "../../UIs/TASK Mobile App/dashboard - reported by me.png?url";
import taskView from "../../UIs/TASK Mobile App/View Ticket.png?url";
import taskView2 from "../../UIs/TASK Mobile App/View Ticket 2.png?url";
import taskNew from "../../UIs/TASK Mobile App/New ticket - additional (1).png?url";
import taskMenu from "../../UIs/TASK Mobile App/Menu.png?url";
import taskSearch from "../../UIs/TASK Mobile App/Search.png?url";
import taskMilestone from "../../UIs/TASK Mobile App/Milestone.png?url";

import nfcMain from "../../UIs/NFC Main/NFC main page.jpg?url";
import nfcAbout from "../../UIs/NFC Main/NFC About.jpg?url";
import nfcServices from "../../UIs/NFC Main/NFC Services.jpg?url";
import nfcProduct from "../../UIs/NFC Main/NFC Product 1.jpg?url";
import nfcContact from "../../UIs/NFC Main/NFC Contact Us.jpg?url";

import pulseDesktop from "../../UIs/Pulse/Desktop View 2.0.jpg?url";
import pulseWebsite from "../../UIs/Pulse/Website 1.0.png?url";
import pulseAndroid from "../../UIs/Pulse/Android View 2.0.png?url";
import pulseAndroidAlt from "../../UIs/Pulse/Android 1.0.png?url";
import pulseLofi from "../../UIs/Pulse/lofi home page.png?url";

import finGraphDashboard from "../../UIs/FinGraph/FinGraph Dashboard.jpg?url";
import finGraphKG from "../../UIs/FinGraph/FinGraph KG.png?url";
import finGraphBloomberg from "../../UIs/FinGraph/Bloomberg freelancer reliance.png?url";
import finGraphBusinessWire from "../../UIs/press/businesswire-freelancer-services.png?url";
import hinduTierColleges from "../../UIs/press/hindu-tier-colleges-engineering.png?url";

export type DesignScreenFrame = "macbook" | "browser" | "card" | "phone" | "phone-flat";

export type DesignScreenLayout =
  | "full"
  | "pair"
  | "columns"
  | "phones"
  | "phones-mockup"
  | "explorer";

export type DesignScreen = {
  src?: string;
  poster?: string;
  caption?: string;
  alt?: string;
  url?: string;
  frame?: DesignScreenFrame;
  mediaType?: "image" | "video";
  compact?: boolean;
  fullHeight?: boolean;
  placeholder?: boolean;
  placeholderLabel?: string;
};

export type DesignContentSection = {
  label: string;
  title?: string;
  body?: string;
  screens?: DesignScreen[];
  layout?: DesignScreenLayout;
};

export type DesignPressNote = {
  source: string;
  section?: string;
  headline: string;
  points?: string[];
  href?: string;
  src?: string;
  alt?: string;
  extraSrc?: string;
  extraAlt?: string;
};

export type DesignContextNote = {
  before: string;
  linkDesignId?: string;
  linkLabel?: string;
  after?: string;
};

export type DesignContent = {
  lead?: DesignScreen;
  press?: DesignPressNote;
  context?: DesignContextNote;
  centered?: boolean;
  columnIntroCount?: number;
  sections: DesignContentSection[];
};

export const designContentById: Record<string, DesignContent> = {
  d1: {
    centered: true,
    columnIntroCount: 2,
    press: {
      source: "Bloomberg",
      section: "Economics",
      headline: "Freelancer reliance rises in the US, with 20% of work done by them",
      src: finGraphBloomberg,
      alt: "Bloomberg article: Freelancer reliance rises in the US, with 20% of work done by them",
      href: "https://www.bloomberg.com/news/articles/2023-10-31/freelancer-reliance-rises-in-us-with-20-of-work-done-by-them",
      extraSrc: finGraphBusinessWire,
      extraAlt:
        "Business Wire article: Nearly Half of Gig, Freelance, and Contract Workers Are Denied Access to Financial Services They Can Afford",
    },
    sections: [
      {
        label: "Challenge",
        title: "Irregular income with no usable credit signal",
        body: "Freelancer deposits look noisy to banks. We needed one score for stability, concentration risk, and runway, not a dump of raw transactions.",
      },
      {
        label: "Approach",
        title: "Score first, evidence second",
        body: "Lead with a 0 to 100 Financial Identity Score. Charts and a knowledge graph sit underneath so the number is explainable.",
      },
      {
        label: "Dashboard",
        title: "From dense prototype to clearer dashboard",
        body: "This first dashboard was built during a hackathon, so it tried to show every metric in one place. The redesign is meant to simplify the layout, make the main score easier to understand, and highlight only the most useful insights first.",
        layout: "full",
        screens: [
          {
            src: finGraphDashboard,
            caption: "Hackathon dashboard, v1",
            alt: "FinGraph dashboard with financial score, charts, and risk panels",
            frame: "browser",
            url: "fingraph.app/dashboard",
            fullHeight: true,
          },
        ],
      },
      {
        label: "Graph",
        title: "Relationships behind the score",
        body: "A Neo4j view of customers, accounts, merchants, and bills, with priority actions sitting next to the score.",
        screens: [
          {
            src: finGraphKG,
            caption: "Knowledge graph explorer",
            alt: "FinGraph knowledge graph with financial identity score and priority actions",
            frame: "browser",
            url: "fingraph.app/graph",
          },
        ],
      },
      {
        label: "Outcome",
        title: "The score worked. The graph did not earn its keep.",
        body: "Judges asked what the graph was actually for, and we did not have a sharp answer. The redesign keeps the score. The graph needs a real job before it stays.",
      },
      {
        label: "Next",
        title: "Redesigned dashboard, v2",
        layout: "full",
        screens: [
          {
            placeholder: true,
            placeholderLabel: "Redesign in progress",
            alt: "FinGraph redesigned dashboard placeholder",
          },
        ],
      },
    ],
  },

  d2: {
    centered: true,
    columnIntroCount: 2,
    lead: {
      src: feedHome,
      alt: "FeedForward home page",
      url: "feedforward.app",
    },
    sections: [
      {
        label: "Challenge",
        title: "Users who cannot afford a confusing app",
        body: "First time hunger, low literacy, older users, people who do not speak English as a first language. We shipped English and Spanish, plus a full phone call AI path for anyone who will not use the screen.",
      },
      {
        label: "Approach",
        title: "Feel like a conversation, keep the call button loud",
        body: "Dog mascot, calm copy, AI kept out of the way. The call CTA is the one loud control, always within reach.",
      },
      {
        label: "Selected screens",
        title: "Explore and Volunteer",
        body: "Two focused flows instead of one overloaded form.",
        layout: "full",
        screens: [
          {
            src: feedExploreVideo,
            poster: feedExplorePoster,
            caption: "Explore: search food banks by your preferences",
            alt: "FeedForward explore screen",
            url: "feedforward.app/explore",
            mediaType: "video",
          },
          {
            src: feedVolunteer,
            caption: "Volunteer: find where help is needed",
            alt: "FeedForward volunteer screen",
            url: "feedforward.app/volunteer",
          },
        ],
      },
      {
        label: "Outcome",
        title: "Second place, and a much bigger lesson",
        body: "Judges responded well to how clearly the flows were split, but they pushed on something more important: what happens when someone needs a real person. That gap changed how I think about designing for vulnerable users. A system can feel polished and still fail if it does not offer human support at the moment someone needs reassurance most.",
      },
    ],
  },

  d3: {
    centered: true,
    columnIntroCount: 2,
    sections: [
      {
        label: "Challenge",
        title: "WhatsApp cannot do discovery or ops",
        body: "Student groups in Hyderabad lived in chat apps. Those tools were bad for finding communities, tracking activity, or giving people roles.",
      },
      {
        label: "Approach",
        title: "A role based MVP",
        body: "Members, leaders, and managers each get a different view. We only ran a pilot. Funding stopped a wider launch.",
      },
      {
        label: "Product surfaces",
        title: "Community product map",
        body: "Dashboard, profiles, events, forum, blogs. One place instead of scattered chats.",
        layout: "explorer",
        screens: [
          {
            src: communityDashboardLight,
            caption: "Dashboard",
            alt: "Community platform dashboard",
            url: "community.advantage.app/dashboard",
            frame: "browser",
          },
          {
            src: communityDashboard,
            caption: "Dashboard, dark",
            alt: "Community dashboard dark theme",
            url: "community.advantage.app/dashboard",
            frame: "browser",
          },
          {
            src: communityProfile,
            caption: "Community profile",
            alt: "Community profile page",
            url: "community.advantage.app/profile",
            frame: "browser",
          },
          {
            src: communityUser,
            caption: "Member profile",
            alt: "User profile",
            url: "community.advantage.app/member",
            frame: "browser",
          },
          {
            src: communityEvents,
            caption: "Events",
            alt: "Events listing page",
            url: "community.advantage.app/events",
            frame: "browser",
          },
          {
            src: communityEventDetail,
            caption: "Event detail",
            alt: "Individual event page",
            url: "community.advantage.app/events/1",
            frame: "browser",
          },
          {
            src: communityAddEvent,
            caption: "Add event",
            alt: "Create community event page",
            url: "community.advantage.app/events/new",
            frame: "browser",
          },
          {
            src: communityForum,
            caption: "Discussion forum",
            alt: "Discussion forum page",
            url: "community.advantage.app/forum",
            frame: "browser",
          },
          {
            src: communityBlogs,
            caption: "Blogs",
            alt: "Blogs page",
            url: "community.advantage.app/blogs",
            frame: "browser",
          },
          {
            src: communityLogin,
            caption: "Login",
            alt: "User login screen",
            url: "community.advantage.app/login",
            frame: "browser",
          },
        ],
      },
      {
        label: "Outcome",
        title: "One pilot, then a needed reset",
        body: "We only got to run one pilot before the larger vision lost momentum. At the time it felt disappointing, but it also made something very clear to me: not every good product idea needs to become a full platform. Sometimes the more honest move is to step back, see what people actually need, and build something lighter that has a better chance of surviving.",
      },
    ],
  },

  d4: {
    centered: true,
    columnIntroCount: 2,
    press: {
      source: "The Hindu",
      section: "Education",
      headline:
        "Why engineering graduates from tier 2 and tier 3 colleges struggle: the gap that few talk about",
      src: hinduTierColleges,
      alt: "The Hindu article on why engineering graduates from tier 2 and tier 3 colleges struggle",
      href: "https://www.thehindu.com/education/why-engineering-graduates-from-tier-3-colleges-struggle-the-skill-gap-that-few-talk-about/article69584730.ece",
    },
    context: {
      before:
        "This piece names what tier 2 and tier 3 engineering grads often lack: skills, industry exposure, and a clear path forward. We were building a platform so those students could explore, learn, and find communities. This page is the marketing site that introduced students and communities to that product. See ",
      linkDesignId: "d3",
      linkLabel: "Advantage Ecosystem",
      after: " for the platform design itself.",
    },
    sections: [
      {
        label: "Challenge",
        title: "Two audiences, one site",
        body: "Students need people and communities. Communities need discovery. The pitch had to land in seconds.",
      },
      {
        label: "Approach",
        title: "Bold over corporate",
        body: "The audience was tier 3 students who usually see less polish. We went modern and loud instead of generic startup clean.",
      },
      {
        label: "Process",
        title: "Wireframe to final",
        body: "A few lo fi passes locked the structure before visual polish.",
        layout: "pair",
        screens: [
          { src: adLofiWire1, caption: "Early wireframe", alt: "AdVantage wireframe", frame: "card" },
          { src: adLofiHome, caption: "Lo fi home exploration", alt: "AdVantage lo fi home", frame: "card" },
        ],
      },
      {
        label: "Selected screens",
        title: "Website 2.0",
        body: "Home through contact. The live marketing surface.",
        layout: "explorer",
        screens: [
          {
            src: adDashboard,
            caption: "Dashboard peek",
            alt: "AdVantage dashboard",
            url: "advantage.app/dashboard",
            frame: "browser",
          },
          {
            src: adApplications,
            caption: "Community applications",
            alt: "Community applications page",
            url: "advantage.app/applications",
            frame: "browser",
          },
          {
            src: adTestimonials,
            caption: "Testimonials",
            alt: "AdVantage testimonials",
            url: "advantage.app/testimonials",
            frame: "browser",
          },
          {
            src: adHome,
            caption: "Home",
            alt: "AdVantage website home",
            url: "advantage.app",
            frame: "browser",
          },
          {
            src: adAbout,
            caption: "About us",
            alt: "AdVantage about page",
            url: "advantage.app/about",
            frame: "browser",
          },
          {
            src: adContact,
            caption: "Contact",
            alt: "AdVantage contact page",
            url: "advantage.app/contact",
            frame: "browser",
          },
        ],
      },
      {
        label: "Outcome",
        title: "Launched, with early community trials",
        body: "The site went live. A handful of communities signed up for a trial.",
      },
    ],
  },

  d5: {
    centered: true,
    columnIntroCount: 2,
    sections: [
      {
        label: "Challenge",
        title: "Replace a legacy web tracker",
        body: "NFC’s old tool was desktop heavy with long text fields. TASK rebuilt ticket tracking for phone first updates.",
      },
      {
        label: "Approach",
        title: "Ownership views and fast capture",
        body: "Assigned, followed, and reported dashboards. Update a ticket or check status without opening a laptop.",
      },
      {
        label: "Onboarding",
        title: "Splash to login",
        layout: "phones",
        screens: [
          { src: taskLogo, caption: "Brand splash", alt: "TASK logo screen" },
          { src: taskLogin, caption: "Username entry", alt: "TASK login screen" },
        ],
      },
      {
        label: "Daily work",
        title: "Dashboards and ticket detail",
        layout: "phones",
        screens: [
          {
            src: taskDashAssigned,
            caption: "Assigned to me",
            alt: "TASK dashboard assigned tickets",
          },
          {
            src: taskDashFollowed,
            caption: "Followed by me",
            alt: "TASK dashboard followed tickets",
          },
          {
            src: taskDashReported,
            caption: "Reported by me",
            alt: "TASK dashboard reported tickets",
          },
          { src: taskView, caption: "Ticket detail", alt: "TASK view ticket" },
          { src: taskView2, caption: "Ticket detail, alternate", alt: "TASK view ticket alternate" },
        ],
      },
      {
        label: "Actions",
        title: "Create, search, navigate",
        layout: "phones",
        screens: [
          { src: taskNew, caption: "New ticket", alt: "TASK new ticket screen" },
          { src: taskSearch, caption: "Search", alt: "TASK search screen" },
          { src: taskMilestone, caption: "Milestones", alt: "TASK milestone screen" },
          { src: taskMenu, caption: "Menu and navigation", alt: "TASK menu" },
        ],
      },
      {
        label: "Outcome",
        title: "Shipped after the internship",
        body: "It went live after I left. Next I would have pushed Kanban style boards.",
      },
    ],
  },

  d6: {
    centered: true,
    columnIntroCount: 2,
    sections: [
      {
        label: "Challenge",
        title: "Services, client work, and products on one site",
        body: "NFC needed leads and credibility without three separate stories fighting for attention.",
      },
      {
        label: "Approach",
        title: "Home, services, products, contact",
        body: "Straight information architecture, one visual system, a clear path to get in touch.",
      },
      {
        label: "Selected screens",
        title: "Brand website",
        body: "Home through contact. The live marketing surface.",
        layout: "explorer",
        screens: [
          {
            src: nfcMain,
            caption: "Home",
            alt: "NFC Solutions main page",
            url: "nfcsolutions.com",
            frame: "browser",
          },
          {
            src: nfcAbout,
            caption: "About",
            alt: "NFC About page",
            url: "nfcsolutions.com/about",
            frame: "browser",
          },
          {
            src: nfcServices,
            caption: "Services",
            alt: "NFC Services page",
            url: "nfcsolutions.com/services",
            frame: "browser",
          },
          {
            src: nfcProduct,
            caption: "Product detail",
            alt: "NFC Product page",
            url: "nfcsolutions.com/products",
            frame: "browser",
          },
          {
            src: nfcContact,
            caption: "Contact",
            alt: "NFC Contact page",
            url: "nfcsolutions.com/contact",
            frame: "browser",
          },
        ],
      },
      {
        label: "Outcome",
        title: "Still live",
        body: "The site is still in production.",
      },
    ],
  },

  d7: {
    centered: true,
    columnIntroCount: 2,
    sections: [
      {
        label: "Challenge",
        title: "Stand next to NFC without getting lost in it",
        body: "PULSE had to feel connected to NFC Solutions, but still read as its own offering with a simple path to inquire.",
      },
      {
        label: "Approach",
        title: "Story first, screens second",
        body: "We mapped the landing narrative before polishing UI, what it is, who it helps, and the next step.",
      },
      {
        label: "Exploration",
        title: "Early layout passes",
        layout: "full",
        screens: [
          { src: pulseLofi, caption: "Lo fi home", alt: "Pulse lo fi home page", frame: "card" },
        ],
      },
      {
        label: "Website",
        title: "Desktop marketing pages",
        layout: "full",
        screens: [
          { src: pulseDesktop, caption: "Desktop view", alt: "Pulse desktop view" },
          { src: pulseWebsite, caption: "Website 1.0", alt: "Pulse website" },
        ],
      },
      {
        label: "Mobile",
        title: "Smaller screens",
        layout: "phones-mockup",
        screens: [
          { src: pulseAndroid, caption: "Mobile view 2.0", alt: "Pulse mobile view", frame: "phone" },
          { src: pulseAndroidAlt, caption: "Mobile view 1.0", alt: "Pulse mobile 1.0", frame: "phone" },
        ],
      },
      {
        label: "Outcome",
        title: "Shipped as the service front door",
        body: "It gave PULSE a clean public face without competing with the main NFC site.",
      },
    ],
  },
};
