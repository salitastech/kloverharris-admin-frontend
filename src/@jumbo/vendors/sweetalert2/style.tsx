// A style sheet
import {css} from "@emotion/css";
import { useJumboTheme } from '@jumbo/components/JumboTheme/hooks';

export const useStyles = () => {

  const {theme} = useJumboTheme()

  return ({
  container: css({
    zIndex: 1200,
  }),
  popup: css({
    width: '24em',
    overflow: 'hidden',
    borderRadius: 8,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  }),
  title: css({
    fontSize: '1.5rem',
    fontWeight: '400',
    color: theme.typography.h1.color,
  }),
  closeButton: css({
    color: theme.palette.text.primary,

    '&:focus': {
      boxShadow: 'none',
    },
    '&:hover': {
      color: theme.typography.h1.color,
    },
  }),
  image: css({
    margin: theme.spacing(0, 'auto', 2),
  }),
  htmlContainer: css({
    fontSize: '1rem',
    lineHeight: 1.5,
    margin: theme.spacing(1, 3, 0.5),

    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  }),
  confirmButton: css({
    border: 0,
    margin: '.3125em',
    cursor: 'pointer',
    color: theme.palette.common.white,
    boxSizing: 'border-box',
    fontSize: '0.875rem',
    lineHeight: 1.75,
    padding: theme.spacing(0.75, 2),
    borderRadius: 4,
    fontFamily: 'inherit',
    backgroundColor: theme.palette.primary.main,

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  denyButton: css({
    border: 0,
    margin: '.3125em',
    cursor: 'pointer',
    color: theme.palette.common.white,
    boxSizing: 'border-box',
    fontSize: '0.875rem',
    lineHeight: 1.75,
    padding: theme.spacing(0.75, 2),
    borderRadius: 4,
    fontFamily: 'inherit',
    backgroundColor: theme.palette.error.main,

    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  }),
  cancelButton: css({
    border: 0,
    margin: '.3125em',
    cursor: 'pointer',
    color: theme.palette.common.white,
    boxSizing: 'border-box',
    fontSize: '0.875rem',
    lineHeight: 1.75,
    padding: theme.spacing(0.75, 2),
    borderRadius: 4,
    fontFamily: 'inherit',
    backgroundColor: theme.palette.grey[600],

    '&:hover, &:focus, &:active': {
      backgroundColor: theme.palette.grey[700],
    },
  }),
  footer: css({
    marginTop: '1.5rem',
    fontSize: '.875rem',
    borderColor: theme.palette.divider,
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  }),
})
};
