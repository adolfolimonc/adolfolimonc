import projects from '@/data/projects.json';

export default function ProjectDetails({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return <div style={{ padding: 40 }}><h1>Project Not Found</h1></div>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{project.title}</h1>
      <h3>Category: {project.category}</h3>
      <img src={project.thumbnail} alt={project.title} style={{ maxWidth: 400, borderRadius: 12 }} />
      <div style={{ marginTop: 20 }}>
        <strong>Tags:</strong> {project.tags && project.tags.join(', ')}
      </div>
    </div>
  );
} 