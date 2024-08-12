export interface TaskSection {
  id?: string;
  title?: string;
  description?: string;
}

export interface TaskList {
  id?: string;
  title?: string;
  description?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  limit_at: Date;
  time_start: string;
  time_end: string;
  status: 'backlog' | 'progress' | 'blocked' | 'completed' | 'canceled' | 'excluded';
  priority?: 'urgent_important' | 'urgent_not_important' | 'non_urgent_important' | 'non_urgent_not_important';
  section?: TaskSection;
  list?: TaskList;
  subtasks?: Omit<Task, 'section' | 'list'>[];
}
