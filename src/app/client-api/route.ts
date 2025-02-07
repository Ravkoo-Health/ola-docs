import {
  ApiReference,
  ApiReferenceOptions,
} from "@scalar/nextjs-api-reference";

const config: ApiReferenceOptions = {
  theme: "default",
  forceDarkModeState: "light",
  hideDarkModeToggle: true,
  metaData:{
    title: "Ola MD Client API",
    description: "Client API description",
  },
  spec: {
    url: "/specs/client-api.yml",
  },
};

export const GET = ApiReference(config);
