export type Category = 'Wholesaling' | 'Creative Finance' | 'Agent Outreach' | 'Foreclosure';

export type SectionType = 'text' | 'list' | 'condition' | 'numbered' | 'heading';

export interface ScriptSection {
  id: string;
  type: SectionType;
  title?: string;
  content?: string;
  items?: string[];
  condition?: {
    trigger: string;
    response: string;
  };
  timing?: string;
}

export interface ScriptContent {
  sections: ScriptSection[];
}

export interface SavedScript {
  id: string;
  name: string;
  content: ScriptContent;
  category: Category;
  teamId: string;
  memberstackId: string;
  createdAt: string;
  updatedAt: string;
  isPrimary?: boolean;
}

export interface ScriptEditorProps {
  script: SavedScript | null;
  onSave: (script: SavedScript) => Promise<void>;
  onCancel: () => void;
}

export interface ScriptDisplayProps {
  script: SavedScript;
  onEdit?: () => void;
}
