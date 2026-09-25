import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "DOMINIC Software Licensing | Drone Operation Management",
  description: "License DOMINIC for professional drone mission planning, pilot workflows, capture guidance, mapping, documentation, compliance, and delivery.",
};

const features = [
  ["Mission Operations","Plan, schedule, assign, document, and manage drone work from intake through final delivery."],
  ["Capture Planner","Guide pilots through repeatable capture paths for objects, roofs, buildings, facades, interiors, stockpiles, and corridors."],
  ["Mapping + 3D","Manage imagery, orthomosaics, point clouds, and 3D reconstruction projects with visible processing status."],
  ["Pilot Workflow","Standardize preflight, flight, post-flight, files, approvals, and deliverables without slowing pilots down."],
  ["Fleet + Compliance","Keep aircraft, mission, insurance, safety, documentation, and audit records organized."],
  ["Built to Expand","Use the planning engine as a foundation for future autonomous flight, sensors, live operations, and integrations."],
];

const audiences = [
  "Independent drone pilots",
  "Drone service companies",
  "Inspection contractors",
  "Construction + engineering teams",
  "Municipalities + public safety",
  "Industrial + enterprise drone programs",
];

const faqs = [
  ["What does a DOMINIC license include?","Licensing can be scoped for a single operator, a growing team, or a larger organization. Users, modules, onboarding, support, and deployment requirements are defined in the license proposal."],
  ["Can DOMINIC work with different drone brands?","DOMINIC is being designed around drone-agnostic operational workflows wherever possible so teams can standardize planning and documentation across different aircraft."],
  ["Is this only for mapping companies?","No. DOMINIC supports broader operations including inspections, documentation, object capture, roof and facade work, stockpiles, corridors, industrial operations, public safety, and other repeatable missions."],
  ["Can my company use DOMINIC under our own operation?","Yes. Licensing is intended for operators and organizations that want DOMINIC as the software layer behind their own drone program. Branding, permissions, workflow scope, and deployment requirements can be discussed during the demo."],
];

function Check() {
  return <span className={styles.check} aria-hidden="true">✓</span>;
}

export default function DominicLicensingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>O</span>
          <span><strong>DOMINIC</strong><small>by Drone Operation Management</small></span>
        </Link>
        <a className={styles.navCta} href="#license">License DOMINIC</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <span className={styles.eyebrow}>DRONE OPERATIONS SOFTWARE LICENSING</span>
            <h1>Put <span>DOMINIC</span> behind your entire drone operation.</h1>
            <p className={styles.heroLead}>One intelligent platform for mission planning, pilot workflows, capture guidance, mapping, documentation, compliance, and client delivery.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#license">Request Licensing Details →</a>
              <a className={styles.secondaryButton} href="#platform">See What DOMINIC Does</a>
            </div>
            <div className={styles.trustRow}>
              <span><Check /> Built for real drone operations</span>
              <span><Check /> Scales from pilot to enterprise</span>
              <span><Check /> Multiple mission types</span>
            </div>
          </div>

          <div className={styles.commandPanel}>
            <div className={styles.panelTop}><span>● DOMINIC OPERATIONS</span><b>MISSION READY</b></div>
            <div className={styles.metricGrid}>
              <div><small>Active Missions</small><strong>12</strong></div>
              <div><small>Pilots</small><strong>07</strong></div>
              <div><small>Aircraft</small><strong>09</strong></div>
            </div>
            <div className={styles.missionCard}>
              <div><span>OBJECT SCAN</span><h3>Industrial Asset Reconstruction</h3><p>3-ring guided capture · overlap tracking · coverage review</p></div>
              <div className={styles.progressRing}>82%</div>
            </div>
            <div className={styles.workflow}>
              <div>✓ Plan</div><div>✓ Preflight</div><div className={styles.workflowActive}>Capture</div><div>Process</div><div>Deliver</div>
            </div>
            <div className={styles.mapMock}>
              <div className={styles.ringOne}></div><div className={styles.ringTwo}></div><div className={styles.ringThree}></div>
              <span className={styles.droneMarker}>◆</span><b>CAPTURE PATH OPTIMIZED</b>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.problemStrip}>Stop stitching together forms, spreadsheets, cloud folders, flight notes, mapping tools, and client messages just to run one drone operation.</section>

      <section className={styles.section} id="platform">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>THE SOFTWARE LAYER FOR DRONE OPERATIONS</span>
          <h2>From mission request to final deliverable.</h2>
          <p>DOMINIC is being built to make professional drone work more repeatable, visible, and intelligent without forcing pilots into a rigid workflow.</p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature,index) => (
            <article className={styles.featureCard} key={feature[0]}>
              <span>{String(index + 1).padStart(2,"0")}</span><h3>{feature[0]}</h3><p>{feature[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.splitSection}>
          <div><span className={styles.eyebrow}>WHO DOMINIC IS FOR</span><h2>License it for one pilot. Build on it for an entire operation.</h2><p>DOMINIC can become the operating system behind the way your organization plans, flies, documents, processes, and delivers drone work.</p></div>
          <div className={styles.audienceList}>{audiences.map(item => <div key={item}><Check /> {item}</div>)}</div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>LICENSING PATHS</span>
          <h2>Start with the operation you have now.</h2>
          <p>Pricing can be structured around users, teams, modules, operational scope, and deployment requirements.</p>
        </div>
        <div className={styles.licenseGrid}>
          <article className={styles.licenseCard}>
            <span>SOLO / SMALL TEAM</span><h3>Operator License</h3><p>For pilots and small drone businesses that want a professional operating system behind every mission.</p>
            <ul><li><Check /> Mission + project workflow</li><li><Check /> Capture planning tools</li><li><Check /> Mapping project management</li><li><Check /> Deliverables + documentation</li></ul>
            <a href="#license">Request pricing →</a>
          </article>
          <article className={styles.featuredLicense}>
            <span>GROWING OPERATION</span><b className={styles.popular}>MOST FLEXIBLE</b><h3>Team License</h3><p>For service providers and inspection teams coordinating multiple pilots, projects, aircraft, and clients.</p>
            <ul><li><Check /> Multi-pilot operations</li><li><Check /> Roles + assignment workflows</li><li><Check /> Standardized field processes</li><li><Check /> Centralized operational visibility</li></ul>
            <a href="#license">Book a licensing call →</a>
          </article>
          <article className={styles.licenseCard}>
            <span>PUBLIC / INDUSTRIAL / ENTERPRISE</span><h3>Organization License</h3><p>For larger programs that need controlled access, deployment planning, workflow configuration, and support.</p>
            <ul><li><Check /> Organization-wide deployment</li><li><Check /> Configurable workflows</li><li><Check /> Advanced operations roadmap</li><li><Check /> Onboarding + implementation scope</li></ul>
            <a href="#license">Discuss your program →</a>
          </article>
        </div>
      </section>

      <section className={styles.demoSection}>
        <div><span className={styles.eyebrow}>SEE THE DIFFERENCE</span><h2>You do not need another drone app.</h2><p>You need a system that helps your operation know what happens next, keeps the mission record together, and gives every pilot a clearer path from planning to delivery.</p></div>
        <a className={styles.demoButton} href="#license">See DOMINIC in a Demo →</a>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}><span className={styles.eyebrow}>COMMON QUESTIONS</span><h2>Before you license DOMINIC.</h2></div>
        <div className={styles.faqGrid}>{faqs.map(faq => <article key={faq[0]}><h3>{faq[0]}</h3><p>{faq[1]}</p></article>)}</div>
      </section>

      <section className={styles.finalCta} id="license">
        <span className={styles.eyebrow}>DOMINIC SOFTWARE LICENSING</span>
        <h2>Tell us what you fly. We&apos;ll show you how DOMINIC can run it.</h2>
        <p>Request a licensing conversation for your pilot operation, service company, municipality, public safety program, or enterprise drone team.</p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} href="/contact?interest=dominic-licensing">Request Licensing Details →</Link>
          <a className={styles.secondaryButton} href="mailto:info@droneopsman.com?subject=DOMINIC%20Software%20Licensing">Email DOM</a>
        </div>
        <small>No obligation. Licensing scope and pricing are based on your operation.</small>
      </section>
    </main>
  );
}
