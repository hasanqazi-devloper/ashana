"use client";
export default function CVModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-10 text-neutral-900 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-black">Close</button>
        
        {/* CV Content */}
        <h2 className="text-3xl font-serif mb-2">Ashanga Silakshana</h2>
        <p className="text-yellow-700 uppercase tracking-widest text-[10px] mb-8">Bakery Demi Chef de partie</p>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold border-b border-neutral-300 pb-2 mb-2">Experience</h4>
            <p className="font-bold">W Dubai - The Palm | 2025 – Present</p>
            <p className="text-sm">Leading artisanal pastry production and mentoring junior chefs.</p>
          </div>
          <div>
            <p className="font-bold">One&Only Resorts | 2021 – 2025</p>
            <p className="text-sm">Managed production of premium lamination and maintained 100% health standards.</p>
          </div>
        </div>

        <a href="/resume.pdf" download className="mt-10 block w-full bg-yellow-600 text-white text-center py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-black transition-all">
          Download PDF
        </a>
      </div>
    </div>
  );
}