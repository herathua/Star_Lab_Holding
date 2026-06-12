/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RequestBriefModal from './components/RequestBriefModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <RequestBriefModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
// Apache-2.0