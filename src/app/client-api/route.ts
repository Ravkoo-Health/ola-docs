import {
  ApiReference,
  ApiReferenceOptions,
} from "@scalar/nextjs-api-reference";

const config: ApiReferenceOptions = {
  theme: "default",
  forceDarkModeState: "light",
  spec: {
    url: "/specs/client-api.yml",
  },
};

export const GET = ApiReference(config);
