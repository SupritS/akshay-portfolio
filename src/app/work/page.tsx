import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Research() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading
        marginBottom="m"
        variant="heading-strong-xl"
        align="center"
      >
        Research
      </Heading>

      <Text
        variant="body-default-l"
        onBackground="neutral-medium"
        align="center"
      >
        My research focuses on advanced polymer composites for aerospace
        applications, including Carbon Fiber Reinforced Thermoplastics
        (CFRTP), Carbon Fiber Reinforced Vitrimer Epoxy (CFRvE),
        self-healing materials, interface engineering, nanomaterials,
        and multifunctional composite systems.
      </Text>

      <Projects />
    </Column>
  );
}