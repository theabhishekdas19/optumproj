import { MedicalData } from '../types/medical';

export const sampleMedicalData: MedicalData = {
  memberInfo: {
    name: 'Sarah Burns',
    dateOpened: '2025-06-15',
    dob: '1960-03-12',
    phone: '(951) 837-4821',
    address: '1234 Maplewood Lane, St. Paul, MN 55104'
  },
  diagnosis: {
    diagnosis: 'Type II Diabetes Mellitus – Uncontrolled',
    conditions: ['Type II Diabetes Mellitus', 'Hypertension'],
    recentChanges: 'None'
  },
  benefits: {
    groupId: 'GRP789456',
    group: 'Medicare Advantage',
    benefitId: 'HL123456789',
    planNumber: 'HLEMP2025',
    enrollmentStatus: 'Enrolled',
    employeeDependent: 'Employee',
    program: 'Chronic Condition Management',
    programType: 'Disease Management'
  },
  medicalHistory: {
    historyPoints: [
      'Chronic A/C high blood pressure, overweight.',
      'Family history of cardiovascular disease.',
      'No hospitalizations in the past year.'
    ],
    labResults: 'A1c = 8.2%, BP = 140/90 mmHg',
    clinicalEvents: '09/17/2024: Uncontrolled blood glucose levels',
    socialConcerns: 'Lack of transportation, Financial constraints',
    safetyConcerns: 'Home safety'
  },
  medications: {
    currentMedications: ['Metformin', 'Lisinopril'],
    adherenceStatus: 'Adherent with medications',
    recentChanges: 'None'
  },
  care: {
    planStatus: 'Outpatient management with PCP and endocrinologist; lifestyle coaching',
    treatmentUpdates: 'No recent updates',
    providers: ['Dr. Emily Tran (PCP)', 'Dr. Raj Patel (Endocrinologist)'],
    lastVisit: '2025-06-08',
    nextVisit: '2025-07-28',
    recommendations: 'Continue current medication regimen and lifestyle modifications'
  },
  notes: {
    summary: 'Case manager attempted initial phone call to member/caregiver and no answer.',
    caseNotes: 'Follow-up',
    contactMethod: 'Phone Call',
    language: 'English'
  }
};
