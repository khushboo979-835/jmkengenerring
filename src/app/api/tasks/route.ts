import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const branchId = searchParams.get('branchId') || undefined;
    const tasks = dataStore.getTasks(branchId);
    return NextResponse.json({ tasks });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, branchId, branchName, assignedToName, assignedToRole, dueDate, priority, category } = body;

    if (!title || !branchId || !assignedToName || !dueDate) {
      return NextResponse.json({ error: 'Missing required task fields' }, { status: 400 });
    }

    const newTask = dataStore.addTask({
      title,
      description,
      branchId,
      branchName: branchName || 'Branch Depot',
      assignedToName,
      assignedToRole,
      dueDate,
      priority: priority || 'MEDIUM',
      status: 'PENDING',
      progressPercent: 0,
      category: category || 'CASTING',
    });

    return NextResponse.json({ success: true, task: newTask }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, progressPercent, status } = body;

    if (!id || progressPercent === undefined || !status) {
      return NextResponse.json({ error: 'Missing id, progressPercent, or status' }, { status: 400 });
    }

    const updated = dataStore.updateTaskProgress(id, Number(progressPercent), status);
    return NextResponse.json({ success: true, task: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
