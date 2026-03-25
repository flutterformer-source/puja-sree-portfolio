import { MetadataRoute } from 'next';
import { EXPERTISE_DATA } from '@/lib/expertiseData';
import { CASE_STUDIES } from '@/lib/caseData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pujasree.com';

  const expertiseRoutes = Object.keys(EXPERTISE_DATA).map((id) => ({
    url: `${baseUrl}/expertise/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const caseRoutes = Object.keys(CASE_STUDIES).map((id) => ({
    url: `${baseUrl}/cases/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...expertiseRoutes,
    ...caseRoutes,
  ];
}
