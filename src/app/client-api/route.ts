import {
  ApiReference,
  ApiReferenceOptions,
} from "@scalar/nextjs-api-reference";

const config: ApiReferenceOptions = {
  theme: "elysiajs",
  darkMode: true,
  favicon: "https://oladigital.health/wp-content/uploads/favicon.png",
  metaData:{
    title: "Ola MD Client API",
    description: "Client API description",
  },
  spec: {
    url: "/specs/client-api.yml",
  },
};

export const GET = ApiReference(config);
