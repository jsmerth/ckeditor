declare module '@ckeditor/ckeditor5-react' {
  import InlineEditor from '@ckeditor/ckeditor5-editor-inline';
  import Event from '@ckeditor/ckeditor5-utils/src/eventinfo'
  import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig'
  import * as React from 'react';
  const CKEditor: React.FunctionComponent<{
    disabled?: boolean;
    editor: typeof InlineEditor;
    data?: string;
    id?: string;
    config?: EditorConfig;
    onReady?: (editor: InlineEditor) => void;
    onChange?: (event: Event, editor: InlineEditor) => void;
    onBlur?: (event: Event, editor: InlineEditor) => void;
    onFocus?: (event: Event, editor: InlineEditor) => void;
    onError?: (event: Event, editor: InlineEditor) => void;
  }>
  export { CKEditor };
}