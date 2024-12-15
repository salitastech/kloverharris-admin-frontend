import Grid from '@mui/material/Grid2';

export interface GridViewProps<T> {
  dataSource: T[];
  renderItem: React.ElementType;
}

function GridView<T>({ dataSource, renderItem }: GridViewProps<T>) {
  let Component = renderItem;
  return (
    <Grid container spacing={3.75}>
      {dataSource.map((item, index) => (
        <Component item={item} key={index} />
      ))}
    </Grid>
  );
}

export { GridView };
