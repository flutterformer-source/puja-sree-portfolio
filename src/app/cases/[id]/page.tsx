import { CASE_STUDIES } from '@/lib/caseData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Dna, Brain, Wind, Trophy, Stethoscope } from 'lucide-react';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = CASE_STUDIES[params.id];
  if (!data) return { title: 'Not Found' };

  return {
    title: `${data.title} Case Study`,
    description: data.overview.substring(0, 160),
    openGraph: {
      title: `Case Study: ${data.title} | Dr. Puja Sree`,
      description: data.overview,
      images: [data.image],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((id) => ({ id }));
}

export default function CaseDetail({ params }: { params: { id: string } }) {
  const data = CASE_STUDIES[params.id];
  if (!data) return notFound();

  const getIcon = () => {
    switch (params.id) {
      case 'orthopedic-rehab': return <Dna className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'neurological-rehab': return <Brain className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'cardio-pulmonary-care': return <Wind className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      case 'sports-injury-recovery': return <Trophy className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
      default: return <Stethoscope className="w-8 h-8 md:w-12 md:h-12 text-primary" />;
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-foreground relative pt-32 pb-24 selection:bg-primary/30">
      
      {/* Blog Container */}
      <article className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <Link href="/#cases" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold tracking-widest uppercase text-xs">Back to Case Studies</span>
        </Link>
        
        {/* Article Header */}
        <header className="mb-14 border-b border-primary/20 pb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl flex-shrink-0">
              {getIcon()}
            </div>
            <div className="inline-block px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              Case Outcome Detail
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-[1.1] text-white">
            {data.title}
          </h1>
          <p className="text-primary text-xl md:text-2xl font-medium italic mb-8 opacity-80">{data.subtitle}</p>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic border-l-4 border-primary pl-6">
            {data.overview}
          </p>
        </header>
        
        {/* Feature Image */}
        <figure className="mb-16 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group relative h-[300px] sm:h-[400px] md:h-[500px]">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
        </figure>

        {/* Article Body */}
        <div className="prose prose-lg prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
          
          <div className="mb-16 grid md:grid-cols-1 gap-12">
            <div className="glass-card p-10 rounded-[2.5rem] border-red-500/20 bg-red-500/5">
              <h2 className="text-3xl font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                The Challenge
              </h2>
              <p className="text-lg leading-relaxed">{data.challenge}</p>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] border-primary/20 bg-primary/5">
              <h2 className="text-3xl font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary" />
                Our Clinical Approach
              </h2>
              <p className="text-lg leading-relaxed">{data.approach}</p>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] border-green-500/20 bg-green-500/5">
              <h2 className="text-3xl font-bold mb-6 text-white tracking-tight flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                Positive Outcome
              </h2>
              <p className="text-lg leading-relaxed font-medium text-foreground/90">{data.outcome}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">Focus & Specialization</h2>
            <div className="flex flex-wrap gap-3">
              {data.tags.map((tag) => (
                <span key={tag} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {data.relatedExpertise && (
            <div className="mt-20 border-t border-white/10 pt-10 text-center">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">Learn more about this therapy</p>
              <Link 
                href={`/expertise/${data.relatedExpertise}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-[#1a4452] rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                View Full Protocol
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          )}
          
        </div>
      </article>
      
    </main>
  );
}
