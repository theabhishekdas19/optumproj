// src/components/CombinedSectionsTable.tsx
import React from 'react';
import {
  UserIcon,
  ClipboardDocumentListIcon,
  IdentificationIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import { MedicalData, Section } from '../types/medical';

interface Props {
  data: MedicalData;
}

const sectionMeta = [
  {
    key: 'Member Information',
    icon: <UserIcon className="w-5 h-5 text-blue-700 mr-2" />,
    showEdit: true,
  },
  {
    key: 'Diagnosis & Conditions',
    icon: <ClipboardDocumentListIcon className="w-5 h-5 text-blue-700 mr-2" />,
    showEdit: true,
  },
  {
    key: 'Benefits',
    icon: <IdentificationIcon className="w-5 h-5 text-blue-700 mr-2" />,
    showEdit: false,
  },
  {
    key: 'Medical History',
    icon: <BeakerIcon className="w-5 h-5 text-blue-700 mr-2" />,
    showEdit: false,
  },
  {
    key: 'Medications',
    icon: <ClipboardIcon className="w-5 h-5 text-blue-700 mr-2" />,
    showEdit: true,
  },
  {
    key: 'Care',
    icon: <ClipboardDocumentCheckIcon className="w-5 h-5 text-blue-700 mr-2" />,
    showEdit: false,
  },
  {
    key: 'Notes',
    icon: <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-700 mr-2" />,
    showEdit: false,
  },
];

function getSectionMeta(title: string) {
  return sectionMeta.find((s) => s.key === title) || { icon: null, showEdit: false };
}

const CombinedSectionsTable: React.FC<Props> = ({ data }) => {
  if (!data || !data.memberInfo) return null;

  const sections: Section[] = [
    {
      title: 'Member Information',
      fields: [
        { label: 'Member', value: data.memberInfo.name },
        { label: 'Date Opened', value: data.memberInfo.dateOpened },
        { label: 'Date of Birth', value: data.memberInfo.dob },
        { label: 'Phone Number', value: data.memberInfo.phone },
        { label: 'Address', value: data.memberInfo.address },
      ],
    },
    {
      title: 'Diagnosis & Conditions',
      fields: [
        {
          label: 'Diagnosis',
          value: (
            <a
              href="#"
              className="text-blue-700 underline hover:text-blue-900"
            >
              {data.diagnosis.diagnosis}
            </a>
          ),
        },
        {
          label: 'Conditions',
          value: (
            <a
              href="#"
              className="text-blue-700 underline hover:text-blue-900"
            >
              {data.diagnosis.conditions.join(', ')}
            </a>
          ),
        },
        { label: 'Recent Changes', value: data.diagnosis.recentChanges },
      ],
    },
    {
      title: 'Benefits',
      fields: [
        { label: 'Group ID', value: data.benefits.groupId },
        { label: 'Group', value: data.benefits.group },
        { label: 'Benefit ID', value: data.benefits.benefitId },
        { label: 'Plan Number', value: data.benefits.planNumber },
        { label: 'Enrollment Status', value: data.benefits.enrollmentStatus },
        { label: 'Employee/Dependent', value: data.benefits.employeeDependent },
        { label: 'Program', value: data.benefits.program },
        { label: 'Program Type', value: data.benefits.programType },
      ],
    },
    {
      title: 'Medical History',
      fields: [
        {
          label: 'History',
          value: (
            <ul className="list-disc pl-4">
              {data.medicalHistory.historyPoints.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ),
        },
        { label: 'Lab Results', value: data.medicalHistory.labResults },
        { label: 'Clinical Events', value: data.medicalHistory.clinicalEvents },
        { label: 'Social Concerns', value: data.medicalHistory.socialConcerns },
        { label: 'Safety Concerns', value: data.medicalHistory.safetyConcerns },
      ],
    },
    {
      title: 'Medications',
      fields: [
        {
          label: 'Current Medications',
          value: (
            <a
              href="#"
              className="text-blue-700 underline hover:text-blue-900"
            >
              {data.medications.currentMedications.join(', ')}
            </a>
          ),
        },
        { label: 'Adherence Status', value: data.medications.adherenceStatus },
        { label: 'Recent Changes', value: data.medications.recentChanges },
      ],
    },
    {
      title: 'Care',
      fields: [
        { label: 'Care Plan Status', value: data.care.planStatus },
        { label: 'Treatment Updates', value: data.care.treatmentUpdates },
        { label: 'Providers', value: data.care.providers.join(', ') },
        { label: 'Last Visit', value: data.care.lastVisit },
        { label: 'Next Visit', value: data.care.nextVisit },
        { label: 'Recommendations', value: data.care.recommendations },
      ],
    },
    {
      title: 'Notes',
      fields: [
        { label: 'Summary', value: data.notes.summary },
        { label: 'Case Notes', value: data.notes.caseNotes },
        { label: 'Contact Method', value: data.notes.contactMethod },
        { label: 'Language', value: data.notes.language },
      ],
    },
  ];

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg border border-gray-100">
      <table className="w-full border-collapse">
        <tbody>
          {sections.map((section, sIdx) => {
            const { icon, showEdit } = getSectionMeta(section.title);
            return (
              <React.Fragment key={sIdx}>
                {/* Section Header */}
                <tr>
                  <td
                    colSpan={2}
                    className="bg-[#e3f2fa] font-semibold text-blue-900 px-4 py-2 border-b border-gray-200 text-[1.05rem]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {icon}
                        <span>{section.title}</span>
                      </div>
                      {showEdit && (
                        <button className="inline-flex items-center text-blue-700 text-xs hover:underline">
                          <PencilSquareIcon className="w-4 h-4 mr-1" />Edit
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
                {/* Section Fields */}
                {section.fields.map((field, fIdx) => (
                  <tr key={fIdx}>
                    <td className="border-b border-r border-gray-300 px-4 py-2 font-medium text-gray-800 align-top w-1/3">
                      {field.label}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-gray-700">
                      {typeof field.value === 'string' || typeof field.value === 'number'
                        ? field.value
                        : field.value}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CombinedSectionsTable;
