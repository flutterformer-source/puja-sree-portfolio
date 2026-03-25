import { EXPERTISE_DATA } from '@/lib/expertiseData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Stethoscope, Brain, Activity, HeartPulse, UserRoundCheck, ShieldCheck, Zap, Hammer } from 'lucide-react';

export function generateStaticParams() {
  return Object.keys(EXPERTISE_DATA).map((id) => ({ id }));
}

export default function ExpertiseDetail({ params }: { params: { id: string } }) {
  const data = EXPERTISE_DATA[params.id];
  if (!data) return notFound();

  const getIcon = () => {
    switch (params.id) {
      case 'orthopedic-rehabilitation': return <Hammer className="w-12 h-12 text-primary" />;
      case 'neurological-rehabilitation': return <Brain className="w-12 h-12 text-primary" />;
      case 'cardio-pulmonary-therapy': return <HeartPulse className="w-12 h-12 text-primary" />;
      case 'sports-injury-rehabilitation': return <Zap className="w-12 h-12 text-primary" />;
      case 'occupational-therapy': return <UserRoundCheck className="w-12 h-12 text-primary" />;
      case 'functional-independence': return <Stethoscope className="w-12 h-12 text-primary" />;
      case 'pain-management': return <Activity className="w-12 h-12 text-primary" />;
      case 'post-surgical-rehab': return <ShieldCheck className="w-12 h-12 text-primary" />;
      default: return <Stethoscope className="w-12 h-12 text-primary" />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden pt-32 pb-24">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#1a4452] to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Link href="/#skills" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold tracking-widest uppercase text-xs">Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="glass-card p-10 md:p-16 rounded-[3rem] mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8 relative z-10">
            <div className="p-6 bg-primary/10 rounded-3xl shadow-primary/20 shadow-xl border border-primary/20 shrink-0">
              {getIcon()}
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.3em] text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                Clinical Expertise Protocol
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">{data.name}</h1>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light relative z-10">
            {data.overview}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Symptoms */}
          <div className="glass-card p-10 rounded-[2.5rem] hover:border-primary/30 transition-colors">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 tracking-tight">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Symptoms & Indicators
            </h2>
            <ul className="space-y-4">
              {data.symptoms.map((sym, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground/90 leading-relaxed font-light">
                  <span className="text-primary mt-1.5 opacity-80">▹</span>
                  {sym}
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div className="glass-card p-10 rounded-[2.5rem] hover:border-primary/30 transition-colors">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 tracking-tight">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Root Causes
            </h2>
            <ul className="space-y-4">
              {data.causes.map((cause, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground/90 leading-relaxed font-light">
                  <span className="text-primary mt-1.5 opacity-80">▹</span>
                  {cause}
                </li>
              ))}
            </ul>
          </div>

          {/* Occurrences & Diagnosis */}
          <div className="glass-card p-10 rounded-[2.5rem] md:col-span-2 hover:border-primary/30 transition-colors grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold mb-4 text-white tracking-tight">Where It Occurs</h2>
              <p className="text-muted-foreground leading-relaxed font-light">{data.occurrences}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-white tracking-tight">Clinical Diagnosis</h2>
              <p className="text-muted-foreground leading-relaxed font-light">{data.diagnosis}</p>
            </div>
          </div>

          {/* First Aid & Overcoming */}
          <div className="glass-card p-10 rounded-[2.5rem] md:col-span-2 border-primary/20 bg-[#245f72]/20">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-[#245f72] uppercase bg-primary rounded-md shadow-sm">Immediate Response</div>
                <h2 className="text-2xl font-bold mb-4 text-white tracking-tight">First Aid Therapy</h2>
                <p className="text-muted-foreground leading-relaxed font-light">{data.firstAid}</p>
              </div>
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-md border border-primary/20">Long-term Path</div>
                <h2 className="text-2xl font-bold mb-4 text-white tracking-tight">Rehabilitation & Recovery</h2>
                <p className="text-muted-foreground leading-relaxed font-light">{data.overcoming}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
