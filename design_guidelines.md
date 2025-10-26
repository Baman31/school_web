# School Website Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with Educational Focus

Drawing inspiration from modern educational platforms (Khan Academy's clarity, Coursera's professionalism, and Duolingo's engagement), combined with service-oriented design patterns from trusted institutions. The design prioritizes parental trust while maintaining visual appeal for students.

**Core Design Principles:**
1. **Trust Through Clarity** - Clean layouts, clear information hierarchy, professional presentation
2. **Authentic Warmth** - Real photography, genuine testimonials, welcoming color palette
3. **Effortless Navigation** - Intuitive structure for parents seeking quick answers
4. **Engagement Balance** - Professional for parents, dynamic for students

## Typography System

**Heading Family:** Inter (700, 600, 500 weights)
- H1: 3.5rem (56px) / Leading tight / Weight 700 / Letter-spacing -0.02em
- H2: 2.5rem (40px) / Leading tight / Weight 700 / Letter-spacing -0.01em  
- H3: 2rem (32px) / Leading snug / Weight 600
- H4: 1.5rem (24px) / Leading snug / Weight 600
- H5: 1.25rem (20px) / Leading normal / Weight 600

**Body Family:** Open Sans (400, 500, 600 weights)
- Body Large: 1.125rem (18px) / Leading relaxed / Weight 400
- Body Regular: 1rem (16px) / Leading relaxed / Weight 400
- Body Small: 0.875rem (14px) / Leading normal / Weight 400
- Labels/Buttons: 0.875-1rem / Weight 600 / Letter-spacing 0.01em

**Special Typography:**
- Stats/Numbers: Inter 700, larger sizes for impact
- Student sections: Slightly playful with rounded forms
- Testimonial quotes: Italic, slightly larger leading

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing (buttons, inputs): 2, 4
- Component spacing: 6, 8, 12
- Section spacing: 16, 20, 24
- Consistent vertical rhythm using py-16 to py-24 for sections

**Grid Structure:**
- Container: max-w-7xl with px-4 to px-8
- Content sections: max-w-6xl 
- Text content: max-w-4xl for readability
- Multi-column: 3-column on lg, 2-column on md, 1-column on mobile
- Asymmetric layouts for visual interest in hero and feature sections

**Responsive Breakpoints:**
- Mobile-first development
- sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- Touch targets: minimum 44px for mobile interactions

## Component Library

**Navigation:**
- Sticky header with subtle shadow on scroll
- Multi-level dropdown menus with hover states
- Mobile: slide-in drawer with clear hierarchy
- CTAs prominent: "Apply Now" and "Schedule Visit" always visible
- Breadcrumbs on internal pages for orientation

**Hero Sections:**
- Full-width background images with overlay gradient (dark to transparent)
- Large impactful headlines (H1) with supporting subheadline
- Dual CTA buttons: Primary "Start Application" + Secondary "Virtual Tour"
- Buttons with backdrop-blur for visibility over images
- Hero height: 85vh on desktop, 70vh on mobile
- Include trust indicators: "Ranked #1 in District" or accreditation badges

**Cards:**
- Feature cards: White background, subtle shadow, rounded-2xl corners
- Program cards: Image top, content bottom, hover lift effect
- Faculty cards: Circular profile images, name/qualification overlay
- Testimonial cards: Quote styling, photo + name + relationship
- Consistent padding: p-6 to p-8

**Forms:**
- Multi-step wizard for admission applications with progress indicator
- Clear labels above inputs, helper text below
- Error states with red accent, success with green
- Input fields: rounded-lg, border-2, focus ring
- Large touch-friendly inputs (h-12 minimum)
- Upload zones: dashed borders, drag-and-drop visual feedback

**Buttons:**
- Primary: Solid fill, bold text, rounded-lg, shadow-md
- Secondary: Outline style, transparent background
- Tertiary: Text only with underline on hover
- Sizes: sm (h-10), md (h-12), lg (h-14)
- Icon + text combinations for clarity

**Data Displays:**
- Stats counters: Large numbers (H2-H3), descriptive labels below
- Timeline for admission process: Vertical on mobile, horizontal on desktop
- Table styling: Striped rows, sticky headers, mobile-responsive card view
- Achievement badges: Icon + text, colorful accents
- Results charts: Clean, minimal styling with clear legends

**Modals & Overlays:**
- Image lightbox for gallery viewing
- Video player modals with clean controls
- Application preview overlays
- Appointment booking calendar modal
- Backdrop blur with semi-transparent background

**Interactive Elements:**
- 360° virtual tour: Full-screen experience with navigation hotspots
- Chatbot: Bottom-right bubble, expanding panel, conversational UI
- Image galleries: Masonry grid with lightbox
- Video testimonials: Play button overlay, muted autoplay option
- Calendar: Month/week views with event details on click

## Page-Specific Layouts

**Homepage:**
- Hero with authentic campus imagery, bold admission CTA
- Trust bar: Accreditations, awards, statistics (single row, 4-5 items)
- Featured programs: 3-column grid with images
- Video testimonials: Carousel with prominent video cards
- Quick stats: 4-column metrics (students enrolled, years established, etc.)
- News/Events: 2-column grid, latest 4 items
- CTA section: Large centered, "Begin Your Journey" with virtual tour link

**Admission Pages:**
- Step-by-step process visualization at top
- Fee structure: Clear table with breakdown
- Application form: Multi-step progress bar, save draft functionality
- Eligibility checklist with icons
- Important dates: Timeline or calendar view
- FAQ accordion for common questions

**Gallery/Virtual Tour:**
- Masonry grid for photos (2-4 columns responsive)
- Category filters: All, Campus, Classrooms, Sports, Events
- 360° tour: Immersive full-screen with navigation map
- Video gallery: Thumbnail grid with play overlay

**Portals (Parent/Student/Admin):**
- Sidebar navigation: Fixed left sidebar on desktop, collapsible on mobile
- Dashboard cards: Grid layout with key metrics
- Data tables: Sortable columns, search, filters
- Clean form layouts for data entry
- Action buttons: Consistently placed top-right

## Images

**Hero Images:**
- Homepage: Wide-angle shot of campus main building with students in foreground, natural lighting
- About Us: School gathering or assembly, sense of community
- Academics: Students engaged in learning, bright classroom environment
- Admissions: Parent-child consultation or campus visit moment
- Facilities: Modern infrastructure, sports fields, or lab equipment

**Supporting Images:**
- Faculty profiles: Professional headshots with warm, approachable expressions
- Student life: Authentic candid shots of activities, events, sports
- Gallery: Mix of professional photography and event coverage
- Testimonials: Parents/students in natural settings
- Blog: Relevant educational imagery

**Image Treatment:**
- Consistent aspect ratios: 16:9 for banners, 4:3 for cards, 1:1 for profiles
- Subtle overlay gradients on hero images for text readability
- Rounded corners on all images: rounded-xl to rounded-2xl
- Lazy loading for performance

## Accessibility & Usability

- WCAG 2.1 AA compliant color contrast ratios
- Focus states: Visible outline on all interactive elements
- Keyboard navigation: Tab order logical, skip links present
- Alt text: Descriptive for all images
- ARIA labels: Screen reader friendly
- Form validation: Clear error messages, accessible announcements
- Video: Captions/subtitles available

## Animation Strategy

**Subtle, Purposeful Animations:**
- Scroll-triggered fade-ins for sections (once, not repetitive)
- Hover lift on cards: transform translate-y-1
- Button hover: Subtle scale or brightness change
- Smooth transitions: 200-300ms ease-in-out
- Loading states: Skeleton screens or spinners
- No distracting auto-playing animations
- Stats counter animation on scroll into view

## Mobile Optimization

- Bottom navigation bar for key actions
- Click-to-call buttons prominent
- WhatsApp chat integration: Fixed bottom-left bubble
- Collapsible sections for long content
- Swipeable image galleries
- Simplified tables: Card view on mobile
- Large form inputs with appropriate keyboard types

This design system creates a trustworthy, modern educational website that serves parents seeking information, students exploring opportunities, and administrators managing operations efficiently.