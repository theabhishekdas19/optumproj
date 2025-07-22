import React from 'react';
import MemberHeader from './components/MemberHeader';
import CombinedSectionsTable from './components/CombinedSectionsTable';
import { sampleMedicalData } from './data/sampleMedicalData';

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg">
        <MemberHeader />
        <div className="p-6">
          <CombinedSectionsTable data={sampleMedicalData} />
        </div>
      </div>
    </main>
  </div>
);

export default App;
