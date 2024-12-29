export type Category = 'Wholesaling' | 'Creative Finance' | 'Agent Outreach' | 'Foreclosure';

export interface CategoryData {
  type: Category;
  title: string;
  description: string;
}

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

export interface FormattingToolbarProps {
  editorRef: React.RefObject<HTMLDivElement>;
  onRevert: () => void;
  hasChanges: boolean;
}

export interface ScriptDisplayProps {
  script: SavedScript;
  onEdit?: () => void;
}

export interface CategorySelectorProps {
  onSelect: (category: Category) => void;
  selectedCategory?: Category | null;
}

export interface Template {
    id: string;
    title: string;
    preview: string;
    fullScript: string;
    content: ScriptContent;
    category: Category;
}
