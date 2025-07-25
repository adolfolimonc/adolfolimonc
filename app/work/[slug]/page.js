import fs from 'fs';
import path from 'path';
import ProjectLayout from '@/components/work-details/ProjectLayout';
import generateStylesheetsObject from '@/common/generateStylesheetsObject';
import projects from '@/data/projects.json';

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  return {
    title: project
      ? `${project.title}: ${project.subTitle} • adolfolimonc — Designer Web Developer`
      : 'Project Not Found • adolfolimonc',
    icons: {
      icon: '/assets/imgs/favicon.ico',
      shortcut: '/assets/imgs/favicon.ico',
      other: generateStylesheetsObject([
        '/assets/css/plugins.css',
        '/assets/css/style.css',
        // add fonts if you want
      ]),
    },
  };
}

export default function ProjectPage({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'work', `${params.slug}.json`);
  let project = null;

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    project = JSON.parse(fileContents);
  } catch (err) {
    return <div>Project not found</div>;
  }
  return <ProjectLayout project={project} />;
 
}


export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), 'data', 'work');
  const files = fs.readdirSync(dirPath);
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => ({ slug: file.replace('.json', '') }));
}
