import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { List, Edit3 } from 'lucide-react';

export default function DocumentViewer({ project }) {
  
  // Adapted from your original buildMarkdown function
  const buildMarkdown = () => {
    let md = "";
    if (project.title) md += `# ${project.title}\n`;
    if (project.thumbnail) md += `![Project Image](${project.thumbnail})\n\n`;

    md += `## Team\n\n`;
    if (project.mentors) md += `**Mentors:** ${project.mentors}\n\n`;
    if (project.members) md += `**Members:** ${project.members}\n\n`;
    if (project.duration) md += `**Duration:** ${project.duration} months\n\n`;

    if (project.introduction) md += `## Introduction / Abstract\n\n${project.introduction}\n\n`;
    if (project.method_description) md += `## Method\n\n${project.method_description}\n\n`;
    if (project.results) md += `## Expected Results\n\n${project.results}\n\n`;

    return md;
  };

  const markdown = project.readme_md ? project.readme_md : buildMarkdown();

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* GitHub-style Readme Container */}
        <div className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden bg-white dark:bg-[#111] shadow-2xl transition-colors duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="flex items-center gap-3 text-brand-navy dark:text-gray-200">
              <List className="w-5 h-5 text-brand-blue" />
              <span className="font-semibold font-mono text-sm tracking-wide">
                {project.title.replace(/\s+/g, '-').toLowerCase()}.md
              </span>
            </div>
            <button className="text-gray-400 hover:text-brand-blue transition-colors">
              <Edit3 className="w-5 h-5" />
            </button>
          </div>

          {/* Markdown Content rendered via Tailwind Typography */}
          <div className="p-8 md:p-12">
            <article className="prose prose-slate dark:prose-invert max-w-none 
              prose-headings:text-brand-navy dark:prose-headings:text-white 
              prose-a:text-brand-blue hover:prose-a:text-indigo-400
              prose-img:rounded-2xl prose-img:shadow-lg">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }]
                ]}
              >
                {markdown}
              </ReactMarkdown>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}