import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schema'

export default defineConfig({
  projectId: 'khvta4ou',
  dataset: 'production',
  basePath: '/studio',
  title: 'Krzysztof Wnęk',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
