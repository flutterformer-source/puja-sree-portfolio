export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  image: string;
  relatedExpertise?: string;
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'orthopedic-rehab': {
    id: 'orthopedic-rehab',
    title: 'Orthopedic Rehabilitation',
    subtitle: 'Post-Surgical Recovery & Mobility Restoration',
    overview: 'This case involved a 65-year-old patient following a total knee replacement surgery. The primary focus was on managing post-operative pain, reducing inflammation, and restoring full range of motion while ensuring the patient could return to independent walking.',
    challenge: 'The patient experienced significant stiffness and guarding due to fear of movement (kinesiophobia). There was also muscle atrophy in the quadriceps which hindered early weight-bearing efforts.',
    approach: 'We implemented a phased recovery protocol starting with gentle passive range of motion exercises and manual therapy to reduce scar tissue tension. This was followed by progressive isometric strengthening and eventually functional gait training with assisted devices.',
    outcome: 'After 8 weeks of intensive therapy, the patient achieved 120 degrees of knee flexion, discarded the walking cane, and returned to performing household chores independently with a significant reduction in pain scores.',
    tags: ['Joint Replacement', 'Mobility', 'Pain Management'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    relatedExpertise: 'orthopedic-rehabilitation'
  },
  'neurological-rehab': {
    id: 'neurological-rehab',
    title: 'Neurological Rehabilitation',
    subtitle: 'Post-Stroke Motor Function Recovery',
    overview: 'Handling a recovery journey for a middle-aged patient who suffered an ischemic stroke, resulting in left-sided hemiparesis. The goal was to re-educate the brain and muscles to coordinate movement again.',
    challenge: 'Loss of fine motor control in the left hand and significant balance instability which made standing without support dangerous. The patient also faced emotional frustration due to the sudden loss of independence.',
    approach: 'Utilized Neurodevelopmental Treatment (NDT) and mirror therapy to stimulate neuroplasticity. We focused on repetitive task-specific training, such as grasping objects and weight-shifting exercises to improve core stability.',
    outcome: 'Significant improvement in upper limb function was noted over 6 months. The patient regained the ability to feed themselves and walk short distances within their home using a quad-ripod, drastically improving their quality of life.',
    tags: ['Stroke Recovery', 'Motor Function', 'Coordination'],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    relatedExpertise: 'neurological-rehabilitation'
  },
  'cardio-pulmonary-care': {
    id: 'cardio-pulmonary-care',
    title: 'Cardio-Pulmonary Care',
    subtitle: 'Post-COVID Respiratory Strengthening',
    overview: 'A specialized case for a patient recovering from severe COVID-19 pneumonia who suffered from persistent shortness of breath and extreme physical deconditioning.',
    challenge: 'The patient had a very low VO2 max and experienced oxygen desaturation even during basic activities like sitting up or talking for extended periods.',
    approach: 'A combination of diaphragmatic breathing techniques, incentive spirometry, and low-intensity aerobic conditioning (monitored walking) was prescribed. We also focused on energy conservation techniques to help the patient manage daily fatigue.',
    outcome: 'Lung capacity significantly improved over 12 weeks. The patient reported a 70% reduction in perceived exertion during daily tasks and was able to return to light office work without needing supplemental oxygen.',
    tags: ['Breathing Exercises', 'Endurance', 'Lung Capacity'],
    image: 'https://images.unsplash.com/photo-1505592225030-dad7a0531844?auto=format&fit=crop&w=1200&q=80',
    relatedExpertise: 'cardio-pulmonary-therapy'
  },
  'sports-injury-recovery': {
    id: 'sports-injury-recovery',
    title: 'Sports Injury Recovery',
    subtitle: 'ACL Reconstruction Rehabilitation',
    overview: 'Comprehensive rehabilitation for a young athlete following ACL reconstruction surgery, aimed at returning to competitive football.',
    challenge: 'Restoring terminal knee extension and rebuilding psychological confidence for pivoting and high-impact movements. Preventing early reinjury was a top priority.',
    approach: 'The program featured evidence-based phases: initial protection and ROM, followed by eccentric strengthening, and finally plyometric and sports-specific agility drills. We conducted regular biomechanical assessments to ensure symmetrical loading.',
    outcome: 'The athlete successfully returned to competitive play in 9 months, meeting all strength and agility benchmarks. They reported feeling stronger than pre-injury and demonstrated excellent landing mechanics.',
    tags: ['Athletic Rehab', 'Injury Recovery', 'Performance'],
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',
    relatedExpertise: 'sports-injury-rehabilitation'
  }
};
