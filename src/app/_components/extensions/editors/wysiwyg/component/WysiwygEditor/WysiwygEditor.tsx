'use client';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
/** todo Editor props defined any */
let Editor: any = () => <React.Fragment />;

const styleOptions = {
  width: '100%',
  minHeight: 100,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'lightgray',
};
const WysiwygEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  React.useEffect(() => {
    Editor = require('react-draft-wysiwyg').Editor;
    setEditorState(EditorState.createEmpty());
  }, []);

  return (
    <JumboCard
      title={'WYSIWYG'}
      contentWrapper
      contentSx={{
        backgroundColor: 'background.paper',
      }}
    >
      <Div sx={{ flex: 1 }}>
        <Editor
          editorStyle={styleOptions}
          editorState={editorState}
          onEditorStateChange={(editorState: any) =>
            setEditorState(editorState)
          }
        />
        <textarea
          style={{ width: '100%', height: 200 }}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </Div>
    </JumboCard>
  );
};

export { WysiwygEditor };
