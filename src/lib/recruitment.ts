export const recruitmentDestination = "Germany";

export const healthcareRoles = [
  { title: "Registered Nurses (RN, KRCHN/BSN)", tag: "Registered nursing", description: "Registered nurses with nursing diplomas or degrees seeking a pathway into German healthcare.", skills: ["RN", "KRCHN", "BSN", "Patient care"] },
  { title: "Clinical Officers", tag: "Clinical practice", description: "Clinical professionals seeking an individually assessed healthcare pathway based on their qualifications and experience.", skills: ["Clinical assessment", "Treatment support", "Patient management"] },
  { title: "Health Service Support", tag: "Healthcare support", description: "Healthcare support professionals assisting care teams with patient services and day-to-day healthcare delivery.", skills: ["Patient support", "Care teams", "Health services"] },
  { title: "Medical Doctors", tag: "Medicine", description: "Qualified medical doctors exploring opportunities subject to German qualification recognition and medical licensing.", skills: ["Medical degree", "Clinical experience", "Professional registration"] },
  { title: "Perioperative Nurses", tag: "Specialist nursing", description: "Specialised nurses with experience in theatre, surgical care and perioperative patient support.", skills: ["Operating theatre", "Surgical care", "Recovery support"] },
  { title: "Psychiatric Nurses", tag: "Specialist nursing", description: "Specialised nurses experienced in mental health care, therapeutic support and psychiatric services.", skills: ["Mental health", "Psychiatric care", "Therapeutic support"] },
] as const;

export const healthcareRoleTitles = healthcareRoles.map((role) => role.title);

export const healthcareFaqs = [
  { q: "Which healthcare professionals can apply?", a: "We welcome Registered Nurses (RN, KRCHN/BSN), Clinical Officers, Health Service Support professionals, Medical Doctors, Perioperative Nurses and Psychiatric Nurses. Eligibility is assessed individually against the role and German requirements." },
  { q: "Is Germany your recruitment destination?", a: "Yes. Aegis Global focuses on connecting healthcare professionals from Kenya with healthcare recruitment pathways in Germany." },
  { q: "How do I apply from Kenya?", a: "Submit the enquiry form with your professional category, qualifications and experience, or contact us on WhatsApp at +254 716 534 393. We welcome applicants from across Kenya." },
  { q: "Which documents should I prepare?", a: "Start with your CV, passport, qualification certificates, academic transcripts, professional registration where applicable and employment references. The documents needed depend on your profession and recognition pathway." },
  { q: "Will my Kenyan qualifications be recognised in Germany?", a: "Recognition is assessed by the relevant German authority. Regulated professions require recognition and permission to practise. A Kenyan qualification does not automatically confer a German professional licence, and Clinical Officers should not assume direct equivalence to a German medical role." },
  { q: "Do I need German language skills?", a: "German language requirements depend on the profession, employer and responsible authority. Healthcare roles may also require professional language assessment. We discuss the applicable requirements before you commit." },
  { q: "How long does recruitment take?", a: "Timelines vary with language preparation, qualification recognition, employer selection and visa processing. We discuss your individual pathway rather than promise a fixed departure date." },
  { q: "Does an application guarantee a job or visa?", a: "No. Submitting an enquiry starts an assessment; it does not guarantee employment, recognition or a visa. Role availability and all requirements must be confirmed before proceeding." },
  { q: "Can German healthcare employers contact you?", a: "Yes. Hospitals, clinics, care providers and healthcare recruitment partners in Germany can submit their staffing requirements through our enquiry form." },
] as const;