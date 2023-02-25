import {defineCliConfig} from 'sanity/cli'

const projectId = "vi9mlibn"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  }
})
