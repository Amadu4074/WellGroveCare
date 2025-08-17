
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/">
            <img src="/wellgrove-caregroup-logo.jpeg" alt="WellGrove Care Group Logo" width={64} height={64} className="rounded bg-white shadow-md object-contain" style={{ display: 'block' }} />
          </Link>
          <span className="text-2xl font-bold text-blue-900 whitespace-nowrap">WellGrove Care Group</span>
        </div>
        <div className="space-x-6 flex items-center">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <div className="relative group inline-block">
            <button className="hover:text-blue-700 focus:outline-none flex items-center gap-1">
              About
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-10">
              <Link href="/about/governance" className="block px-4 py-2 hover:bg-blue-50">Our Governance Commitment</Link>
              <Link href="/about/training" className="block px-4 py-2 hover:bg-blue-50">Training</Link>
              <Link href="/about/promise" className="block px-4 py-2 hover:bg-blue-50">Our Promise</Link>
            </div>
          </div>
          <div className="relative group inline-block">
            <button className="hover:text-blue-700 focus:outline-none flex items-center gap-1">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-10">
              <Link href="/services/domiciliary" className="block px-4 py-2 hover:bg-blue-50">Domiciliary Care</Link>
              <Link href="/services/supported-living" className="block px-4 py-2 hover:bg-blue-50">Supported Living</Link>
              <Link href="/services/residential" className="block px-4 py-2 hover:bg-blue-50">Residential Care</Link>
            </div>
          </div>
          <Link href="/knowledge-center" className="hover:text-blue-700">Jobs</Link>
          <Link href="/contact" className="hover:text-blue-700">Contact Us</Link>
        </div>
      </nav>


      {/* Hero Section */}
      <header className="bg-blue-900 py-20 px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">About Wellgrove Care Group</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">At Wellgrove Care Group, we believe true care should never be prescriptive. Our Multi-Disciplinary Team creates bespoke packages of support that adapt to individual needs, rather than expecting individuals to adapt to predefined services. This dynamic, person-centred approach allows us to stick with those we support through times of challenge, change, and progress.</p>
        <Link href="/contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded shadow font-semibold hover:bg-blue-100">Contact Us</Link>
      </header>

      {/* Commitment Section */}
      <section className="container mx-auto py-12 px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Commitment</h2>
        <p className="mb-6">At Wellgrove Care Group, we do whatever it takes to provide support that empowers people to live full, meaningful lives—backed by skilled teams, proven approaches, and unwavering dedication.</p>
      </section>

      {/* Specialist Teams Section */}
      <section className="container mx-auto py-12 px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Multi-Disciplinary Team – Specialist Roles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Speech and Language Therapist</h3>
            <p className="mb-4">Assesses communication abilities and provides personalised intervention to develop speech, language, and social interaction skills. Works to empower independence and build meaningful connections through improved communication.</p>
            <h3 className="text-xl font-semibold mb-2">Occupational Therapist</h3>
            <p className="mb-4">Supports individuals in achieving greater autonomy by helping them perform daily tasks and routines. Tailors practical solutions and may introduce specialist equipment to promote safe, confident living both at home and in the community.</p>
            <h3 className="text-xl font-semibold mb-2">Clinical Psychologist</h3>
            <p className="mb-4">Offers psychological support grounded in collaboration and understanding. Works closely with individuals, families, and staff to assess emotional wellbeing and reduce distress, using therapeutic techniques to build coping strategies and resilience.</p>
            <h3 className="text-xl font-semibold mb-2">Positive Behaviour Support Trainer</h3>
            <p className="mb-4">Helps staff understand the root causes of challenging behaviours and teaches preventative approaches. Develops PBS plans focused on de-escalation, environmental adaptation, and emotional regulation, fostering safer, more empathetic support environments.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Positive Behaviour Management Trainer</h3>
            <p className="mb-4">Provides accredited PBM training that equips staff to manage complex situations using non-aversive and respectful methods. Offers ongoing coaching and skill development to reinforce calm, confident, and compassionate practice.</p>
            <h3 className="text-xl font-semibold mb-2">Care Quality Assurance and Safeguarding Lead</h3>
            <p className="mb-4">Oversees safeguarding frameworks and quality assurance standards across our services. Monitors effectiveness and cost-efficiency of support packages while ensuring compliance, safety, and ethical best practice.</p>
            <h3 className="text-xl font-semibold mb-2">Further Education Lead</h3>
            <p className="mb-4">Designs tailored education pathways that reflect each individual’s abilities, goals, and aspirations. Facilitates skill-building for independence, and supports access to further education, employment, and personal development opportunities.</p>
            <h3 className="text-xl font-semibold mb-2">Support Staff</h3>
            <p className="mb-4">Provide daily support built on genuine connection and person-centred planning. Their work covers personal care, household management, health monitoring, recreation, and social inclusion—ensuring that every individual is supported to achieve “The Five Accomplishments”: community presence, choice, competence, community participation, and respect.</p>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section className="bg-blue-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">We do whatever it takes to bring you peace of mind</h2>
        <Link href="/contact" className="inline-block bg-blue-700 text-white px-6 py-3 rounded shadow hover:bg-blue-800">Request a Callback</Link>
        <div className="mt-4 text-blue-800">24/7 service available <a href="tel:02033704487" className="underline">02033704487</a></div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 px-4 text-center text-sm text-gray-600 mt-auto">
        <div className="mb-2">&copy; {new Date().getFullYear()} [Care Group Name]. All rights reserved.</div>
        <div className="flex justify-center gap-4">
          <a href="mailto:Admin@wellgrovecare.com" className="hover:underline">Admin@wellgrovecare.com</a>
          <a href="https://www.instagram.com/germanecaregroup" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
