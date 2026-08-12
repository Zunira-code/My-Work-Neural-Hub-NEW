import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  phone?: string
  iam?: string
  role?: string
  message?: string
}

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Section style={row}>
    <Text style={labelStyle}>{label}</Text>
    <Text style={valueStyle}>{value || '—'}</Text>
  </Section>
)

const Email = ({ name, email, phone, iam, role, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New website enquiry from ${name || 'a visitor'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>AEGIS GLOBAL RECRUITMENT AGENCY</Text>
        <Heading style={heading}>New website enquiry</Heading>
        <Text style={intro}>
          Someone submitted the enquiry form on your website. Reply directly to get in touch.
        </Text>
        <Hr style={hr} />
        <Row label="Full name" value={name} />
        <Row label="Email" value={email} />
        <Row label="Phone / WhatsApp" value={phone} />
        <Row label="I am a" value={iam} />
        <Row label="Role of interest" value={role} />
        <Hr style={hr} />
        <Text style={labelStyle}>Message</Text>
        <Text style={messageStyle}>{message || 'No message provided.'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'New website enquiry',
  displayName: 'Enquiry notification (team)',
  previewData: {
    name: 'Jane Wanjiku',
    email: 'jane@example.com',
    phone: '+254 700 000 000',
    iam: 'Job seeker',
    role: 'Caregiver',
    message: 'I would like to apply for caregiver placements abroad.',
  },
  to: 'linkedin@mywork.co.ke',
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '28px 26px', maxWidth: '560px' }
const eyebrow = { fontSize: '11px', letterSpacing: '2px', color: '#D91425', fontWeight: 700, margin: '0 0 6px' }
const heading = { fontSize: '22px', color: '#121212', margin: '0 0 8px' }
const intro = { fontSize: '14px', color: '#4a4a4a', lineHeight: '22px', margin: '0' }
const hr = { borderColor: '#e6e6e6', margin: '20px 0' }
const row = { margin: '0 0 12px' }
const labelStyle = { fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#8a8a8a', margin: '0 0 2px' }
const valueStyle = { fontSize: '15px', color: '#121212', fontWeight: 600, margin: '0' }
const messageStyle = { fontSize: '15px', color: '#121212', lineHeight: '24px', whiteSpace: 'pre-wrap' as const, margin: '4px 0 0' }
