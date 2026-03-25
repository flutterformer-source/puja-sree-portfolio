import { EXPERTISE_DATA } from '@/lib/expertiseData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Stethoscope, Brain, Activity, HeartPulse, UserRoundCheck, ShieldCheck, Zap, Hammer } from 'lucide-react';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = EXPERTISE_DATA[params.id];
  if (!data) return { title: 'Not Found' };

  return {
    title: `${data.name} Specialist`,
    description: data.overview.substring(0, 160),
    openGraph: {
      title: `${data.name} | Dr. Puja Sree`,
      description: data.overview,
      images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(EXPERTISE_DATA).map((id) => ({ id }));
}

const getImageUrls = (id: string) => {
  const images = {
    'orthopedic-rehabilitation': [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80'
    ],
    'neurological-rehabilitation': [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
    ],
    'cardio-pulmonary-therapy': [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
    ],
    'sports-injury-rehabilitation': [
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80'
    ]
  };
  return images[id as keyof typeof images] || [
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
  ];
};

export default function ExpertiseDetail({ params }: { params: { id: string } }) {
  const data = EXPERTISE_DATA[params.id];
  if (!data) return notFound();

  const getIcon = () => {
    switch (params.id) {
      case 'orthopedic-rehabilitation': return <Hammer className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'neurological-rehabilitation': return <Brain className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'cardio-pulmonary-therapy': return <HeartPulse className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'sports-injury-rehabilitation': return <Zap className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'occupational-therapy': return <UserRoundCheck className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'functional-independence': return <Stethoscope className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'pain-management': return <Activity className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'post-surgical-rehab': return <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      default: return <Stethoscope className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
    }
  };

  const images = getImageUrls(params.id);

  return (
    <main className="min-h-screen bg-transparent text-foreground relative pt-32 pb-24 selection:bg-primary/30">
      
      {/* Blog Container */}
      <article className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <Link href="/#skills" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold tracking-widest uppercase text-xs">Back to Portfolio</span>
        </Link>
        
        {/* Article Header */}
        <header className="mb-14 border-b border-primary/20 pb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl flex-shrink-0">
              {getIcon()}
            </div>
            <div className="inline-block px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-widest text-[#1a4452] uppercase bg-primary rounded-full shadow-sm">
              Clinical Expertise
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-white">
            {data.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic border-l-4 border-primary pl-6">
            {data.overview}
          </p>
        </header>
        
        {/* Feature Image 1 */}
        <figure className="mb-16 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group relative h-[300px] sm:h-[400px] md:h-[500px]">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-60"></div>
          <img 
            src={images[0]} 
            alt={data.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
          />
        </figure>

        {/* Article Body */}
        <div className="prose prose-lg prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Symptoms & Indicators</h2>
            <p className="mb-6">Patients suffering from conditions requiring {data.name.toLowerCase()} often exhibit a range of debilitating signs. Identifying these early is crucial for an effective treatment plan.</p>
            <ul className="space-y-4 list-none pl-0">
              {data.symptoms.map((sym, i) => (
                <li key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-primary mt-1 font-bold">▹</span>
                  <span className="text-lg">{sym}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Root Causes</h2>
              <p className="mb-6">The origin of these complications can vary widely, but they typically stem from the following primary causes:</p>
              <ul className="space-y-3 list-none pl-0">
                {data.causes.map((cause, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="rounded-3xl overflow-hidden shadow-xl border border-white/10 relative h-[300px]">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-40"></div>
              <img 
                src={images[1]} 
                alt="Therapy session" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </figure>
          </div>

          <div className="mb-16 p-10 md:p-14 bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">Diagnosis & Occurrence</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Where It Occurs</h3>
                <p>{data.occurrences}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Clinical Diagnosis</h3>
                <p>{data.diagnosis}</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">Treatment & Rehabilitation</h2>
            
            <div className="space-y-12">
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#245f72] uppercase bg-primary rounded-md shadow-sm">Immediate Response</div>
                <h3 className="text-2xl font-bold mb-4 text-white">First Aid Therapy</h3>
                <p className="text-xl leading-relaxed">{data.firstAid}</p>
              </div>
              
              <div className="pl-6 border-l-2 border-primary/30">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-md border border-primary/20">Long-term Path</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Rehabilitation & Recovery</h3>
                <p className="text-xl leading-relaxed">{data.overcoming}</p>
              </div>
            </div>
          </div>
          
        </div>
      </article>
      
    </main>
  );
}
