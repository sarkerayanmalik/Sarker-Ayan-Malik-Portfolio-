
// Fix: Added missing React import to use React.ReactNode
import React from 'react';

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  className?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'cloud' | 'security' | 'programming' | 'networking';
}