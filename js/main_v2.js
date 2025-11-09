// =============================================
// MODERN PORTFOLIO - MAIN JAVASCRIPT
// =============================================

(function() {
    'use strict';

    // =============================================
    // THEME MANAGEMENT
    // =============================================

    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // =============================================
    // SCROLL PROGRESS BAR
    // =============================================

    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // =============================================
    // NAVIGATION
    // =============================================

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('.section, .hero');

    function setActiveNavLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =============================================
    // SKILL BARS ANIMATION
    // =============================================

    const skillBars = document.querySelectorAll('.skill-bar-fill');
    let skillsAnimated = false;

    function animateSkillBars() {
        if (skillsAnimated) return;

        const skillsSection = document.getElementById('skills');
        const skillsSectionTop = skillsSection.offsetTop;
        const skillsSectionHeight = skillsSection.clientHeight;
        const triggerPoint = window.scrollY + window.innerHeight - (skillsSectionHeight / 3);

        if (triggerPoint > skillsSectionTop) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
            skillsAnimated = true;
        }
    }

    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Check on load

    // =============================================
    // PORTFOLIO FILTERING
    // =============================================

    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.display = '';
                    }, 10);
                } else {
                    const categories = card.getAttribute('data-category');
                    if (categories && categories.includes(filter)) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.display = '';
                        }, 10);
                    } else {
                        card.classList.add('hidden');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // =============================================
    // PORTFOLIO MODALS
    // =============================================

    const portfolioData = [
        {
            id: 'modal1',
            title: 'Analysis of Active Aerodynamic Geometry on Automotive Performance',
            date: 'Mar 2023 - June 2023',
            location: 'Northwestern University',
            category: 'MS Project',
            image: 'images/portfolio/1.jpg',
            description: `
                <p>Three different bionic flap geometries on a car were modeled in SolidWorks and
                then imported into Ansys Fluent for CFD analysis. The flow domain was created
                using enclosure and boolean. To reduce the computational power used, symmetry
                conditions were utilized. Appropriate mesh sizing involving body sizing and
                sphere of influence was used to mesh the model and the flow domain. Applicable
                boundary conditions were given along with setting up the right viscosity and
                velocity of the car.</p>

                <p>The turbulence model used was SST-kω and the speeds of tests were 50m/s
                and 100m/s (112 mph and 224 mph respectively). Following this, the solver
                criteria were set with residuals under 10e-6 for result accuracy. Report
                definitions for drag and lift (downforce) were created. The simulations were run
                for the various geometries. After the simulations, the designs were prototyped
                using a 3D printer with a fine surface finish and tested in the in-house wind
                tunnel at the university. Finally, the results achieved for the optimum geometry
                of bionic flaps were in congruence with the design that Mercedes has for their
                bionic flaps on the concept car- Vision AVTR, which was the inspiration for this
                project, thus validating this study.</p>
            `,
            tags: ['CFD', 'SolidWorks', 'Ansys Fluent', 'Aerodynamics']
        },
        {
            id: 'modal2',
            title: 'Design and Manufacturing of Undertray for Northwestern Formula Racing Vehicle (SAE)',
            date: 'Jan 2023 - June 2023',
            location: 'Northwestern University',
            category: 'SAE Project',
            image: 'images/portfolio/portolio1.jpg',
            description: `
                <p>Optimized the external body aerodynamics to develop the best model of the
                Northwestern Formula Racing electric vehicle's undertray for the event FSAE
                2023. CAD modeling was done in SolidWorks while Star CCM+ was used for CFD
                simulation on the whole vehicle body. The vehicle was optimized concerning the
                event guidelines and involved certain restrictions including the space
                restrictions on the vehicle body and minimizing the weight of the undertray
                itself. Keeping them in mind, the best possible designs were simulated and
                analyzed for the iterative design improvement process.</p>

                <p>Once the design was finalized for the optimum drag and lift values and
                ratios, the undertray was manufactured using carbon fiber curing in an in-house
                built oven. 6 mounting points were finalized according to the vehicle dynamics
                and an in-depth FMEA was done to avoid any potential failure during the
                competition.</p>
            `,
            tags: ['SolidWorks', 'Star CCM+', 'CFD', 'Carbon Fiber', 'FMEA']
        },
        {
            id: 'modal3',
            title: 'Part Design and Manufacturing using Injection Molding',
            date: 'Jan 2023 - June 2023',
            location: 'Northwestern University',
            category: 'Manufacturing Project',
            image: 'images/portfolio/screw.jpg',
            description: `
                <p>A mini rocket was modeled in Siemens NX CAD/CAM software. The rocket design
                was split in half and the negative of the design was taken to be used in the
                mold. Drafts were given and uniform wall thickness was ensured with no sharp
                edges for even material flow and elimination of defects. The parts were
                assembled using dowels, predominantly built into the part itself to be attached
                with an interference fit. For the mold, a parting line was chosen in the center
                and the gate and runner location were decided keeping in mind the equal time of
                filling of plastic.</p>

                <p>Mold blocks were also designed in NX. 4 mold blocks were machined using
                the ptp file generated by the NX CAM Post-processing. This helped us generate,
                verify, and analyze the tool path on our molds, which was adjusted as per the
                need and the tool. Appropriate tool sizes were chosen and correct subsequent
                machining features were selected like the depth of cut, feed rate, stepover,
                number of flutes, rapid, spindle speed, RPM, etc. for the tools.
                The molds were then put into the injection molding machine. Hot molten ABS
                plastic was injected into the molds clamped under pressure in the IM machine and
                20 samples were produced. Finally, a metrology study was done on the
                manufactured samples to confirm that the part dimensional variation is under the
                control limits.</p>
            `,
            tags: ['Siemens NX', 'CAD/CAM', 'Injection Molding', 'Manufacturing']
        },
        {
            id: 'modal4',
            title: 'Screw Engagement and Failure Analysis',
            date: 'Nov 2022 - Dec 2022',
            location: 'Northwestern University',
            category: 'FEA Analysis',
            image: 'images/portfolio/3.jpg',
            description: `
                <p>Observed the behavior of screws as the assemblies (threaded part, clamped part,
                and screw) near and past failure. After modeling and solving with FEA software-
                SolidWorks and Abaqus/CAE, small-scale and larger-scale deformations were seen,
                starting with linear deformations, and making the way into nonlinear deformations.
                Checking the ultimate and yield strengths, investigations were carried out on
                different materials and pre-tapped and self-tapping screws. Results were both
                simulated and experimentally tested.</p>
            `,
            tags: ['FEA', 'SolidWorks', 'Abaqus/CAE', 'Failure Analysis']
        },
        {
            id: 'modal5',
            title: 'Spatial Steering Wheel (Human Factors Designing)',
            date: 'Nov 2022 - Dec 2022',
            location: 'Northwestern University',
            category: 'Product Design',
            image: 'images/portfolio/steering.jpg',
            description: `
                <p>Developed an IMU sensor-controlled steering wheel that provides motion to the
                remote-controlled car using the IMU sensor's orientation in space and programmed it
                using an Atmega microcontroller. Tilting the steering in front moves the car forward
                and similarly works in other directions. This was part of the course project for the
                subject Designing Product Interactions. The major driving human interaction with the
                car has been changed. Instead of the accelerator and the steering being two
                components, they have been clubbed into one. We developed our model so that users
                can differently interact with at the micro, meso, and macro levels. The steering
                wheel was 3D printed to incorporate the electronic subsystem.</p>
            `,
            tags: ['Product Design', 'IMU Sensor', 'Microcontroller', '3D Printing']
        },
        {
            id: 'modal6',
            title: 'Graduate Apprentice - Bosch Limited',
            date: 'Mar 2021 - Mar 2022',
            location: 'Bosch Limited, India',
            category: 'Professional Experience',
            image: 'images/portfolio/4.jpg',
            description: `
                <p>Designed and analyzed engine components, tools, fixtures, and workstations
                according to industry standards and company requirements. Designing tasks were
                majorly carried out in Autodesk Inventor and included product development from its
                initial design concept phase to releasing drawings to manufacturers with appropriate
                geometric dimensioning and tolerances and finally installation on production
                workstations.</p>

                <p>In one of the projects that dealt with the process of dowel pin pressing on
                fuel injector bodies produced at the plant, I eliminated internal defects and
                reduced customer complaints by redesigning the pressing tool and automating the
                process while providing a poka-yoke at the station. The project started with data
                collection on the workstation to understand the existing situation which was
                followed by root cause analysis (why-why analysis) and the tool was redesigned to
                eliminate the existing problem. As a poka-yoke, a buzzer was installed on the
                station and it would buzz every time any part with a missing dowel pin was passed
                through, and the tool would stop at the bottom position of the pneumatic press.
                Masters were provided for the operators to calibrate and ensure process uniformity.
                Apart from the tool, the fixtures were also redesigned for different part types. The
                tool and fixture drawings and the SOP were updated. FMEA was done on the newly built
                tool and the RPN was drastically brought down. Control measures included process and
                machine capability calculation and the part tolerance was maintained at all times
                with the new tool.</p>

                <p>Moreover, keeping pace with the fast-moving world, I also involved myself in
                projects related to digitalization. I started learning programming in Python,
                learned about IoT and AI, and started developing digital solutions for the plant
                including conditional monitoring of machines paired with real-time notifications for
                critical conditions, facial recognition for numerous applications in the plant, and
                visual inspection using computer vision based AI.</p>
            `,
            tags: ['Product Development', 'Six Sigma', 'FMEA', 'Autodesk Inventor', 'GD&T']
        },
        {
            id: 'modal7',
            title: 'CAE Engineer - Airplane Wing Aerodynamic Enhancement',
            date: 'Aug 2020 - Oct 2020',
            location: 'Simulation Lab, India',
            category: 'CFD Analysis',
            image: 'images/portfolio/5.jpg',
            description: `
                <p>Worked on enhancing the aerodynamic performance of an airplane wing using Ansys
                Fluent to measure multi-feature implements on the wing body. I and the team looked
                at performance parameters to reduce the required thrust and save fuel during flight.
                The quantities of interest were lift and drag forces, their coefficients, and their
                ratios. The fuel reduction with the multi-feature implements was approximately 4%
                with the improved model. The optimized design was eventually patented by the
                company.</p>
            `,
            tags: ['CFD', 'Ansys Fluent', 'Aerodynamics', 'Optimization']
        },
        {
            id: 'modal8',
            title: 'Research Intern - Hybrid Airship Design',
            date: 'Mar 2020 - July 2020',
            location: 'Hochschule Bremen, Germany',
            category: 'Research (Bachelor\'s Thesis)',
            image: 'images/portfolio/6.jpg',
            description: `
                <p>Worked with Prof. Uwe Apel on building a special-purpose hybrid model of an Airship
                for transporting goods to remote areas and Polar Regions. Created a model via
                performance analysis and optimized the model under field conditions. The hull and
                gondola designs were improved using Autodesk Fusion 360 while the aerodynamic
                optimization was done using CFD analysis on Ansys Fluent. An additional outer support
                structure for the hull for structural stability was designed and implemented using
                structural analysis and topology optimization for optimum results. Materials were
                appropriately selected.</p>

                <p>The electrical wiring concept was introduced which helped improve the flight
                stability and increased the payload capacity of the airship. The new rotors enabled a
                vertical takeoff. The combined effect of the new design and electronics was an increased
                payload capacity, to 200%. The model was analytically tested along with its
                documentation and analysis of aspects for future improvements.</p>
            `,
            tags: ['Research', 'CFD', 'Fusion 360', 'Structural Analysis', 'Topology Optimization']
        },
        {
            id: 'modal9',
            title: 'Research Intern - Automotive Safety',
            date: 'June 2019 - Aug 2019',
            location: 'King Mongkut\'s University, Thailand',
            category: 'Research (IAESTE)',
            image: 'images/portfolio/7.jpg',
            description: `
                <p>Worked on an automotive research project involving practical on-site testing for
                finding the safe headway distance for two-wheeler ASEAN vehicles with and without a
                combi-braking system. This research comprised of writing a research paper, finding
                solutions by on-site testing, and analyzing the conditions for safety. This research was
                part of a bigger safety project at the university under NCAP (New Car Assessment
                Program).</p>

                <p>Moreover, I also performed and analyzed Car crash simulations on the Guard Rail
                using the software- LS Dyna under the ASAE (Automotive Safety and Assessment
                Engineering) research center for design optimization of the guard rail and crash impact
                reduction on the driver.</p>
            `,
            tags: ['Research', 'LS Dyna', 'Crash Simulation', 'Automotive Safety']
        },
        {
            id: 'modal10',
            title: 'Design and Fabrication of Electric Go-Kart',
            date: 'Mar 2019 - Feb 2020',
            location: 'ISNEE Motorsports National Competition',
            category: 'Competition',
            image: 'images/portfolio/kart,.jpg',
            description: `
                <p>Worked on CAD software, SolidWorks, and CATIA to design the model of the kart, chassis, body works, etc., and simulated them in Ansys. The kart was analyzed for optimum aerodynamics and other parts like knuckles, brake disks, etc. were analyzed for structural stability, thermal design, and vibrational and frictional losses. The crash impact testing was also performed using Ansys software. It demanded thorough training to properly utilize the software and I took the opportunity to learn it. Following the design finalization, DVP&R and FMEA were done for the whole kart and individual components. A cost report was prepared as well. The kart being an electric vehicle, I got educated on building electrical circuits, batteries, battery management systems (BMS), and the whole EV development process.</p>

                <p>Post this, the manufacturing of the kart was a time-consuming process. Working on everything from scratch, numerous manufacturing processes were utilized including CNC machining, 3D printing, casting, sheet metal forming, welding, grinding, drilling, and many more.
                The competition was a 4-day event at Kari Motor Speedway in Coimbatore, India, where we had the smallest team ever, yet we gave a tough competition to all the participating teams, gaining an overall 9th position, nationally.</p>
            `,
            tags: ['CAD', 'SolidWorks', 'CATIA', 'Ansys', 'EV Development', 'Manufacturing']
        },
        {
            id: 'modal11',
            title: 'Performance Optimization of Solar Air Heater',
            date: 'Aug 2018 - Jan 2019',
            location: 'Academic Research',
            category: 'Research & Publication',
            image: 'images/portfolio/solar.jpg',
            description: `
                <p>One of the initial projects that I worked on dealt with the performance optimization and fabrication of a Solar Air Heater. The efficiency of the solar air heater was improved with enhancement in the system design. The fabrication and performance evaluation of a solar air heater with the inclusion of an arched wavy absorber plate, having porous aluminum wire mesh cylindrical fins attached, resulted in an increase in the air turbulence and vortex generation, which led to the breaking of laminar sub-layer near the surface of the absorber plate and improved the heat transfer. Cylindrical porous wire mesh aluminum fins resulted in an increase in the fin porosity which reduced the pressure drop and improved the thermal performance of the solar air heater.</p>

                <p>The new improved design with mesh in the heater chamber was designed in SolidWorks and CFD analysis was done in Ansys Fluent. The physical model of the air heater was fabricated and tested. The simulations and the values achieved on experimentation yielded great results. A research paper on this project was written and presented at the 7th International Conference on Power and Energy Systems Engineering (CPESE 2020) and has been published in the CPESE 2020 conference proceedings, Energy Reports by Elsevier. Another review paper was published on the thermal energy storage technology that was later introduced in the solar air heater for further improvement in energy efficiency and was published as a book chapter in Springer's Advances in Clean Energy Technologies 2020.</p>
            `,
            tags: ['Research', 'CFD', 'SolidWorks', 'Ansys Fluent', 'Published Paper']
        },
        {
            id: 'modal12',
            title: 'Design Judge - ISNEE Motorsports',
            date: 'April 2021 - Aug 2022',
            location: 'ISNEE Motorsports, India',
            category: 'Professional Experience',
            image: 'images/portfolio/isnee.jpg',
            description: `
                <p>A certain number of race-track events and design challenges are organized by ISNEE
                every year in which I worked as a design judge evaluating the aerodynamic and
                chassis development of the vehicles of the participating teams, as part of the
                company's central technical committee.</p>

                <p>Judged race track events "Go-Kart Design Challenge" (GKDC) and "Formula Green"
                (FGI) by evaluating the reports and technically inspecting the combustion and
                electric vehicles based on various factors like design, analysis, build, structural
                and CFD analysis, aesthetics, creativity, failure mode analysis, innovations, etc.
                and discussions with the participating teams to defend their vehicles. These
                discussions were technically detailed and the teams presented their design reports,
                CAE reports, calculations, testing results, improvement methods, approaches, and
                innovations for the event and competed against other teams at the national
                level.</p>

                <p>Other key roles included track marshaling, team mentoring, drafting inspection
                guidelines, and rulebook development. Apart from this, I also delivered technical
                sessions on the design and development of vehicles using CAD software in training
                and internships organized by the company.</p>
            `,
            tags: ['Design Evaluation', 'CAD', 'CFD', 'Mentoring', 'Technical Training']
        }
    ];

    // Create modal HTML
    function createModals() {
        const modalsContainer = document.getElementById('portfolio-modals');

        portfolioData.forEach(project => {
            const modal = document.createElement('div');
            modal.className = 'portfolio-modal';
            modal.id = project.id;
            modal.innerHTML = `
                <div class="modal-overlay" onclick="closeModal('${project.id}')"></div>
                <div class="modal-content">
                    <button class="modal-close" onclick="closeModal('${project.id}')" aria-label="Close modal">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-header">
                        <img src="${project.image}" alt="${project.title}" class="modal-image">
                    </div>
                    <div class="modal-body">
                        <span class="modal-tag">${project.category}</span>
                        <h2 class="modal-title">${project.title}</h2>
                        <div class="modal-meta">
                            <span><i class="fas fa-calendar"></i> ${project.date}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
                        </div>
                        <div class="modal-description">
                            ${project.description}
                        </div>
                        <div class="modal-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            modalsContainer.appendChild(modal);
        });

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .portfolio-modal {
                position: fixed;
                inset: 0;
                z-index: 10000;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 2rem;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .portfolio-modal.active {
                display: flex;
                opacity: 1;
            }

            .modal-overlay {
                position: absolute;
                inset: 0;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
            }

            .modal-content {
                position: relative;
                max-width: 900px;
                width: 100%;
                max-height: 90vh;
                background: var(--background-card);
                border-radius: var(--radius-lg);
                overflow-y: auto;
                box-shadow: var(--shadow-lg);
                animation: modalSlideIn 0.3s ease;
            }

            @keyframes modalSlideIn {
                from {
                    transform: translateY(-50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 40px;
                height: 40px;
                border-radius: var(--radius-full);
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                font-size: 1.25rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
                transition: all var(--transition-base);
            }

            .modal-close:hover {
                background: var(--primary-color);
                transform: scale(1.1);
            }

            .modal-image {
                width: 100%;
                height: 400px;
                object-fit: contain;
                display: block;
                background: var(--background-alt);
            }

            .modal-header {
                position: relative;
                overflow: hidden;
                background: var(--background-alt);
            }

            .modal-body {
                padding: 2rem;
            }

            .modal-tag {
                display: inline-block;
                padding: 0.25rem 0.75rem;
                background: var(--background-alt);
                color: var(--primary-color);
                font-size: var(--font-size-xs);
                font-weight: 600;
                border-radius: var(--radius-full);
                margin-bottom: 1rem;
            }

            .modal-title {
                font-size: var(--font-size-2xl);
                font-weight: 700;
                margin-bottom: 1rem;
                color: var(--text-primary);
            }

            .modal-meta {
                display: flex;
                gap: 1.5rem;
                margin-bottom: 1.5rem;
                font-size: var(--font-size-sm);
                color: var(--text-light);
            }

            .modal-meta i {
                margin-right: 0.5rem;
            }

            .modal-description {
                line-height: 1.8;
                color: var(--text-secondary);
                margin-bottom: 1.5rem;
            }

            .modal-description p {
                margin-bottom: 1rem;
            }

            .modal-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }

            .modal-tags .tag {
                padding: 0.5rem 1rem;
                background: var(--primary-color);
                color: white;
                border-radius: var(--radius-full);
                font-size: var(--font-size-sm);
            }

            @media (max-width: 768px) {
                .portfolio-modal {
                    padding: 1rem;
                }

                .modal-image {
                    height: 250px;
                }

                .modal-body {
                    padding: 1.5rem;
                }

                .modal-title {
                    font-size: var(--font-size-xl);
                }

                .modal-meta {
                    flex-direction: column;
                    gap: 0.5rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Call createModals on load
    createModals();

    // Global functions for modal
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.portfolio-modal.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
    });

    // =============================================
    // TESTIMONIALS SLIDER
    // =============================================

    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const dotsContainer = document.getElementById('testimonial-dots');

    let currentTestimonial = 0;
    const totalTestimonials = testimonialCards.length;

    // Create dots
    for (let i = 0; i < totalTestimonials; i++) {
        const dot = document.createElement('div');
        dot.className = 'testimonial-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.testimonial-dot');

    function updateTestimonials() {
        testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTestimonial);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        updateTestimonials();
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        updateTestimonials();
    }

    function goToTestimonial(index) {
        currentTestimonial = index;
        updateTestimonials();
    }

    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);

    // Auto-play testimonials
    let testimonialInterval = setInterval(nextTestimonial, 5000);

    // Pause auto-play on hover
    const testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, 5000);
        });
    }

    // =============================================
    // CONTACT FORM
    // =============================================

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission (replace with actual API call)
            try {
                // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

                // For now, just show success message
                formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                formMessage.className = 'form-message success';
                contactForm.reset();

                setTimeout(() => {
                    formMessage.className = 'form-message';
                }, 5000);
            } catch (error) {
                formMessage.textContent = 'Oops! Something went wrong. Please try again.';
                formMessage.className = 'form-message error';
            }
        });
    }

    // =============================================
    // BACK TO TOP BUTTON
    // =============================================

    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // =============================================
    // LAZY LOADING IMAGES
    // =============================================

    const images = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // =============================================
    // SCROLL ANIMATIONS
    // =============================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.story-card, .about-grid, .skill-category, .timeline-item, ' +
        '.portfolio-card, .testimonial-card, .contact-grid'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // =============================================
    // KEYBOARD NAVIGATION
    // =============================================

    document.addEventListener('keydown', (e) => {
        // Navigate testimonials with arrow keys
        if (document.activeElement.closest('.testimonials-slider')) {
            if (e.key === 'ArrowLeft') {
                prevTestimonial();
            } else if (e.key === 'ArrowRight') {
                nextTestimonial();
            }
        }
    });

    // =============================================
    // PERFORMANCE OPTIMIZATIONS
    // =============================================

    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to expensive scroll operations
    window.addEventListener('scroll', debounce(() => {
        // Any expensive scroll operations here
    }, 10));

})();
