import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  role?: string
}

const Email = ({ name, role }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We have received your enquiry — Aegis Global Recruitment Agency</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>AEGIS GLOBAL RECRUITMENT AGENCY</Text>
        <Heading style={heading}>Thank you for your enquiry</Heading>
        <Text style={text}>{name ? `Hi ${name},` : 'Hi there,'}</Text>
        <Text style={text}>
          We have received your enquiry{role ? ` about ${role} opportunities` : ''}. Our Nairobi team
          reviews every submission and will get back to you within one working day.
        </Text>
        <Text style={text}>
          If your enquiry is urgent, you can reach us on WhatsApp at +254 716 534 393.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Aegis Global Recruitment Agency · Westlands, Nairobi, Kenya · linkedin@mywork.co.ke
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'We have received your enquiry',
  displayName: 'Enquiry confirmation (candidate)',
  previewData: { name: 'Jane', role: 'Caregiver' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const eyebrow = { fontSize: '11px', letterSpacing: '2px', color: '#D91425', fontWeight: 700, margin: '0 0 6px' }
const heading = { fontSize: '22px', color: '#121212', margin: '0 0 14px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '24px', margin: '0 0 14px' }
const hr = { borderColor: '#e6e6e6', margin: '22px 0 14px' }
const footer = { fontSize: '12px', color: '#8a8a8a', lineHeight: '20px', margin: '0' }
