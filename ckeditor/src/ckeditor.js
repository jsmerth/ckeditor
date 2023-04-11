/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PresenceList from '@ckeditor/ckeditor5-real-time-collaboration/src/presencelist.js';
import RealTimeCollaborativeComments from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments.js';
import RealTimeCollaborativeEditing from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting.js';
import RealTimeCollaborativeRevisionHistory from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativerevisionhistory.js';
import RealTimeCollaborativeTrackChanges from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges.js';
import Comments from '@ckeditor/ckeditor5-comments/src/comments.js';
import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges.js';
import RevisionHistory from '@ckeditor/ckeditor5-revision-history/src/revisionhistory.js';

class Editor extends InlineEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autosave,
	CloudServices,
	Essentials,
	Paragraph,
	PresenceList,
	RealTimeCollaborativeComments,
	RealTimeCollaborativeEditing,
	RealTimeCollaborativeRevisionHistory,
	RealTimeCollaborativeTrackChanges,
	Comments,
	TrackChanges,
	RevisionHistory
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'comment',
			'revisionHistory',
			'trackChanges'
		]
	},
	language: 'en',
	comments: {
		editorConfig: {
			extraPlugins: [
			]
		}
	}
};

export default Editor;
