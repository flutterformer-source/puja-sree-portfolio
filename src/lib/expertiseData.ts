export interface ExpertiseDetails {
  id: string;
  name: string;
  overview: string;
  symptoms: string[];
  occurrences: string;
  diagnosis: string;
  firstAid: string;
  causes: string[];
  overcoming: string;
}

export const EXPERTISE_DATA: Record<string, ExpertiseDetails> = {
  'orthopedic-rehabilitation': {
    id: 'orthopedic-rehabilitation',
    name: 'Orthopedic Rehabilitation',
    overview: 'A specialized therapy focusing on the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles. It aims to restore function, improve mobility, and relieve pain following injury, surgery, or degenerative conditions.',
    symptoms: ['Joint stiffness and limited range of motion', 'Localized pain and swelling', 'Muscle weakness', 'Difficulty bearing weight or performing daily tasks'],
    occurrences: 'Occurs in joints (knees, hips, shoulders), spine, and peripheral limbs following acute trauma or chronic wear and tear.',
    diagnosis: 'Diagnosed through physical assessment of mobility, strength testing, X-rays, MRI scans, and evaluating patient pain scales.',
    firstAid: 'R.I.C.E protocol (Rest, Ice, Compression, Elevation) immediately following an acute injury to minimize swelling and prevent further damage.',
    causes: ['Sports injuries or trauma', 'Degenerative joint disease (Osteoarthritis)', 'Repetitive strain or overuse', 'Postural imbalances'],
    overcoming: 'Overcome through a structured rehabilitation program including targeted strengthening exercises, manual therapy, joint mobilization, and progressive load-bearing activities to restore full biomechanical function.'
  },
  'neurological-rehabilitation': {
    id: 'neurological-rehabilitation',
    name: 'Neurological Rehabilitation',
    overview: 'A highly specialized rehabilitative program designed for individuals with diseases, injury, or disorders of the nervous system. The goal is to improve function, reduce symptoms, and enhance the well-being of the patient.',
    symptoms: ['Muscle weakness or paralysis', 'Loss of coordination and balance', 'Tremors or involuntary movements', 'Sensory loss or numbness', 'Difficulty speaking or swallowing'],
    occurrences: 'Affects the central nervous system (brain and spinal cord) or peripheral nervous system.',
    diagnosis: 'Evaluated through neurological exams testing reflexes, cranial nerves, motor function, and imaging like CT/MRI of the brain or spine.',
    firstAid: 'Immediate medical intervention is required for acute events like stroke (e.g., calling emergency services). Ensure the patient is safe from falls and monitor airway/breathing.',
    causes: ['Stroke (Cerebrovascular Accident)', 'Traumatic Brain Injury (TBI)', 'Spinal Cord Injury', 'Progressive conditions like Parkinson’s or Multiple Sclerosis'],
    overcoming: 'Recovery relies on neuroplasticity. Overcome through repetitive task-specific training, gait re-education, balance protocol, constraint-induced movement therapy, and integrating assistive devices for daily living.'
  },
  'cardio-pulmonary-therapy': {
    id: 'cardio-pulmonary-therapy',
    name: 'Cardio-Pulmonary Therapy',
    overview: 'Therapy focusing on patients suffering from heart and lung conditions. It involves exercises and education to help patients rebuild strength, improve breathing mechanics, and increase endurance.',
    symptoms: ['Shortness of breath (Dyspnea)', 'Chronic cough or wheezing', 'Fatigue with minimal exertion', 'Chest tightness or pain'],
    occurrences: 'Occurs in the cardiovascular system (heart, blood vessels) and the respiratory system (lungs, airways).',
    diagnosis: 'Assessed via pulmonary function tests (Spirometry), ECG/EKG, stress tests, and assessing oxygen saturation during activity.',
    firstAid: 'For sudden severe shortness of breath or chest pain, administer prescribed rescue inhalers or nitroglycerin, sit the patient upright, and seek immediate emergency medical care.',
    causes: ['Chronic Obstructive Pulmonary Disease (COPD)', 'Heart attacks or heart failure', 'Post-COVID respiratory complications', 'Asthma or Cystic Fibrosis'],
    overcoming: 'Management includes medically supervised aerobic conditioning, breathing exercises (diaphragmatic and pursed-lip breathing), airway clearance techniques, and energy conservation strategies.'
  },
  'sports-injury-rehabilitation': {
    id: 'sports-injury-rehabilitation',
    name: 'Sports Injury Rehabilitation',
    overview: 'A multi-disciplinary approach to treating injuries sustained during athletic activities. It focuses on safely returning the athlete to their peak performance level while preventing future injuries.',
    symptoms: ['Sudden sharp pain during activity', 'Swelling and bruising', 'Inability to bear weight', 'Visible deformity or joint instability'],
    occurrences: 'Commonly affects ligaments (sprains), muscles (strains), tendons (tendinitis), and bones (stress fractures) in active individuals.',
    diagnosis: 'Clinical examination of joint stability, dynamic movement screening, biomechanical analysis, and ultrasound/MRI for soft tissue tears.',
    firstAid: 'Immediate cessation of the activity. Apply the P.O.L.I.C.E principle (Protect, Optimal Loading, Ice, Compression, Elevation) to manage the acute phase.',
    causes: ['Overtraining and lack of rest', 'Poor biomechanics or technique', 'Inadequate warm-up or conditioning', 'Direct impact or trauma'],
    overcoming: 'Progressive rehabilitation involving pain management, restoring range of motion, sport-specific strength and conditioning, plyometrics, and proprioceptive training to ensure a safe return to play.'
  },
  'occupational-therapy': {
    id: 'occupational-therapy',
    name: 'Occupational Therapy',
    overview: 'A patient-centered profession concerned with promoting health and well-being through occupation. The primary goal is to enable people to participate in the activities of everyday life.',
    symptoms: ['Difficulty performing daily self-care tasks (dressing, eating)', 'Fine motor skill deficits', 'Cognitive impairments affecting organization', 'Sensory processing issues'],
    occurrences: 'Manifests in home, work, or school environments where an individual struggles to meet the demands of their daily routine due to physical, mental, or cognitive barriers.',
    diagnosis: 'Detailed functional assessments, evaluating home environments, testing fine motor coordination, and assessing cognitive-perceptual skills.',
    firstAid: 'Not applicable in an acute sense; however, immediate environmental modifications (like removing trip hazards) act as preventive "first aid" against falls.',
    causes: ['Aging and degenerative conditions', 'Developmental delays in children', 'Severe injuries or amputations', 'Neurological or psychological disorders'],
    overcoming: 'Overcome by adapting the environment, utilizing assistive technology, sensory integration therapies, and practicing graded activities to rebuild independence and confidence.'
  },
  'functional-independence': {
    id: 'functional-independence',
    name: 'Functional Independence',
    overview: 'Focuses on the core objective of allowing elderly or impaired patients to safely self-manage their lives and mobility without requiring constant assistance from caregivers.',
    symptoms: ['Frequent falls or loss of balance', 'Inability to transition from sitting to standing', 'Fatigue during basic chores', 'Fear of movement (kinesiophobia)'],
    occurrences: 'Occurs predominantly in the geriatric population or following severe systemic illness/hospitalization (deconditioning).',
    diagnosis: 'Evaluated using standardized tools like the Functional Independence Measure (FIM), Timed Up and Go (TUG) test, and balance scales.',
    firstAid: 'If a fall occurs, assess for fractures or head trauma before moving. Provide immediate mobility aids (walkers/canes) if instability is noted.',
    causes: ['Prolonged bed rest or hospitalization', 'Sarcopenia (age-related muscle loss)', 'Multiple comorbidities', 'Vestibular (inner ear) disorders'],
    overcoming: 'Requires a comprehensive approach of fall prevention education, core and lower extremity strengthening, balance retraining, and prescribing appropriate ambulatory aids.'
  },
  'pain-management': {
    id: 'pain-management',
    name: 'Pain Management',
    overview: 'The discipline of evaluating, diagnosing, and treating different types of pain. Physiotherapy plays a crucial role in non-pharmacological pain relief and addressing the root biomechanical causes of pain.',
    symptoms: ['Constant ache or sharp shooting pains', 'Muscle spasms and guarding', 'Sleep disruption due to pain', 'Radiating numbness or tingling'],
    occurrences: 'Can be localized (e.g., lower back, neck) or systemic (e.g., Fibromyalgia, chronic regional pain syndrome).',
    diagnosis: 'Comprehensive pain history, identifying pain triggers, postural assessment, neural tension tests, and ruling out red-flag medical conditions.',
    firstAid: 'Application of acute modalities: ice for acute inflammation, heat for chronic muscle spasms, and finding a position of maximum comfort (resting postures).',
    causes: ['Nerve compression (e.g., Sciatica)', 'Chronic inflammation', 'Postural stress and ergonomics', 'Central sensitization (nervous system hypersensitivity)'],
    overcoming: 'Treated through manual therapy, electrotherapy (TENS, Ultrasound), dry needling, cognitive-behavioral approaches to pain, and gradual exposure to movement to desensitize the nervous system.'
  },
  'post-surgical-rehab': {
    id: 'post-surgical-rehab',
    name: 'Post-Surgical Rehab',
    overview: 'A crucial phase following surgical intervention aimed at minimizing complications, reducing scar tissue formation, and restoring normal function and strength as quickly and safely as possible.',
    symptoms: ['Incisional pain and tissue tightness', 'Severe muscle atrophy around the surgical site', 'Restricted joint mobility', 'Dependency on painkillers'],
    occurrences: 'Occurs immediately post-operation in hospitals and continues in outpatient clinics for weeks or months.',
    diagnosis: 'Continuous monitoring of surgical incisions, tracking range of motion milestones based on surgical protocols, and assessing muscle firing.',
    firstAid: 'Wound care management, infection prevention, ensuring proper blood flow (DVT prevention via ankle pumps), and maintaining required surgical precautions (e.g., weight-bearing limits).',
    causes: ['Joint replacements (TKR, THR)', 'Ligament reconstructions (ACL repair)', 'Spinal fusions or discectomies', 'Tendon repairs (Rotator cuff)'],
    overcoming: 'Success requires strict adherence to surgeon’s protocols, progressive mobilization, scar tissue massage, and a phased strengthening program to ultimately surpass pre-surgical baseline function.'
  }
};
