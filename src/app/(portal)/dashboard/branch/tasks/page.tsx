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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
            Quality Assurance & Daily Milestones
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-0.5">
            Site Task Execution & Snag Defect QC Tracker
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Task percentage tracking, inspection checklists, and snag logging with camera proofs.
          </p>
        </div>

        <button
          onClick={() => setIsSnagModalOpen(true)}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2 self-start sm:self-auto"
        >
          <Camera className="w-4 h-4" />
          <span>+ Log Quality Snag (Camera)</span>
        </button>
      </div>

      {/* 2-Column: Task Checklist Board & Snags Defect Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Task Board */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-white">Daily Staging & Pour Checklists</h2>
            <span className="text-xs text-slate-400">{tasks.length} Active Tasks</span>
          </div>

          {/* Inline Quick Add Task */}
          <form onSubmit={handleCreateTask} className="p-3 bg-slate-950 border border-slate-800 rounded-2xl flex flex-wrap gap-2 text-xs">
            <input
              type="text"
              required
              placeholder="Enter new site task or milestone..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="flex-1 min-w-[200px] px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-orange-500"
            />
            <select
              value={newTaskCategory}
              onChange={(e) => setNewTaskCategory(e.target.value)}
              className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
            >
              <option value="CASTING">Casting</option>
              <option value="SHUTTERING">Shuttering</option>
              <option value="SCAFFOLDING">Scaffolding</option>
              <option value="INSPECTION">Inspection</option>
              <option value="SAFETY">Safety</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold shadow-md"
            >
              Add Task
            </button>
          </form>

          {/* Tasks List */}
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                      {task.category}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{task.title}</h4>
                    {task.description && (
                      <p className="text-xs text-slate-400 mt-1">{task.description}</p>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      task.status === 'COMPLETED'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-orange-950 text-orange-400 border border-orange-800'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                {/* Progress Bar & Slider */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Lead: <strong>{task.assignedToName}</strong> (Due {task.dueDate})</span>
                    <span className="font-mono font-bold text-emerald-400">{task.progressPercent}% Complete</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={5}
                      value={task.progressPercent}
                      onChange={(e) => handleUpdateProgress(task.id, parseInt(e.target.value))}
                      className="w-full accent-orange-500 cursor-pointer"
                    />
                    {task.progressPercent < 100 && (
                      <button
                        onClick={() => handleUpdateProgress(task.id, 100)}
                        className="px-2 py-1 bg-slate-900 hover:bg-emerald-600 hover:text-white text-slate-400 rounded-lg text-[10px] font-bold border border-slate-800 transition shrink-0"
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
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Quality Snags & Defects</h2>
              <p className="text-[11px] text-slate-400">Camera-verified site issues</p>
            </div>
            <button
              onClick={() => setIsSnagModalOpen(true)}
              className="text-xs text-red-400 font-bold hover:underline"
            >
              + Log Snag
            </button>
          </div>

          <div className="space-y-4">
            {snags.map((snag) => (
              <div
                key={snag.id}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] text-red-400 font-bold bg-red-950/60 px-2 py-0.5 rounded border border-red-800">
                    {snag.snagNumber}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                      snag.status === 'RESOLVED'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-red-950 text-red-400 border border-red-800 animate-pulse'
                    }`}
                  >
                    ● {snag.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm">{snag.title}</h4>
                  <p className="text-slate-400 text-xs mt-1">{snag.description}</p>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {snag.photoUrl && (
                    <img
                      src={snag.photoUrl}
                      alt="Proof"
                      className="w-14 h-14 rounded-xl object-cover border border-slate-700"
                    />
                  )}
                  <div className="text-[11px] text-slate-400 space-y-0.5 flex-1">
                    <p>Location: <strong className="text-slate-200">{snag.location}</strong></p>
                    <p>Reported by: {snag.reportedBy?.name}</p>
                  </div>
                </div>

                {snag.status === 'OPEN' && (
                  <button
                    onClick={() => handleResolveSnag(snag.id)}
                    className="w-full py-2 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 rounded-xl text-xs font-bold border border-emerald-800 transition flex items-center justify-center gap-1.5"
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
