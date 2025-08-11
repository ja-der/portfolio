import ExperienceBlock from "./ExperienceBlock";

export default function ExperiencePage() {
  return (
    <div className="bg-[#0d0d0d] text-white">
      {/* Ericsson #1: Jan–Apr */}
      <ExperienceBlock
        title="Software Developer Intern (Platform Engineering) — Ericsson (May-August 2025)"
        description="Joined the Cloud Native Infrastructure team at Ericsson to help modernize telco systems. I built a Kubernetes Operator from scratch using Go, automating resource management for 5G nodes. I also wrote Python validation scripts to test CIQ data before rollouts, and packaged the whole system using Helm for seamless deployment across environments.
        Checkout the work I've been contributing here\nhttps://www.ericsson.com/en/news/2025/2/ericsson-reconfirms-open-ran-leadership-by-advancing-o2-interface-industrialization-with-dell-technologies-and-red-hat"
        image="/images/ericsson-jan.png"
        tech={["Go", "Helm", "Kubernetes", "Python", "CI/CD", "CIQ", "GitLab"]}
        reverse={false}
      />

      {/* Ericsson #2: May–Aug */}
      <ExperienceBlock
        title="Software Developer Intern (Cloud-Native Apps) — Ericsson (May–Aug 2025)"
        description="In the second term, I shifted to a new team working on monitoring dashboards. I focused on writing controllers for custom Kubernetes resources, integrated metrics, and helped fix logging bugs in the Go backend. Learned how real-world observability systems work at scale and deepened my understanding of production deployments."
        image="/images/ericsson-may.png"
        tech={["Go", "Prometheus", "Grafana", "GitLab", "K8s", "Debugging"]}
        reverse={true}
      />

      {/* Statistics Canada */}
      <ExperienceBlock
        title="Software Developer — Statistics Canada (Jan–Apr 2025)"
        description="Built internal dashboards to visualize statistical data for analysts. I implemented interactive charts with JavaScript and Python (Plotly), optimized slow SQL queries, and deployed the whole system to AWS using EC2 and Terraform. Learned the value of clean data, automation, and devops when working with government-scale systems."
        image="/images/statscan.png"
        tech={["Python", "JavaScript", "Plotly", "SQL", "Terraform", "AWS EC2"]}
        reverse={false}
      />
    </div>
  );
}
