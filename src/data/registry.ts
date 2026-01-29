export type RegistrySkill = {
  slug: string;
  user: string;
  repo: string;
  rawUrl: string;
  githubUrl: string;
  name?: string;
  description?: string;
};

export const registry: RegistrySkill[] = [
  {
    slug: "frontend-design",
    user: "anthropics",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md",
    githubUrl:
      "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md",
  },
];
