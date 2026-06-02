import { defineType, defineField } from 'sanity'

const testimonial = defineType({
  name: 'testimonial',
  title: 'Opinia',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Imię i nazwisko', type: 'string' }),
    defineField({ name: 'role', title: 'Stanowisko', type: 'string' }),
    defineField({ name: 'quote', title: 'Cytat', type: 'text' }),
    defineField({ name: 'ytId', title: 'YouTube Video ID', type: 'string' }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'role' } },
})

const settings = defineType({
  name: 'settings',
  title: 'Ustawienia strony',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tytuł strony', type: 'string' }),
    defineField({ name: 'description', title: 'Opis', type: 'text' }),
    defineField({ name: 'convertkitFormId', title: 'ConvertKit Form ID', type: 'string' }),
    defineField({ name: 'emailContact', title: 'E-mail kontaktowy', type: 'string' }),
  ],
})

export const schemaTypes = [testimonial, settings]
