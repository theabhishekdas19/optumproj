export interface MemberInfo {
  name: string;
  dateOpened: string;
  dob: string;
  phone: string;
  address: string;
}

export interface Diagnosis {
  diagnosis: string;
  conditions: string[];
  recentChanges: string;
}

export interface Benefits {
  groupId: string;
  group: string;
  benefitId: string;
  planNumber: string;
  enrollmentStatus: string;
  employeeDependent: string;
  program: string;
  programType: string;
}

export interface MedicalHistory {
  historyPoints: string[];
  labResults: string;
  clinicalEvents: string;
  socialConcerns: string;
  safetyConcerns: string;
}

export interface Medications {
  currentMedications: string[];
  adherenceStatus: string;
  recentChanges: string;
}

export interface Care {
  planStatus: string;
  treatmentUpdates: string;
  providers: string[];
  lastVisit: string;
  nextVisit: string;
  recommendations: string;
}

export interface Notes {
  summary: string;
  caseNotes: string;
  contactMethod: string;
  language: string;
}

export interface MedicalData {
  memberInfo: MemberInfo;
  diagnosis: Diagnosis;
  benefits: Benefits;
  medicalHistory: MedicalHistory;
  medications: Medications;
  care: Care;
  notes: Notes;
}

export interface SectionField {
  label: string;
  value: string;
}

export interface Section {
  title: string;
  fields: SectionField[];
}
