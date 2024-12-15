'use client';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { List, ListItem, Typography } from '@mui/material';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { DndWrapper } from '../../DndWrapper';

const DzBasic = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: FileWithPath) => (
    <ListItem key={file.path} sx={{ width: 'auto', mr: 1 }}>
      {file.path} - {file.size} bytes
    </ListItem>
  ));

  return (
    <JumboCard title={'Basic Example'} contentWrapper contentSx={{ pt: 0 }}>
      <Div sx={{ flex: 1 }}>
        <DndWrapper>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography variant={'body1'}>
              {`Drag 'n' drop some files here, or click to select files`}
            </Typography>
          </div>
        </DndWrapper>
        <Typography variant={'h4'}>Files</Typography>
        <List disablePadding sx={{ display: 'flex' }}>
          {files}
        </List>
      </Div>
    </JumboCard>
  );
};

export { DzBasic };
