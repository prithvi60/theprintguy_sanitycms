import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'theprintguy',

  projectId: '1r2u8x1p',
  dataset: 'adminpanel',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
