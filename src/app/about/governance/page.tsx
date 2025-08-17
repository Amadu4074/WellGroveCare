import React from "react";

export default function GovernancePage() {
  return (
    <main className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Our Governance Commitment</h1>
      <section className="mb-8 bg-blue-50 border-l-4 border-blue-700 p-6 rounded">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">Our Pledge</h2>
        <p className="text-blue-900">At Wellgrove Care Group, governance isn’t a formality—it’s a promise. We do whatever it takes to uphold excellence, protect wellbeing, and evolve with the needs of every individual we serve.</p>
      </section>
      <p className="mb-6">At Wellgrove Care Group, we uphold a rigorous, ongoing evaluation of our clinical performance. By consistently refining our practices and assessing our progress against established benchmarks, we ensure a high standard of care and continuous improvement. Through a robust governance framework, our services are delivered with quality, safety, and integrity at every level.</p>
      <ol className="list-decimal list-inside space-y-6">
        <li>
          <strong>Managing Risk Proactively</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Pinpointing what might—and what does—go wrong in delivery</li>
            <li>Exploring the causes behind these issues</li>
            <li>Learning from incidents and implementing actionable lessons</li>
            <li>Preventing recurrence through corrective action</li>
            <li>Embedding systems to minimise future risks</li>
          </ul>
        </li>
        <li>
          <strong>Auditing Clinical Practice</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Benchmark our performance against expected standards</li>
            <li>Identify gaps and opportunities for development</li>
            <li>Implement improvements and monitor their impact through repeat audits</li>
            <li>Audits may be conducted internally or in collaboration with external bodies—ensuring both transparency and excellence.</li>
          </ul>
        </li>
        <li>
          <strong>Education, Training & Continuous Professional Development (CPD)</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Ongoing training in physical disabilities, learning disabilities, complex needs, and behaviour support</li>
            <li>Regular CPD opportunities to enhance specialist knowledge</li>
            <li>Collaboration among our clinical leads—including trainers, therapists, psychologists, and safeguarding specialists—to embed best practice across all service areas</li>
            <li>This guarantees our team is equipped to respond confidently and compassionately to diverse and evolving needs.</li>
          </ul>
        </li>
        <li>
          <strong>Evidence-Based Practice and Outcomes</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Every care decision is grounded in trusted, up-to-date research. We take guidance from national and international organisations—including:</li>
            <li>NICE (National Institute for Health and Care Excellence)</li>
            <li>BILD (British Institute of Learning Disabilities)</li>
            <li>LDA (Learning Disability Alliance England)</li>
            <li>UKHCA (United Kingdom Home Care Association)</li>
            <li>Our adherence to high-quality clinical evidence ensures care is not only effective but ethically and professionally aligned.</li>
          </ul>
        </li>
        <li>
          <strong>Service User and Stakeholder Voice</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Involving people in care planning, policy reviews, and strategy development</li>
            <li>Holding regular review meetings and key worker check-ins</li>
            <li>Collecting feedback through surveys, compliments, and concerns</li>
            <li>This collaborative approach fosters trust, transparency, and care that truly reflects the needs and aspirations of our communities.</li>
          </ul>
        </li>
        <li>
          <strong>Staffing Excellence & Team Culture</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Recruiting qualified professionals who are passionate about quality care</li>
            <li>Fostering a team culture of collaboration, efficiency, and wellbeing</li>
            <li>Providing training, supervision, and personal development to empower confident practice</li>
            <li>Support staff responsibilities may include:</li>
            <li className="ml-6">Personal care and hygiene assistance</li>
            <li className="ml-6">Mobility and safety support</li>
            <li className="ml-6">Medication guidance and health monitoring</li>
            <li className="ml-6">Nutrition, cooking, housekeeping, and laundry</li>
            <li className="ml-6">Social engagement and transportation</li>
            <li className="ml-6">Exercise encouragement and emotional companionship</li>
          </ul>
        </li>
      </ol>
    </main>
  );
}
