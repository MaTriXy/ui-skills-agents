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
    name: "frontend-design",
    description:
      "Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code and UI design that avoids generic AI aesthetics.",
  },
  {
    slug: "web-design-guidelines",
    user: "vercel-labs",
    repo: "agent-skills",
    rawUrl:
      "https://raw.githubusercontent.com/vercel-labs/agent-skills/main/skills/web-design-guidelines/SKILL.md",
    githubUrl:
      "https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md",
    name: "web-design-guidelines",
    description:
      "Review UI code for Web Interface Guidelines compliance. Audit design, accessibility, and UX against Vercel's best practices.",
  },
  {
    slug: "ui-ux-pro-max",
    user: "nextlevelbuilder",
    repo: "ui-ux-pro-max-skill",
    rawUrl:
      "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-ux-pro-max/SKILL.md",
    githubUrl:
      "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md",
    name: "ui-ux-pro-max",
    description:
      "Comprehensive UI/UX design intelligence with 50+ styles, 97 palettes, and 9 technology stacks for building professional interfaces.",
  },
  /*
  {
    slug: "responsive-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/responsive-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/responsive-design/SKILL.md",
  },
  {
    slug: "web-component-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/web-component-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/web-component-design/SKILL.md",
  },
  */
  {
    slug: "interaction-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/interaction-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/interaction-design/SKILL.md",
    name: "interaction-design",
    description:
      "Design and implement microinteractions, motion design, transitions, and user feedback patterns for delightful user experiences.",
  },
  /*
  {
    slug: "accessibility-compliance",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/accessibility-compliance/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/accessibility-compliance/SKILL.md",
  },
  {
    slug: "screen-reader-testing",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/accessibility-compliance/skills/screen-reader-testing/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/accessibility-compliance/skills/screen-reader-testing/SKILL.md",
  },
  {
    slug: "wcag-audit-patterns",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md",
  },
  {
    slug: "mobile-ios-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/mobile-ios-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/mobile-ios-design/SKILL.md",
  },
  {
    slug: "mobile-android-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/mobile-android-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/mobile-android-design/SKILL.md",
  },
  {
    slug: "react-native-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/react-native-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/react-native-design/SKILL.md",
  },
  */
  {
    slug: "swiftui-ui-patterns",
    user: "dimillian",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/dimillian/skills/main/swiftui-ui-patterns/SKILL.md",
    githubUrl:
      "https://github.com/dimillian/skills/blob/main/swiftui-ui-patterns/SKILL.md",
    name: "swiftui-ui-patterns",
    description:
      "Best practices and example-driven guidance for building SwiftUI views and components. Includes tab architecture and screen composition.",
  },
  {
    slug: "interface-design",
    user: "Dammyjay93",
    repo: "interface-design",
    rawUrl:
      "https://raw.githubusercontent.com/Dammyjay93/interface-design/main/.claude/skills/interface-design/SKILL.md",
    githubUrl:
      "https://github.com/Dammyjay93/interface-design/blob/main/.claude/skills/interface-design/SKILL.md",
    name: "interface-design",
    description:
      "Specialized skill for interface design: dashboards, admin panels, and SaaS apps. Focused on craft and consistency.",
  },
  {
    slug: "ui-design-system",
    user: "davila7",
    repo: "claude-code-templates",
    rawUrl:
      "https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/creative-design/ui-design-system/SKILL.md",
    githubUrl:
      "https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/creative-design/ui-design-system/SKILL.md",
    name: "ui-design-system",
    description:
      "Toolkit for creating and maintaining scalable design systems, including design tokens, component architecture, and documentation.",
  },
  /*
  {
    slug: "frontend-ui-ux",
    user: "code-yeongyu",
    repo: "oh-my-opencode",
    rawUrl:
      "https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/dev/src/features/builtin-skills/frontend-ui-ux/SKILL.md",
    githubUrl:
      "https://github.com/code-yeongyu/oh-my-opencode/blob/dev/src/features/builtin-skills/frontend-ui-ux/SKILL.md",
  },
  */
  {
    slug: "fixing-motion-performance",
    user: "ibelick",
    repo: "ui-skills",
    rawUrl:
      "https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-motion-performance/SKILL.md",
    githubUrl:
      "https://github.com/ibelick/ui-skills/blob/main/skills/fixing-motion-performance/SKILL.md",
    name: "fixing-motion-performance",
    description:
      "Fix animation performance issues across CSS, Motion, and JS. Optimize rendering steps and minimize layout thrashing.",
  },
  /*
  {
    slug: "fixing-metadata",
    user: "ibelick",
    repo: "ui-skills",
    rawUrl:
      "https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-metadata/SKILL.md",
    githubUrl:
      "https://github.com/ibelick/ui-skills/blob/main/skills/fixing-metadata/SKILL.md",
  },
  {
    slug: "kpi-dashboard-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/business-analytics/skills/kpi-dashboard-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/business-analytics/skills/kpi-dashboard-design/SKILL.md",
  },
  */
  {
    slug: "tailwind-css-patterns",
    user: "giuseppe-trisciuoglio",
    repo: "developer-kit",
    rawUrl:
      "https://raw.githubusercontent.com/giuseppe-trisciuoglio/developer-kit/main/skills/tailwind-css/SKILL.md",
    githubUrl:
      "https://github.com/giuseppe-trisciuoglio/developer-kit/blob/main/skills/tailwind-css/SKILL.md",
    name: "tailwind-css-patterns",
    description:
      "Expert guide for building modern, responsive user interfaces with Tailwind CSS utility-first patterns and modern CSS best practices.",
  },
  /*
  {
    slug: "react-patterns",
    user: "giuseppe-trisciuoglio",
    repo: "developer-kit",
    rawUrl:
      "https://raw.githubusercontent.com/giuseppe-trisciuoglio/developer-kit/main/skills/react/SKILL.md",
    githubUrl:
      "https://github.com/giuseppe-trisciuoglio/developer-kit/blob/main/skills/react/SKILL.md",
  },
  {
    slug: "react-ui-patterns",
    user: "sickn33",
    repo: "antigravity-awesome-skills",
    rawUrl:
      "https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/skills/react-ui-patterns/SKILL.md",
    githubUrl:
      "https://github.com/sickn33/antigravity-awesome-skills/blob/main/skills/react-ui-patterns/SKILL.md",
  },
  */
  {
    slug: "canvas-design",
    user: "anthropics",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/anthropics/skills/main/skills/canvas-design/SKILL.md",
    githubUrl:
      "https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md",
    name: "canvas-design",
    description:
      "Create original visual designs and art on digital canvases using design philosophy, focusing on form, space, and color.",
  },
  {
    slug: "12-principles-of-animation",
    user: "raphaelsalaja",
    repo: "userinterface-wiki",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/userinterface-wiki/main/skills/12-principles-of-animation/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/userinterface-wiki/blob/main/skills/12-principles-of-animation/SKILL.md",
    name: "12-principles-of-animation",
    description:
      "Apply Disney's 12 animation principles to web interfaces to make motion feel natural, organic, and human.",
  },
  /*
  {
    slug: "to-spring-or-not-to-spring",
    user: "raphaelsalaja",
    repo: "userinterface-wiki",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/userinterface-wiki/main/skills/to-spring-or-not-to-spring/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/userinterface-wiki/blob/main/skills/to-spring-or-not-to-spring/SKILL.md",
  },
  {
    slug: "sounds-on-the-web",
    user: "raphaelsalaja",
    repo: "userinterface-wiki",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/userinterface-wiki/main/skills/sounds-on-the-web/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/userinterface-wiki/blob/main/skills/sounds-on-the-web/SKILL.md",
  },
  */
  {
    slug: "design-lab",
    user: "0xdesign",
    repo: "design-plugin",
    rawUrl:
      "https://raw.githubusercontent.com/0xdesign/design-plugin/main/design-and-refine/skills/design-lab/SKILL.md",
    githubUrl:
      "https://github.com/0xdesign/design-plugin/blob/main/design-and-refine/skills/design-lab/SKILL.md",
    name: "design-lab",
    description:
      "Interactive design exploration workflow: conduct interviews, generate variants, and refine UI designs through feedback.",
  },
];
