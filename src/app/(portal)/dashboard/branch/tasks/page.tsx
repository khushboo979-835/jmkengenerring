'use client';

import React, { useState, useEffect } from 'react';
import {
  ClipboardList,
  Plus,
  AlertTriangle,
  CheckCircle2,
  Camera,
  Layers,
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';
import { AuthUser } from '@/lib/rbac';
import SnagReportModal from '@/components/portal/SnagReportModal';

export default function BranchTasksPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [tasks, setTasks] = useState<any[]>([]);
  const [snags, setSnags] = useState<any[]>([]);
  const [isSnagModalOpen, setIsSnagModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('CASTING');
  const [newTaskAssignee, setNewTaskAssignee] = useState('Manoj Kumar');
  const [newTaskDueDate, setNewTaskDueDate] = useState(
    new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0]
  );
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [uRes, tRes, sRes] = await Promise.all([
        fetch('/api/auth/me'),
        fetch('/api/tasks'),
        fetch('/api/snags'),
      ]);
      const [uData, tData, sData] = await Promise.all([
        uRes.json(),
        tRes.json(),
        sRes.json(),
      ]);
      setUser(uData.user);
      setTasks(tData.tasks || []);
      setSnags(sData.snags || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateProgress = async (id: string, newProgress: number) => {
    const status = newProgress === 100 ? 'COMPLETED' : newProgress > 0 ? 'IN_PROGRESS' : 'PENDING';
    try {
      await fetch('/api/tasks', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, progressPercent: newProgress, status }),
      });
      await loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle) return;

    try {
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTaskTitle,
          category: newTaskCategory,
          branchId: user?.branchId || 'br_delhi',
          branchName: user?.branchName || 'Delhi NCR Depot',
          assignedToName: newTaskAssignee,
          assignedToRole: 'Field Fitter',
          dueDate: newTaskDueDate,
          priority: 'MEDIUM',
        }),
      });
      setNewTaskTitle('');
      await loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleResolveSnag = async (id: string) => {
    try {
      await fetch('/api/snags', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          resolutionNotes: 'Inspection resolved. Flange re-aligned and approved by Site QA.',
        }),
      });
      await loadData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs font-black text-red-600 uppercase tracking-wider block">
            Quality Assurance & Site Execution
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-0.5">
            Site Task Execution & Snag Defect QC Tracker
          </h1>
          <p className="text-xs text-neutral-600 mt-1 font-medium">
            Task percentage tracking, inspection checklists, and snag logging with camera proofs.
          </p>
        </div>

        <button
          onClick={() => setIsSnagModalOpen(true)}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2 self-start sm:self-auto"
        >
          <Camera className="w-4 h-4" />
          <span>+ Log Quality Snag (Camera)</span>
        </button>
      </div>

      {/* 2-Column: Task Checklist Board & Snags Defect Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Task Board */}
        <div className="lg:col-span-7 bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
            <h2 className="text-base font-black text-black">Daily Staging & Pour Checklists</h2>
            <span className="text-xs text-neutral-600 font-bold">{tasks.length} Active Tasks</span>
          </div>

          {/* Inline Quick Add Task */}
          <form onSubmit={handleCreateTask} className="p-3 bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-wrap gap-2 text-xs">
            <input
              type="text"
              required
              placeholder="Enter new site task or milestone..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="flex-1 min-w-[200px] px-3 py-2 bg-white border border-neutral-300 rounded-xl text-black font-medium focus:outline-none focus:border-red-600"
            />
            <select
              value={newTaskCategory}
              onChange={(e) => setNewTaskCategory(e.target.value)}
              className="px-3 py-2 bg-white border border-neutral-300 rounded-xl text-black font-bold text-xs cursor-pointer"
            >
              <option value="CASTING">Casting</option>
              <option value="SHUTTERING">Shuttering</option>
              <option value="SCAFFOLDING">Scaffolding</option>
              <option value="INSPECTION">Inspection</option>
              <option value="SAFETY">Safety</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black uppercase tracking-wider shadow-sm transition"
            >
              Add Task
            </button>
          </form>

          {/* Tasks List */}
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 text-xs hover:border-red-300 transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-wider block">
                      {task.category}
                    </span>
                    <h4 className="text-sm font-black text-black mt-0.5">{task.title}</h4>
                    {task.description && (
                      <p className="text-xs text-neutral-600 mt-1 font-medium">{task.description}</p>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-mono font-extrabold px-2 py-0.5 rounded ${
                      task.status === 'COMPLETED'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                {/* Progress Bar & Slider */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[11px] text-neutral-600 font-medium">
                    <span>Lead: <strong className="text-black">{task.assignedToName}</strong> (Due {task.dueDate})</span>
                    <span className="font-mono font-black text-emerald-700">{task.progressPercent}% Complete</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={5}
                      value={task.progressPercent}
                      onChange={(e) => handleUpdateProgress(task.id, parseInt(e.target.value))}
                      className="w-full accent-red-600 cursor-pointer"
                    />
                    {task.progressPercent < 100 && (
                      <button
                        onClick={() => handleUpdateProgress(task.id, 100)}
                        className="px-2.5 py-1 bg-white hover:bg-emerald-600 hover:text-white text-emerald-800 rounded-lg text-[10px] font-extrabold border border-emerald-300 shadow-sm transition shrink-0"
                      >
                        Complete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Snags & Defect QC Tracker */}
        <div className="lg:col-span-5 bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-black">Quality Snags & Defects</h2>
              <p className="text-[11px] text-neutral-600 font-medium">Camera-verified site issues</p>
            </div>
            <button
              onClick={() => setIsSnagModalOpen(true)}
              className="text-xs text-red-600 font-extrabold hover:underline"
            >
              + Log Snag
            </button>
          </div>

          <div className="space-y-4">
            {snags.map((snag) => (
              <div
                key={snag.id}
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 text-xs hover:border-red-300 transition"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] text-red-700 font-black bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    {snag.snagNumber}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-extrabold ${
                      snag.status === 'RESOLVED'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-red-100 text-red-800 border border-red-300 animate-pulse'
                    }`}
                  >
                    ● {snag.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-black text-black text-sm">{snag.title}</h4>
                  <p className="text-neutral-600 text-xs mt-1 font-medium">{snag.description}</p>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {snag.photoUrl && (
                    <img
                      src={snag.photoUrl}
                      alt="Proof"
                      className="w-14 h-14 rounded-xl object-cover border border-neutral-300"
                    />
                  )}
                  <div className="text-[11px] text-neutral-600 space-y-0.5 flex-1 font-medium">
                    <p>Location: <strong className="text-black">{snag.location}</strong></p>
                    <p>Reported by: {snag.reportedBy?.name}</p>
                  </div>
                </div>

                {snag.status === 'OPEN' && (
                  <button
                    onClick={() => handleResolveSnag(snag.id)}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Sign Off Rectification & Close Snag</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Snag Modal */}
      <SnagReportModal
        isOpen={isSnagModalOpen}
        onClose={() => setIsSnagModalOpen(false)}
        user={user}
        onSnagCreated={loadData}
      />
    </div>
  );
}
