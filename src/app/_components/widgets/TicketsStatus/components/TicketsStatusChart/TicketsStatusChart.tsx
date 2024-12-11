'use client';
import { FiberManualRecord } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Payload } from 'recharts/types/component/DefaultLegendContent';
import { ticketsStatus } from '../../data';

const ListItemInline = styled(ListItem)(({ theme }) => ({
  width: 'auto',
  display: 'inline-flex',
  padding: theme.spacing(0, 0.5),
}));

const renderLegend = (payload: Payload[] | undefined) => {
  return (
    <List disablePadding>
      {payload?.map((entry, index) => {
        return (
          <ListItemInline key={`item-${index}`}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecord
                sx={{ color: entry.color, fontSize: '10px' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant={'body1'} fontSize={'12px'}>
                  {entry.value}
                </Typography>
              }
            />
          </ListItemInline>
        );
      })}
    </List>
  );
};

export function TicketsStatusChart() {
  return (
    <ResponsiveContainer width='100%' height={240}>
      <PieChart>
        <text
          x='50%'
          className='h1'
          y='50%'
          textAnchor='middle'
          dominantBaseline='middle'
        />
        <Pie
          data={ticketsStatus}
          dataKey='value'
          cx='50%'
          cy='50%'
          innerRadius={45}
          outerRadius={80}
          fill='#8884d8'
        >
          {ticketsStatus.map((item, index) => (
            <Cell key={index} fill={item.color} />
          ))}
        </Pie>
        <Legend
          content={({ payload }) => renderLegend(payload)}
          wrapperStyle={{ position: 'absolute', bottom: -24 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
