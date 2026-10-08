# ll

**Use inspiration from the image
Lingua Bridge Academy - Product Specification

1. Product Overview

Lingua Bridge Academy is a comprehensive language learning platform designed for small to medium-sized language schools to compete with established international programs. The website serves as a complete enrollment and information system, providing multilingual program information, level assessment tools, class scheduling, instructor profiles, and streamlined online enrollment with integrated payment processing. Built with accessibility as a core principle following WCAG 2.2 AA standards, this platform ensures an inclusive experience through keyboard-only navigation, comprehensive focus indicators, proper semantic markup, and internationalized content. The technical implementation uses vanilla HTML, Tailwind CSS (via CDN), and minimal JavaScript to ensure fast loading, broad compatibility, and easy maintenance without complex build processes.

2. Key Features & Requirements

Homepage & Language Selection

Requirements:





Prominent language selector allowing users to view content in their preferred language



Hero section highlighting the school's unique value proposition



Quick navigation to key sections (Programs, Placement Test, Schedule, Enroll)



Trust indicators showing accreditations and success metrics



Featured testimonials from successful students



Clear call-to-action for free placement test

Mock Data:





Hero Headline: "Master a New Language. Transform Your Future."



Subheadline: "Professional language instruction in 8 languages with flexible scheduling and proven results. Join 2,500+ students who achieved fluency with us."



Quick Stats:





15 Years of Excellence



2,500+ Successful Students



24 Expert Native Instructors



8 Languages Offered



Featured Testimonial: "I went from beginner to B2 in just 18 months. The instructors are patient, knowledgeable, and the small class sizes made all the difference." - Sarah Mitchell, Spanish Program Graduate

Visual Requirements:





Language selector in top-right corner with flag icons and language names



Hero section with high-quality image showing diverse students in classroom setting



bg-gradient-to-br from-blue-600 to-indigo-700 overlay on hero image



Stats displayed in grid grid-cols-2 md:grid-cols-4 layout with text-4xl font-bold numbers



Testimonial card with bg-white shadow-xl rounded-2xl p-8 styling



Primary CTA button: bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 text-white font-semibold px-8 py-4 rounded-lg transition-all

Program Catalog

Requirements:





Display all available language programs with clear categorization



Show program details including levels offered, class formats, and duration



Provide pricing information with transparent breakdown



Link to sample curriculum and learning outcomes for each level



Enable filtering by language, level, and class format



Include downloadable program brochures (PDF mockups)

Mock Data:





Language Programs:





English for Speakers of Other Languages (ESL)





All levels A1-C2



Group classes, Private lessons, Online, Intensive



$299/month group, $65/hour private, $249/month online, $899 intensive (4 weeks)



Spanish





All levels A1-C2



Group classes, Private lessons, Online, Weekend workshops



$299/month group, $65/hour private, $249/month online



French





Levels A1-B2



Group classes, Private lessons, Online



$299/month group, $65/hour private, $249/month online



German





Levels A1-C1



Group classes, Private lessons, Intensive



$299/month group, $65/hour private, $899 intensive



Mandarin Chinese





Levels A1-B2



Group classes, Private lessons, Online



$319/month group, $70/hour private, $269/month online



Japanese





Levels A1-B2



Group classes, Private lessons, Weekend workshops



$319/month group, $70/hour private



Italian





Levels A1-B1



Group classes, Private lessons



$299/month group, $65/hour private



Portuguese





Levels A1-B1



Group classes, Private lessons, Online



$299/month group, $65/hour private, $249/month online



Class Formats:





Group Classes: 8-12 students, 8 sessions/month, 90 minutes each



Private Lessons: One-on-one, flexible scheduling, customized curriculum



Online Classes: Live virtual instruction, 8 sessions/month, 75 minutes each



Intensive Courses: 4 weeks, daily sessions, 3 hours/day



Weekend Workshops: Saturday or Sunday, 3-hour sessions, topic-focused

Visual Requirements:





Program cards in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 layout



Each card with bg-white border-2 border-gray-200 hover:border-indigo-400 rounded-xl p-6 transition-all styling



Language name in text-2xl font-bold text-gray-900 with flag icon



Level badges as inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800



Price display in text-3xl font-extrabold text-indigo-600 with "from" qualifier



Filter sidebar with checkboxes: focus:ring-2 focus:ring-indigo-500 for keyboard users

Level Placement Quiz

Requirements:





Interactive multi-section assessment tool



Sections for grammar, vocabulary, reading comprehension, listening, and self-assessment



Progressive disclosure showing one section at a time



Real-time scoring with immediate results



Recommended level placement based on score



Option to schedule speaking assessment with instructor



Save and resume capability for incomplete assessments



Results downloadable as PDF

Mock Data:





Grammar Section (20 questions):





Question 1: "She ___ to the store yesterday." (a) go (b) goes (c) went (d) going - Correct: (c)



Question 2: "I have ___ finished my homework." (a) yet (b) already (c) still (d) always - Correct: (b)



Question 3: "If I ___ more time, I would travel." (a) have (b) had (c) will have (d) having - Correct: (b)



[17 additional grammar questions]



Vocabulary Section (15 questions):





Question 1: "Synonym for 'happy':" (a) sad (b) joyful (c) angry (d) tired - Correct: (b)



Question 2: "'Eloquent' means:" (a) fluent and persuasive (b) quiet (c) confused (d) basic - Correct: (a)



[13 additional vocabulary questions]



Reading Comprehension (5 passages):





Passage 1: Short news article about local event (A2 level) - 3 questions



Passage 2: Email correspondence about business meeting (B1 level) - 3 questions



Passage 3: Opinion editorial on environmental policy (B2 level) - 4 questions



Passage 4: Academic article excerpt on linguistics (C1 level) - 4 questions



Passage 5: Literary passage from classic novel (C2 level) - 4 questions



Listening Section (10 audio clips - mockup):





Clip 1: Restaurant conversation - order food (A1 level)



Clip 2: Weather forecast - understand key details (A2 level)



Clip 3: Job interview dialogue - comprehend questions (B1 level)



[7 additional listening scenarios]



Self-Assessment:





"I can introduce myself and others" - Never / Rarely / Sometimes / Often / Always



"I can understand main ideas in complex texts" - Never / Rarely / Sometimes / Often / Always



"I can express myself fluently and spontaneously" - Never / Rarely / Sometimes / Often / Always



[5 additional self-assessment criteria]



Scoring Matrix:





0-20 points: Beginner (A1)



21-40 points: Elementary (A2)



41-60 points: Intermediate (B1)



61-75 points: Upper-Intermediate (B2)



76-90 points: Advanced (C1)



91-100 points: Proficiency (C2)

Visual Requirements:





Quiz interface in centered container: max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8



Progress indicator at top: w-full bg-gray-200 rounded-full h-3 with bg-indigo-600 h-3 rounded-full transition-all fill



Section headers with text-xl font-semibold text-gray-900 mb-6 styling



Question cards with bg-gray-50 border-l-4 border-indigo-500 p-6 mb-4 rounded-r-lg



Radio buttons/checkboxes with prominent focus states: focus:ring-4 focus:ring-indigo-300



Navigation buttons: Previous bg-gray-200 hover:bg-gray-300, Next/Submit bg-indigo-600 hover:bg-indigo-700



Results page with visual level indicator showing recommended placement



"Schedule Speaking Test" button prominently displayed in results



Accessibility: Skip to results button for keyboard users, ARIA live region for score updates

Class Scheduling & Calendar

Requirements:





Monthly calendar view showing all available classes



Filter by language, level, format, time of day, and instructor



Display class capacity and remaining spots



Allow provisional seat reservation (requires enrollment to confirm)



Show upcoming session start dates



Export calendar to iCal/Google Calendar format



Indicate holidays and break periods



Show makeup class policy and options

Mock Data:





Current Month Classes:





Spanish A1 Group - Monday/Wednesday 6:00-7:30 PM - Instructor: Maria Rodriguez - 8/12 spots filled



Spanish A1 Group - Tuesday/Thursday 10:00-11:30 AM - Instructor: Maria Rodriguez - 5/12 spots filled



Spanish B1 Group - Monday/Wednesday 7:45-9:15 PM - Instructor: Maria Rodriguez - 10/12 spots filled



French A2 Group - Tuesday/Thursday 6:00-7:30 PM - Instructor: Jean-Pierre Dubois - 7/10 spots filled



French A2 Online - Wednesday 8:00-9:15 PM - Instructor: Jean-Pierre Dubois - 12/15 spots filled



German A1 Group - Saturday 9:00 AM-12:00 PM - Instructor: Hans Mueller - 6/10 spots filled



German B2 Group - Thursday 7:00-8:30 PM - Instructor: Hans Mueller - 9/10 spots filled



Mandarin A1 Group - Monday/Wednesday 7:00-8:30 PM - Instructor: Wei Zhang - 8/10 spots filled



Mandarin A1 Weekend - Sunday 10:00 AM-1:00 PM - Instructor: Wei Zhang - 4/8 spots filled



Japanese A1 Group - Tuesday/Thursday 6:30-8:00 PM - Instructor: Yuki Tanaka - 11/12 spots filled



ESL B1 Group - Monday/Wednesday/Friday 9:00-10:30 AM - Instructor: Emma Williams - 14/15 spots filled



ESL B2 Intensive - Daily 1:00-4:00 PM (4 weeks) - Instructor: Emma Williams - 6/8 spots filled



ESL C1 Group - Tuesday/Thursday 7:00-8:30 PM - Instructor: Emma Williams - 8/10 spots filled



Upcoming Session Start Dates:





January 8, 2024 - Winter Session begins



February 5, 2024 - Mid-Winter intensive starts



March 11, 2024 - Spring Session begins



April 15, 2024 - Spring intensive starts



May 6, 2024 - Summer Session begins



Holiday Breaks:





December 23-January 1 - Winter Holiday



March 25-29 - Spring Break



July 1-7 - Summer Break

Visual Requirements:





Calendar displayed in traditional month grid: grid grid-cols-7 gap-1



Day cells with aspect-square border border-gray-200 p-2 hover:bg-indigo-50 cursor-pointer styling



Classes indicated by colored dots/badges within date cells (color by language)



Sidebar filter panel with space-y-4 between filter groups



Class detail modal on click: fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center



Modal content: bg-white rounded-2xl p-8 max-w-2xl max-h-screen overflow-y-auto



Capacity indicator as progress bar: green if <50% full, yellow if 50-80%, red if >80%



"Reserve Spot" button with focus indicator: focus:ring-4 focus:ring-indigo-300



Legend explaining color coding for different languages



View toggle buttons: Month / Week / List views

Instructor Directory

Requirements:





Profiles of all teaching staff with photos



Display credentials, certifications, and teaching specialties



Show languages taught and proficiency levels



Include teaching philosophy statement



Link to sample lesson video (mockup)



Student ratings and reviews



Availability calendar for private lessons



"Request This Instructor" option for booking

Mock Data:





Instructor Profiles:





Maria Rodriguez - Spanish





Experience: 12 years



Education: MA in Applied Linguistics, University of Barcelona



Certifications: DELE Examiner, SIELE Certified



Specialties: Business Spanish, Conversational fluency, Grammar fundamentals



Levels taught: A1-C2



Teaching Philosophy: "Language learning should be joyful and practical. I create immersive experiences that connect grammar to real-world communication."



Rating: 4.9/5.0 (127 reviews)



Languages: Spanish (Native), English (C2), Catalan (Native)





Jean-Pierre Dubois - French





Experience: 8 years



Education: BA in French Literature, Université de Lyon



Certifications: DELF/DALF Examiner, Alliance Française Certified



Specialties: French culture, Pronunciation, Literature



Levels taught: A1-B2



Teaching Philosophy: "Understanding French culture is inseparable from mastering the language. My classes blend linguistic precision with cultural immersion."



Rating: 4.8/5.0 (89 reviews)



Languages: French (Native), English (C1), Spanish (B2)





Hans Mueller - German





Experience: 15 years



Education: PhD in Germanic Studies, Humboldt University Berlin



Certifications: Goethe-Institut Examiner, TestDaF Certified



Specialties: Academic German, Technical language, Grammar mastery



Levels taught: A1-C2



Teaching Philosophy: "German grammar has a reputation for complexity, but systematic instruction reveals elegant patterns. I make the impossible feel achievable."



Rating: 4.9/5.0 (156 reviews)



Languages: German (Native), English (C2), French (B1)





Wei Zhang - Mandarin Chinese





Experience: 10 years



Education: MA in Teaching Chinese as a Foreign Language, Beijing Normal University



Certifications: HSK Examiner, Confucius Institute Certified



Specialties: Character writing, Tonal accuracy, Business Chinese



Levels taught: A1-B2



Teaching Philosophy: "Mandarin challenges students in unique ways, but the rewards are extraordinary. I focus on building confidence through incremental mastery."



Rating: 5.0/5.0 (94 reviews)



Languages: Mandarin (Native), English (C1), Cantonese (Native)





Yuki Tanaka - Japanese





Experience: 6 years



Education: BA in Japanese Language Education, Waseda University



Certifications: JLPT N1, Japanese Language Teacher Certification



Specialties: JLPT preparation, Keigo (honorific language), Pop culture



Levels taught: A1-B2



Teaching Philosophy: "Japanese language opens doors to one of the world's richest cultures. I balance traditional methods with modern, engaging content."



Rating: 4.9/5.0 (71 reviews)



Languages: Japanese (Native), English (C1), Korean (B1)





Emma Williams - English (ESL)





Experience: 14 years



Education: MA in TESOL, King's College London



Certifications: CELTA, DELTA, IELTS Examiner



Specialties: Academic English, IELTS/TOEFL prep, Business communication



Levels taught: A1-C2



Teaching Philosophy: "English proficiency transforms professional and academic opportunities. My student-centered approach ensures measurable progress in every session."



Rating: 4.9/5.0 (203 reviews)



Languages: English (Native), Spanish (B2), French (B1)

Visual Requirements:





Instructor grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8



Profile cards: bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all



Profile photo: w-full aspect-square object-cover with grayscale hover:grayscale-0 transition-all



Name in text-2xl font-bold text-gray-900



Language badge: bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full



Star rating displayed with gold stars and numerical score



Credentials in text-sm text-gray-600 with bullet separators



"View Full Profile" button with keyboard focus ring



Detailed profile page with tabbed sections: About, Credentials, Reviews, Availability



Review section with star breakdown visualization



"Book Private Lesson" CTA button prominently placed

Online Enrollment Form

Requirements:





Multi-step form with progress indicator



Step 1: Personal information and contact details



Step 2: Language and level selection (or placement test results)



Step 3: Class schedule preferences



Step 4: Payment information and billing address



Step 5: Review and confirmation



Form validation with clear error messages



Auto-save functionality to prevent data loss



Accessibility: Proper labels, error announcements, keyboard navigation



Confirmation email preview



Terms and conditions acknowledgment

Mock Data:





Personal Information Fields:





First Name: Required, text input



Last Name: Required, text input



Email: Required, email validation



Phone: Required, phone format validation



Date of Birth: Required, date picker



Country of Origin: Dropdown with 195+ countries



Native Language: Dropdown with common languages



Emergency Contact Name: Required



Emergency Contact Phone: Required



How did you hear about us?: Radio options (Google Search, Social Media, Referral, Advertisement, Other)



Program Selection:





Language: Dropdown (English, Spanish, French, German, Mandarin, Japanese, Italian, Portuguese)



Current Level: Radio options (Complete Beginner, Took Placement Test, Self-Assessment: A1-C2)



Desired Class Format: Checkboxes (Group Classes, Private Lessons, Online Classes, Intensive Course)



Preferred Schedule: Checkboxes (Weekday Mornings, Weekday Afternoons, Weekday Evenings, Weekends)



Start Date: Dropdown with available session start dates



Payment Options:





Payment Plan: Radio (Pay in Full - 5% discount, Monthly Installments, Pay per Session)



Payment Method: Radio (Credit Card, Debit Card, Bank Transfer, PayPal - mockup only)



Cardholder Name: Text input



Card Number: Masked input with validation



Expiration Date: MM/YY format



CVV: 3-4 digit masked input



Billing Address: Same as contact / Different address



Special Offers Code: Optional text input



Terms & Policies:





Enrollment Agreement: Checkbox required



Cancellation Policy: Checkbox acknowledgment (14-day money-back guarantee, 48-hour cancellation for private lessons)



Privacy Policy: Checkbox acknowledgment



Marketing Communications: Optional checkbox (receive promotional emails)

Visual Requirements:





Form container: max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12



Progress steps at top: flex justify-between mb-12 with numbered circles



Active step: bg-indigo-600 text-white, completed: bg-green-500 text-white, upcoming: bg-gray-200 text-gray-600



Form fields with clear labels: block text-sm font-medium text-gray-700 mb-2



Input styling: w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300 focus:outline-none



Required field indicator: text-red-500 ml-1 asterisk



Error messages: text-red-600 text-sm mt-1 flex items-center with icon



Success validation: border-green-500 with checkmark icon



Section headers: text-xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200



Navigation buttons: Previous bg-gray-200 hover:bg-gray-300, Next bg-indigo-600 hover:bg-indigo-700 text-white



Review step with summary cards for each section



Submit button: bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-lg focus:ring-4 focus:ring-green-300



Loading state for submission with spinner



Confirmation page with enrollment details and next steps

Student Portal (Login Mockup)

Requirements:





Secure login interface with username/password



Dashboard showing enrolled classes and upcoming sessions



Access to course materials (mockup file links)



Attendance record and progress tracking



Payment history and invoices



Communication with instructors



Homework submission area (mockup)



Calendar integration with class schedule



Update personal information



Request certificate upon completion

Mock Data:





Login Credentials (mockup):





Email: student@example.com



Password: ******** (show/hide toggle)



"Remember Me" checkbox



"Forgot Password?" link



Dashboard Overview:





Welcome message: "Welcome back, Sarah! Your next class is Spanish B1 on Monday at 6:00 PM"



Current Enrollment: Spanish B1 Group Class (Monday/Wednesday 6:00-7:30 PM)



Progress: 12 of 24 sessions completed (50%)



Attendance: 11 of 12 classes attended (92%)



Current Grade: 88% (B+)



Upcoming Homework: Unit 6 Written Assignment due March 15



Messages: 2 new messages from instructor



Course Materials:





Unit 1: Introduction to Subjunctive Mood - PDF (download)



Unit 2: Past Subjunctive Practice - PDF (download)



Unit 3: Conditional Statements - PDF (download)



Audio Files: Pronunciation exercises (ZIP file)



Supplemental Readings: Cultural texts (folder)



Payment History:





January 8, 2024: $299.00 - Spanish B1 Group (January session) - Paid



February 5, 2024: $299.00 - Spanish B1 Group (February session) - Paid



March 5, 2024: $299.00 - Spanish B1 Group (March session) - Paid



Total Paid: $897.00

Visual Requirements:





Login page: centered card with max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8



Logo and "Student Portal" heading at top



Input fields with lock/envelope icons



"Login" button spanning full width with bg-indigo-600 hover:bg-indigo-700 text-white



Dashboard layout: sidebar navigation + main content area



Sidebar: bg-gray-900 text-white w-64 min-h-screen p-6 with menu items



Active menu item: bg-indigo-600 rounded-lg



Main content: flex-1 bg-gray-50 p-8



Welcome banner: bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mb-8



Stats cards in grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6



Progress bars showing completion percentage



Material download links with file type icons



Message center with unread indicator badges



Responsive: sidebar collapses to hamburger menu on mobile

Contact & Location Information

Requirements:





Physical school locations with maps (mockup)



Contact form for inquiries



Phone numbers for different departments



Email addresses by department



Business hours for each location



Directions and parking information



Public transportation access



FAQ section addressing common questions



Live chat widget (mockup)



Social media links

Mock Data:





Main Campus:





Address: 125 Language Boulevard, Suite 300, Metro City, ST 12345



Phone: (555) 123-4567



Email: info@linguabridge.academy



Hours: Monday-Friday 8:00 AM - 9:00 PM, Saturday 9:00 AM - 5:00 PM, Sunday 10:00 AM - 3:00 PM



Parking: Free parking in building garage, entrance on Oak Street



Transit: Metro Line 2 (Language Center Station), Bus Routes 15, 22, 44



Downtown Location:





Address: 789 Central Avenue, Downtown Metro City, ST 12301



Phone: (555) 123-4568



Email: downtown@linguabridge.academy



Hours: Monday-Friday 9:00 AM - 8:00 PM, Saturday 10:00 AM - 4:00 PM, Closed Sunday



Parking: Street parking and nearby garage ($5/hour)



Transit: Metro Lines 1 & 3 (Central Station), Bus Routes 8, 12, 30



Department Contacts:





Admissions: admissions@linguabridge.academy, (555) 123-4569



Academic Support: academic@linguabridge.academy, (555) 123-4570



Billing & Payments: billing@linguabridge.academy, (555) 123-4571



Corporate Training: corporate@linguabridge.academy, (555) 123-4572



FAQ Topics:





Do I need to take a placement test? Yes, unless complete beginner



What is your cancellation policy? 14-day money-back guarantee



Can I switch classes after enrolling? Yes, within first two sessions



Do you offer corporate/group discounts? Yes, 15% for 5+ employees



Are materials included in tuition? Yes, digital materials included



Can I study multiple languages simultaneously? Yes, many students do



Do you offer visa documentation for students? Yes, for intensive programs



What are your instructor qualifications? All native/near-native with teaching certifications



Contact Form Fields:





Name: Required



Email: Required



Phone: Optional



Language of Interest: Dropdown



Preferred Contact Method: Radio (Email, Phone)



Message: Textarea, required



Best Time to Contact: Dropdown (Morning, Afternoon, Evening)

Visual Requirements:





Two-column layout: contact information left, form right



Location cards with embedded map mockup: border-2 border-gray-200 rounded-xl overflow-hidden



Map placeholder: bg-gray-200 h-64 flex items-center justify-center text-gray-500



Contact details with icons (phone, email, clock, car, bus)



Form styling consistent with enrollment form



FAQ accordion: questions in font-semibold text-gray-900 cursor-pointer hover:text-indigo-600



Answers expand/collapse with smooth transition



Live chat widget fixed bottom-right: fixed bottom-4 right-4 bg-indigo-600 text-white rounded-full p-4 shadow-lg



Social media icons in footer: flex space-x-4 text-2xl text-gray-600 hover:text-indigo-600

Testimonials & Success Stories

Requirements:





Featured student success stories with before/after proficiency levels



Video testimonials (mockup thumbnails)



Written reviews with star ratings



Student demographics showing diversity



Achievement badges (completed levels, certifications earned)



Filter by language program



"Share Your Story" submission form

Mock Data:





Featured Success Stories:





Sarah Mitchell - Spanish Program





Starting Level: Complete Beginner (A1)



Current Level: Upper-Intermediate (B2)



Time to Progress: 18 months



Quote: "I enrolled with zero Spanish knowledge. Now I conduct business meetings in Spanish and recently negotiated a contract with a client in Mexico City. The progress has been life-changing."



Achievement: Passed DELE B2 exam, Promoted to Regional Manager Latin America





James Chen - French Program





Starting Level: Elementary (A2)



Current Level: Advanced (C1)



Time to Progress: 2 years



Quote: "The instructors here don't just teach grammar; they teach you how to think in the language. I moved to Paris for work and felt completely prepared."



Achievement: Accepted to Sorbonne University, DALF C1 certified





Priya Patel - German Program





Starting Level: Beginner (A1)



Current Level: Intermediate (B1)



Time to Progress: 14 months



Quote: "Learning German seemed impossible with my busy schedule, but the flexible online classes made it work. My German colleagues are impressed!"



Achievement: Relocated to Berlin office, Goethe-Zertifikat B1





Marcus Johnson - Mandarin Program





Starting Level: Complete Beginner



Current Level: Elementary (A2)



Time to Progress: 10 months



Quote: "I always wanted to learn Mandarin but thought I was too old. This program proved age is just a number. The small class sizes gave me confidence."



Achievement: HSK 3 certified, Planning extended trip to China





Elena Rodriguez - English (ESL) Program





Starting Level: Intermediate (B1)



Current Level: Proficiency (C2)



Time to Progress: 2.5 years



Quote: "English proficiency opened doors I never imagined. I went from struggling with presentations to teaching university courses in English."



Achievement: PhD program acceptance, IELTS 8.5, University instructor



Student Statistics:





Total Students: 2,547



Countries Represented: 78



Average Progress: 1.2 levels per year



Exam Pass Rate: 94%



Student Satisfaction: 4.8/5.0



Additional Reviews:





"Best language school in the city. Patient teachers and effective methods." - Robert Kim, 5/5 stars



"Worth every penny. I'm finally fluent in French after years of trying elsewhere." - Amanda Foster, 5/5 stars



"Great value and flexibility. The online classes are just as good as in-person." - David Torres, 5/5 stars



"The placement test accurately assessed my level. No time wasted reviewing what I already knew." - Lisa Wang, 5/5 stars

Visual Requirements:





Hero section with rotating success story carousel



Story cards: bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl



Before/After level badges with arrow showing progression



Student photo: w-24 h-24 rounded-full border-4 border-indigo-500



Quote in text-xl italic text-gray-700 leading-relaxed



Achievement tags: bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium



Video thumbnails with play button overlay: relative group cursor-pointer



Play button: absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60



Statistics section: bg-indigo-600 text-white py-16 text-center



Stats in large numbers: text-5xl font-extrabold mb-2



Review grid with star ratings prominently displayed



"Share Your Story" CTA button: bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg

3. Design System

Color Palette

Primary Colors:





Brand Indigo: #4F46E5 (text-indigo-600, bg-indigo-600)



Dark Indigo: #3730A3 (text-indigo-800, bg-indigo-800)



Light Indigo: #A5B4FC (text-indigo-300, bg-indigo-300)

Secondary Colors:





Amber Accent: #F59E0B (text-amber-500, bg-amber-500)



Purple Accent: #9333EA (text-purple-600, bg-purple-600)

Neutral Colors:





White: #FFFFFF (bg-white)



Lightest Gray: #F9FAFB (bg-gray-50)



Light Gray: #F3F4F6 (bg-gray-100)



Medium Gray: #E5E7EB (bg-gray-200)



Border Gray: #D1D5DB (border-gray-300)



Text Gray: #6B7280 (text-gray-500)



Dark Gray: #374151 (text-gray-700)



Darkest: #111827 (text-gray-900)

Semantic Colors:





Success: #10B981 (text-green-500, bg-green-500)



Warning: #F59E0B (text-amber-500, bg-amber-500)



Error: #EF4444 (text-red-500, bg-red-500)



Info: #3B82F6 (text-blue-500, bg-blue-500)

Accessibility Requirement:





All text/background combinations must meet WCAG 2.2 AA contrast ratio of 4.5:1 for normal text, 3:1 for large text



Links must have 3:1 contrast against surrounding text or non-color identifier (underline)

Typography

Font Families:





Primary: System UI (font-sans) - Uses -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif



Headings: Inter (loaded via CDN if available, fallback to system)



Code/Monospace: Mono (font-mono)

Font Sizes:





XS: 0.75rem / 12px (text-xs) - Labels, captions



SM: 0.875rem / 14px (text-sm) - Body small, form fields



Base: 1rem / 16px (text-base) - Body text



LG: 1.125rem / 18px (text-lg) - Emphasis text



XL: 1.25rem / 20px (text-xl) - Subheadings



2XL: 1.5rem / 24px (text-2xl) - Section headers



3XL: 1.875rem / 30px (text-3xl) - Page headers



4XL: 2.25rem / 36px (text-4xl) - Hero text



5XL: 3rem / 48px (text-5xl) - Large displays



6XL: 3.75rem / 60px (text-6xl) - Extra large displays

Font Weights:





Light: 300 (font-light)



Normal: 400 (font-normal)



Medium: 500 (font-medium)



Semibold: 600 (font-semibold)



Bold: 700 (font-bold)



Extrabold: 800 (font-extrabold)



Black: 900 (font-black)

Line Heights:





Tight: 1.25 (leading-tight) - Headings



Snug: 1.375 (leading-snug) - Subheadings



Normal: 1.5 (leading-normal) - Body text



Relaxed: 1.625 (leading-relaxed) - Large body text



Loose: 2 (leading-loose) - Spacious text

Letter Spacing:





Tighter: -0.05em (tracking-tighter)



Tight: -0.025em (tracking-tight)



Normal: 0 (tracking-normal)



Wide: 0.025em (tracking-wide)



Wider: 0.05em (tracking-wider)



Widest: 0.1em (tracking-widest)

Core Components

Buttons:





Primary Button: bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 focus:outline-none text-white font-semibold px-6 py-3 rounded-lg transition-all



Secondary Button: bg-white border-2 border-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 focus:outline-none text-indigo-600 font-semibold px-6 py-3 rounded-lg transition-all



Outline Button: border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 focus:outline-none text-gray-700 font-medium px-6 py-3 rounded-lg transition-all



Text Button: text-indigo-600 hover:text-indigo-700 hover:underline focus:ring-2 focus:ring-indigo-300 focus:outline-none font-medium px-2 py-1 rounded



Icon Button: w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 focus:outline-none transition-all



Disabled State: opacity-50 cursor-not-allowed (no hover/focus effects)

Cards:





Basic Card: bg-white border border-gray-200 rounded-xl p-6 shadow-sm



Elevated Card: bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow



Interactive Card: bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 hover:shadow-lg cursor-pointer transition-all focus-within:ring-4 focus-within:ring-indigo-300



Header Card: bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-xl p-8 shadow-xl



Outline Card: border-2 border-gray-300 rounded-xl p-6 hover:border-indigo-400 transition-all

Forms:





Text Input: w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition-all



Select Dropdown: w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition-all appearance-none



Textarea: w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition-all resize-y min-h-32



Checkbox: w-5 h-5 border-2 border-gray-300 rounded text-indigo-600 focus:ring-4 focus:ring-indigo-300 focus:ring-offset-0 cursor-pointer



Radio Button: w-5 h-5 border-2 border-gray-300 text-indigo-600 focus:ring-4 focus:ring-indigo-300 focus:ring-offset-0 cursor-pointer



Label: block text-sm font-medium text-gray-700 mb-2



Error Message: text-sm text-red-600 mt-1 flex items-center gap-1



Help Text: text-sm text-gray-500 mt-1



Field Group: space-y-6

Navigation:





Top Navigation Bar: bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm



Nav Link: text-gray-700 hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded px-3 py-2 font-medium transition-colors



Active Nav Link: text-indigo-600 font-semibold



Dropdown Menu: absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-48



Dropdown Item: block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 focus:bg-indigo-50 focus:text-indigo-600 focus:outline-none



Breadcrumb: flex items-center space-x-2 text-sm text-gray-600



Breadcrumb Separator: text-gray-400 (using / or › character)

Tables:





Table Container: overflow-x-auto rounded-lg border border-gray-200



Table: min-w-full divide-y divide-gray-200



Table Header: bg-gray-50



Header Cell: px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider



Table Row: hover:bg-gray-50 transition-colors



Table Cell: px-6 py-4 text-sm text-gray-900



Striped Rows: Use even:bg-gray-50 on  elements

Modals:





Modal Overlay: fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4



Modal Container: bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl



Modal Header: border-b border-gray-200 px-6 py-4 flex items-center justify-between



Modal Body: px-6 py-6



Modal Footer: border-t border-gray-200 px-6 py-4 flex justify-end space-x-3



Close Button: Icon button in top-right with × symbol

Alerts:





Success Alert: bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg



Warning Alert: bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg



Error Alert: bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg



Info Alert: bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg



Alert Text: text-sm font-medium with matching color (green-800, amber-800, red-800, blue-800)

Badges:





Default Badge: inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800



Status Badges: Same structure with color variants (blue, green, amber, red, purple)



Outline Badge: border-2 with transparent background

Progress Indicators:





Progress Bar Container: w-full bg-gray-200 rounded-full h-3 overflow-hidden



Progress Bar Fill: bg-indigo-600 h-full rounded-full transition-all duration-300 with dynamic width



Loading Spinner: border-4 border-gray-200 border-t-indigo-600 rounded-full w-8 h-8 animate-spin



Skeleton Loader: bg-gray-200 animate-pulse rounded with appropriate dimensions

Accessibility Features

Keyboard Navigation:





All interactive elements must be focusable via Tab key



Logical tab order following visual layout



Skip to main content link at top of page: sr-only focus:not-sr-only to show on focus



Escape key closes modals and dropdowns



Arrow keys navigate within dropdown menus and radio groups



Enter/Space activates buttons and toggles

Focus Indicators:





Visible focus ring on all interactive elements: focus:ring-4 focus:ring-indigo-300 focus:outline-none



Minimum 2px focus indicator with 3:1 contrast ratio



Focus indicators must not be removed with CSS



Custom focus styles for complex components maintaining visibility

ARIA Labels & Roles:





Use semantic HTML elements first (, , 

, etc.)



Add ARIA labels for icon buttons: aria-label="Close menu"



Mark up form errors: aria-describedby="error-message-id"



Live regions for dynamic content: aria-live="polite" or aria-live="assertive"



Current page indicator: aria-current="page"



Expanded/collapsed states: aria-expanded="true/false"



Required fields: aria-required="true" or required attribute

Screen Reader Support:





Alt text for all meaningful images



Empty alt for decorative images: alt=""



Descriptive link text avoiding "click here"



Form labels properly associated with inputs



Error messages announced when validation fails



Success messages announced when forms submit



Hidden text for screen readers: .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

Color & Contrast:





Text on background: Minimum 4.5:1 contrast (WCAG AA)



Large text (18pt+/14pt+ bold): Minimum 3:1 contrast



Interactive elements: Minimum 3:1 contrast for borders and focus indicators



Don't rely on color alone to convey information (use icons, text, patterns)



Link text: 3:1 contrast against surrounding text or underlined

Touch Targets:





Minimum size: 44×44 pixels for all interactive elements



Adequate spacing between targets to prevent mis-taps



Larger targets on mobile viewports

Responsive Design Principles

Breakpoints:





Mobile: < 640px (default, mobile-first)



Small: sm: 640px - Small tablets/large phones



Medium: md: 768px - Tablets



Large: lg: 1024px - Small laptops/large tablets



Extra Large: xl: 1280px - Desktops



2XL: 2xl: 1536px - Large desktops

Layout Patterns:





Mobile: Single column, stacked content, collapsed navigation



Tablet: Two columns where appropriate, simplified multi-column grids



Desktop: Full multi-column layouts, expanded navigation, side panels

Component Adaptations:





Navigation: Mobile hamburger menu → Tablet simplified menu → Desktop full menu



Forms: Mobile full-width fields → Desktop multi-column layouts for related fields



Cards: Mobile stack vertically → Tablet 2 columns → Desktop 3+ columns



Tables: Mobile transform to cards or horizontal scroll → Desktop full table



Modals: Mobile full screen → Desktop centered with max-width

Typography Scaling:





Hero text: text-4xl md:text-5xl lg:text-6xl



Page headers: text-3xl md:text-4xl lg:text-5xl



Section headers: text-2xl md:text-3xl



Body text: Remains text-base across breakpoints



Adjust line-height for better readability on larger screens

Spacing Adjustments:





Section padding: py-12 md:py-16 lg:py-24



Container padding: px-4 md:px-6 lg:px-8



Element gaps: gap-4 md:gap-6 lg:gap-8



Maintain consistent spacing ratios

Image Handling:





Use responsive images with srcset for different resolutions



Lazy load images below the fold



Aspect ratio preservation: aspect-video, aspect-square



Object-fit for flexible containers: object-cover, object-contain

Performance Considerations:





Mobile-first CSS to reduce overrides



Conditional loading of large components on mobile



Touch-friendly interactions with larger targets



Reduced animations on mobile for performance



Progressive enhancement for advanced features

Language/Internationalization Support

Language Switcher:





Positioned prominently in header: top-right corner



Display current language with flag icon



Dropdown showing all available languages



Persist language selection across pages (localStorage/cookie)



Format: Flag icon + Language name in native script (e.g., "English", "Español", "Français")

Text Direction:





Support for RTL languages if Arabic/Hebrew added



Use logical properties: start/end instead of left/right where possible



Mirror layouts for RTL languages

Content Translation:





All UI text translatable (buttons, labels, navigation)



Formatted content considers cultural differences (dates, numbers, currency)



Translation files structured by page/component



Placeholder for professional translation service integration

Typography Considerations:





Font stacks that support multiple character sets



Adjust line-height for languages with diacritics or larger character heights



CJK language support with appropriate fonts

Implementation Notes

Technology Stack:





HTML5 with semantic elements



Tailwind CSS via CDN (no build process required)



Vanilla JavaScript for interactivity (no frameworks)



No npm packages or complex dependencies



Progressive enhancement approach

File Structure:





/index.html - Homepage



/programs.html - Program catalog



/placement-test.html - Level assessment quiz



/schedule.html - Class calendar



/instructors.html - Instructor directory



/enroll.html - Enrollment form



/student-portal.html - Login and dashboard



/contact.html - Contact information



/success-stories.html - Testimonials



/css/styles.css - Custom styles (minimal, mostly Tailwind)



/js/main.js - Interactive features



/images/ - Image assets

JavaScript Functionality:





Form validation with real-time feedback



Modal open/close functionality



Dropdown menu interactions



Carousel/slider for testimonials



Quiz progression and scoring



Calendar interaction



Language switcher



Mobile menu toggle



Progress indicator updates



Local storage for form auto-save and language preference

Browser Support:





Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)



Graceful degradation for older browsers



No IE11 support required

Performance Optimization:





Minimal custom CSS (leverage Tailwind utilities)



Lazy loading for images



Defer non-critical JavaScript



Inline critical CSS for above-the-fold content



Optimize images (WebP with fallbacks)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/66640bb5-f9f7-4ddb-89d2-afd3cb6bb37a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
