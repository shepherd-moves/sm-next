import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import StudioNavbar from './components/StudioNavbar'
import { myTheme } from './theme'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'sm_studio',
  title: 'Shepherd Moves Studio Back End',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  studio: {
    components:{
      // logo: Logo,
      navbar: StudioNavbar,
    }
  },

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
})
